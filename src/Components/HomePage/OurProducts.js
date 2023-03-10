import "./OurProducts.css"
import ButtonDefault from "../Buttons/ButtonDefault";
import CardShop from "../Cards/CardShop";
import {Link} from "react-router-dom";

//ImgCards
import Brocolis from "../../Assets/CardsShop/Brocolis.png"
import Banana from "../../Assets/CardsShop/Banana.png"
import WhiteNuts from "../../Assets/CardsShop/WhiteNuts.png"
import Tomato from "../../Assets/CardsShop/Tomato.png"
import MungBean from "../../Assets/CardsShop/MungBean.png"
import BrownHazel from "../../Assets/CardsShop/BrownH.png"
import Eggs from "../../Assets/CardsShop/Eggs.png"
import Zelco from "../../Assets/CardsShop/Zelco.png"
import Onion from "../../Assets/CardsShop/Onion.png"
import MungBeanVeg from "../../Assets/CardsShop/MungBeanVeg.png"
import FreshCorn from "../../Assets/CardsShop/FreshCorn.png"
import maca from "../../Assets/CardsShop/maca.png"

const OurProducts = () => {
  const OurProductsData =[
    {id:1, img:Brocolis, title:"Calabrese Broccoli",type:"Vegetable" ,oldPrice:"$20.00", price:"$13.00",},
    {id:2, img:Banana, title:"Fresh Banana Fruites",type:"Fresh" ,oldPrice:"$20.00", price:"$14.00",},
    {id:3, img:WhiteNuts, title:"White Nuts",type:"Millets" ,oldPrice:"$20.00", price:"$15.00",},
    {id:4, img:MungBean, title:"Mung Bean",type:"Health" ,oldPrice:"$20.00", price:"$11.00",},
    {id:5, img:BrownHazel, title:"Brown Hazelnut",type:"Nuts" ,oldPrice:"$20.00", price:"$12.00",},
    {id:6, img:Eggs, title:"Eggs",type:"Fresh" ,oldPrice:"$20.00", price:"$17.00",},
    {id:7, img:Zelco, title:"Zelco Suji Elaichi Rusk",type:"Fresh" ,oldPrice:"$20.00", price:"$15.00",},
    {id:8, img:maca, title:"Red Apple",type:"Fresh" ,oldPrice:"$20.00", price:"$14.00",},
  ]
  return(
    <div className={"OurProductsContainer"}>
      <div className={"OurProductsContent"}>
        <h3 className={"OurProductsSubTitle"}>Categories</h3>
        <h1 className={"OurProductsTitle"}>Our Products</h1>
        {/*Cards Here*/}
        <div className={"OurProductsCardsContent"}>
          {OurProductsData.map (item => {
            return(
              <CardShop
                key={item.id}
                img={item.img}
                title={item.title}
                type={item.type}
                oldPrice={item.oldPrice}
                price={item.price}
              />
            )
          })}
        </div>
        {/*Cards Here*/}
        <div className={"w-full md:w-auto mt-10"}>
          <Link to={"/Shop"}>
            <ButtonDefault className={"GrayBtn"} BtnText={"See More"}/>
          </Link>
        </div>
      </div>
    </div>
  )
}; export default OurProducts;