import "./About.css"
import AboutImg from "../../Assets/AboutUs/AboutImg.png"
import ButtonDefault from "../Buttons/ButtonDefault";
import Tractor from "../../Assets/AboutUs/Tractor.png"
import Plant from "../../Assets/AboutUs/ChemicalPlant.png"
const About = () => {
  return(
    <div className={"AboutUsAboutContainer"}>
      <div className={"AboutUsAboutContent"}>
        <div className={"AboutLeft"}>
          <img src={AboutImg} alt={"AboutImg"} className={"AboutImg"}/>
        </div>
        <div className={"AboutRight"}>
          <h3 className={"AboutSubTitle"}>About Us</h3>
          <h1 className={"AboutTitle"}>We do Creative Things for Success</h1>
          <p className={"AboutText"}>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley. Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>

          <div className={"AboutPoints"}>
            <div className={"AboutPointCard"}>
              <img src={Tractor} alt={"Tractor"} className={"AboutPointImg"}/>
              <span>Modern Agriculture Equipment</span>
            </div>
            <div className={"AboutPointCard"}>
              <img src={Plant} alt={"Plant"} className={"AboutPointImg"}/>
              <span>No growth hormones are used</span>
            </div>
          </div>
          <div className={"mt-4 w-full md:w-auto"}>
            <ButtonDefault BtnText={"Explore More"} className={"GrayBtn"}/>
          </div>
        </div>
      </div>

    </div>
  )
};export default About