import { FieldLabel } from "./FieldLabel";

interface RadioGroupProps {
  label: string;
  name: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
  /** Champ obligatoire (true par défaut). */
  required?: boolean;
}

/**
 * Groupe de boutons radio personnalisés (pastille verte AEMPO). Contrôlé :
 * la valeur sélectionnée est gérée par le parent via `value` / `onChange`.
 */
export default function RadioGroup({
  label,
  name,
  options,
  value,
  onChange,
  required = true,
}: RadioGroupProps) {
  return (
    <div className="flex-1 flex flex-col gap-2.5">
      <FieldLabel required={required} weight="medium">
        {label}
      </FieldLabel>
      <div className="flex h-11 items-center gap-4">
        {options.map((option) => {
          const checked = value === option;
          return (
            <label
              key={option}
              className="flex flex-1 items-center gap-4 cursor-pointer"
            >
              <input
                type="radio"
                name={name}
                value={option}
                checked={checked}
                onChange={() => onChange(option)}
                required={required}
                className="sr-only"
              />
              <span
                className={`size-5 shrink-0 rounded-full bg-primary-light flex items-center justify-center border transition-colors ${
                  checked ? "border-primary" : "border-transparent"
                }`}
              >
                {checked && <span className="size-2.5 rounded-full bg-primary" />}
              </span>
              <span className="text-base font-montserrat font-medium text-black">
                {option}
              </span>
            </label>
          );
        })}
      </div>
    </div>
  );
}
