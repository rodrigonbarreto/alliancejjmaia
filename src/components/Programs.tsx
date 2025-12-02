import { motion } from "framer-motion";
import programKids from "@/assets/program-kids.jpg";
import programAdults from "@/assets/program-adults.jpg";
import programNogi from "@/assets/program-nogi.jpg";
import programPrivate from "@/assets/program-private.jpg";

const programs = [
  {
    title: "Jiu-Jitsu Kids",
    age: "5 a 14 anos",
    description:
      "Aulas de Jiu-Jitsu para crianças na Maia e Porto. Ensinamos respeito, disciplina e autoconfiança num ambiente divertido e seguro. Artes marciais infantis em Póvoa de Varzim e Vila do Conde.",
    image: programKids,
  },
  {
    title: "Jiu-Jitsu Adultos",
    age: "A partir dos 15 anos",
    description:
      "Aulas de BJJ para adultos na Maia e Grande Porto. Programa completo do iniciante ao competidor. Academia Alliance com técnicas de Jiu-Jitsu Brasileiro de alto nível.",
    image: programAdults,
  },
  {
    title: "No-Gi",
    age: "Todos os níveis",
    description:
      "Treinos de No-Gi e Grappling na Maia. Submission wrestling e Jiu-Jitsu sem kimono para quem quer agilidade e técnica. Aulas em Porto, Póvoa e Vila do Conde.",
    image: programNogi,
  },
  {
    title: "Aulas Privadas",
    age: "Personalizado",
    description:
      "Aulas particulares de Jiu-Jitsu na Maia. Treino personalizado com instrutores Alliance para evolução rápida. Disponível para alunos de Porto e região.",
    image: programPrivate,
  },
];

const Programs = () => {
  return (
    <section id="programas" className="section-padding bg-background">
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
            Aulas
          </p>
          <h2 className="heading-md text-foreground">
            Nossos <span className="text-gradient">Programas</span>
          </h2>
        </motion.div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card-dark group cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="text-xs text-primary font-semibold bg-primary/20 px-3 py-1 rounded-full">
                    {program.age}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {program.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {program.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
