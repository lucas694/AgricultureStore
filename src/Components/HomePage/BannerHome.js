import "./BannerHome.css"
import BannerHpImg from "../../Assets/HomePage/BannerHpImg.png"
import BtnDefault from "../Buttons/ButtonDefault";

const BannerHome = () => {
  return(
    <div className={"BannerHpContainer"}>
      <div className={"BannerHpContent"}>
        <div className={"BannerHpLeft"}>
          <h3 className={"BannerHpSubTitle"}>100% Natural Food</h3>
          <h1 className={"BannerHpTitle"}>Choose the best healthier way of life</h1>
          <div className={"mt-4 w-full md:w-auto"}>
            <BtnDefault className={"yellowBtn"} BtnText={"Explore Now"}/>
          </div>
        </div>
        <div className={"BannerHpRight"}>
          <img src={BannerHpImg} alt="BannerHpImg" className={"BannerHpImg"}/>
        </div>
      </div>
    </div>
  )
};export default BannerHome;