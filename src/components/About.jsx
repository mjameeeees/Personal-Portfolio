import { motion } from "framer-motion";


export default function About () {
return (
 <motion.div 
  className="min-w-[300px] flex-2 p-8 bg-white border border-gray-300 rounded-3xl"
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ type: "spring", stiffness: 200, damping: 12, duration: 1 }}
>
  <div className="flex items-center gap-3 mb-6">
    <img className="w-7 h-7" src="/icons/aboutme.png" alt="about icon" />
    <h2 className="text-2xl font-bold">About Me</h2>
  </div>

  <div className="space-y-4 text-gray-800 leading-relaxed text-[15px]">
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
      experimenting, and improving a little bit every day.
    </p>
  </div>
</motion.div>

  );

}