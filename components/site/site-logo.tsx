import Image from "next/image";

import { cn } from "@/lib/utils";

type SiteLogoProps = {
  compact?: boolean;
  className?: string;
  textClassName?: string;
  subtitleClassName?: string;
};

export function SiteLogo({
  compact = false,
  className,
  textClassName,
  subtitleClassName,
}: SiteLogoProps) {
  const iconSize = compact ? 34 : 40;

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <Image
        src="/Artboard 2.png"
        alt="Nexford IT logo mark"
        width={iconSize}
        height={iconSize}
        priority
      />
      <div className="flex flex-col leading-none">
        <span
          className={cn(
            "font-black tracking-[0.28em] text-xs sm:text-sm",
            textClassName
          )}
        >
          NEXFORD IT
        </span>
        {!compact ? (
          <span className={cn("mt-1 text-[0.68rem] opacity-80", subtitleClassName)}>
            Digital Growth - Technology Solutions
          </span>
        ) : null}
      </div>
    </div>
  );
}
