import "./AboutUs.css"
import AboutUsBanner from "./AboutBanner";
import About from "./About";
import WhyChoosUs from "./WhyChoosUs";
import AboutUsTeam from "./AboutUsTeam";

const AboutUs = () =>{
  return(
    <div className={"AboutContainer"}>
      <AboutUsBanner/>
      <About/>
      <WhyChoosUs/>
      <AboutUsTeam/>

    </div>
  )
};export default AboutUs