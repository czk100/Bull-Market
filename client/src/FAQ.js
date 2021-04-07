import "./App.css";
import "./FAQ.css";
import React from "react";
import FaqLoader from "./Loaders/FaqLoader.js";
import FaqAdder from "./Adders/FaqAdder.js";

function FAQ() {
  return (
    <div className="faq-container">
      <h1 class="display-3">Frequently Asked Questions</h1>
      <div className="faqTextEditable">
        <div className="faqFormat">
          <FaqAdder />
        </div>
        <div className="messageFormat">
          <FaqLoader />
        </div>
      </div>
    </div>
  );
}

export default FAQ;
/////////////////////////////////////////////////////

function Announcements() {
  return (
    <div class="announcements-container">
      <h1 class="display-3">Announcements</h1>
      
    </div>
  );
}

export default Announcements;
