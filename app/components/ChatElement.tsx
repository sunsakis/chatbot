import { useChat } from "ai/react";
import { useRef, useEffect } from "react";
import Image from "next/image";

const ChatElement = () => {
  const chatContainer = useRef<HTMLDivElement>(null);
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api/openai",
  });

  useEffect(() => {
    if (chatContainer.current) {
      chatContainer.current.scrollTop = chatContainer.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="w-full h-full flex flex-col relative">
      <div 
        ref={chatContainer} 
        className="flex-1 overflow-auto"
      >
        <div className="flex flex-col p-4">
          {messages.map((m, index) => (
            <div key={m.id} className="flex items-start mb-6">
              <Image
                className={`w-8 h-8 rounded shadow-lg ${
                  m.role === "user" 
                    ? "shadow-white/30" 
                    : "shadow-purple-500/60"
                }`}
                alt="avatar"
                width={32}
                height={32}
                src={m.role === "user" ? "/user-avatar.jpg" : "/ai-avatar.webp"}
              />
              <div className="flex-1 ml-4">
                <p className={`mt-0 whitespace-pre-wrap ${
                  m.role === "assistant" 
                    ? "font-mono text-sm leading-relaxed text-gray-800" 
                    : "text-gray-800"
                }`}>
                  {m.content}
                </p>
                {index < messages.length - 1 && (
                  <div className="w-full h-px bg-gray-200 my-6" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <form 
        onSubmit={handleSubmit} 
        className="relative bottom-0 left-0 right-0 w-full p-4"
      >
        <div className="relative">
          <input
            name="input-field"
            type="text"
            placeholder="Say anything"
            onChange={handleInputChange}
            value={input}
            className="w-full h-[50px] px-5 pr-12 rounded-full border border-gray-300 text-black outline-none"
          />
          <button 
            type="submit" 
            className="absolute right-2 top-[5px] w-10 h-10 rounded-full 
                     bg-blue-600 hover:bg-blue-700 text-white
                     transition-all duration-200
                     flex items-center justify-center"
          >
            →
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatElement;