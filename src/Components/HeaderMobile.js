import "./HeaderMobile.css"
import {NavLink} from "react-router-dom";
import {FaBars} from "react-icons/fa";
import {BsCart3} from "react-icons/bs";
import {useState} from "react";
import LogoHeader from "../Assets/LogoHeader.svg"


const HeaderMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return(
    <div className={"HeaderMobileContainer"}>
      <div className={"HeaderMobileContent"}>
        <img src={LogoHeader} alt="LogoHeader" className={isOpen ? "hidden" : "LogoMobileHeader"}/>

        <ul className={isOpen ? "flex" : "hidden"}>
          <NavLink to={"/"} className={({ isActive }) =>
            isActive ? "NavLinkMobileIsActive" :"LiNavLinkMobile" }>
            Home
          </NavLink>
          <NavLink to={"/AboutUs"} className={({ isActive }) =>
            isActive ? "NavLinkMobileIsActive" :"LiNavLinkMobile" }>
            About
          </NavLink>
          <NavLink to={"/Shop"} className={({ isActive }) =>
            isActive ? "NavLinkMobileIsActive" :"LiNavLinkMobile" }>
            Shop
          </NavLink>
          <NavLink to={"/Team"} className={({ isActive }) =>
            isActive ? "NavLinkMobileIsActive" :"LiNavLinkMobile" }>
            Team
          </NavLink>
          <NavLink to={"/Blog"} className={({ isActive }) =>
            isActive ? "NavLinkMobileIsActive" :"LiNavLinkMobile" }>
            Blog
          </NavLink>
        </ul>
        <div className={"MobileBtnSec"}>
          <button className={"BtnMobileCart"}>
            <BsCart3 className={"CartMobileIcon"}/>
          </button>
          <button onClick={toggle}>
            <FaBars className={"BtnMobileIcon"}/>
          </button>
        </div>
      </div>

    </div>
  )
};export default HeaderMobile;