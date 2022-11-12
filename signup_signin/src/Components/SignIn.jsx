import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import useHistory from 'react-router-dom'

function SigIn() {
  const [username, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {}, []);

  async function loginn() {
    // console.log("data", username, password);
    let items = { username, password };
 let result=await fetch(`https://masai-api-mocker.herokuapp.com/auth/login`,{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(items),
    });
    result = await result.json();
    localStorage.setItem("user-info", JSON.stringify(result));
    // history.push('/')
    navigate("");
  }
  return (
    <div className="login1">
      <div className="login_form">
        <h1  style={{fontSize:"30px",fontWeight:"600"}}>LogIn</h1>
        <Link to="">
          <div className="loginfacebook">
            <i className="fa-brands fa-square-facebook"></i>
            <h3>REGISTER WITH FACEBOOK</h3>
          </div>
        </Link>
        <Link to="">
          <div className="logingoogle">
            <i className="fa-brands fa-square-google-plus"></i>
            <h3>REGISTER WITH GOOGLE</h3>
          </div>
        </Link>
        <p>OR</p>
        <input
          type="email"
          className="email"
          placeholder="Email"
          name="email"
          value={username}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="password"
          className="password"
          placeholder="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
            <Link to={"/signup"}>Create your account</Link>
          </span>
        </div>
        {/* <input type="submit" className="submit_btn" value="LogIn" /> */}
        <button className="submit_btn" onClick={loginn}>
          Login
        </button>
      </div>
    </div>
  );
}

export default SigIn;
