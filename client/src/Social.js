import "./App.css";
import "./Social.css";
import React from "react";

const Social = (props) => {
  return (
    <div className="social-container">
      <h1 class="display-3">Social Media</h1>
      <div class="card-group">
        <div class="card">
          <img src="./fblogo.png" class="card-img-top" alt="Facebook Logo" />
          <div class="card-body">
            <a
              href="https://www.facebook.com/groups/483723830532/"
              class="social-redirect"
            >
              Facebook
            </a>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
        </div>
        <div class="card">
          <img src="./iglogo.png" class="card-img-top" alt="Instagram Logo" />
          <div class="card-body">
            <a href="https://www.instagram.com/uf_sic/" class="social-redirect">
              Instagram
            </a>
            <p class="card-text">
              This card has supporting text below as a natural lead-in to
              additional content.
            </p>
          </div>
        </div>
        <div class="card">
          <img
            src="./groupmelogo.png"
            class="card-img-top"
            alt="Groupme Logo"
          />
          <div class="card-body">
            <a
              href="https://web.groupme.com/join_group/62458247/fWLsbKsi"
              class="social-redirect"
            >
              Groupme
            </a>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Social;
