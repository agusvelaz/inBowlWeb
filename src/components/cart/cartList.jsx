import { Box, Typography, Divider } from "@mui/material";
import CartEmpty from "./cartEmpty";
import ItemInCart from "./itemInCart"

import CartContext from "../../contexts/cartContext";
import { useContext } from "react";

export default function CartList() {
  // if cartproduct ? return cartproducts : return cartvacio

  const { itemsInCart } = useContext(CartContext);
  console.log(itemsInCart);
  return (
    <Box
      sx={{
        backgroundColor: "#011013",
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
        color="#ffffff"
        sx={{ maxWidth: 1100, marginLeft: "auto", marginRight: "auto" }}
      />
      <ItemInCart/>
      {/* {itemsInCartCount ?<CartEmpty /> : <h1>soy yo</h1> } */}
    </Box>
  );
}
