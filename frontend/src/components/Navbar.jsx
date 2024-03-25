import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { data } from "../restApi.json";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

function Navbar() {
  const [show, setShow] = useState(false);

  const toggleMenu = () => {
    setShow(!show);
  };

  return (
    <nav>
      <div className="logo">Foodhub</div>
      <div className={show ? "navLinks showmenu" : "navLinks"}>
        <div className="links">
          {data[0].navbarLinks.map((element) => (
            <ScrollLink
              to={element.link}
              key={element.id}
              spy={true}
              smooth={true}
              duration={500}
              onClick={toggleMenu}
            >
              {element.title}
            </ScrollLink>
          ))}
        </div>
        <button className="menuBtn">OUR MENU</button>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <GiHamburgerMenu />
      </div>
    </nav>
  );
}

export default Navbar;
