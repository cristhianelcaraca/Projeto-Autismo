function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <span className="melting">
              <img src="/images/melting.png" alt="" aria-hidden="true" />
            </span>

            <h1>
              <span className="title-line">
                <span className="info">Informação.</span>

                <span className="sparkle">
                  <img src="/images/sparkle.png" alt="" aria-hidden="true" />
                </span>
              </span>

              <br />

              <span className="help">Apoio.</span>

              <br />

              <span className="title-line">
                <span className="heart">
                  <img src="/images/heart.png" alt="" aria-hidden="true" />
                </span>

                <span className="inclusion">Inclusão.</span>
              </span>
            </h1>

            <p className="hero-text">
              Um guia prático para pessoas autistas e famílias em Portugal.
            </p>

            <div className="search-box">
              <div className="search-input-wrapper">
                <i className="bi bi-search search-icon"></i>

                <input
                  type="text"
                  className="form-control search-input"
                  placeholder="O que você procura?"
                />
              </div>

              <button type="button" className="btn search-btn">
                Buscar
              </button>
            </div>

            <p className="search-example">
              Exemplos: avaliação, escola, AMIM, crises, direitos...
            </p>
          </div>

          <div className="col-lg-6">
            <div className="hero-image">
              <img
                src="/images/zoe.jpg"
                alt="Criança segurando um coração formado por peças coloridas"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
