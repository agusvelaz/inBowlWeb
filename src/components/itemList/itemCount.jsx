
import {CardActions, Button} from "@mui/material";
import { AddShoppingCart } from "@material-ui/icons";
import { useState } from "react";
import AlertStocking from "../alert/alertStocking"
import AlertAddCart from "../alert/alertAddCart"

import CartContext from "../../contexts/cartContext";
import { useContext } from "react";


import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles({
  buttonCart:{
    color: "#ffffff",
    margin: "10px",
    backgroundColor: '#000',
  },
});
export default function ItemCount({ stock, name, item }) {
    const classes = useStyles();
    const [quantity, setQuantity] = useState(1);
    const [errorMessage, setErrorMessage] = useState("")
    
    //context
    const { addProduct } = useContext(CartContext);
    
    
    
    return (
      
      <CardActions className="cardAction" sx={{padding:0}}>


        <div className="stockActions">
        <p>Cantidad: </p>
          <Button
            className={classes.buttonCart}

            sx={{ minWidth: 35 }}
            onClick={() => {
              quantity > 1 
                ? setQuantity(quantity - 1) 
                : setQuantity(1);
            }}
          >
            -
          </Button>
          <p>{quantity}</p>
          <Button
            className={classes.buttonCart}
            sx={{ minWidth: 35 }}
            onClick={() => {
              quantity < stock
                ? setQuantity(quantity + 1)
                : setErrorMessage("error")
                // alert(`*¡UPS!* - El producto ${name} cuenta con solo ${stock} unidades en stock`);
            }}
          >
            +
          </Button>
          <p>({stock} disponibles)</p>
        </div>
        
        <Button
          className="add  Cart"
          sx={{ marginTop: 3 , backgroundColor: '#000', width: 400}}
          variant="contained"
          disableElevation
          size="large"
          endIcon={<AddShoppingCart />}
          onClick={() => {
            console.log(quantity)
            
            addProduct(item, quantity)
            
            setQuantity(1)
            
            
          }}
        >
          Agregar al carrito
        </Button>
        {errorMessage &&  
          <AlertStocking stock={stock} name={name} message={setTimeout(() => {
            setErrorMessage("")
          }, 10000)}/>
          
        }
        {/* {addCartMessage &&
        <AlertAddCart stock={stock} name={name} message={setTimeout(() => {
          setCartMessage("")
        }, 10000)}/>
        } */}
      </CardActions> 
    );

  }

