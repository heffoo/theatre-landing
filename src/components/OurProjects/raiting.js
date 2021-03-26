import "./OurProjects.scss";
import star from "../../images/star.svg";

export const Raiting = () => {
  return (
    <div className="raiting-block" >
      <div className="left-raiting-side" data-aos="fade-up">
        <span className="ff700">2018</span>
        <span className="ff700">2019</span>
        <span className="ff700">2020</span>
      </div>
      <div className="right-raiting-side" data-aos="fade-up">
        <div className="stars">
          <img className="star" alt="img" src={star} />
          <img className="star" alt="img" src={star} />
          <img className="star" alt="img" src={star} />
          <img className="star" alt="img" src={star} />
          <img className="star" alt="img" src={star} />
        </div>
        <p> Лучший театр по мнению театральных критиков Парижа</p>
      </div>
    </div>
  );
};
