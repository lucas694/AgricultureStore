import "./Shop.css"
//imgs
import Brocolis from "../../Assets/CardsShop/Brocolis.png";
import Banana from "../../Assets/CardsShop/Banana.png";
import WhiteNuts from "../../Assets/CardsShop/WhiteNuts.png";
import MungBean from "../../Assets/CardsShop/MungBean.png";
import BrownHazel from "../../Assets/CardsShop/BrownH.png";
import Eggs from "../../Assets/CardsShop/Eggs.png";
import Zelco from "../../Assets/CardsShop/Zelco.png";
import maca from "../../Assets/CardsShop/maca.png";
import Tomato from "../../Assets/CardsShop/Tomato.png";
import MungBeanVeg from "../../Assets/CardsShop/MungBeanVeg.png";
import Onion from "../../Assets/CardsShop/Onion.png";
import FreshCorn from "../../Assets/CardsShop/FreshCorn.png";
import WhiteHazelnut from "../../Assets/CardsShop/WhiteHazelnut.png";
import OrganicAlmonds from "../../Assets/CardsShop/OrganicAlmonds.png";
//
import ShopBanner from "./ShopBanner";
import {useState} from "react";
import CardShop from "../Cards/CardShop";
import ButtonDefault from "../Buttons/ButtonDefault";

const Shop = () => {
  const[active, setActive] = useState(false)
  const togleActive = () => {
    setActive(!active)
  }
  const ShopProductsData =[
    {id:1, img:Brocolis, title:"Calabrese Broccoli",type:"Vegetable" ,oldPrice:"$20.00", price:"$13.00",},
    {id:2, img:Banana, title:"Fresh Banana Fruites",type:"Fresh" ,oldPrice:"$20.00", price:"$14.00",},
    {id:3, img:WhiteNuts, title:"White Nuts",type:"Millets" ,oldPrice:"$20.00", price:"$15.00",},
    {id:4, img:MungBean, title:"Mung Bean",type:"Health" ,oldPrice:"$20.00", price:"$11.00",},
    {id:5, img:BrownHazel, title:"Brown Hazelnut",type:"Nuts" ,oldPrice:"$20.00", price:"$12.00",},
    {id:6, img:Eggs, title:"Eggs",type:"Fresh" ,oldPrice:"$20.00", price:"$17.00",},
    {id:7, img:Zelco, title:"Zelco Suji Elaichi Rusk",type:"Fresh" ,oldPrice:"$20.00", price:"$15.00",},
    {id:8, img:maca, title:"Red Apple",type:"Fresh" ,oldPrice:"$20.00", price:"$14.00",},
    {id:9, img:Tomato, title:"Vegan Red Tomato",type:"Vegetable" ,oldPrice:"$20.00", price:"$17.00",},
    {id:10, img:MungBeanVeg, title:"Mung Bean",type:"Vegetable" ,oldPrice:"$20.00", price:"$11.00",},
    {id:11, img:Onion, title:"Onion",type:"Vegetable" ,oldPrice:"$20.00", price:"$17.00",},
    {id:12, img:FreshCorn, title:"Fresh Corn",type:"Fresh" ,oldPrice:"$20.00", price:"$17.00",},
    {id:13, img:WhiteHazelnut, title:"White Hazelnut",type:"Nuts" ,oldPrice:"$20.00", price:"$12.00",},
    {id:14, img:OrganicAlmonds, title:"Organic Almonds",type:"Fresh" ,oldPrice:"$20.00", price:"$15.00",},
  ]
  return(
    <div className={"ShopContainer"}>
      <ShopBanner/>
      <div className={"ShopProductsContainer"}>
        {ShopProductsData.slice(0, active ? ShopProductsData.length : ShopProductsData.length -4).map (item => {
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
      <div className={"w-[90%] md:w-auto mt-10"}>
        <ButtonDefault className={"GrayBtn"} BtnText={"Load More"} onClick={togleActive}/>
      </div>
    </div>
  )
};export default Shop;