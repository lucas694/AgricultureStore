import "./Footer.css"
import FooterLogo from "../Assets/FooterLogo.png"
import {FaInstagram,} from "react-icons/fa";
import {BsFacebook,BsTwitter,BsPinterest} from "react-icons/bs";

const Footer = () => {
  return(
    <div className={"FooterContainer"}>
      <div className={"FooterContent"}>
        <ul className={"UlLeftFooter"}>
          <li>
            <h1 className={"FooterTitle"}>Contact Us</h1>
          </li>
          <li>
            <span className={"FooterSpan"}>Email</span>
            <p className={"FooterText"}>Email needhelp@Organia.com</p>
          </li>
          <li>
            <span className={"FooterSpan"}>Phone</span>
            <p className={"FooterText"}>666 888 888</p>
          </li>
          <li>
            <span className={"FooterSpan"}>Address</span>
            <p className={"FooterText"}>88 road, borklyn street, USA</p>
          </li>
        </ul>

        <div className={"FooterMain"}>
          <img src={FooterLogo} alt={"FooterLogo"} className={"FooterLogo"}/>
          <p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing</p>
          <div className={"FooterSocial"}>
            <FaInstagram className={"FooterIcon"}/>
            <BsFacebook className={"FooterIcon"}/>
            <BsTwitter className={"FooterIcon"}/>
            <BsPinterest className={"FooterIcon"}/>
          </div>
        </div>

        <ul className={"UlRightFooter"}>
          <li>
            <h1 className={"FooterTitle"}>Utility Pages</h1>
          </li>
          <li>
            <p className={"FooterText"}>Style Guide</p>
          </li>
          <li>
            <p className={"FooterText"}>404 Not Found</p>
          </li>
          <li>
            <p className={"FooterText"}>Password Protected</p>
          </li>
          <li>
            <p className={"FooterText"}>Licences</p>
          </li>
          <li>
            <p className={"FooterText"}>Changelog</p>
          </li>
        </ul>
      </div>
      <div className={"FooterCopy"}>
        <p>© 2023 <span>Lucas</span>. All rights reserved. | Design by <span>Figma</span></p>
      </div>
    </div>
  )
};export default Footer;