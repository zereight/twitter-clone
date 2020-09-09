import React, { useState } from "react";
import AppRouter from "./Router";
import { authService } from "../fb";

function App() {
  const [isLoggedIn, setisLoggedIn] = useState(authService.currentUser);
  return (
    <div>
      <AppRouter isLoggedIn={isLoggedIn} />
      <footer>&copy; {new Date().getFullYear()} Twitter</footer>
    </div>
  );
}

export default App;
