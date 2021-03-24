import { NAV_ELEMENTS } from "../../consts/consts"
import { TelNumber } from "./telNumber";

export const Header = () => {
  return (
    <header>
    <nav>
      <ul className="nav">
        {NAV_ELEMENTS.map((el) => (
          <li className="nav_item" ><a href={el.ref}>{el.text}</a></li>
        ))}
      </ul>
    </nav>
    <TelNumber />
    </header>
  );
};
