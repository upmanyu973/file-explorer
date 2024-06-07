import React from "react";
import FolderIcon from "@mui/icons-material/Folder";
import { blue, yellow } from "@mui/material/colors";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";

interface FileTableProps {
  files: { [key: string]: any };
  onFolderClick: (name: string) => void;
}

const FileTable: React.FC<FileTableProps> = ({ files, onFolderClick }) => {
  return (
    <table className="min-w-full bg-white">
      <thead className="bg-gray-200">
        <tr>
          <th className="text-left py-2 px-4">Name</th>
          <th className="text-left py-2 px-4">Type</th>
          <th className="text-left py-2 px-4">Size</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(files).map((key) => (
          <tr key={key} className="border-t">
            <td className="py-2 px-4">
              {files[key].type === "folder" ? (
                <span
                  className="text-blue-500 cursor-pointer"
                  onClick={() => onFolderClick(key)}
                >
                  <FolderIcon sx={{ color: yellow[500] }} /> {key}
                </span>
              ) : (
                <span>
                  {" "}
                  <DescriptionOutlinedIcon sx={{ color: blue[300] }} /> {key}
                </span>
              )}
            </td>
            <td className="py-2 px-4">{files[key].type}</td>
            <td className="py-2 px-4">{files[key].size || "-"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default FileTable;
