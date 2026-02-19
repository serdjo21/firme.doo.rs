import Hero from "@/components/Hero";
import AnimatedSection from "@/components/AnimatedSection";
import ServiceCard from "@/components/ServiceCard";
import CTA from "@/components/CTA";

type Service = {
  title: string;
  description: string;
  slug: string;
};

const services: Service[] = [
  {
    title: "Preuzimanje firmi u blokadi",
    description:
      "Kompletno preuzimanje firmi sa dugovima, blokadama i sudskim sporovima.",
    slug: "preuzimanje-firmi",
  },
  {
    title: "Prodaja firmi",
    description:
      "Profesionalna prodaja vaše firme po optimalnoj cijeni na tržištu.",
    slug: "prodaja-firmi",
  },
  {
    title: "Kupovina firmi",
    description:
      "Strateška kupovina firmi u regionu i EU sa svim pravnim aspektima.",
    slug: "kupovina-firmi",
  },
  {
    title: "Osnivanje firmi u EU",
    description: "Osnivanje novih kompanija u zemljama Evropske unije.",
    slug: "osnivanje-firmi-eu",
  },
  {
    title: "Preuzimanje firmi u EU",
    description:
      "Preuzimanje postojećih firmi u EU sa kompletnom dokumentacijom.",
    slug: "preuzimanje-firmi-eu",
  },
];

const territories: string[] = [
  "Crna Gora",
  "Srbija",
  "BiH",
  "Makedonija",
  "Hrvatska",
  "Slovenija",
  "Njemačka",
  "Austrija",
];

const ImagePlaceholder = ({ label }: { label: string }) => (
  <div className="relative w-full min-h-[320px] rounded-xl border border-dashed border-border/40 bg-muted/20 flex items-center justify-center text-xs tracking-[0.3em] text-muted-foreground">
    {label}
  </div>
);

const Index = () => {
  return (
    <div className="relative overflow-hidden">

      {/* background depth */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-background via-background to-muted/20" />

      <Hero />

      {/* ABOUT */}
      <section className="py-40">
        <div className="mx-auto max-w-[1400px] px-8">
          <AnimatedSection>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

              <div className="pl-6 border-l border-border/40">
                <p className="text-xs tracking-[0.35em] uppercase text-muted-foreground mb-6">
                  O nama
                </p>

                <h2 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05]">
                  Fokus na rješavanje
                  <br />
                  <span className="text-gradient">
                    cjelokupnih zaduženja
                  </span>
                </h2>

                <div className="space-y-6 mt-8">
                  <p className="text-muted-foreground leading-relaxed">
                    Specijalizirani smo za preuzimanje firmi u blokadi,
                    rješavanje dugova i restrukturiranje poslovanja.
                  </p>

                  <p className="text-muted-foreground leading-relaxed">
                    Diskretno, profesionalno i brzo — naš tim omogućava
                    rješenja čak i u kompleksnim situacijama.
                  </p>
                </div>
              </div>

              {/* ABOUT IMAGE */}
              <ImagePlaceholder label="SLIKA — TEAM / CONSULTING / OFFICE" />

            </div>

          </AnimatedSection>
        </div>
      </section>

      <div className="mx-auto max-w-[1400px] px-8">
        <div className="separator-thin" />
      </div>

      {/* SERVICES */}
      <section className="py-40">
        <div className="mx-auto max-w-[1400px] px-8">

          <AnimatedSection>
            <div className="max-w-3xl mb-20">
              <p className="text-xs tracking-[0.35em] uppercase text-muted-foreground mb-6">
                Usluge
              </p>

              <h2 className="text-5xl md:text-7xl font-semibold tracking-tight">
                Šta radimo
              </h2>
            </div>
          </AnimatedSection>

          {/* visual placeholder */}
          <div className="mb-24">
            <ImagePlaceholder label="SLIKA — BUSINESS PROCESS / CORPORATE VISUAL" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

            {services.map((service, i) => (
              <AnimatedSection key={service.slug} delay={i * 0.05}>
                <div className="group transition-all duration-500 hover:-translate-y-2">
                  <div className="h-full rounded-xl border border-border/40 bg-card/60 backdrop-blur-md p-1">
                    <ServiceCard {...service} index={i} />
                  </div>
                </div>
              </AnimatedSection>
            ))}

          </div>

        </div>
      </section>

      <div className="mx-auto max-w-[1400px] px-8">
        <div className="separator-thin" />
      </div>

      {/* TERRITORIES */}
      <section className="py-40">
        <div className="mx-auto max-w-[1400px] px-8">

          <AnimatedSection>
            <div className="max-w-3xl mb-20">
              <p className="text-xs tracking-[0.35em] uppercase text-muted-foreground mb-6">
                Teritorije
              </p>

              <h2 className="text-5xl md:text-7xl font-semibold tracking-tight">
                Gdje djelujemo
              </h2>
            </div>
          </AnimatedSection>

          {/* MAP VISUAL */}
          <div className="mb-24">
            <ImagePlaceholder label="SLIKA — MAPA EVROPE / PRESENCE MAP" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-12">

            {territories.map((territory, i) => (
              <AnimatedSection key={territory} delay={i * 0.04}>
                <div className="group relative inline-block">
                  <span className="text-xl md:text-2xl font-semibold tracking-tight transition-all duration-300 group-hover:text-primary">
                    {territory}
                  </span>

                  <span className="absolute left-0 -bottom-2 h-[1px] w-0 bg-primary transition-all duration-500 group-hover:w-full" />
                </div>
              </AnimatedSection>
            ))}

          </div>

        </div>
      </section>

      <CTA />

    </div>
  );
};

export default Index;
