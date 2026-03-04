import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function ImgMediaCard4() {
  return (
    <Card sx={{ maxWidth: 220 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkqgg35tkjeRk8q65zgvyqB3H-Qg456GYfMg&s"
        sx={{
          height: 200,
          objectFit: "cover",
        }}
      />
      <CardContent
        sx={{
          height: 10,
        }}
      >
        <Typography gutterBottom variant="h5" component="div">
          Singer
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Nanne miya
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"></Button>
      </CardActions>
    </Card>
  );
}
