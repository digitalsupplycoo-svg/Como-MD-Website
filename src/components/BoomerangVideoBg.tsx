import { useEffect, useRef, useState } from 'react';

/**
 * Self-hosted, web-optimised copy of the hero video (1280px, fast start, ~1.1MB).
 * Original source:
 * https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260715_090628_7052d8a6-a094-4341-a4a2-ad58493a67a9.mp4
 */
const VIDEO_URL = '/media/hero.mp4';
/** First frame, shown instantly while the video loads. */
const POSTER_URL = '/media/hero-poster.jpg';

/** Captured frames are scaled down to at most this width. */
const MAX_CAPTURE_WIDTH = 960;
/** Ping-pong playback rate. */
const FPS = 30;

/**
 * Phones have far less memory for canvases (iOS Safari caps it), so there we keep
 * every second frame at 640px and play them at half the rate: same motion speed,
 * roughly a quarter of the memory.
 */
const isSmallScreen = () => window.matchMedia('(max-width: 767px)').matches;

type FrameVideo = HTMLVideoElement & {
  requestVideoFrameCallback?: (
    cb: (now: number, metadata: { mediaTime: number }) => void,
  ) => number;
  cancelVideoFrameCallback?: (handle: number) => void;
};

/**
 * Plays the hero video once while capturing every decoded frame to offscreen
 * canvases, then loops those frames forward → reverse on a display canvas.
 */
export default function BoomerangVideoBg() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current as FrameVideo | null;
    const canvas = canvasRef.current;
    if (!video || !canvas) return;

    const small = isSmallScreen();
    const maxWidth = small ? 640 : MAX_CAPTURE_WIDTH;
    const frameStep = small ? 2 : 1;
    const frameInterval = (1000 / FPS) * frameStep;
    let decoded = 0;

    const frames: HTMLCanvasElement[] = [];
    const supportsVFC = typeof video.requestVideoFrameCallback === 'function';
    let capturing = true;
    let lastTime = -1;
    let vfcHandle = 0;
    let captureRaf = 0;
    let playRaf = 0;
    let disposed = false;

    const captureFrame = (mediaTime: number) => {
      const { videoWidth, videoHeight } = video;
      if (!videoWidth || !videoHeight || mediaTime === lastTime) return;
      lastTime = mediaTime;
      if (decoded++ % frameStep !== 0) return;

      const scale = Math.min(1, maxWidth / videoWidth);
      const width = Math.round(videoWidth * scale);
      const height = Math.round(videoHeight * scale);

      const frame = document.createElement('canvas');
      frame.width = width;
      frame.height = height;
      const ctx = frame.getContext('2d');
      if (!ctx) return;
      ctx.drawImage(video, 0, 0, width, height);
      frames.push(frame);
    };

    const scheduleCapture = () => {
      if (!capturing || disposed) return;
      if (supportsVFC) {
        vfcHandle = video.requestVideoFrameCallback!((_now, metadata) => {
          captureFrame(metadata.mediaTime ?? video.currentTime);
          scheduleCapture();
        });
      } else {
        captureRaf = requestAnimationFrame(() => {
          if (!video.paused && !video.ended) captureFrame(video.currentTime);
          scheduleCapture();
        });
      }
    };

    const stopCapture = () => {
      capturing = false;
      if (vfcHandle && video.cancelVideoFrameCallback) video.cancelVideoFrameCallback(vfcHandle);
      cancelAnimationFrame(captureRaf);
    };

    const startPingPong = () => {
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      canvas.width = frames[0].width;
      canvas.height = frames[0].height;

      let index = 0;
      let direction = 1;
      let last = performance.now();
      ctx.drawImage(frames[0], 0, 0);

      const tick = (now: number) => {
        if (disposed) return;
        if (now - last >= frameInterval) {
          // Keep cadence steady even if a frame is late.
          last = now - ((now - last) % frameInterval);
          index += direction;
          if (index >= frames.length - 1) {
            index = frames.length - 1;
            direction = -1;
          } else if (index <= 0) {
            index = 0;
            direction = 1;
          }
          ctx.drawImage(frames[index], 0, 0);
        }
        playRaf = requestAnimationFrame(tick);
      };
      playRaf = requestAnimationFrame(tick);
    };

    const onPlay = () => {
      if (capturing && !vfcHandle && !captureRaf) scheduleCapture();
    };

    const onEnded = () => {
      stopCapture();
      if (disposed) return;
      if (frames.length < 2) {
        // Nothing usable was captured: fall back to a plain looping video.
        video.loop = true;
        void video.play().catch(() => {});
        return;
      }
      startPingPong();
      setReady(true);
    };

    video.addEventListener('play', onPlay);
    video.addEventListener('ended', onEnded);

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) {
      // Hold the first frame instead of animating.
      capturing = false;
      video.pause();
    } else {
      void video.play().catch(() => {
        /* Autoplay blocked: the poster frame stays visible. */
      });
      if (!video.paused) onPlay();
    }

    return () => {
      disposed = true;
      stopCapture();
      cancelAnimationFrame(playRaf);
      video.removeEventListener('play', onPlay);
      video.removeEventListener('ended', onEnded);
      frames.length = 0;
    };
  }, []);

  return (
    <div className="absolute inset-0 z-0" aria-hidden="true">
      <div className="w-full h-full scale-[1.15] origin-top overflow-hidden">
        <video
          ref={videoRef}
          src={VIDEO_URL}
          poster={POSTER_URL}
          muted
          playsInline
          preload="auto"
          crossOrigin="anonymous"
          className="w-full h-full object-cover object-top"
          style={{ display: ready ? 'none' : 'block' }}
        />
        <canvas
          ref={canvasRef}
          className="w-full h-full object-cover object-top"
          style={{ display: ready ? 'block' : 'none' }}
        />
      </div>
    </div>
  );
}
