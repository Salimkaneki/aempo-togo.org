import { Megaphone, Users, PaperPlaneTilt } from "@phosphor-icons/react/dist/ssr";

// ⚠️ STUB : gestion de la newsletter (abonnés + envois). Aucune source de données
// pour l'instant — à brancher lors de la phase persistance.

const SUBSCRIBERS: string[] = [];
const SENT_CAMPAIGNS = 0;

export default function NewsletterAdminPage() {
  const stats = [
    { label: "Abonnés", value: SUBSCRIBERS.length, Icon: Users, hint: "inscrits" },
    { label: "Campagnes envoyées", value: SENT_CAMPAIGNS, Icon: PaperPlaneTilt, hint: "au total" },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {stats.map(({ label, value, Icon, hint }) => (
          <div key={label} className="bg-white rounded-xl border border-zinc-200 shadow-sm p-5">
            <div className="flex items-start justify-between gap-3">
              <p className="text-xs font-montserrat font-semibold uppercase tracking-wide text-zinc-400">
                {label}
              </p>
              <Icon size={18} className="text-zinc-300 shrink-0" />
            </div>
            <p className="mt-3 text-3xl font-onest font-bold text-zinc-900">{value}</p>
            <p className="mt-1 font-montserrat text-xs text-zinc-400">{hint}</p>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl border border-zinc-200 shadow-sm">
        <div className="flex items-center justify-between p-5 border-b border-zinc-100">
          <h3 className="font-onest font-bold text-zinc-900">Abonnés</h3>
          <button
            type="button"
            disabled
            className="flex items-center gap-2 bg-zinc-100 text-zinc-400 text-sm font-medium px-4 h-10 rounded-lg cursor-not-allowed"
            title="Bientôt disponible"
          >
            <Megaphone size={16} weight="bold" /> Nouvelle campagne
          </button>
        </div>

        {SUBSCRIBERS.length === 0 ? (
          <div className="p-12 flex flex-col items-center text-center gap-3">
            <span className="size-12 rounded-xl bg-primary-light text-primary flex items-center justify-center">
              <Users size={24} />
            </span>
            <p className="font-montserrat text-zinc-500">Aucun abonné pour le moment.</p>
            <p className="font-montserrat text-xs text-zinc-400 max-w-sm">
              Les inscriptions à la newsletter apparaîtront ici une fois la connexion au
              backend en place.
            </p>
          </div>
        ) : (
          <ul className="divide-y divide-zinc-100">
            {SUBSCRIBERS.map((email) => (
              <li key={email} className="px-5 py-3 font-montserrat text-sm text-zinc-700">
                {email}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
