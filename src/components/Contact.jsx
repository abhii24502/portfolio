import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolio";
import { Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-[#050508] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-8">
            Let's <span className="text-blue-400">Connect</span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed mb-16 max-w-2xl mx-auto">
            Have a project in mind or just want to say hi? Feel free to reach out. I'm always open to discussing new opportunities and creative ideas.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-16 max-w-3xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex items-center gap-5 p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl bg-blue-400/10 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                <Mail className="w-7 h-7" />
              </div>
              <div className="text-left">
                <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">Email Me</p>
                <a href={`mailto:${portfolioData.email}`} className="text-white font-bold hover:text-blue-400 transition-colors break-all">
                  {portfolioData.email}
                </a>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-5 p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                <MapPin className="w-7 h-7" />
              </div>
              <div className="text-left">
                <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">Location</p>
                <p className="text-white font-bold">{portfolioData.location}</p>
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex justify-center gap-4"
          >
            {[
              { 
                icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/></svg>, 
                href: portfolioData.social.github,
                label: 'GitHub',
                hoverClass: 'hover:bg-white/10'
              },
              { 
                icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>, 
                href: portfolioData.social.linkedin,
                label: 'LinkedIn',
                hoverClass: 'hover:bg-[#0A66C2] hover:border-[#0A66C2]'
              },
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className={`group w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white ${social.hoverClass} transition-all hover:scale-110`}
              >
                {social.icon}
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
