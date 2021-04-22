import React, { useState, useEffect } from "react";
import "./FaqComponent.css";
const axios = require("axios");

const FaqComponent = (props) => {
  const [data, setData] = useState([]);

  const deleteFaq = () => {
    var toDelete = { data: { question: props.parentData.question } };
    console.log(toDelete);
    axios
      .delete(process.env.REACT_APP_SERVER_LOCATION + "/api/questions", toDelete)
      .then(function (response) {
        console.log(response);
      });
    window.location.reload();
  };

  const editFaq = () => {
    var toEdit = {
      oldQuestion: props.parentData.question,
      newData: data.d,
    };
    console.log(toEdit);
    axios
      .put(process.env.REACT_APP_SERVER_LOCATION + "/api/questions", toEdit)
      .then(function (response) {
        console.log(response);
      });
    window.location.reload();
  };

  useEffect(() => {
    var newData = {
      show: false,
      d: props.parentData,
    };
    console.log(props);
    setData(newData);
  }, [props]);

  const handleQuestionChange = (e) => {
    var newData = {
      show: data.show,
      d: {
        question: e.target.value,
        answer: data.d.answer,
      },
    };
    setData(newData);
  };

  const handleAnswerChange = (e) => {
    var newData = {
      show: data.show,
      d: {
        question: data.d.question,
        answer: e.target.value,
      },
    };
    setData(newData);
  };

  function hideForGuest() {
    var i = 0;
    if (!props.isAdmin && document.getElementsByClassName("deled").length > 0) {
      for (
        i = 0;
        i < document.getElementsByClassName("deled").length;
        i++
      ) {
        document.getElementsByClassName("deled")[i].style.display = "none";
      }
    }
    if (document.getElementsByClassName("textArea").length > 0) {
      for (
        i = 0;
        i < document.getElementsByClassName("textArea").length;
        i++
      ) {
        document.getElementsByClassName("textArea")[i].style.display = "none";
      }
    }
  }

  return (
    <div className="Faq-Component">
      <div class="card">
        <div class="card-header justify-content-between">
          <code class="timestamp"></code>
          <div class="btn-group">
            <button id="del" class="btn deled" onClick={deleteFaq}>
              Delete
            </button>
            <button id="ed" class="btn deled" onClick={editFaq}>
              Edit
            </button>
          </div>
        </div>
        <div class="card-body">
          <h5 class="card-title">{props.parentData.question}</h5>
          <p class="card-text">{props.parentData.answer}</p>
          <div id="Edit Area" className="textArea">
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
          </div>
        </div>
        {hideForGuest()}
      </div>
    </div>
  );
};

export default FaqComponent;
