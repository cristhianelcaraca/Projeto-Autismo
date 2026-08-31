import { Link } from "react-router-dom";
import "./AfterDiagnosis.css";

function AfterDiagnosis() {
  return (
    <main className="after-diagnosis-page">
      {/* HERO */}
      <section className="after-diagnosis-hero">
        <div className="container">
          <div className="after-diagnosis-hero-content">
            <div className="after-diagnosis-hero-text">
              <span className="after-diagnosis-label">E agora?</span>

              <h1>Depois do diagnóstico</h1>

              <p>
                Receber um diagnóstico de autismo pode trazer respostas, mas
                também muitas perguntas. Conhecer os próximos passos pode ajudar
                a compreender melhor as necessidades da pessoa e a organizar
                esta nova fase.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PONTO DE PARTIDA */}
      <section className="after-starting">
        <div className="container after-diagnosis-container">
          <div className="after-wrap-section">
            <div className="after-wrap-image starting-image">
              <img
                src="/images/starting.png"
                alt="Ilustração relacionada com novos caminhos após o diagnóstico"
              />
            </div>

            <span className="after-section-label">
              Compreender o diagnóstico
            </span>

            <h2>O diagnóstico é um ponto de partida</h2>

            <p>
              O autismo não é uma doença e não existe uma “cura” para o autismo.
              O diagnóstico pode, no entanto, ajudar a compreender melhor
              determinadas características, dificuldades, necessidades de apoio
              e também os pontos fortes da pessoa.
            </p>

            <p>
              Ao conhecer melhor o seu perfil, comportamentos ou situações que
              anteriormente pareciam difíceis de explicar podem começar a fazer
              mais sentido.
            </p>

            <p>
              Dependendo das necessidades identificadas, podem ser recomendadas
              avaliações complementares e formas de acompanhamento
              individualizadas.
            </p>

            <p>Estas avaliações podem ajudar a compreender áreas como:</p>

            <ul className="after-list">
              <li>comunicação e linguagem;</li>
              <li>aprendizagem;</li>
              <li>autonomia;</li>
              <li>funções executivas;</li>
              <li>desenvolvimento motor;</li>
              <li>processamento sensorial;</li>
              <li>saúde emocional;</li>
              <li>comportamento e regulação emocional.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* APOIOS */}
      <section className="after-supports">
        <div className="container after-diagnosis-container">
          <div className="section-heading">
            <span className="after-section-label">Acompanhamento</span>

            <h2>E agora? Que apoios podem ser necessários?</h2>

            <p>
              Não existe uma intervenção única indicada para todas as pessoas
              autistas. As necessidades podem variar muito de pessoa para pessoa
              e também mudar ao longo da vida.
            </p>
          </div>

          <div className="after-support-grid">
            <div className="after-support-card">
              <div className="after-support-icon purple">
                <i className="bi bi-heart"></i>
              </div>

              <h3>Psicologia e apoio emocional</h3>

              <p>
                Pode ajudar em áreas como ansiedade, regulação emocional,
                comportamento, autoestima, relações sociais e adaptação a
                diferentes situações.
              </p>
            </div>

            <div className="after-support-card">
              <div className="after-support-icon blue">
                <i className="bi bi-chat-dots"></i>
              </div>

              <h3>Terapia da fala</h3>

              <p>
                Pode apoiar comunicação e linguagem. Quando necessário, pode
                também incluir sistemas de Comunicação Aumentativa e
                Alternativa.
              </p>
            </div>

            <div className="after-support-card">
              <div className="after-support-icon green">
                <i className="bi bi-person-arms-up"></i>
              </div>

              <h3>Terapia ocupacional</h3>

              <p>
                Pode trabalhar autonomia, participação nas atividades do
                quotidiano, coordenação funcional e necessidades relacionadas
                com processamento sensorial.
              </p>
            </div>

            <div className="after-support-card">
              <div className="after-support-icon yellow">
                <i className="bi bi-universal-access"></i>
              </div>

              <h3>Fisioterapia</h3>

              <p>
                Pode ser indicada quando existem necessidades relacionadas com
                postura, equilíbrio, coordenação, mobilidade ou desenvolvimento
                motor.
              </p>
            </div>

            <div className="after-support-card">
              <div className="after-support-icon pink">
                <i className="bi bi-hospital"></i>
              </div>

              <h3>Acompanhamento médico</h3>

              <p>
                Pode ser necessário quando existem condições ou dificuldades
                associadas. A medicação não trata nem cura o autismo, mas pode
                ser utilizada para situações específicas quando clinicamente
                indicada.
              </p>
            </div>
          </div>

          <div className="therapy-note">
            <div className="therapy-note-icon">
              <i className="bi bi-lightbulb"></i>
            </div>

            <div>
              <h3>Qual é a melhor terapia?</h3>

              <p>
                Não existe uma terapia que seja a melhor para todas as pessoas
                autistas. A escolha deve considerar as necessidades
                identificadas, os objetivos definidos, a evidência disponível e
                a forma como a pessoa responde ao acompanhamento.
              </p>

              <p>
                Mais importante do que acumular terapias é compreender que
                necessidade se pretende apoiar e qual é o objetivo daquela
                intervenção.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ESCOLA */}
      <section className="after-school">
        <div className="container after-diagnosis-container">
          <div className="after-wrap-section">
            <div className="after-wrap-image teacher-image">
              <img
                src="/images/teacher.png"
                alt="Ilustração de uma professora"
              />
            </div>

            <span className="after-section-label">Contexto escolar</span>

            <h2>E a escola?</h2>

            <p>
              Para crianças e adolescentes, o diagnóstico pode ajudar a escola a
              compreender melhor determinadas necessidades e a discutir medidas
              de apoio adequadas.
            </p>

            <p>
              Dependendo da situação, pode ser útil partilhar com a escola
              informação relevante do relatório e conversar sobre aspetos como:
            </p>

            <ul className="after-list">
              <li>medidas de suporte à aprendizagem;</li>
              <li>adaptações necessárias;</li>
              <li>comunicação;</li>
              <li>necessidades sensoriais;</li>
              <li>organização e previsibilidade;</li>
              <li>participação nas atividades escolares;</li>
              <li>apoio em situações de ansiedade ou sobrecarga.</li>
            </ul>

            <Link to="/direitos-escola" className="after-link-button">
              Conhecer os direitos na escola
              <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* DIVULGAR DIAGNÓSTICO */}
      <section className="after-disclosure">
        <div className="container after-diagnosis-container">
          <div className="after-wrap-section">
            <div className="after-wrap-image speaking-image">
              <img
                src="/images/speaking.png"
                alt="Ilustração relacionada com comunicação"
              />
            </div>

            <span className="after-section-label">Privacidade e escolha</span>

            <h2>Contar ou não contar sobre o diagnóstico?</h2>

            <p>
              Não é necessário contar o diagnóstico a todas as pessoas.
              Principalmente no caso de adolescentes e adultos, a decisão pode
              depender do contexto, da relação com a outra pessoa e da
              existência de alguma necessidade concreta de apoio.
            </p>

            <p>
              Em determinadas situações, poderá ser necessário comunicar a
              existência de uma condição ou apresentar documentação para
              solicitar medidas de apoio na escola, universidade, trabalho ou
              junto de determinados serviços.
            </p>

            <div className="disclosure-questions">
              <h3>Antes de partilhar, pode ser útil pensar:</h3>

              <ul className="after-list">
                <li>Com quem quero partilhar esta informação?</li>
                <li>Por que quero contar?</li>
                <li>Que benefício espero obter?</li>
                <li>
                  Que informação quero partilhar e o que prefiro manter privado?
                </li>
              </ul>
            </div>

            <p>
              Partilhar o diagnóstico pode ajudar algumas pessoas a compreender
              melhor determinadas necessidades e formas de comunicação.
            </p>

            <p>
              Também existem riscos. Algumas pessoas ainda têm conhecimentos
              limitados ou ideias preconcebidas sobre o autismo. Por isso,
              sempre que possível, a divulgação deve ser uma decisão informada e
              respeitar a privacidade da pessoa autista.
            </p>
          </div>
        </div>
      </section>

      {/* ADULTOS */}
      <section className="after-adults">
        <div className="container after-diagnosis-container">
          <div className="section-heading">
            <span className="after-section-label">Diagnóstico tardio</span>

            <h2>O diagnóstico na idade adulta</h2>

            <p>
              Para algumas pessoas, receber um diagnóstico apenas na idade
              adulta pode ajudar a reinterpretar experiências de toda uma vida.
            </p>
          </div>

          <div className="adult-diagnosis-box">
            <p>
              Dificuldades sociais, sensoriais, de comunicação ou adaptação que
              anteriormente eram atribuídas apenas a timidez, personalidade ou
              incapacidade pessoal podem começar a ser compreendidas dentro de
              um contexto diferente.
            </p>

            <p>
              O diagnóstico também pode ajudar a identificar necessidades de
              apoio, estabelecer limites e desenvolver estratégias mais
              adequadas ao funcionamento da pessoa.
            </p>
          </div>
        </div>
      </section>

      {/* MASKING */}
      <section className="after-masking">
        <div className="container after-diagnosis-container">
          <div className="after-wrap-section">
            <div className="after-wrap-image masking-image">
              <img
                src="/images/masking.png"
                alt="Ilustração relacionada com masking ou camuflagem social"
              />
            </div>

            <span className="after-section-label">Camuflagem social</span>

            <h2>Masking: quando adaptar-se exige demasiado</h2>

            <p>
              Algumas pessoas autistas aprendem a esconder ou compensar
              determinadas características para se adaptar às expectativas
              sociais. Este fenómeno é frequentemente chamado de{" "}
              <strong>masking</strong> ou camuflagem social.
            </p>

            <p>O masking pode incluir comportamentos como:</p>

            <ul className="after-list masking-list">
              <li>
                <div className="masking-icon green">
                  <i className="bi bi-chat-dots"></i>
                </div>

                <span>Ensaiar previamente o que dizer</span>
              </li>

              <li>
                <div className="masking-icon purple">
                  <i className="bi bi-people"></i>
                </div>

                <span>
                  Imitar expressões ou comportamentos de outras pessoas
                </span>
              </li>

              <li>
                <div className="masking-icon blue">
                  <i className="bi bi-eye"></i>
                </div>

                <span>Forçar contacto visual</span>
              </li>

              <li>
                <div className="masking-icon yellow">
                  <i className="bi bi-arrow-repeat"></i>
                </div>

                <span>Esconder movimentos repetitivos</span>
              </li>

              <li>
                <div className="masking-icon pink">
                  <i className="bi bi-chat-left-text"></i>
                </div>

                <span>Controlar constantemente a forma de falar ou agir</span>
              </li>

              <li>
                <div className="masking-icon turquoise">
                  <i className="bi bi-heart-pulse"></i>
                </div>

                <span>
                  Suportar situações sensoriais ou sociais desconfortáveis sem
                  demonstrar o esforço envolvido
                </span>
              </li>
            </ul>

            <p>
              Embora estas estratégias possam facilitar determinadas situações,
              o esforço constante para manter essa adaptação pode ser muito
              cansativo.
            </p>

            <p>
              Para algumas pessoas diagnosticadas tardiamente, compreender o
              conceito de masking também pode ajudar a explicar períodos de
              exaustão, ansiedade ou necessidade intensa de recuperação após
              situações sociais.
            </p>
          </div>
        </div>
      </section>

      {/* CHECKLIST */}
      <section className="after-checklist">
        <div className="container after-diagnosis-container">
          <div className="section-heading">
            <span className="after-section-label">Próximos passos</span>

            <h2>O que fazer a seguir?</h2>

            <p>
              Não é necessário resolver tudo imediatamente. Pode ser útil
              avançar por prioridades.
            </p>
          </div>

          <div className="after-checklist-grid">
            <div className="after-check-item">
              <span>1</span>
              <div>
                <h3>Compreender o relatório</h3>
                <p>
                  Leia o relatório e anote dúvidas para esclarecer com os
                  profissionais.
                </p>
              </div>
            </div>

            <div className="after-check-item">
              <span>2</span>
              <div>
                <h3>Identificar necessidades</h3>
                <p>
                  Perceba quais áreas têm maior impacto no quotidiano neste
                  momento.
                </p>
              </div>
            </div>

            <div className="after-check-item">
              <span>3</span>
              <div>
                <h3>Definir prioridades</h3>
                <p>
                  Comunicação, escola, autonomia, ansiedade, sono ou regulação
                  sensorial podem exigir prioridades diferentes.
                </p>
              </div>
            </div>

            <div className="after-check-item">
              <span>4</span>
              <div>
                <h3>Procurar acompanhamento</h3>
                <p>
                  Escolha profissionais e intervenções de acordo com as
                  necessidades identificadas.
                </p>
              </div>
            </div>

            <div className="after-check-item">
              <span>5</span>
              <div>
                <h3>Conversar com a escola</h3>
                <p>
                  Avalie quais informações precisam de ser partilhadas e quais
                  apoios poderão ser necessários.
                </p>
              </div>
            </div>

            <div className="after-check-item">
              <span>6</span>
              <div>
                <h3>Conhecer direitos e apoios</h3>
                <p>
                  Informe-se sobre AMIM, apoios sociais, escola, trabalho e
                  outros direitos aplicáveis em Portugal.
                </p>
              </div>
            </div>
          </div>

          <div className="after-final-message">
            <p>
              <strong>O diagnóstico não é o fim do processo.</strong> É uma
              informação que pode ajudar a construir apoios mais adequados à
              pessoa e à vida que ela quer viver.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AfterDiagnosis;
