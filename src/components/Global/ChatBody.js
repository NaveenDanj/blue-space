import React from "react";
import ChatContent from "./ChatBody/ChatContent";
import ChatUserDetails from "./ChatBody/ChatUserDetails";
import ChatTypeSection from "./ChatBody/ChatTypeSection";

function ChatBody() {
  return (
    <div>
      <div
        style={{
        //   position: "relative",
          overflowY: "auto",
          borderTop: "1px solid rgba(255,255,255,0.1)",
          height: "calc(100vh - 215px)",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
        }}
        className="bg-[#1A1D21]"
      >
        <ChatUserDetails />

        <div className="mt-5 pb-20">
          <ChatContent />
          <ChatContent />
          <ChatContent />
          <ChatContent />
          <ChatContent />
          <ChatContent />
          <ChatContent />
          <ChatContent />
          <ChatContent />
          <ChatContent />
        </div>
      </div>

      <ChatTypeSection />
    </div>
  );
}

export default ChatBody;
