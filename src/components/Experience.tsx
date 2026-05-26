import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { Briefcase, Calendar, MapPin, ExternalLink } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      role: "Data Analyst Intern",
      company: "SkillCraft Technology",
      duration: "June 2025 – July 2025",
      location: "Remote / Office",
      description: [
        "Worked on data analysis tasks including data cleaning, preprocessing, visualization, and report creation.",
        "Assisted in performing exploratory data analysis (EDA) and supported dashboard development for internal reporting using industry-standard tools.",
      ],
      tech: ["Excel", "Python", "PowerBI", "IDLE Platform"],
      link: "https://drive.google.com/file/d/1wba3ADtAPJF4AyTdLfVVxXebc9CflCmh/view?usp=drive_link",
    },
    {
      role: "Summer Training (Core DSA)",
      company: "Lovely Professional University - CPE",
      duration: "May 2025 – June 2025",
      location: "Punjab, India",
      description: [
        "Completed an intensive summer training program focused on mastering core Data Structures and Algorithms.",
        "Gained hands-on experience in problem-solving, algorithm design, and implementation of efficient data-handling techniques.",
      ],
      tech: ["C++", "STL", "Algorithms Library", "LeetCode"],
      link: "https://drive.google.com/file/d/1KwDWgbHAL89SlHhZ_zwmZjhLhf4F8BRW/view?usp=drive_link",
    },
  ];

  return (
    <section id="experience" className="py-24 bg-card/30 border-y border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Experience & Training" 
          subtitle="My professional journey and focused learning experiences." 
        />

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="relative pl-8 md:pl-0"
            >
              <div className="md:grid md:grid-cols-5 md:gap-8 items-start">
                {/* Timeline line and dot for mobile */}
                <div className="absolute left-0 top-0 bottom-0 w-px bg-border md:hidden"></div>
                <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-primary md:hidden ring-4 ring-background"></div>

                <div className="md:col-span-1 mb-4 md:mb-0 md:text-right pt-1">
                  <div className="flex items-center md:justify-end gap-2 text-sm font-semibold text-primary mb-1">
                    <Calendar size={14} />
                    {exp.duration}
                  </div>
                  <div className="flex items-center md:justify-end gap-2 text-xs text-muted-foreground">
                    <MapPin size={12} />
                    {exp.location}
                  </div>
                </div>

                <motion.div 
                  whileHover={{ scale: 1.01 }}
                  className="md:col-span-4 bg-card rounded-2xl p-6 md:p-8 border border-border/50 shadow-md hover:shadow-lg hover:border-border transition-all duration-300 relative group"
                >
                  {/* Timeline dot for desktop */}
                  <div className="hidden md:block absolute -left-4 top-8 w-8 h-px bg-border group-hover:bg-primary transition-colors"></div>
                  <div className="hidden md:block absolute -left-5 top-[28px] w-2 h-2 rounded-full bg-primary ring-4 ring-background"></div>

                  <div className="flex items-center gap-3 mb-2">
                    <Briefcase className="w-5 h-5 text-primary" />
                    <h3 className="text-xl md:text-2xl font-bold text-foreground font-display">
                      {exp.role}
                    </h3>
                  </div>
                  <h4 className="text-lg text-muted-foreground mb-6 font-medium">
                    {exp.company}
                  </h4>

                  <ul className="space-y-3 mb-6">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start text-muted-foreground/90">
                        <span className="mr-3 text-primary mt-1.5 opacity-70">▹</span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-border/50">
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-background text-xs font-medium text-foreground rounded-full border border-border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary/80 transition-colors shrink-0"
                    >
                      View Certificate <ExternalLink size={12} />
                    </a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
