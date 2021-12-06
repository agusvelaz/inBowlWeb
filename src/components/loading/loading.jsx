import Typography from "@mui/material/Typography";


export default function Loading(){
    console.log("Loading...");
    return (
        <div>
            <Typography
          component="div"
          variant="h6"
          color="#ffffff"
          sx={{
            marginTop: 3,
            marginBottom: 1,
            marginLeft: "auto",
            marginRight: "auto",
            textAlign: "initial",
            maxWidth: 1200,
            // margin:"auto"
          }}
        >
          CARGANDO
        </Typography>
        </div>
    )
}