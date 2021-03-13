import "./App.css";
import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import Test from "./Test";
import Header from "./Header";

import Axios from 'axios';

function App() {


  Axios({
    method: "GET",
    url: 'http://localhost:5000/api/items',
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => {
    console.log("hi!");
    console.log(res.data.message);
    test = res.data;
  }).catch(function (error) {
    console.log("we errored!: " + error.message);
  });

  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route exact path="/test" component={Test} />
      </BrowserRouter>
    </div>
  );
}

export default App;
