import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";

import NavBar from "./components/navBar/navBar";
import ItemListContainer from "./components/itemListContainer/itemList";
import Home from "./components/home/myHome";
import ItemDetail from "./components/itemListContainer/itemDetail";

import data from "./dataItems";

import { StyledEngineProvider } from "@mui/material/styles";

// da prioridad a mis estilos



function App() {

  const [currentItems, setCurrentItems] = useState({});

  console.log(currentItems);
  return (
    <BrowserRouter>
      <div className="App">
        <StyledEngineProvider injectFirst>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/menu"
              element={
                <ItemListContainer
                  setCurrentItems={setCurrentItems}

                />
              }
            />
            <Route
              path="/category/:cat"
              element={<ItemListContainer
                // itemsList={items}

              />}
            />
            <Route
              path="/menu/:itemID"
              element={<ItemDetail currentItems={currentItems} />}
            />
            
            <Route path="/nosotros" element={<h1>Nosotros</h1>} />
          </Routes>
        </StyledEngineProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
