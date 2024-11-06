import { useChat } from "ai/react";
import { useRef, useEffect } from "react";
import Image from "next/image";

const Chat = () => {
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
    <div className="w-full max-w-[700px] h-[calc(100vh-200px)] mx-auto flex flex-col relative">
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
                    ? "font-mono text-sm leading-relaxed text-white/90 shadow-white" 
                    : ""
                }`}>
                  {m.content}
                </p>
                {index < messages.length - 1 && (
                  <div className="w-full h-px bg-white/20 my-6" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <form 
        onSubmit={handleSubmit} 
        className="fixed bottom-0 left-0 right-0 w-full max-w-[700px] mx-auto p-4"
      >
        <div className="relative">
          <input
            name="input-field"
            type="text"
            placeholder="Say anything"
            onChange={handleInputChange}
            value={input}
            className="w-full h-[50px] px-5 pr-12 rounded-full border border-white text-black outline-none"
          />
          <button 
            type="submit" 
            className="absolute right-2 top-[5px] w-10 h-10 rounded-full 
                     bg-[#ffca00] hover:bg-[#ffe80e] shadow-[0_0_24px_#ffeb3b] 
                     hover:shadow-[0_0_30px_#ffe80e] transition-all duration-200
                     bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%227.41%22%20height%3D%2212%22%20viewBox%3D%220%200%207.41%2012%22%3E%3Cpath%20d%3D%22M10%2C6%2C8.59%2C7.41%2C13.17%2C12%2C8.59%2C16.59%2C10%2C18l6-6Z%22%20transform%3D%22translate%28-8.59%20-6%29%22%20fill%3D%22%2314263b%22%2F%3E%3C%2Fsvg%3E')] 
                     bg-no-repeat bg-center"
          />
        </div>
      </form>
    </div>
  );
};

export default Chat;