import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { GraduationCap, Award } from "lucide-react";

export function Education() {
  const education = [
    {
      degree: "Bachelor of Technology - Computer Science and Engineering",
      institution: "Lovely Professional University, Punjab, India",
      duration: "August 2023 – Present",
      score: "CGPA: 8.13",
      current: true
    },
    {
      degree: "Intermediate",
      institution: "DAV Public School, Jind, Haryana",
      duration: "April 2022 - March 2023",
      score: "Percentage: 80.4%",
      current: false
    },
    {
      degree: "Matriculation",
      institution: "DAV Public School, Jind, Haryana",
      duration: "April 2020 - March 2021",
      score: "Percentage: 89.2%",
      current: false
    }
  ];

  return (
    <section id="education" className="py-24 bg-card/30 border-y border-border/50 relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading 
          title="Academic Background" 
          subtitle="My formal education and academic achievements." 
        />

        <div className="max-w-3xl mx-auto mt-16 relative">
          {/* Main vertical line */}
          <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/50 via-primary/20 to-transparent md:-translate-x-1/2 rounded-full" />

          <div className="space-y-12">
            {education.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className={`relative flex flex-col md:flex-row items-start ${
                  idx % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Center Icon */}
                <div className="absolute left-0 md:left-1/2 w-14 h-14 bg-background border-4 border-card rounded-full flex items-center justify-center md:-translate-x-1/2 z-10 shadow-lg shadow-black/20">
                  <GraduationCap className={`w-6 h-6 ${edu.current ? "text-primary" : "text-muted-foreground"}`} />
                </div>

                {/* Content Box */}
                <motion.div 
                  whileHover={{ x: 6 }}
                  className={`ml-20 md:ml-0 md:w-1/2 ${
                  idx % 2 === 0 ? "md:pl-16" : "md:pr-16 text-left md:text-right"
                }`}>
                  <div className="bg-card p-6 rounded-2xl border border-border shadow-md hover:border-primary/30 transition-colors">
                    <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-bold mb-3">
                      {edu.duration}
                    </span>
                    <h3 className="text-xl font-bold text-foreground font-display mb-2">
                      {edu.degree}
                    </h3>
                    <p className="text-muted-foreground mb-4 font-medium">
                      {edu.institution}
                    </p>
                    <div className={`flex items-center gap-2 text-sm font-semibold ${edu.current ? 'text-blue-400' : 'text-emerald-400'} ${
                      idx % 2 === 0 ? "" : "md:justify-end"
                    }`}>
                      <Award size={16} />
                      {edu.score}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
