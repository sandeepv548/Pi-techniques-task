import * as React from "react";
import Box from "@mui/material/Box";

import TextField from "@mui/material/TextField";

import Styled from "./styles";

export default function DynamicText(props) {


  return (
    <Styled>
    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
    
        <TextField
          id="standard-start-adornment"
          sx={{ m: 1, width: "25ch" }}
          size="small"
          {...props}
        />
    </Box>
    </Styled>
    
  );
}
