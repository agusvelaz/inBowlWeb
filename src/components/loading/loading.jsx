import Typography from "@mui/material/Typography";


export default function Loading(){
    console.log("Loading...");
    return (
        <div>
            <Typography
          component="div"
          variant="h1"
          color="#ffffff"
          sx={{
            marginTop: 5,
            marginBottom: 1,
            marginLeft: "auto",
            marginRight: "auto",
            textAlign: "center",
            maxWidth: 1200,
            // margin:"auto"
          }}
        >
          CARGANDO
        </Typography>
        </div>
    )
}