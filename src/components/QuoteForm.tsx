import { useId, useState, type FormEvent } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { whatsappLink } from '../company';
import { products, type Product } from '../data/products';
import { fill, ui } from '../copy';
import WhatsAppIcon from './WhatsAppIcon';

type Fields = {
  product: string;
  name: string;
  company: string;
  phone: string;
  location: string;
  quantity: string;
  date: string;
  notes: string;
};

type Errors = Partial<Record<'name' | 'phone', string>>;

const ANY = 'any';

/**
 * Quote request form. On submit it opens WhatsApp with a ready message that names the product
 * and includes everything the visitor filled in. With `product` set, the product is fixed;
 * otherwise the visitor picks one (or "several items").
 */
export default function QuoteForm({ product, id = 'quote' }: { product?: Product; id?: string }) {
  const f = ui.form;
  const uid = useId();
  const [fields, setFields] = useState<Fields>({
    product: product?.slug ?? ANY,
    name: '',
    company: '',
    phone: '',
    location: '',
    quantity: '',
    date: '',
    notes: '',
  });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const set = (key: keyof Fields) => (value: string) => {
    setFields((prev) => ({ ...prev, [key]: value }));
    if (key in errors) setErrors((prev) => ({ ...prev, [key]: undefined }));
    setSent(false);
  };

  const validate = (): Errors => {
    const next: Errors = {};
    const field = (l: string) => l.toLowerCase();
    if (!fields.name.trim()) next.name = fill(f.required, { field: field(f.name) });
    const digits = fields.phone.replace(/\D/g, '');
    if (!fields.phone.trim()) next.phone = fill(f.required, { field: field(f.phone) });
    else if (digits.length < 7 || digits.length > 15) next.phone = f.phoneInvalid;
    return next;
  };

  const productLabel = () => {
    const chosen = products.find((p) => p.slug === fields.product);
    return chosen ? chosen.name : f.productAny;
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const next = validate();
    setErrors(next);
    const firstInvalid = (['name', 'phone'] as const).find((k) => next[k]);
    if (firstInvalid) {
      document.getElementById(`${uid}-${firstInvalid}`)?.focus();
      return;
    }

    const line = (label: string, value: string) => (value.trim() ? `${label}: ${value.trim()}` : null);
    const message = [
      `${f.msgTitle}: ${productLabel()}`,
      '',
      line(f.name, fields.name),
      line(f.company, fields.company),
      line(f.phone, fields.phone),
      line(f.location, fields.location),
      line(f.quantity, fields.quantity),
      line(f.date, fields.date),
      line(f.notes, fields.notes),
      '',
      `(${f.msgFooter})`,
    ]
      .filter((l) => l !== null)
      .join('\n');

    window.open(whatsappLink(message), '_blank', 'noopener');
    setSent(true);
  };

  const input =
    'mt-1.5 block w-full rounded-lg border border-gray-300 bg-white px-3.5 py-2.5 text-sm text-[#191919] placeholder:text-[#191919]/35 focus:border-[#191919] focus:outline-none focus:ring-1 focus:ring-[#191919]';
  const label = 'block text-sm font-medium text-[#191919]';
  const optional = <span className="font-normal text-[#191919]/45"> ({f.optional})</span>;

  const text = (key: keyof Fields, labelText: string, opts: { required?: boolean; type?: string; hint?: string; autoComplete?: string; inputMode?: 'tel' | 'text' } = {}) => {
    const err = key === 'name' || key === 'phone' ? errors[key] : undefined;
    return (
      <div>
        <label htmlFor={`${uid}-${key}`} className={label}>
          {labelText}
          {!opts.required && optional}
        </label>
        <input
          id={`${uid}-${key}`}
          name={key}
          type={opts.type ?? 'text'}
          value={fields[key]}
          onChange={(e) => set(key)(e.target.value)}
          placeholder={opts.hint}
          autoComplete={opts.autoComplete}
          inputMode={opts.inputMode}
          required={opts.required}
          aria-invalid={err ? true : undefined}
          aria-describedby={err ? `${uid}-${key}-error` : undefined}
          className={`${input} ${err ? 'border-red-600' : ''}`}
        />
        {err && (
          <p id={`${uid}-${key}-error`} className="mt-1.5 text-sm text-red-700">
            {err}
          </p>
        )}
      </div>
    );
  };

  return (
    <form id={id} onSubmit={onSubmit} noValidate className="scroll-mt-24 rounded-xl border border-gray-200 bg-white p-5 sm:p-6 shadow-sm">
      <h2 className="font-serif text-2xl font-normal tracking-tight text-[#191919]">{f.title}</h2>
      <p className="mt-1.5 text-sm text-[#191919]/65">{f.lead}</p>

      <div className="mt-5 grid gap-4">
        {product ? (
          <div className="rounded-lg bg-[#F4F3F3] px-3.5 py-2.5 text-sm">
            <span className="text-[#191919]/60">{f.product}: </span>
            <span className="font-medium text-[#191919]">{product.name}</span>
          </div>
        ) : (
          <div>
            <label htmlFor={`${uid}-product`} className={label}>
              {f.product}
            </label>
            <select
              id={`${uid}-product`}
              name="product"
              value={fields.product}
              onChange={(e) => set('product')(e.target.value)}
              className={input}
            >
              <option value={ANY}>{f.productAny}</option>
              {products.map((p) => (
                <option key={p.slug} value={p.slug}>
                  {p.name}
                </option>
              ))}
            </select>
          </div>
        )}

        {text('name', f.name, { required: true, autoComplete: 'name' })}
        {text('company', f.company, { autoComplete: 'organization' })}
        {text('phone', f.phone, { required: true, type: 'tel', autoComplete: 'tel', inputMode: 'tel' })}
        {text('location', f.location, { hint: f.locationHint })}
        <div className="grid gap-4 sm:grid-cols-2">
          {text('quantity', f.quantity, { hint: f.quantityHint })}
          {text('date', f.date, { type: 'date' })}
        </div>
        <div>
          <label htmlFor={`${uid}-notes`} className={label}>
            {f.notes}
            {optional}
          </label>
          <textarea
            id={`${uid}-notes`}
            name="notes"
            rows={3}
            value={fields.notes}
            onChange={(e) => set('notes')(e.target.value)}
            className={`${input} resize-y`}
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex w-full items-center justify-center gap-2.5 rounded-lg bg-[#191919] px-5 py-3.5 text-sm font-medium text-white hover:bg-[#191919]/90 transition-colors duration-200"
      >
        <WhatsAppIcon className="h-4 w-4" />
        {f.submit}
      </button>

      <p role="status" aria-live="polite" className={sent ? 'mt-4 flex gap-2 rounded-lg bg-[#F4F3F3] p-3 text-sm text-[#191919]' : 'sr-only'}>
        {sent && (
          <>
            <CheckCircle2 aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" />
            {f.sent}
          </>
        )}
      </p>
      <p className="mt-3 text-xs text-[#191919]/50">{f.privacy}</p>
    </form>
  );
}
