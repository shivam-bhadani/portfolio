"use client";

import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import RecentBlogCard from "@/components/RecentBlogCard";
import { recentBlogs } from "@/data";

const RecentBlogs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  useEffect(() => {
    mainControls.start("visible");
  }, [isInView]);
  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.5, delay: 0.25 }}
      className="mx-auto w-fit"
    >
      <h1 className="text-2xl md:text-4xl font-bold text-center my-10">
        My Recent Blogs
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 mx-auto">
        {recentBlogs.map((blog, key) => (
          <RecentBlogCard
            key={key}
            title={blog.title}
            thumbnail={blog.thumbnail}
            link={blog.link}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default RecentBlogs;
