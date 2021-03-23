import "./App.css";
import "./Home.css";
import React from "react";
import Preload from "./textLoader.js";

function Home() {
  return (
    <div class="home-container">
      <h1 class="display-3">Home</h1>
      <img class="img_fluid" src={"./logo.png"} alt="UFSIC Logo" />
    </div>
  );
}

export default Home;
//<Preload /> needs to be inserted for the text stuff
