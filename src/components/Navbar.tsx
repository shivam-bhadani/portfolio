"use client";

import { useMediaQuery } from "react-responsive";
import NavbarMob from "./NavbarMob";
import NavbarDesk from "./NavbarDesk";
import { navItems } from "@/data";

const Navbar = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });
  return (
    <>
      {isMobile ? (
        <NavbarMob navItems={navItems} />
      ) : (
        <NavbarDesk navItems={navItems} />
      )}
    </>
  );
};

export default Navbar;
