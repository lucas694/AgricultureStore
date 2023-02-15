import "./HomePage.css"
import BannerHome from "./BannerHome";
import Offer from "./Offer";
import AboutUs from "./AboutUs";
import OurProducts from "./OurProducts";
import Testimonial from "./Testimonial";
import WhoWeAre from "./WhoWeAre";

const HomePage = () => {
  return(
    <div className={"HomePageContainer"}>
      <BannerHome/>
      <Offer/>
      <AboutUs/>
      <OurProducts/>
      <Testimonial/>
      <WhoWeAre/>
    </div>
  )
};export default HomePage;