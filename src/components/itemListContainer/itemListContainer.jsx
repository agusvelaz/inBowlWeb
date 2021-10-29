import { Component } from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

class ItemListContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            allItems: [ 'Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5']
        };
    }
    
    render(){
        const items = this.state.allItems.map( i => (
            <Card sx={{ maxWidth: 345 }} className="card" >
            {/* <CardMedia
                component="img"
                height="140"
                image="/static/images/cards/contemplative-reptile.jpg"
                alt="green iguana"
            /> */}
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {i}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
            {/* <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions> */}
            </Card>
        ))
        return( 
            <div>
                <h1>Products available</h1>
                <ul className="cardUl"> {items}</ul>
            </div>
        
        ); 
    }
    
}

export default ItemListContainer

