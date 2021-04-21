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
import Cookies from 'js-cookie';

function App() {

  const isAuthenticated = Cookies.get('auth0.is.authenticated');
  console.log(isAuthenticated);
  console.log(window.location.origin);

  return (
    <div className="App">
      <Header />
      <div class="site-content">
        <BrowserRouter>
          <Route exact path="/" component={Home} />
          <Route exact path="/meetings" render={() =>
              <Meetings isAdmin = {isAuthenticated}/>
            } />
          <Route exact path="/announcements" render={() =>
              <Announcements isAdmin = {isAuthenticated}/>
            } />
          <Route exact path="/execboard" render={() =>
              <ExecBoard isAdmin = {isAuthenticated}/>
            } />
          <Route exact path="/social" render={() =>
              <Socials isAdmin = {isAuthenticated}/>
          } />
          <Route exact path="/faq" render={() =>
              <FAQ isAdmin = {isAuthenticated}/>
          } />
          <Route exact path="/login" component={Login} />
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
}

export default App;
