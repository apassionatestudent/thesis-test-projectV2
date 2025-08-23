// src/components/Navbar.jsx
import "../scss/components/_nav.scss";
import { Link } from "react-router-dom";
import menu from "../assets/icons/menu.png";
import home from "../assets/icons/home.png";
import info from "../assets/icons/info.png";
import phone from "../assets/icons/phone.png";
import login from "../assets/icons/user-circle.png";
import close from "../assets/icons/x.png";
import { within } from "@testing-library/react";
import { useState } from "react";

// 6pm-8 task
function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const [current, setCurrent] = useState("button");
  const menuContainer = document.querySelector(".menu-container");

  const handleScroll = () => {
    const body = document.querySelector("body");
    isActive
      ? (body.style.overflow = "initial")
      : (body.style.overflow = "hidden");
  };

  const handleMenu = (e) => {
    const menuContainer =
      e.target.parentElement.parentElement.querySelector(".menu-container");

    menuContainer.classList.toggle("active");

    handleScroll();

    isActive ? setIsActive(false) : setIsActive(true);

    if (isActive) return;

    window.addEventListener("click", (e) => {
      if (e.target.matches("nav")) {
        const body = document.querySelector("body");
        body.style.overflow = "initial";
        console.log("close me");
        setIsActive(false);
      }
    });
  };

  const handleClick = (e) => {
    const li = e.target.closest("li");
    if (!li) return;

    document.querySelectorAll("li").forEach((elem) => {
      elem.classList.remove("active");
    });

    li.classList.add("active");

    const a = li.querySelector("a");

    if (a) {
      a.click();
    }

    if (a && isActive) {
      setIsActive(false);
      handleScroll();
    }
  };

  return (
    <div className="nav-container">
      <button onClick={(e) => handleMenu(e)}>
        <img src={!isActive ? menu : close} alt="icon" />
      </button>

      <nav>
        <div
          className={!isActive ? "menu-container " : "menu-container active"}
        >
          <ul onClick={(e) => handleClick(e)}>
            <li>
              <img src={home} alt="" />
              <Link to="/">Home</Link>
            </li>
            <li>
              <img src={info} alt="" />

              <Link to="/aboutus">About Us</Link>
            </li>
            <li>
              <img src={phone} alt="" />

              <Link to="/contactus">Contact Us</Link>
            </li>
            <li>
              <img src={menu} alt="" />

              <Link to="/services">Services</Link>
            </li>
            <li>
              <img src={login} alt="" />

              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
