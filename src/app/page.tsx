import Dashboard from "@/components/Dashboard";
import Navbar from "@/components/Navbar";


export default function Home() {
  return (
  <main className="w-full lg:w-[calc(100vw_-_302px)] h-max flex flex-col lg:ml-[302px] overflow-x-hidden">
      <Navbar />
      <Dashboard />
  </main>
  );
}
