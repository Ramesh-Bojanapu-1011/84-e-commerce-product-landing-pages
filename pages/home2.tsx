import React from "react";
import Head from "next/head";
import Link from "next/link";
import SiteHeadder from "@/components/SiteHeadder";
import SiteFooter from "@/components/SiteFooter";
import { ShoppingCart, Package, Globe, Zap, Star, Users } from "lucide-react";

const highlights = [
  {
    icon: <ShoppingCart className="w-6 h-6" />,
    title: "Conversion-ready UI",
    desc: "Pre-built product blocks and CTAs tuned for higher add-to-cart rates.",
  },
  {
    icon: <Package className="w-6 h-6" />,
    title: "Variant-first product cards",
    desc: "Flexible variant and bundle layouts for modern storefronts.",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "International-ready",
    desc: "Multi-currency and locale-friendly components out of the box.",
  },
];

const gallery = [
  { id: 1, title: "Nimbus Speaker", price: 129 },
  { id: 2, title: "Aurora Headphones", price: 149 },
  { id: 3, title: "Lumen Lamp", price: 89 },
  { id: 4, title: "Breeze Fan", price: 99 },
];

const steps = [
  {
    id: 1,
    title: "Pick a template",
    desc: "Choose a layout that matches your product and brand.",
    icon: <Zap className="w-10 h-10" />,
  },
  {
    id: 2,
    title: "Customize",
    desc: "Swap images, update text, and connect variants in minutes.",
    icon: <Users className="w-10 h-10" />,
  },
  {
    id: 3,
    title: "Launch & iterate",
    desc: "Monitor metrics and A/B test sections to improve conversions.",
    icon: <Star className="w-10 h-10" />,
  },
];

const componentsList = [
  {
    id: "hero",
    title: "Product hero",
    desc: "Large hero with images, price, and prominent CTA to convert visitors.",
    icon: <Package className="w-6 h-6" />,
  },
  {
    id: "variants",
    title: "Variant selector",
    desc: "Size, color and bundle pickers that map cleanly to your store's SKUs.",
    icon: <ShoppingCart className="w-6 h-6" />,
  },
  {
    id: "reviews",
    title: "Reviews & ratings",
    desc: "Customer feedback, star ratings and verified purchaser badges.",
    icon: <Star className="w-6 h-6" />,
  },
  {
    id: "upsell",
    title: "Cross-sell modules",
    desc: "Related products, bundles and post-purchase recommendations.",
    icon: <Zap className="w-6 h-6" />,
  },
  {
    id: "intl",
    title: "International-ready",
    desc: "Locale & currency-aware blocks plus RTL support.",
    icon: <Globe className="w-6 h-6" />,
  },
  {
    id: "checkout",
    title: "Optimized checkout",
    desc: "Fast, accessible checkout flows with minimal friction.",
    icon: <Users className="w-6 h-6" />,
  },
];

export default function Home2() {
  return (
    <>
      <Head>
        <title>Home 2 — E-commerce Product Pages</title>
        <meta
          name="description"
          content="Alternate home layout for e-commerce product landing pages."
        />
      </Head>

      <div className="min-h-screen bg-linear-to-br from-white to-blue-50 dark:from-slate-900 dark:to-slate-800">
        <SiteHeadder />

        {/* Section 1 — Hero */}
        <section className="  min-h-screen flex justify-center items-center  ">
          <div className="max-w-6xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white">
                Build product pages that sell — faster
              </h1>
              <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-xl">
                Launch high-converting product pages with curated components,
                fast images, and best-practice layouts. Plug them into your
                store and iterate quickly.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/templates"
                  className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-indigo-600 text-white px-5 py-3 rounded-lg shadow"
                >
                  Explore templates
                </Link>
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-slate-200 dark:border-slate-700"
                >
                  Contact sales
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-300">
                <div className="inline-flex items-center gap-2">
                  <span className="w-3 h-3 bg-blue-600 rounded-full" />{" "}
                  Performance-first
                </div>
                <div className="inline-flex items-center gap-2">
                  <span className="w-3 h-3 bg-blue-600 rounded-full" /> SEO &
                  accessibility
                </div>
                <div className="inline-flex items-center gap-2">
                  <span className="w-3 h-3 bg-blue-600 rounded-full" />{" "}
                  Mobile-optimized
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl p-6 bg-linear-to-r from-indigo-500 to-blue-600 text-white shadow-2xl">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm opacity-90">Featured</div>
                    <h3 className="mt-1 text-xl font-semibold">
                      Nimbus Speaker
                    </h3>
                  </div>
                  <div className="text-lg font-bold">$129</div>
                </div>

                <div className="mt-4 h-48 flex items-center justify-center rounded-xl bg-white/10">
                  <svg
                    className="w-24 h-24 opacity-90"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <circle cx="12" cy="12" r="8" strokeWidth="1.5" />
                  </svg>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <div className="text-sm opacity-90">Ships worldwide</div>
                  <Link
                    href="/product/nimbus"
                    className="bg-white text-indigo-700 px-4 py-2 rounded-md font-medium"
                  >
                    Quick view
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 — Highlights */}
        <section className="py-12 bg-white dark:bg-slate-900">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white text-center">
              What this theme gives you
            </h3>
            <p className="mt-2 text-center text-slate-600 dark:text-slate-300">
              Handcrafted components built for product storytelling and
              conversions.
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
                      {h.icon}
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
              How it works
            </h3>
            <p className="mt-2 text-center text-slate-600 dark:text-slate-300">
              Three steps to launch a product page
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
                        {s.icon}
                      </div>
                    </div>
                  </div>

                  <div
                    className={`${
                      idx % 2 === 1 ? "md:order-1 md:text-right" : ""
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
              Product gallery
            </h3>
            <p className="mt-2 text-center text-slate-600 dark:text-slate-300">
              Showcase product variants, angles and context shots.
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
                    <svg
                      className="w-28 h-28 text-slate-300"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <rect
                        x="3"
                        y="6"
                        width="18"
                        height="12"
                        rx="2"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </div>

                  <div className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="font-semibold text-slate-900 dark:text-white">
                        {p.title}
                      </div>
                      <div className="text-sm text-slate-500">
                        Free shipping
                      </div>
                    </div>

                    <div className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                      Short caption about this product view.
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
              Components included
            </h3>
            <p className="mt-2 text-center text-slate-600 dark:text-slate-300">
              Ready-made blocks you can mix-and-match to build product pages
              quickly.
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
                    {c.icon}
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
              Ready to ship beautiful product pages?
            </h3>
            <p className="mt-2 max-w-2xl mx-auto">
              Start with a template, customize, and convert more visitors into
              customers.
            </p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <Link
                href="/templates"
                className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold"
              >
                Get templates
              </Link>
              <Link
                href="/contact-us"
                className="text-white px-4 py-3 rounded-md border border-white/30"
              >
                Talk to sales
              </Link>
            </div>
          </div>
        </section>

        <SiteFooter />
      </div>
    </>
  );
}
