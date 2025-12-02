import { Instagram, Facebook, Youtube, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container-custom py-12 px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="font-heading font-bold text-primary-foreground text-lg">A</span>
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-foreground text-lg leading-tight">
                  ALLIANCE
                </span>
                <span className="text-primary text-xs font-semibold tracking-wider">
                  JIU-JITSU MAIA
                </span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm max-w-md mb-6">
              Academia de Jiu-Jitsu Brasileiro na Maia, servindo Porto, Póvoa de Varzim e Vila do Conde.
              Faça parte da maior equipa de BJJ do mundo. Aulas para crianças e adultos.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background rounded-lg flex items-center justify-center border border-border hover:border-primary/50 hover:text-primary transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background rounded-lg flex items-center justify-center border border-border hover:border-primary/50 hover:text-primary transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background rounded-lg flex items-center justify-center border border-border hover:border-primary/50 hover:text-primary transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="mailto:info@alliancejjmaia.com"
                className="w-10 h-10 bg-background rounded-lg flex items-center justify-center border border-border hover:border-primary/50 hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {["Início", "Programas", "Metodologia", "Horários", "Galeria", "Contacto"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
                      className="text-muted-foreground text-sm hover:text-primary transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Programas</h4>
            <ul className="space-y-2">
              {["Jiu-Jitsu Kids", "Jiu-Jitsu Adultos", "No-Gi", "Aulas Privadas"].map(
                (program) => (
                  <li key={program}>
                    <a
                      href="#programas"
                      className="text-muted-foreground text-sm hover:text-primary transition-colors"
                    >
                      {program}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Alliance Jiu-Jitsu Maia. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-muted-foreground text-sm hover:text-primary transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-muted-foreground text-sm hover:text-primary transition-colors">
              Termos e Condições
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
