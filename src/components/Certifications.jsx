import { motion } from "framer-motion";
export default function Certification(){
      const certifications = [
    {
      title: "Intro to Linux Foundation",
      organization: "The Linux Foundation"
    },
    {
      title: "Network Foundation",
      organization: "Huawei Talent Academy"
    },
    {
      title: "Basics of Cloud Computing",
      organization: "Udemy"
    },
    {
      title: "STI Certification (Java)",
      organization: "STI College"
    }
  ];

  return (
  <motion.div
      className="flex-[1] p-8 bg-white border border-gray-300 rounded-3xl shadow-sm"
      whileHover={{ scale: 1.03, boxShadow: "0px 8px 24px rgba(0,0,0,0.15)" }}
      whileTap={{ scale: 0.97 }}
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ type: "spring", stiffness: 200, damping: 12, duration: 1, ease: "easeOut"  }}
    >
      <h2 className="text-2xl font-bold mb-6">Certifications</h2>

      <div className="space-y-4"
        
      
      >
        {certifications.map((cert, index) => (
          <motion.button
            key={index}
            className="w-full text-left p-4 border border-gray-300  rounded-2xl hover:bg-gray-100 cursor-pointer transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
          >
            <h3 className="font-bold text-lg mb-1">{cert.title}</h3>
            <p className="text-gray-700 text-sm">{cert.organization}</p>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}