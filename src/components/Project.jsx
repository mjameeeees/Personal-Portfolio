import { motion } from "framer-motion";

export default function Project(){
         const projects = [
    {
      title: "San Miguel Elementary School eLMS",
      description: "Lightweight e-LMS app for schools that lets students and teachers browse, create, and share stories within the platform. It supports learning, creativity, and collaboration in one place.",
      to: ""
    },
    {
      title: "Prophecy",
      description: "Taekwondo Tournament Manager app that helps organizers handle team registration, match scheduling, scoring, and results tracking. It simplifies event management and ensures smooth, organized competitions.",
      to: ""
    },
  ];
    return(
       <div className="flex flex-row gap-3 mt-5"
        
       >
  {projects.map((item, index) => (
    <motion.div
      key={index}
      className="w-full border-1 border-gray-300 rounded-xl p-6 w-64 h-40 flex flex-col gap-3 text-justify cursor-pointer"
              whileTap={{ scale: 0.97 }}
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ type: "spring", stiffness: 200, damping: 12, duration: 1 }}
      whileHover={{ scale: 1.03, boxShadow: "0px 8px 24px rgba(0,0,0,0.15)" }}
    >
      <h3 className="text-lg font-semibold text-gray-900">
        {item.title}
      </h3>
      <p className="text-sm font-light ">
        {item.description}
      </p>
    </motion.div>
  ))}
</div>

    )

}