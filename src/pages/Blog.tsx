import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import { ArrowUpRight } from "lucide-react";

const posts = [
  {
    title: "Kako prodati firmu u blokadi — vodič za 2024",
    excerpt: "Kompletan vodič kroz proces prodaje firme koja se nalazi u finansijskim poteškoćama.",
    date: "15. Jan 2024",
    tag: "Vodič",
    slug: "kako-prodati-firmu",
    featured: true,
  },
  {
    title: "5 koraka do osnivanja firme u Nemačkoj",
    excerpt: "Praktičan pregled procesa osnivanja GmbH u Nemačkoj za preduzetnike iz regiona.",
    date: "28. Dec 2023",
    tag: "EU",
    slug: "osnivanje-firme-njemacka",
  },
  {
    title: "Restrukturiranje duga: Šta trebate znati",
    excerpt: "Osnove restrukturiranja duga i kako pristupiti pregovorima sa poveriocima.",
    date: "10. Dec 2023",
    tag: "Edukacija",
    slug: "restrukturiranje-duga",
  },
  {
    title: "Trendovi u akvizicijama na Balkanu",
    excerpt: "Analiza tržišta M&A u jugoistočnoj Evropi i prognoze za naredni period.",
    date: "22. Nov 2023",
    tag: "Analiza",
    slug: "trendovi-akvizicije",
  },
];

const Blog = () => {
  const featured = posts.find((p) => p.featured);
  const rest = posts.filter((p) => !p.featured);

  return (
    <>
      <section className="pt-40 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-6">Blog</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              Znanje i uvidi
            </h1>
          </AnimatedSection>
        </div>
      </section>

      <div className="separator-thin container mx-auto" />

      {/* Featured */}
      {featured && (
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <AnimatedSection>
              <Link to={`/blog/${featured.slug}`} className="group block border-glow rounded-sm p-10 md:p-16 bg-card">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground">{featured.tag}</span>
                  <span className="text-xs text-text-tertiary">{featured.date}</span>
                </div>
                <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4 group-hover:text-gradient transition-all">
                  {featured.title}
                </h2>
                <p className="text-muted-foreground max-w-xl mb-6">{featured.excerpt}</p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-foreground">
                  Pročitaj više <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </Link>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* Posts grid */}
      <section className="pb-32 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {rest.map((post, i) => (
              <AnimatedSection key={post.slug} delay={i * 0.05}>
                <Link to={`/blog/${post.slug}`} className="group block border-glow rounded-sm p-8 bg-card h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground">{post.tag}</span>
                    <span className="text-xs text-text-tertiary">{post.date}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-gradient transition-all">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{post.excerpt}</p>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
