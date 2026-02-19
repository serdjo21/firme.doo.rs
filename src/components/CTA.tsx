import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface CTAProps {
  title?: string;
  buttonText?: string;
  buttonLink?: string;
}

const CTA = ({
  title = "Rešite firmu i dugovanja u roku od 7 dana.",
  buttonText = "Kontaktirajte nas",
  buttonLink = "/kontakt",
}: CTAProps) => {
  return (
    <section className="py-32 px-6">
      <div className="container mx-auto">
        <div className="bg-card border border-border rounded-sm p-12 md:p-20 text-center">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-10 leading-tight max-w-3xl mx-auto">
            {title}
          </h2>
          <Link
            to={buttonLink}
            className="group inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background font-medium text-sm tracking-wide rounded-sm hover:bg-muted-foreground transition-all duration-300"
          >
            {buttonText}
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
