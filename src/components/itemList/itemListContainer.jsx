import ItemList from "./itemList";
import React, { useEffect, useState } from "react";

import NavBarCat from "../navBar/navCat";
import Loading from "../loading/loading";

//firebase
import { db } from "../../firebase/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
// firebase

const ItemListContainer = () => {
  const [itemsList, setItems] = useState([]);
  const [showItemList, setShowItemList] = useState([]);
  const [Loader, setLoader] = useState(true);

  useEffect(() => {
    setLoader(true)
    const itemsCollection = collection(db, "items");

    getDocs(itemsCollection).then((snapshot) => {
      const dataItems = snapshot.docs.map((doc) => ({id: doc.id,...doc.data()}));
      setItems(dataItems);
      setShowItemList(dataItems);
      // dataItems.map((doc) => console.log(doc));
    }).catch((error) => {

      console.log('Error al encontrar producto', error)

    }).finally(() => {

      setLoader(false)
    })
  }, []);

  return (
    <>
      <NavBarCat itemsList={itemsList} setShowItemList={setShowItemList} />
      {Loader ? <Loading /> :<ItemList itemsList={itemsList} showItemList={showItemList} />}
    </>
  );
};

export default ItemListContainer;
