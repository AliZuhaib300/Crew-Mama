import React from "react";
import { Box } from "@mui/system";
import { Divider, Typography } from "@mui/material";
import DataDemo from "./DataDemo";

const AddCart = () => {
  return (
    <Box component="div">
      <Box component="div" sx={{ display: "flex" }}>
        <Typography variant="h3" sx={{ padding: "30px", marginBottom: 1 }}>
          Available Items
        </Typography>
      </Box>
      <Divider sx={{ marginLeft: "30px", marginRight: "30px" }} />

      <Box variant="div">
        <Box
          variant="div"
          sx={{ m: 5, display: "flex", flexDirection: "row", flexWrap: "wrap" }}
        >
          <DataDemo />
        </Box>
      </Box>
    </Box>
  );
};

export default AddCart;
