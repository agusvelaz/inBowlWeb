import React, { useEffect, useState } from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
import { makeStyles } from "@material-ui/core/styles";
import {Container, Box} from '@mui/material';

import ItemCount from "./itemCount";
import ItemDetail from "./itemDetail";
import data from "../../dataItems";

const useStyles = makeStyles({
  cardContent: {
    padding: 0,
  },
});
const dataItems = data.items;

const getData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!dataItems) reject(new Error("Error al devolver los datos"));

      resolve({ dataItems });
    }, 2000);
  });
};

async function GetDataItems() {
  try {
    const dataItemsObj = await getData();
    return dataItemsObj.dataItems;
  } catch (err) {
    console.log(err);
  }
}

export default function ItemListContainer() {
  const classes = useStyles();
  const [items, setItems] = useState();

  useEffect(() => {
    GetDataItems().then((resp) => {
      setItems(resp);
    });
  }, []);
  console.log(items);

  return (

      <Box fixed bgcolor='primary.main'>
      <Typography variant="h3" color="white" sx={{ paddingTop: 5 }}>
        Menu
      </Typography>
      <div className="cardUl">
        {items &&
          items.map((i) => (
            <Card sx={{ maxWidth: 300, minWidth: 300 }} className="card">
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="div">
                  {i.name}
                </Typography>
                <ItemDetail idItem={i.id} />
              </CardContent>

              <ItemCount stock={i.stock} name={i.name} />
            </Card>
          ))}
      </div>
      </Box>

  );
}
