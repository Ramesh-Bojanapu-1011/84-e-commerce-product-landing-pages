import React from "react";
import Head from "next/head";
import Link from "next/link";
import SiteHeadder from "@/components/SiteHeadder";
import SiteFooter from "@/components/SiteFooter";
import { ShoppingBag, Star, Zap, Percent, Users, Globe } from "lucide-react";

const features = [
  {
    icon: <ShoppingBag className="w-6 h-6" />,
    title: "Product-first UI",
    desc: "Focused layouts that highlight product features and variants.",
  },
  {
    icon: <Star className="w-6 h-6" />,
    title: "Ratings & Reviews",
    desc: "Built-in sections to show social proof and user feedback.",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Performance",
    desc: "Optimized images & code for fast LCP and conversion.",
  },
  {
    icon: <Percent className="w-6 h-6" />,
    title: "Promotions",
    desc: "Ready areas for discounts, bundles and countdowns.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Personalization",
    desc: "Custom variants, badges and dynamic content.",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "International & Multi-currency",
    desc: "Built-in multi-currency and shipping support for global stores.",
  },
];

const benefits = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Performance first",
    desc: "Optimized images, code-splitting and fast LCP to keep customers engaged.",
    bg: "from-indigo-500 to-blue-500",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Personalized & flexible",
    desc: "Component-driven blocks and variant-ready layouts you can tailor to any product.",
    bg: "from-blue-500 to-indigo-600",
  },
  {
    icon: <Star className="w-6 h-6" />,
    title: "Proven conversion patterns",
    desc: "Sections and flows that increase add-to-cart and checkout completion rates.",
    bg: "from-indigo-600 to-blue-500",
  },
];

const testimonials = [
  {
    name: "Aisha Khan",
    role: "Head of Ops, RetailX",
    quote:
      "These templates shortened our time-to-market and increased conversions by double digits.",
    rating: 5,
  },
  {
    name: "Liam Smith",
    role: "Founder, GadgetCo",
    quote:
      "Ready-made pages and smart defaults saved us weeks of design and testing.",
    rating: 5,
  },
  {
    name: "Maya Patel",
    role: "CEO, ShopFine",
    quote:
      "Clean, fast, and easy to customize — our product pages finally match our brand.",
    rating: 4,
  },
];

export default function Home1() {
  return (
    <>
      <Head>
        <title>Home — E-commerce Product Landing Pages</title>
        <meta
          name="description"
          content="E-commerce product landing page templates and components."
        />
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
                    E-commerce templates
                  </span>
                </div>

                <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight">
                  Product landing pages that convert — fast
                </h2>

                <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-xl">
                  Ship ready-made product pages designed for conversions:
                  galleries, variants, reviews and fast checkout flows — all
                  optimized for performance and SEO.
                </p>

                <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2 max-w-md text-sm text-slate-600 dark:text-slate-300">
                  <li className="flex items-center gap-2">
                    <span className="w-3 h-3 bg-blue-600 rounded-full" /> Fast
                    LCP
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-3 h-3 bg-blue-600 rounded-full" />{" "}
                    Accessible by default
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-3 h-3 bg-blue-600 rounded-full" />{" "}
                    SEO-friendly markup
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-3 h-3 bg-blue-600 rounded-full" /> Cart &
                    variant-ready
                  </li>
                </ul>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/templates"
                    className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-indigo-600 text-white px-5 py-3 rounded-lg shadow hover:opacity-95"
                  >
                    Browse templates
                  </Link>
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-slate-200 dark:border-slate-700"
                  >
                    Contact sales
                  </Link>
                </div>
              </div>

              {/* Right: product card */}
              <div className="relative">
                <div className="rounded-3xl bg-linear-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 border border-slate-100 dark:border-slate-800 p-6 shadow-2xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs uppercase text-slate-500 dark:text-slate-400">
                        Featured
                      </div>
                      <h3 className="mt-1 text-lg font-semibold text-slate-900 dark:text-white">
                        Smartwidget X
                      </h3>
                    </div>
                    <div className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      $249
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
                      <div className="text-sm text-slate-600">Variants: 3</div>
                      <div className="text-sm text-slate-600">•</div>
                      <div className="text-sm text-slate-600">
                        Ships worldwide
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
              Core Features
            </h3>
            <p className="mt-2 text-center text-slate-600 dark:text-slate-300">
              Everything you need to present products beautifully and sell more.
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
                        {f.icon}
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
                          Learn more →
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
              Product Showcase
            </h3>
            <p className="mt-2 text-center text-slate-600 dark:text-slate-300">
              Highlighted product experiences that match your store's brand.
            </p>

            <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
              {/* Left: large featured product */}
              <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-6 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-slate-500">Featured</div>
                    <h4 className="mt-1 text-2xl font-semibold text-slate-900 dark:text-white">
                      Aurora Headset Pro
                    </h4>
                  </div>
                  <div className="text-xl font-bold text-slate-900 dark:text-white">
                    $179
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
                      Immersive sound, comfortable fit, and long battery life —
                      perfect for product pages and demos.
                    </p>
                    <ul className="mt-4 text-sm text-slate-600 dark:text-slate-300 grid grid-cols-1 gap-2">
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-blue-600" />{" "}
                        Active noise cancellation
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-blue-600" />{" "}
                        30hr battery
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-blue-600" />{" "}
                        Quick-pairing
                      </li>
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
                        MiniCam 2
                      </div>
                      <div className="text-sm text-slate-600 dark:text-slate-300">
                        Compact action camera for lifestyle shoots.
                      </div>
                    </div>
                    <div className="text-sm font-semibold text-slate-900 dark:text-white">
                      $89
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
                        ChargePad
                      </div>
                      <div className="text-sm text-slate-600 dark:text-slate-300">
                        Wireless charging pad with fast charge support.
                      </div>
                    </div>
                    <div className="text-sm font-semibold text-slate-900 dark:text-white">
                      $39
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
              Why choose these pages?
            </h3>
            <p className="mt-2 text-center text-slate-600 dark:text-slate-300">
              Built for stores: performance, conversions and easy customization.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((b) => (
                <div
                  key={b.title}
                  className="p-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`shrink-0 w-12 h-12 rounded-lg flex items-center justify-center text-white bg-linear-to-r ${b.bg}`}
                    >
                      {b.icon}
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
                See all features
              </Link>
            </div>
          </div>
        </section>

        {/* Section 5 — Testimonials / social proof */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white text-center">
              What customers say
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
                        {t.name
                          .split(" ")
                          .map((n) => n[0])
                          .slice(0, 2)
                          .join("")}
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
            <h3 className="text-2xl font-semibold">
              Ready to ship better product pages?
            </h3>
            <p className="mt-2 max-w-2xl mx-auto">
              Start with a template and customize to your brand. Fast setup,
              built for conversions.
            </p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <Link
                href="/auth"
                className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold"
              >
                Get Started
              </Link>
              <Link
                href="/contact-us"
                className="text-white px-4 py-3 rounded-md border border-white/30"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </section>

        <SiteFooter />
      </div>
    </>
  );
}
