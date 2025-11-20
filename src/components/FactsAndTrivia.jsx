import { motion } from "framer-motion";
export default function FactsAndTrivia() {
  return (
    <motion.div className="max-w-full p-8 bg-white border border-gray-300 rounded-3xl"
      whileHover={{ scale: 1.03, boxShadow: "0px 8px 24px rgba(0,0,0,0.15)" }}
      whileTap={{ scale: 0.97 }}
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ type: "spring", stiffness: 200, damping: 12, duration: 1, ease: "easeOut"  }}
    >
      <div className="w-full max-w-full ">
        <h2 className="text-2xl font-bold mb-2">Facts and Trivia</h2>
        
        <div className="mb-6">
          <span className="inline-block px-4 py-2 bg-gray-200 text-gray-700 text-sm font-medium rounded-full">
            Software Development
          </span>
        </div>
        
        <p className="text-gray-700 text-base leading-relaxed">
          "Java was originally called Oak — it was renamed "Java" after Java coffee, inspired by the developers' love for coffee."
        </p>
      </div>
    </motion.div>
  );
}