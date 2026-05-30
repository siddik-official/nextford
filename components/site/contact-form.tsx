"use client";

import { FormEvent, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SERVICES, SITE_CONFIG } from "@/lib/site-data";
import { useSiteStore } from "@/lib/store/site-store";

type FormState = {
  fullName: string;
  companyName: string;
  serviceInterest: string;
  message: string;
};

const INITIAL_STATE: FormState = {
  fullName: "",
  companyName: "",
  serviceInterest: "",
  message: "",
};

export function ContactForm() {
  const selectedService = useSiteStore((state) => state.selectedService);
  const setSelectedService = useSiteStore((state) => state.setSelectedService);

  const serviceOptions = SERVICES.map((service) => service.title);

  const [formState, setFormState] = useState<FormState>(() => ({
    ...INITIAL_STATE,
    serviceInterest: selectedService || serviceOptions[0],
  }));
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setSelectedService(formState.serviceInterest);

    const subject = encodeURIComponent(
      `Nexford IT enquiry - ${formState.serviceInterest}`,
    );
    const body = encodeURIComponent(
      [
        `Full Name: ${formState.fullName}`,
        `Company Name: ${formState.companyName || "Not provided"}`,
        `Service Interest: ${formState.serviceInterest}`,
        "",
        "Message:",
        formState.message,
      ].join("\n"),
    );

    window.location.href = `mailto:${SITE_CONFIG.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <label className="space-y-2 text-sm font-medium text-[#2c1a0e]">
          Full Name
          <Input
            required
            value={formState.fullName}
            onChange={(event) =>
              setFormState((prev) => ({
                ...prev,
                fullName: event.target.value,
              }))
            }
            placeholder="Your full name"
            className="border-[#d4c8bc] bg-white transition-all duration-300 focus-visible:-translate-y-0.5"
          />
        </label>

        <label className="space-y-2 text-sm font-medium text-[#2c1a0e]">
          Company Name
          <Input
            value={formState.companyName}
            onChange={(event) =>
              setFormState((prev) => ({
                ...prev,
                companyName: event.target.value,
              }))
            }
            placeholder="Your company"
            className="border-[#d4c8bc] bg-white transition-all duration-300 focus-visible:-translate-y-0.5"
          />
        </label>
      </div>

      <label className="space-y-2 text-sm font-medium text-[#2c1a0e]">
        Service Interest
        <select
          required
          value={formState.serviceInterest || serviceOptions[0]}
          onChange={(event) =>
            setFormState((prev) => ({
              ...prev,
              serviceInterest: event.target.value,
            }))
          }
          className="flex h-11 w-full rounded-md border border-[#d4c8bc] bg-white px-3 py-2 text-sm text-[#2c1a0e] transition-all duration-300 focus-visible:-translate-y-0.5 focus-visible:border-[#c0623a] focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[#c0623a]/25"
        >
          {serviceOptions.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
      </label>

      <label className="space-y-2 text-sm font-medium text-[#2c1a0e]">
        Message
        <Textarea
          required
          value={formState.message}
          onChange={(event) =>
            setFormState((prev) => ({ ...prev, message: event.target.value }))
          }
          placeholder="Tell us what you need and what outcome matters most."
          className="min-h-36 border-[#d4c8bc] bg-white transition-all duration-300 focus-visible:-translate-y-0.5"
        />
      </label>

      <div className="flex flex-col items-start gap-3 pt-1 sm:flex-row sm:items-center">
        <Button
          type="submit"
          className="h-11 rounded-md bg-[#c0623a] px-6 text-sm font-semibold text-[#faf6f0] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#a75432]"
        >
          Submit Enquiry
        </Button>
        <p className="text-xs italic text-[#6b4a37]">
          We respond within 1 business day (AEDT / AEST).
        </p>
      </div>

      {submitted ? (
        <p className="rounded-md border border-[#e2c8b5] bg-[#fff5ec] p-3 text-sm text-[#5f3b28]">
          Thanks, your mail app has been opened with prefilled enquiry details.
        </p>
      ) : null}
    </form>
  );
}
