"use client";

import Image from "next/image";
import Chat from "./components/Chat";

export default function Home() {
  return (
    <main className="flex flex-col h-screen bg-[#040d17] text-white">
      <nav className="flex justify-between items-center p-4 border-b border-gray-800">
        <h1 className="text-lg sm:text-xl font-semibold px-2">
          Talk to <span className="highlighted-text">the Man</span>
        </h1>
      </nav>
      <div className="flex-grow overflow-hidden relative">
        <Chat />
      </div>
    </main>
  );
}