import './App.css';
import Header from "./Components/Header/Header";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import Newsletter from "./Components/Newsletter";
import Footer from "./Components/Footer";
import AboutUs from "./Components/AboutUs/AboutUs";
import Team from "./Components/Team/Team";
import Blog from "./Components/Blog/Blog";
import HeaderMobile from "./Components/Header/HeaderMobile";
import Shop from "./Components/Shop/Shop";
import {Provider} from "react-redux";
import store from "./Redux/store";

function App() {
  return (
    <Provider store={ store }>
      <Router>
        <Header/>
        <HeaderMobile/>
        <Routes>
          <Route path={"/"} element={<HomePage/>}/>
          <Route path={"/AboutUS"} element={<AboutUs/>}/>
          <Route path={"/Team"} element={<Team/>}/>
          <Route path={"/Blog"} element={<Blog/>}/>
          <Route path={"/Shop"} element={<Shop/>}/>
        </Routes>
        <Newsletter/>
        <Footer/>
      </Router>
    </Provider>
  );
}

export default App;
