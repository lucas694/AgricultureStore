import "./CardBlog.css"
import {FaUserAlt} from "react-icons/fa";
import BtnDefault from "../Buttons/ButtonDefault";

const CardBlog = (props) => {
  return(
    <div className={"CardBlogContainer"}>
      <img src={props.img} alt={"CardBlogGreen"} className={"CardImgGreen"}/>
      <div className={"CardBlogContent"}>
        <div className={"CardBlogDate"}>
          <div className={"CircleDates"}>
            <span>{props.date}</span>
            <span>{props.month}</span>
          </div>

        </div>
        <div className={"CardBlogInfs"}>
          <span className={"CardBlogInfActor"}>
            <FaUserAlt className={"CardBlogUserLogo"}/>
            <span>By {props.user}</span>
          </span>
          <h1 className={"CardBlogTitle"}>{props.title}</h1>
          <p className={"CardBlogDesc"}>{props.desc}</p>
          <div className={"mt-4 w-full md:w-auto "}>
            <BtnDefault className={"yellowBtn"} BtnText={"Explore Now"}/>
          </div>
        </div>

      </div>
    </div>
  )
};export default CardBlog;