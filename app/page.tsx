"use client";
import Landing from "@/components/landing";
import Navbar from "@/components/navbar";
import api from "@/lib/api";
export default function Home() {
  const handleClick = async () => {
    api.get("/users").then((res) => console.log(res));
  };

  return (
    <main className="bg m-auto mt-10 flex w-10/12 flex-col">
      <Navbar />
      <Landing />

      <button onClick={handleClick}>get me </button>
    </main>
  );
}
