import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import programKids from "@/assets/program-kids.jpg";
import programAdults from "@/assets/program-adults.jpg";
import programNogi from "@/assets/program-nogi.jpg";
import programPrivate from "@/assets/program-private.jpg";

const images = [
  { src: heroBg, alt: "Treino Alliance Maia" },
  { src: programKids, alt: "Aulas Kids" },
  { src: programAdults, alt: "Aulas Adultos" },
  { src: programNogi, alt: "No-Gi Training" },
  { src: programPrivate, alt: "Aulas Privadas" },
  { src: heroBg, alt: "Academia Alliance Maia" },
];

const Gallery = () => {
  return (
    <section id="galeria" className="section-padding bg-card">
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
            Galeria
          </p>
          <h2 className="heading-md text-foreground">
            A Nossa <span className="text-gradient">Academia</span>
          </h2>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-xl group cursor-pointer ${
                index === 0 || index === 5 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <div className={`${index === 0 || index === 5 ? "aspect-[4/3]" : "aspect-square"}`}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-background/0 group-hover:bg-background/40 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-foreground font-heading text-lg font-semibold">
                    {image.alt}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Instagram CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            Siga-nos no Instagram para mais conteúdo
          </p>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-semibold"
          >
            @alliancejjmaia
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
