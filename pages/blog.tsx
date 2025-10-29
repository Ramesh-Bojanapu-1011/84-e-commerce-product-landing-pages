import SiteFooter from "@/components/SiteFooter";
import SiteHeadder from "@/components/SiteHeadder";
import { Star } from "lucide-react";
import Head from "next/head";
import Link from "next/link";
import { useTranslation } from "react-i18next";

interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  cover: string;
}

export default function BlogPage() {
  const { t } = useTranslation();

  const posts: Post[] = [
    {
      slug: "hero-redesign",
      title: t("blog.posts.0.title"),
      excerpt: t("blog.posts.0.excerpt"),
      date: t("blog.posts.0.date"),
      author: t("blog.posts.0.author"),
      cover:
        "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1400&q=80&quot",
    },
    {
      slug: "variant-ui",
      title: t("blog.posts.1.title"),
      excerpt: t("blog.posts.1.excerpt"),
      date: t("blog.posts.1.date"),
      author: t("blog.posts.1.author"),
      cover:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80&quot",
    },
    {
      slug: "performance-tuning",
      title: t("blog.posts.2.title"),
      excerpt: t("blog.posts.2.excerpt"),
      date: t("blog.posts.2.date"),
      author: t("blog.posts.2.author"),
      cover:
        "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1400&q=80&quot",
    },
  ];

  const authors = [
    {
      name: t("blog.authors.people.0.name"),
      role: t("blog.authors.people.0.role"),
      bio: t("blog.authors.people.0.bio"),
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      twitter: "https://twitter.com/janedoe",
      linkedin: "https://linkedin.com/in/janedoe",
    },
    {
      name: t("blog.authors.people.1.name"),
      role: t("blog.authors.people.1.role"),
      bio: t("blog.authors.people.1.bio"),
      avatar: "https://randomuser.me/api/portraits/men/22.jpg",
      twitter: "https://twitter.com/johnsmith",
      linkedin: "https://linkedin.com/in/johnsmith",
    },
    {
      name: t("blog.authors.people.2.name"),
      role: t("blog.authors.people.2.role"),
      bio: t("blog.authors.people.2.bio"),
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      twitter: "https://twitter.com/emilyjohnson",
      linkedin: "https://linkedin.com/in/emilyjohnson",
    },
  ];

  return (
    <>
      <Head>
        <title>{t("blog.meta.title")}</title>
        <meta name="description" content={t("blog.meta.description")} />
      </Head>

      <div className="min-h-screen bg-linear-to-br from-white to-blue-50 dark:from-slate-900 dark:to-slate-800 caret-transparent">
        <SiteHeadder />

        {/* Hero */}
        <section className=" min-h-screen flex items-center justify-center text-center   ">
          <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white">
              {t("blog.hero.title")}
            </h1>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              {t("blog.hero.desc")}
            </p>

            <div className="mt-8 flex items-center justify-center gap-3">
              <Link
                href="#blogs"
                className="px-5 py-3 rounded-md bg-indigo-600 text-white"
              >
                {t("blog.hero.cta.allPosts")}
              </Link>
              <Link
                href="/services"
                className="px-5 py-3 rounded-md border border-slate-900 dark:text-white dark:border-white    "
              >
                {t("blog.hero.cta.services")}
              </Link>
            </div>
          </div>
        </section>

        {/* 3 latest posts */}
        <section id="blogs" className="py-12 bg-white dark:bg-slate-900">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white text-center">
              {t("blog.section.latest.title")}
            </h3>
            <p className="mt-2 text-center text-slate-600 dark:text-slate-300">
              {t("blog.section.latest.desc")}
            </p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              {posts.slice(0, 3).map((p) => (
                <article
                  key={p.slug}
                  className="group relative overflow-hidden rounded-2xl shadow-xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 hover:shadow-2xl transition "
                >
                  {/* cover */}
                  <div className="relative h-44 sm:h-48">
                    <div className="absolute inset-0 bg-slate-100 dark:bg-slate-900  ">
                      {/* placeholder cover - replace with Image when available */}
                      <div className="text-slate-400">
                        <img
                          src={p.cover}
                          alt={p.slug}
                          className="h-44 sm:h-48 w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent pointer-events-none" />
                    <div className="absolute left-4 top-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-white/90 dark:bg-black/60 text-slate-800 dark:text-slate-100 backdrop-blur">
                        {t("blog.card.articleLabel")}
                      </span>
                    </div>
                  </div>

                  <div className="p-5">
                    <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
                      <div>{p.date}</div>
                      <div className="hidden sm:block">
                        {p.author} · {t("blog.card.readTime", { minutes: 3 })}
                      </div>
                    </div>

                    <h4 className="mt-3 text-lg font-semibold text-slate-900 dark:text-white">
                      {p.title}
                    </h4>

                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 line-clamp-3">
                      {p.excerpt}
                    </p>

                    <div className="mt-4 flex items-center justify-between">
                      <Link
                        href={`/${p.slug}`}
                        className="inline-flex items-center gap-2 text-sm font-medium text-indigo-600 dark:text-indigo-400"
                        aria-label={t("blog.card.readArticleAria", {
                          title: p.title,
                        })}
                      >
                        {t("blog.card.readArticle")}
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          ></path>
                        </svg>
                      </Link>

                      <div
                        onClick={async () => {
                          if (!navigator.share) {
                            // Fallback: copy URL to clipboard, show a modal, etc.
                            return;
                          }

                          try {
                            await navigator.share({
                              title: document.title,
                              text: t("blog.card.shareText"),
                              url: `${window.location.origin}/${p.slug}`,
                            });
                          } catch (err: any) {
                            console.error(
                              "Share failed or was cancelled:",
                              err,
                            );
                          }
                        }}
                        className="text-sm text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 cursor-pointer  "
                      >
                        {t("blog.card.share")}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Authors */}
        <section className="py-16 ">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white text-center">
              {t("blog.authors.title")}
            </h3>
            <p className="mt-2 text-center text-slate-600 dark:text-slate-300">
              {t("blog.authors.desc")}
            </p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              {authors.map((a) => (
                <div
                  key={a.name}
                  className="p-6 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 shadow-2xl"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-linear-to-br from-indigo-500 to-pink-500 flex items-center justify-center text-white font-semibold overflow-hidden">
                      <img src={a.avatar} alt={a.name} />
                    </div>

                    <div>
                      <div className="font-semibold text-slate-900 dark:text-white">
                        {a.name}
                      </div>
                      <div className="text-sm text-slate-500 dark:text-slate-400">
                        {a.role}
                      </div>
                    </div>
                  </div>

                  <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">
                    {a.bio}
                  </p>

                  <div className="mt-4 flex items-center gap-3">
                    <a
                      href={a.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Twitter ${a.name}`}
                      className="text-slate-500 hover:text-indigo-600"
                    >
                      {/* twitter icon omitted for brevity; kept as original svg in locales */}
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
                      href={a.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`LinkedIn ${a.name}`}
                      className="text-slate-500 hover:text-indigo-600"
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
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials (refreshed) */}
        <section className="py-16 bg-slate-50 dark:bg-slate-900">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white text-center">
              {t("blog.testimonials.title")}
            </h3>
            <p className="mt-2 text-center text-slate-600 dark:text-slate-300">
              {t("blog.testimonials.desc")}
            </p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  quote: t("blog.testimonials.items.0.quote"),
                  name: t("blog.testimonials.items.0.name"),
                  role: t("blog.testimonials.items.0.role"),
                  initials: "https://randomuser.me/api/portraits/men/35.jpg",
                },
                {
                  quote: t("blog.testimonials.items.1.quote"),
                  name: t("blog.testimonials.items.1.name"),
                  role: t("blog.testimonials.items.1.role"),
                  initials: "https://randomuser.me/api/portraits/women/65.jpg",
                },
                {
                  quote: t("blog.testimonials.items.2.quote"),
                  name: t("blog.testimonials.items.2.name"),
                  role: t("blog.testimonials.items.2.role"),
                  initials: "https://randomuser.me/api/portraits/men/12.jpg",
                },
              ].map((t) => (
                <div
                  key={t.name}
                  className="group relative p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 hover:shadow-lg transition-transform transform hover:-translate-y-1 overflow-hidden"
                >
                  {/* left accent bar */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-linear-to-br from-indigo-500 to-rose-500 rounded-l-2xl" />

                  <div className="flex items-start gap-4">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-full bg-linear-to-br from-indigo-500 to-pink-500 flex items-center justify-center text-white font-semibold text-lg shadow-md overflow-hidden">
                        <img src={t.initials} alt={t.name} />
                      </div>
                    </div>

                    <div className="flex-1">
                      <div className="text-lg text-slate-700 dark:text-slate-200 italic leading-relaxed">
                        “{t.quote}”
                      </div>

                      <div className="mt-4 flex items-center justify-between">
                        <div>
                          <div className="font-semibold text-slate-900 dark:text-white">
                            {t.name}
                          </div>
                          <div className="text-sm text-slate-500 dark:text-slate-400">
                            {t.role}
                          </div>
                        </div>

                        <div className="flex items-center gap-1">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              className={`w-4 h-4 ${
                                i < 4
                                  ? "text-amber-400"
                                  : "text-slate-300 dark:text-slate-600"
                              }`}
                              key={i}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16  ">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white text-center">
              {t("blog.faq.title")}
            </h3>
            <p className="mt-2 text-center text-slate-600 dark:text-slate-300">
              {t("blog.faq.desc")}
            </p>

            <div className="mt-8 space-y-3">
              {(
                t("blog.faq.items", {
                  returnObjects: true,
                }) as unknown as Array<{ q: string; a: string }>
              ).map((f, idx) => (
                <details
                  key={f.q}
                  className="group bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-lg p-4"
                >
                  <summary className="flex items-center justify-between cursor-pointer list-none">
                    <span className="text-slate-900 dark:text-white font-medium">
                      {f.q}
                    </span>
                    <svg
                      className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden
                    >
                      <path
                        d="M6 8l4 4 4-4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </summary>
                  <div className="mt-3 text-sm text-slate-600 dark:text-slate-300">
                    {f.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 bg-indigo-600 text-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h3 className="text-2xl font-semibold">
              {t("blog.newsletter.title")}
            </h3>
            <p className="mt-2">{t("blog.newsletter.desc")}</p>
            <div className="mt-6 flex justify-center">
              <form className="w-full max-w-md flex gap-2">
                <input
                  aria-label="Email"
                  type="email"
                  placeholder={t("blog.newsletter.form.placeholder")}
                  className="flex-1 px-4 py-3 rounded-md bg-amber-100 border  text-slate-900"
                />
                <button className="px-4 py-3 bg-white text-indigo-600 rounded-md font-medium">
                  {t("blog.newsletter.form.subscribe")}
                </button>
              </form>
            </div>
          </div>
        </section>

        <SiteFooter />
      </div>
    </>
  );
}
