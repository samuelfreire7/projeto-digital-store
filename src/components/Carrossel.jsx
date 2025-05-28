import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./carrossel.css"

export default function Carrossel() {
  return (
    <section className="carrossel">
      <div id="carouselExample" className="carousel slide" style={{ position: 'relative' }}>
        <div className="carousel-indicators">
          {[0, 1, 2, 3, 4].map((index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide-to={index}
              className={index === 0 ? 'active' : ''}
              aria-current={index === 0 ? 'true' : undefined}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              style={{ height: '650px' }}
              src="src/assets/images/primeiroSlide.png"
              className="d-block w-100"
              alt="..."
            />
            <img className="tenis_banner" src="src/assets/images/tenisPrimeiroSlide.png" alt="" />
            <img className="ornamento" src="src/assets/images/Ornament 11.png" alt="" />

            <div className="texto_na_imagem">
              <p className="oferta">Melhores ofertas personalizadas</p>
              <h1>
                Queima de
                <br />
                estoque Nike
                <img src="src/assets/images/fogoIphone.png" alt="" />
              </h1>
              <p>
                Consequat culpa exercitation mollit nisi excepteur do
                <br />
                do tempor laboris eiusmod irure consectetur.
              </p>
              <button className="botao1">Ver Ofertas</button>
            </div>
          </div>

          {[2, 3, 4, 5].map((num, i) => (
            <div className="carousel-item" key={i}>
              <img
                style={{ height: '650px' }}
                src={`src/assets/images/home-slide-${num}.jpeg`}
                className="d-block w-100"
                alt={`Slide ${num}`}
              />
            </div>
          ))}
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
}