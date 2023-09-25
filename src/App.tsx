import { useState } from "react";
import Genreslist from "./components/Genreslist";
import Login from "./components/Login";

function App() {
  const [loggedIn, setLoggedIn] = useState(false)

  const handleLogin = () => {
    setLoggedIn(true);
  }

  return <div>
    {!loggedIn && <Login onLogin={handleLogin}/>}
    {loggedIn && <Genreslist />}
  </div>;
}

export default App;
