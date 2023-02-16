import "./WhyChoosUs.css";
import WhyChoosUsImg from "../../Assets/AboutUs/WhyChoosUsImg.jpg"
import CircleIcon from "../../Assets/AboutUs/CircleIcon.png"

const WhyChoosUs = () => {
  return(
    <div className={"WhyChoosUsContainer"}>
      <div className={"WhyChoosUsContent"}>
        <div className={"WhyChoosLeft"}>
          <h3 className={"WhyChoosSubTitle"}>Why Choose us?</h3>
          <h1 className={"WhyChoosTitle"}>We do not buy from the
            open market & traders.
          </h1>
          <p className={"WhyChoosDesc"}>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard  the 1500s, when an unknown</p>

          <div className={"WhyChoosUsPoints"}>
            <div className={"WhyChoosUsCard"}>
              <section>
                <img src={CircleIcon} alt="" className={"WhyChoosUsIcon"}/>
                <h1>100% Natural Product</h1>
              </section>
              <p>Simply dummy text of the printing and typesetting industry Lorem Ipsum</p>
            </div>

            <div className={"WhyChoosUsCard"}>
              <section>
                <img src={CircleIcon} alt="" className={"WhyChoosUsIcon"}/>
                <h1>100% Natural Product</h1>
              </section>
              <p>Simply dummy text of the printing and typesetting industry Lorem Ipsum</p>
            </div>
          </div>
        </div>
        <div className={"WhyChoosRight"}>
          <img src={WhyChoosUsImg} alt="" className={"WhyChoosUsImg"}/>
        </div>
      </div>

    </div>
  )
};export default WhyChoosUs