import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { Terminal, Package, Wrench, Brain } from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Terminal className="w-6 h-6 text-teal-500" />,
      skills: ["C++", "SQL", "C", "Python"],
      delay: 0.1,
      colorClass: "bg-teal-500/10 text-teal-400 border-teal-500/30",
      accentBg: "bg-teal-500",
    },
    {
      title: "Frameworks & Libraries",
      icon: <Package className="w-6 h-6 text-purple-500" />,
      skills: ["Numpy", "Pandas", "Seaborn", "Matplotlib", "Scikit-Learn", "Django"],
      delay: 0.2,
      colorClass: "bg-purple-500/10 text-purple-400 border-purple-500/30",
      accentBg: "bg-purple-500",
    },
    {
      title: "Tools & Platforms",
      icon: <Wrench className="w-6 h-6 text-blue-500" />,
      skills: ["MS Excel", "Power BI", "IDLE", "Android Studio"],
      delay: 0.3,
      colorClass: "bg-blue-500/10 text-blue-400 border-blue-500/30",
      accentBg: "bg-blue-500",
    },
    {
      title: "Soft Skills",
      icon: <Brain className="w-6 h-6 text-amber-500" />,
      skills: ["Problem-Solving", "Teamwork", "Analytical Thinking"],
      delay: 0.4,
      colorClass: "bg-amber-500/10 text-amber-400 border-amber-500/30",
      accentBg: "bg-amber-500",
    },
  ];

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Technical Arsenal" 
          subtitle="The tools and technologies I use to bring ideas to life." 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: category.delay }}
              whileHover={{ y: -6 }}
              className={`bg-card rounded-2xl p-6 border border-border/50 shadow-lg shadow-black/10 hover:shadow-primary/5 hover:border-primary/30 transition-all duration-300 group`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${category.colorClass.split(' ')[0]}`}>
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4 font-display">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <motion.span
                    whileHover={{ scale: 1.08, y: -2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    key={skill}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium border cursor-default transition-colors duration-200 ${category.colorClass}`}
                  >
                    <span className={`w-2 h-2 rounded-full inline-block ${category.accentBg}`}></span>
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
