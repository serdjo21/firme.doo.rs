import AnimatedSection from "@/components/AnimatedSection";
import CTA from "@/components/CTA";

const timeline = [
  { year: "2015", title: "Osnivanje", desc: "Pokretanje prvih projekata u Crnoj Gori i Srbiji." },
  { year: "2017", title: "Širenje na region", desc: "Proširenje poslovanja na BiH, Hrvatsku i Makedoniju." },
  { year: "2019", title: "Ulazak u EU", desc: "Otvaranje ureda u Njemačkoj i Austriji." },
  { year: "2021", title: "500+ klijenata", desc: "Prelazak od 500 uspješno riješenih slučajeva." },
  { year: "2024", title: "Lider u regionu", desc: "Pozicionirani kao vodeći tim za restrukturiranje u jugoistočnoj Evropi." },
];

const About = () => {
  return (
    <>
      <section className="pt-40 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-6">O nama</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-8">
              Stručnost. Iskustvo.
              <br />
              <span className="text-gradient">Rezultati.</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Već godinama pomažemo kompanijama u regionu i EU da prebrode najteže poslovne izazove — od blokada i dugova do potpunog restrukturiranja.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <div className="separator-thin container mx-auto" />

      {/* Mission & Vision */}
      <section className="py-32 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <AnimatedSection>
              <p className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground mb-4">Misija</p>
              <h3 className="text-2xl font-semibold text-foreground mb-4">Osloboditi potencijal kompanija</h3>
              <p className="text-muted-foreground leading-relaxed">
                Naša misija je da svaku firmu u blokadi transformišemo u funkcionalan poslovni subjekt, rješavajući sve obaveze prema bankama, dobavljačima i institucijama.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <p className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground mb-4">Vizija</p>
              <h3 className="text-2xl font-semibold text-foreground mb-4">Regionalni lider u restrukturiranju</h3>
              <p className="text-muted-foreground leading-relaxed">
                Nastojimo postati prva adresa za sve kompanije u jugoistočnoj Evropi i EU kojima treba strateško rješenje za poslovne poteškoće.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <div className="separator-thin container mx-auto" />

      {/* Timeline */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-3xl">
          <AnimatedSection>
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-6">Istorijat</p>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-16">Naš put</h2>
          </AnimatedSection>

          <div className="space-y-0">
            {timeline.map((item, i) => (
              <AnimatedSection key={item.year} delay={i * 0.06}>
                <div className="flex gap-8 py-8 border-b border-border group hover:bg-secondary/50 transition-all -mx-6 px-6 rounded-sm">
                  <span className="text-3xl font-bold text-muted-foreground group-hover:text-foreground transition-colors min-w-[80px]">
                    {item.year}
                  </span>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTA title="Želite saznati više o nama?" buttonText="Kontaktirajte nas" />
    </>
  );
};

export default About;
