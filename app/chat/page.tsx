"use client";

import Image from "next/image";
import Chat from "../components/Chat";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col h-screen bg-[#040d17] text-white">
      <nav className="flex justify-between items-center p-4 border-b border-gray-800">
        <Link href="/">
            <h1 className="text-lg sm:text-xl font-semibold px-2">
                Wisen<span className="bg-gradient-to-tr from-yellow-50 to-blue-600 text-transparent bg-clip-text [text-shadow:0_0_10px_#ffeb3b40]">Up</span>
            </h1>
        </Link>
      </nav>
      <div className="flex-grow overflow-hidden relative">
        <Chat />
      </div>
    </main>
  );
}