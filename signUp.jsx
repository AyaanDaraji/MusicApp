import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "./Auth.css";
import { FaGoogle } from "react-icons/fa";

import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function SignUpPage() {
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
            <h1 className="auth-title">Sign up</h1>
            <p className="auth-desc">
              To upload music and images, you must accept our terms and
              conditions on the registration website.
            </p>

            <input
              type="fullName"
              placeholder="Full name"
              {...register("fullName", { required: "Enter your Full anme" })}
            />
            {errors.fullName && (
              <span className="error">{errors.fullName.message}</span>
            )}

            <input
              type="email"
              placeholder="Email"
              {...register("email", { required: "Enter your email" })}
            />
            {errors.newPassword && (
              <span className="error">{errors.email.message}</span>
            )}

            <input
              type="Password"
              placeholder="Password"
              {...register("Password", { required: "Enter your Password" })}
            />
            {errors.Password && (
              <span className="error">{errors.Password.message}</span>
            )}

            <div className="button-Div">
              <button className="btn-Auth-G">
                <FaGoogle />
              </button>
              <button className="btn-Auth">Send email</button>
            </div>
          </form>
        </div>
      </div>
      <div className="SiginIn-extraDiv">
        <span>not a member? </span>
        <Link to="/signIn" className="signup-link">
          Sign In
        </Link>
        <span> now</span>
      </div>
      <div className="lastBox-Application">
        <FaFacebookF size={35} />
        <FaInstagram size={35} />
        <FaLinkedinIn size={35} />
        <FaTwitter size={35} />
      </div>
    </>
  );
}

export default SignUpPage;
