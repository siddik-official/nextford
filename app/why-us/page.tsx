import type { Metadata } from "next";
import { ShieldCheck } from "lucide-react";

import { CtaBand } from "@/components/site/cta-band";
import { SectionHeading } from "@/components/site/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { WHY_US_COMPARISON, WHY_US_DIFFERENTIATORS } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Why Us",
  description:
    "Discover what makes Nexford IT different: performance-aligned delivery, transparent operations, and AUS/NZ-ready execution standards.",
};

export default function WhyUsPage() {
  return (
    <div>
      <section className="nex-shell pb-12 pt-14">
        <SectionHeading
          eyebrow="Why Nexford IT"
          title="Built for outcomes, clarity, and long-term trust"
          description="We focus on what actually improves delivery performance: accountable ownership, compliance-aware operations, and transparent communication."
        />
      </section>

      <section className="nex-shell pb-16">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {WHY_US_DIFFERENTIATORS.map((item) => (
            <Card key={item.title} className="nex-card nex-card-hover">
              <CardHeader className="pb-3">
                <CardTitle className="font-heading text-2xl text-[#2c1a0e]">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[0.95rem] leading-relaxed text-[#5f3e2c]">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="nex-grid-bg bg-[#f5ede5]">
        <div className="nex-shell nex-section">
          <SectionHeading
            eyebrow="Comparison"
            title="What others do vs what we do"
            description="A practical comparison of delivery behaviour and business impact."
          />

          <div className="mt-8 overflow-hidden rounded-lg border border-[#d6c7b9] bg-[#faf6f0]">
            <Table>
              <TableHeader>
                <TableRow className="border-b-0 bg-[#2c1a0e] hover:bg-[#2c1a0e]">
                  <TableHead className="text-[#faf6f0]">
                    What others do
                  </TableHead>
                  <TableHead className="text-[#faf6f0]">What we do</TableHead>
                  <TableHead className="text-[#faf6f0]">
                    Why it matters
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {WHY_US_COMPARISON.map((row, index) => (
                  <TableRow
                    key={row.others}
                    className={
                      index % 2 === 0 ? "bg-[#faf6f0]" : "bg-[#f3ebe2]"
                    }
                  >
                    <TableCell className="text-[#4c3224]">
                      {row.others}
                    </TableCell>
                    <TableCell className="text-[#2c1a0e]">{row.weDo}</TableCell>
                    <TableCell className="text-[#4c3224]">
                      {row.matters}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </section>

      <section className="nex-shell nex-section">
        <Card className="nex-card">
          <CardHeader>
            <div className="mb-2 inline-flex size-11 items-center justify-center rounded-md bg-[#f2e5d9] text-[#c0623a]">
              <ShieldCheck className="size-5" />
            </div>
            <CardTitle className="font-heading text-3xl text-[#2c1a0e]">
              Trust Signals
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-[0.96rem] leading-relaxed text-[#4f3527]">
            <p>
              Nexford IT engagements are designed with practical awareness of
              VEU and ESC workflow expectations, AUS/NZ privacy obligations, and
              documentation-first delivery standards.
            </p>
            <p>
              We structure work through clear scopes, MSA-backed engagements,
              and transparent reporting so clients can make decisions with
              confidence.
            </p>
            <p>
              We do not use fabricated badges, fake certifications, or inflated
              social proof. Trust is earned through visible execution.
            </p>
          </CardContent>
        </Card>
      </section>

      <CtaBand
        title="If delivery quality matters, we should talk."
        description="Book a consultation to map the most effective support model for your growth stage."
      />
    </div>
  );
}
