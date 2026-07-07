import type { Icon } from "@phosphor-icons/react";
import {
  House,
  Newspaper,
  UsersThree,
  Buildings,
  Handshake,
  UserPlus,
  EnvelopeSimple,
  Megaphone,
  Gear,
} from "@phosphor-icons/react/dist/ssr";

export interface NavItem {
  label: string;
  href: string;
  Icon: Icon;
  /** Module pas encore implémenté → affiché grisé dans la sidebar. */
  soon?: boolean;
}

export interface NavGroup {
  title: string;
  items: NavItem[];
}

export const NAV_GROUPS: NavGroup[] = [
  {
    title: "Général",
    items: [{ label: "Tableau de bord", href: "/admin", Icon: House }],
  },
  {
    title: "Contenu",
    items: [
      { label: "Actualités", href: "/admin/actualites", Icon: Newspaper },
      { label: "Bureau exécutif", href: "/admin/bureau", Icon: UsersThree },
      { label: "Comités", href: "/admin/comites", Icon: Buildings },
      { label: "Partenaires", href: "/admin/partenaires", Icon: Handshake },
    ],
  },
  {
    title: "Communication",
    items: [
      { label: "Demandes d'adhésion", href: "/admin/adhesions", Icon: UserPlus },
      { label: "Messages", href: "/admin/messages", Icon: EnvelopeSimple },
      { label: "Newsletter", href: "/admin/newsletter", Icon: Megaphone },
    ],
  },
  {
    title: "Système",
    items: [{ label: "Paramètres", href: "/admin/parametres", Icon: Gear }],
  },
];

/** Liste à plat (utilisée par le Topbar pour retrouver le titre courant). */
export const NAV: NavItem[] = NAV_GROUPS.flatMap((g) => g.items);
