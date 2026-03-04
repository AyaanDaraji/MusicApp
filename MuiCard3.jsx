import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function ImgMediaCard3() {
  return (
    <Card sx={{ maxWidth: 220 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://live.staticflickr.com/2255/2332061049_95c2707eaf_b.jpg"
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
          Song writer
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Ram prakash mishra
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"></Button>
      </CardActions>
    </Card>
  );
}
