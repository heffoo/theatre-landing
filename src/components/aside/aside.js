import "./aside.scss";
import insta from "./logos/insta.svg";
import fb from "./logos/fb.svg";
import vk from "./logos/vk.svg";
import yt from "./logos/yt.svg";
import { NAV_ELEMENTS } from "../../consts/consts";
export const Aside = () => {
  const openBurger = () => {
    const burger = document.querySelector(".header-burger");
    burger.classList.toggle("active");
    const burgerMenu = document.querySelector(".header-burger-menu");
    burgerMenu.classList.toggle("active");
  };

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
