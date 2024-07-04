import React, { useEffect, useState, useRef } from "react";
import io from "socket.io-client";
import axios from "axios";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa"; // Import Font Awesome icons
import "./classbridge.css";

// Assume you have your image imported as 'chatImage'
import chatImage from "./assests/chat icon.jpg";

const socket = io("http://localhost:5000");

const ClassBridge = () => {
  const [username, setUserName] = useState("");
  const [chatActive, setChatActive] = useState(false);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [texts] = useState([
    "Code is like humor",
    "Every great developer",
    "Programming is fun",
    "Keep coding!",
    "Learning never stops",
    "Stay curious",
    "Embrace challenges",
    "Think outside the box",
    "Share your knowledge",
    "Never give up"
  ]);
  const messageContainerRef = useRef(null);

  useEffect(() => {
    getMessage();

    socket.on("received-message", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
      if (messageContainerRef.current) {
        messageContainerRef.current.scrollTop =
          messageContainerRef.current.scrollHeight;
      }
    });

    return () => {
      socket.off("received-message");
    };
  }, []);

  useEffect(() => {
    console.log(messages);
  }, [messages]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000);

    return () => clearTimeout(timer);
  });

  const getMessage = async () => {
    try {
      const result = await axios.get("http://localhost:5000/get-messages");
      setMessages(result.data.data);
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newMessage.trim() !== "") {
      const messageData = {
        message: newMessage,
        user: username,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };
      socket.emit("send-message", messageData);
      setNewMessage("");
    } else {
      alert("Message cannot be empty");
    }
  };

  const handleDelete = async (messageId) => {
    try {
      console.log("Delete message:", messageId); // Check if this log appears in the console

      if (!messageId) return; // Null check

      // Send request to delete message from the server
      await axios.delete(`http://localhost:5000/delete-message/${messageId}`);

      // Update local state to remove the deleted message
      const updatedMessages = messages.filter(
        (message) => message._id !== messageId
      );
      setMessages(updatedMessages);
    } catch (error) {
      console.error("Error deleting message:", error);
    }
  };

  const handleLogout = () => {
    setChatActive(false);
    setUserName("");
    setMessages([]);
  };

  const handleStartChat = async () => {
    try {
      const response = await axios.get("http://localhost:5000/me");
      const user = response.data;
      if (user.name === username) {
        setChatActive(true);
        getMessage(); // Fetch messages after setting chat as active
      } else {
        alert("Access denied. Please enter a valid username.");
      }
    } catch (error) {
      console.error("Error checking username:", error);
    }
  };

  return (
     <div className="hero is-fullheight ">
      <div className="hero-body">
        <div className="container is-fullhd">
          {chatActive ? (
            <>
              <div className="classbridge-box">
                <h1 className="classbridge-text">ClassBridge</h1>
              </div>
              <button className="button-is danger" onClick={handleLogout}>Logout</button>
              <div ref={messageContainerRef} className="message-container">
                {messages.map((message, index) => (
                  <div key={index} className={`columns is-mobile is-vcentered ${message.user === username ? "is-flex-direction-row-reverse sent-message" : "received-message"}`}>
                    <div className="column">
                      <div className={`notification ${message.message.length ? "is-light" : "is-success"} is-small px-2 rounded-md ${message.user === username ? "has-text-right" : "has-text-left"}`}>
                        <span style={{ backgroundColor: 'grey', color: 'white', padding: '2px 5px', borderRadius: '3px' }}>{message.user.charAt(0).toUpperCase()}</span>
                        <span>{message.user.slice(1)}</span>
                        <h3 className="font-bold has-text-weight-bold">{message.message}</h3>
                        <h3 className="is-size-7 has-text-right">{message.time}</h3>
                        {message.user === username && (
                          <button className="delete-button" onClick={() => handleDelete(message._id)}>Delete</button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <form onSubmit={handleSubmit}>
                <div className="input-container">
                  <input
                    type="text"
                    placeholder="Type your message..."
                    className="input"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                  />
                  <button type="submit" className="send">Send</button>
                </div>
              </form>
              {/* Social media icons */}
              <div className="social-icons-bottom">
                <a href="instagram-link-here"><FaInstagram /></a>
                <a href="twitter-link-here"><FaTwitter /></a>
                <a href="facebook-link-here"><FaFacebook /></a>
              </div>
            </>
          ) : (
            <div className="custom-login-container">
              <div className="login-content">
                {/* Add image here */}
                <img src={chatImage} alt='' style={{ width: '200px', height: 'auto', marginBottom: '10px' }} />
                <p>{texts[currentTextIndex]}</p>
                <input
                  type="text"
                  name=""
                  id=""
                  value={username}
                  onChange={(e) => setUserName(e.target.value)}
                  className="input"
                  placeholder="Type your username..."
                />
                <button
                  className="start"
                  onClick={handleStartChat}
                >
                  Start Chat
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ClassBridge;

































































                      





















