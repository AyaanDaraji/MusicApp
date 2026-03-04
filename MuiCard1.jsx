import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function ImgMediaCard1() {
  return (
    <Card sx={{ maxWidth: 220 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuE872HfdPtzHKyztBKMVGw9VTRyXEWlNm-w&s"
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
          Artist
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Shanti devi
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"></Button>
      </CardActions>
    </Card>
  );
}
