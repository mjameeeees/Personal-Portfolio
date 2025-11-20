import { motion } from "framer-motion";
export default function Contacts() {
  return (
  <motion.div className="flex-[3] flex items-center border border-gray-300 rounded-3xl"
        whileHover={{ scale: 1.03, boxShadow: "0px 8px 24px rgba(0,0,0,0.15)" }}
      whileTap={{ scale: 0.97 }}
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ type: "spring", stiffness: 200, damping: 12, duration: 1, ease: "easeOut"  }}
  >
    <div className="w-full max-w-md   p-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Contacts</h2>
      
      <div className="space-y-4">
        <div className="border-1 border-gray-300 rounded-2xl p-4">
          <p className="text-xs text-gray-600 font-medium mb-1">Email</p>
          <p className="text-gray-700 font-medium break-all">devdinongmarkjames@gmail.com</p>
        </div>
        <div className="border-1 border-gray-300 rounded-2xl p-4">
          <p className="text-xs text-gray-600 font-medium mb-1">Contact Number:</p>
          <p className="text-gray-700 font-medium">09958493756</p>
        </div>
      </div>
    </div>
  </motion.div>
  );
}