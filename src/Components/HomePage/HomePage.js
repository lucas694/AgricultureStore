import "./HomePage.css"
import BannerHome from "./BannerHome";
import Offer from "./Offer";
import AboutUs from "./AboutUs";
import OurProducts from "./OurProducts/OurProducts";

const HomePage = () => {
  return(
    <div className={"HomePageContainer"}>
      <BannerHome/>
      <Offer/>
      <AboutUs/>
      <OurProducts/>
    </div>
  )
};export default HomePage;