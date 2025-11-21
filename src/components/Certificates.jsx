import { motion } from "framer-motion";
export default function Certificates(){
     const cert = [
  {
      title: "Introduction to Linux Foundation(LFS101)",
      organization: "The Linux Foundation",
      year: 2025,
      href: "https://ti-user-certificates.s3.amazonaws.com/e0df7fbf-a057-42af-8a1f-590912be5460/de31c7ab-b31c-463c-9941-60dc51689da3-mark-james-dinong-cd8acfb3-6ee8-4564-9567-71297ff04a4a-certificate.pdf"
    },
    {
      title: "Database Foundation",
      organization: "Oracle Foundations",
      year: 2022,
      href: "https://drive.google.com/file/d/1Eoxdvtvv8Bsi53ha2yO_JWrBHMK-1OD6/view?usp=sharing"
    },
    {
      title: "Basics of Cloud Computing",
      organization: "Udemy",
      year: 2025,
      href: "https://www.udemy.com/certificate/UC-7774aa29-6ecc-48bd-835d-cfacb18cf408/"
    },
    {
      title: "Network Foundations",
      organization: "Huawei Talent Online",
      year: 2022,
      href: "https://drive.google.com/file/d/10omeDWzvEx-9iruGHbwp5B39Uiv528PP/view?usp=sharing"
    },
    {
      title: "Legacy Responsive Web Design V8",
      organization: "freecodecamp",
      year: 2022,
      href: "https://www.freecodecamp.org/certification/fcca280e0e9-d56f-41f2-91c9-35516bdec76f/responsive-web-design"
    },  
  ];
    return(
       <div className="flex flex-row gap-3 mt-5"
        
       >
  {cert.map((item, index) => (
    <motion.a
      key={index}
      href={item.href}
      target="_blank"
      className="border-1 border-gray-300 rounded-xl p-6 w-64 h-40 flex flex-col justify-between cursor-pointer"
              whileTap={{ scale: 0.97 }}
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ type: "spring", stiffness: 200, damping: 12, duration: 1 }}
      whileHover={{ scale: 1.03, boxShadow: "0px 8px 24px rgba(0,0,0,0.15)" }}
      
    >
      <div>
           <h3 className="text-200 text-left font-semibold text-gray-900">
        {item.title}
      </h3>
      <p className="text-[13px] text-left">({item.organization})</p>
      </div>
   
      <p className="text-1xl text-left font-bold text-gray-600">
        {item.year}
      </p>
    </motion.a>
  ))}
</div>

    )

}