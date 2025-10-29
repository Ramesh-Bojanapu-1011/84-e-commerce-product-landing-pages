import { getCurrentUser, handleLogout, User } from "@/lib/localAuth";
import { ChevronDown, Grid, LogOut, Menu } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { ModeToggle } from "./theme/ModeToggle";
import { useTranslation } from "react-i18next";
import { applyLanguage } from "@/i18n";

const languages = [
  { code: "en", label: "English(EN)" },
  { code: "ar", label: "العربية(AR)" },
  { code: "he", label: "עברית(HE)" },
];

const SiteHeadder: React.FC = () => {
  const [openMobile, setOpenMobile] = React.useState(false);
  const [openProfile, setOpenProfile] = React.useState(false);
  const [openLang, setOpenLang] = React.useState(false);
  const [openNavIndex, setOpenNavIndex] = React.useState<number | null>(null);

  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  const { t } = useTranslation();

  useEffect(() => {
    // read current user from localStorage on the client only
    const u = getCurrentUser();
    setUser(u);
  }, []);

  // build nav items from translations so they update when language changes
  const navItems = [
    {
      title: t("header.home"),
      submenu: [
        { title: t("header.home1"), href: "/home1" },
        { title: t("header.home2"), href: "/home-2" },
      ],
    },
    { title: t("header.aboutUs"), href: "/about-us" },
    {
      title: t("header.services"),
      submenu: [
        { title: t("header.allServices"), href: "/services" },
        { title: t("header.productDesign"), href: "/product-design" },
        { title: t("header.uxAudit"), href: "/ux-audit" },
        { title: t("header.conversionRateOpt"), href: "/cro" },
        { title: t("header.performance"), href: "/performance" },
        { title: t("header.accessibility"), href: "/accessibility" },
        { title: t("header.integrations"), href: "/integrations" },
      ],
    },
    { title: t("header.blog"), href: "/blog" },
    { title: t("header.contactUs"), href: "/contact-us" },
  ];

  return (
    <header className="w-full bg-white   sticky top-0 z-50 border-b border-slate-200 dark:bg-slate-900/80 dark:border-slate-800 caret-transparent">
      <div className="  mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: logo */}
          <div className="flex items-center gap-4">
            <Link href="/home1" className="flex items-center gap-2">
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
            <div className="relative not-md:hidden">
              <button
                onClick={() => setOpenLang((s) => !s)}
                className="inline-flex items-center gap-1 px-3 py-1 rounded-md text-sm border border-slate-200 bg-white dark:bg-slate-900 dark:border-slate-700"
                aria-expanded={openLang}
              >
                {t("header.language")}
                <ChevronDown className="w-4 h-4" />
              </button>

              {openLang && (
                <div className="absolute right-0 mt-2 w-36 bg-white dark:bg-slate-800 rounded-md shadow-lg ring-1 ring-black/5 border border-slate-100 dark:border-slate-700">
                  <div className="py-1">
                    {languages.map((l) => (
                      <button
                        key={l.code}
                        onClick={() => {
                          // apply language and close menu
                          applyLanguage(l.code);
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

            <div className="not-md:hidden">
              {/* Theme toggle */}
              <ModeToggle />
            </div>

            {/* Profile */}
            <div className="relative">
              <button
                onClick={() => setOpenProfile((s) => !s)}
                className="flex items-center gap-2 px-2 py-1 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800"
                aria-expanded={openProfile}
              >
                <div className="w-8 h-8 rounded-full bg-linear-to-br from-indigo-500 to-blue-500 flex items-center justify-center text-sm font-medium text-white shadow-sm">
                  {user
                    ? `${(user.firstname || "").charAt(0).toUpperCase()}${(
                        user.lastname || ""
                      )
                        .charAt(0)
                        .toUpperCase()}`
                    : "AD"}
                </div>
                <span className="hidden sm:inline text-sm text-slate-700 dark:text-slate-200">
                  {t("header.profile")}
                </span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {openProfile && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-slate-800 rounded-md shadow-lg ring-1 ring-black/5 border border-slate-100 dark:border-slate-700">
                  <div className="py-1">
                    {user?.role === "admin" && (
                      <Link
                        href="/admin-dashboard"
                        className="flex items-center gap-2 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-700"
                      >
                        <Grid className="w-4 h-4" />{" "}
                        {t("header.adminDashboard")}
                      </Link>
                    )}
                    <button
                      onClick={() => {
                        // update local storage record and clear current user
                        handleLogout();
                        setUser(null);
                        // redirect to auth page
                        router.push("/auth");
                      }}
                      className="flex items-center gap-2 w-full px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-700"
                    >
                      <LogOut className="w-4 h-4" /> {t("header.logout")}
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
                    {t("header.language")}
                  </summary>
                  <div className="pl-3 absolute bg-white mt-1 space-y-1">
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
