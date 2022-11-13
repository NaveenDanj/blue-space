import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import IconButton from "@mui/material/IconButton";
import TagOutlinedIcon from "@mui/icons-material/TagOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import CreateChannel from "../../Dialogs/CreateChannel";

import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
  palette: {
    type: "dark",
  },
});

function ChannelSection() {
  return (
    <div className="mt-3">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="flex justify-between">
          <div className="flex my-auto">
            <IconButton className="my-auto">
              <ArrowDropDownOutlinedIcon className="text-white" />
            </IconButton>

            <label className="my-auto text-white">Channels</label>
          </div>

          <div className="flex my-auto">
            <IconButton className="my-auto">
              <MoreVertOutlinedIcon
                fontSize="20"
                className="text-white text-sm"
              />
            </IconButton>

            <div className="my-auto">
              <CreateChannel />
            </div>
          </div>
        </div>

        <div>
          <div className="text-white flex py-1 px-3 cursor-pointer hover:bg-[#27242C]">
            <TagOutlinedIcon
              className="my-auto mr-2 cursor-pointer"
              fontSize="12"
            />
            <label className="my-auto text-sm cursor-pointer">Channel 1</label>
          </div>

          <div className="text-white flex py-1 px-3 cursor-pointer hover:bg-[#27242C]">
            <TagOutlinedIcon
              className="my-auto mr-2 cursor-pointer"
              fontSize="12"
            />
            <label className="my-auto text-sm cursor-pointer">Easy helth</label>
          </div>

          <div className="text-white flex py-1 px-3 cursor-pointer hover:bg-[#27242C]">
            <TagOutlinedIcon
              className="my-auto mr-2 cursor-pointer"
              fontSize="12"
            />
            <label className="my-auto text-sm cursor-pointer">POS</label>
          </div>

          <div className="text-white flex py-1 px-3 cursor-pointer hover:bg-[#27242C]">
            <TagOutlinedIcon
              className="my-auto mr-2 cursor-pointer"
              fontSize="12"
            />
            <label className="my-auto text-sm cursor-pointer">
              ILM Shipping
            </label>
          </div>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default ChannelSection;
