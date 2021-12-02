import React, { useReducer } from "react";
import data from "../dataItems";
import ItemContext from "./itemContext"



const dataItems = data.items;

const ItemState = (props) => {
  const getData = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!dataItems) reject(new Error("Error al devolver los datos"));

        resolve({ dataItems });
      }, 1500);
    });
  };

  async function getDataItems() {
    try {
      const dataItemsObj = await getData();
      return dataItemsObj.dataItems;
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <ItemContext.Provider
      value={{
        getDataItems,
      }}
    >
      {props.children}
    </ItemContext.Provider>
  );
};
export default ItemState;
