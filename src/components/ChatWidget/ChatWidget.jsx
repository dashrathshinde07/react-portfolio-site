import React, { useState } from "react";
import { FaRobot } from "react-icons/fa";
import "./ChatWidget.css";

const ChatWidget = () => {
  const [open, setOpen] = useState(false);

  const whatsappNumber = "918087828173"; // Your WhatsApp Number

  const sendWhatsAppMessage = (msg) => {
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
  };

  return (
    <div className="chat-widget">
      {/* Chatbot Button */}
      <div
        className={`chatbot-btn ${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <FaRobot size={26} />
      </div>

      {/* Dropdown Menu */}
      {open && (
        <div className="chat-dropdown">
          <div className="dropdown-header">💬 Need Help?</div>

          <button
            className="dropdown-item"
            onClick={() =>
              sendWhatsAppMessage("Hi Dashrath! I want to chat on WhatsApp.")
            }
          >
            📞 Chat on WhatsApp <span>+{whatsappNumber}</span>
          </button>

          <button
            className="dropdown-item"
            onClick={() =>
              sendWhatsAppMessage(
                "Hi Dashrath! I want to book a free consultation."
              )
            }
          >
            📅 Book Consultation
          </button>

          <button
            className="dropdown-item"
            onClick={() =>
              sendWhatsAppMessage(
                "Hi Dashrath! Can you tell me more about your services?"
              )
            }
          >
            ℹ️ About Our Services
          </button>

          <button
            className="dropdown-item"
            onClick={() =>
              sendWhatsAppMessage(
                "Hi Dashrath! I would like to request a quote for my project."
              )
            }
          >
            💰 Request a Quote
          </button>

          <button
            className="dropdown-item"
            onClick={() =>
              sendWhatsAppMessage(
                "Hi Dashrath! I need support with my existing project."
              )
            }
          >
            🛠 Support
          </button>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
