import path from "path";
import fs from "fs";
import parse from "html-react-parser";
import { studentGuideBlogsMetaData } from "@/data";

export const generateStaticParams = () => {
  return studentGuideBlogsMetaData.map((blog) => ({
    slug: blog.slug,
  }));
};

const getBlogContent = (slug: string) => {
  const blogsDirectory = path.join(process.cwd(), "src/studentGuideBlogs");
  const blogFile = slug + ".html";
  const blogFilePath = path.join(blogsDirectory, blogFile);
  const blogContentHTML = fs.readFileSync(blogFilePath, "utf-8");
  return blogContentHTML;
};

const Blog = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const blogContentHTML = getBlogContent(slug);
  return (
    <div className="mt-2 w-[1000px] max-w-[90%] mx-auto text-base">
      {parse(blogContentHTML)}
    </div>
  );
};

export default Blog;
