import "./ourTeam.css";
import ImgMediaCard1 from "./Mui_Cards/MuiCard1"
import ImgMediaCard2 from "./Mui_Cards/MuiCard2"
import ImgMediaCard3 from "./Mui_Cards/MuiCard3"
import ImgMediaCard4 from "./Mui_Cards/MuiCard4"



function OurTeam() { 
  return (
    <>
      <h1>Our Team</h1>
      <div className="cards">
        <ImgMediaCard1 />
        <ImgMediaCard2 />
        <ImgMediaCard3 />
        <ImgMediaCard4 />
      </div>
    </>
  );
}

export default OurTeam;
