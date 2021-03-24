import "./partners.scss";
import logo from "../../images/logo.svg";
//TODO: перенести картинки в константы
export const Partners = () => {
  return (
    <div className="partners-block">
    <div className="info-sizing">
        <h1 className="header" id="partners"><span className="gold">ПАРТНЕРЫ</span> ТЕАТРА</h1>
        <div className="logos" data-aos="fade-up" >  
          <img className="logo" alt="logo" src={logo} />
          <img className="logo" alt="logo" src={logo} />
          <img className="logo" alt="logo" src={logo} />
          <img className="logo" alt="logo" src={logo} />
          <img className="logo" alt="logo" src={logo} />
          <img className="logo" alt="logo" src={logo} />
          <img className="logo" alt="logo" src={logo} />
          <img className="logo" alt="logo" src={logo} />
        </div>
      </div>
    </div>
  );
};
