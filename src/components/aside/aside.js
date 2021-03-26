import "./aside.scss";
import insta from "./logos/insta.svg";
import fb from "./logos/fb.svg";
import vk from "./logos/vk.svg";
import yt from "./logos/yt.svg";
import { NAV_ELEMENTS } from "../../consts/consts";

export const Aside = () => {
  const openBurger = () => {
    const burger = document.querySelector(".header-burger");
    burger.classList.add("active");
    console.log(2);
    const burgerMenu = document.querySelector(".header-burger-menu");
    burgerMenu.classList.add("active");
  };

  const closeBurger = () => {
    const burger = document.querySelector(".header-burger");
    burger.classList.remove("active");
    const burgerMenu = document.querySelector(".header-burger-menu");
    burgerMenu.classList.remove("active");
  };

  document.addEventListener("click", (e) => {
    e.stopPropagation();
    openBurger();
  });

  document.addEventListener("click", (e) => {
    let target = e.target;
    const burger = document.querySelector(".header-burger");
    const burgerMenu = document.querySelector(".header-burger-menu");
    let its_menu = target === burgerMenu || burgerMenu.contains(target);
    let its_burger = target === burger;
    let menu_is_active = burgerMenu.classList.contains("active");

    if (!its_menu && !its_burger && menu_is_active) {
      closeBurger();
    }
  });

  return (
    <>
      <div onClick={openBurger} className="header-burger">
        <span></span>
      </div>
      <div className="header-burger-menu">
        <ul className="burgermenu-list">
          {NAV_ELEMENTS.map((item) => (
            <li key={item.ref} className="burgermenu-item ff700">
              <a href={item.ref}>{item.text}</a>
            </li>
          ))}
        </ul>
        <div className="burger-logos">
          <img className="burger-button" src={insta} alt="logo"></img>
          <img className="burger-button" src={fb} alt="logo"></img>
          <img className="burger-button" src={vk} alt="logo"></img>
          <img className="burger-button" src={yt} alt="logo"></img>
        </div>
      </div>
      <aside className="main-aside">
        <p className="aside-text ff700">Контактная информация</p>
        <hr className="aside-hr"></hr>
        <div className="aside-buttons">
          <img className="aside-button" src={insta} alt="logo"></img>
          <img className="aside-button" src={fb} alt="logo"></img>
          <img className="aside-button" src={vk} alt="logo"></img>
          <img className="aside-button" src={yt} alt="logo"></img>
        </div>
      </aside>
    </>
  );
};
