import React, { useState } from "react";

const TextForm = ({ heading }) => {
  // State
  const [text, setText] = useState("");

  // Utils
  const capitalize = (word) => {
    const loweredCase = word.toLowerCase();
    return word[0].toUpperCase() + loweredCase.slice(1);
  };

  // Event Handlers
  const upperCaseClickHandler = (e) => {
    setText(text.toUpperCase());
  };
  const titleCaseClickHandler = (e) => {
    const titleCase = text
      .toLowerCase()
      .split(" ")
      .map((word) => capitalize(word))
      .join(" ");
    setText(titleCase);
  };
  const lowerCaseClickHandler = (e) => {
    setText(text.toLowerCase());
  };
  const clearHandler = (e) => {
    setText("");
  };
  const changeHandler = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <div className="container">
        <h1>{heading}</h1>
        <div className="mb-3">
          <textarea
            value={text}
            onChange={changeHandler}
            className="form-control"
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button onClick={upperCaseClickHandler} className="btn btn-primary">
          Convert to Uppercase
        </button>
        <button
          onClick={titleCaseClickHandler}
          className="btn btn-primary mx-2"
        >
          Convert to Titlecase
        </button>
        <button
          onClick={lowerCaseClickHandler}
          className="btn btn-primary mx-2"
        >
          Convert to Lowercase
        </button>
        <button onClick={clearHandler} className="btn btn-primary mx-2">
          Clear Text
        </button>
        <button
          onClick={() => navigator.clipboard.writeText(text)}
          className="btn btn-primary mx-2"
        >
          Copy Text
        </button>
      </div>
      <div className="container my-3">
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").filter((word) => word).length} words, {text.length}{" "}
          characters
        </p>
        <p>
          {0.008 * text.split(" ").filter((word) => word).length} minute read
        </p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
};

export default TextForm;
