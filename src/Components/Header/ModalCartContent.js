import {getCart} from "../../Redux/CartSlice";
import {useSelector} from "react-redux";
import CardShopCartModel from "../Cards/CardShopCartModel";

const ModalCartContent = () => {
  const cart = useSelector(getCart);


  return(
    <div className={"w-full "}>
      {cart.map((item, index) => (
        <CardShopCartModel
          key={item.id}
          img={item.img}
          title={item.title}
          type={item.type}
          oldPrice={item.oldPrice}
          price={item.price}
          index={index}
        />
      ))}
    </div>
  )
};export default ModalCartContent;