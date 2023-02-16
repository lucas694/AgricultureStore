import "./HomePage.css"
import BannerHome from "./BannerHome";
import Offer from "./Offer";
import AboutUs from "./AboutUs";
import OurProducts from "./OurProducts";
import Testimonial from "./Testimonial";
import WhoWeAre from "./WhoWeAre";
import Gallery from "./Gallery";
import BlogNews from "./BlogNews";

const HomePage = () => {
  return(
    <div className={"HomePageContainer"}>
      <BannerHome/>
      <Offer/>
      <AboutUs/>
      <OurProducts/>
      <Testimonial/>
      <WhoWeAre/>
      <Gallery/>
      <BlogNews/>
    </div>
  )
};export default HomePage;