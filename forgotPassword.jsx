import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "./Auth.css";
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function ForgotPasswordPage() {
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
            <h1 className="auth-title">Forgot password</h1>
            <p className="auth-desc">
              Enter your email address below and we'll email you a link to reset
              your password
            </p>

            <input
              type="email"
              placeholder="Email"
              {...register("email", { required: "Enter your email" })}
            />
            {errors.newPassword && (
              <span className="error">{errors.email.message}</span>
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
        <Link to="/signUp" className="signup-link">
          Sign Up{" "}
        </Link>
        <span> now</span>
</div>
        {/* <Link to="/ResetPassword">Reset Password</Link> */}
        <div className="lastBox-Application-forgetPassword">
          <FaFacebookF size={35} />
          <FaInstagram size={35} />
          <FaLinkedinIn size={35} />
          <FaTwitter size={35} />
        </div>
      
    </>
  );
}

export default ForgotPasswordPage;
