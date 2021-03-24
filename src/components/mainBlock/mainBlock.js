import "./mainBlock.scss";

export const MainBlock = () => {
  return (
    <section className="middle-content">
        <div className="left-content-side">
          <h1 id="main">БОЛЬШОЙ ТЕАТР</h1>
          <p>
            Большо́й теа́тр — петербургский театр, существовавший в 1784—1886 годах, с 1886 года — Петербургская
            консерватория. Первое постоянное в Санкт-Петербурге, крупнейшее в России и одно из крупнейших театральных
            зданий в Европе XVIII.
          </p>
          <button>Афиша</button>
        </div>
        <div className="right-content-side">
          <div className="first-image"></div>
          <div className="second-image"></div>
        </div>
    </section>
  );
};
