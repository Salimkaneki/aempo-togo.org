import type { Metadata } from "next";
import Image from "next/image";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { SESSION_COOKIE, verifySessionToken } from "@/app/lib/auth";
import LoginForm from "./LoginForm";

export const metadata: Metadata = {
  title: "Connexion",
};

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ from?: string }>;
}) {
  // Déjà connecté → on saute la page de connexion.
  const store = await cookies();
  if (verifySessionToken(store.get(SESSION_COOKIE)?.value)) {
    redirect("/admin");
  }

  const { from } = await searchParams;

  return (
    <main className="min-h-screen flex items-center justify-center bg-surface px-6 py-12 font-montserrat">
      <div className="w-full max-w-md">
        <div className="flex flex-col items-center gap-2 mb-8">
          <Image src="/icons/aempo-logo.svg" alt="AEMPO-TOGO" width={96} height={76} style={{ height: "auto" }} />
          <p className="text-sm text-zinc-500">Espace d&apos;administration</p>
        </div>

        <div className="bg-white rounded-2xl border border-zinc-200 shadow-sm p-8">
          <h1 className="font-onest font-bold text-xl text-zinc-900 mb-1">Connexion</h1>
          <p className="text-sm text-zinc-500 mb-6">
            Connectez-vous pour accéder au tableau de bord.
          </p>
          <LoginForm from={from ?? "/admin"} />
        </div>

        <p className="text-center text-xs text-zinc-400 mt-6">
          © AEMPO-TOGO — Accès réservé aux administrateurs.
        </p>
      </div>
    </main>
  );
}
