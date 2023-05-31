import { useState, useEffect } from "react";
import Header from "./components/Header";
import Genreslist from "./components/Genreslist";
import Login from "./components/Login";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <div className="bg-[#0F1626]">
      {loggedIn && <Header onLogout={handleLogout} />}
      {!loggedIn && <Login onLogin={handleLogin} />}
      {loggedIn && <Genreslist />}
    </div>
  );
}

export default App;
