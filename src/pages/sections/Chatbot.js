import { useState } from "react";
import axios from "axios";

export const Chatbot = () => {
  const [conversation, setConversation] = useState([]);

  const sendMessage = async (message) => {
    const response = await axios.post(
      "https://api.openai.com/v1/engines/davinci-codex/completions",
      {
        prompt: message,
        temperature: 0.7,
        max_tokens: 60,
        stop: "\n",
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
    setConversation([...conversation, { sender: "bot", message: botMessage }]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const message = event.target.elements.message.value;
    setConversation([...conversation, { sender: "user", message: message }]);
    sendMessage(message);
    event.target.elements.message.value = "";
  };

  return (
    <div>
      {conversation.map((message, index) => (
        <div key={index}>
          <span>{message.sender}: </span>
          <span>{message.message}</span>
        </div>
      ))}
      <form onSubmit={handleSubmit}>
        <input type="text" name="message" />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};
