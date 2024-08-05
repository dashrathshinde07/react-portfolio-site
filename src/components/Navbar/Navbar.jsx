import React, { useRef, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.svg";
import underline from "../../assets/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef(null);

  const openMenu = () => {
    if (menuRef.current) {
      menuRef.current.style.right = "0";
    }
  };

  const closeMenu = () => {
    if (menuRef.current) {
      menuRef.current.style.right = "-350px";
    }
  };

  return (
    <div>
      <div className="navbar">
        <img src={logo} alt="logo" />
        <img
          className="nav-mob-open"
          src={menu_open}
          onClick={openMenu}
          alt=""
        />
        <ul ref={menuRef} className="nav-menu">
          <img
            className="nav-mob-close"
            src={menu_close}
            onClick={closeMenu}
            alt=""
          />
          <li>
            <AnchorLink className="anchor-link" href="#home">
              <p onClick={() => setMenu("home")}>Home</p>{" "}
              {menu === "home" ? <img src={underline} alt="" /> : <></>}
            </AnchorLink>
          </li>
          <li>
            <AnchorLink className="anchor-link" offset={50} href="#about">
              <p onClick={() => setMenu("about")}>About me</p>{" "}
              {menu === "about" ? <img src={underline} alt="" /> : <></>}
            </AnchorLink>
          </li>
          <li>
            <AnchorLink className="anchor-link" offset={50} href="#services">
              {" "}
              <p onClick={() => setMenu("services")}>Services</p>
              {menu === "services" ? <img src={underline} alt="" /> : <></>}
            </AnchorLink>
          </li>
          <li>
            <AnchorLink className="anchor-link" offset={50} href="#work">
              {" "}
              <p onClick={() => setMenu("work")}>Portfolio</p>
              {menu === "work" ? <img src={underline} alt="" /> : <></>}
            </AnchorLink>
          </li>
          <li>
            <AnchorLink className="anchor-link" offset={50} href="#contact">
              {" "}
              <p onClick={() => setMenu("contact")}>Contact</p>
              {menu === "contact" ? <img src={underline} alt="" /> : <></>}
            </AnchorLink>
          </li>
        </ul>
        <div className="nav-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect With Me
          </AnchorLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
