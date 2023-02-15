import "./WhoWeAre.css"
import BgWWA from "../../Assets/HomePage/BgWWA.jpg"

const WhoWeAre = () => {
  return(
    <div className={"WhoWheAreContainer"}>
      <div className={"WWAContent"}>
        <div className={"WWALeft"}>
          <img src={BgWWA} alt={"Who We Are"} className={"WWAImg"}/>
        </div>
        <div className={"WWARight"}>
          <h3 className={"WWASubTitle"}>Eco Friendly</h3>
          <h1 className={"WWATitle"}>Econis is a Friendly Organic Store</h1>

          <section className={"WWAText"}>
            <h1>Start with Our Company First</h1>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.</p>
          </section>
          <section className={"WWAText"}>
            <h1>Learn How to Grow Yourself</h1>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.</p>
          </section>
          <section className={"WWAText"}>
            <h1>Farming Strategies of Today</h1>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.</p>
          </section>
        </div>
      </div>

    </div>
  )
}; export default WhoWeAre;