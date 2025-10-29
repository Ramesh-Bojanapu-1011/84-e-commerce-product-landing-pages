import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";

const SiteFooter: React.FC = () => {
  const { t } = useTranslation();

  const services = [
    { title: t("header.productDesign"), href: "/product-design" },
    { title: t("header.uxAudit"), href: "/ux-audit" },
    { title: t("header.conversionRateOpt"), href: "/conversion-rate-opt" },
    { title: t("header.performance"), href: "/performance" },
    { title: t("header.accessibility"), href: "/accessibility" },
    { title: t("header.integrations"), href: "/integrations" },
  ];

  const quickLinks = [
    { title: t("header.home1"), href: "/home1" },
    { title: t("header.home2"), href: "/home2" },
    { title: t("header.aboutUs"), href: "/about-us" },
    { title: t("header.services"), href: "/services" },
    { title: t("header.blog"), href: "/blog" },
    { title: t("header.contactUs"), href: "/contact-us" },
  ];

  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-slate-400 dark:border-slate-800 caret-transparent">
      <div className="  mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Column 1: logo + about */}
          <div>
            <img
              src="https://i.postimg.cc/DwdH9gv8/logo-stackly.png"
              alt={t("footer.logoAlt")}
              width={100}
              height={100}
              className="object-cover"
            />

            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              {t("footer.about")}
            </p>
          </div>

          {/* Column 2: Quick links */}
          <div className="flex md:justify-center">
            <div>
              <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-3">
                {t("footer.quickLinks")}
              </h4>
              <ul className="space-y-2">
                {quickLinks.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                    >
                      {l.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 3: Services (reuse list) */}
          <div className="flex md:justify-center">
            <div>
              <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-3">
                {t("footer.services")}
              </h4>
              <ul className="space-y-2">
                {services.map((s) => (
                  <li key={s.href}>
                    <Link
                      href={s.href}
                      className="text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                    >
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 4: Contact */}
          <div className="flex md:justify-center">
            <div>
              <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-3">
                {t("footer.contactUs")}
              </h4>
              <div className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-1 text-slate-500 dark:text-slate-300" />
                  <div>
                    {t("footer.contact.addressLine1")}
                    <br />
                    {t("footer.contact.addressLine2")}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-slate-500 dark:text-slate-300" />
                  <a
                    href={`mailto:${t("footer.contact.email")}`}
                    className="text-blue-600 hover:underline dark:text-blue-400"
                  >
                    {t("footer.contact.email")}
                  </a>
                </div>

                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-slate-500 dark:text-slate-300" />
                  <a
                    href={`tel:${t("footer.contact.phone")}`}
                    className="text-blue-600 hover:underline dark:text-blue-400"
                  >
                    {t("footer.contact.phone")}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-100 dark:border-slate-800 pt-6 text-sm text-slate-500 dark:text-slate-400">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4">
            <div>
              {t("footer.copyright", { year: new Date().getFullYear() })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
