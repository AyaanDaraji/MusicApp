import "./submission.css";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchSubmitMusic } from "../slice/SubmitMusicSlice";
import { fetchSubmitArt } from "../slice/SubmitArtSlice";
import AlbumCard from "./AlbumCard";
import { FaInstagram } from "react-icons/fa";
import { CiMusicNote1 } from "react-icons/ci";

function Submission() {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState("music");

  const { items: SubmitMusic = [], status: musicStatus } =
    useSelector((state) => state.submitMusic || {});

  const { items: SubmitArt = [], status: artStatus } =
    useSelector((state) => state.submitArt || {});

  useEffect(() => {
    dispatch(fetchSubmitMusic());
    dispatch(fetchSubmitArt());
  }, [dispatch]);

  return (
    <>
      <h2>My Submission</h2>

      <div className="submission-Div">
        
        <div className="Slide-buttons">
          <button
            className="Slide-Buttons"
            onClick={() => setActiveTab("music")}
          >
            <CiMusicNote1 size={20} /> Music
          </button>

          <button
            className="Slide-Buttons"
            onClick={() => setActiveTab("art")}
          >
            <FaInstagram size={20} /> Art
          </button>
        </div>

        <hr className="Line-tag" />

        <div className="Display-cards">

          {activeTab === "music" && (
            <>
              {SubmitMusic.length === 0 ? (
                <div className="No_ItemBox">
                  <img
                    src="https://cdn-icons-png.flaticon.com/256/6598/6598519.png"
                    width="120"
                    height="120"
                    alt="No submissions"
                  />
                  <h3>You have not Submitted music yet</h3>
                  <p>Click to submit</p>
                  <Link to="/submitMusic">
                    <button className="special">Submit Music</button>
                  </Link>
                </div>
              ) : (
                SubmitMusic.map((album) => (
                  <AlbumCard key={album.id} SubmitMusic={album} />
                ))
              )}
             
            </>
          )}

          {activeTab === "art" && (
            <>
              {SubmitArt.length === 0 ? (
                <>
                  <img
                    src="https://cdn-icons-png.flaticon.com/256/6598/6598519.png"
                    width="120"
                    height="120"
                    alt="No submissions"
                  />
                  <h3>You have not Submitted art yet</h3>
                  <p>Click to submit</p>
                  <Link to="/SubmitArt">
                    <button className="special">Submit Art</button>
                  </Link>
                </>
              ) : (
                SubmitArt.map((album) => (
                  <AlbumCard key={album.id} SubmitArt={album} />
                ))
              )}
            </>
          )}

        </div>
      </div>
    </>
  );
}

export default Submission;