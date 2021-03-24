import Slider from "react-slick";
import "./Slider.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import rect from "./slider-images/Rectangle.png";
import png2 from "./slider-images/png2.png";
import png3 from "./slider-images/png3.png";
import png4 from "./slider-images/png4.png";
// import rect from "./slider-images/Rectangle.png";

export const SlickSlider = () => {
  const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    // arrows: true,
    autoplaySpeed: 7000,
    centerMode: true,
  };
  return (
    <div>
      <Slider {...settings}>
        <div>
          <h3 className="slider-text header">ОСКАР 2020</h3>
          <h3 className="slider-vertical-text">СЕНТЯБРЬ 2020</h3>
          <img alt="img" src={rect}></img>
        </div>
        <div>
          <h3 className="slider-text header">...</h3>
          <h3 className="slider-vertical-text">...</h3>

          <img alt="img" src={png2}></img>
        </div>
        <div>
          <h3 className="slider-text header">ЗОЛОТОЙ ГРАМОФОН</h3>
          <h3 className="slider-vertical-text">ИЮЛЬ 2020</h3>

          <img alt="img" src={png3}></img>
        </div>
        <div>
          <h3 className="slider-text header">ЩЕЛКУНЧИК</h3>
          <h3 className="slider-vertical-text">МАЙ 2020</h3>

          <img alt="img" src={png4}></img>
        </div>
        <img alt="img" src={rect}></img>
      </Slider>
    </div>
  );
};
