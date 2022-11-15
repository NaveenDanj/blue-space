import React from "react";
import Header from "../../components/Global/Header";
import AddBookmarkSection from "../../components/Global/AddBookmarkSection";
import ChatBody from "../../components/Global/ChatBody";
import SideBarMain from "../../components/Global/Sidebar/SideBarMain";
import SavedHeader from "../../components/Saved/SavedHeader";
import SavedBody from "../../components/Saved/SavedBody";

function Saved() {
  return (
    <div className=" overflow-y-hidden ">
      <Header />

      <div className="flex overflow-y-hidden">
        <SideBarMain type='Home' />
        <div className="grow">
          <SavedHeader />
          <SavedBody />
        </div>
      </div>
    </div>
  )
}

export default Saved