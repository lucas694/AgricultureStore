import './App.css';
import Header from "./Components/Header";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import Newsletter from "./Components/Newsletter";
import Footer from "./Components/Footer";
import AboutUs from "./Components/AboutUs/AboutUs";
import Team from "./Components/Team/Team";
import Blog from "./Components/Blog/Blog";
import HeaderMobile from "./Components/HeaderMobile";

function App() {
  return (
    <Router>
      <Header/>
      <HeaderMobile/>
      <Routes>
        <Route path={"/"} element={<HomePage/>}/>
        <Route path={"/AboutUS"} element={<AboutUs/>}/>
        <Route path={"/Team"} element={<Team/>}/>
        <Route path={"/Blog"} element={<Blog/>}/>

      </Routes>
      <Newsletter/>
      <Footer/>
    </Router>
  );
}

export default App;
