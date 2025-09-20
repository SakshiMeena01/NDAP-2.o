import React, { useState } from "react";
import "./Chatbot.css";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [recent, setRecent] = useState([]);

  const handleSend = async () => {
    if (!input.trim()) return;

    // Save to recent history
    if (!recent.includes(input.trim().toLowerCase())) {
      setRecent([input.trim(), ...recent]);
    }

    const userMessage = { role: "user", content: input.trim() };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    try {
      const res = await fetch(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=" +
          import.meta.env.VITE_GEMINI_API_KEY,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [{ parts: [{ text: userMessage.content }] }],
          }),
        }
      );

      const data = await res.json();
      console.log("Gemini API response:", data);

      const reply =
        data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        "⚠️ Sorry, I couldn’t understand that.";

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: reply },
      ]);
    } catch (err) {
      console.error("API error:", err);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "❌ Error connecting to Gemini API." },
      ]);
    }
  };

  const handleDeleteHistory = () => setRecent([]);
  const handleRecentClick = (item) => setInput(item);

  return (
    <div className="chatbot-bg">
      <div className="chat-layout">
        {/* Sidebar with Recent Searches */}
        <aside className="sidebar">
          <div className="sidebar-header">
            <span>Recent Searches</span>
            <span
              className="delete-icon"
              role="button"
              aria-label="Delete recent"
              title="Delete History"
              onClick={handleDeleteHistory}
            ><img
            src="https://img.icons8.com/?size=100&id=102350&format=png&color=000000"
            alt="Datasets Icon"
            className="stats-icon-img"
          /></span>
          </div>
          <ul className="recent-search-list">
            {recent.length === 0 ? (
              <li className="empty-history">No recent searches</li>
            ) : (
              recent.map((r, idx) => (
                <li key={idx} onClick={() => handleRecentClick(r)}>{r}</li>
              ))
            )}
          </ul>
        </aside>

        {/* Main Chat Area */}
        <main className="main-chat-area">
          <div className="chatbot-header">
            <span role="img" aria-label="wave" style={{ fontSize: "1.8rem" }}>👋</span>
            <span className="headline-gradient">Welcome to NDAP!</span>
            <div className="subtext">Ask me anything about India’s public data</div>
          </div>
          <div className="chatbot-container">
            <div className="chat-messages">
              {messages.map((msg, idx) => (
                <div key={idx} className={`message ${msg.role}`}>
                  {msg.content}
                </div>
              ))}
            </div>
            <div className="input-bar">
              <input
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="Type your ques"
                onKeyDown={e => e.key === "Enter" && handleSend()}
              />
              <button onClick={handleSend} disabled={!input.trim()}>Send</button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Chatbot;
