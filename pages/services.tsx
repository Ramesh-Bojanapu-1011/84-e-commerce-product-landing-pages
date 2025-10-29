import SiteFooter from "@/components/SiteFooter";
import SiteHeadder from "@/components/SiteHeadder";
import { Globe, Package, Star, Users, Zap } from "lucide-react";
import Head from "next/head";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const servicesList = [
  {
    slug: "product-design",
    icon: <Package className="w-6 h-6" />,
    href: "/services/product-design",
  },
  {
    slug: "ux-audit",
    icon: <Star className="w-6 h-6" />,
    href: "/services/ux-audit",
  },
  { slug: "cro", icon: <Zap className="w-6 h-6" />, href: "/services/conversion-rate-opt" },
  {
    slug: "performance",
    icon: <Zap className="w-6 h-6" />,
    href: "/services/performance",
  },
  {
    slug: "accessibility",
    icon: <Users className="w-6 h-6" />,
    href: "/services/accessibility",
  },
  {
    slug: "integrations",
    icon: <Globe className="w-6 h-6" />,
    href: "/services/integrations",
  },
];

const features = [
  { key: "features.readyMade" },
  { key: "features.accessible" },
  { key: "features.integrations" },
];

const teamMembers = [
  { slug: "olivia", name: "Olivia Hart", href: "/team/olivia" },
  { slug: "matt", name: "Matt Rivera", href: "/team/matt" },
  { slug: "nina", name: "Nina Park", href: "/team/nina" },
  { slug: "liam", name: "Liam Chen", href: "/team/liam" },
];

export default function ServicesPage() {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t("services.meta.title")}</title>
        <meta name="description" content={t("services.meta.description")} />
      </Head>

      <div className="min-h-screen bg-linear-to-br from-white to-blue-50 dark:from-slate-900 dark:to-slate-800 caret-transparent">
        <SiteHeadder />

        {/* Hero */}
        <section className=" flex min-h-screen items-center justify-center ">
          <div className="max-w-6xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white">
                {t("services.hero.title")}
              </h1>
              <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-xl">
                {t("services.hero.desc")}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-indigo-600 text-white px-5 py-3 rounded-lg shadow"
                >
                  {t("services.hero.cta")}
                </Link>
              </div>
            </div>

            <div>
              <div className="rounded-3xl p-6 bg-linear-to-r from-indigo-500 to-blue-600 text-white shadow-2xl">
                <div className="text-sm opacity-90">
                  {t("services.spotlight.label")}
                </div>
                <h3 className="mt-2 text-xl font-semibold">
                  {t("services.spotlight.title")}
                </h3>
                <p className="mt-4 text-white/90">
                  {t("services.spotlight.desc")}
                </p>

                <div className="mt-6 flex items-center gap-4">
                  <div className="text-sm opacity-90">
                    {t("services.spotlight.trustedBy")}
                  </div>
                  <div className="ml-auto font-bold">
                    {t("services.spotlight.trustedCount")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services grid (links) */}
        <section className="py-12 bg-white dark:bg-slate-900">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white text-center">
              {t("services.listHeader")}
            </h3>
            <p className="mt-2 text-center text-slate-600 dark:text-slate-300">
              {t("services.listSubtitle")}
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {servicesList.map((s) => (
                <Link
                  key={s.slug}
                  href={s.href}
                  className="group block relative bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-xl  shadow-2xl hover:shadow-xl transition-transform transform hover:-translate-y-1"
                >
                  {/* circular icon badge overlapping the image and content */}
                  <div className="absolute -top-6   left-6 w-14 h-14 rounded-full bg-white dark:bg-slate-900 flex items-center justify-center shadow-md">
                    <div className="text-indigo-600 dark:text-indigo-400">
                      {s.icon}
                    </div>
                  </div>

                  {/* content */}
                  <div className="pt-8 px-6 pb-6">
                    <h4 className="font-semibold text-slate-900 dark:text-white">
                      {t(`services.items.${s.slug}.title`)}
                    </h4>
                    <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 max-h-16 overflow-hidden">
                      {t(`services.items.${s.slug}.desc`)}
                    </p>

                    <div className="mt-6">
                      <span className="inline-flex items-center text-sm font-medium text-indigo-600 group-hover:underline">
                        {t("services.learnMore")}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Features - refreshed card style */}
        <section className="py-16 bg-slate-50 dark:bg-slate-900">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white text-center">
              {t("services.features.header")}
            </h3>
            <p className="mt-2 text-center text-slate-600 dark:text-slate-300">
              {t("services.features.subtitle")}
            </p>

            <div className="mt-10 grid grid-cols-1  lg:grid-cols-3 gap-6">
              {features.map((f, i) => (
                <div
                  key={f.key}
                  className="relative p-8 pt-12 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl shadow-sm hover:shadow-lg transition-transform transform hover:-translate-y-2"
                >
                  {/* overlapping badge */}
                  <div className="absolute -top-6 left-6">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center text-white bg-linear-to-r from-indigo-500 to-blue-600 shadow-md">
                      {/* small, friendly icon using emoji fallbacks for now */}
                      <span className="text-lg">
                        {i === 0 ? (
                          <>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={20}
                              height={20}
                              viewBox="0 0 32 32"
                            >
                              <path
                                fill="#ff822d"
                                d="m17.831 3.306l-9.726 13.9c-.26.37-.045.794.395.794h4c.35 0 .5.14.5.5v10.763c0 .71.86 1.02 1.27.45l9.618-12.828c.27-.37.052-.885-.388-.885H20c-.5 0-1-.5-1-1V3.5c0-.5-.76-.774-1.169-.194"
                              ></path>
                            </svg>
                          </>
                        ) : i === 1 ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={20}
                            height={20}
                            viewBox="0 0 32 32"
                          >
                            <g fill="none">
                              <path
                                fill="#00a6ed"
                                d="M2 6a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v20a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4z"
                              ></path>
                              <path
                                fill="#fff"
                                d="M23 8a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-6 11a4 4 0 1 1-4.15-3.997a.26.26 0 0 0 .22-.135l.8-1.483a.24.24 0 0 0-.19-.358A8 8 0 0 0 13 13a6 6 0 1 0 5.997 6.205a.244.244 0 0 0-.198-.245l-1.492-.299a.26.26 0 0 0-.307.263z"
                              ></path>
                              <path
                                fill="#fff"
                                d="M14.79 10.957c.863-.262 1.245-.297 1.796-.047c.097.044.256.16.453.36q.127.13.237.263l-2.186 3.28a1.5 1.5 0 0 0 .98 2.307l4.751.864c.066.012.201.065.382.348c.183.288.344.713.471 1.242c.253 1.05.314 2.255.326 2.93A1.52 1.52 0 0 0 23.513 24h.987a1 1 0 1 0 0-2h-.514c-.032-.763-.12-1.866-.367-2.894c-.152-.63-.377-1.295-.729-1.847c-.354-.558-.903-1.096-1.711-1.243l-4.003-.728l1.974-2.96a1.47 1.47 0 0 0-.034-1.69a7 7 0 0 0-.651-.77c-.261-.266-.624-.584-1.051-.778c-1.226-.558-2.199-.352-3.204-.047c-.804.244-1.436.73-1.844 1.115a6 6 0 0 0-.663.738l-.006.008a1 1 0 1 0 1.635 1.153q.024-.032.079-.098a4 4 0 0 1 .325-.345c.293-.275.662-.538 1.054-.657"
                              ></path>
                            </g>
                          </svg>
                        ) : i === 2 ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={20}
                            height={20}
                            viewBox="0 0 128 128"
                          >
                            <path
                              fill="#84b0c1"
                              d="M23.91 104.02c-6.5-6.63-6.5-17.21 0-23.84l18.74-18.74c2.04-2.04 4.72-3.57 7.52-4.33s5.74-.76 8.41-.13c2.8.76 5.48 2.17 7.65 4.21l.25.25c6.63 6.63 6.63 17.21 0 23.84l-18.74 18.74c-6.62 6.63-17.33 6.63-23.83 0m53.03-53.03c-12.36-12.36-32.63-12.36-45 0L13.33 69.73c-12.36 12.36-12.36 32.63 0 45s32.63 12.36 45 0l18.74-18.74c12.23-12.37 12.23-32.63-.13-45"
                            ></path>
                            <path
                              fill="#2f7889"
                              d="M66.86 48.48c3.36-1.69 6.57-.51 6.57-.51c-6.94-5.13-14.51-6.59-21.03-6.18c-.04.05-.07.1-.11.16c-2.86 4.39-3.5 10.19-1.72 15.07c2.68-.66 5.46-.64 8-.03c1.04.28 1.83.55 3.39 1.28c.01-.01-.54-7.05 4.9-9.79m-20.1 9.98c.13-.97.19-1.95.25-2.93c.28-4.22 1-8.42 2.14-12.49c.08-.29.16-.6.24-.91c-3.09.49-6.12 1.43-8.97 2.83c-4.44 5.73-2.98 13.15 2.23 16.49c1.19-1.19 2.59-2.2 4.11-2.99"
                            ></path>
                            <path
                              fill="#84b0c1"
                              d="M104.09 23.98c6.5 6.63 6.5 17.21 0 23.84L85.35 66.56c-2.04 2.04-4.72 3.57-7.52 4.33s-5.74.76-8.41.13c-2.8-.76-5.48-2.17-7.65-4.21l-.25-.25c-6.63-6.63-6.63-17.21 0-23.84l18.74-18.74c6.62-6.63 17.33-6.63 23.83 0M51.06 77.01c12.36 12.36 32.63 12.36 45 0l18.61-18.74c12.36-12.36 12.36-32.63 0-45s-32.63-12.36-45 0L50.94 32.01c-12.24 12.37-12.24 32.63.12 45"
                            ></path>
                            <path
                              fill="#a8e3f0"
                              d="M50.45 39.42c.04-.03.08-.07.12-.1c.53-.46 1.12-.9 1.81-1.02s1.5.19 1.74.85c.18.49.02 1.03-.15 1.52c-2.63 7.95-4.74 18.04-2.18 26.27c.25.8.49 1.83-.18 2.33c-.39.3-.97.25-1.4.02c-4.7-2.54-5.52-9.42-5.74-14.14c-.26-5.96 1.39-11.7 5.98-15.73"
                            ></path>
                            <path
                              fill="#2f7889"
                              d="M71.32 71.34c-.64-.08-1.32-.21-1.32-.21s-.1 4.27-3.51 7.81c-3.78 3.92-7.55 3.82-7.55 3.82c1.99 1.15 5.96 2.34 7.4 2.68l.15-.15c3.83-3.84 5.43-9 4.83-13.95m19.44-10.19l-5.33 5.33c1.33 5.94.97 12.18-1.09 17.94c2.59-.92 5.08-2.19 7.4-3.8c3.83-6.56 2.99-14.31-.98-19.47"
                            ></path>
                            <path
                              fill="#a8e3f0"
                              d="M79.89 70.01c-.63-1.59-1.86-3.2-3.4-3.05c-.96.09-2.45.99-2.35 3.74c.07 2.13.88 4.21-.28 7c-1.7 4.08-1.31 5.18-.9 5.83c.45.71 1.28 1.03 2.05 1.02c2.03-.01 3.71-1.87 4.63-3.91c1.49-3.26 1.58-7.29.25-10.63m-30.64 38.17c.64-.53 2.3-2.3 3.07-1.18c-.28 3.08-2.65 5.59-5.25 7.27c-3.2 2.07-6.99 3.29-10.8 3.18c-3.16-.09-8.4-1.37-10.24-4.3c-1.5-2.38 1.67-2.79 3.43-2.13c6.27 2.39 13.36 2.44 19.79-2.84"
                            ></path>
                          </svg>
                        ) : (
                          "•"
                        )}
                      </span>
                    </div>
                  </div>

                  <h4 className="font-semibold text-slate-900 dark:text-white pl-0">
                    {t(`services.features.${i}.title`)}
                  </h4>

                  <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
                    {t(`services.features.${i}.text`)}
                  </p>

                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-sm text-slate-500 dark:text-slate-400">
                      {t("services.features.trusted")}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How we work - timeline style */}
        <section className="py-16 bg-white dark:bg-slate-900">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white text-center">
              {t("services.how.header")}
            </h3>
            <p className="mt-2 text-center text-slate-600 dark:text-slate-300">
              {t("services.how.subtitle")}
            </p>

            <div className="mt-12">
              <div className="relative">
                {/* horizontal connector for md+ */}
                <div className="hidden md:block absolute left-6 right-6 top-8 h-0.5 bg-slate-100 dark:bg-slate-800" />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Step 1 */}
                  <div className="relative flex flex-col items-start md:items-center">
                    <div className="flex items-center space-x-4 md:flex-col md:space-x-0 md:space-y-3 md:items-center">
                      <div className="z-10 w-14 h-14 rounded-full bg-linear-to-r from-indigo-500 to-blue-600 flex items-center justify-center text-white shadow">
                        <div className="text-lg font-bold">1</div>
                      </div>
                      <div className="md:hidden">
                        <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
                          {t("services.how.steps.0.title")}
                        </h4>
                        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                          {t("services.how.steps.0.text")}
                        </p>
                      </div>
                    </div>

                    <div className="hidden md:block mt-6 text-center">
                      <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
                        {t("services.how.steps.0.title")}
                      </h4>
                      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 max-w-xs">
                        {t("services.how.steps.0.text")}
                      </p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="relative flex flex-col items-start md:items-center">
                    <div className="flex items-center space-x-4 md:flex-col md:space-x-0 md:space-y-3 md:items-center">
                      <div className="z-10 w-14 h-14 rounded-full bg-linear-to-r from-emerald-500 to-teal-400 flex items-center justify-center text-white shadow">
                        <div className="text-lg font-bold">2</div>
                      </div>
                      <div className="md:hidden">
                        <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
                          {t("services.how.steps.1.title")}
                        </h4>
                        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                          {t("services.how.steps.1.text")}
                        </p>
                      </div>
                    </div>

                    <div className="hidden md:block mt-6 text-center">
                      <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
                        {t("services.how.steps.1.title")}
                      </h4>
                      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 max-w-xs">
                        {t("services.how.steps.1.text")}
                      </p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="relative flex flex-col items-start md:items-center">
                    <div className="flex items-center space-x-4 md:flex-col md:space-x-0 md:space-y-3 md:items-center">
                      <div className="z-10 w-14 h-14 rounded-full bg-linear-to-r from-pink-500 to-rose-400 flex items-center justify-center text-white shadow">
                        <div className="text-lg font-bold">3</div>
                      </div>
                      <div className="md:hidden">
                        <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
                          {t("services.how.steps.2.title")}
                        </h4>
                        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                          {t("services.how.steps.2.text")}
                        </p>
                      </div>
                    </div>

                    <div className="hidden md:block mt-6 text-center">
                      <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
                        {t("services.how.steps.2.title")}
                      </h4>
                      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 max-w-xs">
                        {t("services.how.steps.2.text")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Meet the team (new look) */}
        <section className="py-16 bg-white dark:bg-slate-900">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white text-center">
              {t("services.team.header")}
            </h3>
            <p className="mt-2 text-center text-slate-600 dark:text-slate-300">
              {t("services.team.subtitle")}
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers.map((m) => (
                <div
                  key={m.slug}
                  className="group relative bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-xl overflow-hidden shadow-2xl p-6 text-center hover:shadow-lg transition-shadow"
                >
                  {/* gradient ring avatar */}
                  <div className="mx-auto w-28 h-28 rounded-full p-1 bg-linear-to-br from-indigo-500 to-blue-500">
                    <div className="w-full h-full rounded-full bg-white dark:bg-slate-900 flex items-center justify-center overflow-hidden">
                      <div className="text-2xl font-bold text-slate-700 dark:text-slate-200">
                        {m.name
                          .split(" ")
                          .map((n) => n[0])
                          .slice(0, 2)
                          .join("")}
                      </div>
                    </div>
                  </div>

                  <h4 className="mt-4 font-semibold text-slate-900 dark:text-white">
                    {t(`services.team.${m.slug}.name`)}
                  </h4>

                  <div className="inline-block mt-2 px-3 py-1 text-xs rounded-full bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200">
                    {t(`services.team.${m.slug}.role`)}
                  </div>

                  <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 line-clamp-3">
                    {t(`services.team.${m.slug}.bio`)}
                  </p>

                  {/* social icons - hidden until hover or keyboard focus */}
                  <div className="flex w-full justify-center  ">
                    <div className=" absolute justify-center items-center flex    align-middle w-full       gap-4 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-200 bg-linear-to-br from-indigo-500 to-blue-500 px-6 py-4  bottom-0 left-0">
                      <a
                        href="#"
                        aria-label={`Follow ${m.name} on LinkedIn`}
                        className="text-slate-500 hover:text-slate-700 dark:text-slate-300 dark:hover:text-white"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={20}
                          height={20}
                          viewBox="0 0 256 256"
                        >
                          <g fill="none">
                            <rect
                              width={256}
                              height={256}
                              fill="#fff"
                              rx={60}
                            ></rect>
                            <rect
                              width={256}
                              height={256}
                              fill="#0a66c2"
                              rx={60}
                            ></rect>
                            <path
                              fill="#fff"
                              d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168c-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82c19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4M38 59.628c0 11.864 9.767 21.626 21.632 21.626c11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38C47.762 38 38 47.763 38 59.627m6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4"
                            ></path>
                          </g>
                        </svg>
                      </a>

                      <a
                        href="#"
                        aria-label={`Follow ${m.name} on Twitter`}
                        className="text-slate-500 hover:text-slate-700 dark:text-slate-300 dark:hover:text-white"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={20}
                          height={20}
                          viewBox="0 0 256 256"
                        >
                          <g fill="none">
                            <rect
                              width={256}
                              height={256}
                              fill="#fff"
                              rx={60}
                            ></rect>
                            <rect
                              width={256}
                              height={256}
                              fill="#1d9bf0"
                              rx={60}
                            ></rect>
                            <path
                              fill="#fff"
                              d="M199.572 91.411c.11 1.587.11 3.174.11 4.776c0 48.797-37.148 105.075-105.075 105.075v-.03A104.54 104.54 0 0 1 38 184.677q4.379.525 8.79.533a74.15 74.15 0 0 0 45.865-15.839a36.98 36.98 0 0 1-34.501-25.645a36.8 36.8 0 0 0 16.672-.636c-17.228-3.481-29.623-18.618-29.623-36.198v-.468a36.7 36.7 0 0 0 16.76 4.622c-16.226-10.845-21.228-32.432-11.43-49.31a104.8 104.8 0 0 0 76.111 38.582a36.95 36.95 0 0 1 10.683-35.283c14.874-13.982 38.267-13.265 52.249 1.601a74.1 74.1 0 0 0 23.451-8.965a37.06 37.06 0 0 1-16.234 20.424A73.5 73.5 0 0 0 218 72.282a75 75 0 0 1-18.428 19.13"
                            ></path>
                          </g>
                        </svg>
                      </a>

                      <a
                        href="#"
                        aria-label={`View ${m.name}'s GitHub`}
                        className="text-slate-500 hover:text-slate-700 dark:text-slate-300 dark:hover:text-white"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={20}
                          height={20}
                          viewBox="0 0 256 256"
                        >
                          <g fill="none">
                            <rect
                              width={256}
                              height={256}
                              fill="#f4f2ed"
                              rx={60}
                            ></rect>
                            <path
                              fill="#161614"
                              d="M128.001 30C72.779 30 28 74.77 28 130.001c0 44.183 28.653 81.667 68.387 94.89c4.997.926 6.832-2.169 6.832-4.81c0-2.385-.093-10.262-.136-18.618c-27.82 6.049-33.69-11.799-33.69-11.799c-4.55-11.559-11.104-14.632-11.104-14.632c-9.073-6.207.684-6.079.684-6.079c10.042.705 15.33 10.305 15.33 10.305c8.919 15.288 23.394 10.868 29.1 8.313c.898-6.464 3.489-10.875 6.349-13.372c-22.211-2.529-45.56-11.104-45.56-49.421c0-10.918 3.906-19.839 10.303-26.842c-1.039-2.519-4.462-12.69.968-26.464c0 0 8.398-2.687 27.508 10.25c7.977-2.215 16.531-3.326 25.03-3.364c8.498.038 17.06 1.149 25.051 3.365c19.087-12.939 27.473-10.25 27.473-10.25c5.443 13.773 2.019 23.945.98 26.463c6.412 7.003 10.292 15.924 10.292 26.842c0 38.409-23.394 46.866-45.662 49.341c3.587 3.104 6.783 9.189 6.783 18.519c0 13.38-.116 24.149-.116 27.443c0 2.661 1.8 5.779 6.869 4.797C199.383 211.64 228 174.169 228 130.001C228 74.771 183.227 30 128.001 30M65.454 172.453c-.22.497-1.002.646-1.714.305c-.726-.326-1.133-1.004-.898-1.502c.215-.512.999-.654 1.722-.311c.727.326 1.141 1.01.89 1.508m4.919 4.389c-.477.443-1.41.237-2.042-.462c-.654-.697-.777-1.629-.293-2.078c.491-.442 1.396-.235 2.051.462c.654.706.782 1.631.284 2.078m3.374 5.616c-.613.426-1.615.027-2.234-.863c-.613-.889-.613-1.955.013-2.383c.621-.427 1.608-.043 2.236.84c.611.904.611 1.971-.015 2.406m5.707 6.504c-.548.604-1.715.442-2.57-.383c-.874-.806-1.118-1.95-.568-2.555c.555-.606 1.729-.435 2.59.383c.868.804 1.133 1.957.548 2.555m7.376 2.195c-.242.784-1.366 1.14-2.499.807c-1.13-.343-1.871-1.26-1.642-2.052c.235-.788 1.364-1.159 2.505-.803c1.13.341 1.871 1.252 1.636 2.048m8.394.932c.028.824-.932 1.508-2.121 1.523c-1.196.027-2.163-.641-2.176-1.452c0-.833.939-1.51 2.134-1.53c1.19-.023 2.163.639 2.163 1.459m8.246-.316c.143.804-.683 1.631-1.864 1.851c-1.161.212-2.236-.285-2.383-1.083c-.144-.825.697-1.651 1.856-1.865c1.183-.205 2.241.279 2.391 1.097"
                            ></path>
                          </g>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
            <h3 className="text-2xl font-semibold">
              {t("services.cta.header")}
            </h3>
            <p className="mt-2 max-w-2xl mx-auto">{t("services.cta.desc")}</p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <Link
                href="/templates"
                className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold"
              >
                {t("services.cta.templates")}
              </Link>
            </div>
          </div>
        </section>

        <SiteFooter />
      </div>
    </>
  );
}
