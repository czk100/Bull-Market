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
// import { useAuth0,  } from "@auth0/auth0-react";

function App() {

  const isAuthenticated = Cookies.get('auth0.is.authenticated');
  // const { isAuthenticated, } = useAuth0();
  // console.log(isAuthenticated);
  // console.log(useAuth0.isAuthenticated);
  // const { isAuthenticated } = useAuth0();
  // console.log(test);
  return (
    <div className="App">
      <Header />
      <div class="site-content">
        <BrowserRouter>
          <Route exact path="/" component={Home} />
          <Route exact path="/meetings">
            <Meetings isAdmin = {isAuthenticated}/>
          </Route>
          <Route exact path="/announcements">
            <Announcements isAdmin = {isAuthenticated}/>
          </Route>
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
