
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from 'react';
import Alert from "./components/Alert";
// import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  const [alert, setalert] = useState(null);
  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 1500)
  }
  const [mode, setkMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light') {
      setkMode('dark')
      document.body.style.backgroundColor = '#242743';
      showAlert("DarkMode Has Been Enabled", "success");
      // document.title = "TextUtils - Dark Mode";
    }
    else {
      setkMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("LightMode Has Been Enabled", "success");
      // document.title = "TextUtils - Light Mode";
    }
  }
  return (
    <><Router>
      <Navbar title="TextUtils" aboutText="About us" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />

      <Switch>
        <Route exact path="/about">
          <About mode={mode}/>
        </Route>
        <Route exact path="/">
          <TextForm showAlert={showAlert} heading="Enter The Text To Analyze" mode={mode} />
          {/* <Home /> */}
        </Route>
      </Switch>
    </Router>

    </>
  );
}

export default App;
