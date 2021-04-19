import "./App.css";
import "./Login.css";
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";


function Login() {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="execboard-container">
      <button onClick={() => loginWithRedirect()}>Log In</button>
    </div>
  );
}

export default Login;
