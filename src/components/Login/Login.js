import React from "react";
import { FcGoogle } from "react-icons/fc";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";

const googleLogin = () => {
  const responseGoogle = (response) => {
    const userObject = jwt_decode(response.credential);
    console.log(userObject);
    localStorage.setItem("user", JSON.stringify(userObject));
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

export default googleLogin;
