import { UserPlus } from "@phosphor-icons/react/dist/ssr";

// ⚠️ STUB : les demandes arriveront ici une fois le formulaire public /join branché
// (voir createFormSubmitHandler). Aucune source de données pour l'instant.

interface AdhesionRequest {
  id: string;
  nom: string;
  formation: string;
  date: string;
  statut: "En attente" | "Acceptée" | "Refusée";
}

const REQUESTS: AdhesionRequest[] = [];

export default function AdhesionsAdminPage() {
  return (
    <div className="flex flex-col gap-6">
      <p className="text-sm text-zinc-500">{REQUESTS.length} demande(s)</p>

      <div className="bg-white rounded-xl border border-zinc-200 shadow-sm overflow-x-auto">
        {REQUESTS.length === 0 ? (
          <div className="p-12 flex flex-col items-center text-center gap-3">
            <span className="size-12 rounded-xl bg-primary-light text-primary flex items-center justify-center">
              <UserPlus size={24} />
            </span>
            <p className="font-montserrat text-zinc-500">Aucune demande d&apos;adhésion.</p>
            <p className="font-montserrat text-xs text-zinc-400 max-w-sm">
              Les demandes envoyées via le formulaire public apparaîtront ici une fois la
              connexion au backend en place.
            </p>
          </div>
        ) : (
          <table className="w-full text-sm">
            <thead className="bg-zinc-50 text-zinc-500 text-left">
              <tr>
                <th className="px-5 py-3 font-medium">Nom</th>
                <th className="px-5 py-3 font-medium hidden md:table-cell">Formation</th>
                <th className="px-5 py-3 font-medium hidden md:table-cell">Date</th>
                <th className="px-5 py-3 font-medium">Statut</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100">
              {REQUESTS.map((req) => (
                <tr key={req.id} className="hover:bg-zinc-50">
                  <td className="px-5 py-3 font-medium text-zinc-900">{req.nom}</td>
                  <td className="px-5 py-3 hidden md:table-cell text-zinc-500">{req.formation}</td>
                  <td className="px-5 py-3 hidden md:table-cell text-zinc-500">{req.date}</td>
                  <td className="px-5 py-3">
                    <span className="inline-block bg-accent text-primary text-xs font-medium px-2.5 py-1 rounded">
                      {req.statut}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
