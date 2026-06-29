import type { InputHTMLAttributes } from "react";
import { FieldLabel, FIELD_BOX_CLASS } from "./FieldLabel";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  /** Champ obligatoire (true par défaut). */
  required?: boolean;
}

/**
 * Champ texte labellisé. Accepte toutes les props natives d'un <input>
 * (type, placeholder, value, onChange, autoComplete, etc.) pour la personnalisation.
 */
export default function TextInput({
  label,
  name,
  required = true,
  className,
  ...props
}: TextInputProps) {
  return (
    <div className="flex-1 flex flex-col gap-2.5">
      <FieldLabel htmlFor={name} required={required}>
        {label}
      </FieldLabel>
      <input
        id={name}
        name={name}
        required={required}
        className={`${FIELD_BOX_CLASS} h-11 text-base placeholder:text-placeholder ${className ?? ""}`}
        {...props}
      />
    </div>
  );
}
