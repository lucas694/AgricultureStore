import "./ButtonDefault.css"
import {BsFillArrowRightCircleFill} from "react-icons/bs"
const ButtonDefault = (props) => {
  return(
    <button className={props.className} onClick={props.onClick}> {props.BtnText}
    <BsFillArrowRightCircleFill className={"ArrowIconBtn"}/>
    </button>
  )
};export default ButtonDefault;