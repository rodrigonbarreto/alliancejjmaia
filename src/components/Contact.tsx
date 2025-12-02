import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactInfo = [
  {
    icon: MapPin,
    title: "Morada",
    content: "Rua Lorem Ipsum, 123\n4470-000 Maia, Portugal",
  },
  {
    icon: Phone,
    title: "Telefone",
    content: "+351 912 345 678",
  },
  {
    icon: Mail,
    title: "Email",
    content: "info@alliancejjmaia.com",
  },
  {
    icon: Clock,
    title: "Horário",
    content: "Seg-Sex: 10:00-21:30\nSáb: 10:00-12:00",
  },
];

const Contact = () => {
  return (
    <section id="contacto" className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold tracking-wider uppercase text-sm mb-3">
            Contacto
          </p>
          <h2 className="heading-md text-foreground mb-4">
            Fale <span className="text-gradient">Connosco</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tem alguma questão sobre Jiu-Jitsu na Maia? Entre em contacto connosco ou visite a nossa academia Alliance para uma aula experimental gratuita. Servimos Porto, Póvoa de Varzim e Vila do Conde.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card-dark p-8"
          >
            <h3 className="font-heading text-xl font-semibold text-foreground mb-6">
              Envie-nos uma mensagem
            </h3>
            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Input placeholder="Nome" className="bg-background border-border" />
                </div>
                <div>
                  <Input type="email" placeholder="Email" className="bg-background border-border" />
                </div>
              </div>
              <div>
                <Input type="tel" placeholder="Telefone" className="bg-background border-border" />
              </div>
              <div>
                <Textarea
                  placeholder="A sua mensagem..."
                  className="bg-background border-border min-h-[120px]"
                />
              </div>
              <Button variant="cta" size="lg" className="w-full">
                Enviar Mensagem
              </Button>
            </form>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Contact Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                    <p className="text-muted-foreground text-sm whitespace-pre-line">
                      {item.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-card rounded-lg flex items-center justify-center border border-border hover:border-primary/50 hover:text-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-card rounded-lg flex items-center justify-center border border-border hover:border-primary/50 hover:text-primary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>

            {/* Map Placeholder */}
            <div className="h-64 bg-card rounded-xl border border-border overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47943.75722833!2d-8.647!3d41.236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd246ed1c508a9a3%3A0x400ebbde49036d0!2sMaia%2C%20Portugal!5e0!3m2!1spt-PT!2spt!4v1699999999999!5m2!1spt-PT!2spt"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Alliance Maia"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
