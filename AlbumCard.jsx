import { useDispatch } from "react-redux";
import { deleteAlbum } from "../slice/SubmitMusicSlice";
import { deleteArt } from "../slice/SubmitArtSlice";
import "./card.css";
import { FiMusic } from "react-icons/fi";
import { PiDiscDuotone } from "react-icons/pi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useState } from "react";

function AlbumCard({ SubmitMusic, SubmitArt }) {
  const dispatch = useDispatch();
  const [menuOpen, setMenuOpen] = useState(false);

  const data = SubmitMusic || SubmitArt;
  if (!data) return null;

  const isMusic = !!SubmitMusic;

  const artistName = isMusic
    ? data.artist || "Unknown Artist"
    : data.artistName || "Unknown Artist";

  const title = isMusic
    ? data.title || "No Title"
    : data.artType || "No Art Type";

  const handleDelete = () => {
    isMusic ? dispatch(deleteAlbum(data.id)) : dispatch(deleteArt(data.id));
  };

  return (
    <div className="card-mainBox">
      <div className="album-card">
        <div className="menu-container">
          <BsThreeDotsVertical
            size={20}
            className="menu-icon"
            onClick={() => setMenuOpen(!menuOpen)}
          />

          {menuOpen && (
            <div className="dropdown-menu">
              <button className="Delete_ButtonCard" onClick={handleDelete}>
                Delete
              </button>
            </div>
          )}
        </div>

        <div className="album-image">
          {isMusic ? (
            <FiMusic size={150} color="#C7C7C7" />
          ) : (
            <img src={data.image} alt="art" className="art-image" />
          )}
        </div>
      </div>

      <h4 className="text_Card">{artistName}</h4>

      <h5 className="text_Card">
        <PiDiscDuotone size={15} />
        {title}
      </h5>
    </div>
  );
}

export default AlbumCard;
