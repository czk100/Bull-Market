import "./App.css";
import "./Social.css";
import React from "react";

function Social() {
  return (
    <div className="social-container">
      <h1 class="display-3">Social Media</h1>
      <div className="fb">
      <a href="https://www.facebook.com/groups/483723830532/">
        <img class="img-responsive"  src={"./fblogo.png"} alt="FB Logo" />

      </a>
      </div>


      
      <div className="ig">
      <a href="https://www.instagram.com/uf_sic/">
        <img class="img-responsive"  src={"./iglogo.png"} alt="IG Logo" />
        </a>
      </div>

      <div className="groupme">
      <a href="https://web.groupme.com/join_group/62458247/fWLsbKsi">
        <img class="img-responsive"  src={"./groupmelogo.png"} alt="Groupme Logo" />
        </a>
      </div>

      <div className="rect_fb">
          <h2 class="display-5">
          <a href="https://www.facebook.com/groups/483723830532/" class="FAQ-redirect">
              Facebook
            </a>
          </h2>
        </div>

        <div className="rect_ig">
          <h2 class="display-5">
          <a href="https://www.instagram.com/uf_sic/" class="FAQ-redirect">
              Instagram
            </a>
          </h2>
        </div>

        <div className="rect_groupme">
          <h2 class="display-5">
          <a href="https://web.groupme.com/join_group/62458247/fWLsbKsi" class="FAQ-redirect">
              Groupme
            </a>
          </h2>
        </div>

        <div className="connectWithUs">
          <h2 class="display-4.5">
            Connect With Us!
          </h2>
        </div>
        <div className="rect_connectWithUs">
          Connect with us on social media!
        </div>
    
    </div>
  );
}

export default Social;
