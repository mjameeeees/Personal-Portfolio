import { motion } from "framer-motion";
export default function Socials() {
  const socialLinks = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/mark-james-dinong-48a11128b/', src: "./icons/linkedin.png" },
    { name: 'Github', url: 'https://github.com/mjameeeees', src: "./icons/github.png" },
    { name: 'Upwork', url: 'https://www.upwork.com/freelancers/~01854892e5ce67fd34', src: "./icons/upwork.png" }
  ];

  return (
  <motion.div className="min-w-[300px] flex-2 items-center border-gray-300 rounded-3xl"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ type: "spring", stiffness: 200, damping: 12, duration: 1, ease: "easeOut"  }}
   >
    <div className="w-full flex-1  border border-gray-300 rounded-3xl p-8">
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
