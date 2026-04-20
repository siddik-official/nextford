"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

import { SiteLogo } from "@/components/site/site-logo";
import { Button } from "@/components/ui/button";
import { NAV_ITEMS, SITE_CONFIG } from "@/lib/site-data";
import { useSiteStore } from "@/lib/store/site-store";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const mobileMenuOpen = useSiteStore((state) => state.mobileMenuOpen);
  const setMobileMenuOpen = useSiteStore((state) => state.setMobileMenuOpen);
  const toggleMobileMenu = useSiteStore((state) => state.toggleMobileMenu);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname, setMobileMenuOpen]);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 w-full z-50 transition-all duration-300",
          isScrolled || mobileMenuOpen || pathname !== "/"
            ? "border-b border-[#4a2d1c] bg-[#2c1a0e]/95 backdrop-blur-md shadow-lg"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <div className="nex-shell flex h-20 items-center">
          <Link href="/" aria-label="Nexford IT home">
            <SiteLogo compact textClassName="text-white" />
          </Link>

          <nav className="mx-auto hidden items-center gap-7 lg:flex">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative text-sm font-semibold text-[#faf6f0] transition-colors",
                    "after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-[#c0623a] after:transition-transform",
                    isActive
                      ? "text-white after:scale-x-100"
                      : "hover:text-white hover:after:scale-x-100",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="ml-auto hidden lg:block">
            <Button
              asChild
              className="h-11 rounded-md bg-[#c0623a] px-5 text-sm font-semibold text-[#faf6f0] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#a75432]"
            >
              <Link href="/contact">Book a Consultation</Link>
            </Button>
          </div>

          <button
            type="button"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
            className="ml-auto inline-flex size-10 items-center justify-center rounded-md border border-[#5a3a28] text-[#faf6f0] lg:hidden"
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? (
              <X className="size-5" />
            ) : (
              <Menu className="size-5" />
            )}
          </button>
        </div>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-40 bg-[#2c1a0e] px-6 pt-28 pb-10 transition-all duration-300 lg:hidden",
          mobileMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
        )}
      >
        <nav className="flex flex-col gap-5">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "border-b border-[#4a2d1c] pb-3 text-2xl font-heading",
                  isActive ? "text-[#c0623a]" : "text-[#faf6f0]",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="mt-10 flex flex-col gap-3">
          <Button
            asChild
            className="h-11 rounded-md bg-[#c0623a] px-5 text-sm font-semibold text-[#faf6f0] hover:bg-[#a75432]"
          >
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
              {SITE_CONFIG.ctaPrimary}
            </Link>
          </Button>
          <Button
            asChild
            variant="ghost"
            className="h-11 rounded-md border border-[#5a3a28] px-5 text-sm font-semibold text-[#faf6f0] hover:bg-[#3a2214]"
          >
            <a href={SITE_CONFIG.whatsappUrl} target="_blank" rel="noreferrer">
              WhatsApp us
            </a>
          </Button>
        </div>
      </div>
    </>
  );
}
