function Articles() {
  return (
    <section className="articles">
      <div className="container-2">
        <h2 className="articles-title">Leituras Recomendadas</h2>
        <span className="star">
          <img src="/images/star.png" alt="little star decoration" />
        </span>

        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="article-card">
              <h3>Genética e Terapias para o Síndrome do X Frágil e Autismo</h3>

              <p>
                Cientistas portugueses identificaram um novo alvo molecular e
                biológico associado ao autismo e à Síndrome do X Frágil.
              </p>

              <a
                href="https://observador.pt/2025/01/14/projeto-europeu-auxilia-criacao-de-terapias-personalizadas-para-o-autismo-com-investigadores-da-universidade-de-coimbra-envolvidos/"
                className="article-link btn-yellow"
                target="_blank"
                rel="noopener noreferrer"
              >
                Saiba mais →
              </a>
            </div>
          </div>

          <div className="col">
            <div className="article-card">
              <h3>Autismo e altas capacidades</h3>

              <p>
                Uma pessoa com autismo pode ser considerada sobredotada? Quais
                as semelhanças e diferenças entre as duas condições? A
                coexistência de ambas as condições representa uma vantagem ou um
                risco acrescido de exclusão?
              </p>

              <a
                href="https://observador.pt/2025/01/14/projeto-europeu-auxilia-criacao-de-terapias-personalizadas-para-o-autismo-com-investigadores-da-universidade-de-coimbra-envolvidos/"
                className="article-link btn-purple"
                target="_blank"
                rel="noopener noreferrer"
              >
                Saiba mais →
              </a>
            </div>
          </div>

          <div className="col">
            <div className="article-card">
              <h3>
                Saúde mental de pessoas autistas em Portugal: experiências e
                recomendações de autistas adultos e profissionais aliados
              </h3>

              <p>
                Este trabalho inovador traz o primeiro retrato coletivo da saúde
                mental de pessoas adultas autistas em Portugal.
              </p>

              <a
                href="https://estudogeral.uc.pt/handle/10316/114182"
                className="article-link btn-green"
                target="_blank"
                rel="noopener noreferrer"
              >
                Saiba mais →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Articles;
