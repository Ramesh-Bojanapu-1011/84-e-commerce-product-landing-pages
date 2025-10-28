import { useState } from "react";
import Head from "next/head";
import SiteHeadder from "@/components/SiteHeadder";
import SiteFooter from "@/components/SiteFooter";
import Link from "next/link";
import { EqualApproximatelyIcon, Mail, Phone } from "lucide-react";

function FormNewLook({
  contactMethods,
}: {
  contactMethods: { title: string; value: string; desc?: string }[];
}) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  return (
    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
      {/* decorative left panel (hidden on small) */}
      <div className="hidden md:flex flex-col items-start justify-center rounded-lg p-6 bg-linear-to-br from-indigo-50 to-rose-50 dark:from-slate-800 dark:to-slate-900">
        <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
          Quick details
        </h4>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
          Share a few top-level details and we'll reply with a short plan and
          next steps.
        </p>

        <div className="mt-4 w-full space-y-3">
          {contactMethods.map((c) => {
            const isEmail =
              c.title.toLowerCase().includes("email") || c.value.includes("@");
            const isPhone =
              c.title.toLowerCase().includes("phone") || /\d/.test(c.value);
            const href = isEmail
              ? `mailto:${c.value}`
              : isPhone
                ? `tel:${c.value.replace(/[^0-9+]/g, "")}`
                : `mailto:${c.value}`;

            return (
              <a
                key={c.title}
                href={href}
                className="group block p-3 rounded-lg bg-white/60 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700 hover:shadow-lg hover:-translate-y-1 transform transition"
              >
                <div className="flex items-start gap-3">
                  <div className="flex-none w-10 h-10 rounded-md flex items-center justify-center text-white bg-linear-to-br from-indigo-500 to-pink-500">
                    {isEmail ? (
                      <>
                        <Mail />
                      </>
                    ) : isPhone ? (
                      <Phone />
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <circle cx="12" cy="12" r="10" />
                      </svg>
                    )}
                  </div>

                  <div className="min-w-0">
                    <div className="text-sm font-semibold text-slate-900 dark:text-white">
                      {c.title}
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-300 truncate">
                      {c.value}
                    </div>
                    {c.desc ? (
                      <div className="text-xs text-slate-400 dark:text-slate-500 mt-1">
                        {c.desc}
                      </div>
                    ) : null}
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>

      {/* compact form card */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-md border border-slate-100 dark:border-slate-700 p-6">
        {/* inline accessible status (kept for screen readers) */}
        <div role="status" aria-live="polite" className="sr-only">
          {status === "sent" ? "Thanks — we received your message." : ""}
        </div>

        {/* popup toast */}
        <div
          aria-hidden={status !== "sent"}
          className={`fixed right-6 top-6 z-50 transform transition duration-300 ease-out origin-top-right ${
            status === "sent"
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-2 scale-95 pointer-events-none"
          }`}
        >
          <div className="rounded-lg bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-100 dark:border-emerald-700 p-3 shadow-md text-emerald-800 dark:text-emerald-200">
            <div className="font-medium">Message sent</div>
            <div className="text-sm">
              Thanks — we received your message. We'll reply shortly.
            </div>
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setStatus("sending");
            // simulate network + auto-hide toast
            setTimeout(() => {
              setStatus("sent");
              setTimeout(() => setStatus("idle"), 3000);
            }, 700);
          }}
          className="grid grid-cols-1 gap-3"
        >
          <label className="flex flex-col">
            <span className="text-sm text-slate-700 dark:text-slate-300">
              Full name
            </span>
            <input
              name="name"
              required
              placeholder="Jane Doe"
              className="mt-1 block w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-sm text-slate-700 dark:text-slate-300">
              Email
            </span>
            <input
              name="email"
              type="email"
              required
              placeholder="you@company.com"
              className="mt-1 block w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-sm text-slate-700 dark:text-slate-300">
              Message
            </span>
            <textarea
              name="message"
              rows={4}
              required
              placeholder="Short summary of your goals"
              className="mt-1 block w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </label>

          <div className="flex items-center justify-between gap-3">
            <label className="inline-flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
              <input
                type="checkbox"
                className="w-4 h-4 rounded border dark:border-slate-600"
              />
              <span>Subscribe to occasional tips</span>
            </label>

            <button
              type="submit"
              disabled={status === "sending"}
              className="ml-auto px-5 py-3 bg-indigo-600 text-white rounded-md disabled:opacity-60"
            >
              {status === "sending" ? "Sending…" : "Send message"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default function ContactUs() {
  const contactMethods = [
    {
      title: "Email",
      value: "hello@example.com",
      desc: "General inquiries and proposals",
    },
    {
      title: "Phone",
      value: "+1 (555) 123-4567",
      desc: "Mon–Fri, 9am–6pm (UTC)",
    },
    {
      title: "Support",
      value: "support@example.com",
      desc: "Technical and onboarding help",
    },
  ];

  const services = [
    { title: "UI & UX audits", desc: "Conversion-focused design reviews" },
    { title: "Performance tuning", desc: "LCP, TTFB and bundle optimisations" },
    { title: "Component systems", desc: "Design tokens & reusable components" },
  ];

  const quotes = [
    {
      who: "NovaShop",
      text: "The UI Kit saved us weeks — highly recommended.",
    },
    { who: "Cartly", text: "Performance improvements reduced LCP by ~0.9s." },
  ];

  return (
    <>
      <Head>
        <title>Contact — E-commerce Product Pages</title>
        <meta
          name="description"
          content="Contact our team for audits, consulting and design work focused on product pages."
        />
      </Head>

      <div className="min-h-screen bg-linear-to-br from-white to-blue-50 dark:from-slate-900 dark:to-slate-800 caret-transparent">
        <SiteHeadder />

        {/* Hero */}
        <section className=" flex items-center min-h-screen justify-center   text-center">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white">
              Let's build better product pages together
            </h1>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
              Tell us about your challenge — audits, design systems or
              performance work. We'll reply within 1 business day.
            </p>

            <div className="mt-8 flex items-center justify-center gap-3">
              <a
                href="#contact-form"
                className="px-6 py-3 rounded-md bg-indigo-600 text-white"
              >
                Contact us
              </a>
              <Link
                href="/services"
                className="px-6 py-3 rounded-md border border-slate-200 dark:border-slate-700"
              >
                Explore services
              </Link>
            </div>
          </div>
        </section>

        {/* Contact methods */}
        <section className="py-12 bg-white dark:bg-slate-900">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white text-center">
              Other ways to reach us
            </h3>
            <p className="mt-2 text-center text-slate-600 dark:text-slate-300">
              Pick a channel that suits you.
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {contactMethods.map((c) => {
                const isEmail =
                  c.title.toLowerCase().includes("email") ||
                  c.value.includes("@");
                const isPhone =
                  c.title.toLowerCase().includes("phone") || /\d/.test(c.value);
                const href = isEmail
                  ? `mailto:${c.value}`
                  : isPhone
                    ? `tel:${c.value.replace(/[^0-9+]/g, "")}`
                    : `mailto:${c.value}`;

                return (
                  <a
                    key={c.title}
                    href={href}
                    className="block p-4 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-100 dark:border-slate-700 text-center hover:shadow-lg hover:-translate-y-1 transform transition"
                  >
                    <div className="flex items-center justify-center gap-3">
                      <div className="w-10 h-10 rounded-md flex items-center justify-center text-white bg-linear-to-br from-indigo-500 to-pink-500">
                        {isEmail ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M21 8v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8"
                            />
                          </svg>
                        ) : isPhone ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M3 5a2 2 0 012-2h2.2c.6 0 1.1.3 1.4.8l1.2 2.2"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M7 7l10 10"
                            />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <circle cx="12" cy="12" r="10" />
                          </svg>
                        )}
                      </div>

                      <div>
                        <div className="font-semibold text-slate-900 dark:text-white">
                          {c.title}
                        </div>
                        <div className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                          {c.value}
                        </div>
                        <div className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                          {c.desc}
                        </div>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact form */}
        <section id="contact-form" className="py-12">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div>
              <FormNewLook contactMethods={contactMethods} />
            </div>
          </div>
        </section>

        {/* Locations */}
        <section className="py-12 bg-white dark:bg-slate-900  ">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white text-center">
              Our locations
            </h3>
            <p className="mt-2 text-center text-slate-600 dark:text-slate-300">
              We're distributed — reach out to the office closest to you.
            </p>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  id: "nyc",
                  city: "New York",
                  address: "123 Broadway, New York, NY 10006",
                  hours: "Mon–Fri, 9:00–18:00 (EST)",
                  contact: "hello+nyc@example.com",
                },
                {
                  id: "london",
                  city: "London",
                  address: "10 King St, London EC2V 8AA",
                  hours: "Mon–Fri, 9:00–18:00 (GMT)",
                  contact: "hello-uk@example.com",
                },
                {
                  id: "blr",
                  city: "Bengaluru",
                  address: "88 MG Rd, Bengaluru, KA 560001",
                  hours: "Mon–Fri, 9:30–18:30 (IST)",
                  contact: "hello-in@example.com",
                },
              ].map((loc) => (
                <div
                  key={loc.id}
                  className="group bg-white dark:bg-slate-800 rounded-lg border border-slate-100 dark:border-slate-700 p-4 shadow-sm hover:shadow-md transition-transform transform hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-md bg-linear-to-br from-indigo-500 to-rose-500 flex items-center justify-center text-white font-semibold">
                      {loc.city.split(" ")[0].slice(0, 2).toUpperCase()}
                    </div>

                    <div className="flex-1">
                      <div className="font-semibold text-slate-900 dark:text-white">
                        {loc.city}
                      </div>
                      <div className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                        {loc.address}
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                        {loc.hours}
                      </div>

                      <div className="mt-3 flex items-center gap-3">
                        <a
                          href={`mailto:${loc.contact}`}
                          className="text-sm text-indigo-600 dark:text-indigo-400"
                        >
                          Email
                        </a>
                        <a
                          href={`#contact-form`}
                          className="text-sm text-slate-500 dark:text-slate-300"
                        >
                          Request meeting
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 h-32 rounded-md bg-slate-100 dark:bg-slate-900 flex items-center justify-center text-slate-400">
                    Map placeholder
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-12 ">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white text-center">
              Frequently asked
            </h3>
            <p className="mt-2 text-center text-slate-600 dark:text-slate-300">
              Answers to common questions about our services, engagements and
              process.
            </p>

            <div className="mt-6 space-y-3">
              {[
                {
                  q: "How long does an audit take?",
                  a: "A lightweight audit typically takes 5–10 business days; deeper audits depend on scope.",
                },
                {
                  q: "Do you work with existing design systems?",
                  a: "Yes — we integrate with your tokens and components, and provide migration guidance.",
                },
                {
                  q: "What are your engagement models?",
                  a: "We offer fixed-scope audits, time-and-materials engagements, and bundled discovery + implementation packages.",
                },
                {
                  q: "How do you handle timezones for distributed teams?",
                  a: "We coordinate overlapping hours and set clear async updates; our team spans several timezones.",
                },
              ].map((f) => (
                <details
                  key={f.q}
                  className="group bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-lg p-4"
                >
                  <summary className="flex items-center justify-between cursor-pointer list-none">
                    <span className="text-slate-900 dark:text-white font-medium">
                      {f.q}
                    </span>
                    <svg
                      className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden
                    >
                      <path
                        d="M6 8l4 4 4-4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </summary>
                  <div className="mt-3 text-sm text-slate-600 dark:text-slate-300">
                    {f.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 bg-white dark:bg-slate-900">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <div className="bg-indigo-600 text-white rounded-2xl p-8">
              <h3 className="text-2xl font-semibold">Ready to get started?</h3>
              <p className="mt-2">
                Book a short discovery call and we'll share a tailored plan.
              </p>
              <div className="mt-4 flex items-center justify-center gap-3">
                <a
                  href="mailto:hello@example.com"
                  className="px-5 py-3 bg-white text-indigo-600 rounded-md"
                >
                  Email us
                </a>
                <Link
                  href="/services"
                  className="px-5 py-3 border border-white rounded-md"
                >
                  See services
                </Link>
              </div>
            </div>
          </div>
        </section>

        <SiteFooter />
      </div>
    </>
  );
}
