import Hero from "@/components/Hero";
import RecentBlogs from "@/components/RecentBlogs";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="w-[1200px] max-w-[90%] mx-auto">
        <RecentBlogs />
      </div>
    </div>
  );
}
