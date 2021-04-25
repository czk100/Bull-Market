import React, { useState, useEffect } from "react";
import { Form, TextArea } from "semantic-ui-react";
import "./FaqAdder.css";
const axios = require("axios");

const FaqAdder = (props) => {
  const [data, setData] = useState([]);
  const FaqPost = (e) => {
    e.preventDefault();
    if (data.question !== undefined && data.answer !== undefined) {
      var newData = {
        question: data.question,
        answer: data.answer,
      };
      setErrorMessage("none");
      setData(newData);
      axios
        .post("http://localhost:5000/api/questions", data)
        .then(function (response) {
          console.log(response);
        });
      window.location.reload();
    } else {
      setErrorMessage("block");
    }
  };

  const handleQuestionChange = (e) => {
    var newData = {
      question: e.target.value,
      answer: data.answer,
    };
    setData(newData);
  };

  const handleAnswerChange = (e) => {
    var newData = {
      question: data.question,
      answer: e.target.value,
    };
    setData(newData);
  };

  const setErrorMessage = (show) => {
    var x = document.getElementById("errorMessage");
    x.style.display = show;
    console.log(x.style.display);
  };
  window.onload = function () {
    console.log(document.getElementsByClassName("Faq-Adder")[0]);
    console.log(props.isAdmin);
    if (!props.isAdmin) {
      console.log(document.getElementsByClassName("Faq-Adder")[0]);
      document.getElementsByClassName("Faq-Adder")[0].style.display = "none";
    }
  };
  return (
    <div className="Faq-Adder">
      <div id="errorMessage" class="error-container">
        Question and/or Answer Missing!
      </div>
      <div id="Add Area" class="add-container">
        <form>
          <br></br>
          <input
            type="text"
            name="name"
            placeholder="Question"
            class="form-control"
            value={data.question}
            onChange={handleQuestionChange}
          />
          <Form>
            <TextArea
              placeholder="Answer"
              name="details"
              onChange={handleAnswerChange}
              value={data.answer}
              class="form-control"
            />
          </Form>
          <button id="Submit" class="btn" onClick={FaqPost}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default FaqAdder;
