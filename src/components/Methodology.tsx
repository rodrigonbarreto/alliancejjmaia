import { motion } from "framer-motion";
import { Shield, Users, Award, Target } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Tradição Alliance",
    description:
      "Fazemos parte de uma das maiores e mais respeitadas equipas de Jiu-Jitsu do mundo, com mais de 40 anos de história.",
  },
  {
    icon: Users,
    title: "Comunidade",
    description:
      "Ao treinar connosco, torna-se parte de uma família que valoriza a disciplina, o respeito mútuo e o desenvolvimento pessoal.",
  },
  {
    icon: Award,
    title: "Instrutores Certificados",
    description:
      "Os nossos instrutores são profissionais experientes e dedicados, comprometidos com a sua evolução desde o primeiro dia.",
  },
  {
    icon: Target,
    title: "Metodologia Comprovada",
    description:
      "Seguimos um currículo estruturado que garante o desenvolvimento técnico progressivo de todos os alunos.",
  },
];

const Methodology = () => {
  return (
    <section id="metodologia" className="section-padding bg-card">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary font-semibold tracking-wider uppercase text-sm mb-3">
              Sobre Nós
            </p>
            <h2 className="heading-md text-foreground mb-6">
              A Nossa <span className="text-gradient">Metodologia</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Na Alliance Maia, seguimos os princípios e tradições que tornaram a Alliance
              numa das organizações de Jiu-Jitsu mais respeitadas mundialmente. Quando entra
              no nosso tatame, torna-se parte de uma família que valoriza a excelência.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              O nosso objetivo é proporcionar uma experiência única de treino, onde cada
              aluno recebe atenção individualizada para atingir os seus objetivos, seja
              conquistar a faixa preta, competir ao mais alto nível, ou simplesmente
              melhorar a sua qualidade de vida através do Jiu-Jitsu.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background p-6 rounded-xl border border-border/50 hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;
