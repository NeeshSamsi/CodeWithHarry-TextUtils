import React, { useState } from "react";

const TextForm = ({ heading }) => {
  // State
  const [text, setText] = useState("Enter text here");

  // Event Handlers
  const upperCaseClickHandler = (e) => {
    setText(text.toUpperCase());
  };
  const upperCaseChangeHandler = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <h1>{heading}</h1>
      <div className="mb-3">
        <textarea
          value={text}
          onChange={upperCaseChangeHandler}
          className="form-control"
          id="myBox"
          rows="8"
        ></textarea>
      </div>
      <button onClick={upperCaseClickHandler} className="btn btn-primary">
        Convert to Uppercase
      </button>
    </div>
  );
};

export default TextForm;
