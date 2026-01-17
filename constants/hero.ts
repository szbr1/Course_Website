// constants/hero.ts

export const HERO_CONTENT = {
  title: "Boost your skill with experts",
  description: "Unlock your potential by learning from industry leaders and world-class universities. Gain practical skills through flexible, expert-led courses designed to accelerate your career growth.",
  buttonText: "Explore courses",
  footerNote: "Learn from more than 160 member universities",
};

export const STATISTICS = [
  {
    value: "320 K",
    label: "Successful campaign",
  },
  {
    value: "100%",
    label: "Success Rate",
  },
  {
    value: "20 K",
    label: "Happy Clients",
  },
  {
    value: "980",
    label: "5 Star Reviews",
  },
];

export const PARTNERS = [
  { logoUrl: "/logos/edu1.png" },
  { logoUrl: "/logos/edu2.png" },
  { logoUrl: "/logos/edu3.png" },
];

export const NAV_LINKS = [
  { label: "Book Consultant", href: "/constultant" },
  { label: "Find your New Career", href: "/careers" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

// constants/features.ts

import { GraduationCap, Library, Briefcase } from "lucide-react";

export const HERO_CARD = [
  {
    id: 1,
    icon: GraduationCap,
    title: "Best University",
    description: "Partnering with top-tier global institutions to bring world-class academic excellence directly to your screen.",
  },
  {
    id: 2,
    icon: Library,
    title: "Great materials",
    description: "Access a comprehensive library of high-quality resources, interactive labs, and curated study guides.",
  },
  {
    id: 3,
    icon: Briefcase,
    title: "Professional Course",
    description: "Earn industry-recognized certifications designed by experts to help you land your dream job in tech.",
  },
];