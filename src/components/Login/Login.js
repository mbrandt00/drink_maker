import React, { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { UserContext } from "../../contexts/UserContext";
import { axios } from "axios";
const Login = () => {
  const { user, setUser } = useContext(UserContext);
  const handleChange = (user) => {
    setUser({
      id: user.id,
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
    });
  };

  const handleLogout = () => {
    axios.post("http://localhost:3000/api/v1/logout").then((response) => {
      console.log(response);
    });
    setUser(null);
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
  };

  return (
    <div className="">
      <div className="">
        {user ? (
          <div>
            {user.last_name}
            <button onClick={() => handleLogout()}>Logout</button>
          </div>
        ) : (
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
        )}
      </div>
    </div>
  );
};

export default Login;
