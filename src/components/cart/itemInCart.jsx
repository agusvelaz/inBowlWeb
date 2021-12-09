import React, { useEffect, useState, useContext } from "react";
import { Box, Typography, Button, CardMedia } from "@mui/material";
import CartContext from "../../contexts/cartContext";
import CartCount from "./cartCount";

export default function ItemInCart() {
  const { itemsInCart, clearCart, setTotalQuantityInCart,totalQuantityInCart } = useContext(CartContext);
  //   const [itemsInCartShow, setItemsInCartShow] = useState([])

    useEffect(() => {
      
    }, []);
  console.log(itemsInCart);

  return (
    <>
      <Box>
        {itemsInCart?.map((item) => {
          return (
            <Box
              color="#ffffff"
              sx={{
                maxWidth: 1100,
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: 3,
                paddingBottom: 3,
                borderBottom: 1,
                display: "flex",
                justifyContent: "space-around",
                borderColor: "grey.500",
              }}
            >
              <Box>
                <CardMedia
                  component="img"
                  sx={{ width: 160, margin: "auto" }}
                  image={item.img}
                  alt="item img"
                />
              </Box>
              <Box
                sx={{
                  marginLeft: 3,
                  marginRight: 3,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  width: 500,
                  textAlign: "start",
                }}
              >
                <Typography component="div" variant="h4">
                  {item.name}
                </Typography>
                <Typography>{item.info}</Typography>
              </Box>
              <Box>
                <CartCount
                  stock={item.stock}
                  name={item.name}
                  quantity={item.quantity}
                  id={item.id}
                  price={item.price}
                />
              </Box>
            </Box>
          );
        })}
      </Box>
      <Box
        display="flex"
        margin="auto"
        sx={{
          justifyContent: "center",
          flexDirection: "row",
          alignContent: "center",
          alignItems: "center",
          marginTop: 3,
          paddingBottom:5,
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
          onClick={() => {
            clearCart();
          }}
        >
          Limpiar Carrito
        </Button>
        <Typography component="div" variant="h4" color="#ffffff">
          $total
        </Typography>
      </Box>
      <Box sx={{ paddingBottom:3,}}>
      <Button
          className="add  Cart"
          sx={{ backgroundColor: "#000"}}
          variant="contained"
        >FINALIZAR COMPRA</Button>
        </Box>
    </>
  );
}
