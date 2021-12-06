import { useState } from "react";
import CartContext from "./cartContext";
import { useContext, useEffect } from "react";

const Cart = (props) => {
  const [itemsInCart, setItemsInCart] = useState([]);
  const [totalQuantityInCart, setTotalQuantityInCart] = useState()

  console.log(itemsInCart);
  //  FUNCION AGREGA AL CARRITO
  const addProduct = (item, quantity) => {
    const isInCart = itemsInCart.find((i) => i.id === item.id);
    if (isInCart != null) {
      alert(
        `"${item.name}" ya se encuentra en tu carrito, puede dirigirte alli si deseas modificar la cantidad `
      );
    } else {
      item.quantity = quantity;
      setItemsInCart([...itemsInCart, item]);
      alert(`Agregaste "${item.name}" x${item.quantity} unidades a tu carrito`);
    }
  };
  //  FUNCION BORRAR ITEM DEL CARRITO
  const deleteItemCart = (idItem) => {
    const isInCart = itemsInCart.find((i) => i.id === idItem);

    if (isInCart != null) {
      const newCart = itemsInCart.filter((cartItem) => cartItem.id !== idItem);
      setItemsInCart(newCart);
    }
  };

  //  FUNCION CANTIDAD/UNIDADES TOTALES
  const totalQuantity = () => {
    const totalCount=0
    
    // totalCount = (itemsInCart.reduce((count, prod) => count + prod.quantity, 0));

    setTotalQuantityInCart(totalCount);
    console.log(totalCount)
};

  //  FUNCION PRECIO TOTAL CARRITO


  //  FUNCION LIMPIAR CARRITO
  const clearCart = () => {
    setItemsInCart([]);

};
  console.log(itemsInCart);
  return (
    <CartContext.Provider
      value={{
        setItemsInCart,
        addProduct,
        deleteItemCart,
        itemsInCart,
        totalQuantity,
        totalQuantityInCart,
        clearCart
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
export default Cart;
