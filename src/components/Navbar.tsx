"use client";

import { useMediaQuery } from "react-responsive";
import NavbarMob from "@/components/NavbarMob";
import NavbarDesk from "@/components/NavbarDesk";
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
