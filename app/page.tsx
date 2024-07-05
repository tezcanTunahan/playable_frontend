import Landing from "@/components/landing";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <main className="bg m-auto mt-10 flex w-10/12 flex-col">
      <Navbar />
      <Landing />
    </main>
  );
}
