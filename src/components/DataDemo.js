import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, Grid } from "@mui/material";
//import { Link } from "react-router-dom";
import axios from "axios";

const DataDemo = () => {
  const [item, setItem] = useState([]);
  // Getting data from BackEnd
  const GetData = async () => {
    const result = await axios.get(
      "http://localhost:6060/api/get_online_products"
    );
    setItem(result.data);
  };

  // Post(send) data from FrontEnd
  const SendDetails = async (item) => {
    let result = await axios.post(
      "http://localhost:6060/api/cart/save_into_cart",
      item
    );
    console.log(result);
  };

  useEffect(() => {
    GetData();
  }, []);

  return (
    <>
      <Grid container spacing={7}>
        {item.map((curElem, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ width: "100%", borderRadius: "25px" }}>
              <CardMedia
                component="img"
                height="194"
                image={curElem.image}
                alt={curElem.title}
              />
              <CardHeader
                title={curElem.title}
                subheader={curElem.description}
                sx={{ fontSize: "35px" }}
              />
              <CardContent>
                <Typography
                  sx={{
                    fontFamily: "italic",
                    fontSize: "25px",
                    marginBottom: "15px",
                  }}
                >
                  price Rs {curElem.price}
                </Typography>

                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "brown",
                    borderRadius: "20px",
                    marginTop: "10px",
                    width: "170px",
                    textDecoration: "",
                  }}
                  onClick={() => SendDetails(curElem)}
                >
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default DataDemo;
