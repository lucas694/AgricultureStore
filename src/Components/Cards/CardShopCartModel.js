import "./CardShopCartModel.css"
import Stars from "../../Assets/CardsShop/Star.png"
import {addItem, removeItem,} from "../../Redux/CartSlice";
import {useDispatch} from "react-redux";
import {IoAddOutline, IoRemoveOutline} from "react-icons/io5";


const CardShopCartModel = (props) => {
  const {id,type, img, title, oldPrice, price} = props
  const dispatch = useDispatch()
  const add = () => {
    dispatch(addItem({id,type, img, title, oldPrice, price}))
  }
  const remove = () => {
    dispatch(removeItem(props.index))
  }

  return(
    <div className={"CardShopCartModelContainer"} >
      <div className={"CardShopCartModelQnt"}>
        <h1>1</h1>
      </div>
      <div className={"CardShopCartModelImgControl"}>
        <img src={img} alt="Brocolis" className={"CardShopCartModelImg"}/>
      </div>

      <div className={"CardShopCartModelDesc"}>
        <h1 className={"CardShopCartModelTitle"}>{title}</h1>
        <div className={"CardShopCartModelMoreInf"}>
            <span className={"CardShopCartModelPrice"}>{price}</span>
          <img src={Stars} alt="Stars" className={"CardShopCartModelStars"}/>
        </div>
        <div className={"CardShopCartModelBtnControl"}>
          <button className={"CardShopCartModelAddBtn"} onClick={add}>
            <IoAddOutline className={"CardShopCartModelIcon"}/>
          </button>
          <button className={"CardShopCartModelDelBtn"} onClick={remove}>
            <IoRemoveOutline className={"CardShopCartModelIcon"}/>
          </button>
        </div>
      </div>

    </div>
  )
};export default CardShopCartModel;