import * as React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import SearchIcon from "@mui/icons-material/Search";
import { grey } from "@mui/material/colors";

export default function SearchBox() {
  return (
    <Stack sx={{ width: 300 }} className="relative rounded-md">
      <SearchIcon
        className="absolute top-4 right-2"
        sx={{ color: grey[400] }}
      />
      <Autocomplete
        id="free-solo-demo"
        freeSolo
        options={Files.map((option) => option.title)}
        renderInput={(params) => (
          <TextField
            className="text-xs text-slate-500"
            {...params}
            label=" Search File or Folder"
          />
        )}
      />
    </Stack>
  );
}

const Files = [
  { title: "file 1" },
  { title: "file 2" },
  { title: "file 3" },
  { title: "file 4" },
  { title: "file 5" },
  { title: "file 6" },
  { title: "file 7" },
  { title: "file 8" },
  { title: "file 9" },
];
