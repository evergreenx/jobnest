import Image from "next/image";
import { Inter } from "next/font/google";
import { motion } from "framer-motion";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const variants1 = {
    hidden: { filter: "blur(10px)", opacity: 0 },
    visible: { filter: "blur(0px)", opacity: 1 },
  };
  return (
    <main className={`bg-[#1F1F1F] h-screen ${inter.className} flex items-center flex-col  `}>
      <motion.h1
        initial="hidden"
        animate="visible"
        transition={{ duration: 1 }}
        variants={variants1}
        className="text-[48px] py-20 tracking-tighter text-center text-white w-80 flex justify-center mx-auto"
      >
        Your search for the next dream job is over 🚀
      </motion.h1>

      <button
        className="bg-[#5424FD99] 
        text-white
        group


  
      hover:filter hover:blur-0
      rounded-[32px] p-[16px] w-[340px] h-[56px] text-[16px] font-bold flex justify-center "
      >
        Start Searching

        <svg width="25" height="25" viewBox="0 0 25 25"

          className="ml-2 group-hover:transform group-hover:translate-x-2 transition-all duration-500 ease-in-out"
          fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.93 6.64265L21 12.7126L14.93 18.7826" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M4 12.7126H20.83" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </svg>

      </button>
    </main>
  );
}
