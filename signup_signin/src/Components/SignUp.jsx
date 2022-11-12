import React from "react";
import { Link } from "react-router-dom";
function SignUp() {
  return (
    <div>
      <div className="signup1">
        <form className="signup">
          <h1>Register Candidate</h1>
         <div className="account_already"> <p>Already have an account?</p>
          <span>
            <Link to="/SignIn">SignIn</Link>
          </span></div>
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
            type="text"
            className="input"
            placeholder="First Name*"
            name="first"
          />
          <br />
          <input
            type="text"
            className="input"
            placeholder="Last Name*"
            name="last"
          />
          <br />
          <input
            type="email"
            className="input"
            placeholder="Enter Email"
            name="email"
          />
          <br />
          <input
            type="password"
            className="input"
            placeholder="Enter Password"
            name="password"
          />
          <br />
          <input
            type="number"
            className="input"
            placeholder="Mobile Number"
            name="mobile"
          />
          <br />
          <input
            type="text"
            className="input"
            placeholder="Enter City Name"
            name="city"
          />
          <br />
          <input
            type="number"
            className="input"
            placeholder="Affiliate Code"
            name="code"
          />
          <br />
          <input type="submit" className="btn" value="Next" />
        </form>
      </div>
    </div>
  );
}

export default SignUp;
