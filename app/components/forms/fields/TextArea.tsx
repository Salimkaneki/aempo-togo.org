import type { TextareaHTMLAttributes } from "react";
import { FieldLabel, FIELD_BOX_CLASS } from "./FieldLabel";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  name: string;
  /** Champ obligatoire (true par défaut). */
  required?: boolean;
}

/**
 * Zone de texte labellisée. Accepte toutes les props natives d'un <textarea>
 * (rows, placeholder, value, onChange, maxLength, etc.).
 */
export default function TextArea({
  label,
  name,
  required = true,
  rows = 5,
  className,
  ...props
}: TextAreaProps) {
  return (
    <div className="flex-1 flex flex-col gap-2.5">
      <FieldLabel htmlFor={name} required={required}>
        {label}
      </FieldLabel>
      <textarea
        id={name}
        name={name}
        required={required}
        rows={rows}
        className={`${FIELD_BOX_CLASS} min-h-37.5 resize-y text-base placeholder:text-placeholder ${className ?? ""}`}
        {...props}
      />
    </div>
  );
}
