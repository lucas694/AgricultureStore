import "./Header.css"
import LogoHeader from "../Assets/LogoHeader.svg"
import {BsCart3} from "react-icons/bs"
import {NavLink} from "react-router-dom";

const Header = () => {
  return(
    <div className={"HeaderContainer"}>
      <div className={""}>
        <img src={LogoHeader} alt="LogoHeader" className={"LogoHeader"}/>
      </div>

      <ul className={"UlHeader"}>
        <NavLink to={"/"} className={({ isActive }) =>
          isActive ? "NavLinkIsActive" :"LiNavLink" }>
          Home
        </NavLink>
        <NavLink to={"/About"} className={({ isActive }) =>
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
        <NavLink to={"/Contact"} className={({ isActive }) =>
          isActive ? "NavLinkIsActive" :"LiNavLink" }>
          Contact
        </NavLink>
      </ul>
      <div className={"flex items-center"}>
        <button className={"BtnCart"}>
          <BsCart3 className={"CartIcon"}/>
        </button>
        <span>Cart (0)</span>
      </div>

    </div>
  )
};export default Header;