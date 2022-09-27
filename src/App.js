import logo from './logo.svg';
import './App.css';
import LandingPage3 from './pages/LandingPage3';


import { BrowserRouter } from "react-router-dom";
import Routed from "./config/Routed";


function App() {
  return (
    <BrowserRouter>
      <Routed />
    </BrowserRouter>
  );
}

export default App;
