import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export const FOOTER_DATA = {
  brand: {
    name: "Course desk",
    description: "Empowering learners worldwide with accessible, high-quality online education and career-focused certifications.",
  },
  navigation: [
    {
      title: "Quick links",
      links: [
        { label: "Online Degrees", href: "/degrees" },
        { label: "Find your New Career", href: "/careers" },
        { label: "Blog", href: "/blog" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Help Center", href: "/help" },
        { label: "Success Stories", href: "/stories" },
        { label: "Scholarships", href: "/scholarships" },
        { label: "Affiliates", href: "/affiliates" },
      ],
    },
  ],
  appDownload: {
    title: "Download App",
    googlePlayUrl: "https://play.google.com/store",
  },
  legal: {
    copyright: `© ${new Date().getFullYear()} | Lnpedia. All rights reserved.`,
    socials: [
      { icon: FaFacebookF, href: "https://facebook.com", label: "Facebook" },
      { icon: FaTwitter, href: "https://twitter.com", label: "Twitter" },
      { icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
    ],
  },
};