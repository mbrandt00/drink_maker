import React, { useState } from "react";
import Login from "./components/Login/Login";
import { UserContextProvider, UserContext } from "./contexts/UserContext";
function App() {
  const [user, setUser] = useState({});
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Login />;
    </UserContext.Provider>
  );
}

export default App;
