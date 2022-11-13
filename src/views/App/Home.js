import React from "react";
import Header from "../../components/Global/Header";
import ChatHeader from "../../components/Global/ChatHeader";
import AddBookmarkSection from "../../components/Global/AddBookmarkSection";
import ChatBody from "../../components/Global/ChatBody";
import SideBarMain from "../../components/Global/Sidebar/SideBarMain";

function Home() {
  return (
    <div className=" overflow-y-hidden ">
      <Header />

      <div className="flex overflow-y-hidden">
        <SideBarMain type='Home' />
        <div className="grow">
          <ChatHeader />
          <AddBookmarkSection />
          <ChatBody />
        </div>
      </div>
    </div>
  );
}

export default Home;
