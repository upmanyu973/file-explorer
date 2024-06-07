import React from "react";
import { Breadcrumbs as MuiBreadcrumbs, Link, Typography } from "@mui/material";

interface BreadcrumbsProps {
  path: string[];
  onNavigate: (index: number) => void;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ path, onNavigate }) => {
  return (
    <MuiBreadcrumbs aria-label="breadcrumb" className="pl-2">
      {path.map((folder, index) =>
        index < path.length - 1 ? (
          <Link
            key={index}
            className="text-blue-500 cursor-pointer"
            style={{ fontWeight: "600" }}
            onClick={() => onNavigate(index)}
          >
            {folder}
          </Link>
        ) : (
          <Typography
            style={{ fontWeight: "600" }}
            key={index}
            className="text-blue-500 cursor-pointer"
          >
            {folder}
          </Typography>
        )
      )}
    </MuiBreadcrumbs>
  );
};

export default Breadcrumbs;
