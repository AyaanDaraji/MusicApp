import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";
import { FaGoogle } from "react-icons/fa";
import { loginUser } from "../AuthenticationPages/authService";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";



function SignInPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    const user = loginUser(data.email, data.password);

    if (!user) {
      alert("Invalid email or password");
      return;
    }

      navigate("/homepage");

    reset();
  };

  return (
    <>
      <div className="SiginIn-MainDiv">
        <div className="MainContainer-Auth">
          <form onSubmit={handleSubmit(onSubmit)} className="auth-form">
            <h1 className="auth-title">Sign In</h1>

            <p className="auth-desc">
              To upload music and images, you must accept our terms and conditions
              on the registration website.
            </p>

            <input
              type="email"
              placeholder="Email or username#0000 (Discord account)"
              {...register("email", { required: "Enter email" })}
            />
            {errors.email && (
              <span className="error">{errors.email.message}</span>
            )}

            <input
              type="password"
              placeholder="Password"
              {...register("password", { required: "Enter password" })}
            />
            {errors.password && (
              <span className="error">{errors.password.message}</span>
            )}

            <Link to="/forgotPassWord" className="auth-link">
              Forgot Password?
            </Link>

            <div className="button-Div">
              <button type="button" className="btn-Auth-G">
                <FaGoogle />
              </button>

              <button type="submit" className="btn-Auth">
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="SiginIn-extraDiv">
        <span>not a member? </span>
        <Link to="/signUp" className="signup-link">
          Sign Up
        </Link>
        <span> now</span>
      </div>

      <div className="lastBox-Application">
            <FaFacebookF size={35} />
            <FaInstagram size={35} />
            <FaLinkedinIn size={35} />
            <FaTwitter size={35}/>
      </div>
    </>
  );
}

export default SignInPage;