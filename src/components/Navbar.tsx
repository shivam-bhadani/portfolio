"use client";

import useDeviceContext from "@/customHooks/useDeviceContext";
import NavbarMob from "@/components/NavbarMob";
import NavbarDesk from "@/components/NavbarDesk";
import { navItems } from "@/data";

const Navbar = () => {
  const device = useDeviceContext();
  return (
    <>
      {device?.isDesktop ? (
        <NavbarDesk navItems={navItems} />
      ) : (
        <NavbarMob navItems={navItems} />
      )}
    </>
  );
};

export default Navbar;
