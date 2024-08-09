"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function CustomLink({
  name,
  link,
  className = "",
}: {
  name: string;
  link: string;
  className?: string;
}) {
  const pathName = usePathname();
  return (
    <Link href={link} className="mx-4 relative group" target={name=="Blogs" ? "_blank": "_self"}>
      {name}
      <span
        className={`h-[1px] inline-block dark:bg-white absolute left-0 -bottom-0.5 group-hover:w-full translate-[width] ease duration-300 ${pathName===link ? "w-full": "w-0"}`}
      >
        &nbsp;
      </span>
    </Link>
  );
}
