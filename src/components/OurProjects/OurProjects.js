import "./OurProjects.scss";
import { Raiting } from "./raiting";
import { SlickSlider } from "./ Slider/ Slider";

export const OurProjects = () => {
  return (
    <div className="productions-block">
      <div className="postanovki">
        <h1 className="header" id="projects">
          <span className="gold">НАШИ</span> ПОСТАНОВКИ
        </h1>
        <SlickSlider />
      </div>
      <Raiting />
    </div>
  );
};
