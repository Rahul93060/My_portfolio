import { Mail, Linkedin, Github, Phone, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="bg-card border-t border-border/50 pt-16 pb-8 relative">
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-teal-500 via-purple-500 to-blue-500" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-2">
            <a href="#" className="text-2xl font-display font-bold text-foreground mb-4 inline-block">
              Rahul Parjapat<span className="text-primary">.</span>
            </a>
            <p className="text-muted-foreground max-w-sm mb-6">
              Computer Science Engineering student passionate about data analysis and software development. Always eager to learn and build impactful solutions.
            </p>
            <div className="flex items-center gap-4">
              <SocialIcon href="https://github.com/Rahul93060" icon={<Github size={18} />} />
              <SocialIcon href="https://linkedin.com/in/rahul-parjapat" icon={<Linkedin size={18} />} />
            </div>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><FooterLink href="#about">About Me</FooterLink></li>
              <li><FooterLink href="#skills">Skills</FooterLink></li>
              <li><FooterLink href="#experience">Experience</FooterLink></li>
              <li><FooterLink href="#projects">Projects</FooterLink></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-4">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a href="mailto:itzzrahul93060@gmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <Mail size={16} />
                  <span className="text-sm">itzzrahul93060@gmail.com</span>
                </a>
              </li>
              <li>
                <a href="tel:+919306055070" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <Phone size={16} />
                  <span className="text-sm">+91 93060 55070</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Rahul Parjapat. All rights reserved.</p>
          <p className="flex items-center gap-1 mt-2 md:mt-0">
            Designed & Built with <Heart size={14} className="text-red-500 fill-red-500 mx-1" />
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noreferrer"
      className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:bg-primary/10 transition-all"
    >
      {icon}
    </a>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a 
      href={href} 
      className="text-muted-foreground hover:text-primary transition-colors text-sm"
    >
      {children}
    </a>
  );
}
