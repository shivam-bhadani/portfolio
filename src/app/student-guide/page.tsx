"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { motion, useInView, useAnimation } from "framer-motion";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { studentGuideBlogsMetaData } from "@/data";

const StudentGuide = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  useEffect(() => {
    mainControls.start("visible");
  }, [isInView]);
  return (
    <div className="mt-2 w-[1200px] max-w-[90%] mx-auto">
      <div>
        <p>
          If you&apos;re an engineering student aspiring to build a career in
          tech or software, you&apos;ve come to the right place. This collection
          of short blogs is designed to clear up your doubts and provide you
          with guidance based on my personal experiences.
        </p>
        <br />
        <p>
          Don&apos;t worry, if you don&apos;t have any mentor or college senior.
          Explore these blogs, and if you still have questions that aren&apos;t
          answered, feel free to reach out to me directly.
        </p>
      </div>
      <div className="mt-6">
        <h1 className="text-2xl md:text-3xl font-bold text-center py-4">
          Blogs
        </h1>
        <div className="my-4 md:my-9 flex flex-col gap-8">
          {studentGuideBlogsMetaData.map((blog, key) => (
            <motion.div
              key={key}
              ref={ref}
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              <Link href={`/student-guide/${blog.slug}`}>
                <BackgroundGradient className="rounded-[22px] w-[100%] p-4 sm:p-8 bg-white dark:bg-dark-color-2">
                  <span className="text-lg">{blog.title}</span>
                </BackgroundGradient>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentGuide;
