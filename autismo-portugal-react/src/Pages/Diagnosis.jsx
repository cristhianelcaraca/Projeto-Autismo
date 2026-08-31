import "./Diagnosis.css";

function Diagnosis() {
  return (
    <main className="diagnosis-page">
      {/* HERO */}
      <section className="diagnosis-hero">
        <div className="container">
          <div className="diagnosis-hero-content">
            <div className="diagnosis-hero-image">
              <img
                src="/images/brain.png"
                alt="Ilustração de um cérebro a ler um livro"
              />
            </div>

            <div className="diagnosis-hero-text">
              <span className="diagnosis-label">Por onde começar?</span>

              <h1>Diagnóstico</h1>

              <p>
                Se existe uma suspeita de autismo, compreender o processo de
                avaliação pode ajudar a tornar este caminho mais simples.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUÇÃO */}
      <section className="diagnosis-intro">
        <div className="container diagnosis-container">
          <h2>Como é feita a avaliação?</h2>

          <p>
            O diagnóstico da Perturbação do Espetro do Autismo (PEA) baseia-se
            numa avaliação clínica que considera o desenvolvimento, o
            comportamento, a comunicação e a interação social da pessoa.
          </p>

          <p>
            Podem estar envolvidos diferentes profissionais de saúde, dependendo
            da idade e das necessidades de cada pessoa.
          </p>

          <div className="evaluation-cards">
            <div className="evaluation-card">
              <div className="diagnosis-icon purple">
                <i className="bi bi-chat-left-text"></i>
              </div>

              <h3>Entrevista clínica</h3>

              <p>
                Recolha de informação sobre desenvolvimento, comportamento,
                comunicação e dificuldades identificadas.
              </p>
            </div>

            <div className="evaluation-card">
              <div className="diagnosis-icon green">
                <i className="bi bi-clipboard2-check"></i>
              </div>

              <h3>Avaliação</h3>

              <p>
                Pode incluir observação, instrumentos específicos de avaliação e
                análise do historial clínico e do desenvolvimento.
              </p>
            </div>

            <div className="evaluation-card">
              <div className="diagnosis-icon yellow">
                <i className="bi bi-people"></i>
              </div>

              <h3>Equipa especializada</h3>

              <p>
                A avaliação pode envolver profissionais de diferentes áreas, de
                acordo com cada situação.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CAMINHOS */}
      <section className="diagnosis-paths">
        <div className="container diagnosis-container">
          <div className="section-heading">
            <h2>Que caminho posso seguir?</h2>

            <p>
              Em Portugal, é possível iniciar o processo através do SNS ou
              procurar serviços no setor privado.
            </p>
          </div>

          <div className="row g-4">
            {/* SNS */}
            <div className="col-lg-6">
              <div className="path-card sns-card">
                <div className="path-header">
                  <div className="path-icon sns-icon">
                    <i className="bi bi-hospital"></i>
                  </div>

                  <div>
                    <span className="path-small-title">Serviço público</span>
                    <h3>Pelo SNS</h3>
                  </div>
                </div>

                <div className="diagnosis-step">
                  <span>1</span>

                  <div>
                    <h4>Primeiro contacto</h4>
                    <p>
                      Procure os cuidados de saúde e explique as preocupações ou
                      sinais que motivaram a suspeita de autismo.
                    </p>
                  </div>
                </div>

                <div className="diagnosis-step">
                  <span>2</span>

                  <div>
                    <h4>Encaminhamento</h4>
                    <p>
                      Quando necessário, poderá ser feito o encaminhamento para
                      serviços ou consultas especializadas.
                    </p>
                  </div>
                </div>

                <div className="diagnosis-step">
                  <span>3</span>

                  <div>
                    <h4>Avaliação especializada</h4>
                    <p>
                      A equipa recolhe informação clínica e do desenvolvimento e
                      realiza a avaliação necessária para confirmar ou excluir o
                      diagnóstico.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* PRIVADO */}
            <div className="col-lg-6">
              <div className="path-card private-card">
                <div className="path-header">
                  <div className="path-icon private-icon">
                    <i className="bi bi-heart-pulse"></i>
                  </div>

                  <div>
                    <span className="path-small-title">
                      Outra possibilidade
                    </span>
                    <h3>Setor privado</h3>
                  </div>
                </div>

                <div className="diagnosis-step">
                  <span>1</span>

                  <div>
                    <h4>Procurar um serviço especializado</h4>
                    <p>
                      É possível contactar diretamente clínicas ou profissionais
                      com experiência na avaliação do autismo.
                    </p>
                  </div>
                </div>

                <div className="diagnosis-step">
                  <span>2</span>

                  <div>
                    <h4>Avaliação inicial</h4>
                    <p>
                      O profissional analisa a situação e determina quais
                      avaliações e especialidades poderão ser necessárias.
                    </p>
                  </div>
                </div>

                <div className="diagnosis-step">
                  <span>3</span>

                  <div>
                    <h4>Avaliação diagnóstica</h4>
                    <p>
                      O processo pode incluir entrevistas, observação,
                      instrumentos de avaliação e recolha da história do
                      desenvolvimento.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ADULTOS */}
      <section className="adult-diagnosis">
        <div className="container diagnosis-container">
          <div className="adult-box">
            <div>
              <h2>E no caso dos adultos?</h2>

              <p>
                Na avaliação de adultos, a história do desenvolvimento também é
                importante. Quando possível, podem ser recolhidas informações
                junto de familiares ou outras pessoas que conheceram a pessoa
                durante a infância.
              </p>

              <p>
                Fotografias, relatórios escolares ou outros documentos antigos
                também podem ajudar a reconstruir essa história quando forem
                relevantes para a avaliação.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="our-experience">
        <div className="experience-card">
          <div className="experience-title-row">
            <div className="experience-image">
              <img src="/images/family.png" alt="Ilustração de uma família" />
            </div>

            <div className="experience-headings">
              <h2 className="experience-title">A nossa experiência</h2>

              <h3 className="experience-subtitle">
                PIN – Partners in Neuroscience
              </h3>
            </div>
          </div>

          <div className="experience-content">
            <p>
              Na nossa família, optámos por realizar a avaliação no setor
              privado, no PIN – Partners in Neuroscience.
            </p>

            <p>
              Partilhamos esta informação apenas como referência da nossa
              experiência pessoal. Existem outras clínicas e profissionais
              especializados em Portugal.
            </p>

            <a
              href="https://pin.com.pt/"
              target="_blank"
              rel="noopener noreferrer"
              className="experience-button"
            >
              Conhecer o PIN
              <i className="bi bi-box-arrow-up-right"></i>
            </a>
          </div>
        </div>
      </section>
      {/* FONTES */}
      <section className="diagnosis-sources">
        <div className="container diagnosis-container">
          <h2>Fontes e informação adicional</h2>

          <div className="source-card">
            <div className="source-icon">
              <i className="bi bi-shield-check"></i>
            </div>

            <div>
              <h3>Direção-Geral da Saúde</h3>

              <p>
                Consulte a informação oficial sobre abordagem diagnóstica e
                intervenção na Perturbação do Espetro do Autismo.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Diagnosis;
