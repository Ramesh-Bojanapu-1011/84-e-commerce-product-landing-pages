import SiteFooter from "@/components/SiteFooter";
import SiteHeadder from "@/components/SiteHeadder";
import Head from "next/head";
import Link from "next/link";

const heroRedesign = () => {
  const featured = {
    slug: "variant-first-ui-patterns",
    title: "Variant-first UI patterns for fewer returns",
    date: "2025-11-12",
    author: "Samir Rao",
    cover:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80",
    reading: "7 min read",
    intro:
      "A practical case study: how designing variant-first product pages and clearer expectations reduced returns and support friction while increasing repurchase intent.",
    sections: [
      {
        title: "The problem",
        body: `High return rates were eroding margin and creating friction for operations. Customers often reported "item not as expected": unclear product variants, misleading images and missing size/fit guidance. We believed better variant-first UI that set clearer expectations would reduce returns and support load.`,
      },
      {
        title: "Research & approach",
        body: `We combined quantitative signals (returns by SKU, support tickets, heatmaps) with qualitative research (post-purchase interviews and recorded sessions). From this we defined three experiment hypotheses focused on variant clarity, imagery and microcopy around sizing and materials.`,
      },
      {
        title: "What we changed",
        body: `- Variant-first layout that surfaces selected options and visual swatches near the CTA\n- Consistent, real-product imagery tied to each variant (no generic hero shots)\n- Size guides, fit notes and short social proof snippets adjacent to the action\n- Microcopy clarifying materials and return windows`,
      },
      {
        title: "Results",
        body: `A 6-week experiment across targeted SKUs produced:\n- -25% Returns rate for tested SKUs\n- -18% Support contacts about fit/expectations\n- +8% Reorder rate (repeat purchase intent)\nThe variant-first pattern showed durable improvement and was rolled into the product template.`,
      },
    ],
  };
  return (
    <>
      <Head>
        <title>Variant-first UI patterns — Reduce returns</title>
        <meta
          name="description"
          content="Case study: how variant-first product pages and clearer expectations reduced returns, support load and improved repurchase intent."
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
                    “Moving to a variant-first layout clarified expectations for
                    customers — returns dropped substantially and support
                    contacts decreased within weeks.”
                  </blockquote>

                  {/* Key takeaways */}
                  <div className="mt-8">
                    <h4 className="text-lg font-semibold">Key takeaways</h4>
                    <ul className="mt-3 list-disc pl-5 text-slate-600 dark:text-slate-300">
                      <li>
                        Show the selected variant clearly and match images to
                        it.
                      </li>
                      <li>
                        Surface size, fit and material notes close to the
                        action.
                      </li>
                      <li>
                        Prioritize tests that reduce returns and support volume.
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
                          -25%
                        </div>
                        <div className="text-sm text-slate-500">
                          Returns rate
                        </div>
                      </div>
                      <div className="p-3 bg-white dark:bg-slate-800 rounded-lg shadow">
                        <div className="text-2xl font-bold text-emerald-600">
                          -18%
                        </div>
                        <div className="text-sm text-slate-500">
                          Support contacts
                        </div>
                      </div>
                      <div className="p-3 bg-white dark:bg-slate-800 rounded-lg shadow">
                        <div className="text-2xl font-bold text-emerald-600">
                          +8%
                        </div>
                        <div className="text-sm text-slate-500">
                          Reorder rate
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 p-4 rounded-xl bg-indigo-600 text-white text-center">
                    <div className="text-sm">Want to reduce returns?</div>
                    <Link
                      href="/contact-us"
                      className="mt-3 inline-block px-4 py-2 bg-white text-indigo-700 rounded-md font-medium"
                    >
                      Book a returns audit
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

export default heroRedesign;
