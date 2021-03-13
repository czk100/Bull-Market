import "./App.css";
import "./Header.css";
import React from "react";

function Header() {
  return (
    <div>
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1>UF Student Investment Club</h1>
          <nav class="navbar navbar-expand-lg navbar-header">
            <div class="container-fluid">
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="/">
                      Home
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/test">
                      Test
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Presentations
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Activities
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Executive Board
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link disabled"
                      href="#"
                      tabindex="-1"
                      aria-disabled="true"
                    >
                      Disabled
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header;
