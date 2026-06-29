import type { Icon } from "@phosphor-icons/react";
import {
  FacebookLogo,
  LinkedinLogo,
  XLogo,
  YoutubeLogo,
} from "@phosphor-icons/react/dist/ssr";

export interface SocialLink {
  label: string;
  href: string;
  Icon: Icon;
}

/** Source unique des liens réseaux sociaux (Footer + page Contact). */
export const SOCIALS: SocialLink[] = [
  { label: "Facebook", href: "#", Icon: FacebookLogo },
  { label: "LinkedIn", href: "#", Icon: LinkedinLogo },
  { label: "X", href: "#", Icon: XLogo },
  { label: "YouTube", href: "#", Icon: YoutubeLogo },
];
