import { Component } from 'react';

import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

class CartWidget  extends Component {
   
    
    render() { 
        return ( 
            <IconButton
              size="large"
              aria-label="show 0 new items in cart"
              color="inherit"
            >
              <Badge badgeContent={'0'} color="error">
                <ShoppingCartIcon/>
              </Badge>
            </IconButton>
         );
    }
}
 
export default CartWidget ;