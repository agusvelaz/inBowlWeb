import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";

import NavBar from "./components/navBar/navBar";
import ItemListContainer from "./components/itemListContainer/itemList";
import Home from "./components/home/myHome";
import ItemDetail from "./components/itemListContainer/itemDetail";

import CartContext from "./contexts/cartContext";
import data from "./dataItems";

import { StyledEngineProvider } from "@mui/material/styles";
// da prioridad a mis estilos

const dataItems = data.items;

const getData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!dataItems) reject(new Error("Error al devolver los datos"));

      resolve({ dataItems });
    }, 4000);
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

function App() {
  const [items, setItems] = useState([]);
  const [currentItems, setCurrentItems] = useState({});

  useEffect(() => {
    GetDataItems().then((resp) => {
      setItems(resp);
    });
  }, []);
  console.log(items);
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
                  itemsList={items}
                  setCurrentItems={setCurrentItems}
                />
              }
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
