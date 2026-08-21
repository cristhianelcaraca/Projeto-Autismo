function Help() {
  return (
    <section>
      <section className="help-section">
        <div className="container">
          <h2 className="help-title">Como podemos ajudar?</h2>

          <span className="heart">
            <img src="/images/rainbow.png" alt="little rainbow decoration" />
          </span>

          <div className="row row-cols-1 row-cols-md-3 row-cols-lg-5 g-4">
            <div className="col">
              <div className="help-card">
                <div className="help-icon bg-purple">
                  <i className="bi bi-search"></i>
                </div>

                <h3>Diagnóstico</h3>

                <p>
                  Entenda o processo de avaliação e diagnóstico em Portugal.
                </p>

                <a href="diagnostico.html" className="help-link text-purple">
                  Saiba mais →
                </a>
              </div>
            </div>

            <div className="col">
              <div className="help-card">
                <div className="help-icon bg-green">
                  <i className="bi bi-house"></i>
                </div>

                <h3>Escola</h3>

                <p>
                  Direitos, apoios e estratégias para uma educação inclusiva.
                </p>

                <a href="escola.html" className="help-link text-green">
                  Saiba mais →
                </a>
              </div>
            </div>

            <div className="col">
              <div className="help-card">
                <div className="help-icon bg-yellow">
                  <i className="bi bi-people"></i>
                </div>

                <h3>Direitos e Apoios</h3>

                <p>Conheça seus direitos, benefícios e apoios disponíveis.</p>

                <a href="direitos.html" className="help-link text-yellow">
                  Saiba mais →
                </a>
              </div>
            </div>

            <div className="col">
              <div className="help-card">
                <div className="help-icon bg-pink">
                  <i className="bi bi-heart"></i>
                </div>

                <h3>Vida Diária</h3>

                <p>Dicas e informações para lidar com desafios do dia a dia.</p>

                <a href="vida-diaria.html" className="help-link text-pink">
                  Saiba mais →
                </a>
              </div>
            </div>

            <div className="col">
              <div className="help-card">
                <div className="help-icon bg-blue">
                  <i className="bi bi-book"></i>
                </div>

                <h3>Recursos</h3>

                <p>
                  Artigos, guias, instituições e materiais úteis para você e sua
                  família.
                </p>

                <a href="recursos.html" className="help-link text-blue">
                  Saiba mais →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Help;
