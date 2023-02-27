import "./Header.css"
import LogoHeader from "../../Assets/LogoHeader.svg"
import {BsCart3} from "react-icons/bs"
import {NavLink} from "react-router-dom";
import {useState} from "react";
import {IoCloseOutline} from "react-icons/io5";
import ModalCartContent from "./ModalCartContent";

const Header = () => {
  const[isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)

  return(
    <div className={"HeaderContainer"}>
      <div className={isOpen ? "ModalCart" : "hidden"}>
        <div className={"SecBtnClose"}>
          <button className={"BtnClose"} onClick={toggle}>
            <IoCloseOutline className={"CloseIcon"}/>
          </button>
          <h1>Shopping Cart</h1>
        </div>
        <div className={"ModalContent"}>
          <ModalCartContent/>
        </div>

      </div>
      <div className={""}>
        <img src={LogoHeader} alt="LogoHeader" className={"LogoHeader"}/>
      </div>

      <ul className={"UlHeader"}>
        <NavLink to={"/"} className={({ isActive }) =>
          isActive ? "NavLinkIsActive" :"LiNavLink" }>
          Home
        </NavLink>
        <NavLink to={"/AboutUs"} className={({ isActive }) =>
          isActive ? "NavLinkIsActive" :"LiNavLink" }>
          About
        </NavLink>
        <NavLink to={"/Shop"} className={({ isActive }) =>
          isActive ? "NavLinkIsActive" :"LiNavLink" }>
          Shop
        </NavLink>
        <NavLink to={"/Team"} className={({ isActive }) =>
          isActive ? "NavLinkIsActive" :"LiNavLink" }>
          Team
        </NavLink>
        <NavLink to={"/Blog"} className={({ isActive }) =>
          isActive ? "NavLinkIsActive" :"LiNavLink" }>
          Blog
        </NavLink>

      </ul>
      <div className={isOpen ? "hidden" : "flex items-center"}>
        <button className={"BtnCart"} onClick={toggle}>
          <BsCart3 className={"CartIcon"}/>
        </button>
        <span className={"CartValues"}>(0)</span>
      </div>

    </div>
  )
};export default Header;