import "./Testimonial.css"
import Person1 from "../../Assets/HomePage/TestimonialPerson1.jpg"
import Start from "../../Assets/CardsShop/Star.png"

const Testimonial = () => {
  return(
    <div className={"TestimonialContainer"}>
      <div className={"TestimonialContent"}>
        <h3 className={"TestimonialSubTitle"}>Testimonial</h3>
        <h1 className={"TestimonialTitle"}>What Our Costumer Saying?</h1>

        <div className={"TestimonialCardsContent"}>
          <div className={"TestimonialCard"}>
            <div className={"TestimonialCardImgs"}>
              <img src={Person1} alt="Person1" className={"TestimonialPerson"}/>
              <img src={Start} alt="Start" className={"TestimonialStars"}/>
            </div>
            <div className={"TestimonialCardDesc"}>
              <p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
              <h1>Sara Taylor</h1>
              <span>Consumer</span>
            </div>
          </div>
        </div>

        <div className={"flex flex-row w-full mt-10 justify-around"}>
          <section className={"TestimonialBall"}>
            100%
            <p>Organic</p>
          </section>
          <section className={"TestimonialBall"}>
            285
            <p>Active Product</p>
          </section>
          <section className={"TestimonialBall"}>
            350+
            <p>Organic Orchads</p>
          </section>
          <section className={"TestimonialBall"}>
            25+
            <p>Years Of Farming</p>
          </section>
        </div>
      </div>
    </div>
  )
};export default Testimonial;