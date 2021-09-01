import { useState } from "react";

import About from "./components/About";
import Alert from "./components/Alert";
import Nav from "./components/Nav";
import TextForm from "./components/TextForm";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (isDarkMode) {
      setIsDarkMode(!isDarkMode);
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "Success");
    } else {
      setIsDarkMode(!isDarkMode);
      document.body.style.backgroundColor = "#363636";
      showAlert("Dark mode has been enabled", "Success");
    }
  };

  return (
    <>
      <Nav title="TextUtils" isDarkMode={isDarkMode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm
          heading="Enter the text to analize below"
          showAlert={showAlert}
          isDarkMode={isDarkMode}
        />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
