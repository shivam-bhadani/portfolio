import Image from "next/image";
import { IRecentBlog } from "@/data/types";

const RecentBlogCard = (props: IRecentBlog) => {
  return (
    <div className="p-5 py-6 mx-auto w-[360px] max-w-[90%] bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-slate-900 via-purple-900 to-slate-900 dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-dark-color-2 dark:border-white/[0.2] border-black/[0.1] rounded-xl border">
      <div className="h-[100%] flex flex-col justify-between">
        <div>
          <Image
            src={props.thumbnail}
            alt={props.title}
            width={308.4}
            height={250}
            className="m-auto pt-2 rounded-xl max-w-[95%]"
          />
          <div className="text-center text-lg mt-4 font-semibold">
            {props.title}
          </div>
        </div>
        <div className="pt-4 flex justify-center">
          <a
            href={props.link}
            target="_blank"
            className="relative inline-flex items-center justify-start px-10 py-3 overflow-hidden font-medium transition-all bg-red-500 rounded-xl group"
          >
            <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-red-700 rounded group-hover:-mr-4 group-hover:-mt-4">
              <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
            </span>
            <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-red-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
            <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
              Read Full Blog
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default RecentBlogCard;
