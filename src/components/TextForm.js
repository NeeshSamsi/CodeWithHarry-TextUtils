import React, { useState } from "react";

const TextForm = ({ heading }) => {
  // State
  const [text, setText] = useState("Enter text here");

  // Event Handlers
  const upperCaseClickHandler = (e) => {
    setText(text.toUpperCase());
  };
  const lowerCaseClickHandler = (e) => {
    setText(text.toLowerCase());
  };
  const upperCaseChangeHandler = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <div className="container">
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
        <button
          onClick={upperCaseClickHandler}
          className="btn btn-primary mx-2"
        >
          Convert to Uppercase
        </button>
        <button
          onClick={lowerCaseClickHandler}
          className="btn btn-primary mx-2"
        >
          Convert to Lowercase
        </button>
      </div>
      <div className="container my-3">
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").length} words, {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minute read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
};

export default TextForm;
