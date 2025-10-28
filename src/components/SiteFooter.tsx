import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

const services = [
  { href: "/services/product-design", label: "Product Page Design" },
  { href: "/services/ux-audit", label: "UX/UI Audit" },
  { href: "/services/cro", label: "Conversion Rate Optimization" },
  { href: "/services/performance", label: "Performance Tuning" },
  { href: "/services/accessibility", label: "Accessibility Audit" },
  { href: "/services/integrations", label: "Platform Integration" },
];

const quickLinks = [
  { href: "/home1", label: "Home1" },
  { href: "/home2", label: "Home2" },
  { href: "/about-us", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/contact-us", label: "Contact" },
];

const SiteFooter: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 caret-transparent">
      <div className="  mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Column 1: logo + about */}
          <div>
            <img
              src="https://i.postimg.cc/DwdH9gv8/logo-stackly.png"
              alt="EcomPages"
              width={100}
              height={100}
              className="object-cover"
            />

            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              We build attractive, high-converting product landing pages and
              product detail experiences tailored for ecommerce brands. Fast,
              accessible and designed to sell.
            </p>
          </div>

          {/* Column 2: Quick links */}
          <div className="flex md:justify-center">
            <div>
              <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-3">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {quickLinks.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                    >
                      {l.label}
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
                Services
              </h4>
              <ul className="space-y-2">
                {services.map((s) => (
                  <li key={s.href}>
                    <Link
                      href={s.href}
                      className="text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                    >
                      {s.label}
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
                Contact Us
              </h4>
              <div className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-1 text-slate-500 dark:text-slate-300" />
                  <div>
                    123 Ecom Street
                    <br />
                    Commerce City, EC 12345
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-slate-500 dark:text-slate-300" />
                  <a
                    href="mailto:hello@ecompages.io"
                    className="text-blue-600 hover:underline dark:text-blue-400"
                  >
                    hello@ecompages.io
                  </a>
                </div>

                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-slate-500 dark:text-slate-300" />
                  <a
                    href="tel:+1234567890"
                    className="text-blue-600 hover:underline dark:text-blue-400"
                  >
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-100 dark:border-slate-800 pt-6 text-sm text-slate-500 dark:text-slate-400">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4">
            <div>
              © {new Date().getFullYear()} EcomPages. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
