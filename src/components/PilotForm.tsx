import { useState, type FormEvent } from "react";

/**
 * Pilot interest form.
 *
 * NOTE — DEMO SUBMISSION ONLY: no real backend is connected in this build.
 * Values are validated in the browser and, on success, held in local
 * component state only. Nothing is sent to or stored on any server.
 * Replace handleSubmit with a real endpoint (server function / webhook)
 * before wiring this to live prospects.
 */

type Fields = {
  businessName: string;
  contactName: string;
  email: string;
  phone: string;
  website: string;
  city: string;
  callsPerWeek: string;
  notes: string;
};

type Errors = Partial<Record<keyof Fields, string>>;

const EMPTY: Fields = {
  businessName: "",
  contactName: "",
  email: "",
  phone: "",
  website: "",
  city: "",
  callsPerWeek: "",
  notes: "",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^[+0-9][0-9\s\-()]{6,}$/;
const URL_RE = /^(https?:\/\/)?([\w-]+\.)+[a-z]{2,}(\/\S*)?$/i;

function validate(fields: Fields): Errors {
  const errors: Errors = {};
  if (!fields.businessName.trim()) errors.businessName = "Please enter your business name.";
  if (!fields.contactName.trim()) errors.contactName = "Please enter a contact name.";
  if (!fields.email.trim()) errors.email = "Please enter an email address.";
  else if (!EMAIL_RE.test(fields.email.trim())) errors.email = "That email doesn't look right.";
  if (!fields.phone.trim()) errors.phone = "Please enter a phone number.";
  else if (!PHONE_RE.test(fields.phone.trim())) errors.phone = "That phone number doesn't look right.";
  if (!fields.city.trim()) errors.city = "Please enter your town or city.";
  if (fields.website.trim() && !URL_RE.test(fields.website.trim()))
    errors.website = "That website address doesn't look right.";
  return errors;
}

const inputClass =
  "w-full rounded-lg border border-input bg-card px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-colors focus:border-ring focus:ring-2 focus:ring-ring/30 aria-[invalid=true]:border-destructive aria-[invalid=true]:ring-destructive/20";

const labelClass = "mb-1.5 block text-sm font-medium text-foreground";

const errorClass = "mt-1.5 text-xs text-destructive";

export function PilotForm() {
  const [fields, setFields] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  const set = (key: keyof Fields) => (value: string) => {
    setFields((f) => ({ ...f, [key]: value }));
    setErrors((e) => (e[key] ? { ...e, [key]: undefined } : e));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(fields);
    setErrors(nextErrors);
    if (Object.values(nextErrors).some(Boolean)) return;
    // Demo submission — see the note at the top of this file.
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-border bg-card p-8 text-center shadow-sm sm:p-10">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-soft">
          <svg
            className="h-6 w-6 text-brand"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </div>
        <h3 className="mt-5 text-xl font-semibold">Thanks — you're on the list.</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          We'll be in touch within one working day to set up your 7-day pilot
          {fields.businessName.trim() ? ` for ${fields.businessName.trim()}` : ""}.
        </p>
        <button
          type="button"
          onClick={() => {
            setFields(EMPTY);
            setSubmitted(false);
          }}
          className="mt-6 text-sm font-medium text-brand underline-offset-4 hover:underline"
        >
          Submit another enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="businessName" className={labelClass}>
            Business name <span className="text-brand">*</span>
          </label>
          <input
            id="businessName"
            type="text"
            autoComplete="organization"
            className={inputClass}
            placeholder="e.g. Smith Plumbing & Heating"
            value={fields.businessName}
            onChange={(e) => set("businessName")(e.target.value)}
            aria-invalid={Boolean(errors.businessName)}
            aria-describedby={errors.businessName ? "businessName-error" : undefined}
          />
          {errors.businessName && (
            <p id="businessName-error" className={errorClass} role="alert">
              {errors.businessName}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="contactName" className={labelClass}>
            Your name <span className="text-brand">*</span>
          </label>
          <input
            id="contactName"
            type="text"
            autoComplete="name"
            className={inputClass}
            placeholder="e.g. James Smith"
            value={fields.contactName}
            onChange={(e) => set("contactName")(e.target.value)}
            aria-invalid={Boolean(errors.contactName)}
            aria-describedby={errors.contactName ? "contactName-error" : undefined}
          />
          {errors.contactName && (
            <p id="contactName-error" className={errorClass} role="alert">
              {errors.contactName}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>
            Email <span className="text-brand">*</span>
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            className={inputClass}
            placeholder="you@business.co.uk"
            value={fields.email}
            onChange={(e) => set("email")(e.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p id="email-error" className={errorClass} role="alert">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone <span className="text-brand">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            className={inputClass}
            placeholder="07xxx xxxxxx or 01xxx xxxxxx"
            value={fields.phone}
            onChange={(e) => set("phone")(e.target.value)}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
          />
          {errors.phone && (
            <p id="phone-error" className={errorClass} role="alert">
              {errors.phone}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="website" className={labelClass}>
            Website <span className="text-muted-foreground">(optional)</span>
          </label>
          <input
            id="website"
            type="url"
            autoComplete="url"
            className={inputClass}
            placeholder="www.yourbusiness.co.uk"
            value={fields.website}
            onChange={(e) => set("website")(e.target.value)}
            aria-invalid={Boolean(errors.website)}
            aria-describedby={errors.website ? "website-error" : undefined}
          />
          {errors.website && (
            <p id="website-error" className={errorClass} role="alert">
              {errors.website}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="city" className={labelClass}>
            Town or city <span className="text-brand">*</span>
          </label>
          <input
            id="city"
            type="text"
            autoComplete="address-level2"
            className={inputClass}
            placeholder="e.g. Leeds"
            value={fields.city}
            onChange={(e) => set("city")(e.target.value)}
            aria-invalid={Boolean(errors.city)}
            aria-describedby={errors.city ? "city-error" : undefined}
          />
          {errors.city && (
            <p id="city-error" className={errorClass} role="alert">
              {errors.city}
            </p>
          )}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="callsPerWeek" className={labelClass}>
            Roughly how many calls do you get a week?
          </label>
          <select
            id="callsPerWeek"
            className={inputClass}
            value={fields.callsPerWeek}
            onChange={(e) => set("callsPerWeek")(e.target.value)}
          >
            <option value="">Select a range</option>
            <option value="under-10">Under 10</option>
            <option value="10-25">10–25</option>
            <option value="25-50">25–50</option>
            <option value="50-plus">More than 50</option>
            <option value="unknown">Not sure</option>
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="notes" className={labelClass}>
            Anything else we should know?{" "}
            <span className="text-muted-foreground">(optional)</span>
          </label>
          <textarea
            id="notes"
            rows={4}
            className={`${inputClass} resize-none`}
            placeholder="e.g. One-man band, lots of evening calls, existing answerphone loses enquiries…"
            value={fields.notes}
            onChange={(e) => set("notes")(e.target.value)}
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring sm:w-auto"
      >
        Request my 7-day pilot
      </button>
      <p className="mt-3 text-xs text-muted-foreground">
        No setup fee. £249/month after the pilot if you keep it — usage limits
        and fair-use terms apply.
      </p>
    </form>
  );
}
