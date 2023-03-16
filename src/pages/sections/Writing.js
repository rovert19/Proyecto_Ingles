import { Header } from "../../components/Header";
import "./css/Writing.css";
import React, { useState, useRef, useEffect } from "react";
import axios from "axios";

export const Writing = () => {
  const [conversation, setConversation] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const messageEndRef = useRef(null);

  const scrollToBottom = () => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [conversation]);

 
  const sendMessage = async (message) => {
    const response = await axios.post(
      "https://api.openai.com/v1/engines/davinci/completions",
      {
        prompt: message,
      temperature: 0.7,
      max_tokens: 100,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
      stop: "\n",
      n: 1,
      logprobs: 10,
      echo: true,
      user: "user",
      //model: "davinci-codex"
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_CHATGPT_API_KEY}`,
        },
      }
    );

    handleResponse(response.data.choices[0].text);
  };

  const handleResponse = (botMessage) => {
    setConversation((prevConversation) => [
      ...prevConversation,
      { sender: "bot", message: botMessage },
    ]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const message = inputValue.trim();
    if (message) {
      setConversation((prevConversation) => [
        ...prevConversation,
        { sender: "user", message: message },
      ]);
      sendMessage(message);
      setInputValue("");
    }
  };

  return (
    <div className="writing-section">
      <Header text="My Writing" />
      <div className="writing-content">
      <div className="chat">
        <div className="chat-history">
          {conversation.map((message, index) => (
            <div
              key={index}
              className={`chat-message ${
                message.sender === "user" ? "user-message" : "bot-message"
              }`}
            >
              <div className="message-sender">
                {message.sender === "user" ? "Me" : "Bot"}
              </div>
              <div className="message-text">{message.message}</div>
            </div>
          ))}
          <div ref={messageEndRef} />
        </div>
        <form className="chat-input" onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            placeholder="Type your message..."
          />
          <button type="submit">
            <svg viewBox="0 0 24 24">
              <path
                fill="#fff"
                d="M20.354 3.646a.5.5 0 0 0-.707 0L2.146 20.146a.5.5 0 0 0 .708.708L20.354 4.354a.5.5 0 0 0 0-.708z"
              />
            </svg>
          </button>
        </form>
      </div>

      </div>

    </div>
  );
};
