import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import Newsletter from "./Components/Newsletter";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path={"/"} element={<HomePage/>}/>

      </Routes>
      <Newsletter/>
      <Footer/>
    </Router>
  );
}

export default App;
