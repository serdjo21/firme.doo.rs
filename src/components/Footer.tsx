import { Link } from "react-router-dom";

const footerLinks = [
  {
    title: "Navigacija",
    links: [
      { label: "Početna", path: "/" },
      { label: "O nama", path: "/o-nama" },
      { label: "Usluge", path: "/usluge" },
      { label: "Kontakt", path: "/kontakt" },
    ],
  },
  {
    title: "Usluge",
    links: [
      { label: "Preuzimanje firmi", path: "/usluge/preuzimanje-firmi" },
      { label: "Prodaja firmi", path: "/usluge/prodaja-firmi" },
      { label: "Kupovina firmi", path: "/usluge/kupovina-firmi" },
      { label: "Osnivanje u EU", path: "/usluge/osnivanje-firmi-eu" },
    ],
  },
  {
    title: "Regija",
    links: [
      { label: "Crna Gora", path: "#" },
      { label: "Srbija", path: "#" },
      { label: "Bosna i Hercegovina", path: "#" },
      { label: "Hrvatska", path: "#" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="text-xl font-bold tracking-tight text-foreground">
              <img src="/logo.png" alt="Logo" className="h-30 w-140"/>
            </Link>
            <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
              Profesionalno rešavanje poslovnih izazova u regionu i Evropskoj uniji.
            </p>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground mb-6">
                {group.title}
              </h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-sm text-text-secondary hover:text-foreground transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="separator-thin mt-16 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-text-tertiary">
            © {new Date().getFullYear()} FirmeDooRs. Sva prava zadržana.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-text-tertiary hover:text-foreground transition-colors">
              Politika privatnosti
            </a>
            <a href="#" className="text-xs text-text-tertiary hover:text-foreground transition-colors">
              Uslovi korištenja
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
