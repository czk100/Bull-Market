import React, { useState, useEffect } from "react";
const axios = require("axios");

function FaqAdder() {
  const [data, setData] = useState([]);
  const FaqPost = () => {
    // var newAnnouncement = {
    //   name
    // }
    console.log(data);
    axios
      .post("http://localhost:5000/api/questions", data)
      .then(function (response) {
        console.log(response);
      });
  };

//   const showHide = () => {};

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
    <div className="Faq-Adder">
      {/* <input type="submit" value="Add new thing" onClick={showHide} /> */}

      <div class="input-group">
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
        <div class="input-group-append">
          <button class="btn" onClick={FaqPost}>
            Add new Announcement
          </button>
        </div>
      </div>
    </div>
  );
}

export default FaqAdder;
