import { useEffect, useRef, useState } from 'react';
import { Pause, Play } from 'lucide-react';

/**
 * Hero video, pre-encoded forward then reverse (960px, 20s, ~0.9MB), so a plain loop plays as a boomerang.
 * Made from the original clip with ffmpeg: [0]scale=960:-2,split[a][b];[b]reverse,trim=start_frame=1[r];[a][r]concat.
 */
const VIDEO_URL = '/media/hero-loop.mp4';
/** First frame, shown instantly while the video loads. */
const POSTER_URL = '/media/hero-poster.jpg';

export default function BoomerangVideoBg() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [paused, setPaused] = useState(false);

  // Autoplay unless the visitor asked for reduced motion.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) setPaused(true);
    else void video.play().catch(() => setPaused(true));
  }, []);

  const toggle = () => {
    const video = videoRef.current;
    if (!video) return;
    if (paused) void video.play().then(() => setPaused(false)).catch(() => {});
    else {
      video.pause();
      setPaused(true);
    }
  };

  return (
    <>
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <div className="w-full h-full scale-[1.15] origin-top overflow-hidden">
          <video
            ref={videoRef}
            src={VIDEO_URL}
            poster={POSTER_URL}
            muted
            loop
            playsInline
            preload="auto"
            className="w-full h-full object-cover object-top"
          />
        </div>
      </div>
      <button
        type="button"
        onClick={toggle}
        aria-pressed={paused}
        aria-label="Pause background video"
        className="absolute bottom-5 start-5 z-10 grid h-10 w-10 place-items-center rounded-full bg-white/80 text-[#191919] backdrop-blur-sm hover:bg-white transition-colors duration-200"
      >
        {paused ? <Play aria-hidden="true" className="h-4 w-4" /> : <Pause aria-hidden="true" className="h-4 w-4" />}
      </button>
    </>
  );
}
