"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ChatElement from "./components/ChatElement";

const CoachingPage = () => {
  const reviews = [
    {
      avatar: "/user-review-1.jpg",
      text: "Hey yo, this is gold. I thought nothing will help me get over my heartbreak...",
      name: "Steve Ogutu",
      bgColor: "bg-gray-200"
    },
    {
      avatar: "/user-review-2.jpg",
      text: "I was struggling with my mental health and this bot helped me a lot. I'm glad I found WiseUp.",
      name: "Linda Harris",
      bgColor: "bg-gray-200"
    },
    {
      avatar: "/user-review-3.jpg",
      text: "When I'm not sure of something or simply have those depressive days, I simply Wise Up!",
      name: "Trisha Nolan",
      bgColor: "bg-pink-200"
    }
  ];

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
                Wise<span className="bg-gradient-to-tr from-blue-600 to-white text-transparent bg-clip-text">U</span>p
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

      {/* Hero Section */}
      <main className="max-w-6xl mx-auto px-4 py-6 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
          <div className="space-y-4 md:space-y-6">
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              Private mentor and pocket advisor for all life occasions. Whether it's personal 
              growth, finding balance or learning to overcome common life mistakes... <br/><br/>
              Honest advice that's free and anonymous, tailored for you—for 
              everyone seeking clarity and direction. <br/><br/>
              Think of it as your coaching on the go, ready to 
              help you make better decisions and achieve your goals with confidence.<br/>
              Let's make every step count!
            </p>
            
            {/* <div className="flex flex-col sm:flex-row gap-4">
                <button className="w-full sm:w-auto bg-gray-300 hover:bg-gray-200 border text-white px-6 py-2 rounded-md">
                  Sign In
                </button>
                <Link href="/chat" className="w-full sm:w-auto text-center text-blue-600 flex items-center justify-center">
                  Chat <span className="ml-2">→</span>
                </Link>
            </div> */}
          </div>
          
            <div className="relative h-64 md:h-96">
            <Image
              src="/happy-friends.png"
              alt="Happy people using phones"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </main>

      {/* Chat Section */}
      <section className="max-w-6xl mx-auto px-4 py-8 md:py-12">
        <div className="bg-white rounded-xl shadow-lg p-4 md:p-8">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 mb-6 md:mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">Feeling lost?</h2>
            <span className="text-2xl md:text-3xl text-blue-600 font-bold">Ask a question!</span>
          </div>
          
          <div className="h-[300px] relative">
            <ChatElement />
          </div>
        </div>
      </section>
      

      {/* Reviews Section */}
      <section className="max-w-6xl mx-auto px-4 py-8 md:py-12 bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">
          <span className="text-gray-800">Reviews</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="space-y-4">
              <div className="w-20 h-20 relative mx-auto">
                <Image
                  src={review.avatar}
                  alt={review.name}
                  layout="fill"
                  className={`rounded-full ${review.bgColor}`}
                />
              </div>
              <blockquote className="text-gray-700 text-center">
                "{review.text}"
              </blockquote>
              <p className="text-blue-600 text-center">{review.name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
    
  );
};

export default CoachingPage;
