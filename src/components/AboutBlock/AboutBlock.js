import "./AboutBlock.scss";
import chair from "./img/chair.svg";
import theatre from "./img/theatre.svg";
import museum from "./img/museum.svg";

export const AboutBlock = () => {
  
  return (
    <div className="info-content">
      <div className="info-sizing">
        <h1 className="header" id="about"><span className="gold">О</span> ТЕАТРЕ</h1>
        <div className="info-columns">
          <div className="text-column text-headers" data-aos="fade-right">
            <h2>САМЫЙ ЛУЧШИЙ ТЕАТР СПБ</h2>
            <p>
              Как свидетельствуют архивные документы, первое каменное здание Большого театра начали возводить в 1775
              году по проекту Антонио Ринальди. В дальнейшем, после того как Ринальди упал с лесов и не мог лично
              наблюдать за ходом работ, Екатерина II поручила немецкому театральному декоратору и архитектору Людвигу
              Филиппу Тишбейну создать новый проект театра, который и был воплощён архитекторами Ф. В. фон Бауром и М.
              А. Деденёвым. Открытие его состоялось в 1783 году, хотя, основываясь на других свидетельствах, годом
              открытия можно считать 1784 год.
            </p>
          </div>
          <div className="numeral-column text-headers" data-aos="fade-up">
            <h2>НЕМНОГО О ЦИФРАХ</h2>
            <img src={chair} alt="icon" />
            <p><span className="gold">1600</span> посадочный мест</p>
            <img src={theatre} alt="icon" />
            <p><span className="gold">350</span> лет истории</p>
          </div>
          <div className="picture-column hide992" data-aos="fade-left">
            <img src={museum} alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
};
