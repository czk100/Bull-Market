import React, { useState, useEffect } from "react";
import "./FaqAdder.css";
const axios = require("axios");

function FaqAdder() {
  const [data, setData] = useState([]);
  const FaqPost = (e) => {
    e.preventDefault();
    if(data.question !== undefined && data.answer !== undefined){
      var newData = {
        question: data.question,
        answer: data.answer,
      };
      setErrorMessage("none")
      setData(newData)
      axios
        .post("http://localhost:5000/api/questions", data)
        .then(function (response) {
          console.log(response);
        });
      window.location.reload();
    }
    else{
      setErrorMessage("block")
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
    if (x.style.display === ""){
      x.style.display = "none";
    }

    if (x.style.display === "none") {
      x.style.display = "block";
    } 
    else {
      x.style.display = "none";
    }
  };

  const setErrorMessage = (show) => {
    var x = document.getElementById("errorMessage");
    x.style.display = show;
    console.log(x.style.display)
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
            <input
              type="text"
              name="details"
              placeholder="Answer"
              class="form-control"
              value={data.answer}
              onChange={handleAnswerChange}
            />
          <button id= "Submit" class="btn" onClick={FaqPost}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default FaqAdder;