"use client";

import { useEffect, useRef } from "react";
import { IoIosStar } from "react-icons/io";
import { motion, useAnimation, useInView } from "framer-motion";
import SkillSection from "@/app/about/SkillSection";
import AboutAvatarSVG from "@/app/about/AboutAvatarSVG";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const leftSlideControls = useAnimation();
  const rightSlideControls = useAnimation();
  const mainControls = useAnimation();

  useEffect(() => {
    leftSlideControls.start("visible");
    rightSlideControls.start("visible");
    mainControls.start("visible");
  }, [isInView]);

  const ACHIEVEMENTS = [
    "Achieved Highest Rating of 1766 (Expert) on Codeforces",
    "Global Rank 156 in Codeforces Round 875 (Div. 2)",
    "Global Rank 527 in Codeforces Round 865 (Div. 2)",
    "Achieved Highest Rating of 2029 (5 Star) on CodeChef",
    "Global Rank 617 (India Rank 411) in Google Kickstart Round G 2022",
    "Guardian (Max Rating 2315) in leetcode",
  ];

  return (
    <div ref={ref} className="w-[1200px] max-w-[90%] mx-auto md:mt-10">
      <div className="flex flex-col md:flex-row gap-4">
        <motion.div
          className="md:w-[60%] flex flex-col justify-center px-8"
          variants={{
            hidden: { opacity: 0, x: "-80px" },
            visible: { opacity: 1, x: "0" },
          }}
          initial="hidden"
          animate={leftSlideControls}
          transition={{ duration: 0.5, ease: "easeIn" }}
        >
          <h1 className="text-2xl md:text-4xl font-bold">About Me</h1>
          <p className="mt-6 text-sm md:text-base">
            Hi Everyone, I am Shivam Bhadani from Jharkhand, India. I have done
            my graduation from IIT Kanpur.
          </p>
          <div className="mt-8 text-sm md:text-base">
            <p>Some of my competitive programming achievements are:</p>
          </div>
          <ul>
            {ACHIEVEMENTS.map((achievement, key) => (
              <li key={key} className="flex gap-3 md:item-center mt-4">
                <div>
                  <IoIosStar size="1.3rem" />
                </div>
                <p className="text-sm md:text-base">{achievement}</p>
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          className="md:w-[40%]"
          variants={{
            hidden: { opacity: 0, x: "80px" },
            visible: { opacity: 1, x: "0" },
          }}
          initial="hidden"
          animate={rightSlideControls}
          transition={{ duration: 0.5, ease: "easeIn" }}
        >
          <AboutAvatarSVG className="w-[100%]" />
        </motion.div>
      </div>
      <motion.div
        className="my-10"
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        <SkillSection />
      </motion.div>
    </div>
  );
};

export default About;
