import "./App.css";
import React from "react";
import { Route, BrowserRouter, Redirect } from "react-router-dom";
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

  return (
    <div className="App">
      <Header />
      <div class="site-content">
        <BrowserRouter>
          <Route exact path="/" component={Home} />
          <Route exact path="/meetings" component={Meetings} />
          <Route exact path="/announcements" render={() =>(
            isAuthenticated ? (
              <Announcements />
            ) : (
              <Redirect to="/" />
            )
          )
          } />
          
          <Route exact path="/execboard" render={() =>(
            isAuthenticated ? (
              <ExecBoard />
            ) : (
              <Redirect to="/" />
            )
          )
          } />
          <Route exact path="/social" render={() =>(
            isAuthenticated ? (
              <Socials />
            ) : (
              <Redirect to="/" />
            )
          )
          } />
          <Route exact path="/faq" render={() =>(
            isAuthenticated ? (
              <FAQ />
            ) : (
              <Redirect to="/" />
            )
          )
          } />
          <Route exact path="/login" component={Login} />
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
}

export default App;
