// src/components/Navbar.jsx
import "../scss/components/_nav.scss";
import { Link } from "react-router-dom";
import menu from "../assets/icons/menu.png";
import home from "../assets/icons/home.png";
import info from "../assets/icons/info.png";
import phone from "../assets/icons/phone.png";
import login from "../assets/icons/user-circle.png";
import { within } from "@testing-library/react";
import { useState } from "react";

// 6pm-8 task
function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const [current, setCurrent] = useState("button");
  const menuContainer = document.querySelector(".menu-container");

  const handleMenu = (e) => {
    /*
    if (isActive && !e.target.matches(".menu-container")) {
      setIsActive(false);
    }

    menuContainer.style.backgroundColor = "red";

    if (isActive && menuContainer.classList.contains("active")) {
      window.addEventListener("click", (e) => {
        let target = e.target;

         if (!target.matches(".menu-container")) {
           setIsActive(true);

          console.log("Closed");
        }

        if (!target.matches(".menu-container")) {
          setIsActive(false);
          console.log("flase");
          return;
        }

        setIsActive(true);
      });

      console.log(isActive);
    }
    */

    const menuContainer =
      e.target.parentElement.parentElement.querySelector(".menu-container");

    menuContainer.classList.toggle("active");

    isActive ? setIsActive(false) : setIsActive(true);

    console.log(menuContainer);
  };

  const handleClick = (e) => {
    const li = e.target.closest("li");
    if (!li) return;

    document.querySelectorAll("li").forEach((elem) => {
      elem.classList.remove("active");
    });

    li.classList.add("active");

    const a = li.querySelector("a");

    if (a) a.click();
  };

  return (
    <div className="nav-container">
      <button onClick={(e) => handleMenu(e)}>
        <img src={isActive ? login : menu} alt="icon" />
      </button>

      <nav>
        <div className={isActive ? "menu-container active" : "menu-container"}>
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
