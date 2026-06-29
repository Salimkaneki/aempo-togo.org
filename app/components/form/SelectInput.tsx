"use client";

import { useEffect, useRef, useState } from "react";
import { CaretDown } from "@phosphor-icons/react/dist/ssr";
import { FieldLabel, FIELD_BOX_CLASS } from "./FieldLabel";

interface SelectInputProps {
  label: string;
  name: string;
  placeholder: string;
  options: string[];
  /** Champ obligatoire (true par défaut). */
  required?: boolean;
  defaultValue?: string;
  onChange?: (value: string) => void;
}

/**
 * Dropdown personnalisé aux couleurs du projet (le <select> natif ne permet pas
 * de styliser la liste déroulante). La valeur est portée par un <input hidden>
 * pour rester compatible avec FormData.
 */
export default function SelectInput({
  label,
  name,
  placeholder,
  options,
  required = true,
  defaultValue = "",
  onChange,
}: SelectInputProps) {
  const [value, setValue] = useState(defaultValue);
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Fermeture au clic extérieur + touche Échap
  useEffect(() => {
    if (!open) return;
    const onClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("keydown", onEscape);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("keydown", onEscape);
    };
  }, [open]);

  const select = (option: string) => {
    setValue(option);
    setOpen(false);
    onChange?.(option);
  };

  return (
    <div className="flex-1 flex flex-col gap-2.5">
      <FieldLabel htmlFor={name} required={required} weight="medium">
        {label}
      </FieldLabel>

      <div ref={ref} className="relative">
        {/* Valeur transmise à FormData */}
        <input type="hidden" name={name} value={value} required={required} />

        <button
          type="button"
          id={name}
          aria-haspopup="listbox"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className={`${FIELD_BOX_CLASS} h-11 flex items-center justify-between gap-2 text-sm cursor-pointer ${
            value ? "text-black" : "text-placeholder"
          }`}
        >
          <span className="flex-1 truncate text-left">{value || placeholder}</span>
          <CaretDown
            size={20}
            className={`shrink-0 text-black transition-transform ${open ? "rotate-180" : ""}`}
          />
        </button>

        {open && (
          <ul
            role="listbox"
            className="absolute z-20 mt-1 w-full max-h-60 overflow-auto border border-muted bg-white shadow-lg"
          >
            {options.map((option) => {
              const selected = option === value;
              return (
                <li key={option} role="option" aria-selected={selected}>
                  <button
                    type="button"
                    onClick={() => select(option)}
                    className={`w-full text-left px-4 py-2.5 text-sm font-montserrat transition-colors hover:bg-primary-light ${
                      selected ? "bg-primary-light text-primary font-medium" : "text-black"
                    }`}
                  >
                    {option}
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
