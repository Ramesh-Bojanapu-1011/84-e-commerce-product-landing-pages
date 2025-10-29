import React from "react";
import Head from "next/head";
import Link from "next/link";
import SiteHeadder from "@/components/SiteHeadder";
import SiteFooter from "@/components/SiteFooter";
import { ShoppingCart, Package, Globe, Zap, Star, Users } from "lucide-react";
import { useTranslation } from "react-i18next";
import i18n from "@/i18n";

// We'll keep icons local and read textual content from translations.

export default function Home2() {
  const { t } = useTranslation();

  // load arrays/objects from translations
  const highlights = t("home2.highlights", { returnObjects: true }) as Array<{
    title: string;
    desc: string;
  }>;
  const steps = t("home2.steps", { returnObjects: true }) as Array<{
    id: number;
    title: string;
    desc: string;
  }>;
  // const gallery = t("home2.gallery", { returnObjects: true }) as Array<{
  //   id: number;
  //   title: string;
  //   price: number;
  //   desc: string;
  // }>;
  const gallery = [
    {
      id: 1,
      title: t("home2.gallery.0.title"),
      price: 99,
      desc: t("home2.gallery.0.desc"),
      img: "https://i.pinimg.com/736x/02/40/af/0240afa6a4159b5e6aa5961cffeae3fb.jpg",
    },
    {
      id: 2,
      title:  t("home2.gallery.1.title"),
      price: 199,
      desc:  t("home2.gallery.1.desc"),
      img: "https://i.pinimg.com/736x/a7/b2/01/a7b2014d08144a31e109fffff912b07e.jpg",
    },
    {
      id: 3,
      title:  t("home2.gallery.2.title"),
      price: 149,
      desc:  t("home2.gallery.2.desc"),
      img: "https://i.pinimg.com/1200x/9d/8a/12/9d8a120cf5f5b8259a31618a742db7c1.jpg",
    },
    {
      id: 4,
      title:  t("home2.gallery.3.title"),
      price: 79,
      desc:   t("home2.gallery.3.desc"),
      img: "https://i.pinimg.com/1200x/85/93/34/859334876ba72c88ea4416b4b802a3e2.jpg",
    },
  ];
  const componentsList = t("home2.components", {
    returnObjects: true,
  }) as Array<{ id: string; title: string; desc: string }>;

  // icons kept locally and paired by index
  const highlightIcons = [
    <ShoppingCart className="w-6 h-6" key="hi0" />,
    <Package className="w-6 h-6" key="hi1" />,
    <Globe className="w-6 h-6" key="hi2" />,
  ];

  const stepIcons = [
    <Zap className="w-10 h-10" key="si0" />,
    <Users className="w-10 h-10" key="si1" />,
    <Star className="w-10 h-10" key="si2" />,
  ];

  const componentIcons = {
    hero: <Package className="w-6 h-6" key="ci-hero" />,
    variants: <ShoppingCart className="w-6 h-6" key="ci-variants" />,
    reviews: <Star className="w-6 h-6" key="ci-reviews" />,
    upsell: <Zap className="w-6 h-6" key="ci-upsell" />,
    intl: <Globe className="w-6 h-6" key="ci-intl" />,
    checkout: <Users className="w-6 h-6" key="ci-checkout" />,
  } as Record<string, React.ReactElement>;
  return (
    <>
      <Head>
        <title>Home 2 — E-commerce Product Pages</title>
        <meta
          name="description"
          content="Alternate home layout for e-commerce product landing pages."
        />
      </Head>

      <div className="min-h-screen bg-linear-to-br from-white to-blue-50 dark:from-slate-900 dark:to-slate-800   caret-transparent">
        <SiteHeadder />

        {/* Section 1 — Hero */}
        <section className="  min-h-screen flex justify-center items-center  ">
          <div className="max-w-6xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white">
                {t("home2.hero.title")}
              </h1>
              <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-xl">
                {t("home2.hero.desc")}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-indigo-600 text-white px-5 py-3 rounded-lg shadow"
                >
                  {t("home2.hero.contactSales")}
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-300">
                {(
                  t("home2.hero.badges", { returnObjects: true }) as string[]
                ).map((b, i) => (
                  <div key={i} className="inline-flex items-center gap-2">
                    <span className="w-3 h-3 bg-blue-600 rounded-full" /> {b}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl p-6 bg-linear-to-r from-indigo-500 to-blue-600 text-white shadow-2xl">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm opacity-90">
                      {t("home2.hero.featuredProduct")}
                    </div>
                    <h3 className="mt-1 text-xl font-semibold">
                      {t("home2.hero.featuredProduct")}
                    </h3>
                  </div>
                  <div className="text-lg font-bold">$129</div>
                </div>

                <div className="mt-4 h-48 flex items-center justify-center rounded-xl bg-white/10">
                  <img
                    src="https://i.pinimg.com/1200x/1b/86/23/1b8623f4693a51b8f144ca46d97f44e0.jpg"
                    alt=""
                    
                    className="h-full w-full object-cover object-center rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 — Highlights */}
        <section className="py-12 bg-white dark:bg-slate-900">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white text-center">
              {t("home2.highlightsHeader")}
            </h3>
            <p className="mt-2 text-center text-slate-600 dark:text-slate-300">
              {t("home2.highlightsSubtitle")}
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {highlights.map((h, idx) => (
                <div
                  key={h.title}
                  className="group relative p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-lg transition-transform transform hover:-translate-y-2"
                >
                  {/* left accent stripe */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl bg-linear-to-r from-indigo-500 to-blue-500 opacity-90" />

                  <div className="relative flex items-start gap-4">
                    <div className="shrink-0 w-12 h-12 rounded-lg flex items-center justify-center text-white bg-linear-to-r from-indigo-500 to-blue-500">
                      {highlightIcons[idx % highlightIcons.length]}
                    </div>

                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white">
                        {h.title}
                      </h4>
                      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                        {h.desc}
                      </p>
                      <div className="mt-3">
                        <Link
                          href="/features"
                          className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
                        >
                          Learn more →
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3 — Benefits / How it works (zig-zag) */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white text-center">
              {t("home2.stepsHeader")}
            </h3>
            <p className="mt-2 text-center text-slate-600 dark:text-slate-300">
              {t("home2.stepsSubtitle")}
            </p>

            <div className="mt-8 space-y-12">
              {steps.map((s, idx) => (
                <div
                  key={s.id}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center"
                >
                  <div
                    className={`flex items-center justify-center ${
                      idx % 2 === 1 ? "md:order-2" : ""
                    }`}
                  >
                    <div className="w-44 h-44 rounded-2xl bg-linear-to-r from-indigo-50 to-blue-50 dark:from-slate-800 dark:to-slate-700 flex items-center justify-center shadow-lg">
                      <div className="w-20 h-20 rounded-lg bg-linear-to-r from-indigo-500 to-blue-600 flex items-center justify-center text-white">
                        {stepIcons[idx % stepIcons.length]}
                      </div>
                    </div>
                  </div>

                  <div
                    className={`${
                      idx % 2 === 1
                        ? `md:order-1 ${
                            i18n.language == "en"
                              ? `md:text-right`
                              : `md:text-left`
                          } `
                        : ""
                    }`}
                  >
                    <div className="text-sm text-slate-500">Step {s.id}</div>
                    <h4 className="mt-2 text-2xl font-semibold text-slate-900 dark:text-white">
                      {s.title}
                    </h4>
                    <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
                      {s.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4 — Gallery */}
        <section className="py-16 bg-white dark:bg-slate-900">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white text-center">
              {t("home2.galleryHeader")}
            </h3>
            <p className="mt-2 text-center text-slate-600 dark:text-slate-300">
              {t("home2.gallerySubtitle")}
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {gallery.map((p) => (
                <div
                  key={p.id}
                  className="group rounded-lg overflow-hidden bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow hover:shadow-lg transition transform hover:-translate-y-1"
                >
                  <div className="relative w-full h-48 bg-linear-to-r from-indigo-50 to-blue-50 dark:from-slate-800 dark:to-slate-700 flex items-center justify-center">
                    {/* price badge */}
                    <div className="absolute left-3 top-3 bg-white/90 dark:bg-slate-800/80 text-slate-900 dark:text-white px-2 py-1 rounded-md text-sm font-semibold">
                      ${p.price}
                    </div>

                    {/* placeholder art */}
                    <img src={p.img} alt="" className="h-full w-full object-cover object-center" />
                  </div>

                  <div className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="font-semibold text-slate-900 dark:text-white">
                        {p.title}
                      </div>
                    </div>

                    <div className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                      {p.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4.5 — Components included */}
        <section className="py-16 bg-slate-50 dark:bg-slate-900">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white text-center">
              {t("home2.componentsHeader")}
            </h3>
            <p className="mt-2 text-center text-slate-600 dark:text-slate-300">
              {t("home2.componentsSubtitle")}
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {componentsList.map((c) => (
                <div
                  key={c.id}
                  className="relative pt-6 p-6 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-800 rounded-2xl shadow-sm hover:shadow-xl transform hover:-translate-y-2 transition"
                >
                  {/* top gradient accent */}
                  <div className="absolute inset-x-0 top-0 h-2 rounded-t-2xl bg-linear-to-r from-indigo-500 to-blue-600" />

                  {/* overlapping icon */}
                  <div className="absolute left-6 -top-6 w-12 h-12 rounded-lg flex items-center justify-center text-white bg-linear-to-r from-indigo-500 to-blue-600 shadow-md">
                    {componentIcons[c.id]}
                  </div>

                  <div className="mt-4 pl-0">
                    <h4 className="mt-2 ml-8 font-semibold text-slate-900 dark:text-white">
                      {c.title}
                    </h4>
                    <p className="mt-2 ml-8 text-sm text-slate-600 dark:text-slate-300">
                      {c.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6 — Final CTA */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
            <h3 className="text-2xl font-semibold">
              {t("home2.finalCta.title")}
            </h3>
            <p className="mt-2 max-w-2xl mx-auto">{t("home2.finalCta.desc")}</p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <Link
                href="/contact-us"
                className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold"
              >
                {t("home2.finalCta.talkToSales")}
              </Link>
            </div>
          </div>
        </section>

        <SiteFooter />
      </div>
    </>
  );
}
