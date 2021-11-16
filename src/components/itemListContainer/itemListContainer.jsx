import React, { useEffect, useState } from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@material-ui/core/styles";

import ItemCount from "./itemCount";
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

    }, 2000)
    
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
    <div>
      <Typography variant="h3" color="white" sx={{ margin: 2 }}>
        Menu
      </Typography>

      <div className="cardUl">
        {items &&
          items.map((i) => (
            <Card sx={{ maxWidth: 300, minWidth: 300 }} className="card">
              <CardMedia
                component="img"
                image="https://cdn.waso.tokyo/uploads/dish_item/image/246/w980_f50805e6-8882-4107-b11c-a98346e22833.jpg"
                alt="green iguana"
              />
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="div">
                  {i.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {i.info}
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ marginTop: 2 }}
                >
                  ${i.price}
                </Typography>
              </CardContent>

              <ItemCount stock={i.stock} name={i.name} />
            </Card>
          ))}
      </div>
    </div>
  );
}
