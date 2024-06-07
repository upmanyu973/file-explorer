import React, { useState } from "react";
import initialStructure from "../data/fileStructure.json";
import { FileStructure, Folder, File } from "../types";
import Breadcrumbs from "./Breadcrumbs";
import FileTable from "./FileTable";
import Footer from "./Footer";
import Navbar from "./Navbar";

// Cast the imported JSON to the correct type
const fileStructure = initialStructure as unknown as FileStructure;

const FileBrowser: React.FC = () => {
  const [currentPath, setCurrentPath] = useState<string[]>(["app"]);
  const [currentFolder, setCurrentFolder] = useState<Folder>(
    fileStructure["app"]
  );

  const navigateToFolder = (folderPath: string[]) => {
    let folder: Folder | File = fileStructure[folderPath[0]];

    for (let i = 1; i < folderPath.length; i++) {
      if (folder.type === "folder") {
        folder = folder.children[folderPath[i]] as Folder;
      }
    }

    if (folder.type === "folder") {
      setCurrentFolder(folder);
    }
  };

  const handleFolderClick = (folderName: string) => {
    const newPath = [...currentPath, folderName];
    setCurrentPath(newPath);
    navigateToFolder(newPath);
  };

  const handleBreadcrumbClick = (index: number) => {
    const newPath = currentPath.slice(0, index + 1);
    setCurrentPath(newPath);
    navigateToFolder(newPath);
  };

  return (
    <div>
      <div className="pl-4 pr-4 mt-2">
        <Breadcrumbs path={currentPath} onNavigate={handleBreadcrumbClick} />
      </div>
      <Navbar />
      <FileTable
        files={currentFolder.children}
        onFolderClick={handleFolderClick}
      />
      <Footer />
    </div>
  );
};

export default FileBrowser;
