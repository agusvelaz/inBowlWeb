import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";

import ItemCount from "./itemCount";

import { makeStyles } from "@material-ui/core/styles";
import Box from "@mui/material/Box";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import ItemContext from "../../contexts/itemContext";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { useParams } from "react-router";

const useStyles = makeStyles({
  cardItem: {
    backgroundColor: "#011013",
    color: "#ffffff",
    display: "flex",
  },
  linksRef: {
    color: "white",
    textDecoration: "none",
  },
});

export default function ItemDetail() {
  const classes = useStyles();
  let params = useParams();
  console.log(params);
  // let {id} = useParams();

  const { getDataItems } = useContext(ItemContext);
  const [itemsList, setItems] = useState([]);
  const [showItemFilter, setShowItemFilter] = useState([]);

  useEffect(() => {
    getDataItems().then((resp) => {
      setItems(resp);
    });

  }, []);

  // function itemFilter() {
  //   itemsList.map((item) => {
  //     if (item.id == params.id) {
  //       setShowItemFilter(item);
  //       console.log(item);
  //     }
  //   });
  // }

  return (
    <Box>
      <Link to="/menu" className={classes.linksRef}>
        <Typography
          component="div"
          variant="h6"
          color="#ffffff"
          sx={{
            marginTop: 3,
            marginBottom: 1,
            marginLeft: { sm: 20, xl: 35 },
            marginRight: { sm: 20, xl: 35 },
            textAlign: "initial",
          }}
        >
          👈Volver al menu
        </Typography>
      </Link>
      {itemsList?.map((item) => {
        if (item.id == params.id) {
          setShowItemFilter(item);
          console.log(item);
        }
      })}
      {/* <Card
        sx={{
          marginTop: 0,
          marginBottom: 2,
          marginLeft: { sm: 20, xl: 35 },
          marginRight: { sm: 20, xl: 35 },
        }}
        className={classes.cardItem}
      >
        <CardMedia
          component="img"
          sx={{ width: 500 }}
          image={currentItems.img}
          alt="item img"
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h4" color="#ffffff">
              {currentItems.name}
            </Typography>
            <Typography variant="h5" color="#ffffff" component="div">
              ${currentItems.price}
            </Typography>
          </CardContent>
          <Typography>{currentItems.info}</Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ItemCount stock={currentItems.stock} name={currentItems.name} />
          </Box>
        </Box>
      </Card> */}
    </Box>
  );
}
