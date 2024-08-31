import React, { useRef, useState } from "react";
import "./Navbar.css";

import underline from "../../assets/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";
import Logo from "../Logo/Logo";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Track if the menu is open
  const menuRef = useRef(null);

  const openMenu = () => {
    setIsMenuOpen(true);
    if (menuRef.current) {
      menuRef.current.style.right = "0";
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    if (menuRef.current) {
      menuRef.current.style.right = "-350px";
    }
  };

  // Handle menu item click
  const handleMenuClick = (section) => {
    setMenu(section);
    closeMenu(); // Close the menu when a link is clicked
  };

  return (
    <div>
      <div className="navbar">
        <Logo />
        <img
          className="nav-mob-open"
          src={menu_open}
          onClick={openMenu}
          alt="Open Menu"
        />
        <ul ref={menuRef} className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
          <img
            className="nav-mob-close"
            src={menu_close}
            onClick={closeMenu}
            alt="Close Menu"
          />
          <li>
            <AnchorLink
              className="anchor-link"
              href="#home"
              onClick={() => handleMenuClick("home")}
            >
              <p>Home</p>{" "}
              {menu === "home" ? <img src={underline} alt="Underline" /> : null}
            </AnchorLink>
          </li>
          <li>
            <AnchorLink
              className="anchor-link"
              offset={50}
              href="#about"
              onClick={() => handleMenuClick("about")}
            >
              <p>About me</p>{" "}
              {menu === "about" ? (
                <img src={underline} alt="Underline" />
              ) : null}
            </AnchorLink>
          </li>
          <li>
            <AnchorLink
              className="anchor-link"
              offset={50}
              href="#services"
              onClick={() => handleMenuClick("services")}
            >
              <p>Services</p>
              {menu === "services" ? (
                <img src={underline} alt="Underline" />
              ) : null}
            </AnchorLink>
          </li>
          <li>
            <AnchorLink
              className="anchor-link"
              offset={50}
              href="#work"
              onClick={() => handleMenuClick("work")}
            >
              <p>Portfolio</p>
              {menu === "work" ? <img src={underline} alt="Underline" /> : null}
            </AnchorLink>
          </li>
          <li>
            <AnchorLink
              className="anchor-link"
              offset={50}
              href="#contact"
              onClick={() => handleMenuClick("contact")}
            >
              <p>Contact</p>
              {menu === "contact" ? (
                <img src={underline} alt="Underline" />
              ) : null}
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
