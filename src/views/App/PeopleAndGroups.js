import React from "react";
import Header from "../../components/Global/Header";
import SideBarMain from "../../components/Global/Sidebar/SideBarMain";
import DraftHeader from "../../components/DraftAndSent/DraftHeader";
import PeopleAndGroupHeader from "../../components/PeopleAndGroup/PeopleAndGroupHeader";

function PeopleAndGroups() {
  return (
    <div className=" overflow-y-hidden ">
      <Header />

      <div className="flex overflow-y-hidden">
        <SideBarMain type="Home" />
        <div className="grow">
          <PeopleAndGroupHeader />
        </div>
      </div>
    </div>
  );
}

export default PeopleAndGroups;
