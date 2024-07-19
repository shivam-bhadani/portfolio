"use client";

import { useEffect, useState } from "react";
import { Idevice } from "@/utils/types/Idevice";

const useDeviceContext = () : Idevice => {
  const currentDevice = () : Idevice => {
    if (typeof window !== "undefined") {
      return {
        isMobile: window.innerWidth <= 767,
        isTablet: window.innerWidth > 767 && window.innerWidth < 1024,
        isDesktop: window.innerWidth >= 1024
      };
    }
    return {
      isMobile: true,
      isTablet: false,
      isDesktop: false
    };
  };

  const [device, setDevice] = useState<Idevice>(currentDevice());

  const updateDevice = () => {
    setDevice(currentDevice());
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", updateDevice);
      return () => {
        window.removeEventListener("resize", updateDevice);
      };
    }
  }, []);

  return device;
};

export default useDeviceContext;
