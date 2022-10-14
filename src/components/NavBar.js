import { AppBar, Badge, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Link } from "react-router-dom";
import axios from "axios";

const NavBar = () => {
  const [item, setItem] = useState([]);
  // Getting data from BackEnd
  const GetCartItems = async () => {
    const result = await axios.get(
      "http://localhost:6060/api/numbers/total_products"
    );
    setItem(result.data[0].count);
  };

  useEffect(() => {
    GetCartItems();
  });

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "darkorange" }}>
        <Toolbar sx={{ height: "90px" }}>
          <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1, fontWeight: 1000 }}
          >
            Crew MAMA
            <Typography
              sx={{
                fontStyle: "italic",
                fontSize: 15,
              }}
            >
              The good one
            </Typography>
          </Typography>
          <Link to="/cart">
            <Badge color="secondary" badgeContent={item}>
              <AddShoppingCartIcon sx={{ ml: 5 }} />
            </Badge>
            ;
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
