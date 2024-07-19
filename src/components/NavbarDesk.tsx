"use client";

import { CustomLink } from "@/components/ui/CustomNavLink";
import { GithubIcon, InstagramIcon, LinkedInIcon, TwitterIcon } from "@/components/Icons";
import { motion } from "framer-motion";

interface INavItem {
  name: string;
  link: string;
}

const NavbarDesk = ({ navItems }: { navItems: INavItem[] }) => {
  return (
    <div className="w-full px-32 py-8 font-medium flex items-center justify-between">
      <div>
        {navItems.map((item, key) => (
          <CustomLink key={key} name={item.name} link={item.link} />
        ))}
      </div>
      <nav className="flex justify-center items-center flex-wrap gap-8">
        <motion.a
          href="https://github.com/shivam-bhadani"
          target="_blank"
          whileHover={{ y: -6 }}
          whileTap={{ scale: 1 }}
        >
          <GithubIcon className="w-6" />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/shivambhadani/"
          target="_blank"
          whileHover={{ y: -6 }}
          whileTap={{ scale: 1 }}
        >
          <LinkedInIcon className="w-6" />
        </motion.a>
        <motion.a
          href="https://x.com/shivambhadani_"
          target="_blank"
          whileHover={{ y: -6 }}
          whileTap={{ scale: 1 }}
        >
          <TwitterIcon className="w-6" />
        </motion.a>
        <motion.a
          href="https://www.instagram.com/shivambhadani_/"
          target="_blank"
          whileHover={{ y: -6 }}
          whileTap={{ scale: 1 }}
        >
          <InstagramIcon className="w-8" />
        </motion.a>
      </nav>
    </div>
  );
}

export default NavbarDesk;
