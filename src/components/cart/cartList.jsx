import { Box, Typography, Divider, Button } from "@mui/material";
import CartEmpty from "./cartEmpty";
import ItemInCart from "./itemInCart";

import CartContext from "../../contexts/cartContext";
import { useContext, useEffect } from "react";

export default function CartList() {
  const { itemsInCart} =
    useContext(CartContext);
  console.log(itemsInCart);

  useEffect(() => {
    console.log(itemsInCart.length);
  }, []);
  return (
    <Box
      sx={{
        backgroundColor: "#0a0a0a",
        maxWidth: 1200,
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <Typography
        component="div"
        variant="h4"
        color="#ffffff"
        sx={{
          marginTop: 5,
          paddingTop: 5,
          marginBottom: 1,
          textAlign: "center",

          // margin:"auto"
        }}
      >
        Carrito
      </Typography>
      <Divider
        variant="middle"
        color="#7d6644"
        sx={{ maxWidth: 1100, marginLeft: "auto", marginRight: "auto" }}
      />
      
      {(itemsInCart.length == 0) ? <CartEmpty /> : <ItemInCart />}
     
    </Box>
  );
}
