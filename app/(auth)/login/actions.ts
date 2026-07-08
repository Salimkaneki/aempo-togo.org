"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import {
  SESSION_COOKIE,
  SESSION_MAX_AGE,
  createSessionToken,
  verifyCredentials,
} from "@/app/lib/auth";

export interface LoginState {
  error?: string;
}

/** Destination sûre après connexion : uniquement des routes admin internes. */
function safeFrom(from: string): string {
  return from.startsWith("/admin") ? from : "/admin";
}

export async function login(_prev: LoginState, formData: FormData): Promise<LoginState> {
  const email = String(formData.get("email") ?? "");
  const password = String(formData.get("password") ?? "");
  const from = safeFrom(String(formData.get("from") ?? "/admin"));

  if (!verifyCredentials(email, password)) {
    return { error: "Email ou mot de passe incorrect." };
  }

  const store = await cookies();
  store.set(SESSION_COOKIE, createSessionToken(email.trim().toLowerCase()), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: SESSION_MAX_AGE,
  });

  redirect(from);
}

export async function logout() {
  const store = await cookies();
  store.delete(SESSION_COOKIE);
  redirect("/login");
}
