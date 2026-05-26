import { motion } from "framer-motion";
import { Download, Mail, Linkedin, Github, Phone, ExternalLink } from "lucide-react";

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background Graphic */}
      <div className="absolute inset-0 z-0 opacity-40">
        <img
          src={`${import.meta.env.BASE_URL}images/hero-bg.png`}
          alt="Abstract Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex-1 text-center lg:text-left"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Available for Internships & Roles
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-extrabold text-foreground tracking-tight leading-[1.1] mb-6"
            >
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-300 to-blue-400">Rahul</span>
            </motion.h1>

            <motion.h2
              variants={itemVariants}
              className="text-xl sm:text-2xl md:text-3xl font-medium text-muted-foreground mb-6"
            >
              Computer Science Engineering Student <br className="hidden md:block" />
              <span className="text-foreground">Data Analyst | Developer</span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-muted-foreground/80 max-w-2xl mx-auto lg:mx-0 mb-10"
            >
              Passionate about data, code, and problem-solving. I build efficient systems and draw actionable insights from complex datasets. Let's create something extraordinary together.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10">
              <motion.a
                whileTap={{ scale: 0.96 }}
                href="#contact"
                className="px-8 py-3.5 rounded-full font-semibold bg-primary text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
              >
                <Mail size={18} />
                Contact Me
              </motion.a>
              <motion.a
                whileTap={{ scale: 0.96 }}
                href="https://drive.google.com/file/d/1DkHBg-_kpt8KWlxDXsE7bxVFLtohJ_YI/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-full font-semibold bg-card text-foreground border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 flex items-center gap-2"
              >
                <ExternalLink size={18} />
                View CV
              </motion.a>
              <motion.a
                whileTap={{ scale: 0.96 }}
                href="https://drive.google.com/file/d/1DkHBg-_kpt8KWlxDXsE7bxVFLtohJ_YI/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-full font-semibold bg-card text-foreground border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 flex items-center gap-2"
              >
                <Download size={18} />
                Download CV
              </motion.a>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center justify-center lg:justify-start gap-5">
              <SocialLink href="https://github.com/Rahul93060" icon={<Github size={20} />} label="GitHub" />
              <SocialLink href="https://www.linkedin.com/in/rahul-parjapat-a4112628b" icon={<Linkedin size={20} />} label="LinkedIn" />
              <SocialLink href="mailto:itzzrahul93060@gmail.com" icon={<Mail size={20} />} label="Email" />
              <SocialLink href="tel:+919306055070" icon={<Phone size={20} />} label="Phone" />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 100 }}
            whileHover={{ scale: 1.03 }}
            className="flex-1 w-full max-w-md lg:max-w-lg relative"
          >
            <div className="relative aspect-square flex items-center justify-center">
              {/* Floating blobs behind */}
              <div className="absolute w-32 h-32 bg-teal-400/30 rounded-full blur-xl top-0 right-0" style={{ animation: 'float-blob 6s ease-in-out infinite' }} />
              <div className="absolute w-24 h-24 bg-purple-500/30 rounded-full blur-xl bottom-0 left-0" style={{ animation: 'float-blob 8s ease-in-out infinite 2s' }} />
              <div className="absolute w-20 h-20 bg-blue-400/25 rounded-full blur-lg top-1/2 left-1/4" style={{ animation: 'float-blob 7s ease-in-out infinite 4s' }} />

              {/* Rotating gradient ring */}
              <div 
                className="relative z-10 w-[80%] h-[80%] p-1 rounded-full flex items-center justify-center"
                style={{ 
                  background: "conic-gradient(from 0deg, #14b8a6, #8b5cf6, #3b82f6, #14b8a6)",
                  animation: "spin-gradient 4s linear infinite"
                }}
              >
                {/* Gap between ring and photo */}
                <div className="w-full h-full p-1 bg-background rounded-full flex items-center justify-center">
                  <img
                    src={`${import.meta.env.BASE_URL}images/rahul-nobg.png`}
                    alt="Rahul"
                    className="w-full h-full rounded-full object-cover object-top transition-all duration-700 bg-primary/10"
                    style={{ 
                      objectPosition: "50% 0%",
                      animation: "pulse-glow 3s ease-in-out infinite"
                    }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <motion.a
      whileHover={{ scale: 1.2, rotate: 8 }}
      whileTap={{ scale: 0.9 }}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="p-3 rounded-full bg-card text-muted-foreground border border-border hover:border-primary hover:text-primary transition-all duration-300 shadow-sm"
    >
      {icon}
    </motion.a>
  );
}
