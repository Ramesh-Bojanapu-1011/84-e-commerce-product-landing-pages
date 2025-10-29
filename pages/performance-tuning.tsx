import SiteFooter from "@/components/SiteFooter";
import SiteHeadder from "@/components/SiteHeadder";
import Head from "next/head";
import Link from "next/link";

const variantFirstUI = () => {
  const featured = {
    slug: "performance-tuning-product-pages",
    title: "Performance tuning for product pages",
    date: "2025-10-20",
    author: "Aisha Khan",
    cover:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1400&q=80",
    reading: "7 min read",
    intro:
      "A practical case study: focused performance tuning on product pages — image delivery, critical rendering and JS cost — that improved Core Web Vitals and conversion metrics.",
    sections: [
      {
        title: "The problem",
        body: `Product pages were slow to load and interactive, especially on mobile. Large hero images, render-blocking CSS and oversized JavaScript bundles increased LCP and INP, causing higher abandonment during the add-to-cart flow.`,
      },
      {
        title: "Research & approach",
        body: `We used lab audits (Lighthouse), Real User Monitoring, and session recordings to prioritize fixes. We focused on high-traffic SKUs and prioritized changes by expected user-visible impact and implementation effort.`,
      },
      {
        title: "What we changed",
        body: `- Optimized images with responsive sizes, AVIF fallbacks and efficient delivery\n- Extracted critical CSS and inlined above-the-fold styles\n- Deferred non-essential JS, code-split product widgets and lazy-load reviews\n- Tuned CDN cache policies and accelerated asset TTLs\n- Added lightweight client-side placeholders to reduce layout shift`,
      },
      {
        title: "Results",
        body: `After a 5-week performance sprint across prioritized product pages we observed:\n- LCP reduced by 48% on average\n- INP/interaction latency improved by ~60%\n- Conversion uplift: +9% add-to-cart from product pages\n- Bounce rate on product pages dropped by 12%\nThe improvements were rolled into the platform and added to the release checklist.`,
      },
    ],
  };
  return (
    <>
      <Head>
        <title>Performance tuning for product pages — Case study</title>
        <meta
          name="description"
          content="How focused performance work on product pages — image delivery, critical CSS and JS-splitting — improved Core Web Vitals and conversions."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <SiteHeadder />
      {/* Featured article */}
      <article className="py-10 bg-white dark:bg-slate-900 caret-transparent">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <div
              className="relative h-80 bg-center bg-cover"
              style={{ backgroundImage: `url(${featured.cover})` }}
              aria-hidden
            >
              <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
              <div className="absolute left-6 bottom-6 text-white">
                <div>
                  <div className="text-sm uppercase bg-white/10 px-3 py-1 rounded-full inline-block">
                    Case study
                  </div>
                  <h2 className="mt-3 text-3xl font-extrabold leading-tight">
                    {featured.title}
                  </h2>
                  <div className="mt-2 text-sm opacity-90">
                    {featured.author} · {featured.date} · {featured.reading}
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 bg-white dark:bg-slate-800">
              <p className="text-lg text-slate-700 dark:text-slate-200">
                {featured.intro}
              </p>

              <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  {featured.sections.map((s) => (
                    <section key={s.title} className="mt-6">
                      <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                        {s.title}
                      </h3>
                      <p className="mt-3 text-slate-600 dark:text-slate-300 whitespace-pre-line">
                        {s.body}
                      </p>
                    </section>
                  ))}

                  {/* Quote */}
                  <blockquote className="mt-8 border-l-4 border-amber-400 pl-4 italic text-slate-800 dark:text-slate-100">
                    “Targeted performance tuning removed the friction in the
                    add-to-cart flow — pages felt faster and conversion improved
                    within days of the rollout.”
                  </blockquote>

                  {/* Key takeaways */}
                  <div className="mt-8">
                    <h4 className="text-lg font-semibold">Key takeaways</h4>
                    <ul className="mt-3 list-disc pl-5 text-slate-600 dark:text-slate-300">
                      <li>
                        Measure real-user metrics and prioritize by user impact.
                      </li>
                      <li>
                        Optimize critical rendering path (images, CSS,
                        first-party JS).
                      </li>
                      <li>
                        Ship small, testable changes and monitor RUM
                        post-deploy.
                      </li>
                    </ul>
                  </div>
                </div>

                <aside className="mt-6 lg:mt-0">
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-700">
                    <div className="text-sm text-slate-500">Impact</div>
                    <div className="mt-3 grid grid-cols-1 gap-3">
                      <div className="p-3 bg-white dark:bg-slate-800 rounded-lg shadow">
                        <div className="text-2xl font-bold text-emerald-600">
                          -48%
                        </div>
                        <div className="text-sm text-slate-500">
                          LCP (median)
                        </div>
                      </div>
                      <div className="p-3 bg-white dark:bg-slate-800 rounded-lg shadow">
                        <div className="text-2xl font-bold text-emerald-600">
                          -60%
                        </div>
                        <div className="text-sm text-slate-500">
                          INP / interaction latency
                        </div>
                      </div>
                      <div className="p-3 bg-white dark:bg-slate-800 rounded-lg shadow">
                        <div className="text-2xl font-bold text-emerald-600">
                          +9%
                        </div>
                        <div className="text-sm text-slate-500">
                          Conversion (add-to-cart)
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 p-4 rounded-xl bg-indigo-600 text-white text-center">
                    <div className="text-sm">
                      Want to speed up product pages?
                    </div>
                    <Link
                      href="/contact-us"
                      className="mt-3 inline-block px-4 py-2 bg-white text-indigo-700 rounded-md font-medium"
                    >
                      Book a performance sprint
                    </Link>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </article>
      <SiteFooter />
    </>
  );
};

export default variantFirstUI;
