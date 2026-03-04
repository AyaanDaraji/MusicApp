import "./joinUs.css";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchJoinUs } from "../slice/JoinUsSlice";
import { addJoinUs } from "../slice/JoinUsSlice";

function JoinUs() {
  const dispatch = useDispatch();
  const { items, status } = useSelector((state) => state.submitJoinUsSlice);
  const [form, setForm] = useState({
    FullName: "",
    Age: "",
    Location: "",
    DiscordAccount: "",
    Instagram: "",
    Sound_cloud: "",
    Website: "",
    Twitter: "",
    Spotify: "",
    Facebook: "",
    reply1: "",
    reply2: "",
    reply3: "",
    reply4: "",
    About_you: "",
  });

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchJoinUs());
    }
  }, [status, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addJoinUs(form));
    setForm({
      FullName: "",
      Age: "",
      Location: "",
      DiscordAccount: "",
      Instagram: "",
      Sound_cloud: "",
      Website: "",
      Twitter: "",
      Spotify: "",
      Facebook: "",
      reply1: "",
      reply2: "",
      reply3: "",
      reply4: "",
      About_you: "",
    });
  };

  return (
    <>
      <h1>Join us </h1>
      <p>
        if you think your place in our team is empty,fill in all the feilds
        because we will check and let you know{" "}
      </p>
      <div className="joinUs-Box1">
        <div className="box1">
          <form onSubmit={handleSubmit}>
            <input
              placeholder="Full name"
              value={form.FullName}
              onChange={(e) => setForm({ ...form, FullName: e.target.value })}
            />

            <input
              placeholder="Age"
              value={form.Age}
              onChange={(e) => setForm({ ...form, Age: e.target.value })}
            />
          </form>
        </div>

        <div className="box2">
          <form onSubmit={handleSubmit}>
            <input
              placeholder="Location (State/region and Country)"
              value={form.Location}
              onChange={(e) => setForm({ ...form, Location: e.target.value })}
            />

            <input
              placeholder="Discord account"
              value={form.DiscordAccount}
              onChange={(e) =>
                setForm({ ...form, DiscordAccount: e.target.value })
              }
            />
          </form>
        </div>
      </div>

      <br />

      <hr />
      <h1>Social media</h1>
      <div className="joinUs-Box2">
        <div className="box1">
          <form onSubmit={handleSubmit}>
            <input
              placeholder="Instagram"
              value={form.Instagram}
              onChange={(e) => setForm({ ...form, Instagram: e.target.value })}
            />

            <input
              placeholder="Sound cloud"
              value={form.Sound_cloud}
              onChange={(e) =>
                setForm({ ...form, Sound_cloud: e.target.value })
              }
            />

            <input
              placeholder="Website"
              value={form.Website}
              onChange={(e) => setForm({ ...form, Website: e.target.value })}
            />
          </form>
        </div>

        <div className="box2">
          <form onSubmit={handleSubmit}>
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

      <br />
      <hr />

      <h1>Question</h1>
      <div className="joinUs-Box3">
        <div className="box3">
          <form onSubmit={handleSubmit}>
            <label>
              What makes you passinate about KLOUD and becomming a KLOUD
              ambassador?
            </label>
            <input
              className="BigInput"
              placeholder="Share a reply"
              value={form.reply1}
              onChange={(e) => setForm({ ...form, reply1: e.target.value })}
            />
            <br />
            <label>
              Do you have any other skills which could benefit the ambassodor
              program?
            </label>
            <input
              className="BigInput"
              placeholder="Share a reply"
              value={form.reply2}
              onChange={(e) => setForm({ ...form, reply2: e.target.value })}
            />
          </form>
        </div>

        <div className="box4">
          <form onSubmit={handleSubmit}>
            <label>
              Have you had any experience with online promotion before? if
              so,explain This could include using your social media influence to
              promote a product or a brand?
            </label>
            <input
              className="BigInput"
              placeholder="Share a reply"
              value={form.reply3}
              onChange={(e) => setForm({ ...form, reply3: e.target.value })}
            />
            <br />
            <label>How will you help advertising in your community?</label>
            <input
              className="BigInput"
              placeholder="Share a reply"
              value={form.reply4}
              onChange={(e) => setForm({ ...form, reply4: e.target.value })}
            />
          </form>
        </div>
      </div>

      <br />

      <div className="joinUs-Box4">
        <form onSubmit={handleSubmit}>
          <label>Tell us a little bit about yourself.</label>
          <input
            className="BigInput2"
            placeholder="Share a reply"
            value={form.About_you}
            onChange={(e) => setForm({ ...form, About_you: e.target.value })}
          />

          <button className="JoinUs-Btn">Submit</button>
        </form>
      </div>
    </>
  );
}

export default JoinUs;
