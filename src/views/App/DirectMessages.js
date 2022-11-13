import React from "react";
import Header from "../../components/Global/Header";
import ChatBody from "../../components/Global/ChatBody";
import SideBarMain from "../../components/Global/Sidebar/SideBarMain";
import DirectMessagesHeader from "../../components/Global/ChatHeaderComponents/DirectMessagesHeader";
import MentionSection from "../../components/DirectMessages/MentionSection";

function DirectMessages() {
  return (
    <div className=" overflow-y-hidden ">
      <Header />

      <div className="flex overflow-y-hidden">
        <SideBarMain type="Home" />
        <div className="grow">
          <DirectMessagesHeader />
          <MentionSection />
          <ChatBody />
        </div>
      </div>
    </div>
  );
}

export default DirectMessages;
