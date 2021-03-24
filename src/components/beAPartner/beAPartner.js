import "./beAPartner.scss";

export const BeAPartner = () => {
  return (
    <div>
      <h1 className="header" id="contacts"><span className="gold">СТАТЬ</span> МЕЦЕНАТОМ</h1>
      <div className="contacts">
        <div className="numbers">
          <a href="tel:5551234567">+7 (812) 123-45-55</a>
          <a href="tel:5551234567">+7 (812) 123-45-66</a>
          <a href="mailto:123">info@theater.ru</a>
          <a href="#1">г. санкт-петербург, невский 140</a>
        </div>
        <div className="form">
          <form className="feedbackform">
            <input className="form-select box1" placeholder="Имя" type="text" />
            <input className="form-select" placeholder="Компания" type="text" />
            <input className="form-select input-text" placeholder="Сообщение" type="text" />
            <input className="form-select" placeholder="Телефон" type="tel" />
            <input className="form-select" placeholder="E-mail" type="email" />
          </form>
        </div>
      </div>
    </div>
  );
};
