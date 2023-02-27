import "./CardShop.css"
import Stars from "../../Assets/CardsShop/Star.png"
import {addItem, removeItem, } from "../../Redux/CartSlice";
import {useDispatch} from "react-redux";
import {IoAddOutline, IoRemoveOutline} from "react-icons/io5";

const CardShop = (props) => {
  const {id,type, img, title, oldPrice, price} = props
  const dispatch = useDispatch()
  const add = () => {
    dispatch(addItem({id,type, img, title, oldPrice, price}))
  }
  const remove = () => {
    dispatch(removeItem({id,type, img, title, oldPrice, price}))
  }
  return(
    <div className={"CardShopContainer"}>
      <div className={"CardShopType"}>
        <h1>{type}</h1>
      </div>
      <div className={"CardShopImgControl"}>
        <img src={img} alt="Brocolis" className={"CardShopImg"}/>
      </div>

      <div className={"CardShopDesc"}>
        <h1 className={"CardShopTitle"}>{title}</h1>
        <div className={"CardShoMoreInf"}>
          <section>
            <span className={"CardShopOldPrice"}>{oldPrice}</span>
            <span className={"CardShopPrice"}>{price}</span>
          </section>
          <img src={Stars} alt="Stars" className={"CardShopStars"}/>
        </div>
      </div>
      <div className={"flex justify-around mt-2"}>
        <button className={"CardShopCartModelAddBtn"} onClick={add}>
          <IoAddOutline className={"CardShopCartModelIcon"}/>
        </button>
        <button className={"CardShopCartModelDelBtn"} onClick={remove}>
          <IoRemoveOutline className={"CardShopCartModelIcon"}/>
        </button>
        {}
      </div>
    </div>
  )
};export default CardShop;