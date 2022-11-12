import React from "react";
import { Link } from "react-router-dom";
function SigIn() {
  return (
    <div className="login1">
      <form className="login_form">
        <h1>LogIn</h1>
        <Link to="">
          <div className="loginfacebook">
            <i class="fa-brands fa-square-facebook"></i>
            <h3>REGISTER WITH FACEBOOK</h3>
          </div>
        </Link>
        <Link to="">
          <div className="logingoogle">
            <i class="fa-brands fa-square-google-plus"></i>
            <h3>REGISTER WITH GOOGLE</h3>
          </div>
        </Link>
        <p>OR</p>
        <input
          type="email"
          className="email"
          placeholder="Email"
          name="email"
        />
        <br />
        <input
          type="password"
          className="password"
          placeholder="password"
          name="password"
        />
        <br />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {" "}
          <p>Don't have an account?</p>
          <span>
            <Link>Create your account</Link>
          </span>
        </div>
        <input type="submit" className="submit_btn" value="LogIn" />
      </form>
    </div>
  );
}

export default SigIn;
