import SiteFooter from "@/components/SiteFooter";
import SiteHeadder from "@/components/SiteHeadder";
import i18n from "@/i18n";
import { Globe, Package, ShoppingCart, Star, Users, Zap } from "lucide-react";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";

const components = [
  { id: "hero", icon: <Package className="w-5 h-5" /> },
  { id: "variants", icon: <ShoppingCart className="w-5 h-5" /> },
  { id: "reviews", icon: <Star className="w-5 h-5" /> },
  { id: "upsell", icon: <Zap className="w-5 h-5" /> },
  { id: "intl", icon: <Globe className="w-5 h-5" /> },
  { id: "checkout", icon: <Users className="w-5 h-5" /> },
];

const team = [
  { id: 1, name: "Aisha Khan", role: "Design Lead" },
  { id: 2, name: "Daniel Park", role: "Frontend Engineer" },
  { id: 3, name: "Maya Lopez", role: "Product" },
];

const stats = [
  { id: 1, value: "+120" },
  { id: 2, value: "99.9%" },
  { id: 3, value: "+1M" },
  { id: 4, value: "4.8" },
];

const caseStudies = [
  { id: "apt-build", initials: "AB" },
  { id: "lumina", initials: "LN" },
  { id: "bakerkit", initials: "BK" },
];

const testimonials = [{ id: "jordan", rating: 5 }];

// Small CountUp component that parses compact strings like "+120", "99.9%", "1.2M" and animates
function formatCompact(n: number) {
  if (n >= 1_000_000)
    return (
      (n / 1_000_000).toFixed(n % 1_000_000 === 0 ? 0 : 1).replace(/\.0$/, "") +
      "M"
    );
  if (n >= 1000)
    return (n / 1000).toFixed(n % 1000 === 0 ? 0 : 1).replace(/\.0$/, "") + "k";
  return String(n);
}

const CountUp: React.FC<{
  value: string;
  duration?: number;
  startOnView?: boolean;
}> = ({ value, duration = 1200, startOnView = false }) => {
  const [display, setDisplay] = React.useState<string>(value);
  const rafRef = React.useRef<number | null>(null);
  const ref = React.useRef<HTMLSpanElement | null>(null);
  const [started, setStarted] = React.useState<boolean>(!startOnView);

  // Observe visibility if startOnView is requested
  React.useEffect(() => {
    if (!startOnView || started) return;

    let obs: IntersectionObserver | null = null;
    if (typeof IntersectionObserver !== "undefined" && ref.current) {
      obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              setStarted(true);
              if (obs) obs.disconnect();
            }
          });
        },
        { threshold: 0.4 },
      );
      obs.observe(ref.current);
    } else {
      // Fallback: start immediately
      setStarted(true);
    }

    return () => {
      if (obs) obs.disconnect();
    };
  }, [startOnView, started]);

  React.useEffect(() => {
    if (!started) return;

    const raw = String(value).trim();
    const prefixMatch = raw.match(/^[+-]/);
    const prefix = prefixMatch ? prefixMatch[0] : "";
    const suffixMatch = raw.match(/[%kKmM]$/);
    const suffix = suffixMatch ? suffixMatch[0] : "";
    const numericStr = raw
      .replace(/^[+-]/, "")
      .replace(/[%kKmM]$/, "")
      .replace(/,/g, "");
    let target = parseFloat(numericStr) || 0;
    if (/M$/i.test(raw)) target = target * 1_000_000;
    if (/K$/i.test(raw)) target = target * 1000;

    const decimals = numericStr.includes(".")
      ? numericStr.split(".")[1].length
      : 0;

    const start = 0;
    const startTime = performance.now();

    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const current = start + (target - start) * progress;

      let formatted = "";
      if (/M$/i.test(raw) || /K$/i.test(raw)) {
        formatted = prefix + formatCompact(Math.round(current));
      } else if (suffix === "%") {
        formatted = prefix + current.toFixed(decimals || 1) + "%";
      } else {
        formatted =
          prefix +
          (decimals ? current.toFixed(decimals) : String(Math.round(current)));
      }

      setDisplay(formatted);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      }
    };

    rafRef.current = requestAnimationFrame(step);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [value, duration, started]);

  return <span ref={ref}>{display}</span>;
};

export default function AboutUs() {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t("about.meta.title")}</title>
        <meta name="description" content={t("about.meta.description")} />
      </Head>

      <div className="min-h-screen bg-linear-to-br from-white to-blue-50 dark:from-slate-900 dark:to-slate-800">
        <SiteHeadder />

        {/* Hero */}
        <section className=" h-screen flex justify-center items-center">
          <div className="max-w-6xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white">
                {t("about.hero.title")}
              </h1>
              <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-xl">
                {t("about.hero.desc")}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-indigo-600 text-white px-5 py-3 rounded-lg shadow"
                >
                  {t("about.hero.ctaContact")}
                </Link>
              </div>
            </div>

            <div className="rounded-3xl p-6 bg-linear-to-r from-indigo-500 to-blue-600 text-white shadow-2xl">
              <div className="text-sm opacity-90">
                {t("about.mission.label")}
              </div>
              <h3 className="mt-2 text-xl font-semibold">
                {t("about.mission.title")}
              </h3>
              <p className="mt-4 text-white/90">{t("about.mission.desc")}</p>

              <div className="mt-6 flex items-center gap-4">
                <div className="text-sm opacity-90">
                  {t("about.mission.trusted")}
                </div>
                <div className="ml-auto font-bold">
                  {t("about.mission.trustedCount")}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values & Timeline (new idea) */}
        <section className="py-16 bg-white dark:bg-slate-900 justify-center flex items-center   ">
          <div className=" mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
                {t("about.values.header")}
              </h3>
              <p className="mt-3 text-slate-600 dark:text-slate-300">
                {t("about.values.desc")}
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-linear-to-r from-indigo-50 to-blue-50 dark:bg-slate-800 rounded-lg">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center text-white bg-linear-to-r from-indigo-500 to-blue-600">
                      <Zap className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-white">
                        {t("about.values.performance.title")}
                      </div>
                      <div className="text-sm text-slate-600 dark:text-slate-300">
                        {t("about.values.performance.desc")}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-linear-to-r from-indigo-50 to-blue-50 dark:bg-slate-800 rounded-lg">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center text-white bg-linear-to-r from-indigo-500 to-blue-600">
                      <Globe className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-white">
                        {t("about.values.global.title")}
                      </div>
                      <div className="text-sm text-slate-600 dark:text-slate-300">
                        {t("about.values.global.desc")}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-linear-to-r from-indigo-50 to-blue-50 dark:bg-slate-800 rounded-lg">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center text-white bg-linear-to-r from-indigo-500 to-blue-600">
                      <Package className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-white">
                        {t("about.values.composable.title")}
                      </div>
                      <div className="text-sm text-slate-600 dark:text-slate-300">
                        {t("about.values.composable.desc")}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-linear-to-r from-indigo-50 to-blue-50 dark:bg-slate-800 rounded-lg">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center text-white bg-linear-to-r from-indigo-500 to-blue-600">
                      <Star className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-white">
                        {t("about.values.trust.title")}
                      </div>
                      <div className="text-sm text-slate-600 dark:text-slate-300">
                        {t("about.values.trust.desc")}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
                {t("about.roadmap.header")}
              </h4>
              <div className="mt-6 flow-root">
                <ol className="-mb-8">
                  {(
                    t("about.roadmap.items", { returnObjects: true }) as Array<{
                      title: string;
                      desc: string;
                    }>
                  ).map((item, idx) => (
                    <li
                      key={idx}
                      className={
                        idx <
                        (
                          t("about.roadmap.items", {
                            returnObjects: true,
                          }) as Array<any>
                        ).length -
                          1
                          ? "mb-8"
                          : ""
                      }
                    >
                      <div
                        className={
                          idx <
                          (
                            t("about.roadmap.items", {
                              returnObjects: true,
                            }) as Array<any>
                          ).length -
                            1
                            ? "relative pb-8"
                            : "relative"
                        }
                      >
                        <span
                          className={`absolute ${
                            i18n.language == "en"
                              ? `left-0 -ml-3`
                              : ` right-0 -mr-3`
                          }  mt-1 w-2 h-2 rounded-full bg-blue-600`}
                        />
                        <div className="ml-6">
                          <div className="text-sm font-semibold text-slate-900 dark:text-white">
                            {item.title}
                          </div>
                          <div className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                            {item.desc}
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* Components included */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white text-center">
              {t("about.componentsHeader")}
            </h3>
            <p className="mt-2 text-center text-slate-600 dark:text-slate-300">
              {t("about.componentsSubtitle")}
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {components.map((c) => (
                <div
                  key={c.id}
                  className="p-6 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-xl shadow-sm"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center text-white bg-linear-to-r from-indigo-500 to-blue-600">
                      {c.icon}
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-white">
                        {t(`about.components.${c.id}.title`)}
                      </div>
                      <div className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                        {t("about.components.itemDesc")}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case studies (new idea) */}
        <section className="py-16 bg-white dark:bg-slate-900">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white text-center">
              {t("about.caseStudies.header")}
            </h3>
            <p className="mt-2 text-center text-slate-600 dark:text-slate-300">
              {t("about.caseStudies.subtitle")}
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {caseStudies.map((c) => (
                <div
                  key={c.id}
                  className="relative p-6 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-xl   hover:shadow-md shadow-2xl hover:-translate-y-1 transform transition"
                >
                  {/* top accent */}
                  <div className="absolute -top-px left-0 right-0 h-1 rounded-t-xl bg-linear-to-r from-indigo-500 to-blue-600" />

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center text-sm font-medium text-white bg-linear-to-r from-indigo-500 to-blue-600">
                      {c.initials}
                    </div>

                    <div className="flex-1">
                      <div className="font-semibold text-slate-900 dark:text-white">
                        {t(`about.caseStudies.${c.id}.title`)}
                      </div>
                      <div className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                        {t(`about.caseStudies.${c.id}.subtitle`)}
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 text-sm text-slate-600 dark:text-slate-300">
                    {t(`about.caseStudies.${c.id}.details`)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats & Testimonials (refreshed) */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
                {t("about.stats.header")}
              </h3>
              <p className="mt-2 text-slate-600 dark:text-slate-300">
                {t("about.stats.subtitle")}
              </p>

              <div className="mt-6 grid grid-cols-2 gap-4">
                {stats.map((s) => (
                  <div
                    key={s.id}
                    className="p-6 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-lg text-center"
                  >
                    <div className="text-3xl md:text-4xl font-extrabold bg-linear-to-r from-indigo-500 to-blue-600 bg-clip-text text-transparent">
                      <CountUp value={s.value} duration={1400} startOnView />
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                      {t(`about.stats.${s.id}.label`)}
                    </div>
                    <div className="mt-3 flex items-center justify-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800">
                        <Star className="w-3 h-3 text-yellow-400" />
                        Trusted
                      </span>
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800">
                        <Package className="w-3 h-3" />
                        Verified
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
                {t("about.testimonials.header")}
              </h3>

              <div className="mt-6 grid grid-cols-1 gap-4">
                {testimonials.map((tItem) => (
                  <blockquote
                    key={tItem.id}
                    className="p-6 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-xl"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center bg-linear-to-r from-indigo-500 to-blue-600 text-white font-semibold">
                        J
                      </div>
                      <div className="flex-1">
                        <p className="italic text-slate-800 dark:text-white">
                          “{t(`about.testimonials.${tItem.id}.quote`)}”
                        </p>
                        <div className="mt-3 flex items-center justify-between">
                          <div className="text-sm text-slate-600 dark:text-slate-300">
                            — {t(`about.testimonials.${tItem.id}.author`)},{" "}
                            {t(`about.testimonials.${tItem.id}.role`)}
                          </div>
                          <div className="flex items-center gap-1 text-yellow-400">
                            {Array.from({ length: tItem.rating }).map(
                              (_, i) => (
                                <Star key={i} className="w-4 h-4" />
                              ),
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </blockquote>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
            <h3 className="text-2xl font-semibold">{t("about.cta.header")}</h3>
            <p className="mt-2 max-w-2xl mx-auto">{t("about.cta.desc")}</p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <Link
                href="/contact-us"
                className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold"
              >
                {t("about.cta.talkToSales")}
              </Link>
            </div>
          </div>
        </section>

        <SiteFooter />
      </div>
    </>
  );
}
