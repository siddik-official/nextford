import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mx-auto max-w-3xl",
        align === "center" ? "text-center" : "text-left",
        className,
      )}
    >
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold tracking-[0.24em] text-[#c0623a] uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-heading text-[2.05rem] leading-tight text-[#2c1a0e] sm:text-[2.25rem]">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-[0.95rem] leading-relaxed text-[#513629]">
          {description}
        </p>
      ) : null}
    </div>
  );
}
