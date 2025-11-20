import { motion } from "framer-motion";
export default function GetInTouch() {
  return (
    <motion.div className="flex-[3] flex items-center">
    <div className=" border border-gray-300 rounded-3xl p-8 bg-white">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Get in touch</h2>
      <p className="text-gray-700 text-base leading-relaxed">
        I'm always happy to connect with new people—feel free to send me a message.
      </p>
        <motion.button className="border-1 flex flex-row  items-center gap-4 border-gray-300 rounded-2xl pt-4 pb-4 pl-6 pr-6 mt-3 cursor-pointer"
            whileHover={{ scale: 1.03, boxShadow: "0px 8px 24px rgba(0,0,0,0.15)", backgroundColor: '#d9d9d9' }}
            whileTap={{ scale: 0.97 }}
        >
            Send Message
              <img className="h-4 w-4 " src="./public/icons/send.png" alt="" />
        </motion.button>
    </div>
  </motion.div>
  );
}