import React, { useState } from "react";

const TextForm = ({ heading, showAlert, isDarkMode }) => {
  // State
  const [text, setText] = useState("");

  // Utils
  const capitalize = (word) => {
    if (word === "") {
      return word;
    } else {
      const loweredCase = word.toLowerCase();
      return word[0].toUpperCase() + loweredCase.slice(1);
    }
  };

  // Event Handlers
  const upperCaseClickHandler = (e) => {
    setText(text.toUpperCase());

    showAlert("Converted to UpperCase!", "Success");
  };
  const titleCaseClickHandler = (e) => {
    const titleCase = text
      .toLowerCase()
      .split(" ")
      .map((word) => capitalize(word))
      .join(" ");
    setText(titleCase);

    showAlert("Converted to TitleCase!", "Success");
  };
  const lowerCaseClickHandler = (e) => {
    setText(text.toLowerCase());

    showAlert("Converted to LowerCase!", "Success");
  };
  const clearHandler = (e) => {
    setText("");

    showAlert("Text was Cleared!", "Success");
  };
  const changeHandler = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <div
        className="container"
        style={{ color: isDarkMode ? "white" : "black" }}
      >
        <h1 style={{ color: isDarkMode ? "white" : "black" }}>{heading}</h1>
        <div className="mb-3">
          <textarea
            value={text}
            onChange={changeHandler}
            className="form-control"
            id="myBox"
            rows="8"
            style={{
              backgroundColor: isDarkMode ? "#363636" : "white",
              color: isDarkMode ? "white" : "black",
            }}
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
          onClick={() => {
            navigator.clipboard.writeText(text);
            showAlert("Copied to Clipboard.", "Success");
          }}
          className="btn btn-primary mx-2"
        >
          Copy Text
        </button>
        <div className="my-3">
          <h1>Your text summary</h1>
          <p>
            {text.split(" ").filter((word) => word).length} words, {text.length}{" "}
            characters
          </p>
          <p>
            {0.008 * text.split(" ").filter((word) => word).length} minute read
          </p>
          <h2>Preview</h2>
          <p>
            {text.length > 0
              ? text
              : "Enter your text above to Preview it here."}
          </p>
        </div>
      </div>
    </>
  );
};

export default TextForm;
