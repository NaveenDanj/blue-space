import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import IconButton from "@mui/material/IconButton";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { Avatar } from "@mui/material";

function DirectMessagesSection() {
  return (
    <div className="mt-3 text-white">
      <div className="flex justify-between ">
        <div className="flex">
          <IconButton className="my-auto">
            <ArrowDropDownOutlinedIcon className="text-white" />
          </IconButton>

          <label className="my-auto">Direct messages</label>
        </div>

        <div>
          <IconButton>
            <MoreVertOutlinedIcon fontSize="20" className="text-white text-sm" />
          </IconButton>

          <IconButton>
            <AddOutlinedIcon fontSize="20" className="text-white text-sm" />
          </IconButton>
        </div>
      </div>

      <div className="text-white">
        <div className="flex py-1 px-3 cursor-pointer hover:bg-[#27242C]">
          <Avatar className="mr-2" sx={{ width: 20, height: 20 }}>
            M
          </Avatar>
          <label className="my-auto text-sm cursor-pointer">Naveen Hettiwaththa</label>
        </div>

        <div className="flex py-1 px-3 cursor-pointer hover:bg-[#27242C]">
          <Avatar className="mr-2" sx={{ width: 20, height: 20 }}>
            M
          </Avatar>

          <label className="my-auto text-sm cursor-pointer">Kishoritha Suthagar</label>
        </div>

        <div className="flex py-1 px-3 cursor-pointer hover:bg-[#27242C]">
          <Avatar className="mr-2" sx={{ width: 20, height: 20 }}>
            M
          </Avatar>

          <label className="my-auto text-sm cursor-pointer">Muditha Maduranga</label>
        </div>

        
      </div>
    </div>
  );
}

export default DirectMessagesSection;
