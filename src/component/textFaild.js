import * as React from "react";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";

export default function InputWithIcon({ Icone, placeholder }) {
  return (
    <Box sx={{ "& > :not(style)": { marginBlock: 2 } }}>
      <FormControl
        variant="standard"
        style={{
          backgroundColor: "#fff",
          padding: 5,
          borderRadius: 22,
          borderColor: "#EAEAEA",
          border: "solid",
          borderWidth: 1,
          width: "97%",
        }}
      >
        {/* <InputLabel htmlFor="input-with-icon-adornment">
          With a start adornment
        </InputLabel> */}
        <Input
          type={placeholder === "Password" && "password"}
          style={{ fontSize: 10 }}
          placeholder={placeholder}
          disableUnderline
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <Icone style={{ fontSize: 20 }} />
            </InputAdornment>
          }
        />
      </FormControl>
    </Box>
  );
}
