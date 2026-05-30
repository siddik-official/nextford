import type { Metadata } from "next";
import { Clock3, Mail, MapPin, MessageCircle } from "lucide-react";

import { ContactForm } from "@/components/site/contact-form";
import { SectionHeading } from "@/components/site/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SITE_CONFIG } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Nexford IT to discuss your requirements. We respond within one business day aligned to AEDT / AEST.",
};

export default function ContactPage() {
  return (
    <div>
      <section className="nex-shell pb-12 pt-14">
        <SectionHeading
          eyebrow="Contact"
          title="Tell us what you need"
          description="We will get back to you within one business day (AEDT / AEST)."
        />
      </section>

      <section className="nex-shell pb-16">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
          <Card className="nex-card lg:col-span-3">
            <CardHeader>
              <CardTitle className="font-heading text-3xl text-[#2c1a0e]">
                Enquiry Form
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>

          <div className="space-y-4 lg:col-span-2">
            <Card className="nex-card">
              <CardHeader>
                <CardTitle className="font-heading text-2xl text-[#2c1a0e]">
                  Direct Channels
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-[#4f3527]">
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-start gap-3 rounded-md border border-[#e0d1c4] bg-white p-3 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <Mail className="mt-0.5 size-4 text-[#c0623a]" />
                  <span>{SITE_CONFIG.email}</span>
                </a>

                <a
                  href={SITE_CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-3 rounded-md border border-[#e0d1c4] bg-white p-3 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <MessageCircle className="mt-0.5 size-4 text-[#c0623a]" />
                  <span>
                    WhatsApp Business
                    <span className="block text-xs opacity-75">
                      {SITE_CONFIG.whatsappNumber}
                    </span>
                  </span>
                </a>

                <div className="flex items-start gap-3 rounded-md border border-[#e0d1c4] bg-white p-3">
                  <MapPin className="mt-0.5 size-4 text-[#c0623a]" />
                  <span>
                    Based in Dhaka, Bangladesh - serving clients across
                    Australia, New Zealand, and internationally.
                  </span>
                </div>

                <div className="flex items-start gap-3 rounded-md border border-[#e0d1c4] bg-white p-3">
                  <Clock3 className="mt-0.5 size-4 text-[#c0623a]" />
                  <span>We respond within 1 business day (AEDT / AEST).</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
