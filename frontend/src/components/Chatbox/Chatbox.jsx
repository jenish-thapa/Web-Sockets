import io from "socket.io-client";
import "./Chatbox.css";
import { useState } from "react";

const socket = io("http://localhost:8080");

const Chatbox = () => {
  const [input, setInput] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    socket.emit("message", input);
    setInput("");
  };

  return (
    <div>
      <h1>Chat App</h1>
      <div id="chats"></div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          id="message"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          placeholder="Type your message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};
export default Chatbox;
