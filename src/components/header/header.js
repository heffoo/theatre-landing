import { NAV_ELEMENTS } from "../../consts/consts";
import { TelNumber } from "./telNumber";

export const Header = () => {
  return (
    <header>
      <nav>
        <ul className="nav">
          {NAV_ELEMENTS.map((el) => (
            <li key={el.text} className="nav_item ff700">
              <a href={el.ref}>{el.text}</a>
            </li>
          ))}
        </ul>
      </nav>
      <TelNumber />
    </header>
  );
};
