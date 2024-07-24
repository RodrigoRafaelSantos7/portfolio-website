"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full flex items-center justify-center relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 2, delay: 0.4, ease: "easeIn" },
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 2.4, delay: 0.4, ease: "easeInOut" },
          }}
          className="relative w-[350px] h-[350px] lg:w-[350px] lg:h-[350px] flex items-center justify-center"
        >
          <Image
            src="/assets/profile.png"
            alt=""
            priority
            quality={100}
            width={270}
            height={270}
            className="object-contain"
          />
          <motion.svg
            className="absolute top-0 left-0 w-full h-full"
            fill="transparent"
            viewBox="0 0 352 352"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.circle
              cx="176"
              cy="176"
              r="168"
              stroke="#1689C8"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ strokeDasharray: "24 10 0 0" }}
              animate={{
                strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                rotate: [120, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </motion.svg>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Photo;
