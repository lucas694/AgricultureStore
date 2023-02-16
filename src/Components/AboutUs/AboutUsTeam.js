import "./AboutUsTeam.css"
import CardTeam from "../Cards/CardTeam";
import photo from "../../Assets/CardTeam/Person1.jpg"
import phototwo from "../../Assets/CardTeam/Person2.jpg"
import photothree from "../../Assets/CardTeam/Person3.jpg"
import {BsInstagram, BsTwitter, BsFacebook} from "react-icons/bs";

const AboutUsTeam = ( ) =>{
  return(
    <div className={"AboutUsTeamContainer"}>
      <div className={"AboutUsTeamContent"}>
        <h3 className={"AboutUsTeamSubTitle"}>Team</h3>
        <h1 className={"AboutUsTeamTitle"}>Our Organic Experts</h1>
        <p className={"AboutUsTeamDesc"}>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>

        <div className={"AboutUsTeamCardContent"}>
          <CardTeam person={photo}
                    personName={"Giovani Bacardo"}
                    personJob={"Farmer"}
                    personSocialInstagram={""}
                    personSocialFacebook={<BsFacebook className={"CardTeamSocialIcon"}/>}
                    personSocialTwitter={<BsTwitter className={"CardTeamSocialIcon"}/>}
          />
          <CardTeam person={phototwo}
                    personName={"Marianne Loreno"}
                    personJob={"Design"}
                    personSocialInstagram={<BsInstagram className={"CardTeamSocialIcon"}/>}
                    personSocialFacebook={<BsFacebook className={"CardTeamSocialIcon"}/>}
                    personSocialTwitter={<BsTwitter className={"CardTeamSocialIcon"}/>}
          />
          <CardTeam person={photothree}
                    personName={"Riga Pelore"}
                    personJob={"Farmer"}
                    personSocialInstagram={<BsInstagram className={"CardTeamSocialIcon"}/>}
                    personSocialFacebook={<BsFacebook className={"CardTeamSocialIcon"}/>}
                    personSocialTwitter={<BsTwitter className={"CardTeamSocialIcon"}/>}
          />
        </div>
      </div>
    </div>
  )
};export default AboutUsTeam