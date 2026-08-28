import { Link } from "react-router-dom";

import AutismCharacteristicsQuiz from "../Components/AutismCharacteristicsQuiz";

function Suspicion() {
  return (
    <main className="suspicion-page">
      {/* HERO */}
      <section className="suspicion-hero">
        <div className="container">
          <div className="suspicion-hero-content">
            <div className="suspicion-hero-image">
              <img
                src="/images/suspicion.png"
                alt="Ilustração relacionada com sinais de autismo"
              />
            </div>

            <div className="suspicion-hero-text">
              <span className="suspicion-label">Primeiros sinais</span>

              <h1>Suspeita de autismo</h1>

              <p>
                Os sinais de autismo podem aparecer de formas diferentes e mudar
                ao longo do desenvolvimento. Não existe um único sinal que,
                isoladamente, indique que uma pessoa é autista.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SINAIS */}
      <section className="suspicion-signs">
        <div className="container suspicion-container">
          <h2>Que sinais podem levantar uma suspeita?</h2>

          <p className="section-intro">
            Algumas diferenças na comunicação, interação social, comportamento e
            processamento sensorial podem justificar uma avaliação
            especializada.
          </p>

          <div className="signs-grid">
            <div className="sign-card">
              <div className="sign-icon purple">
                <i className="bi bi-balloon-heart"></i>
              </div>

              <h3>Primeiros anos</h3>

              <p>
                Podem existir diferenças no contacto visual, resposta ao nome,
                utilização de gestos, atenção conjunta, interação social ou
                resposta a estímulos sensoriais.
              </p>
            </div>

            <div className="sign-card">
              <div className="sign-icon yellow">
                <i className="bi bi-backpack"></i>
              </div>

              <h3>Idade escolar</h3>

              <p>
                Podem tornar-se mais evidentes dificuldades em compreender
                regras sociais, lidar com mudanças, organizar-se ou estabelecer
                relações com outras crianças.
              </p>
            </div>

            <div className="sign-card">
              <div className="sign-icon blue">
                <i className="bi bi-person"></i>
              </div>

              <h3>Adolescentes e adultos</h3>

              <p>
                Podem existir dificuldades na leitura do contexto social,
                interação muito formal, necessidade de rotina, interesses
                intensos ou estratégias de compensação social.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* QUANDO PROCURAR AVALIAÇÃO */}
      <section className="when-assessment">
        <div className="container suspicion-container">
          <div className="assessment-box">
            <div className="assessment-icon">
              <i className="bi bi-search-heart"></i>
            </div>

            <div className="assessment-content">
              <h2>Quando procurar uma avaliação?</h2>

              <p>
                Se existem preocupações persistentes relacionadas com
                comunicação, interação social, comportamento, interesses,
                flexibilidade ou processamento sensorial, é aconselhável
                conversar com um profissional de saúde.
              </p>

              <p>
                As preocupações da própria família também são importantes e
                devem ser consideradas durante o processo de avaliação.
              </p>

              <Link to="/diagnostico" className="assessment-button">
                Ver como funciona o diagnóstico
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* QUESTIONÁRIO INFORMATIVO */}
      <section className="screening-section">
        <div className="container suspicion-container">
          <div className="screening-card">
            <div className="screening-image">
              <img
                src="/images/teste.png"
                alt="Questionário sobre características do autismo"
              />
            </div>

            <div className="screening-content">
              <span>Questionário informativo</span>

              <h2>Características do autismo na infância</h2>

              <p>
                Responda a 20 perguntas sobre características relacionadas com
                comunicação, interação social, comportamento e processamento
                sensorial.
              </p>

              <p className="screening-disclaimer">
                Este questionário foi criado para fins informativos e de
                sensibilização. Não é um instrumento clínico validado e não
                permite diagnosticar ou excluir autismo.
              </p>

              <AutismCharacteristicsQuiz />
            </div>
          </div>
        </div>
      </section>

      {/* M-CHAT */}
      <section className="mchat-info-section">
        <div className="container suspicion-container">
          <div className="mchat-info-card">
            <div className="mchat-info-icon">
              <i className="bi bi-patch-check"></i>
            </div>

            <div>
              <span>Instrumento de rastreio reconhecido</span>

              <h2>M-CHAT-R/F</h2>

              <p>
                O M-CHAT-R/F é um instrumento de rastreio utilizado para
                identificar crianças pequenas que podem beneficiar de uma
                avaliação mais aprofundada.
              </p>

              <p>
                O M-CHAT-R/F também não estabelece um diagnóstico de autismo.
              </p>

              <a
                href="https://www.mchatscreen.com/mchat-rf/"
                target="_blank"
                rel="noopener noreferrer"
                className="mchat-official-button"
              >
                Conhecer o M-CHAT-R/F
                <i className="bi bi-box-arrow-up-right"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIÊNCIA */}
      <section className="suspicion-experience">
        <div className="container">
          <div className="suspicion-experience-row">
            <div className="suspicion-experience-image">
              <img src="/images/family.png" alt="Ilustração de uma família" />
            </div>

            <div className="suspicion-experience-content">
              <span>A nossa experiência</span>

              <h2>Nem sempre existe atraso no desenvolvimento</h2>

              <p>
                Quando pensamos nos primeiros sinais de autismo, é comum
                associá-los a atrasos na fala ou no desenvolvimento. Mas nem
                todas as pessoas autistas apresentam esse percurso.
              </p>

              <p>
                Na nossa família, o desenvolvimento precoce não despertou
                preocupação. Pelo contrário, algumas competências surgiram mais
                cedo do que seria esperado.
              </p>

              <p>
                Foi através de outras características e dificuldades que,
                posteriormente, começámos a perceber que poderia existir
                autismo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FONTES */}
      <section className="suspicion-sources">
        <div className="container suspicion-container">
          <h2>Fontes e informação adicional</h2>

          <div className="source-card">
            <div className="source-icon">
              <i className="bi bi-shield-check"></i>
            </div>

            <div>
              <h3>Direção-Geral da Saúde</h3>

              <p>
                Informação oficial sobre rastreio, avaliação e diagnóstico da
                Perturbação do Espetro do Autismo.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Suspicion;
