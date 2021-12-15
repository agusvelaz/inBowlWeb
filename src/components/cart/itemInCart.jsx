import React, { useEffect, useState, useContext } from "react";
import { Box, Typography, Button, CardMedia } from "@mui/material";
import CartContext from "../../contexts/cartContext";
import CartCount from "./cartCount";

import { Link } from "react-router-dom";

export default function ItemInCart() {
  const {
    setItemsInCart,
    itemsInCart,
    clearCart,
    totalCartPrice,
    totalQuantity,
  } = useContext(CartContext);

  useEffect(() => {
    totalQuantity();
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
                borderColor: "#7d6644",
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
          justifyContent: "end",
          flexDirection: "row",
          alignContent: "center",
          alignItems: "center",
          marginTop: 3,
          paddingBottom: 2,
          marginRight: 8,
        }}
      >
        <Typography
          component="div"
          variant="h4"
          color="#ffffff"
          sx={{ margin: 1 }}
        >
          Total:
        </Typography>
        <Typography
          component="div"
          variant="h6"
          color="#ffffff"
          sx={{ margin: 1 }}
        >
          {`(${totalQuantity()} productos)`}
        </Typography>

        <Typography
          component="div"
          variant="h4"
          color="#ffffff"
          sx={{ margin: 1 }}
        >
          ${totalCartPrice}
        </Typography>
      </Box>

      <Box
        sx={{
          paddingBottom: 3,
          marginRight: 8,
          flexDirection: "column",
          display: "flex",
          alignItems: "flex-end",
        }}
      >
        <Button
          className="add  Cart"
          sx={{ backgroundColor: "#8d582ee6", width: 200 }}
          variant="contained"
          disableElevation
          onClick={() => {
            clearCart();
          }}
        >
          Limpiar Carrito
        </Button>
        <Link to="/cart/buyerData"  >
          <Button
            className="add  Cart"
            sx={{ backgroundColor: "#8d582ee6", width: 200, marginTop: 1 }}
            variant="contained"
            onClick={() => {
              setItemsInCart(itemsInCart);
            }}
            
          >
            CONTINUAR COMPRA
          </Button>
        </Link>
      </Box>
    </>
  );
}
