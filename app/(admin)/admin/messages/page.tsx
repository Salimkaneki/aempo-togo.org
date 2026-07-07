import { EnvelopeSimple } from "@phosphor-icons/react/dist/ssr";

// ⚠️ STUB : les messages arriveront ici une fois le formulaire public /contact branché
// (voir createFormSubmitHandler). Aucune source de données pour l'instant.

interface ContactMessage {
  id: string;
  nom: string;
  email: string;
  sujet: string;
  date: string;
  lu: boolean;
}

const MESSAGES: ContactMessage[] = [];

export default function MessagesAdminPage() {
  const unread = MESSAGES.filter((m) => !m.lu).length;

  return (
    <div className="flex flex-col gap-6">
      <p className="text-sm text-zinc-500">
        {MESSAGES.length} message(s){unread > 0 && ` · ${unread} non lu(s)`}
      </p>

      <div className="bg-white rounded-xl border border-zinc-200 shadow-sm overflow-hidden">
        {MESSAGES.length === 0 ? (
          <div className="p-12 flex flex-col items-center text-center gap-3">
            <span className="size-12 rounded-xl bg-primary-light text-primary flex items-center justify-center">
              <EnvelopeSimple size={24} />
            </span>
            <p className="font-montserrat text-zinc-500">Aucun message.</p>
            <p className="font-montserrat text-xs text-zinc-400 max-w-sm">
              Les messages envoyés depuis la page de contact apparaîtront ici une fois la
              connexion au backend en place.
            </p>
          </div>
        ) : (
          <ul className="divide-y divide-zinc-100">
            {MESSAGES.map((message) => (
              <li
                key={message.id}
                className="flex items-center gap-4 px-5 py-4 hover:bg-zinc-50 transition-colors"
              >
                <span
                  className={`size-2 rounded-full shrink-0 ${message.lu ? "bg-zinc-200" : "bg-primary-mid"}`}
                />
                <div className="min-w-0 flex-1">
                  <p className="font-montserrat font-medium text-zinc-900 truncate">
                    {message.sujet}
                  </p>
                  <p className="font-montserrat text-xs text-zinc-400 truncate">
                    {message.nom} · {message.email}
                  </p>
                </div>
                <span className="font-montserrat text-xs text-zinc-400 shrink-0">
                  {message.date}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
