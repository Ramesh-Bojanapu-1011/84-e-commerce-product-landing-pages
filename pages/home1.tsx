import React from "react";
import Head from "next/head";
import Link from "next/link";
import SiteHeadder from "@/components/SiteHeadder";
import SiteFooter from "@/components/SiteFooter";
import { ShoppingBag, Star, Zap, Percent, Users, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Home1() {
  const { t } = useTranslation();

  // load arrays/objects from translations (returnObjects:true lets i18next return arrays/objects)
  const features = t("home1.features.list", { returnObjects: true }) as Array<{
    title: string;
    desc: string;
  }>;
  const benefits = t("home1.benefits.list", { returnObjects: true }) as Array<{
    title: string;
    desc: string;
  }>;
  // const testimonials = t("home1.testimonials.items", { returnObjects: true }) as Array<{
  //   name: string;
  //   role: string;
  //   quote: string;
  //   rating: number;
  // }>;

  const testimonials = [
    {
      name: t("home1.testimonials.items.0.name"),
      role: t("home1.testimonials.items.0.role"),
      quote: t("home1.testimonials.items.0.quote"),
      img: "https://i.postimg.cc/3x3QzSGq/user1.jpg",

      rating: 5,
    },
    {
      name: t("home1.testimonials.items.1.name"),
      role: t("home1.testimonials.items.1.role"),
      quote: t("home1.testimonials.items.1.quote"),
      img: "https://i.postimg.cc/3x3QzSGq/user2.jpg",
      rating: 4,
    },
    {
      name: t("home1.testimonials.items.2.name"),
      role: t("home1.testimonials.items.2.role"),
      quote: t("home1.testimonials.items.2.quote"),
      img: "https://i.postimg.cc/3x3QzSGq/user3.jpg",
      rating: 5,
    },
  ];

  // keep icons local and map by index
  const featureIcons = [
    <ShoppingBag className="w-6 h-6" key="fi0" />,
    <Star className="w-6 h-6" key="fi1" />,
    <Zap className="w-6 h-6" key="fi2" />,
    <Percent className="w-6 h-6" key="fi3" />,
    <Users className="w-6 h-6" key="fi4" />,
    <Globe className="w-6 h-6" key="fi5" />,
  ];

  const benefitIcons = [
    <Zap className="w-6 h-6" key="bi0" />,
    <Users className="w-6 h-6" key="bi1" />,
    <Star className="w-6 h-6" key="bi2" />,
  ];

  return (
    <>
      <Head>
        <title>{t("home1.meta.title")}</title>
        <meta name="description" content={t("home1.meta.description")} />
      </Head>

      <div className="min-h-screen bg-linear-to-br from-blue-50 to-white dark:from-slate-900 dark:to-slate-800 caret-transparent">
        <SiteHeadder />

        {/* Section 1 — Hero (refreshed) */}
        <section className="py-20 min-h-screen">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Left: copy */}
              <div>
                <div className="inline-flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-linear-to-r from-indigo-500 to-blue-500 flex items-center justify-center text-white shadow">
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path d="M3 3h18v18H3z" strokeWidth="0" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-slate-600 dark:text-slate-300">
                    {t("home1.hero.badge")}
                  </span>
                </div>

                <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight">
                  {t("home1.hero.title")}
                </h2>

                <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-xl">
                  {t("home1.hero.desc")}
                </p>

                <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2 max-w-md text-sm text-slate-600 dark:text-slate-300">
                  {(
                    t("home1.hero.bullets", { returnObjects: true }) as string[]
                  ).map((b: string, i: number) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-3 h-3 bg-blue-600 rounded-full" /> {b}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-indigo-600 text-white px-5 py-3 rounded-lg shadow hover:opacity-95"
                  >
                    {t("home1.hero.contactSales")}
                  </Link>
                </div>
              </div>

              {/* Right: product card */}
              <div className="relative">
                <div className="rounded-3xl bg-linear-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 border border-slate-100 dark:border-slate-800 p-6 shadow-2xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs uppercase text-slate-500 dark:text-slate-400">
                        {t("home1.productCard.featured")}
                      </div>
                      <h3 className="mt-1 text-lg font-semibold text-slate-900 dark:text-white">
                        {t("home1.productCard.productName")}
                      </h3>
                    </div>
                    <div className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      {t("home1.productCard.price")}
                    </div>
                  </div>

                  {/* Theme-colored mockup — uses site gradients instead of the image's palette */}
                  <div className="mt-4 rounded-lg overflow-hidden h-64 flex items-center justify-center">
                    <div className="w-56 h-40 rounded-xl flex items-center justify-center text-white shadow-lg bg-linear-to-r from-indigo-500 to-blue-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="w-16 h-16"
                        stroke="currentColor"
                      >
                        <rect
                          x="3"
                          y="6"
                          width="18"
                          height="13"
                          rx="2"
                          strokeWidth="1.5"
                        />
                        <path
                          d="M16 3a2 2 0 0 0-4 0"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="text-sm text-slate-600">
                        {t("home1.productCard.variants")}
                      </div>
                      <div className="text-sm text-slate-600">•</div>
                      <div className="text-sm text-slate-600">
                        {t("home1.productCard.shipsWorldwide")}
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="inline-flex items-center gap-2 text-sm font-medium text-amber-500">
                        ★★★★☆
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 — Feature grid (new design) */}
        <section className="py-16 bg-white dark:bg-slate-900">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white text-center">
              {t("home1.features.header")}
            </h3>
            <p className="mt-2 text-center text-slate-600 dark:text-slate-300">
              {t("home1.features.subtitle")}
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f, idx) => (
                <div
                  key={f.title}
                  className="group relative overflow-hidden rounded-xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-6 shadow-sm hover:shadow-lg transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="shrink-0">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center text-white ${
                          idx % 2 === 0
                            ? "bg-linear-to-r from-indigo-500 to-blue-500"
                            : "bg-linear-to-r from-blue-500 to-indigo-600"
                        }`}
                      >
                        {/* icon inherits size */}
                        {featureIcons[idx % featureIcons.length]}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
                        {f.title}
                      </h4>
                      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                        {f.desc}
                      </p>
                      <div className="mt-4">
                        <Link
                          href="/features"
                          className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
                        >
                          {t("home1.cta.learnMore")}
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* subtle decorative accent */}
                  <div className="pointer-events-none absolute -right-10 -bottom-10 opacity-5 w-40 h-40 rounded-full bg-linear-to-r from-blue-400 to-indigo-400 blur-3xl"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3 — Product showcase (mosaic) */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white text-center">
              {t("home1.showcase.header")}
            </h3>
            <p className="mt-2 text-center text-slate-600 dark:text-slate-300">
              {t("home1.showcase.subtitle")}
            </p>

            <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
              {/* Left: large featured product */}
              <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-6 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-slate-500">
                      {t("home1.showcase.featured.label")}
                    </div>
                    <h4 className="mt-1 text-2xl font-semibold text-slate-900 dark:text-white">
                      {t("home1.showcase.featured.name")}
                    </h4>
                  </div>
                  <div className="text-xl font-bold text-slate-900 dark:text-white">
                    {t("home1.showcase.featured.price")}
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-6">
                  <div className="w-64 h-44 rounded-xl flex items-center justify-center text-white shadow-lg bg-linear-to-r from-indigo-500 to-blue-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="w-20 h-20"
                      stroke="currentColor"
                    >
                      <circle cx="12" cy="12" r="8" strokeWidth="1.5" />
                      <path
                        d="M8 12h8"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>

                  <div className="flex-1">
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      {t("home1.showcase.featured.desc")}
                    </p>
                    <ul className="mt-4 text-sm text-slate-600 dark:text-slate-300 grid grid-cols-1 gap-2">
                      {(
                        t("home1.showcase.featured.features", {
                          returnObjects: true,
                        }) as string[]
                      ).map((f, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-blue-600" />{" "}
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Right: two stacked smaller products */}
              <div className="space-y-6">
                <div className="rounded-xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-4 shadow">
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-16 rounded-md bg-linear-to-r from-blue-500 to-indigo-500 flex items-center justify-center text-white">
                      <svg
                        className="w-8 h-8"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                      >
                        <rect
                          x="3"
                          y="6"
                          width="18"
                          height="12"
                          rx="2"
                          strokeWidth="1.5"
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-slate-900 dark:text-white">
                        {t("home1.showcase.mini1.name")}
                      </div>
                      <div className="text-sm text-slate-600 dark:text-slate-300">
                        {t("home1.showcase.mini1.desc")}
                      </div>
                    </div>
                    <div className="text-sm font-semibold text-slate-900 dark:text-white">
                      {t("home1.showcase.mini1.price")}
                    </div>
                  </div>
                </div>

                <div className="rounded-xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-4 shadow">
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-16 rounded-md bg-linear-to-r from-indigo-500 to-blue-600 flex items-center justify-center text-white">
                      <svg
                        className="w-8 h-8"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path d="M3 7h18" strokeWidth="1.5" />
                        <rect
                          x="3"
                          y="7"
                          width="18"
                          height="12"
                          rx="2"
                          strokeWidth="1.5"
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-slate-900 dark:text-white">
                        {t("home1.showcase.mini2.name")}
                      </div>
                      <div className="text-sm text-slate-600 dark:text-slate-300">
                        {t("home1.showcase.mini2.desc")}
                      </div>
                    </div>
                    <div className="text-sm font-semibold text-slate-900 dark:text-white">
                      {t("home1.showcase.mini2.price")}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4 — Why choose these pages / benefits (refreshed) */}
        <section className="py-16 bg-white dark:bg-slate-900">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white text-center">
              {t("home1.benefits.header")}
            </h3>
            <p className="mt-2 text-center text-slate-600 dark:text-slate-300">
              {t("home1.benefits.subtitle")}
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((b, idx) => (
                <div
                  key={b.title}
                  className="p-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`shrink-0 w-12 h-12 rounded-lg flex items-center justify-center text-white bg-linear-to-r ${
                        idx % 2 === 0
                          ? "from-indigo-500 to-blue-500"
                          : "from-blue-500 to-indigo-600"
                      }`}
                    >
                      {benefitIcons[idx % benefitIcons.length]}
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white md:text-nowrap">
                        {b.title}
                      </h4>
                      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                        {b.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/features"
                className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-indigo-600 text-white px-5 py-3 rounded-lg shadow"
              >
                {t("home1.cta.seeAllFeatures")}
              </Link>
            </div>
          </div>
        </section>

        {/* Section 5 — Testimonials / social proof */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white text-center">
              {t("home1.testimonials.header")}
            </h3>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((t) => (
                <div
                  key={t.name}
                  className="relative p-6 border rounded-lg bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800"
                >
                  {/* Decorative quote mark */}
                  <svg
                    className="absolute top-4 left-4 w-8 h-8 text-slate-100 dark:text-slate-800"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden
                  >
                    <path d="M7 7h4v4H7zM13 7h4v4h-4z" fill="currentColor" />
                  </svg>

                  <p className="text-lg md:text-xl leading-relaxed text-slate-800 dark:text-slate-100 italic">
                    “{t.quote}”
                  </p>

                  <div className="mt-6 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center text-white bg-linear-to-r from-blue-600 to-indigo-600 font-semibold">
                        <img src={t.img} alt="" />
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900 dark:text-white">
                          {t.name}
                        </div>
                        <div className="text-sm text-slate-500">{t.role}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-0.5 text-amber-500">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < t.rating
                                ? "text-amber-500"
                                : "text-slate-200 dark:text-slate-700"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6 — Final CTA / Contact */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
            <h3 className="text-2xl font-semibold">{t("home1.cta.header")}</h3>
            <p className="mt-2 max-w-2xl mx-auto">{t("home1.cta.desc")}</p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <Link
                href="/contact-us"
                className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold"
              >
                {t("home1.cta.contactSales")}
              </Link>
            </div>
          </div>
        </section>

        <SiteFooter />
      </div>
    </>
  );
}
