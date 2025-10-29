import SiteFooter from "@/components/SiteFooter";
import SiteHeadder from "@/components/SiteHeadder";
import Head from "next/head";
import Link from "next/link";

const heroRedesign = () => {
  const featured = {
    slug: "hero-redesign",
    title: "Hero redesign that lifted conversions",
    date: "2025-10-01",
    author: "Olivia Hart",
    cover:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1400&q=80",
    reading: "6 min read",
    intro:
      "A concise case study: how a focused hero redesign — clearer value prop, visual hierarchy and a simplified CTA — produced measurable lifts in add-to-cart and revenue.",
    sections: [
      {
        title: "The problem",
        body: `The original hero had too many competing elements: multiple CTAs, unclear value proposition and heavy visual noise. Analytics showed a large drop-off on hero impressions and low click-through to product actions. We hypothesised a simpler hero focusing on one action would increase intent and reduce decision friction.`,
      },
      {
        title: "Research & approach",
        body: `We ran a quick mixed-method audit: session recordings, heatmaps and a short round of 5 usability interviews. From that we built three hypotheses and prioritized them into an A/B test with a clear success metric: increase add-to-cart events on the hero funnel.`,
      },
      {
        title: "What we changed",
        body: `- Single clear CTA that describes the immediate benefit\n- Stronger headline that communicates value within 3 seconds\n- Cleaner hero image with product in-context and a subtle trust bar\n- Reduced secondary links and simplified microcopy`,
      },
      {
        title: "Results",
        body: `After a 4-week A/B test across 100k visitors the variant with the redesigned hero delivered:\n- +32% Add-to-cart rate\n- +18% Click-through to product details\n- +12% Revenue per visitor\nThe variant held statistically significant improvement and became the new control.`,
      },
    ],
  };
  return (
    <>
      <Head>
        <title>Hero Redesign Case Study</title>
        <meta
          name="description"
          content="Case study on how a hero redesign improved conversions."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>{" "}
      <SiteHeadder />
      {/* Featured article */}
      <article className="py-10 bg-white dark:bg-slate-900">
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
                    “The new hero cut decision time in half and the measurable
                    uplift exceeded our expectations — the conversion impact was
                    immediate.”
                  </blockquote>

                  {/* Key takeaways */}
                  <div className="mt-8">
                    <h4 className="text-lg font-semibold">Key takeaways</h4>
                    <ul className="mt-3 list-disc pl-5 text-slate-600 dark:text-slate-300">
                      <li>Clarity beats cleverness — lead with the value.</li>
                      <li>One primary CTA reduces decision friction.</li>
                      <li>
                        Test with real traffic and measure revenue impact.
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
                          +32%
                        </div>
                        <div className="text-sm text-slate-500">
                          Add-to-cart
                        </div>
                      </div>
                      <div className="p-3 bg-white dark:bg-slate-800 rounded-lg shadow">
                        <div className="text-2xl font-bold text-emerald-600">
                          +12%
                        </div>
                        <div className="text-sm text-slate-500">
                          Revenue / visitor
                        </div>
                      </div>
                      <div className="p-3 bg-white dark:bg-slate-800 rounded-lg shadow">
                        <div className="text-2xl font-bold text-emerald-600">
                          4 weeks
                        </div>
                        <div className="text-sm text-slate-500">
                          Experiment length
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 p-4 rounded-xl bg-indigo-600 text-white text-center">
                    <div className="text-sm">Want similar results?</div>
                    <Link
                      href="/contact-us"
                      className="mt-3 inline-block px-4 py-2 bg-white text-indigo-700 rounded-md font-medium"
                    >
                      Book a quick consult
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
