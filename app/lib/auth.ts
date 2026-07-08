import crypto from "node:crypto";

// ⚠️ AUTH MOCK / PLACEHOLDER.
// Identifiants uniques stockés en variables d'environnement (valeurs de dev par défaut),
// session portée par un cookie httpOnly signé (HMAC). À remplacer par une vraie
// authentification (BDD + mots de passe hachés / Auth.js) lors de la phase persistance.

export const SESSION_COOKIE = "aempo_admin_session";
export const SESSION_MAX_AGE = 60 * 60 * 8; // 8 heures

const SECRET = process.env.AUTH_SECRET ?? "dev-insecure-secret-change-me";

interface AdminCredentials {
  email: string;
  password: string;
}

function getCredentials(): AdminCredentials {
  return {
    email: process.env.ADMIN_EMAIL ?? "admin@aempotogo.com",
    password: process.env.ADMIN_PASSWORD ?? "admin",
  };
}

export function verifyCredentials(email: string, password: string): boolean {
  const c = getCredentials();
  return email.trim().toLowerCase() === c.email.trim().toLowerCase() && password === c.password;
}

interface SessionPayload {
  email: string;
  iat: number;
}

function sign(payload: string): string {
  return crypto.createHmac("sha256", SECRET).update(payload).digest("base64url");
}

export function createSessionToken(email: string): string {
  const payload = Buffer.from(
    JSON.stringify({ email, iat: Date.now() } satisfies SessionPayload)
  ).toString("base64url");
  return `${payload}.${sign(payload)}`;
}

export function verifySessionToken(token: string | undefined): SessionPayload | null {
  if (!token) return null;
  const [payload, signature] = token.split(".");
  if (!payload || !signature) return null;

  const expected = sign(payload);
  const a = Buffer.from(signature);
  const b = Buffer.from(expected);
  if (a.length !== b.length || !crypto.timingSafeEqual(a, b)) return null;

  try {
    const data = JSON.parse(Buffer.from(payload, "base64url").toString()) as SessionPayload;
    if (Date.now() - data.iat > SESSION_MAX_AGE * 1000) return null; // expiré
    return data;
  } catch {
    return null;
  }
}
