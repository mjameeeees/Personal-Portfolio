import { motion } from "framer-motion";


export default function About () {
return (
    <motion.div className="max-w-3xl p-8 bg-white border border-gray-300 rounded-3xl"
    whileHover={{ scale: 1.03, boxShadow: "0px 8px 24px rgba(0,0,0,0.15)" }}
    whileTap={{ scale: 0.97 }}
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ type: "spring", stiffness: 200, damping: 12, duration: 1, ease: "easeOut"  }}
    >
      <h2 className="text-2xl font-bold mb-6">About Me</h2>
      <div className="space-y-4 text-gray-800 leading-relaxed">
        <p>
          Hi! I'm a software developer who loves building things with Java, JavaScript, 
          and Python. I enjoy turning ideas into working applications and solving 
          problems through clean, simple code.
        </p>
        <p>
          I also work as a System Administrator, so I'm usually the person making sure 
          servers run smoothly and everything stays secure and fast.
        </p>
        <p>
          When I'm not coding or fixing systems, I'm probably exploring new tech, 
          learning something new, or working on personal projects. I like creating, 
          experimenting, and improving a little bit every day
        </p>
      </div>
    </motion.div>
  );

}