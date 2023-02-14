import "./CardShop.css"
import Stars from "../../Assets/CardsShop/Star.png"

const CardShop = (props) => {
  return(
    <div className={"CardShopContainer"}>
      <div className={"CardShopType"}>
        <h1>{props.type}</h1>
      </div>
      <div className={"CardShopImgControl"}>
        <img src={props.img} alt="Brocolis" className={"CardShopImg"}/>
      </div>

      <div className={"CardShopDesc"}>
        <h1 className={"CardShopTitle"}>{props.title}</h1>
        <div className={"CardShoMoreInf"}>
          <section>
            <span className={"CardShopOldPrice"}>{props.oldPrice}</span>
            <span className={"CardShopPrice"}>{props.price}</span>
          </section>

          <img src={Stars} alt="Stars" className={"CardShopStars"}/>
        </div>
      </div>
    </div>
  )
};export default CardShop;