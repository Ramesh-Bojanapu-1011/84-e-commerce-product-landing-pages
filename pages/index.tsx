import Head from "next/head";
import Link from "next/link";

import { ShoppingCart } from "lucide-react";
import SiteHeadder from "@/components/SiteHeadder";
import SiteFooter from "@/components/SiteFooter";
import { ModeToggle } from "@/components/theme/ModeToggle";

export default function Home() {
  return (
    <>
      <Head>
        <title>E-commerce (Product Landing Pages)</title>
        <meta
          name="description"
          content="Product landing pages and ecommerce templates"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      

      <div className="min-h-screen bg-linear-to-br from-blue-50 to-white dark:from-slate-900 dark:to-slate-800 caret-transparent">
        <div className=" absolute top-10 right-10">
          <ModeToggle />
        </div>
        <main className="flex items-center justify-center py-20 px-4">
          <div className="w-full max-w-3xl">
            <div className="bg-white dark:bg-slate-900/95 border border-slate-100 dark:border-slate-800 rounded-2xl shadow-2xl p-10 md:p-14 backdrop-blur-sm">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-20 h-20 rounded-full bg-linear-to-br from-indigo-500 to-blue-500 flex items-center justify-center text-white shadow-lg">
                  <ShoppingCart className="w-8 h-8" />
                </div>

                <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">
                  E-commerce Product Landing Pages
                </h1>

                <p className="max-w-xl text-slate-600 dark:text-slate-300 text-lg">
                  Beautiful, conversion-focused product landing pages and
                  templates for online stores. Fast, SEO-friendly, and optimized
                  to increase add-to-cart and checkout conversions.
                </p>

                <div className="flex flex-wrap items-center gap-3 text-sm text-blue-600 dark:text-blue-400 font-medium">
                  Product Templates
                  <span className="text-slate-300 dark:text-slate-600">|</span>
                  Features
                  <span className="text-slate-300 dark:text-slate-600">|</span>
                  Case Studies
                </div>

                <Link
                  href="/auth"
                  className="mt-6 inline-flex bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-3 rounded-xl text-lg font-semibold shadow-xl transform hover:-translate-y-0.5 transition items-center gap-3"
                >
                  Go to Login
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
      
    </>
  );
}
