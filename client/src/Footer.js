import "./App.css";
import "./Footer.css";
import React from "react";

function Footer() {
  return (
    <div class="footer-container">
      <nav class="navbar navbar-light foot">
        <a class="navbar-brand foot" href="/">
          <img
            src="logo.png"
            alt="UFSIC Logo"
            width="30"
            height="30"
            class="d-inline-block align-text-top im"
          />
          UFSIC
        </a>
        <a class="nav-link footer" href="/social">
          Contact Us!
        </a>
        <a class="nav-link footer" href="faq">
          FAQ
        </a>
        <a class="nav-link footer" href="login">
          Login
        </a>
      </nav>
    </div>
  );
}

export default Footer;
