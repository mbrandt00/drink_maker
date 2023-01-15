import React from "react";
import { GoogleLogout } from "react-google-login";

const clientId =
  "585445841273-1bg47nr9q10fv8376jo59ekht56aotqr.apps.googleusercontent.com ";
function Logout() {
  const onSuccess = () => {
    alert("Logout successful");
  };
  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      />
    </div>
  );
}

export default Logout;
