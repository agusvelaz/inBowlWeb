
import {CardActions, Button} from "@mui/material";
import { AddShoppingCart } from "@material-ui/icons";
import { useState } from "react";
import AlertStocking from "../alert/alertStocking"
import AlertAddCart from "../alert/alertAddCart"


import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles({
  buttonCart:{
    color: "#ffffff",
    margin: "10px",
    backgroundColor: '#000',
  },
});
export default function ItemCount({ stock, name }) {
    const classes = useStyles();
    const [initial, setInitial] = useState(1);
    const [errorMessage, setErrorMessage] = useState("")
    const [addCartMessage, setCartMessage] = useState("")
    console.log(errorMessage)
    
    
    return (
      
      <CardActions className="cardAction">


        <div className="stockActions">
          <Button
            className={classes.buttonCart}

            sx={{ minWidth: 35 }}
            onClick={() => {
              initial > 1 
                ? setInitial(initial - 1) 
                : setInitial(1);
            }}
          >
            -
          </Button>
          <p>{initial}</p>
          <Button
            className={classes.buttonCart}
            sx={{ minWidth: 35 }}
            onClick={() => {
              initial < stock
                ? setInitial(initial + 1)
                : setErrorMessage("error")
                // alert(`*¡UPS!* - El producto ${name} cuenta con solo ${stock} unidades en stock`);
            }}
          >
            +
          </Button>
        </div>
        <p>({stock} disponibles)</p>
        <Button
          className="add  Cart"
          sx={{ margin: 3 , backgroundColor: '#000'}}
          variant="contained"
          disableElevation
          endIcon={<AddShoppingCart />}
          onClick={() => {
            console.log(initial)
            setCartMessage("AddCart")
            setInitial(1)
            
          }}
        >
          Add to Cart
        </Button>
        {errorMessage &&  
          <AlertStocking stock={stock} name={name} message={setTimeout(() => {
            setErrorMessage("")
          }, 10000)}/>
          
        }
        {addCartMessage &&
        <AlertAddCart stock={stock} name={name} message={setTimeout(() => {
          setCartMessage("")
        }, 10000)}/>
        }
      </CardActions> 
    );

  }

