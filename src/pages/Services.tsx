import AnimatedSection from "@/components/AnimatedSection";
import ServiceCard from "@/components/ServiceCard";
import CTA from "@/components/CTA";

const services = [
  { title: "Preuzimanje firmi u blokadi", description: "Kompletno preuzimanje firmi sa dugovima, blokadama i sudskim sporovima. Rješavamo sve obaveze prema bankama i dobavljačima.", slug: "preuzimanje-firmi" },
  { title: "Prodaja firmi", description: "Profesionalna prodaja vaše firme po optimalnoj cijeni. Kompletna priprema dokumentacije i pronalazak kupca.", slug: "prodaja-firmi" },
  { title: "Kupovina firmi", description: "Strateška kupovina firmi u regionu i EU. Due diligence, pravna analiza i kompletna akvizicija.", slug: "kupovina-firmi" },
  { title: "Osnivanje firmi u EU", description: "Osnivanje novih kompanija u Njemačkoj, Austriji i drugim EU zemljama sa svim regulatornim zahtjevima.", slug: "osnivanje-firmi-eu" },
  { title: "Preuzimanje firmi u EU", description: "Preuzimanje postojećih firmi u Evropskoj uniji sa kompletnom pravnom i finansijskom dokumentacijom.", slug: "preuzimanje-firmi-eu" },
];

const Services = () => {
  return (
    <>
      <section className="pt-40 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-6">Usluge</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-8">
              Kompletna rješenja
              <br />
              <span className="text-gradient">za vaš biznis.</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Od preuzimanja blokiranih firmi do osnivanja novih kompanija u EU — pokrivamo sve.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <div className="separator-thin container mx-auto" />

      <section className="py-32 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, i) => (
              <AnimatedSection key={service.slug} delay={i * 0.05}>
                <ServiceCard {...service} index={i} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
};

export default Services;
