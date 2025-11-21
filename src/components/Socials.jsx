import { motion } from "framer-motion";
export default function Socials() {
  const socialLinks = [
    { name: 'LinkedIn', url: '#', src: "./icons/linkedin.png" },
    { name: 'Github', url: '#', src: "./icons/github.png" },
    { name: 'Upwork', url: '#', src: "./icons/upwork.png" }
  ];

  return (
   <motion.div className="flex-[2] flex items-center border border-gray-100 rounded-3xl mt-3"
      whileTap={{ scale: 0.97 }}
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ type: "spring", stiffness: 200, damping: 12, duration: 1, ease: "easeOut"  }}
   >
    <div className="w-full max-w-xs  border border-gray-300 rounded-3xl p-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Socials</h2>
      
      <div className="space-y-4">
        {socialLinks.map((link, index) => (
          <motion.a
            key={index}
            href={link.url}
            
            className="block w-full px-6 py-3 border-1 border-gray-300 rounded-xl text-center text-gray-700 font-medium hover:bg-gray-100 transition-colors"
    whileHover={{ scale: 1.03, boxShadow: "0px 8px 24px rgba(0,0,0,0.15)" }}
            whileTap={{ scale: 0.97 }}
          >
            <div className="flex flex-row gap-6 items-center">
           <img src={link.src} className="w-7 h-7" alt="" />
            {link.name}
            </div>
           
          </motion.a>
        ))}
      </div>
    </div>
  </motion.div>
  );
}
