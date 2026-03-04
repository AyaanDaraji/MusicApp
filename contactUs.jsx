import { useDispatch, useSelector } from "react-redux";
import { useState , useEffect } from "react";
import { fetchContactUs, addContactUs } from "../slice/ContactUsSlice";
import "./contactUs.css";

function ContactUs() {
  
  const dispatch = useDispatch();
  const { status } = useSelector(
    (state) => state.contactUs || { status: "idle" }
  );

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    msgText: "",
  });

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchContactUs());
    }
  }, [status, dispatch]);

  const handleSubmit = () => {
    dispatch(addContactUs(form));

    setForm({
      fullName: "",
      email: "",
      msgText: "",
    });
  };

  return (
    <>
      <div className="ContactUs_Main">
        <div className="ContactUs-Box1">
          <h1>Contact Us</h1>
          <p>
            We are very happy to be contact with you.you can contact us in the
            following
          </p>

          <table>
            <tr>
              <td className="td-left">Address</td>
              <td>
                Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum
                dolor sit amet, consectetur adipiscing
              </td>
            </tr>
            <tr>
              <td className="td-left">Phone</td>
              <td>+763-461-6685</td>
            </tr>
            <tr>
              <td className="td-left">Email</td>
              <td>ayaanrocku@gmail.com</td>
            </tr>
          </table>

          <br />
          <input
            className="Full name"
            placeholder="Full name"
            value={form.fullName}
            onChange={(e) => setForm({ ...form, fullName: e.target.value })}
          />

          <input
            className="Email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>

        <div className="ContactUs-Box2">
          <img
            className="Map_Img"
            src="https://developers.google.com/static/maps/images/landing/react-codelab-thumbnail.png"
          ></img>
          <input
            className="Input_box_big"
            placeholder="Message text"
            value={form.msgText}
            onChange={(e) => setForm({ ...form, msgText: e.target.value })}
          />
        </div>
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}

export default ContactUs;
