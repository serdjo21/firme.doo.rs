import { useParams, Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import CTA from "@/components/CTA";
import { ArrowLeft, ChevronDown } from "lucide-react";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

type ServiceType = {
  title: string;
  description: string;
  steps: string[];
  faqs: { q: string; a: string }[];
};

const servicesData: Record<string, ServiceType> = {
  "preuzimanje-firmi": {
    title: "Preuzimanje firmi u blokadi",
    description: "Kompletno preuzimanje firmi sa svim dugovima.",
    steps: [
      "Inicijalni razgovor i analiza",
      "Pravna evaluacija",
      "Plan preuzimanja",
      "Pregovaranje",
      "Formalno preuzimanje",
    ],
    faqs: [
      { q: "Koliko traje?", a: "7-30 dana." },
      { q: "Veliki dugovi?", a: "Da." },
    ],
  },

  "prodaja-firmi": {
    title: "Prodaja firmi",
    description: "Profesionalna prodaja firme.",
    steps: ["Procjena", "Dokumentacija", "Marketing", "Prodaja"],
    faqs: [{ q: "Koliko traje?", a: "2-6 mjeseci." }],
  },

  "kupovina-firmi": {
    title: "Kupovina firmi",
    description: "Strateška kupovina.",
    steps: ["Strategija", "Analiza", "Due diligence", "Zaključenje"],
    faqs: [{ q: "Industrije?", a: "Sve." }],
  },

  "osnivanje-firmi-eu": {
    title: "Osnivanje firmi u EU",
    description: "Osnivanje kompanija.",
    steps: ["Odabir države", "Registracija", "Bankovni račun"],
    faqs: [{ q: "Koja država?", a: "Zavisi." }],
  },

  "preuzimanje-firmi-eu": {
    title: "Preuzimanje firmi u EU",
    description: "Kupovina postojećih EU firmi.",
    steps: ["Analiza", "Pregovori", "Transfer"],
    faqs: [{ q: "Daljinski?", a: "Da." }],
  },
};

const ImagePlaceholder = ({ label }: { label: string }) => (
  <div className="w-full min-h-[350px] rounded-xl border border-dashed border-border/40 bg-muted/20 flex items-center justify-center text-xs tracking-[0.3em] text-muted-foreground">
    {label}
  </div>
);

const AccordionItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between py-6 text-left"
      >
        <span className="font-medium">{q}</span>
        <ChevronDown
          size={18}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-40 pb-6" : "max-h-0"
        }`}
      >
        <p className="text-muted-foreground">{a}</p>
      </div>
    </div>
  );
};

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = servicesData[slug || ""];

  if (!service) return null;

  return (
    <div>

      {/* HERO */}
      <section className="pt-40 pb-24">
        <div className="mx-auto max-w-[1400px] px-8">

          <Link
            to="/usluge"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-12"
          >
            <ArrowLeft size={14} /> Sve usluge
          </Link>

          <div className="grid lg:grid-cols-2 gap-20 items-center">

            <AnimatedSection>

              <h1 className="text-5xl md:text-7xl font-semibold tracking-tight mb-6">
                {service.title}
              </h1>

              <p className="text-lg text-muted-foreground mb-8">
                {service.description}
              </p>

              <a
                href={`https://wa.me/387000000?text=Upit za ${service.title}`}
                target="_blank"
                className="inline-flex items-center gap-2 text-sm font-medium border border-border px-4 py-2 rounded-lg hover:bg-green-500 hover:text-white hover:border-green-500 transition-all"
              >
                <FaWhatsapp className="text-green-500" />
                Pošaljite upit
              </a>

            </AnimatedSection>

            <ImagePlaceholder label="SLIKA — SERVICE HERO VISUAL" />

          </div>

        </div>
      </section>

      <div className="mx-auto max-w-[1400px] px-8">
        <div className="separator-thin" />
      </div>

      {/* PROCESS */}
      <section className="py-32">
        <div className="mx-auto max-w-[900px] px-8">

          <AnimatedSection>
            <h2 className="text-4xl font-semibold mb-16">
              Kako radimo
            </h2>
          </AnimatedSection>

          {service.steps.map((step, i) => (
            <AnimatedSection key={i} delay={i * 0.06}>
              <div className="flex gap-6 mb-10">
                <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-xs">
                  {i + 1}
                </div>
                <p>{step}</p>
              </div>
            </AnimatedSection>
          ))}

        </div>
      </section>

      <div className="mx-auto max-w-[1400px] px-8">
        <div className="separator-thin" />
      </div>

      {/* FAQ */}
      <section className="py-32">
        <div className="mx-auto max-w-[900px] px-8">

          <AnimatedSection>
            <h2 className="text-4xl font-semibold mb-12">
              Česta pitanja
            </h2>
          </AnimatedSection>

          {service.faqs.map((faq, i) => (
            <AccordionItem key={i} {...faq} />
          ))}

        </div>
      </section>

      <CTA />

    </div>
  );
};

export default ServiceDetail;
