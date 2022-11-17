import React from "react";
import Header from "../../components/Global/Header";
import SideBarMain from "../../components/Global/Sidebar/SideBarMain";
import SavedHeader from "../../components/Saved/SavedHeader";
import SavedBody from "../../components/Saved/SavedBody";
import DraftHeader from "../../components/DraftAndSent/DraftHeader";
import DraftTabSection from "../../components/DraftAndSent/DraftTabSection";

function DraftAndSent() {
  return (
    <div className=" overflow-y-hidden ">
      <Header />

      <div className="flex overflow-y-hidden">
        <SideBarMain type="Home" />
        <div className="grow">
          <DraftHeader />
          <DraftTabSection />
        </div>
      </div>
    </div>
  );
}

export default DraftAndSent;
