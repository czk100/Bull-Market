import React, { useState, useEffect } from "react";
import "./FaqComponent.css";
const axios = require("axios");

const FaqComponent = (props) => {
  const [data, setData] = useState([]);


  const deleteFaq = () => {
    var toDelete = { data: { question: props.parentData.question } };
    console.log(toDelete);
    axios
      .delete("http://localhost:5000/api/questions", toDelete)
      .then(function (response) {
        console.log(response);
      });
    window.location.reload();
  };

  const toggleEdit = () => {
    var x = { data: { question: props.parentData.question } };
    console.log(x);
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

  const editFaq = () => {
    var toEdit = {
      oldQuestion: props.parentData.question,
      newData: data,
    };
    console.log(toEdit);
    axios
      .put("http://localhost:5000/api/questions", toEdit)
      .then(function (response) {
        console.log(response);
      });
    window.location.reload();
  };

  useEffect(() => {
    console.log(props);
    setData(props.parentData);
  }, []);

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

  return (
    <div className="Faq-Component">
      <div class="card">
        <div class="card-header justify-content-between">
          <code class="timestamp">DATE PLACEHOLDER</code>
          <div class="btn-group">
            <button id="del" class="btn" onClick={deleteFaq}>
              Delete
            </button>
            <button id="ed" class="btn" onClick={toggleEdit}>
              Edit
            </button>
          </div>
        </div>
        <div class="card-body">
          <h5 class="card-title">{props.parentData.question}</h5>
          <p class="card-text">{props.parentData.answer}</p>
          <div id="Edit Area" class="textArea">
            <input
              type="text"
              name="details name"
              placeholder="Question"
              class="form-control"
              value={data.question}
              onChange={(e) => handleQuestionChange(e)}
            />
            <input
              type="text"
              name="details content"
              placeholder="Answer"
              class="form-control"
              value={data.answer}
              onChange={(e) => handleAnswerChange(e)}
            />
            <button id="sub" class="btn" onClick={editFaq}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqComponent;
