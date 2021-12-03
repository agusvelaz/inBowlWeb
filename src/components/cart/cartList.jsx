import { Box, Typography, Divider, Button } from "@mui/material";
import CartEmpty from "./cartEmpty";
import ItemInCart from "./itemInCart";

import CartContext from "../../contexts/cartContext";
import { useContext, useEffect } from "react";

export default function CartList() {
  // if cartproduct ? return cartproducts : return cartvacio

  const { itemsInCart, totalQuantity, totalQuantityInCart } =
    useContext(CartContext);
  console.log(itemsInCart);

  useEffect(() => {
    console.log(itemsInCart);
  }, []);
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
      <ItemInCart />
      {/* {itemsInCartCount ?<CartEmpty /> : <h1>soy yo</h1> } */}
      <Box
        display="flex"
        margin="auto"
        sx={{
          justifyContent: "center",
          flexDirection: "row",
          alignContent: "center",
          alignItems: "center",
          marginTop: 3,
        }}
      >
        <Typography component="div" variant="h4" color="#ffffff">
          Total :
        </Typography>
        <Typography component="div" variant="h4" color="#ffffff">
          {totalQuantityInCart} productos
        </Typography>
        <Button
          className="add  Cart"
          sx={{ backgroundColor: "#000" }}
          variant="contained"
          disableElevation
          // onClick={() => {
          //   deleteItemCart(id);
          // }}
        >
          Limpiar Carrito
        </Button>
        <Typography component="div" variant="h4" color="#ffffff">
          $total
        </Typography>
      </Box>
    </Box>
  );
}
