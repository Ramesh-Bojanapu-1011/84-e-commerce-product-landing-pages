import { ChevronDown, Grid, LogOut, Menu, User } from "lucide-react";
import Link from "next/link";
import React from "react";
import { ModeToggle } from "./theme/ModeToggle";

const navItems = [
  {
    title: "Home",
    submenu: [
      { title: "Home 1", href: "/" },
      { title: "Home 2", href: "/home-2" },
    ],
  },
  { title: "About Us", href: "/about" },
  {
    title: "Services",
    submenu: [
      { title: "Product Design", href: "/services/product-design" },
      { title: "UX/UI Audit", href: "/services/ux-audit" },
      { title: "Conversion Rate Opt.", href: "/services/cro" },
      { title: "Performance", href: "/services/performance" },
      { title: "Accessibility", href: "/services/accessibility" },
      { title: "Integrations", href: "/services/integrations" },
    ],
  },
  { title: "Blog", href: "/blog" },
  { title: "Contact Us", href: "/contact" },
];

const languages = [
  { code: "en", label: "English" },
  { code: "ar", label: "العربية" },
  { code: "he", label: "עברית" },
];

const SiteHeadder: React.FC = () => {
  const [openMobile, setOpenMobile] = React.useState(false);
  const [openProfile, setOpenProfile] = React.useState(false);
  const [openLang, setOpenLang] = React.useState(false);
  const [openNavIndex, setOpenNavIndex] = React.useState<number | null>(null);

  return (
    <header className="w-full bg-white/80 backdrop-blur sticky top-0 z-50 border-b border-slate-200 dark:bg-slate-900/80 dark:border-slate-800 caret-transparent">
      <div className="  mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: logo */}
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2">
              <img
                src="https://i.postimg.cc/DwdH9gv8/logo-stackly.png"
                alt=""
                width={100}
                height={100}
                className=" object-cover "
              />
            </Link>
          </div>

          {/* Center: nav (hidden on mobile) */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item, idx) => (
              <div key={item.title} className="relative">
                {item.submenu ? (
                  <button
                    onClick={() =>
                      setOpenNavIndex(openNavIndex === idx ? null : idx)
                    }
                    className="flex items-center gap-1 text-slate-700 hover:text-blue-600 dark:text-slate-200 dark:hover:text-blue-300"
                  >
                    <span>{item.title}</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                ) : (
                  <Link
                    href={(item as any).href}
                    className="text-slate-700 hover:text-blue-600 dark:text-slate-200 dark:hover:text-blue-300"
                  >
                    {item.title}
                  </Link>
                )}

                {item.submenu && openNavIndex === idx && (
                  <div
                    onMouseEnter={() => setOpenNavIndex(idx)}
                    onMouseLeave={() => setOpenNavIndex(null)}
                    className="absolute left-0  mt-2   bg-white dark:bg-slate-800 rounded-md shadow-lg ring-1 ring-black/5 border border-slate-100 dark:border-slate-700 text-nowrap"
                  >
                    <div className="py-2">
                      {item.submenu.map((s) => (
                        <Link
                          key={s.title}
                          href={s.href}
                          className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-blue-600 dark:text-slate-200 dark:hover:bg-slate-700 dark:hover:text-blue-300"
                        >
                          {s.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right: actions */}
          <div className="flex items-center gap-3">
            {/* Language selector */}
              <div className="relative">
              <button
                onClick={() => setOpenLang((s) => !s)}
                className="inline-flex items-center gap-1 px-3 py-1 rounded-md text-sm border border-slate-200 bg-white dark:bg-slate-900 dark:border-slate-700"
                aria-expanded={openLang}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M256 42.667c117.821 0 213.334 95.513 213.334 213.333c0 117.821-95.513 213.334-213.334 213.334c-117.82 0-213.333-95.513-213.333-213.334C42.667 138.18 138.18 42.667 256 42.667m52.84 234.667H203.16c.258 5.539.612 10.99 1.057 16.344l1.154 11.927q.325 2.937.685 5.827l1.575 11.362c3.982 26.038 10.058 48.678 17.105 66.118l3.077 7.15c8.867 19.327 18.932 30.605 28.186 30.605s19.32-11.278 28.187-30.605l3.076-7.15c7.048-17.44 13.124-40.08 17.106-66.118l1.575-11.362q.36-2.891.685-5.827l1.154-11.927c.444-5.353.799-10.805 1.056-16.344m-148.418 0H86.654c7.629 61.173 47.631 112.291 102.322 135.669c-7.732-16.349-14.061-35.65-18.81-57.093l-2.337-11.397c-2.921-15.443-5.06-31.857-6.357-48.965l-.814-12.956q-.13-2.62-.236-5.258m264.924 0H351.58q-.106 2.638-.236 5.258l-.814 12.956c-1.297 17.108-3.436 33.522-6.358 48.965l-2.337 11.397c-4.748 21.442-11.077 40.744-18.81 57.09c54.691-23.375 94.694-74.493 102.322-135.665M188.976 99.002l-1.847.8c-53.743 23.73-92.933 74.383-100.475 134.865l73.768.002a519 519 0 0 1 .236-5.259l.814-12.957c1.297-17.108 3.436-33.521 6.357-48.965l2.337-11.396c4.749-21.442 11.078-40.744 18.81-57.09M256 85.334l-.278.003c-9.177.223-19.13 11.468-27.908 30.602l-3.077 7.15c-7.047 17.44-13.123 40.08-17.105 66.118l-1.575 11.362q-.36 2.89-.685 5.827l-1.154 11.927a450 450 0 0 0-1.057 16.343H308.84a450 450 0 0 0-1.056-16.343l-1.154-11.927q-.325-2.937-.685-5.827l-1.575-11.362c-3.982-26.038-10.058-48.679-17.106-66.118l-3.076-7.15C275.319 96.612 265.255 85.334 256 85.334m67.025 13.664l.645 1.381c7.44 16.05 13.549 34.87 18.164 55.712l2.337 11.396c2.922 15.444 5.06 31.857 6.358 48.965l.814 12.957q.13 2.62.236 5.259l73.767-.002c-7.628-61.172-47.63-112.29-102.32-135.668"
                  ></path>
                </svg>
                <ChevronDown className="w-4 h-4" />
              </button>

              {openLang && (
                <div className="absolute right-0 mt-2 w-36 bg-white dark:bg-slate-800 rounded-md shadow-lg ring-1 ring-black/5 border border-slate-100 dark:border-slate-700">
                  <div className="py-1">
                    {languages.map((l) => (
                      <button
                        key={l.code}
                        onClick={() => {
                          // placeholder for i18n change
                          setOpenLang(false);
                        }}
                        className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-700"
                      >
                        {l.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Theme toggle */}
            <ModeToggle />

            {/* Profile */}
            <div className="relative">
              <button
                onClick={() => setOpenProfile((s) => !s)}
                className="flex items-center gap-2 px-2 py-1 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800"
                aria-expanded={openProfile}
              >
                <div className="w-8 h-8 rounded-full bg-linear-to-br from-indigo-500 to-blue-500 flex items-center justify-center text-sm font-medium text-white shadow-sm">
                  <User className="w-4 h-4" />
                </div>
                <span className="hidden sm:inline text-sm text-slate-700 dark:text-slate-200">
                  Account
                </span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {openProfile && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-slate-800 rounded-md shadow-lg ring-1 ring-black/5 border border-slate-100 dark:border-slate-700">
                  <div className="py-1">
                    <Link
                      href="/admin"
                      className="flex items-center gap-2 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-700"
                    >
                      <Grid className="w-4 h-4" /> Admin Dashboard
                    </Link>
                    <button className="flex items-center gap-2 w-full px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-700">
                      <LogOut className="w-4 h-4" /> Logout
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setOpenMobile((s) => !s)}
                className="p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800"
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6 text-slate-700 dark:text-slate-200" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu drawer */}
      {openMobile && (
        <div className="md:hidden border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900">
          <div className="px-4 pt-4 pb-6 space-y-3">
            {navItems.map((item) => (
              <div key={item.title} className="">
                {item.submenu ? (
                  <details className="group">
                    <summary className="flex items-center justify-between px-2 py-2 cursor-pointer text-slate-800 dark:text-slate-200">
                      <span>{item.title}</span>
                      <ChevronDown className="w-4 h-4" />
                    </summary>
                    <div className="mt-1 pl-4 space-y-1">
                      {item.submenu.map((s) => (
                        <Link
                          key={s.title}
                          href={s.href}
                          className="block px-2 py-1 text-slate-700 dark:text-slate-200"
                        >
                          {s.title}
                        </Link>
                      ))}
                    </div>
                  </details>
                ) : (
                  <Link
                    href={(item as any).href}
                    className="block px-2 py-2 text-slate-800 dark:text-slate-200"
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}

            <div className="flex items-center justify-between">
              <div>
                <ModeToggle />
              </div>
              <div>
                <details>
                  <summary className="cursor-pointer px-2 py-1">
                    Language
                  </summary>
                  <div className="pl-3 mt-1 space-y-1">
                    {languages.map((l) => (
                      <button
                        key={l.code}
                        className="block text-left px-2 py-1 text-sm"
                      >
                        {l.label}
                      </button>
                    ))}
                  </div>
                </details>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default SiteHeadder;
