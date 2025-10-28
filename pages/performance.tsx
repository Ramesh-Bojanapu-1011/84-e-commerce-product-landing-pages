import Link from "next/link";
import SiteFooter from "../src/components/SiteFooter";
import SiteHeadder from "../src/components/SiteHeadder";
import Head from "next/head";
import { Quote, Linkedin, Twitter } from "lucide-react";

const features = [
  {
    title: "Core Web Vitals",
    desc: "Improve LCP, INP and CLS to deliver faster, more reliable pages.",
  },
  {
    title: "Resource Optimization",
    desc: "Optimize images, fonts and critical CSS to dramatically reduce payloads.",
  },
  {
    title: "Caching & CDN",
    desc: "Smart cache policies and CDN strategies to serve assets closer to users.",
  },
  {
    title: "JS & Bundles",
    desc: "Code-splitting, tree-shaking and lazy-loading to minimize runtime cost.",
  },
];

const processSteps = [
  {
    step: "Measure",
    copy: "Run lab and field audits (Lighthouse, Real User Metrics) to baseline performance.",
  },
  {
    step: "Prioritize",
    copy: "Identify high-impact fixes by cost, risk and expected metric improvement.",
  },
  {
    step: "Implement",
    copy: "Ship focused changes: image delivery, critical CSS, caching and bundle splits.",
  },
  {
    step: "Monitor",
    copy: "Automate monitoring and alerts to prevent regressions and measure long-term gains.",
  },
];

const projects = [
  {
    title: "Core Web Vitals Sprint",
    tag: "E‑commerce",
    img: "https://images.unsplash.com/photo-1505685296765-3a2736de412f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Image & Font Optimization",
    tag: "Publishing",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Bundle Reduction for App",
    tag: "SaaS",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
  },
];

const team = [
  { name: "Priya Nair", role: "Performance Engineer", avatar: "/avatar1.jpg" },
  {
    name: "Omar Haddad",
    role: "Frontend Engineer",
    avatar: "/avatar2.jpg",
  },
  {
    name: "Sofia Ruiz",
    role: "Infrastructure & CDN Lead",
    avatar: "/avatar3.jpg",
  },
];

const testimonials = [
  {
    quote:
      "Cut our LCP in half and organic traffic rose within weeks — great impact on revenue.",
    who: "Luca B.",
    role: "Head of Engineering, RetailCo",
    avatar: "/avatar1.jpg",
    rating: 5,
  },
  {
    quote:
      "Their performance sprint removed critical render-blocking assets and improved engagement significantly.",
    who: "Nadia R.",
    role: "Product Manager, NewsDaily",
    avatar: "/avatar2.jpg",
    rating: 5,
  },
  {
    quote:
      "Reliable monitoring and alerts helped us prevent regressions after releases.",
    who: "Tom W.",
    role: "CTO, SaaSWorks",
    avatar: "/avatar3.jpg",
    rating: 5,
  },
];

const ConversionOptimizationPage = () => {
  return (
    <>
      <Head>
        <title>Performance Optimization - Enkonix</title>
        <meta
          name="description"
          content="Improve page speed, Core Web Vitals and delivery pipelines—performance sprints, image & font optimization, caching and monitoring."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <SiteHeadder />
      <main className=" caret-transparent ">
        {/* Hero */}
        <section className="relative overflow-hidden bg-linear-to-br from-indigo-600 to-emerald-500 text-white min-h-screen flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-6  ">
            <div className="grid grid-cols-1   gap-10 items-center">
              <div className="flex justify-center items-center flex-col">
                <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
                  Performance optimization that speeds growth
                </h1>
                <p className="mt-4 text-lg opacity-90 max-w-xl">
                  Practical performance sprints: reduce load times, improve Core
                  Web Vitals and keep pages fast at scale.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="#projects"
                    className="inline-flex items-center rounded-lg bg-white/20 px-4 py-2 text-white hover:bg-white/30"
                  >
                    See case studies
                  </Link>
                  <Link
                    href="#contact"
                    className="inline-flex items-center rounded-lg bg-white text-indigo-700 px-4 py-2 hover:shadow"
                  >
                    Get a consult
                  </Link>
                </div>

                <div className="mt-6 flex flex-wrap gap-2 text-sm opacity-95">
                  {["LCP", "TTFB", "CLS", "Lighthouse"].map((b) => (
                    <span
                      key={b}
                      className="rounded-full bg-white/10 px-3 py-1"
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section
          aria-labelledby="features-title"
          className=" flex justify-center py-12 items-center   "
        >
          <div className="flex flex-col  max-w-7xl">
            <h2 id="features-title" className="text-2xl text-center font-bold">
              What we do
            </h2>
            <p className="mt-2 text-center text-slate-500 dark:text-slate-300 ">
              Fast, technical and product-focused performance work: audits,
              targeted fixes and automated monitoring.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((f, idx) => (
                <article
                  key={idx}
                  className="group relative rounded-2xl overflow-hidden bg-white/60 dark:bg-slate-900/50 border border-slate-200/30 dark:border-slate-700/20 p-6 shadow-xl hover:shadow-2xl transition transform hover:-translate-y-2"
                >
                  <div className="flex items-start gap-4">
                    <div className="shrink-0">
                      <div className="h-12 w-12 rounded-xl bg-linear-to-br from-indigo-500 to-emerald-400 text-white flex items-center justify-center shadow">
                        {/* subtle svg icon */}
                        <svg
                          className="w-6 h-6"
                          viewBox="0 0 24 24"
                          fill="none"
                          aria-hidden
                        >
                          <path
                            d="M5 12h14M12 5v14"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>

                    <div>
                      <h5 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                        {f.title}
                      </h5>
                      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 max-w-xs">
                        {f.desc}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section
          aria-labelledby="process-title"
          className=" flex   justify-center py-12 items-center "
        >
          <div className=" items-center flex-col w-screen   flex">
            <h2 id="process-title" className="text-2xl font-bold">
              Our process
            </h2>
            <p className="mt-2 text-slate-500 dark:text-slate-300 max-w-2xl">
              A practical audit → fix → monitor workflow that reduces load times
              and improves user experience.
            </p>

            <ol className="mt-8 relative w-full">
              <div className="max-w-7xl mx-auto relative">
                {/* center line for timeline (visible on md+) */}
                <div
                  className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-700 transform -translate-x-1/2"
                  aria-hidden
                />

                <div className="space-y-12 w-full flex flex-col ">
                  {processSteps.map((p, i) => (
                    <li
                      key={p.step}
                      className={` flex    items-center  ${
                        i % 2 === 0
                          ? " md:justify-start md:ml-10  flex-row-reverse"
                          : " md:justify-start md:mr-10"
                      }`}
                      aria-label={`Step ${i + 1}: ${p.step}`}
                    >
                      {/* left or right content */}
                      <div
                        className={`mt-4 w-1/2 md:mt-0 ${
                          i % 2 === 0 ? "" : ""
                        }`}
                      >
                        <div className="bg-white/70 dark:bg-slate-800/60 p-6 rounded-lg shadow-sm">
                          <h4 className="text-lg font-semibold">{p.step}</h4>
                          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                            {p.copy}
                          </p>
                        </div>
                      </div>

                      {/* badge in the middle column */}
                      <div className="hidden md:flex md:col-start-2 md:justify-center">
                        <div className="relative z-10">
                          <div className="h-12 w-12 rounded-full bg-linear-to-br from-emerald-400 to-indigo-600 text-white flex items-center justify-center font-bold shadow-xl md:-translate-y-1">
                            {i + 1}
                          </div>
                        </div>
                      </div>

                      {/* empty placeholder for the opposite side on md (keeps grid consistent) */}
                      <div className="md:block" aria-hidden />
                    </li>
                  ))}
                </div>
              </div>
            </ol>
          </div>
        </section>

        {/* Projects / Case studies */}
        <section
          id="projects"
          aria-labelledby="projects-title"
          className="flex w-full justify-center "
        >
          <div className="flex flex-col max-w-7xl justify-center items-center">
            <h2 id="projects-title" className="text-2xl font-bold">
              Selected work
            </h2>
            <p className="mt-2 text-slate-500 dark:text-slate-300 max-w-2xl">
              Short snapshots of recent projects — outcomes first.
            </p>

            <div className="mt-8">
              {/* Mosaic layout: featured large tile + staggered tiles */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
                {projects.map((p, idx) => {
                  const isFeatured = idx === 0;
                  // featured: span 4 cols on lg, tall; others: span 2 cols
                  const baseClasses = isFeatured
                    ? "col-span-1 sm:col-span-2 lg:col-span-4 row-span-2"
                    : "col-span-1 sm:col-span-1 lg:col-span-2";

                  return (
                    <article
                      key={p.title}
                      className={`group relative overflow-hidden rounded-xl shadow-lg ${baseClasses} bg-slate-50 dark:bg-slate-900/50 py-5 `}
                      aria-labelledby={`project-${idx}`}
                    >
                      <div
                        className={`absolute inset-0 bg-center bg-cover transition-transform duration-500        group-hover:scale-105`}
                        style={{ backgroundImage: `url(${p.img})` }}
                        aria-hidden
                      />

                      {/* overlay */}
                      <div
                        className="absolute inset-0 bg-linear-to-t from-black/75 to-transparent    "
                        aria-hidden
                      />

                      <div className="relative p-6 flex flex-col justify-end h-44 md:h-full">
                        <h3
                          id={`project-${idx}`}
                          className="text-lg font-semibold text-white"
                        >
                          {p.title}
                        </h3>
                        <div className="mt-1 text-xs text-white/90">
                          {p.tag}
                        </div>

                        <p className="mt-3 hidden sm:block text-sm text-white/80 max-w-prose">
                          A short summary of the impact and metrics — concise
                          and outcome focused.
                        </p>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials (new look) */}
        <section
          aria-labelledby="testimonials-title"
          className="flex justify-center items-center py-20"
        >
          <div className="flex flex-col justify-center items-center max-w-7xl">
            <h2 id="testimonials-title" className="text-2xl font-bold">
              What clients say
            </h2>
            <p className="mt-2 text-slate-500 dark:text-slate-300 max-w-2xl">
              Short quotes from product and engineering teams who saw faster
              pages and better retention.
            </p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((t, idx) => (
                <div
                  key={idx}
                  className="relative rounded-xl p-6 bg-white dark:bg-slate-800 border border-slate-200/40 dark:border-slate-700/30 shadow-sm overflow-visible"
                >
                  {/* quote badge */}
                  <div className="absolute -top-5 left-6 h-12 w-12 rounded-full bg-linear-to-br from-emerald-400 to-indigo-600 text-white flex items-center justify-center shadow-2xl">
                    <Quote className=" rotate-180" />
                  </div>

                  {/* rating */}
                  <div className="flex items-center gap-1 text-amber-400 mb-3">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden
                      >
                        <path d="M12 .587l3.668 7.431L24 9.748l-6 5.847 1.416 8.264L12 19.771 4.584 23.859 6 15.595 0 9.748l8.332-1.73z" />
                      </svg>
                    ))}
                  </div>

                  <p className="text-slate-800 dark:text-slate-100">
                    “{t.quote}”
                  </p>

                  <div className="mt-4 flex items-center gap-3">
                    <img
                      src={t.avatar}
                      alt={t.who}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-sm">{t.who}</div>
                      <div className="text-xs text-slate-500 dark:text-slate-300">
                        {t.role}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section aria-labelledby="team-title" className="py-12">
          <div className="max-w-7xl mx-auto">
            <h2 id="team-title" className="text-2xl font-bold text-center">
              Meet the team
            </h2>
            <p className="mt-2 text-center text-slate-500 dark:text-slate-300 max-w-2xl mx-auto">
              Small, cross-functional performance teams specializing in frontend
              efficiency, infra and monitoring.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {team.map((m) => (
                <div
                  key={m.name}
                  className="group relative rounded-xl overflow-hidden bg-white dark:bg-slate-900/40 border border-slate-100/60 dark:border-slate-700/30 p-6 shadow-sm hover:shadow-lg transition transform hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4">
                    <img
                      src={m.avatar}
                      alt={m.name}
                      className="h-16 w-16 rounded-full object-cover ring-2 ring-white dark:ring-slate-800 shadow"
                    />

                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-semibold text-lg">{m.name}</div>
                          <div className="text-sm text-slate-500 dark:text-slate-300">
                            {m.role}
                          </div>
                        </div>
                        <div className="hidden sm:flex items-center gap-2">
                          <a
                            href="#"
                            aria-label={`${m.name} LinkedIn`}
                            className="p-2 rounded-md text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
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
                            aria-label={`${m.name} Twitter`}
                            className="p-2 rounded-md text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
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
                        </div>
                      </div>

                      <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
                        Experienced in product strategy, interaction design and
                        building design systems that scale.
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section id="contact" className="py-12 bg-indigo-600 text-white">
          <div className="max-w-3xl flex flex-col mx-auto items-center justify-center text-center">
            <h2 className="text-2xl font-bold">
              Ready to speed up your product?
            </h2>
            <p className="mt-2 opacity-90">
              Share your site and performance goals — we’ll recommend a quick
              sprint to improve key metrics and prevent regressions.
            </p>

            <div className="mt-6 flex gap-3">
              <Link
                href="#"
                className="rounded-md bg-white text-indigo-600 px-4 py-2 font-medium"
              >
                Send brief
              </Link>
              <Link
                href="/contact-us"
                className="rounded-md border border-white/30 px-4 py-2"
              >
                Schedule call
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
};

export default ConversionOptimizationPage;
