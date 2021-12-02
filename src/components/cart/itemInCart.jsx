import React, { useEffect, useState,  useContext  } from "react";
import { Box, Typography, Button } from "@mui/material";
import CartContext from "../../contexts/cartContext";


export default function ItemInCart() {
  const { itemsInCart } = useContext(CartContext);
//   const [itemsInCartShow, setItemsInCartShow] = useState([])

//   useEffect(() => {
//     setItemsInCartShow(itemsInCart);
//   }, []);
  console.log(itemsInCart);

  return (
    <Box>
      {itemsInCart?.map((item) => {
        <h1>{item.name}</h1>;
      })}
      )
    </Box>
  );
}
