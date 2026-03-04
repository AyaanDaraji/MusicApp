import "./yourInformation.css";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchYourInfo, saveYourInfo } from "../slice/YourInfoSlice";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "./AuthenticationPages/authService";


function YourInfo() {
  const dispatch = useDispatch();

  const { item, status } = useSelector((state) => state.submitYourInfo);

  const [uploadedFile, setUploadedFile] = useState(null);

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    oldPassword: "",
    newPassword: "",
    repeatPassword: "",
    city: "",
    country: "",
    state: "",
    jobTitle: "",
    company: "",
    website: "",
  });

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchYourInfo());
    }
  }, [status, dispatch]);

  useEffect(() => {
    if (item) {
      setForm({
        fullName: item.fullName || "",
        email: item.email || "",
        oldPassword: "",
        newPassword: "",
        repeatPassword: "",
        city: item.city || "",
        country: item.country || "",
        state: item.state || "",
        jobTitle: item.jobTitle || "",
        company: item.company || "",
        website: item.website || "",
      });

      if (item.image) {
        setUploadedFile(item.image);
      }
    }
  }, [item]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const navigate = useNavigate();

const handleLogout = () => {
  logoutUser();       
  navigate("/signIn"); 
};

  const handleUploadClick = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";

    input.onchange = (e) => {
      const file = e.target.files[0];
      if (file) {
        setUploadedFile(file);
      }
    };

    input.click();
  };

  const handleDelete = () => {
    setUploadedFile(null);
  };

  const handleSubmit = async () => {
  let imageData = null;

  if (uploadedFile instanceof File) {
    imageData = await convertToBase64(uploadedFile);
  }

  else if (typeof uploadedFile === "string") {
    imageData = uploadedFile;
  }

  dispatch(
    saveYourInfo({
      ...form,
      image: imageData,
    })
  );

  alert("Updated successfully!");

  setForm((prev) => ({
    ...prev,
    oldPassword: "",
    newPassword: "",
    repeatPassword: "",
  }));
};

  return (
    <>
      <h1>Your Information</h1>

      <div className="boxMain">
        <div
          className="YourInfo-Box1"
          style={{
            backgroundImage: uploadedFile
              ? `url(${
                  uploadedFile instanceof File
                    ? URL.createObjectURL(uploadedFile)
                    : uploadedFile
                })`
              : "none",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {!uploadedFile && (
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
              alt="Upload"
              className="upload-icon1"
            />
          )}
        </div>

        <div className="button-group">
          <button className="btn-Upload-YourPhoto" onClick={handleUploadClick}>
            Upload
          </button>

          <button
            type="button"
            onClick={handleDelete}
            disabled={!uploadedFile}
            className="btn-Delete-YourPhoto"
          >
            Delete
          </button>
        </div>
      </div>

      <div className="YourInfo-Box1-2">
        <input
          type="text"
          name="fullName"
          placeholder="Full name"
          value={form.fullName}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />

        <button className="btn-YourInfo" onClick={handleSubmit}>
          Update
        </button>
      </div>

      <div className="YourInfo-Box2">
        <h1>Password recovery</h1>

        <input
          type="password"
          name="oldPassword"
          placeholder="Old password"
          value={form.oldPassword}
          onChange={handleChange}
        />

        <input
          type="password"
          name="newPassword"
          placeholder="New password"
          value={form.newPassword}
          onChange={handleChange}
        />

        <input
          type="password"
          name="repeatPassword"
          placeholder="Repeat password"
          value={form.repeatPassword}
          onChange={handleChange}
        />

        <button className="btn-YourInfo" onClick={handleSubmit}>
          Update
        </button>
      </div>

      <h1>About you</h1>

      <div className="YourInfo-Box3">
        <div>
          <input
            type="text"
            name="city"
            placeholder="City"
            value={form.city}
            onChange={handleChange}
          />

          <input
            type="text"
            name="country"
            placeholder="Country"
            value={form.country}
            onChange={handleChange}
          />

          <input
            type="text"
            name="jobTitle"
            placeholder="Job title"
            value={form.jobTitle}
            onChange={handleChange}
          />

          {/* <button className="btn-YourInfo3">Sign out</button> */}

        <button onClick={handleLogout} className="btn-YourInfo3">
          Sign out
        </button>
        </div>

        <div>
          <input
            type="text"
            name="state"
            placeholder="State/Province"
            value={form.state}
            onChange={handleChange}
          />

          <input
            type="text"
            name="company"
            placeholder="Company"
            value={form.company}
            onChange={handleChange}
          />

          <input
            type="text"
            name="website"
            placeholder="Website"
            value={form.website}
            onChange={handleChange}
          />

          <button className="btn-YourInfo4" onClick={handleSubmit}>
            Update
          </button>
        </div>
      </div>
    </>
  );
}

export default YourInfo;
