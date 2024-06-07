export interface File {
  type: "file";
  size: string;
}

export interface Folder {
  type: "folder";
  children: {
    [key: string]: Folder | File;
  };
}

export interface FileStructure {
  [key: string]: Folder;
}
