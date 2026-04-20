import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Nexford IT terms of service.",
};

export default function TermsOfServicePage() {
  return (
    <section className="mx-auto w-full max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="font-heading text-4xl text-[#2c1a0e]">Terms of Service</h1>
      <p className="mt-5 text-[0.96rem] leading-relaxed text-[#4f3527]">
        This page is being finalised and will be published with complete terms.
        For contractual enquiries, contact info@nexfordit.com.
      </p>
    </section>
  );
}
