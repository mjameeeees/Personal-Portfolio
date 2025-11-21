import { motion } from "framer-motion";
import { Link } from "react-router-dom";
export default function Certification(){
      const certifications = [
    {
      title: "Introduction to Linux Foundation(LFS101)",
      organization: "The Linux Foundation",
      href: "https://ti-user-certificates.s3.amazonaws.com/e0df7fbf-a057-42af-8a1f-590912be5460/de31c7ab-b31c-463c-9941-60dc51689da3-mark-james-dinong-cd8acfb3-6ee8-4564-9567-71297ff04a4a-certificate.pdf"
    },
    {
      title: "Network Foundation",
      organization: "Huawei Talent Academy",
      href: "https://drive.google.com/file/d/10omeDWzvEx-9iruGHbwp5B39Uiv528PP/view?usp=sharing"
    },
    {
      title: "Basics of Cloud Computing",
      organization: "Udemy",
      href: "https://www.udemy.com/certificate/UC-7774aa29-6ecc-48bd-835d-cfacb18cf408/"
    },
    {
      title: "STI Certification (Java)",
      organization: "STI College",
      href: ""
    }
  ];

  return (
  <motion.div
      className="min-w-[300px] mt-3 flex-1 p-8 bg-white border border-gray-300 rounded-3xl shadow-sm"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ type: "spring", stiffness: 200, damping: 12, duration: 1, ease: "easeOut"  }}
    >
      <div className="flex flex-row justify-between">
  <div className="flex flex-row gap-3">
        <img className="w-7 h-7" src="./icons/certificate.png" alt="" />
      <h2 className="text-2xl font-bold mb-6">Certifications</h2>
      </div>

      <div>
          <Link to="/certifications" className="text-sm">View All &gt; </Link>
      </div>
      </div>
 
   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4">
  {certifications.map((cert, index) => (
    <motion.a
      key={index}
      href={cert.href}
      className="p-4 border border-gray-300 rounded-2xl hover:bg-gray-100 cursor-pointer transition-colors"
      whileHover={{ scale: 1.03, boxShadow: "0px 8px 24px rgba(0,0,0,0.15)" }}
      whileTap={{ scale: 0.97 }}
      target="_blank"
      rel="noopener noreferrer"
    >
      <h3 className="font-bold text-lg mb-1">{cert.title}</h3>
      <p className="text-gray-700 text-sm">{cert.organization}</p>
    </motion.a>
  ))}
</div>
    </motion.div>
  );
}