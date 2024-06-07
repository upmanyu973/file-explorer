import React from "react";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import CachedOutlinedIcon from "@mui/icons-material/CachedOutlined";
import { grey } from "@mui/material/colors";
import { Switch } from "@mui/material";
import Dropdown from "./Select";
import SearchBox from "./searchBox";

const Navbar = () => {
  const label = { inputProps: { "aria-label": "Auto Sync" } };

  return (
    <div className="border-gray-50 border-2 border-solid p-2 mt-2 mb-2 justify-between flex items-center">
      <div className="flex items-center gap-4">
        <span className="flex items-center gap-2 mr-2">
          <FileUploadOutlinedIcon
            sx={{ color: grey[700] }}
            className="cursor-pointer"
          />{" "}
          <span className="text-slate-500 text-s font-bold">
            Keep Local Path
          </span>
        </span>
        <span className="flex items-center gap-2 mr-2">
          <Switch {...label} defaultChecked size="small" />
          <span className="text-slate-500 text-s font-bold">Auto Sync</span>
        </span>
        <span className="flex items-center gap-2">
          <Dropdown />
          <CachedOutlinedIcon sx={{ color: grey[700] }} />
        </span>
      </div>
      <div className="flex items-center gap-4">
        <SearchBox />
      </div>
    </div>
  );
};

export default Navbar;
