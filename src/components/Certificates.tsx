import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { FileBadge, Trophy, ExternalLink } from "lucide-react";

export function Certificates() {
  const certificates = [
    {
      title: "Data Analytics Job Simulation",
      issuer: "Deloitte (via Forage)",
      date: "July 2025",
      link: "https://drive.google.com/file/d/1bFv7y1zvgCBLqrWFY5vHthceLJMwlcC4/view?usp=drive_link"
    },
    {
      title: "ChatGPT-4 Prompt Engineering: ChatGPT, Generative AI & LLM",
      issuer: "Wingspan",
      date: "August 2025",
      link: "https://drive.google.com/file/d/1VKg9OeRSTip960y22e1hw_dSSNIYeL_B/view?usp=drive_link"
    },
    {
      title: "Computational Theory: Language Principle & Finite Automata Theory",
      issuer: "Wingspan",
      date: "August 2025",
      link: "https://drive.google.com/file/d/1BGmW60Op2v3gZWrTlWXzA0RKhacA72Zc/view?usp=drive_link"
    }
  ];

  const achievements = [
    {
      text: "Solving 150+ questions on LeetCode (Since June 2025)",
      link: "https://leetcode.com/u/Rahul930_60/"
    },
    {
      text: "Awarded a Certificate of participation for Completing RC Xtreme 3.0 workshop under the Department of Student Organizations (February 2025)",
      link: "https://drive.google.com/file/d/1Uys12x-C5LdW1mmL7Rh9hr_hA8CkwrQT/view?usp=drive_link"
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Certificates Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading 
              title="Certifications" 
              className="mb-8"
            />
            <div className="space-y-4">
              {certificates.map((cert, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ x: 4 }}
                  className="bg-card p-5 rounded-xl border border-border flex items-start gap-4 hover:border-primary/40 hover:bg-card/80 transition-colors"
                >
                  <div className="p-3 bg-primary/10 rounded-lg text-primary shrink-0">
                    <FileBadge size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-foreground text-lg mb-1">{cert.title}</h4>
                    <p className="text-muted-foreground text-sm font-medium">{cert.issuer}</p>
                    <div className="flex items-center justify-between mt-2">
                      <p className="text-xs text-muted-foreground opacity-70">{cert.date}</p>
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary/80 transition-colors"
                      >
                        View Certificate <ExternalLink size={12} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Achievements Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <SectionHeading 
              title="Achievements" 
              className="mb-8"
            />
            <div className="space-y-4">
              {achievements.map((achievement, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ x: 4 }}
                  className="bg-card p-6 rounded-xl border border-border relative overflow-hidden group hover:border-primary/50 transition-colors"
                >
                  <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                    <Trophy size={80} className="text-primary -rotate-12 translate-x-4 -translate-y-4" />
                  </div>
                  <div className="flex items-start gap-4 relative z-10">
                    <div className="mt-1 text-primary shrink-0">
                      <Trophy size={20} />
                    </div>
                    <div className="flex-1">
                      <p className="text-foreground leading-relaxed font-medium mb-3">
                        {achievement.text}
                      </p>
                      <a
                        href={achievement.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary/80 transition-colors"
                      >
                        View Proof <ExternalLink size={12} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
