import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function Dropdown() {
  const [min, setMin] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setMin(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 100 }}>
      <FormControl fullWidth size="small">
        <InputLabel id="demo-simple-select-label">15 Mins</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={min}
          label="Minutes"
          onChange={handleChange}
        >
          <MenuItem value={10}> 10 Mins</MenuItem>
          <MenuItem value={15}>15 Mins</MenuItem>
          <MenuItem value={20}>20 Mins</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
