
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";

import ItemCount from "./itemCount";


export default function ItemDetail(currentItems) {

  return (
    <div>
          <div>
            <CardMedia component="img" image={currentItems.img} alt="green iguana" />
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{ marginTop: 2 }}
            >
              ${currentItems.price}
            </Typography>

            <Typography gutterBottom variant="h5" component="div">
              {currentItems.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {currentItems.info}
            </Typography>

            <ItemCount stock={currentItems.stock} name={currentItems.name} />
          </div>
    </div>
  );
}
