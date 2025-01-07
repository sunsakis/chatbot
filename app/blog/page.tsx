"use client";

import Link from 'next/link';

const Blog = () => {

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
        <header className="max-w-6xl mx-auto px-4 py-8">
          <div className="mb-2">
            <p className="text-blue-600 text-sm uppercase tracking-wider">
              Life coaching and mentoring chatbot that helps
            </p>
          </div>
          <br/>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-2">
              <h1 className="text-4xl font-bold">
                <Link href="/">
                    Wise<span className="bg-gradient-to-tr from-blue-600 to-white text-transparent bg-clip-text">U</span>p
                </Link>
              </h1>
            </div>
            
            <nav className="overflow-x-auto">
              <ul className="flex gap-6 text-gray-600 whitespace-nowrap">
                <li className="text-sm md:text-base">Life</li>
                <li className="text-sm md:text-base">Dating</li>
                <li className="text-sm md:text-base">Relations</li>
                <li className="text-sm md:text-base">Mental wellness</li>
              </ul>
            </nav>
          </div>
        </header>

      <main className="max-w-6xl mx-auto px-4 py-6 md:py-12">

      </main>
    </div>
    
  );
};

export default Blog;
