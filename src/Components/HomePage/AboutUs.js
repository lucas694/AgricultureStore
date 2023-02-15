import "./AboutUs.css"
import AboutUsImg from "../../Assets/HomePage/AboutUs/AboutUsImg.png"
import ButtonDefault from "../Buttons/ButtonDefault";
import VeganImg from "../../Assets/HomePage/AboutUs/Vegan Food.png"
import MailBox from "../../Assets/HomePage/AboutUs/Mailbox Quality.png"

const AboutUs = () => {
  return(
    <div className={"AboutUsContainer"}>
      <div  className={"AboutUsLeft"}>
        <img src={AboutUsImg} alt="AboutUsImg" className={"AboutUsImg"}/>
      </div>
      <div  className={"AboutUsRight"}>
        <h3 className={"AboutUsSubTitle"}>About Us</h3>
        <h1 className={"AboutUsTitle"}>We Believe in Working Accredited Farmers</h1>
        <p className={"AboutUsDesc"}>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
        {/* Points Cards*/}
        <div className={"AboutUsPoints"}>
          <div className={"PointsCards"}>
            <div className={"p-4"}>
              <img src={VeganImg} alt="VeganImg" className={"PointsCardsImg"}/>
            </div>
            <div className={"PointsCardText"}>
              <h1 className={"PointsTitle"}>Organic Foods Only</h1>
              <p className={"PointsDesc"}>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
            </div>
          </div>
          <div className={"PointsCards"}>
            <div className={"p-4"}>
              <img src={MailBox} alt="VeganImg" className={"PointsCardsImg"}/>
            </div>
            <div className={"PointsCardText"}>
              <h1 className={"PointsTitle"}>Quality Standards</h1>
              <p className={"PointsDesc"}>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
            </div>
          </div>
        </div>
        {/* Points Cards*/}
        <div className={"w-full md:w-auto mt-6"}>
          <ButtonDefault className={"GrayBtn"} BtnText={"Shop Now"}/>
        </div>
      </div>
   </div>
  )
};export default AboutUs;