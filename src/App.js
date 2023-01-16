import React from "react";
import Login from "./components/Login/Login";
import { UserContextProvider, UserContext } from "./contexts/UserContext";
function App() {
  return (
    <UserContextProvider>
      <Login />;
    </UserContextProvider>
  );
}

export default App;
