
import './App.css';
import { useState } from 'react';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);

  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
      showAlert('Dark mode has been enabled', 'success');
      document.title = "TxtFlipper -Dark Mode"
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = '#f0f2f5';
      document.body.style.color = 'black';
      showAlert('Light mode has been enabled', 'danger')
      document.title = "TxtFlipper -Light Mode"
    }
  }

  return (
    <>
      <Router>
        <Navbar title="TxtFlipper" /*about="AboutUs"*/ landingpage="Home" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} showAlert={showAlert} />
        <Switch>
          <Route exact path="/about">
            <About mode={mode} />
          </Route>
          <Route exact path="/">
          <About mode={mode}/>
          <TextForm showAlert={showAlert} heading="Unlock the Power of Your Text with TxtFlipper!" mode={mode} />
          </Route>
          <Route exact path="/home">
            <TextForm showAlert={showAlert} heading="Unlock the Power of Your Text with TxtFlipper!" mode={mode} />
          </Route>
        </Switch>
      </Router>
    </>

  );
}

export default App;
