import AnimatedSection from "@/components/AnimatedSection";
import ContactForm from "@/components/ContactForm";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {

  const whatsappNumber = "38267123456"; // BEZ + ili razmaka

  return (
    <>
      <section className="pt-40 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-6">
              Kontakt
            </p>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-8">
              Razgovarajmo.
            </h1>
          </AnimatedSection>
        </div>
      </section>

      <div className="separator-thin container mx-auto" />

      <section className="py-32 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

            {/* LEFT */}
            <AnimatedSection>
              <div>

                <p className="text-muted-foreground leading-relaxed mb-12 max-w-md">
                  Javite nam se za besplatnu inicijalnu konsultaciju. Odgovaramo u roku od 24 sata.
                </p>

                <div className="space-y-6 mb-10">

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-sm bg-secondary flex items-center justify-center">
                      <Mail size={18} className="text-muted-foreground" />
                    </div>
                    <div>
                      <p className="text-xs text-text-tertiary mb-0.5">Email</p>
                      <p className="text-sm text-foreground">info@firmagroup.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-sm bg-secondary flex items-center justify-center">
                      <Phone size={18} className="text-muted-foreground" />
                    </div>
                    <div>
                      <p className="text-xs text-text-tertiary mb-0.5">Telefon</p>
                      <p className="text-sm text-foreground">+382 67 123 456</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-sm bg-secondary flex items-center justify-center">
                      <MapPin size={18} className="text-muted-foreground" />
                    </div>
                    <div>
                      <p className="text-xs text-text-tertiary mb-0.5">Lokacija</p>
                      <p className="text-sm text-foreground">Beograd, Srbija</p>
                    </div>
                  </div>

                </div>

                {/* 🔥 WHATSAPP BUTTONS */}
                <div className="flex flex-wrap gap-4">

                  {/* MESSAGE */}
                  <a
                    href={`https://wa.me/${whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-green-500 hover:bg-green-600 text-white text-sm font-medium transition-all duration-300"
                  >
                    <FaWhatsapp size={18} />
                    Pošaljite poruku
                  </a>

                  {/* CALL */}
                  <a
                    href={`tel:+${whatsappNumber}`}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-border hover:bg-secondary text-sm font-medium transition-all duration-300"
                  >
                    <Phone size={18} />
                    Pozovite nas
                  </a>

                </div>

              </div>
            </AnimatedSection>

            {/* RIGHT */}
            <AnimatedSection delay={0.1}>
              <ContactForm />
            </AnimatedSection>

          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
