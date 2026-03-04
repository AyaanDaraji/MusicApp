import "./SubmitArt.css";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchSubmitArt, addSubmitArt } from "../slice/SubmitArtSlice";

function SubmitArt() {
  const dispatch = useDispatch();
  const { status } = useSelector(
    (state) => state.submitArt || { status: "idle" }
  );

  const [uploadedFiles, setUploadedFiles] = useState(null);
  const [acceptedTC, setAcceptedTC] = useState(false);

  const [form, setForm] = useState({
    artistName: "",
    artType: "",
    creditUrl: "",
    Instagram: "",
    Facebook: "",
    Twitter: "",
    Website: "",
  });

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchSubmitArt());
    }
  }, [status, dispatch]);

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const handleUpload = async () => {
    if (!uploadedFiles) {
      alert("Please select a file first!");
      return;
    }

    if (!acceptedTC) {
      alert("Accept the terms and conditions before uploading.");
      return;
    }

    try {
      const base64Image = await convertToBase64(uploadedFiles);

      const dataToSend = {
        ...form,
        image: base64Image, 
      };

      dispatch(addSubmitArt(dataToSend));

      alert("Art uploaded successfully!");

      setForm({
        artistName: "",
        artType: "",
        creditUrl: "",
        Instagram: "",
        Facebook: "",
        Twitter: "",
        Website: "",
      });

      setUploadedFiles(null);
      setAcceptedTC(false);
    } catch (error) {
      alert("Error uploading image");
    }
  };

  return (
    <>
      <h1>Submit Art</h1>

      <div
        className={`upload_Music ${uploadedFiles ? "uploaded" : ""}`}
        onClick={() => document.getElementById("fileInput").click()}
      >
        <p>
          {uploadedFiles ? (
            <div className="file-info">
              <span className="file-name">{uploadedFiles.name}</span>
              <button
                className="DeleteBtn1"
                onClick={(e) => {
                  e.stopPropagation();
                  setUploadedFiles(null);
                }}
              >
                Delete
              </button>
            </div>
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
          accept="image/*"
          onChange={(e) => setUploadedFiles(e.target.files[0])}
        />
      </div>

      <div className="upload_Art">
        <p>To upload Art click on the box or drop files here!</p>
      </div>

      <div className="Submit_Box-Art">
        <div className="Input-1-Art">
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              placeholder="Artist name"
              value={form.artistName}
              onChange={(e) => setForm({ ...form, artistName: e.target.value })}
            />
            <input
              placeholder="Art type"
              value={form.artType}
              onChange={(e) => setForm({ ...form, artType: e.target.value })}
            />
            <input
              placeholder="Credit url (optional)"
              value={form.creditUrl}
              onChange={(e) => setForm({ ...form, creditUrl: e.target.value })}
            />
          </form>
        </div>

        <hr />

        <div className="Down-Box1">
          <h1>Artist Social</h1>

          <div className="Submit_Box2">
            <div className="Input-3">
              <form onSubmit={(e) => e.preventDefault()}>
                <input
                  placeholder="Instagram"
                  value={form.Instagram}
                  onChange={(e) =>
                    setForm({ ...form, Instagram: e.target.value })
                  }
                />
                <input
                  placeholder="Facebook"
                  value={form.Facebook}
                  onChange={(e) =>
                    setForm({ ...form, Facebook: e.target.value })
                  }
                />
              </form>
            </div>

            <div className="Input-4">
              <form onSubmit={(e) => e.preventDefault()}>
                <input
                  placeholder="Twitter"
                  value={form.Twitter}
                  onChange={(e) =>
                    setForm({ ...form, Twitter: e.target.value })
                  }
                />
                <input
                  placeholder="Website"
                  value={form.Website}
                  onChange={(e) =>
                    setForm({ ...form, Website: e.target.value })
                  }
                />
              </form>
            </div>
          </div>

          <div className="Submit_Box3-Art">
            <input
              type="checkbox"
              checked={acceptedTC}
              onChange={(e) => setAcceptedTC(e.target.checked)}
            />
            <label className="Wrap">
              I read and accepted the terms and conditions
            </label>

            <button
              onClick={handleUpload}
              className="button-SubmitArt"
              type="button"
            >
              Upload Art
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SubmitArt;