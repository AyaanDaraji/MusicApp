import "./SubmitMusic.css";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchSubmitMusic, addSubmitMusic } from "../slice/SubmitMusicSlice";

function SubmitMusic() {
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.submitMusic || { status: "idle" });

  const [acceptedTC, setAcceptedTC] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState(null);

  const [form, setForm] = useState({
    artist: "",
    title: "",
    year: "",
    cover: "",
    Album_Photo: "",
    Isrc: "",
    Production_stage: "",
    Lyrics: "",
    Instagram: "",
    Sound_cloud: "",
    Website: "",
    Twitter: "",
    Spotify: "",
    Facebook: "",
  });

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchSubmitMusic());
    }
  }, [status, dispatch]);

  const handleUpload = () => {
    if (!acceptedTC) {
      alert("Accept the terms and conditions before uploading.");
      return;
    }

    const dataToSend = {
      ...form,
      file: uploadedFiles ? uploadedFiles.name : [],
    };

    dispatch(addSubmitMusic(dataToSend));

    alert("Music uploaded successfully!");

    setForm({
      artist: "",
      title: "",
      year: "",
      cover: "",
      Album_Photo: "",
      Isrc: "",
      Production_stage: "",
      Lyrics: "",
      Instagram: "",
      Sound_cloud: "",
      Website: "",
      Twitter: "",
      Spotify: "",
      Facebook: "",
    });

    setUploadedFiles(null);
    setAcceptedTC(false);
  };

  return (
    <>
      <h1>Submit music</h1>

      <div
        className={`upload_Music ${uploadedFiles ? "uploaded" : ""}`}
        onClick={() => document.getElementById("fileInput").click()}
      >
        <p>
          {uploadedFiles ? (
            <>
              {uploadedFiles.name}
              <button
                className="DeleteBtn1"
                onClick={(e) => {
                  e.stopPropagation();
                  setUploadedFiles(null);
                }}
              >
                Delete
              </button>
            </>
          ) : (
            <img
              src="https://cdn-icons-png.flaticon.com/512/126/126477.png"
              className="upload-icon"
              alt="upload"
            />
          )}
        </p>

        <input
          type="file"
          id="fileInput"
          hidden
          onChange={(e) => setUploadedFiles(e.target.files[0])}
        />
      </div>

      <div className="upload_Music">
        <p>To upload Audio click on the box or drop files here!</p>
      </div>

      <div className="Submit_Box">
        <div className="Input-1">
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              placeholder="Artist name"
              value={form.artist}
              onChange={(e) => setForm({ ...form, artist: e.target.value })}
            />
            <input
              placeholder="Artist song title"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
            />
            <input
              placeholder="Release Date (YYYY-M-D)"
              value={form.year}
              onChange={(e) => setForm({ ...form, year: e.target.value })}
            />
            <input
              placeholder="Record label (optional)"
              value={form.cover}
              onChange={(e) => setForm({ ...form, cover: e.target.value })}
            />
          </form>
        </div>

        <div className="Input-2">
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              placeholder="Album Photo"
              value={form.Album_Photo}
              onChange={(e) => setForm({ ...form, Album_Photo: e.target.value })}
            />
            <input
              placeholder="Isrc (optional)"
              value={form.Isrc}
              onChange={(e) => setForm({ ...form, Isrc: e.target.value })}
            />
            <input
              placeholder="Production stage"
              value={form.Production_stage}
              onChange={(e) =>
                setForm({ ...form, Production_stage: e.target.value })
              }
            />
            <input
              placeholder="Lyrics (Optional)"
              value={form.Lyrics}
              onChange={(e) => setForm({ ...form, Lyrics: e.target.value })}
            />
          </form>
        </div>
      </div>

      <hr />

      <h1>Artist Social</h1>

      <div className="Submit_Box2">
        <div className="Input-3">
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              placeholder="Instagram"
              value={form.Instagram}
              onChange={(e) => setForm({ ...form, Instagram: e.target.value })}
            />
            <input
              placeholder="Sound cloud"
              value={form.Sound_cloud}
              onChange={(e) => setForm({ ...form, Sound_cloud: e.target.value })}
            />
            <input
              placeholder="Website"
              value={form.Website}
              onChange={(e) => setForm({ ...form, Website: e.target.value })}
            />
          </form>
        </div>

        <div className="Input-4">
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              placeholder="Twitter"
              value={form.Twitter}
              onChange={(e) => setForm({ ...form, Twitter: e.target.value })}
            />
            <input
              placeholder="Spotify"
              value={form.Spotify}
              onChange={(e) => setForm({ ...form, Spotify: e.target.value })}
            />
            <input
              placeholder="Facebook"
              value={form.Facebook}
              onChange={(e) => setForm({ ...form, Facebook: e.target.value })}
            />
          </form>
        </div>
      </div>

      <div className="Submit_Box3">
        <input
          type="checkbox"
          checked={acceptedTC}
          onChange={(e) => setAcceptedTC(e.target.checked)}
        />
        <label className="Wrap">
          I read and accepted the tearms and conditions
        </label>

        <button onClick={handleUpload} className="button-SubmitArt">
          Upload MP3
        </button>
      </div>
    </>
  );
}

export default SubmitMusic;

