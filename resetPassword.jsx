import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "./Auth.css";
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function ResetPasswordPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log("Sign In Data:", data);
    reset();
  };

  return (
    <>
      <div className="SiginIn-MainDiv">
        <div className="MainContainer-Auth">
          <form onSubmit={handleSubmit(onSubmit)} className="auth-form">
            <h1 className="auth-title">Reset your password</h1>
            <p className="auth-desc">
              Enter new password carefully. The password must be 8 characters
              long
            </p>

            <input
              type="newPassword"
              placeholder="New password"
              {...register("newPassword", { required: "Enter new password" })}
            />
            {errors.newPassword && (
              <span className="error">{errors.newPassword.message}</span>
            )}

            <input
              type="repeatPassword"
              placeholder="Repeat the password"
              {...register("repeatPassword", {
                required: "Please the password",
              })}
            />
            {errors.repeatPassword && (
              <span className="error">{errors.repeatPassword.message}</span>
            )}

            <div className="button-Div">
              <button className="btn-Auth-G">
                <FaGoogle />
              </button>
              <button className="btn-Auth">Sign In</button>
            </div>
          </form>
        </div>
      </div>
      <div className="SiginIn-extraDiv">
        <span>not a member? </span>
        <Link to="/signUp" className="signup-link">
          Sign Up{" "}
        </Link>
        <span> now</span>
        <div className="lastBox-Application">
          <FaFacebookF size={35} />
          <FaInstagram size={35} />
          <FaLinkedinIn size={35} />
          <FaTwitter size={35} />
        </div>
      </div>
    </>
  );
}

export default ResetPasswordPage;
