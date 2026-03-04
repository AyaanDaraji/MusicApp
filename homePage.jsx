import "./home.css";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";
import { FaSpotify } from "react-icons/fa";

function HomePage() {
  return (
    <>
      <div className="Body-home">
        <h3>About this website</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
          ducimus dolore? Incidunt laborum ea aut a repellendus quis voluptates
          rem aspernatur molestias. Dolores impedit laboriosam placeat sint
          voluptates aliquam natus!Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Porro, ducimus dolore? Incidunt laborum ea aut a
          repellendus quis voluptates rem aspernatur molestias.
        </p>

        <div className="Icons-Box">
          <a href="https://www.instagram.com/" className="social-Link" >
            <FaInstagram size={40} color="grey" />
            <span className="hover-text">Instagram</span>
          </a>

          <a href="https://x.com/" className="social-Link">
            <CiTwitter size={40} color="grey" />
            <span className="hover-text">Twitter</span>
          </a>

          <a href="https://www.youtube.com/" className="social-Link">
            <CiYoutube size={40} color="grey" />
            <span className="hover-text">YouTube</span>
          </a>

          <a href="https://open.spotify.com/" className="social-Link">
            <FaSpotify size={40} color="grey" />
            <span className="hover-text">Spotify</span>
          </a>
        </div>

        <hr />
        <h3>terms & conditions</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
          ducimus dolore? Incidunt laborum ea aut a repellendus quis voluptates
          rem aspernatur molestias. impedit laboriosam placeat sint
          voluptates aliquam natus!Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Porro, ducimus dolore? Incidunt laborum ea aut a
          repellendus quis voluptates rem aspernatur molestias. Dolores impedit
          laboriosam placeat sint voluptates aliquam natus!Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Porro, ducimus dolore? Incidunt
          laborum ea aut a repellendus quis voluptates rem aspernatur molestias.
          Dolores impedit laboriosam placeat sint voluptates aliquam natus!Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Porro, ducimus
          dolore? Incidunt laborum ea aut a repellendus quis voluptates rem
          aspernatur molestias. Dolores impedit laboriosam placeat sint
          voluptates aliquam natus!
        </p>
        <h4>
          <Link to="/privacyPara">
            Clich here to see full terms and Conditions
          </Link>
        </h4>

        <hr />
        <h3>privacy policy of this website</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
          ducimus dolore? Incidunt laborum ea aut a repellendus quis voluptates
          rem aspernatur molestias. Dolores impedit laboriosam placeat sint
          voluptates aliquam natus!Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Porro, ducimus dolore? Incidunt laborum ea aut a
          repellendus quis voluptates rem aspernatur molestias. Dolores impedit
          laboriosam placeat sint voluptates aliquam natus!Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Porro, ducimus dolore? Incidunt
          laborum ea aut a repellendus quis voluptates rem aspernatur molestias.
          Dolores impedit laboriosam placeat sint voluptates aliquam natus!Lorem
          ipsum dolor sit amet consectetur{" "}
        </p>

        <h4>
          <Link to="/terms">
            Clich here to see full Privacy policy of this website{" "}
          </Link>
        </h4>
      </div>
    </>
  );
}

export default HomePage;
