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
      { label: "Bureau exécutif", href: "/admin/bureau", Icon: UsersThree, soon: true },
      { label: "Comités", href: "/admin/comites", Icon: Buildings, soon: true },
      { label: "Partenaires", href: "/admin/partenaires", Icon: Handshake, soon: true },
    ],
  },
  {
    title: "Communication",
    items: [
      { label: "Demandes d'adhésion", href: "/admin/adhesions", Icon: UserPlus, soon: true },
      { label: "Messages", href: "/admin/messages", Icon: EnvelopeSimple, soon: true },
      { label: "Newsletter", href: "/admin/newsletter", Icon: Megaphone, soon: true },
    ],
  },
  {
    title: "Système",
    items: [{ label: "Paramètres", href: "/admin/parametres", Icon: Gear, soon: true }],
  },
];

/** Liste à plat (utilisée par le Topbar pour retrouver le titre courant). */
export const NAV: NavItem[] = NAV_GROUPS.flatMap((g) => g.items);
