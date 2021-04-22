import React, { useState } from "react";
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
        .post(process.env.REACT_APP_SERVER_LOCATION + "/api/questions", data)
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

  const toggleAdd = () => {
    var x = document.getElementById("Add Area");
    var y = document.getElementById("errorMessage");
    y.style.display = "none";
    if (x.style.display === "") {
      x.style.display = "none";
    }

    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  };

  const setErrorMessage = (show) => {
    var x = document.getElementById("errorMessage");
    x.style.display = show;
    console.log(x.style.display);
  };
  window.onload = function () {
    if (!props.isAdmin) {
      document.getElementsByClassName("Faq-Adder")[0].style.display = "none";
    }
  };
  return (
    <div className="Faq-Adder">
      <button id="add" class="btn" onClick={toggleAdd}>
        Add FAQ
      </button>
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
