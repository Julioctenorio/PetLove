import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <div className="w-full h-[calc(100dvh+2rem)] bg-hero" />
    </div>
  );
}
