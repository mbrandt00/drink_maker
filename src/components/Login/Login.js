import React, { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { UserContext } from "../../contexts/UserContext";
import axios from "axios";
const Login = () => {
  const userData = useContext(UserContext);
  const handleChange = (user) => {
    userData.setUser(user);
    console.log(userData.user);
  };
  const responseGoogle = (response) => {
    const userObject = jwt_decode(response.credential);
    localStorage.setItem("user", JSON.stringify(userObject));
    axios
      .post("http://localhost:3000/api/v1/users", userObject)
      .then((response) => {
        handleChange(response.data.user);
      })
      .catch((error) => console.log(error));
    const { name, sub, picture } = userObject;
    const doc = {
      _id: sub,
      _type: "user",
      userName: name,
      image: picture,
    };
  };

  return (
    <div className="">
      <div className="">
        <GoogleOAuthProvider
          clientId={
            "585445841273-1bg47nr9q10fv8376jo59ekht56aotqr.apps.googleusercontent.com"
          }
        >
          <GoogleLogin
            render={(renderProps) => (
              <button
                type="button"
                className=""
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
              >
                <FcGoogle className="" /> Sign in with google
              </button>
            )}
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy="single_host_origin"
          />
        </GoogleOAuthProvider>
      </div>
    </div>
  );
};

export default Login;
