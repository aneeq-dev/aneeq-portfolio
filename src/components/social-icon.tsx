import Image from "next/image";
import {
  Code2,
  CreditCard,
  Figma,
  Network,
  Palette,
  Smartphone,
  Twitter,
  Users,
  type LucideIcon,
} from "lucide-react";

const brandIcons: Partial<Record<string, { src: string; alt: string }>> = {
  github: { src: "/img/icons/github-brand.svg", alt: "GitHub" },
  linkedin: { src: "/img/icons/linkedin-brand.svg", alt: "LinkedIn" },
  playstore: { src: "/img/icons/googleplay.svg", alt: "Google Play" },
  calendly: { src: "/img/icons/calendly-brand.svg", alt: "Calendly" },
  phone: { src: "/img/icons/phone-brand.svg", alt: "Phone" },
  whatsapp: { src: "/img/icons/whatsapp-brand.svg", alt: "WhatsApp" },
  upwork: { src: "/img/icons/upwork-brand.svg", alt: "Upwork" },
  mail: { src: "/img/icons/gmail-brand.svg", alt: "Email" },
};

const iconMap = {
  twitter: Twitter,
  figma: Figma,
  code: Code2,
  palette: Palette,
  smartphone: Smartphone,
  network: Network,
  creditcard: CreditCard,
  users: Users,
} as const;

export type IconName =
  | keyof typeof iconMap
  | "github"
  | "linkedin"
  | "playstore"
  | "calendly"
  | "phone"
  | "whatsapp"
  | "upwork"
  | "mail";

export function SocialIcon({
  name,
  className,
}: {
  name: IconName;
  className?: string;
}) {
  const brand = brandIcons[name];
  if (brand) {
    return (
      <Image
        src={brand.src}
        alt={brand.alt}
        width={20}
        height={20}
        className={className ?? "size-5 object-contain"}
      />
    );
  }

  const Icon: LucideIcon = iconMap[name as keyof typeof iconMap];
  return <Icon className={className} strokeWidth={1.75} />;
}
