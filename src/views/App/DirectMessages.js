import React from "react";
import Header from "../../components/Global/Header";
import SideBarMain from "../../components/Global/Sidebar/SideBarMain";
import DirectMessagesHeader from "../../components/Global/ChatHeaderComponents/DirectMessagesHeader";
import MentionSection from "../../components/DirectMessages/MentionSection";
import DirectMessageBody from "../../components/DirectMessages/DirectMessageBody";

function DirectMessages() {
  return (
    <div className=" overflow-y-hidden ">
      <Header />

      <div className="flex overflow-y-hidden">
        <SideBarMain type="Home" />
        <div className="grow">
          <DirectMessagesHeader />
          <MentionSection />
          <DirectMessageBody />
          {/* <ChatBody /> */}
        </div>
      </div>
    </div>
  );
}

export default DirectMessages;
