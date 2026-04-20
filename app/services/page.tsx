import type { Metadata } from "next";

import { CtaBand } from "@/components/site/cta-band";
import { SectionHeading } from "@/components/site/section-heading";
import { ServiceCatalog } from "@/components/site/service-catalog";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore all nine Nexford IT service verticals across digital growth, IT consultancy, operations, back office, and product support.",
};

export default function ServicesPage() {
  return (
    <div>
      <section className="nex-shell pb-12 pt-14">
        <SectionHeading
          eyebrow="Services"
          title="Full service catalogue across nine verticals"
          description="Every service card is fully visible in MVP with structured inclusions, transparent scope, and delivery clarity."
        />
      </section>

      <section className="nex-shell pb-16">
        <ServiceCatalog />
      </section>

      <CtaBand
        title="Not sure which service fits your business? Let us talk."
        description="We will align your priorities to the right support model before you commit."
      />
    </div>
  );
}
