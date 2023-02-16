import "./CardTeam.css"
import photo from "../../Assets/CardTeam/Person1.jpg"
import {BsInstagram, BsTwitter, BsFacebook} from "react-icons/bs";

const CardTeam = (props) => {
  return(
    <div className={"CardTeamContainer"}>
      <div className={"CardTeamImg"}>
        <img src={props.person} alt={""} className={"CardTeamPhoto"}/>
      </div>
      <div className={"CardTeamDescript"}>
        <h1 className={"CardTeamName"}>{props.personName}</h1>
        <section>
          <h3 className={"CardTeamJob"}>{props.personJob}</h3>
          <div className={"CardTeamSocial"}>
            {props.personSocialInstagram}
            {props.personSocialFacebook}
            {props.personSocialTwitter}
          </div>
        </section>

      </div>

    </div>
  )
};export default CardTeam