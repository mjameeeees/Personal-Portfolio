import { motion } from "framer-motion";
export default function TechStack(){

    const techStack = {
    "Front End": [
      "React JS",
      "Android Studio",
      "React Native",
      "Tailwind",
      "Typescript",
      "Vite",
      "Javascript"
    ],
    "Back End": [
      "Firebase",
      "MySQL",
      "MongoDB",
      "Java",
      "Spring Boot",
      "Python",
      "Flask"
    ],
    "System Administrator": [
      "Linux",
      "Windows Server",
      "Microsoft Admin Center",
      "Microsoft Entra"
    ]
  };

  return (
    <motion.div className="max-w-full p-8 bg-white border border-gray-300 rounded-3xl"
      whileHover={{ scale: 1.03, boxShadow: "0px 8px 24px rgba(0,0,0,0.15)" }}
    whileTap={{ scale: 0.97 }}
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ type: "spring", stiffness: 200, damping: 12, duration: 1, ease: "easeOut"  }}
    >
      <h2 className="text-2xl font-bold mb-6">Tech Stack</h2>
      
      <div className="space-y-6">
        {Object.entries(techStack).map(([category, technologies]) => (
          <div key={category}>
            <h3 className="text-xl font-bold mb-3">{category}</h3>
            <div className="flex flex-wrap gap-3">
              {technologies.map((tech, index) => (
                <motion.span
                  key={index}
                  className="px-6 py-2 border border-gray-800 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors cursor-default"
                      whileHover={{ scale: 1.03, boxShadow: "0px 8px 24px rgba(0,0,0,0.15)", backgroundColor: '#d9d9d9' }}
                      whileTap={{ scale: 0.97 }}
                      transition={{ type: "spring", stiffness: 200, damping: 12 }}>
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );

}