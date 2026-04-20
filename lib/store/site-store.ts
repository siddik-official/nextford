"use client";

import { create } from "zustand";

type SiteStore = {
  mobileMenuOpen: boolean;
  selectedService: string;
  setMobileMenuOpen: (open: boolean) => void;
  toggleMobileMenu: () => void;
  setSelectedService: (service: string) => void;
};

export const useSiteStore = create<SiteStore>((set) => ({
  mobileMenuOpen: false,
  selectedService: "",
  setMobileMenuOpen: (open) => set({ mobileMenuOpen: open }),
  toggleMobileMenu: () =>
    set((state) => ({ mobileMenuOpen: !state.mobileMenuOpen })),
  setSelectedService: (service) => set({ selectedService: service }),
}));
