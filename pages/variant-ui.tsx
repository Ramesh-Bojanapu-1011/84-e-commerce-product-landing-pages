import SiteFooter from "@/components/SiteFooter";
import SiteHeadder from "@/components/SiteHeadder";
import Head from "next/head";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const variantFirstUI = () => {
  const { t } = useTranslation();

  const featured = {
    slug: "variant-first-ui-patterns",
    title: t("variantUI.featured.title"),
    date: t("variantUI.featured.date"),
    author: t("variantUI.featured.author"),
    cover:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80",
    reading: t("variantUI.featured.reading"),
    intro: t("variantUI.featured.intro"),
  };
  const sections = t("variantUI.sections", { returnObjects: true }) as Array<{
    title: string;
    body: string;
  }>;
  const keyTakeaways = t("variantUI.keyTakeaways.items", {
    returnObjects: true,
  }) as string[];
  const metrics = t("variantUI.metrics", { returnObjects: true }) as Array<{
    value: string;
    label: string;
  }>;
  return (
    <>
      <Head>
        <title>{t("variantUI.meta.title")}</title>
        <meta name="description" content={t("variantUI.meta.description")} />
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
                    {t("variantUI.label")}
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
                  {sections.map((s) => (
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
                    {t("variantUI.quote")}
                  </blockquote>

                  {/* Key takeaways */}
                  <div className="mt-8">
                    <h4 className="text-lg font-semibold">
                      {t("variantUI.keyTakeaways.title")}
                    </h4>
                    <ul className="mt-3 list-disc pl-5 text-slate-600 dark:text-slate-300">
                      {keyTakeaways.map((k) => (
                        <li key={k}>{k}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <aside className="mt-6 lg:mt-0">
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-700">
                    <div className="text-sm text-slate-500">
                      {t("variantUI.impact.title")}
                    </div>
                    <div className="mt-3 grid grid-cols-1 gap-3">
                      {metrics.map((m) => (
                        <div
                          key={m.label}
                          className="p-3 bg-white dark:bg-slate-800 rounded-lg shadow"
                        >
                          <div className="text-2xl font-bold text-emerald-600">
                            {m.value}
                          </div>
                          <div className="text-sm text-slate-500">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 p-4 rounded-xl bg-indigo-600 text-white text-center">
                    <div className="text-sm">{t("variantUI.cta.question")}</div>
                    <Link
                      href="/contact-us"
                      className="mt-3 inline-block px-4 py-2 bg-white text-indigo-700 rounded-md font-medium"
                    >
                      {t("variantUI.cta.button")}
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
