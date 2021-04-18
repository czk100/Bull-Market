import "./App.css";
import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Meetings from "./Meetings";
import Announcements from "./Announcements";
import ExecBoard from "./ExecBoard";
import Socials from "./Social";
import FAQ from "./FAQ";
import Login from "./Login";
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";

function App() {

  const {isAuthenticated} = useAuth0();

  return (
  <Auth0Provider
  domain={process.env.REACT_APP_AUTH0_DOMAIN}
  clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
  redirectUri={window.location.origin}
  >
    <div className="App">
      <Header />
      <div class="site-content">
        <BrowserRouter>
          <Route exact path="/" component={Home} />
          <Route exact path="/meetings" component={Meetings} />
          <Route exact path="/announcements" component={Announcements} />
          <Route exact path="/execboard" component={ExecBoard} />
          <Route exact path="/social" component={Socials} />
          <Route exact path="/faq" component={FAQ} />
          <Route exact path="/login" component={Login} />
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  </ Auth0Provider>
  );
}

export default App;
