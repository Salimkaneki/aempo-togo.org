import type { Metadata } from "next";
import AdminShell from "./_components/AdminShell";

export const metadata: Metadata = {
  title: "Administration",
};

export default function AdminLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <AdminShell>{children}</AdminShell>;
}
