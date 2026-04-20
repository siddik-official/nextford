import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Nexford IT privacy policy.",
};

export default function PrivacyPolicyPage() {
  return (
    <section className="mx-auto w-full max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="font-heading text-4xl text-[#2c1a0e]">Privacy Policy</h1>
      <p className="mt-5 text-[0.96rem] leading-relaxed text-[#4f3527]">
        This page is being finalised and will be published with full legal copy.
        For urgent privacy requests, email info@nexfordit.com.
      </p>
    </section>
  );
}
