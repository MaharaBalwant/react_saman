import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  const [enableMode, setEnableMode] = useState('light'); // dark mode enable or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message:message,
      type:type
    });
    
    setTimeout( ()=> {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (enableMode === 'light') {
      setEnableMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert('Dark mode have been enabled!', 'Success : ');
    } else {
      setEnableMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode have been enabled!', 'Success : ');
    }
  }
  return (
    <>
    <Router>
      <Navbar title="Pahadi Saman" mode={enableMode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-5">
        <Routes>
          <Route exact path="/about" element={<About mode={enableMode}/>}>
            
          </Route>
          <Route exact path="/" element={<TextForm label="Input example label: "/>}>
            
          </Route>
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
