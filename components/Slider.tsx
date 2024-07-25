import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import Link from "next/link";

import {
  RiTailwindCssLine,
  RiJavaLine,
  RiJavascriptLine,
  RiGithubLine,
  RiNextjsFill,
  RiNodejsLine,
  RiReactjsLine,
} from "react-icons/ri";

import { FaGitAlt, FaLinux } from "react-icons/fa";

import {
  SiVite,
  SiTypescript,
  SiOcaml,
  SiPython,
  SiMacos,
} from "react-icons/si";
import { LinkPreview } from "./ui/link-preview";

import { VscVscodeInsiders } from "react-icons/vsc";
import { motion } from "framer-motion";

const socials = [
  { icon: <RiTailwindCssLine />, path: "https://tailwindcss.com/" },
  { icon: <RiJavaLine />, path: "https://www.java.com/en/java" },
  { icon: <RiJavascriptLine />, path: "https://www.javascript.com/" },
  { icon: <RiGithubLine />, path: "https://github.com/next" },
  { icon: <RiNextjsFill />, path: "https://nextjs.org/" },
  { icon: <RiNodejsLine />, path: "https://nodejs.org/en" },
  { icon: <RiReactjsLine />, path: "https://react.dev/" },
  { icon: <SiVite />, path: "https://vitejs.dev/" },
  { icon: <SiTypescript />, path: "https://www.typescriptlang.org/" },
  { icon: <SiOcaml />, path: "https://ocaml.org/" },
  { icon: <SiPython />, path: "https://www.python.org/" },
  { icon: <FaGitAlt />, path: "https://git-scm.com/" },
  { icon: <SiMacos />, path: "https://www.apple.com/macos/sonoma/" },
  { icon: <FaLinux />, path: "https://www.linux.org/" },
  { icon: <VscVscodeInsiders />, path: "https://code.visualstudio.com/" },
];

const Social = ({
  containerStyles,
  iconStyles,
}: {
  containerStyles: string;
  iconStyles: string;
}) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link href={item.path} key={index} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export function Slider({
  containerStyles,
  iconStyles,
}: {
  containerStyles: string;
  iconStyles: string;
}) {
  return (
    <motion.div
      className="container mx-auto"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 3, delay: 0.5, ease: "easeIn" },
      }}
    >
      <Marquee pauseOnHover className="[--duration:40s]">
        <Social containerStyles={containerStyles} iconStyles={iconStyles} />
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:40s]">
        <Social containerStyles={containerStyles} iconStyles={iconStyles} />
      </Marquee>
    </motion.div>
  );
}
