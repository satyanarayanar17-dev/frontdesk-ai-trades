import { createFileRoute, Link } from "@tanstack/react-router";
import { PilotForm } from "@/components/PilotForm";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "AI Receptionist for UK Plumbers & Heating Engineers",
      },
      {
        name: "description",
        content:
          "24/7 AI phone receptionist for UK plumbing and heating businesses. Every call answered, every enquiry captured — never lose another job because you couldn't answer the phone. 7-day pilot, £0 setup.",
      },
      {
        property: "og:title",
        content: "AI Receptionist for UK Plumbers & Heating Engineers",
      },
      {
        property: "og:description",
        content:
          "A 24/7 AI receptionist that answers every call for your plumbing or heating business, captures the details, and flags emergencies — so missed calls stop costing you jobs. 7-day pilot, £0 setup.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

/* ---------- Small building blocks ---------- */

function SectionHeading({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-bold sm:text-4xl">{title}</h2>
      {lead && (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">{lead}</p>
      )}
    </div>
  );
}

function CheckIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      className={className}
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
  );
}

function PhoneIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

/* ---------- Page sections ---------- */

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <PhoneIcon className="h-4 w-4" />
          </span>
          <span className="text-sm font-bold tracking-tight sm:text-base">
            FrontDesk{" "}
            <span className="font-medium text-muted-foreground">for Trades</span>
          </span>
        </a>
        <nav className="hidden items-center gap-6 text-sm font-medium text-muted-foreground lg:flex">
          <a href="#pain" className="transition-colors hover:text-foreground">
            The problem
          </a>
          <a href="#how-it-works" className="transition-colors hover:text-foreground">
            How it works
          </a>
          <a href="#features" className="transition-colors hover:text-foreground">
            Features
          </a>
          <a href="#pricing" className="transition-colors hover:text-foreground">
            Pricing
          </a>
          <a href="#faq" className="transition-colors hover:text-foreground">
            FAQ
          </a>
        </nav>
        <a
          href="#pilot"
          className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Join the pilot
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pb-16 pt-14 sm:px-6 sm:pt-20 lg:grid-cols-[1.1fr_0.9fr] lg:pb-24">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-brand-soft px-3 py-1 text-xs font-semibold text-brand-ink">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            Early access — UK plumbing &amp; heating
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] sm:text-5xl lg:text-[3.4rem]">
            Never lose another job because you couldn't answer the phone.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
            A 24/7 AI phone receptionist built for plumbers and heating
            engineers. It answers every call, captures who's calling and what's
            wrong, flags genuine emergencies — and records every call as a
            structured lead ready for follow-up.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#pilot"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Join the 7-day pilot
            </a>
            <a
              href="#example"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-card px-6 py-3.5 text-base font-semibold text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              Hear how it works
            </a>
          </div>
          <p className="mt-5 text-sm text-muted-foreground">
            £0 setup · £249/month after the pilot if you keep it · call forwarding
            from your existing number set up with you during the pilot
          </p>
        </div>

        {/* Illustrative "captured lead" card — a product sketch, not a screenshot */}
        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-3 rounded-3xl bg-brand-soft" aria-hidden="true" />
          <div className="relative rounded-2xl border border-border bg-card p-5 shadow-xl shadow-primary/10">
            <div className="flex items-center justify-between border-b border-border pb-3">
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-soft text-brand">
                  <PhoneIcon className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-sm font-semibold">New enquiry captured</p>
                  <p className="text-xs text-muted-foreground">Tuesday, 21:47</p>
                </div>
              </div>
              <span className="rounded-full bg-destructive/10 px-2.5 py-1 text-[11px] font-semibold text-destructive">
                Urgent
              </span>
            </div>
            <dl className="mt-3 space-y-2.5 text-sm">
              {[
                ["Caller", "Mrs D. Whitfield"],
                ["Phone", "07••• ••• 214"],
                ["Postcode", "LS15 8••"],
                ["Issue", "Boiler leaking, water on kitchen floor"],
                ["Heating", "Off — no hot water either"],
                ["Preferred time", "Call-out ASAP / this evening"],
              ].map(([label, value]) => (
                <div key={label} className="flex gap-3">
                  <dt className="w-28 shrink-0 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    {label}
                  </dt>
                  <dd className="font-medium">{value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 rounded-lg bg-muted px-3 py-2 text-xs leading-relaxed text-muted-foreground">
              Call details captured as a structured lead the moment the call ends.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Pain() {
  const items = [
    {
      title: "You're elbow-deep in a boiler",
      body: "Both hands busy, phone buzzing on the van roof. By the time you're free, they've already booked the next engineer on Google.",
    },
    {
      title: "It's 9pm and the phone keeps ringing",
      body: "Nobody answers evenings or weekends — but that's exactly when a boiler dies. The caller moves on to whoever picks up.",
    },
    {
      title: "You ring back an hour later",
      body: "If you even hear the voicemail. Meanwhile the emergency leak has become someone else's invoice, and the routine job never calls again.",
    },
  ];
  return (
    <section id="pain" className="border-y border-border bg-muted/50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="The missed-call problem"
          title="Every unanswered call is a job handed to a competitor."
          lead="For a small plumbing and heating business, the phone rings while you're working. Most callers won't leave a voicemail — they just call the next company on the list."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <h3 className="text-base font-semibold">{item.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Workflow() {
  const steps = [
    {
      n: "1",
      title: "A customer calls — day, night or weekend",
      body: "When you can't get to your phone, FrontDesk picks up within a couple of rings, around the clock. Your callers never hear an unanswered ringtone again.",
    },
    {
      n: "2",
      title: "It answers like a proper receptionist",
      body: "A natural conversation — no menus, no 'press 1'. It takes the caller's name, phone number, postcode, and what's gone wrong, including boiler make or heating details when they matter.",
    },
    {
      n: "3",
      title: "It sorts emergencies from routine work",
      body: "A leak with water on the floor or no heating in winter gets flagged as urgent. Quotes, servicing and general enquiries are logged as routine, with the caller's preferred appointment times.",
    },
    {
      n: "4",
      title: "You get a clean, structured lead",
      body: "When the call ends, the details are captured as a structured lead — name, number, postcode, issue, urgency and preferred times — with urgent calls flagged for priority follow-up.",
    },
  ];
  return (
    <section id="how-it-works" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="How it works"
          title="Four steps between a ringing phone and a lead you can act on."
        />
        <ol className="mt-12 grid gap-5 sm:grid-cols-2">
          {steps.map((step) => (
            <li
              key={step.n}
              className="flex gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                {step.n}
              </span>
              <div>
                <h3 className="text-base font-semibold leading-snug">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function ExampleCall() {
  const dialogue: { from: "caller" | "ai"; text: string }[] = [
    {
      from: "ai",
      text: "Hello, thanks for calling. How can I help you today?",
    },
    {
      from: "caller",
      text: "Hi — my boiler's leaking. There's water on the kitchen floor.",
    },
    {
      from: "ai",
      text: "I'm sorry to hear that — let me take a few details so the engineer can get to you quickly. Can I start with your name?",
    },
    { from: "caller", text: "Priya Sharma." },
    { from: "ai", text: "Thanks, Priya. What's the best number to reach you on?" },
    { from: "caller", text: "07700 900123." },
    { from: "ai", text: "And your postcode?" },
    { from: "caller", text: "M14 5TQ." },
    {
      from: "ai",
      text: "Is the water coming from the boiler itself, and do you still have heating and hot water?",
    },
    {
      from: "caller",
      text: "It's dripping from underneath the boiler. Heating's off and there's no hot water.",
    },
    {
      from: "ai",
      text: "Understood. I've logged this as urgent — a boiler leak with no heating or hot water. Would a call-out this evening work, or is ASAP better?",
    },
    { from: "caller", text: "ASAP, please." },
    {
      from: "ai",
      text: "I've recorded your details and flagged this as a priority for follow-up. Anything else I can help with?",
    },
    { from: "caller", text: "No, that's great. Thank you." },
  ];
  return (
    <section id="example" className="border-y border-border bg-muted/50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Example call"
          title="What a 21:47 emergency call sounds like."
          lead="A caller with a leaking boiler at night — answered, captured and triaged for follow-up, without anyone lifting a spanner from the phone."
        />
        <div className="mx-auto mt-10 max-w-2xl">
          <p className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            Fictional example — for illustration only
          </p>
          <div className="rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-6">
            <div className="space-y-3">
              {dialogue.map((line, i) => (
                <div
                  key={i}
                  className={
                    line.from === "ai" ? "flex justify-start" : "flex justify-end"
                  }
                >
                  <p
                    className={
                      line.from === "ai"
                        ? "max-w-[85%] rounded-2xl rounded-bl-md bg-muted px-4 py-2.5 text-sm leading-relaxed"
                        : "max-w-[85%] rounded-2xl rounded-br-md bg-primary px-4 py-2.5 text-sm leading-relaxed text-primary-foreground"
                    }
                  >
                    <span className="mb-0.5 block text-[11px] font-semibold uppercase tracking-wide opacity-70">
                      {line.from === "ai" ? "FrontDesk" : "Caller"}
                    </span>
                    {line.text}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-5 flex flex-wrap gap-2 border-t border-border pt-4">
              <span className="rounded-full bg-destructive/10 px-3 py-1 text-xs font-semibold text-destructive">
                Urgent — boiler leak
              </span>
              <span className="rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold text-brand-ink">
                Details captured: name, phone, postcode
              </span>
              <span className="rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold text-brand-ink">
                Preferred time: ASAP
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Features() {
  const features = [
    {
      title: "Answers every call, 24/7",
      body: "Evenings, weekends, bank holidays — the times your phone rings most are exactly when you're on a job or asleep.",
    },
    {
      title: "Natural conversations",
      body: "No robotic menus or 'press 1 for…'. Callers just talk, and FrontDesk asks the right follow-up questions.",
    },
    {
      title: "Captures the details that matter",
      body: "Name, phone number, postcode, the issue, and boiler or heating details when they're relevant — nothing scribbled on the back of an invoice.",
    },
    {
      title: "Emergency vs routine triage",
      body: "Genuine emergencies are flagged as urgent so you can call back first. Quotes and servicing are logged as routine with preferred times.",
    },
    {
      title: "Structured lead summaries",
      body: "Every call is recorded as a structured lead for follow-up — ready for you to quote, book or escalate.",
    },
    {
      title: "Works with your existing number",
      body: "The plan is no new number to advertise: during the pilot we set up call forwarding from the number your customers already know.",
    },
  ];
  return (
    <section id="features" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="What you get"
          title="A receptionist that works the hours you can't."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-soft text-brand">
                <CheckIcon />
              </span>
              <h3 className="mt-4 text-base font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {feature.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const included = [
    "24/7 call answering in a natural, professional manner",
    "Caller details captured: name, phone, postcode, issue, urgency",
    "Emergency vs routine triage with preferred appointment times",
    "Every call captured as a structured lead",
    "Call forwarding from your existing number set up during the pilot",
  ];
  return (
    <section id="pricing" className="border-y border-border bg-muted/50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Pricing"
          title="Try it free for 7 days. Keep it only if it earns its keep."
          lead="We're onboarding a small group of UK plumbing and heating businesses as early-access partners during the pilot phase."
        />
        <div className="mx-auto mt-12 max-w-xl">
          <div className="rounded-3xl border-2 border-primary bg-card p-7 shadow-lg shadow-primary/10 sm:p-9">
            <div className="flex items-baseline justify-between">
              <h3 className="text-lg font-bold">7-day pilot</h3>
              <span className="rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold text-brand-ink">
                Early access
              </span>
            </div>
            <div className="mt-5 flex items-baseline gap-2">
              <span className="text-5xl font-extrabold tracking-tight">£0</span>
              <span className="text-sm text-muted-foreground">
                setup — pilot is free
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              After the pilot, it's{" "}
              <strong className="font-semibold text-foreground">£249/month</strong>{" "}
              — only if you decide to keep it. No pressure, no hard sell.
            </p>
            <ul className="mt-6 space-y-3">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a
              href="#pilot"
              className="mt-7 inline-flex w-full items-center justify-center rounded-lg bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Join the 7-day pilot
            </a>
            <p className="mt-4 text-center text-xs text-muted-foreground">
              Usage limits and fair-use terms apply.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Faq() {
  const faqs = [
    {
      q: "Will my customers know it's AI?",
      a: "FrontDesk answers in a natural, professional manner and doesn't pretend to be you — if a caller asks, it says it's an assistant helping the business. In practice, most callers simply want their problem heard and logged by someone (or something) that answers first time.",
    },
    {
      q: "Can it transfer urgent calls?",
      a: "Yes. Genuinely urgent calls — a major leak, no heating in winter, a vulnerable customer — are flagged as urgent in the lead record for priority follow-up. It's a managed service, so we'll agree how urgent calls are escalated to you during setup.",
    },
    {
      q: "Can I keep my existing number?",
      a: "That's the aim. During the pilot we set up call forwarding with you so customers keep calling the number on your van, website and Google listing, and FrontDesk answers when you can't.",
    },
    {
      q: "What happens after the pilot?",
      a: "At the end of the 7 days we'll review the calls it handled together. If it's earning its keep, the service continues at £249/month. If it's not for you, we switch it off — you keep every lead summary captured during the pilot, with no exit fees.",
    },
    {
      q: "Does it replace my staff?",
      a: "No. It covers the calls your team physically can't take — while they're on another line, on a job, or it's 10pm. Your office staff and engineers stay focused on the work that needs a human; FrontDesk just makes sure nothing rings out.",
    },
  ];
  return (
    <section id="faq" className="py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeading eyebrow="FAQ" title="Straight answers, before you ask." />
        <div className="mt-10 space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.q}
              className="group rounded-xl border border-border bg-card px-5 py-4 shadow-sm"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold marker:hidden [&::-webkit-details-marker]:hidden">
                {faq.q}
                <span
                  className="shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-45"
                  aria-hidden="true"
                >
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section id="pilot" className="border-t border-border bg-brand-ink py-16 text-background sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-background/70">
            7-day pilot · £0 setup
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Stop losing jobs to the phone you couldn't answer.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-background/75">
            Tell us a bit about your business and we'll set up your pilot.
            Every call answered, every enquiry captured — from this week.
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl">
          <PilotForm />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6">
        <div className="flex items-center gap-2.5">
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <PhoneIcon className="h-3.5 w-3.5" />
          </span>
          <span className="text-sm font-bold tracking-tight">
            FrontDesk{" "}
            <span className="font-medium text-muted-foreground">for Trades</span>
          </span>
        </div>
        <p className="text-xs text-muted-foreground">
          Early access — UK plumbing &amp; heating
        </p>
        <a
          href="mailto:satyanarayanareddy.tethala@gmail.com"
          className="text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          satyanarayanareddy.tethala@gmail.com
        </a>
      </div>
      <div className="border-t border-border py-4">
        <p className="mx-auto max-w-6xl px-4 text-center text-[11px] text-muted-foreground sm:px-6">
          Call examples on this page are fictional and shown for illustration
          only. © {new Date().getFullYear()} FrontDesk AI for Trades. ·{" "}
          <Link to="/login" className="hover:text-foreground">Owner login</Link>
        </p>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Pain />
        <Workflow />
        <ExampleCall />
        <Features />
        <Pricing />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
