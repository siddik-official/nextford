import {
  Activity,
  BarChart3,
  BriefcaseBusiness,
  Brush,
  ClipboardCheck,
  Compass,
  Handshake,
  LayoutGrid,
  MessageSquare,
  Rocket,
  Scale,
  Search,
  ShieldCheck,
  Target,
  Users,
  type LucideIcon,
} from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
};

export type Service = {
  id: string;
  title: string;
  teaser: string;
  description: string;
  bullets: string[];
  icon: LucideIcon;
};

export const SITE_CONFIG = {
  companyName: "Nexford IT",
  domain: "nexfordit.com",
  email: "info@nexfordit.com",
  location: "Dhaka, Bangladesh",
  whatsappNumber: "+880 1635-482049",
  whatsappUrl: "https://wa.me/8801635482049",
  ctaPrimary: "Book a Free Consultation",
} as const;

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Services", href: "/services" },
  { label: "Why Us", href: "/why-us" },
  { label: "Contact", href: "/contact" },
];

export const USP_PILLARS = [
  {
    title: "Performance-Aligned Partnerships",
    description: "We price for results, not hours. Your growth is our metric.",
    icon: Handshake,
  },
  {
    title: "Fluent in the AUS/NZ Market",
    description:
      "We understand AUS/NZ standards, compliance, and business culture.",
    icon: Compass,
  },
  {
    title: "Documented. Transparent. Accountable.",
    description: "No hidden markups. Everything in writing. Always.",
    icon: ClipboardCheck,
  },
];

export const SERVICES: Service[] = [
  {
    id: "digital-growth",
    title: "Digital Growth",
    teaser: "Performance-driven marketing across Google, Meta and TikTok.",
    description:
      "Performance-driven digital marketing across Google, Meta, and TikTok. We generate traffic that converts, not just impressions.",
    bullets: [
      "Paid advertising campaign strategy and execution across Google, Meta (Facebook and Instagram), and TikTok",
      "Content creation including reels, posts, ad creatives, and copywriting",
      "Weekly or fortnightly content delivery with performance reporting",
      "Lead generation funnels built to produce closed business outcomes",
      "Campaign performance reporting with transparent spend visibility",
      "Audience research, targeting setup, and ongoing optimisation",
    ],
    icon: BarChart3,
  },
  {
    id: "it-consultancy",
    title: "IT Consultancy",
    teaser: "Strategic tech advisory with clear roadmaps.",
    description:
      "Strategic technology advisory for growing businesses. We assess your systems, identify gaps, and deliver a clear roadmap for improvement.",
    bullets: [
      "Technology audit covering systems, tools, and infrastructure",
      "Gap analysis and risk identification across IT operations",
      "Actionable improvement roadmap with prioritised recommendations",
      "Software and platform selection advisory (CRM, ERP, and cloud tools)",
      "Digital transformation planning with phased implementation support",
      "Ongoing advisory retainers for scaling businesses",
    ],
    icon: Compass,
  },
  {
    id: "operations-project-management",
    title: "Operations & Project Management",
    teaser: "End-to-end coordination on time, on budget, documented.",
    description:
      "End-to-end operational support and project coordination. We keep your projects on time, on budget, and fully documented.",
    bullets: [
      "Project scoping, planning, and timeline management",
      "Task allocation, team coordination, and progress tracking",
      "Scheduling, job booking, and installer or contractor liaison",
      "Live audit support and compliance documentation",
      "Weekly reporting and KPI tracking for active projects",
      "Process documentation and SOP development",
    ],
    icon: ClipboardCheck,
  },
  {
    id: "social-media-management",
    title: "Social Media Management",
    teaser: "Full account management, engagement, growth, scheduling.",
    description:
      "Full account management across major platforms. Community engagement, content scheduling, and audience growth all handled.",
    bullets: [
      "Full account management across Facebook, Instagram, LinkedIn, and TikTok",
      "Community engagement including comments, DMs, and audience interaction",
      "Content scheduling and calendar management",
      "Audience growth strategy focused on organic reach and follower development",
      "Minimum 2 posts per week, up to 8 posts per month excluding paid ads",
      "Coverage Monday to Friday aligned to Australian Eastern (AEDT / AEST) and New Zealand business hours",
      "Monthly analytics reporting for reach, engagement, and follower growth",
    ],
    icon: MessageSquare,
  },
  {
    id: "designing-branding",
    title: "Designing & Branding",
    teaser: "Brand identity and creative assets that stand out.",
    description:
      "Brand identity, visual design, and creative assets that communicate who you are and why you are the right choice for your clients.",
    bullets: [
      "Brand identity development including logo, colour system, typography, and brand guidelines",
      "Marketing collateral such as brochures, flyers, pitch decks, and one-pagers",
      "Reusable branded social media templates for key platforms",
      "Ad creative design for Google Display, Meta, and LinkedIn",
      "Website UI mockups and component-level design systems",
      "Brand audit and refresh for established businesses",
    ],
    icon: Brush,
  },
  {
    id: "ppc",
    title: "PPC (Pay-Per-Click)",
    teaser: "Targeted paid ads where every dollar is tracked.",
    description:
      "Targeted paid advertising campaigns engineered for cost-efficient lead acquisition. Every dollar tracked, every result reported.",
    bullets: [
      "Google Ads setup across Search, Display, and Performance Max",
      "Meta Ads campaign management for Facebook and Instagram",
      "Keyword research, negative keyword planning, and bid management",
      "Ad copywriting and creative briefing aligned to brand tone",
      "Conversion tracking setup across GA4, Meta Pixel, and LinkedIn Insight Tag",
      "Weekly reporting on impressions, clicks, CPC, conversions, and ROAS",
      "Ongoing A/B testing and continuous campaign optimisation",
    ],
    icon: Target,
  },
  {
    id: "back-office-support",
    title: "Back Office Support",
    teaser: "Admin, HR, operations, and compliance handled remotely.",
    description:
      "We handle the operational backbone of your business, from admin coordination and HR support to operations oversight and project tracking.",
    bullets: [
      "Administrative coordination for scheduling, correspondence, data entry, and filing",
      "HR support including records, onboarding documentation, and leave management",
      "Operations oversight with workflow tracking, reporting, and process compliance",
      "Customer pre-qualification and lead intake management",
      "Compliance lodgement and regulatory documentation for AUS/NZ market standards",
      "Invoice processing, basic bookkeeping support, and accounts coordination",
      "CRM data management and maintenance",
    ],
    icon: BriefcaseBusiness,
  },
  {
    id: "research-development",
    title: "R&D / Research & Development",
    teaser: "From idea to execution with structured research.",
    description:
      "Research, prototyping, and iterative product support that helps you move from idea to execution with structured rigour.",
    bullets: [
      "Market research and competitive landscape analysis",
      "Industry trend monitoring and opportunity identification",
      "Concept development and feasibility assessment",
      "Prototype development and iterative testing support",
      "Research documentation and findings reporting",
      "Cross-functional collaboration across creative, tech, and operations teams",
    ],
    icon: Search,
  },
  {
    id: "product-development",
    title: "Product Development",
    teaser: "End-to-end product design, engineering, and market entry.",
    description:
      "We help you navigate the full product journey from concept to market with structured milestones and clear ownership.",
    bullets: [
      "Product ideation workshops and concept validation",
      "Product roadmap development and milestone planning",
      "Engineering and manufacturing coordination support",
      "Go-to-market strategy development",
      "Supplier and vendor liaison for product sourcing",
      "Product launch planning and execution support",
      "Post-launch feedback loops and iterative improvement cycles",
    ],
    icon: Rocket,
  },
];

export const HOME_SOCIAL_PROOF = [
  {
    stat: "AUS/NZ-Focused Delivery",
    note: "Processes designed around Australian and New Zealand business expectations and timelines.",
  },
  {
    stat: "VEU and ESC Familiar",
    note: "Operational support aligned with compliance-aware workflows.",
  },
  {
    stat: "1 Business Day Response",
    note: "Clear communication windows aligned with AEDT / AEST business hours.",
  },
];

export const ABOUT_FOUNDER_STORY = [
  "Nexford IT was built to solve a common business problem: owners spend too much time managing fragmented digital and operational systems, and not enough time growing the business.",
  "Our model combines strategic thinking with hands-on delivery support. From Dhaka, our remote-first team works in lockstep with Australian and New Zealand businesses and trades to keep operations moving and results measurable.",
  "We do not position ourselves as a generic outsourced vendor. We work as an accountable extension of your team, with transparent reporting, documented processes, and decisions that stay grounded in business outcomes.",
  "Every engagement is designed for clarity, speed, and long-term reliability so your team can run smarter, scale faster, and stay focused on what matters most.",
];

export const TEAM_MEMBERS = [
  {
    name: "Nexford Leadership",
    title: "Founder & Managing Director",
    location: "Dhaka, Bangladesh",
  },
  {
    name: "Operations Desk",
    title: "Project & Compliance Lead",
    location: "Dhaka, Bangladesh",
  },
  {
    name: "Growth Desk",
    title: "Digital Performance Lead",
    location: "AUS/NZ-facing remote",
  },
];

export const BRAND_VALUES = [
  {
    title: "Document Everything",
    description: "Clear records, clear handovers, and no hidden context.",
    icon: LayoutGrid,
  },
  {
    title: "Performance First",
    description:
      "We prioritise measurable business outcomes over vanity metrics.",
    icon: Activity,
  },
  {
    title: "Compliance Mindset",
    description:
      "Delivery decisions account for AUS/NZ operational and legal realities.",
    icon: ShieldCheck,
  },
  {
    title: "Transparent Pricing",
    description: "No hidden markups. Scope, effort, and value remain visible.",
    icon: Scale,
  },
  {
    title: "Practical Communication",
    description: "Direct, respectful updates that reduce confusion and delay.",
    icon: MessageSquare,
  },
  {
    title: "Shared Ownership",
    description:
      "We work like partners who are accountable for outcomes together.",
    icon: Users,
  },
];

export const WHY_US_DIFFERENTIATORS = [
  {
    title: "Performance-Aligned Pricing",
    description:
      "Our engagement model is built around outcomes. You know what is being delivered, why it matters, and how performance is tracked.",
  },
  {
    title: "Compliance-Ready from Day One",
    description:
      "Processes are designed with Australian and New Zealand standards and reporting needs in mind so teams can stay audit-ready without extra overhead.",
  },
  {
    title: "No Hidden Markups",
    description:
      "Scope, effort, and commercial terms are documented clearly. You always have visibility on what is happening and what comes next.",
  },
  {
    title: "Built for AUS/NZ Market Standards",
    description:
      "Communication cadence, delivery windows, and operational language are aligned to Australian and New Zealand business expectations.",
  },
  {
    title: "Scalable from 1 Job to 500",
    description:
      "From early-stage workflows to scaled delivery pipelines, we design systems that remain usable as workload complexity grows.",
  },
  {
    title: "Cross-Functional by Design",
    description:
      "Digital, operations, and execution support are coordinated under one delivery framework to reduce handoff friction.",
  },
];

export const WHY_US_COMPARISON = [
  {
    others: "Hourly support with unclear ownership",
    weDo: "Outcome-driven scopes with explicit responsibilities",
    matters: "Less rework, faster decision cycles, and better accountability",
  },
  {
    others: "Fragmented tools and undocumented workflows",
    weDo: "Documented process design and SOP-backed operations",
    matters: "Consistent execution and easier team onboarding",
  },
  {
    others: "Generic offshore communication",
    weDo: "AUS/NZ-aligned communication rhythm and delivery standards",
    matters: "Fewer misunderstandings and cleaner project momentum",
  },
  {
    others: "Limited visibility into spend and results",
    weDo: "Transparent reporting across campaigns and operations",
    matters: "Stronger commercial control and trust in decisions",
  },
  {
    others: "One-size-fits-all engagement models",
    weDo: "Flexible support model for growth-stage and established teams",
    matters: "Support scales with your business without process collapse",
  },
];
