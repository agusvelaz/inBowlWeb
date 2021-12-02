import { useState } from "react";
import CartContext from "./cartContext";
import { useContext, useEffect } from "react";

const Cart = ( props ) => {

  const [itemsInCart, setItemsInCart] = useState([]);


  //  FUNCION AGREGA AL CARRITO
  const addProduct = (item, quantity) => {
    // Object.defineProperty(item, "quantity", {value: 0});
    const cartId = [itemsInCart]?.map(product => product.id)
    if (item.id == cartId) {
      alert(`"${item.name}" ya se encuentra en tu carrito, puede dirigirte alli si deseas modificar la cantidad `)
    }else{
      Object.defineProperty(item, "quantity", {value: quantity});
      setItemsInCart(item)
      alert(`Agregaste "${item.name}" x${item.quantity} unidades a tu carrito`)
    }

  };
  console.log(itemsInCart);

  return (
    <CartContext.Provider
      value={{
        setItemsInCart,
        addProduct,
        itemsInCart,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
export default Cart;
