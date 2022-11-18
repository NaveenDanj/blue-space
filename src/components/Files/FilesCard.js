import React, { useState } from "react";
import { Avatar } from "@material-ui/core";
import DescriptionIcon from '@mui/icons-material/Description';

import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import DraftCardOption from "../DraftAndSent/Tabs/DraftCardOption";
import FilesCardOption from "./FilesCardOption";

const theme = createTheme({
  palette: {
    type: "dark",
  },
});

function FilesCard() {
  let [optionShow, setOptionShow] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div
        onMouseEnter={() => setOptionShow(true)}
        onMouseLeave={() => setOptionShow(false)}
        className="w-[100%] mt-3 cursor-pointer"
      >
        <div className=" rounded-xl w-[100%] bg-[#1A1D21] p-3 mt-1 cursor-pointer">
          <div className="w-[100%] flex justify-between mt-2 cursor-pointer">
            <div className="flex w-[100%]">
              <Avatar><DescriptionIcon/></Avatar>
              <div className="w-[100%] ml-3 flex flex-col  cursor-pointer">
                <div>
                  <label className="my-auto text-sm font-semibold mr-2 cursor-pointer">
                    errorlog.txt
                  </label>
                  <label className="my-auto text-gray-300 text-sm cursor-pointer">
                    2:27PM
                  </label>
                </div>
                <label className=" text-gray-300 cursor-pointer text-xs">
                  Shared by Naveen Hettiwaththa on Aug 4th, 2022
                </label>
              </div>
            </div>

            <div className="my-auto relative top-[] flex mb-2 justify-end">
              <div className="my-auto ">
                {optionShow && <FilesCardOption />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default FilesCard;
