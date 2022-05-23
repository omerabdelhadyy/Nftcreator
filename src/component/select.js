import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function BasicSelect() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ width: "30%", marginTop: 10 }}>
      <FormControl fullWidth>
        <InputLabel style={{ fontSize: 15 }} id="demo-simple-select-label">
          hekma Select
        </InputLabel>
        <Select
          //   variant="filled"
          style={{ fontSize: 15 }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="hekma Selectttt "
          onChange={handleChange}
        >
          <MenuItem style={{ fontSize: 15 }} value={10}>
            The unemployed person is not the one who does not perform a job
            only, the unemployed person is the one who performs a job in his
            capacity that he does better than him.
          </MenuItem>
          <MenuItem style={{ fontSize: 15 }} value={20}>
            A good soul is rewarded by a little politeness, and an evil soul is
            of no benefit to much etiquette
          </MenuItem>
          <MenuItem style={{ fontSize: 15 }} value={30}>
            A great woman is the one who teaches us how to love when we want to
            hate, how to laugh when we want to cry, and how to smile when it
            hurts
          </MenuItem>
          <MenuItem style={{ fontSize: 15 }} value={40}>
            If you are appointed to a command or position, then keep the wicked
            away from you, for all their faults are attributed to you.
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
