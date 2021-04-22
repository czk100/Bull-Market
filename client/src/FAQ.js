import "./App.css";
import "./FAQ.css";
import React from "react";
import FaqLoader from "./Loaders/FaqLoader.js";
import FaqAdder from "./Adders/FaqAdder.js";

const FAQ = (props) => {
  return (
    <div className="faq-container">
      <h1 class="display-3">Frequently Asked Questions</h1>
      <div className="faqTextEditable">
        <div className="faqFormat">
          {props.isAdmin && <FaqAdder />}
        </div>
        <div className="messageFormat">
          <FaqLoader isAdmin={props.isAdmin} />
        </div>
      </div>
    </div>
  );
}

export default FAQ;
