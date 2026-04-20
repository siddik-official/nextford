import Link from "next/link";

import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/lib/site-data";
import { cn } from "@/lib/utils";

type CtaBandProps = {
  title: string;
  description?: string;
  className?: string;
};

export function CtaBand({ title, description, className }: CtaBandProps) {
  return (
    <section className={cn("bg-[#c0623a]", className)}>
      <div className="nex-shell flex flex-col items-start justify-between gap-6 py-11 md:flex-row md:items-center">
        <div className="max-w-2xl">
          <h3 className="font-heading text-[2rem] leading-tight text-[#faf6f0] sm:text-[2.2rem]">
            {title}
          </h3>
          {description ? (
            <p className="mt-2 text-[0.94rem] text-[#fff4ea] sm:text-[0.96rem]">
              {description}
            </p>
          ) : null}
        </div>
        <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center">
          <Button
            asChild
            className="h-11 rounded-md bg-[#faf6f0] px-6 text-sm font-semibold text-[#2c1a0e] hover:bg-white"
          >
            <Link href="/contact">{SITE_CONFIG.ctaPrimary}</Link>
          </Button>
          <Button
            asChild
            variant="ghost"
            className="h-11 rounded-md border border-[#f6e8db] px-6 text-sm font-semibold text-[#faf6f0] hover:bg-[#b35631]"
          >
            <a href={SITE_CONFIG.whatsappUrl} target="_blank" rel="noreferrer">
              WhatsApp us
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
