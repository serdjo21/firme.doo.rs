import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import CaseStudyCard from "@/components/CaseStudyCard";
import CTA from "@/components/CTA";

const categories = ["Sve", "Preuzimanje", "Prodaja", "Restrukturiranje"];

const caseStudies = [
  { title: "Proizvodna firma, Srbija", problem: "Firma u blokadi 3 godine sa dugom od €2.4M prema bankama i dobavljačima.", outcome: "Kompletno rešena sva dugovanja u roku od 21 dan. Firma ponovo operativna.", category: "Preuzimanje" },
  { title: "IT kompanija, Hrvatska", problem: "Vlasnik želeo prodati firmu ali bez kupaca na tržištu.", outcome: "Pronađen strateški kupac iz Nemačke. Transakcija zaključena za €1.8M.", category: "Prodaja" },
  { title: "Građevinska firma, BiH", problem: "Kompleksna struktura dugova prema 12 različitih poverilaca.", outcome: "Restrukturiran dug, postignut dogovor sa svim poveriocima. Ušteda od 40%.", category: "Restrukturiranje" },
  { title: "Trgovačko društvo, Crna Gora", problem: "Blokada računa i pretnja stečajem sa 45 zaposlenih.", outcome: "Preuzeta firma, rešeni dugovi, sačuvano 38 radnih mesta.", category: "Preuzimanje" },
  { title: "Logistička firma, Slovenija", problem: "Vlasnik u penziji, nema naslednika, firma profitabilna.", outcome: "Uspešna prodaja lokalnom konkurentu uz zadržavanje svih zaposlenih.", category: "Prodaja" },
  { title: "Hotelski kompleks, Makedonija", problem: "Dugovi prema banci i blokiran razvoj novog krila hotela.", outcome: "Restrukturiran kredit, osigurano novo finansiranje, projekat nastavljen.", category: "Restrukturiranje" },
];

const CaseStudies = () => {
  const [active, setActive] = useState("Sve");
  const filtered = active === "Sve" ? caseStudies : caseStudies.filter((c) => c.category === active);

  return (
    <>
      <section className="pt-40 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-6">Studije slučaja</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-8">
              Rezultati koji
              <br />
              <span className="text-gradient">govore sami.</span>
            </h1>
          </AnimatedSection>
        </div>
      </section>

      <div className="separator-thin container mx-auto" />

      <section className="py-32 px-6">
        <div className="container mx-auto">
          {/* Filter tabs */}
          <div className="flex gap-2 mb-12 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 text-sm font-medium rounded-sm transition-all duration-300 ${
                  active === cat
                    ? "bg-foreground text-background"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((study, i) => (
              <AnimatedSection key={study.title} delay={i * 0.05}>
                <CaseStudyCard {...study} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTA title="Imate sličan problem?" buttonText="Razgovarajmo" />
    </>
  );
};

export default CaseStudies;
