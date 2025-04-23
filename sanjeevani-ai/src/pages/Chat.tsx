import React, { useState } from "react";
import { useEffect } from "react";

export default function Chat() {
  const [messages, setMessages] = useState([
    { sender: "sia", text: "Hi sweetheart 🌸 How are you feeling today?" },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isListening, setIsListening] = useState(false);

  const SpeechRecognition =
    (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;
  const recognition = SpeechRecognition ? new SpeechRecognition() : null;

  const handleSend = async () => {
    if (!input.trim()) return;
    setMessages((prev) => [...prev, { sender: "you", text: input }]);
    const userInput = input;
    setInput("");

    setIsTyping(true);
    try {
      const res = await fetch("http://localhost:8000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: userInput }),
      });
      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { sender: "sia", text: data.reply },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { sender: "sia", text: "Sorry, something went wrong. Please try again later." },
      ]);
    }
    setIsTyping(false);
  };

  const startListening = () => {
    if (!recognition) return alert("Speech Recognition not supported");
    recognition.lang = "en-US";
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.start();
    setIsListening(true);

    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      setInput(transcript);
      setIsListening(false);
    };

    recognition.onerror = () => {
      setIsListening(false);
    };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-lavender-200 text-white flex flex-col items-center justify-between px-4 py-8">
      <h1 className="text-3xl font-bold mb-4 text-center">Chat with SIA</h1>

      <div className="w-full max-w-xl bg-white/10 backdrop-blur-lg rounded-xl p-4 shadow-inner h-[60vh] overflow-y-auto mb-4">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={
              "mb-3 p-3 rounded-xl max-w-xs " +
              (msg.sender === "you"
                ? "ml-auto bg-green-500 text-white text-right"
                : "bg-purple-300 text-black")
            }
          >
            {msg.text}
          </div>
        ))}

        {isTyping && (
          <div className="bg-purple-200 text-black px-4 py-2 rounded-xl w-fit">
            SIA is typing...
          </div>
        )}
      </div>

      <div className="flex w-full max-w-xl gap-2">
        <input
          type="text"
          className="flex-1 p-3 rounded-xl bg-white/90 text-black focus:outline-none"
          placeholder="Type or speak..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button
          onClick={startListening}
          className={
            "bg-yellow-400 hover:bg-yellow-500 px-4 py-2 rounded-xl text-white font-semibold " +
            (isListening ? "animate-pulse" : "")
          }
        >
          🎙️
        </button>
        <button
          onClick={handleSend}
          className="bg-blue-500 hover:bg-blue-600 px-5 py-2 rounded-xl text-white font-semibold"
        >
          Send
        </button>
      </div>
    </div>
  );
}
