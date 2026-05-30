import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { CtaBand } from "@/components/site/cta-band";
import { SectionHeading } from "@/components/site/section-heading";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  HOME_SOCIAL_PROOF,
  SERVICES,
  SITE_CONFIG,
  USP_PILLARS,
} from "@/lib/site-data";

export const metadata: Metadata = {
  title: { absolute: "Nexford IT" },
  description:
    "Nexford IT helps Australian and New Zealand businesses run smarter and scale faster with digital growth, IT consultancy, and operations support.",
};

export default function HomePage() {
  return (
    <div>
      <section className="relative -mt-20 overflow-hidden bg-[#2c1a0e]">
        <div className="absolute inset-0">
          <Image
            src="/Artboard 1.png"
            alt=""
            fill
            priority
            className="nex-hero-pan object-cover opacity-20"
          />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_10%,rgba(192,98,58,0.35),transparent_42%)]" />
        <div className="absolute inset-0 bg-[#2c1a0e]/72" />
        <div className="absolute -top-28 right-[-7rem] size-80 rounded-full border border-[#c0623a]/40" />
        <div className="nex-float absolute top-28 right-[15%] size-28 rounded-full border border-[#c0623a]/25" />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-b from-transparent to-[#2c1a0e]/80" />

        <div className="nex-shell relative grid items-center gap-10 pt-32 pb-18 md:grid-cols-2 md:pt-36 md:pb-24">
          <div className="nex-fade-up">
            <p className="text-xs font-semibold tracking-[0.24em] text-[#f0d7c6] uppercase">
              AUS/NZ-Facing Digital and Operations Partner
            </p>
            <h1 className="mt-4 font-heading text-4xl leading-tight text-[#faf6f0] sm:text-5xl md:text-6xl">
              Run Smarter.
              <br />
              Scale Faster.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-[#f3e2d4] sm:text-lg">
              Nexford IT supports Australian and New Zealand businesses with practical digital,
              technology, and operations delivery. Every engagement is
              documented, transparent, and designed around measurable outcomes.
            </p>

            <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
              <Button
                asChild
                className="h-11 rounded-md bg-[#c0623a] px-6 text-sm font-semibold text-[#faf6f0] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#a75432]"
              >
                <Link href="/contact">{SITE_CONFIG.ctaPrimary}</Link>
              </Button>
              <Button
                asChild
                variant="ghost"
                className="h-11 rounded-md border border-[#5b3b29] px-6 text-sm font-semibold text-[#faf6f0] hover:bg-[#3a2416]"
              >
                <a
                  href={SITE_CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp us
                </a>
              </Button>
            </div>
          </div>

          <div className="relative hidden md:flex md:justify-end">
            <div className="nex-float relative flex h-72 w-72 items-end justify-start rounded-[2rem] border border-[#c0623a]/30 bg-[#372013]/95 p-5 shadow-[0_30px_70px_rgba(0,0,0,0.35)]">
              <div className="h-44 w-44 rounded-[6rem_6rem_1.8rem_1.8rem] border-8 border-[#c0623a] border-r-transparent border-b-transparent" />
              <div className="nex-glow absolute right-6 top-6 h-2 w-16 bg-[#c0623a]" />
              <div className="absolute right-6 top-11 h-2 w-10 bg-[#7b4a33]" />
            </div>
          </div>
        </div>
      </section>

      <section className="nex-shell nex-section">
        <SectionHeading
          eyebrow="Core Promise"
          title="Performance-aligned partnerships with clear accountability"
          description="Nexford IT combines market-aware delivery with transparent execution standards so your team can move faster with confidence."
          align="center"
        />

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
          {USP_PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <Card key={pillar.title} className="nex-card nex-card-hover group relative overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#c0623a] via-[#e39a74] to-[#c0623a] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <CardHeader>
                  <div className="mb-2 inline-flex size-11 items-center justify-center rounded-md bg-[#f1e4d8] text-[#c0623a] transition-transform duration-300 group-hover:scale-110">
                    <Icon className="size-5" />
                  </div>
                  <CardTitle className="font-heading text-2xl text-[#2c1a0e]">
                    {pillar.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-[0.95rem] leading-relaxed text-[#5f3e2c]">
                    {pillar.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      <section className="nex-grid-bg bg-[#f5ede5]">
        <div className="nex-shell nex-section">
          <SectionHeading
            eyebrow="Services Snapshot"
            title="Nine verticals built for practical business outcomes"
            description="Explore the service capabilities that power digital performance, operational reliability, and scalable growth."
          />

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => {
              const Icon = service.icon;

                return (
                  <Card key={service.id} className="nex-card nex-card-hover group relative overflow-hidden">
                    <div className="absolute inset-y-0 left-0 w-1 bg-[#c0623a] opacity-80" />
                    <CardHeader className="pb-3">
                      <div className="mb-1 inline-flex size-10 items-center justify-center rounded-md bg-[#f1e4d8] text-[#c0623a] transition-transform duration-300 group-hover:scale-110">
                        <Icon className="size-5" />
                      </div>
                      <CardTitle className="font-heading text-2xl text-[#2c1a0e]">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[0.94rem] leading-relaxed text-[#5f3e2c]">
                      {service.teaser}
                    </p>
                  <Link
                    href={`/services#${service.id}`}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#c0623a] hover:underline"
                  >
                    View service
                    <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </CardContent>
              </Card>
              );
            })}
          </div>

          <div className="mt-8">
            <Button
              asChild
              variant="outline"
              className="h-11 rounded-md border-[#2c1a0e] bg-transparent px-6 text-sm font-semibold text-[#2c1a0e] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2c1a0e] hover:text-[#faf6f0]"
            >
              <Link href="/services">See All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="nex-shell nex-section">
        <SectionHeading
          eyebrow="Social Proof"
          title="Trust built on clarity, not fabricated claims"
          description="Nexford IT focuses on delivery standards that clients can verify through communication cadence, reporting quality, and operational discipline."
        />

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
          {HOME_SOCIAL_PROOF.map((item) => (
            <Card key={item.stat} className="nex-card nex-card-hover">
              <CardHeader className="pb-2">
                <div className="inline-flex items-center gap-2 text-[#c0623a]">
                  <CheckCircle2 className="size-5" />
                  <p className="text-xs font-semibold tracking-[0.2em] uppercase">
                    Proof Point
                  </p>
                </div>
                <CardTitle className="font-heading text-3xl text-[#2c1a0e]">
                  {item.stat}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[0.94rem] leading-relaxed text-[#5f3e2c]">
                  {item.note}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <CtaBand
        title="Ready to improve delivery, visibility, and growth performance?"
        description="Book a practical consultation and we will map the highest-impact next steps for your business."
      />
    </div>
  );
}
