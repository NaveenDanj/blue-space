import React from 'react'
import FilesHeader from '../../components/Files/FilesHeader';
import Header from "../../components/Global/Header";
import SideBarMain from "../../components/Global/Sidebar/SideBarMain";
import PoeplesBody from "../../components/PeopleAndGroup/PoeplesBody";

function Files() {
  return (
    <div className=" overflow-y-hidden ">
      <Header />

      <div className="flex overflow-y-hidden">
        <SideBarMain type="Home" />
        <div className="grow">
          <FilesHeader />
        </div>
      </div>
    </div>
  )
}

export default Files