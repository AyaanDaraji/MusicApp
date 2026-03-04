import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./homePage";
import Submission from "./submission";
import SubmitMusic from "./submitMusic";
import SubmitArt from "./submitArt";
import JoinUs from "./joinUs";
import ContactUs from "./contactUs";
import OurTeam from "./ourTeam";
import TermsConditions from "./Terms_and_Conditions";
import PrivacyPolicyPara from "./PrivacyPolicy";
import YourInfoPage from "./yourInformation";
import YourAccount from "./account";

import { useEffect, useState } from "react";
import { GoHome } from "react-icons/go";
import { CiFolderOn } from "react-icons/ci";
import { CiMusicNote1 } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { BsCupHot } from "react-icons/bs";
import { CiPhone } from "react-icons/ci";
import { CiMicrochip } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiCircleInfo } from "react-icons/ci";

import { FaRegSun } from "react-icons/fa";
import { FaRegMoon } from "react-icons/fa";

import SignUpPage from "./AuthenticationPages/signUp";
import SignInPage from "./AuthenticationPages/signin";
import ForgotPasswordPage from "./AuthenticationPages/forgotPassword";
import ResetPasswordPage from "./AuthenticationPages/resetPassword";

import ProtectedRoute from "./AuthenticationPages/ProtectedRoute";

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <Routes>

    <Route path="/signIn" element={<SignInPage />} />
    <Route path="/signUp" element={<SignUpPage />} />
    <Route path="/forgotPassWord" element={<ForgotPasswordPage />} />
    <Route path="/ResetPassword" element={<ResetPasswordPage />} />

      <Route path="/signIn" element={<SignInPage />} />
      <Route
        path="/*"
        element={
          <ProtectedRoute>
            <div className="mainContainer">
              <div className="Body">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/homepage" element={<Home />} />
                  <Route path="/submission" element={<Submission />} />
                  <Route path="/submitMusic" element={<SubmitMusic />} />
                  <Route path="/submitArt" element={<SubmitArt />} />
                  <Route path="/joinUS" element={<JoinUs />} />
                  <Route path="/contactUs" element={<ContactUs />} />
                  <Route path="/ourTeam" element={<OurTeam />} />
                  <Route path="/terms" element={<TermsConditions />} />
                  <Route path="/privacyPara" element={<PrivacyPolicyPara />} />
                  <Route path="/yourInfo" element={<YourInfoPage />} />
                  <Route path="/account" element={<YourAccount />} />
                </Routes>
              </div>

              <div className="Header-Main">
                <div className="Header">
                  <div>
                    <h1 className="big_h1">Hello jack</h1>
                    <p className="big_p">Welcome back to Myfile</p>
                  </div>
                  <div className="imgTag"></div>
                </div>

                <div className="toggle-Btn">
                  <button
                    onClick={() =>
                      setTheme(theme === "light" ? "dark" : "light")
                    }
                  >
                    {theme === "light" ? (
                      <FaRegMoon size={30} />
                    ) : (
                      <FaRegSun size={30} />
                    )}
                  </button>
                </div>
              </div>
              <div className="SideBar">
                <p className="side-link">LOGO</p>
                <Link to="/homepage" className="side-link">
                  <GoHome size={25} />
                  Home
                </Link>
                <Link to="/Submission" className="side-link">
                  <CiFolderOn size={25} />
                  Submission
                </Link>
                <Link to="/SubmitMusic" className="side-link">
                  <CiMusicNote1 size={25} />
                  Submit Music
                </Link>
                <Link to="/SubmitArt" className="side-link">
                  <FaInstagram size={25} />
                  Submit Art
                </Link>
                <Link to="/JoinUs" className="side-link">
                  <BsCupHot size={25} />
                  Join us
                </Link>
                <Link to="/ContactUs" className="side-link">
                  <CiPhone size={25} />
                  Contact us
                </Link>
                <Link to="/OurTeam" className="side-link">
                  <CiMicrochip size={25} />
                  Our Team
                </Link>
                {/* <Link to="/signIn" className="side-link">
                  <CiUser size={25} />
                  Account
                </Link> */}
                <Link to="/YourInfo" className="side-link">
                  <CiCircleInfo size={25} />
                  Your Info
                </Link>
              </div>
            </div>
          </ProtectedRoute>
        } 
      />
    </Routes>
  );
}

export default App;
