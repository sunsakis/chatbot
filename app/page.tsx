"use client";

import Image from "next/image";
import Chat from "./components/Chat";

export default function Home() {
  return (
    <main className="flex flex-col h-screen bg-[#040d17] text-white">
      <nav className="flex justify-between items-center p-4">
        <Image src="/logo.png" alt="Codebender Logo" width={150} height={40} />
        <h1 className="text-xl font-semibold">
          Talk to <span className="highlighted-text">The Last Codebender</span>
        </h1>
      </nav>
      <div className="flex-grow overflow-hidden">
        <Chat />
      </div>
    </main>
  );
}
