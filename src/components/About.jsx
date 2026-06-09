import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolio";
import { User, Code, GraduationCap, Heart } from "lucide-react";

export default function About() {
  const stats = [
    { label: "Experience", value: "0-1 Year", icon: <Code className="w-5 h-5" /> },
    { label: "Education", value: "MCA Pursuing", icon: <GraduationCap className="w-5 h-5" /> },
    { label: "Projects", value: "2 Projects", icon: <User className="w-5 h-5" /> },
    { label: "Passion", value: "Software Development", icon: <Heart className="w-5 h-5" /> },
  ];

  return (
    <section id="about" className="py-32 bg-[#050508] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl" />
            <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/10 bg-white/5 p-8 backdrop-blur-3xl flex items-center justify-center">
               <div className="text-center">
                  <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center font-black text-white text-4xl shadow-2xl shadow-blue-500/20 mx-auto mb-6">
                    {portfolioData.name.charAt(0)}
                  </div>
                  <p className="text-5xl font-black text-white mb-2">{portfolioData.name.split(' ')[0]}</p>
                  <p className="text-blue-400 font-bold tracking-[0.2em] uppercase text-sm">Full Stack Developer</p>
                  <div className="mt-8 flex justify-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                    <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse delay-75" />
                    <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse delay-150" />
                  </div>
               </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-8">
              About <span className="text-blue-400">Me</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-12">
              {portfolioData.about}
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all group">
                  <div className="w-10 h-10 rounded-xl bg-blue-400/10 flex items-center justify-center text-blue-400 mb-4 group-hover:scale-110 transition-transform">
                    {stat.icon}
                  </div>
                  <p className="text-white font-bold text-lg">{stat.value}</p>
                  <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
