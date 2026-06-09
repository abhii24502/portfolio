import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolio";
import { Code2, Layout, Database, Wrench } from "lucide-react";

const categoryIcons = {
  Frontend: <Layout className="w-5 h-5" />,
  Backend: <Code2 className="w-5 h-5" />,
  Database: <Database className="w-5 h-5" />,
  Tools: <Wrench className="w-5 h-5" />,
};

export default function Skills() {
  const categories = [...new Set(portfolioData.skills.map((s) => s.category))];

  return (
    <section id="skills" className="py-32 bg-[#050508] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-white mb-6"
          >
            Technical <span className="text-blue-400">Expertise</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 max-w-2xl mx-auto text-lg"
          >
            A comprehensive overview of my technical stack and the tools I use to bring digital products to life.
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto">
          {categories.map((category, idx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-blue-400/20 to-purple-500/20 flex items-center justify-center text-blue-400">
                  {categoryIcons[category] || <Code2 className="w-5 h-5" />}
                </div>
                <h3 className="text-2xl font-bold text-white">{category}</h3>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {portfolioData.skills
                  .filter((s) => s.category === category)
                  .map((skill) => (
                    <div key={skill.name} className="flex items-center gap-2 text-slate-300">
                      <span className="w-2 h-2 rounded-full bg-blue-400" />
                      <span className="text-sm font-semibold">{skill.name}</span>
                    </div>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
