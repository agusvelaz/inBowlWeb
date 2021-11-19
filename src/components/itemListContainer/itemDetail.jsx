import React, { useEffect, useState } from "react";
import data from "../../dataItems";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";

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

export default function ItemDetail(idItem) {
  const [itemsDetail, setItems] = useState();

  useEffect(() => {
    GetDataItems().then((resp) => {
      setItems(resp);
    });
  }, []);
  console.log(itemsDetail);
  console.log(idItem.idItem);

  const itemDetailFilt =
    itemsDetail && itemsDetail.filter((item) => item.id == idItem.idItem);

  console.log(itemDetailFilt);
  return (
    <div>
      {itemDetailFilt &&
        itemDetailFilt.map((item) => (
          <div>

            <CardMedia component="img" image={item.img} alt="green iguana" />
            <Typography variant="body2" color="text.secondary">
              {item.info}
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ marginTop: 2 }}
            >
              ${item.price}
            </Typography>
          </div>
        ))}
    </div>
  );
}
