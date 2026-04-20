"use client";

import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

import { SERVICES } from "@/lib/site-data";
import { useSiteStore } from "@/lib/store/site-store";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function ServiceCatalog() {
  const router = useRouter();
  const setSelectedService = useSiteStore((state) => state.setSelectedService);

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      {SERVICES.map((service) => {
        const Icon = service.icon;

        return (
          <Card
            key={service.id}
            id={service.id}
            className="nex-card nex-card-hover group p-0"
          >
            <div className="h-full border-l-4 border-[#c0623a]">
              <CardHeader className="gap-3 px-6 pt-6 pb-0">
                <div className="inline-flex size-10 items-center justify-center rounded-md bg-[#f0e2d6] text-[#c0623a] transition-transform duration-300 group-hover:scale-110">
                  <Icon className="size-5" />
                </div>
                <CardTitle className="font-heading text-[1.4rem] text-[#2c1a0e]">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-[0.95rem] italic text-[#6b4a37]">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="px-6 pt-5 pb-6">
                <ul className="space-y-2.5">
                  {service.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-2.5 text-[0.95rem] leading-relaxed text-[#2c1a0e]"
                    >
                      <ArrowRight className="mt-1 size-4 shrink-0 text-[#c0623a]" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  type="button"
                  onClick={() => {
                    setSelectedService(service.title);
                    router.push("/contact");
                  }}
                  className="mt-6 h-10 rounded-md bg-[#c0623a] px-5 text-sm font-semibold text-[#faf6f0] hover:bg-[#a75432]"
                >
                  Discuss {service.title}
                </Button>
              </CardContent>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
