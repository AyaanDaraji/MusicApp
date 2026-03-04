import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function ImgMediaCard2() {
  return (
    <Card sx={{ maxWidth: 220 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://media.gettyimages.com/id/978178540/video/angry-grandmother-holding-chapati-roller.jpg?s=640x640&k=20&c=wHx3VepLYpNV6SarDx17XPp-84RXijXCyTN9KE2FPAw="
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
          Producer
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Kamala bhen
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"></Button>
      </CardActions>
    </Card>
  );
}
