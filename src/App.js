import { useState } from "react";

import About from "./components/About";
import Nav from "./components/Nav";
import TextForm from "./components/TextForm";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    if (isDarkMode) {
      setIsDarkMode(!isDarkMode);
      document.body.style.backgroundColor = "white";
    } else {
      setIsDarkMode(!isDarkMode);
      document.body.style.backgroundColor = "#363636";
    }
  };

  return (
    <>
      <Nav title="TextUtils" isDarkMode={isDarkMode} toggleMode={toggleMode} />
      <div className="container my-3">
        <TextForm
          heading="Enter the text to analize below"
          isDarkMode={isDarkMode}
        />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
