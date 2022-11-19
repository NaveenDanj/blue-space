import React from 'react'
import ChannelHeader from '../../components/Channels/ChannelHeader';
import FilesBody from '../../components/Files/FilesBody';
import FilesHeader from '../../components/Files/FilesHeader';
import Header from "../../components/Global/Header";
import SideBarMain from "../../components/Global/Sidebar/SideBarMain";

function Channels() {
  return (
    <div className=" overflow-y-hidden ">
      <Header />

      <div className="flex overflow-y-hidden">
        <SideBarMain type="Home" />
        <div className="grow">
          <ChannelHeader />
          <FilesBody />
        </div>
      </div>
    </div>
  );
}

export default Channels;
