"use client";

import TextInput from "./form/TextInput";
import TextArea from "./form/TextArea";
import { createFormSubmitHandler } from "@/app/lib/forms";

export default function ContactForm() {
  const handleSubmit = createFormSubmitHandler("Formulaire Contact :");

  return (
    <form onSubmit={handleSubmit} className="flex-1 w-full flex flex-col gap-9">
      <div className="flex flex-col gap-3">
        <div className="flex flex-col md:flex-row gap-5">
          <TextInput label="Nom et prénom(s)" name="nom" placeholder="Ex:  Ama Kwatcha" />
          <TextInput
            label="Email"
            name="email"
            type="email"
            placeholder="amakwatcha@gmail.com"
          />
        </div>
        <TextInput
          label="Objet du message"
          name="objet"
          placeholder="Objet de votre message"
        />
        <TextArea label="Message" name="message" placeholder="Votre message" />
      </div>

      <button
        type="submit"
        className="w-full bg-primary-mid hover:bg-primary transition-colors text-white font-montserrat font-medium text-base flex items-center justify-center px-6.5 py-5 rounded-lg"
      >
        Envoyer le message
      </button>
    </form>
  );
}
