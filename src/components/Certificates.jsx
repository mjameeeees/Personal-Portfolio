import { motion } from "framer-motion";
export default function Certificates(){
     const cert = [
    {
      name: "Intro to Linux",
      year: 2025,
      href: ""
    },
    {
      name: "Basic of Cloud Computing",
      year: 2025,
      href: ""
    },
  ];
    return(
       <div className="flex flex-row gap-3 mt-5"
        
       >
  {cert.map((item, index) => (
    <motion.div
      key={index}
      className="border-1 border-gray-300 rounded-xl p-6 w-64 h-40 flex flex-col justify-between cursor-pointer"
              whileTap={{ scale: 0.97 }}
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ type: "spring", stiffness: 200, damping: 12, duration: 1 }}
      whileHover={{ scale: 1.03, boxShadow: "0px 8px 24px rgba(0,0,0,0.15)" }}
    >
      <h3 className="text-lg font-semibold text-gray-900">
        {item.name}
      </h3>
      <p className="text-1xl font-bold text-gray-600">
        {item.year}
      </p>
    </motion.div>
  ))}
</div>

    )

}