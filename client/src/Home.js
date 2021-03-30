import "./App.css";
import "./Home.css";
import React from "react";
import TextLoader from "./Loaders/TextLoader.js";

function Home() {
  return (
    <div class="home-container">
      <h1 class="display-3">Home</h1>
      <img class="img_fluid" src={"./logo.png"} alt="UFSIC Logo" />
      <div class="description-container">
        <div className="bodyTextEditable">
          <TextLoader />
        </div>
        <div class="FAQ-container">
          <h2 class="display-5">
            Want to join? See our FAQ page{" "}
            <a href="/FAQ" class="FAQ-redirect">
              here.
            </a>
          </h2>
        </div>
      </div>
      <div class="resource-container">
        <h2 class="display-5">Resources</h2>
      </div>
    </div>
  );
}

export default Home;
//<Preload /> needs to be inserted for the text stuff
