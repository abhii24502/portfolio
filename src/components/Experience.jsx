import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolio";
import { Calendar, GraduationCap, Briefcase } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-32 bg-[#050508] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-white mb-6"
          >
            My <span className="text-blue-400">Journey</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-lg"
          >
            A timeline of my professional experience and academic background.
          </motion.p>
        </div>

        <div className="space-y-16">
          {/* Work Experience */}
          <div className="space-y-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-xl bg-blue-400/10 flex items-center justify-center text-blue-400">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold text-white">Work Experience</h3>
            </div>
            
            {portfolioData.experience.map((exp, idx) => (
              <motion.div
                key={exp.company + exp.role}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative pl-10 md:pl-0"
              >
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-400 to-purple-500 hidden md:block" />
                <div className={`flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="flex-1 w-full">
                    <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 transition-all group">
                      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                        <div>
                          <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">{exp.role}</h3>
                          <p className="text-blue-400 font-semibold">{exp.company}</p>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-slate-400 text-sm">
                          <Calendar className="w-4 h-4" />
                          {exp.duration}
                        </div>
                      </div>
                      <ul className="space-y-3">
                        {exp.points.map((point, i) => (
                          <li key={i} className="flex gap-3 text-slate-400 text-sm leading-relaxed">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="absolute left-0 md:relative md:left-auto w-8 h-8 rounded-full bg-[#050508] border-4 border-blue-400 z-10 hidden md:flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-blue-400 animate-ping" />
                  </div>
                  <div className="flex-1 hidden md:block" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Education */}
          <div className="space-y-12 pt-8">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold text-white">Education</h3>
            </div>

            {portfolioData.education.map((edu, idx) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative pl-10 md:pl-0"
              >
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500 to-blue-400 hidden md:block" />
                <div className={`flex flex-col md:flex-row items-center gap-8 ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="flex-1 w-full">
                    <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 transition-all group">
                      <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">{edu.degree}</h3>
                          <p className="text-purple-400 font-semibold">{edu.institution}</p>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-slate-400 text-sm">
                          <Calendar className="w-4 h-4" />
                          {edu.year}
                        </div>
                      </div>
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-bold">
                        {edu.score}
                      </div>
                    </div>
                  </div>
                  <div className="absolute left-0 md:relative md:left-auto w-8 h-8 rounded-full bg-[#050508] border-4 border-purple-400 z-10 hidden md:flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-purple-400 animate-ping" />
                  </div>
                  <div className="flex-1 hidden md:block" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
