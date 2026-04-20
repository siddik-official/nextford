import type { Metadata } from "next";
import { Quote, UserRound } from "lucide-react";

import { CtaBand } from "@/components/site/cta-band";
import { SectionHeading } from "@/components/site/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ABOUT_FOUNDER_STORY,
  BRAND_VALUES,
  TEAM_MEMBERS,
} from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn how Nexford IT supports Australian businesses with transparent, documented, and accountable delivery from Dhaka.",
};

function PullQuote({ title, quote }: { title: string; quote: string }) {
  return (
    <div className="rounded-lg border border-[#dbcabc] bg-[#faf6f0] p-6">
      <p className="text-xs font-semibold tracking-[0.22em] text-[#c0623a] uppercase">
        {title}
      </p>
      <div className="mt-4 border-l-4 border-[#c0623a] pl-4">
        <p className="font-heading text-[0.95rem] leading-relaxed italic text-[#2c1a0e]">
          {quote}
        </p>
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <div>
      <section className="nex-shell pb-12 pt-14">
        <SectionHeading
          eyebrow="About Nexford IT"
          title="A remote-first team built for Australian business outcomes"
          description="Nexford IT combines digital growth, technology strategy, and operations execution so clients can reduce friction and improve performance with confidence."
        />
      </section>

      <section className="nex-shell pb-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <div className="nex-card nex-card-hover rounded-xl p-6 sm:p-8">
              <div className="mb-5 inline-flex size-11 items-center justify-center rounded-md bg-[#f1e4d8] text-[#c0623a]">
                <Quote className="size-5" />
              </div>
              <h2 className="font-heading text-3xl text-[#2c1a0e]">
                Founder Story
              </h2>
              <div className="mt-5 space-y-4 text-[0.96rem] leading-relaxed text-[#52392b]">
                {ABOUT_FOUNDER_STORY.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-4 lg:col-span-2">
            <PullQuote
              title="Mission"
              quote="To help Australian businesses scale with confidence through transparent delivery, practical strategy, and execution systems that stay measurable and accountable."
            />
            <PullQuote
              title="Vision"
              quote="To be the most trusted AU-facing digital and operations partner for growth-stage and established businesses that value speed, clarity, and reliable outcomes."
            />
          </div>
        </div>
      </section>

      <section className="nex-grid-bg bg-[#f5ede5]">
        <div className="nex-shell nex-section">
          <SectionHeading
            eyebrow="Team"
            title="Remote-first, delivery-focused, and aligned to AEDT workflows"
            description="Our structure keeps communication clear and handoffs documented while preserving the flexibility needed for fast-moving projects."
          />

          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
            {TEAM_MEMBERS.map((member) => (
              <Card key={member.name} className="nex-card nex-card-hover">
                <CardHeader>
                  <div className="mb-2 inline-flex size-12 items-center justify-center rounded-full border border-[#d8c8ba] text-[#c0623a]">
                    <UserRound className="size-5" />
                  </div>
                  <CardTitle className="font-heading text-2xl text-[#2c1a0e]">
                    {member.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-1 text-sm text-[#5f3e2c]">
                  <p className="font-semibold">{member.title}</p>
                  <p>{member.location}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="nex-shell nex-section">
        <SectionHeading
          eyebrow="Brand Values"
          title="How we work on every engagement"
          description="Nexford IT delivery standards are designed to keep teams aligned, decisions visible, and outcomes measurable."
        />

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {BRAND_VALUES.map((value) => {
            const Icon = value.icon;

            return (
              <Card key={value.title} className="nex-card nex-card-hover group">
                <CardHeader className="pb-3">
                  <div className="mb-1 inline-flex size-10 items-center justify-center rounded-md bg-[#f2e5d9] text-[#c0623a] transition-transform duration-300 group-hover:scale-110">
                    <Icon className="size-5" />
                  </div>
                  <CardTitle className="font-heading text-[1.45rem] text-[#2c1a0e]">
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[0.95rem] leading-relaxed text-[#5f3e2c]">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      <CtaBand
        title="Need a partner who can execute with structure and speed?"
        description="Book a consultation and we will map your highest-impact opportunities."
      />
    </div>
  );
}
