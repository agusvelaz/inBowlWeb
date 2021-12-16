import "./App.css";


import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";

import NavBar from "./components/navBar/navBar";
import ItemListContainer from "./components/itemList/itemListContainer";
import Home from "./components/home/myHome";
import ItemDetail from "./components/itemList/itemDetail";
import CartProvider from "./contexts/cartProvider";
import ItemAdded from "./components/cart/itemAdded";
import CartList from "./components/cart/cartList"
import BuyerData from "./components/cart/buyerData"
import Checkout from "./components/cart/checkout"

import Footer from "./components/footer/footer"

import { StyledEngineProvider } from "@mui/material/styles";
// da prioridad a mis estilos

function App() {
  const [currentItems, setCurrentItems] = useState({});

  console.log(currentItems);
  return (
    <BrowserRouter>

      <CartProvider>
        <div className="App">
          <StyledEngineProvider injectFirst>
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/menu"
                element={
                  <ItemListContainer setCurrentItems={setCurrentItems} />
                }
              />
              <Route path="/category/:cat" element={<ItemListContainer />} />
              <Route
                path="/menu/:id"
                element={<ItemDetail />}
              />
              <Route
                path="/added/:id"
                element={<ItemAdded  />}
              />

              <Route path="/nosotros" element={<h1>Nosotros</h1>} />

              <Route
                path="/cart"
                element={
                  <CartList/>
                }
              />
              <Route path="/cart/buyerData" element={<BuyerData/>} />
              <Route path="/cart/checkOut" element={<Checkout/>} />
            </Routes>
            <Footer/>
          </StyledEngineProvider>
        </div>
      </CartProvider>
  
    </BrowserRouter>
  );
}

export default App;
