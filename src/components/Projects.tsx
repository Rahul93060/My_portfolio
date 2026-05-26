import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { Github, ExternalLink, Activity, HeartPulse } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "MOM AI – Maternal Health Risk Prediction Platform",
      duration: "2025",
      icon: <HeartPulse className="w-8 h-8 text-teal-500" />,
      description: "An AI-powered web application to predict maternal health risks by analyzing key medical parameters like age, blood pressure, blood sugar, body temperature, and heart rate.",
      bullets: [
        "Implemented a machine learning model to classify pregnancies into low, medium, and high-risk categories for early detection.",
        "Integrated the trained model into a Django-based backend for real-time predictions.",
        "Built a user-friendly interface for data input and result visualization with REST API support.",
      ],
      tech: ["Python", "Scikit-learn", "Pandas", "NumPy", "Django", "HTML", "CSS", "Bootstrap", "SQLite", "REST API"],
      github: "https://github.com/Rahul93060/MOM_AI",
      demo: null,
      color: "teal",
      borderClass: "border-t-4 border-t-teal-500",
      bgOverlay: "from-teal-500/5",
      iconBg: "bg-teal-500/10",
      techClass: "bg-teal-500/10 text-teal-500",
    },
    {
      title: "Hospital Appointment System",
      duration: "June 2025 – July 2025",
      icon: <HeartPulse className="w-8 h-8 text-purple-500" />,
      description: "A comprehensive console-based hospital appointment scheduling system built with advanced C++ concepts and core data structures.",
      bullets: [
        "Implemented appointment booking, cancellation, search, and age-based patient filtering features.",
        "Prioritized emergency patients using a severity-based priority queue for real-time handling.",
        "Integrated file handling for persistent storage of records."
      ],
      tech: ["C++", "Linked Lists", "Unordered Map", "Priority Queue", "File Handling"],
      github: "https://github.com/Rahul93060/Hospital-Appointment-System-using-DSA",
      demo: null,
      color: "purple",
      borderClass: "border-t-4 border-t-purple-500",
      bgOverlay: "from-purple-500/5",
      iconBg: "bg-purple-500/10",
      techClass: "bg-purple-500/10 text-purple-500",
    },
    {
      title: "Energy Flow: Performance & Trend Dashboard",
      duration: "October 2025 – December 2025",
      icon: <Activity className="w-8 h-8 text-blue-500" />,
      description: "An interactive and detailed Power BI dashboard designed to analyze and visualize energy consumption, cost, and carbon emissions.",
      bullets: [
        "Used charts, KPIs, and slicers (Renewable, Non-Renewable, Total Consumption) for easy comparison.",
        "Added DAX measures and improved dashboard usability with drill-through and tooltips.",
        "Designed clear visual hierarchy to quickly identify carbon emission trends."
      ],
      tech: ["Power BI", "Power Query", "DAX", "Data Modelling", "Visualization"],
      github: "https://github.com/Rahul93060/Energy-Flow-Performance-Trend-Dashboard",
      demo: null,
      color: "blue",
      borderClass: "border-t-4 border-t-blue-500",
      bgOverlay: "from-blue-500/5",
      iconBg: "bg-blue-500/10",
      techClass: "bg-blue-500/10 text-blue-500",
    }
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Featured Projects" 
          subtitle="Showcasing my ability to build complex applications and analytical dashboards." 
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -8, scale: 1.01 }}
              transition={{ duration: 0.5, delay: idx * 0.2, type: "spring", stiffness: 300 }}
              className={`group flex flex-col bg-card rounded-2xl border border-border/50 overflow-hidden shadow-lg hover:shadow-primary/5 hover:border-primary/40 transition-all duration-500 relative ${project.borderClass}`}
            >
              {/* Subtle Gradient Overlay */}
              <div className={`absolute top-0 left-0 w-full h-32 bg-gradient-to-b ${project.bgOverlay} to-transparent pointer-events-none`} />

              {/* Card Header area */}
              <div className="p-8 pb-0 flex items-start justify-between relative z-10">
                <div className={`w-16 h-16 rounded-2xl ${project.iconBg} flex items-center justify-center group-hover:-translate-y-2 group-hover:shadow-lg transition-all duration-300`}>
                  {project.icon}
                </div>
                <div className="flex gap-3">
                  {project.github && (
                    <motion.a 
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      href={project.github} target="_blank" rel="noreferrer" className="p-2.5 rounded-full bg-background border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                      <Github size={20} />
                    </motion.a>
                  )}
                  {project.demo && (
                    <motion.a 
                      whileHover={{ scale: 1.1 }}
                      href={project.demo} className="p-2.5 rounded-full bg-background border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                      <ExternalLink size={20} />
                    </motion.a>
                  )}
                </div>
              </div>

              {/* Content area */}
              <div className="p-8 flex-1 flex flex-col">
                <div className="mb-2 text-sm font-medium text-primary">{project.duration}</div>
                <h3 className="text-2xl font-bold text-foreground font-display mb-4 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {project.description}
                </p>
                
                <ul className="space-y-2 mb-8 flex-1">
                  {project.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start text-sm text-muted-foreground/90">
                      <span className="mr-2 text-primary mt-1 opacity-60 text-[10px]">■</span>
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-border/50 relative z-10">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1.5 text-xs font-semibold rounded-md ${project.techClass}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
