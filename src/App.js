import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import { useState } from "react";
import Alert from "./components/Alert";
import { Routes, Route, HashRouter } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const togglemode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };

  return (
    <>
      <Navbar title="Textutils" mode={mode} togglemode={togglemode} />
      <Alert alert={alert} />
      <div className="container">
        {/* <Routes> */}
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route
            path="/"
            element={ */}
        <TextForm showAlert={showAlert} heading="Enter the text to analyse" />
        {/* }
          /> */}
        {/* <Route
            path="/from"
            element={
              <TextForm
                showAlert={showAlert}
                heading="Enter the text to analyse"
              />
            }
          />
        </Routes> */}
      </div>
    </>
  );
}

export default App;
