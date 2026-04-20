import Link from "next/link";

import { SiteLogo } from "@/components/site/site-logo";
import { NAV_ITEMS, SITE_CONFIG } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t-4 border-[#c0623a] bg-[#2c1a0e] text-[#faf6f0]">
      <div className="nex-shell grid gap-10 py-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <SiteLogo compact className="mb-4" />
          <p className="text-sm text-[#f5e7d8]">
            Digital Growth - Technology Solutions
          </p>
          <p className="mt-2 text-sm opacity-75">{SITE_CONFIG.domain}</p>
        </div>

        <div>
          <h4 className="font-heading text-lg">Navigation</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="opacity-75 transition-opacity hover:opacity-100 hover:underline hover:decoration-[#c0623a] hover:underline-offset-4"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading text-lg">Contact</h4>
          <ul className="mt-4 space-y-2 text-sm opacity-75">
            <li>
              <a href={`mailto:${SITE_CONFIG.email}`}>{SITE_CONFIG.email}</a>
            </li>
            <li>
              <a
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp Business
              </a>
            </li>
            <li>{SITE_CONFIG.location}</li>
            <li>Serving clients worldwide</li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading text-lg">Legal</h4>
          <ul className="mt-4 space-y-2 text-sm opacity-75">
            <li>
              <Link href="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/terms-of-service">Terms of Service</Link>
            </li>
            <li className="pt-2">© 2025 Nexford IT. All rights reserved.</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
