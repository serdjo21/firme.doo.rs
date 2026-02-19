import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="border border-border rounded-sm p-12 text-center"
      >
        <div className="w-12 h-12 rounded-full bg-foreground flex items-center justify-center mx-auto mb-6">
          <Check size={24} className="text-background" />
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-2">Poruka je poslana</h3>
        <p className="text-sm text-muted-foreground">Javiti ćemo vam se u najkraćem roku.</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {[
        { key: "name", label: "Ime i prezime", type: "text" },
        { key: "email", label: "Email adresa", type: "email" },
        { key: "phone", label: "Telefon", type: "tel" },
      ].map((field) => (
        <div key={field.key} className="relative">
          <input
            type={field.type}
            required
            value={form[field.key as keyof typeof form]}
            onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
            className="peer w-full bg-transparent border-b border-border py-3 text-foreground text-sm placeholder-transparent focus:outline-none focus:border-foreground transition-colors"
            placeholder={field.label}
          />
          <label className="absolute left-0 -top-3 text-xs text-muted-foreground transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:-top-3 peer-focus:text-xs">
            {field.label}
          </label>
        </div>
      ))}
      <div className="relative">
        <textarea
          required
          rows={4}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="peer w-full bg-transparent border-b border-border py-3 text-foreground text-sm placeholder-transparent focus:outline-none focus:border-foreground transition-colors resize-none"
          placeholder="Poruka"
        />
        <label className="absolute left-0 -top-3 text-xs text-muted-foreground transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:-top-3 peer-focus:text-xs">
          Poruka
        </label>
      </div>
      <button
        type="submit"
        className="group inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background font-medium text-sm tracking-wide rounded-sm hover:bg-muted-foreground transition-all duration-300 w-full justify-center"
      >
        Pošalji poruku
        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
      </button>
    </form>
  );
};

export default ContactForm;
