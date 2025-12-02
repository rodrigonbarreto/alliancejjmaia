import { motion } from "framer-motion";
import { Clock } from "lucide-react";

const schedule = [
  {
    day: "Segunda-feira",
    classes: [
      { time: "10:00 - 11:30", name: "Jiu-Jitsu Adultos", type: "adultos" },
      { time: "17:00 - 18:00", name: "Jiu-Jitsu Kids", type: "kids" },
      { time: "18:30 - 20:00", name: "Jiu-Jitsu Adultos", type: "adultos" },
      { time: "20:00 - 21:30", name: "No-Gi", type: "nogi" },
    ],
  },
  {
    day: "Terça-feira",
    classes: [
      { time: "10:00 - 11:30", name: "Jiu-Jitsu Adultos", type: "adultos" },
      { time: "17:00 - 18:00", name: "Jiu-Jitsu Kids", type: "kids" },
      { time: "18:30 - 20:00", name: "Jiu-Jitsu Adultos", type: "adultos" },
    ],
  },
  {
    day: "Quarta-feira",
    classes: [
      { time: "10:00 - 11:30", name: "Jiu-Jitsu Adultos", type: "adultos" },
      { time: "17:00 - 18:00", name: "Jiu-Jitsu Kids", type: "kids" },
      { time: "18:30 - 20:00", name: "Jiu-Jitsu Adultos", type: "adultos" },
      { time: "20:00 - 21:30", name: "No-Gi", type: "nogi" },
    ],
  },
  {
    day: "Quinta-feira",
    classes: [
      { time: "10:00 - 11:30", name: "Jiu-Jitsu Adultos", type: "adultos" },
      { time: "17:00 - 18:00", name: "Jiu-Jitsu Kids", type: "kids" },
      { time: "18:30 - 20:00", name: "Jiu-Jitsu Adultos", type: "adultos" },
    ],
  },
  {
    day: "Sexta-feira",
    classes: [
      { time: "10:00 - 11:30", name: "Jiu-Jitsu Adultos", type: "adultos" },
      { time: "17:00 - 18:00", name: "Jiu-Jitsu Kids", type: "kids" },
      { time: "18:30 - 20:00", name: "Jiu-Jitsu Adultos", type: "adultos" },
    ],
  },
  {
    day: "Sábado",
    classes: [
      { time: "10:00 - 12:00", name: "Open Mat", type: "openmat" },
    ],
  },
];

const typeColors: Record<string, string> = {
  adultos: "bg-primary/20 text-primary",
  kids: "bg-blue-500/20 text-blue-400",
  nogi: "bg-red-500/20 text-red-400",
  openmat: "bg-green-500/20 text-green-400",
};

const Schedule = () => {
  return (
    <section id="horarios" className="section-padding bg-background">
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
            Horários
          </p>
          <h2 className="heading-md text-foreground mb-4">
            Agenda de <span className="text-gradient">Aulas</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Consulte os nossos horários e escolha as aulas que melhor se adaptam à sua rotina.
            Horários sujeitos a alterações.
          </p>
        </motion.div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-10"
        >
          {[
            { label: "Adultos", type: "adultos" },
            { label: "Kids", type: "kids" },
            { label: "No-Gi", type: "nogi" },
            { label: "Open Mat", type: "openmat" },
          ].map((item) => (
            <div key={item.type} className="flex items-center gap-2">
              <span className={`w-3 h-3 rounded-full ${typeColors[item.type].split(" ")[0]}`} />
              <span className="text-sm text-muted-foreground">{item.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Schedule Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {schedule.map((day, index) => (
            <motion.div
              key={day.day}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="card-dark p-6"
            >
              <h3 className="font-heading text-lg font-semibold text-foreground mb-4 pb-3 border-b border-border">
                {day.day}
              </h3>
              <div className="space-y-3">
                {day.classes.map((classItem, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 text-sm"
                  >
                    <Clock className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                    <span className="text-muted-foreground w-24 flex-shrink-0">
                      {classItem.time}
                    </span>
                    <span
                      className={`px-2 py-1 rounded text-xs font-medium ${typeColors[classItem.type]}`}
                    >
                      {classItem.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
