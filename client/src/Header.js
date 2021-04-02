import "./App.css";
import "./Header.css";
import React from "react";

function Header() {
  return (
    <div class="container">
      <h1 class="banner">
        <a class="banner-link" href="/">
          UF Student Investment Club
        </a>
      </h1>
      <ul class="nav nav-expand-lg nav-justified">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">
            Home
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/meetings">
            Meetings
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/announcements">
            Announcements
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/social">
            Social Media
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/execboard">
            Executive Board
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/faq">
            FAQ
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/login">
            Login
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
