import Link from "next/link";
import path from "path";

import { FiGithub, FiLinkedin } from "react-icons/fi";

const socials = [
  { icon: <FiGithub />, path: "" },
  { icon: <FiLinkedin />, path: "" },
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

export default Social;
