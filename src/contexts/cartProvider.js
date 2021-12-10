import { useState } from "react";
import CartContext from "./cartContext";
import { useContext, useEffect } from "react";

const Cart = (props) => {
  const [itemsInCart, setItemsInCart] = useState([]);
  const [totalQuantityInCart, setTotalQuantityInCart] = useState()
  const [totalCartPrice, setTotalCartPrice] = useState()

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
  //  FUNCION ACTUALIZAR CANTIDAD 
  const setNewQuantityItem = (idItem, quantity) => {
    const element = itemsInCart.find(item => item.id === idItem);
    element.quantity = quantity;
    console.log(itemsInCart)
  }

  //  FUNCION CANTIDAD/UNIDADES TOTALES
  const totalQuantity = () => {
    // const itemsInCartTotal =itemsInCart.reduce((suma, product) => suma + product.quantity, 0) 
   
    // setTotalQuantityInCart(itemsInCartTotal)
    let itemsInCartTotal = 0;
    itemsInCart.map(item =>{
      itemsInCartTotal = itemsInCartTotal + item.quantity;

    }  )
    return itemsInCartTotal;

    
};

  //  FUNCION PRECIO TOTAL CARRITO


  const totalCart = () => {
    const total =itemsInCart.reduce((suma, product) => suma + (product.quantity * product.price), 0) 
    console.log(total)
   
    setTotalCartPrice(total)
};


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
        clearCart,
        setNewQuantityItem,
        totalCart,
        totalCartPrice
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
export default Cart;
