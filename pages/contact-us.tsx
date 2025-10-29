import SiteFooter from "@/components/SiteFooter";
import SiteHeadder from "@/components/SiteHeadder";
import { Mail, MailIcon, Phone, PhoneCall } from "lucide-react";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { useTranslation } from "react-i18next";

function FormNewLook({
  contactMethods,
}: {
  contactMethods: { title: string; value: string; desc?: string }[];
}) {
  const { t } = useTranslation();
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  return (
    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
      {/* decorative left panel (hidden on small) */}
      <div className="hidden md:flex flex-col items-start justify-center rounded-lg p-6 bg-linear-to-br from-indigo-50 to-rose-50 dark:from-slate-800 dark:to-slate-900">
        <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
          {t("contact.quick.title")}
        </h4>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
          {t("contact.quick.desc")}
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
          {status === "sent" ? t("contact.form.srSent") : ""}
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
            <div className="font-medium">{t("contact.form.toastTitle")}</div>
            <div className="text-sm">{t("contact.form.toastBody")}</div>
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
              {t("contact.form.nameLabel")}
            </span>
            <input
              name="name"
              required
              placeholder={t("contact.form.namePlaceholder")}
              className="mt-1 block w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-sm text-slate-700 dark:text-slate-300">
              {t("contact.form.emailLabel")}
            </span>
            <input
              name="email"
              type="email"
              required
              placeholder={t("contact.form.emailPlaceholder")}
              className="mt-1 block w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-sm text-slate-700 dark:text-slate-300">
              {t("contact.form.messageLabel")}
            </span>
            <textarea
              name="message"
              rows={4}
              required
              placeholder={t("contact.form.messagePlaceholder")}
              className="mt-1 block w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </label>

          <div className="flex items-center justify-between gap-3">
            <label className="inline-flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
              <input
                type="checkbox"
                className="w-4 h-4 rounded border dark:border-slate-600"
              />
              <span> {t("contact.form.subscribe")}</span>
            </label>

            <button
              type="submit"
              disabled={status === "sending"}
              className="ml-auto px-5 py-3 bg-indigo-600 text-white rounded-md disabled:opacity-60"
            >
              {status === "sending" ? (
                <>{t("contact.form.sending")}</>
              ) : (
                <>{t("contact.form.sendMessage")}</>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default function ContactUs() {
  const { t } = useTranslation();

  const contactMethods = [
    {
      title: t("contact.methods.emailTitle"),
      value: "hello@example.com",
      desc: t("contact.methods.emailDesc"),
    },
    {
      title: t("contact.methods.phoneTitle"),
      value: "+1 (555) 123-4567",
      desc: t("contact.methods.phoneDesc"),
    },
    {
      title: t("contact.methods.supportTitle"),
      value: "support@example.com",
      desc: t("contact.methods.supportDesc"),
    },
  ];

  const services = [
    {
      title: t("contact.services.0.title"),
      desc: t("contact.services.0.desc"),
    },
    {
      title: t("contact.services.1.title"),
      desc: t("contact.services.1.desc"),
    },
    {
      title: t("contact.services.2.title"),
      desc: t("contact.services.2.desc"),
    },
  ];

  const quotes = [
    { who: t("contact.quotes.0.who"), text: t("contact.quotes.0.text") },
    { who: t("contact.quotes.1.who"), text: t("contact.quotes.1.text") },
  ];

  return (
    <>
      <Head>
        <title>{t("contact.meta.title")}</title>
        <meta name="description" content={t("contact.meta.description")} />
      </Head>

      <div className="min-h-screen bg-linear-to-br from-white to-blue-50 dark:from-slate-900 dark:to-slate-800 caret-transparent">
        <SiteHeadder />

        {/* Hero */}
        <section className=" flex items-center min-h-screen justify-center   text-center">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white">
              {t("contact.hero.title")}
            </h1>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
              {t("contact.hero.desc")}
            </p>

            <div className="mt-8 flex items-center justify-center gap-3">
              <a
                href="#contact-form"
                className="px-6 py-3 rounded-md bg-indigo-600 text-white"
              >
                {t("contact.hero.ctaContact")}
              </a>
              <Link
                href="/services"
                className="px-6 py-3 rounded-md border border-slate-200 dark:border-slate-700"
              >
                {t("contact.hero.ctaServices")}
              </Link>
            </div>
          </div>
        </section>

        {/* Contact methods */}
        <section className="py-12 bg-white dark:bg-slate-900">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white text-center">
              {t("contact.otherWays.title")}
            </h3>
            <p className="mt-2 text-center text-slate-600 dark:text-slate-300">
              {t("contact.otherWays.desc")}
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
                          <MailIcon />
                        ) : isPhone ? (
                          <PhoneCall />
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
              {t("contact.locations.title")}
            </h3>
            <p className="mt-2 text-center text-slate-600 dark:text-slate-300">
              {t("contact.locations.desc")}
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
                          {t("contact.locations.emailLink")}
                        </a>
                        <a
                          href={`#contact-form`}
                          className="text-sm text-slate-500 dark:text-slate-300"
                        >
                          {t("contact.locations.requestMeeting")}
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 h-32 rounded-md bg-slate-100 dark:bg-slate-900 flex items-center justify-center text-slate-400">
                    <iframe
                      src={`https://maps.google.com/maps?q=${encodeURIComponent(
                        loc.address
                      )}&z=15&output=embed`}
                      className="w-full h-32 rounded-md"
                      loading="lazy"
                    ></iframe>
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
              {t("contact.faq.title")}
            </h3>
            <p className="mt-2 text-center text-slate-600 dark:text-slate-300">
              {t("contact.faq.desc")}
            </p>

            <div className="mt-6 space-y-3">
              {(
                t("contact.faq.items", { returnObjects: true }) as {
                  q: string;
                  a: string;
                }[]
              ).map((f) => (
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
              <h3 className="text-2xl font-semibold">
                {t("contact.cta.title")}
              </h3>
              <p className="mt-2">{t("contact.cta.desc")}</p>
              <div className="mt-4 flex items-center justify-center gap-3">
                <a
                  href="mailto:hello@example.com"
                  className="px-5 py-3 bg-white text-indigo-600 rounded-md"
                >
                  {t("contact.cta.email")}
                </a>
                <Link
                  href="/services"
                  className="px-5 py-3 border border-white rounded-md"
                >
                  {t("contact.cta.seeServices")}
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
