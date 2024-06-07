import { Switch } from "@mui/material";
import React from "react";
import Pagination from "./Pagination";

const Footer = () => {
  const label = { inputProps: { "aria-label": "Auto Sync" } };
  return (
    <div className="border-gray-50 border-2 border-solid p-4 mt-2 justify-between flex items-center fixed bottom-0 w-full">
      <div className="flex items-center gap-4">
        <span className="flex items-center gap-2 mr-2">
          <Switch {...label} defaultChecked size="small" />
          <span className="text-slate-500 text-s font-bold xs">
            Dense padding
          </span>
        </span>
      </div>
      <div className="flex items-center gap-4">
        <Pagination />
      </div>
    </div>
  );
};

export default Footer;
