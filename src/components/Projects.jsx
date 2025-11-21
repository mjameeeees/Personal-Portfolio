import { motion } from "framer-motion";
export default function Projects() {
  const projects = [
    {
      title: "STI Record Application System",
      description: "Web Application for Record Application in STI College Tagaytay"
    },
    {
      title: "San Miguel Elementary School eLMS",
      description: "E-Learning System of SMES"
    },
    {
      title: "Prophecy",
      description: "Taekwondo Tournament Manager for TTMA Tournaments"
    },
    {
      title: "Scan IT",
      description: "Mobile POS in a medium size sari sari store (Capstone Project)"
    }
  ];

  return (
<motion.div
  className="min-w-[300px] flex-1 mt-3 p-8 bg-white border border-gray-300 rounded-3xl shadow-sm"
  whileTap={{ scale: 0.97 }}
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ type: "spring", stiffness: 200, damping: 12, duration: 1, ease: "easeOut"  }}
>
  <div className="flex flex-row justify-between">
      <div className="flex flex-row gap-3">
        <img className="w-7 h-7" src="./icons/projects.png" alt="" />
      <h2 className="text-2xl font-bold mb-6">Recent Projects</h2>
      </div>

      <div>
          <a className="text-sm" href="">View All &gt;</a>
      </div>
  </div>
 
  <div className="space-y-4">
    {projects.map((project, index) => (
      <motion.button
        key={index}
        type="button"
        className="w-full text-left p-5 border border-gray-300 rounded-2xl hover:bg-gray-100 cursor-pointer transition-all"
  whileHover={{ scale: 1.03, boxShadow: "0px 8px 24px rgba(0,0,0,0.15)" }}
        whileTap={{ scale: 0.97 }}
      >
        <h3 className="font-bold text-lg mb-1">{project.title}</h3>
        <p className="text-gray-600 text-sm">{project.description}</p>
      </motion.button>
    ))}
  </div>
</motion.div>
  );
}