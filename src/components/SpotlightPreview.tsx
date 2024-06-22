import { Spotlight } from "@/components/ui/Spotlight";

export default function SpotlightPreview() {
  return (
    <div className="-z-50 fixed h-screen w-full rounded-md flex md:items-center md:justify-center bg-dark-color-1 antialiased bg-grid-white/[0.02] overflow-hidden">
      <Spotlight
        className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
        fill="purple"
      />
      <Spotlight className="h-[80vh] w-[50vw] top-10 left-full" fill="white" />
      <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
    </div>
  );
}
