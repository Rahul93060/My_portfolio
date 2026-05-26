import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { Send, Mail, Phone, Linkedin, CheckCircle } from "lucide-react";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Message from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`);
    window.open(`mailto:itzzrahul93060@gmail.com?subject=${subject}&body=${body}`, "_blank");
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: "", email: "", message: "" });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 relative bg-card/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Get In Touch"
          subtitle="Have a question, opportunity, or just want to say hi? Send me a message!"
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            <p className="text-muted-foreground leading-relaxed">
              I'm currently open to internship opportunities and collaborations. Whether you have a project in mind or just want to connect, my inbox is always open!
            </p>

            <div className="space-y-4">
              <a href="mailto:itzzrahul93060@gmail.com" className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:border-primary/40 transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-teal-500/10 flex items-center justify-center text-teal-500 group-hover:scale-110 transition-transform">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-medium">Email</p>
                  <p className="text-sm font-semibold text-foreground">itzzrahul93060@gmail.com</p>
                </div>
              </a>

              <a href="tel:+919306055070" className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:border-primary/40 transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-500 group-hover:scale-110 transition-transform">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-medium">Phone</p>
                  <p className="text-sm font-semibold text-foreground">+91 93060 55070</p>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/rahul-parjapat-a4112628b" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:border-primary/40 transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform">
                  <Linkedin size={18} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-medium">LinkedIn</p>
                  <p className="text-sm font-semibold text-foreground">rahul-parjapat</p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Message Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center gap-4 py-16 bg-card rounded-2xl border border-primary/30">
                <CheckCircle size={56} className="text-primary" />
                <h3 className="text-2xl font-bold text-foreground">Message Sent!</h3>
                <p className="text-muted-foreground">Your email client should have opened. I'll get back to you soon!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-card rounded-2xl border border-border p-8 space-y-6 shadow-lg">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="e.g. Arjun Sharma"
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Your Email</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Hi Rahul, I'd like to discuss..."
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl font-semibold bg-primary text-primary-foreground flex items-center justify-center gap-2 hover:opacity-90 hover:-translate-y-0.5 transition-all duration-300 shadow-lg shadow-primary/25"
                >
                  <Send size={18} />
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
