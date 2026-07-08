"use client";

import { useActionState } from "react";
import { Warning } from "@phosphor-icons/react/dist/ssr";
import TextInput from "@/app/components/forms/fields/TextInput";
import { login, type LoginState } from "./actions";

const INITIAL: LoginState = {};

export default function LoginForm({ from }: { from: string }) {
  const [state, formAction, pending] = useActionState(login, INITIAL);

  return (
    <form action={formAction} className="flex flex-col gap-5">
      <input type="hidden" name="from" value={from} />

      {state.error && (
        <p className="flex items-center gap-2 rounded-lg bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
          <Warning size={18} weight="fill" className="shrink-0" />
          {state.error}
        </p>
      )}

      <TextInput
        label="Email"
        name="email"
        type="email"
        autoComplete="email"
        placeholder="admin@aempotogo.com"
      />
      <TextInput
        label="Mot de passe"
        name="password"
        type="password"
        autoComplete="current-password"
        placeholder="••••••••"
      />

      <button
        type="submit"
        disabled={pending}
        className="mt-1 h-12 rounded-lg bg-primary text-white font-semibold transition-colors hover:bg-primary-mid disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {pending ? "Connexion…" : "Se connecter"}
      </button>
    </form>
  );
}
