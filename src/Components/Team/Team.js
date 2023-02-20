import "./Team.css"
import TeamBanner from "./TeamBanner";
import {BsInstagram, BsTwitter, BsFacebook} from "react-icons/bs";
import CardTeam from "../Cards/CardTeam";
//Pessoas
import PersonOne from "../../Assets/CardTeam/Person1.jpg";
import PersonTwo from "../../Assets/CardTeam/Person2.jpg";
import PersonThree from "../../Assets/CardTeam/Person3.jpg";
import PersonFour from "../../Assets/CardTeam/Person4.jpg";
import PersonFive from "../../Assets/CardTeam/Person5.jpg";
import PersonSix from "../../Assets/CardTeam/Person6.jpg";

const Team = () => {
  const TeamData = [
    {id:1, person:PersonOne, personName:"Giovani Bacardo", personJob:"Farmer", personSocialInstagram:"", personSocialFacebook:<BsFacebook className={"CardTeamSocialIcon"}/>, personSocialTwitter:<BsTwitter className={"CardTeamSocialIcon"}/>},
    {id:2, person:PersonTwo, personName:"Marianne Loreto", personJob:"Designer", personSocialInstagram:<BsInstagram className={"CardTeamSocialIcon"}/>, personSocialFacebook:<BsFacebook className={"CardTeamSocialIcon"}/>, personSocialTwitter:<BsTwitter className={"CardTeamSocialIcon"}/>},
    {id:3, person:PersonThree, personName:"Riga Pelore", personJob:"Farmer", personSocialInstagram:<BsInstagram className={"CardTeamSocialIcon"}/>, personSocialFacebook:<BsFacebook className={"CardTeamSocialIcon"}/>, personSocialTwitter:<BsTwitter className={"CardTeamSocialIcon"}/>},
    {id:4, person:PersonFour, personName:"Keira Knightley", personJob:"Farmer", personSocialInstagram:<BsInstagram className={"CardTeamSocialIcon"}/>, personSocialFacebook:"", personSocialTwitter:<BsTwitter className={"CardTeamSocialIcon"}/>},
    {id:5, person:PersonFive, personName:"Scott Lawrence", personJob:"Designer", personSocialInstagram:<BsInstagram className={"CardTeamSocialIcon"}/>, personSocialFacebook:<BsFacebook className={"CardTeamSocialIcon"}/>, personSocialTwitter:<BsTwitter className={"CardTeamSocialIcon"}/>},
    {id:6, person:PersonSix, personName:"Karen Allen", personJob:"Farmer", personSocialInstagram:<BsInstagram className={"CardTeamSocialIcon"}/>, personSocialFacebook:<BsFacebook className={"CardTeamSocialIcon"}/>, personSocialTwitter:<BsTwitter className={"CardTeamSocialIcon"}/>},
  ]
  return(
    <div className={"TeamContainer"}>
      <TeamBanner/>

      <div className={"TeamContent"}>
        <section className={"TeamContentText"}>
          <h3 className={"TeamSubTitle"}>Team</h3>
          <h1 className={"TeamTitle"}>Our Organic Experts</h1>
          <p className={"TeamDesc"}>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
        </section>

        <div className={"TeamCardsContent"}>
          {TeamData.map((item) => {
            return(
              <CardTeam person={item.person}
                        personName={item.personName}
                        personJob={item.personJob}
                        personSocialInstagram={item.personSocialInstagram}
                        personSocialFacebook={item.personSocialFacebook}
                        personSocialTwitter={item.personSocialTwitter}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
};export default Team;