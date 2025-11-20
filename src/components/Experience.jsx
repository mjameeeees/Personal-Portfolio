import { motion } from "framer-motion";
export default function Experience () {
const experiences = [
    {
      title: "IT Instructor / Comlab Facilitator",
      company: "STI College (2025-2026)"
    },
    {
      title: "General Administrator",
      company: "Upwork (2023-2024)"
    },
    {
      title: "BS Information Technology",
      company: "STI College (2024)"
    },
    {
      title: "Hello World",
      company: "First Line of Code(2022)"
    }
  ];

  return (
    <motion.div className="max-w-4xl p-8 bg-white border border-gray-300 rounded-3xl"
    whileHover={{ scale: 1.03, boxShadow: "0px 8px 24px rgba(0,0,0,0.15)" }}
    whileTap={{ scale: 0.97 }}
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ type: "spring", stiffness: 200, damping: 12, duration: 1, ease: "easeOut"  }}
    >
      <h2 className="text-2xl font-bold mb-6">Experience</h2>
      <ul className="space-y-0">
        {experiences.map((exp, index) => (
          <li key={index} className="flex gap-3 relative">
            <div className="flex flex-col items-center">
              {index === 0 ? (
                <div className="w-3 h-3 bg-black rounded-full z-10"></div>
              ) : (
                <div className="w-3 h-3 border-2 border-emerald-300 bg-white rounded-full  z-10"></div>
              )}
              {index < experiences.length - 1 && (
                <div className="w-0.5 h-full bg-emerald-300"></div>
              )}
            </div>
            <div className=" pb-6">
              <h3 className="font-bold text-lg">{exp.title}</h3>
              <p className="text-gray-600 text-sm">{exp.company}</p>
            </div>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}