import { Link } from "react-router-dom";
import "./Anxiety.css";

function Anxiety() {
  return (
    <main className="daily-anxiety-page">
      {/* HERO */}
      <section className="daily-anxiety-hero">
        <div className="container daily-anxiety-container">
          <div className="daily-anxiety-hero-content">
            <div className="daily-anxiety-hero-text">
              <span className="daily-anxiety-label">Vida diária</span>

              <h1>Ansiedade e autismo</h1>

              <p>
                A ansiedade pode fazer parte da vida de qualquer pessoa, mas é
                particularmente frequente entre pessoas autistas.
              </p>

              <p>
                Sensibilidade sensorial, imprevisibilidade, situações sociais,
                mudanças e o esforço constante para lidar com ambientes pouco
                acessíveis podem contribuir para níveis elevados de ansiedade.
              </p>
            </div>

            <div className="daily-anxiety-hero-symbol">
              <i className="bi bi-heart-pulse"></i>
            </div>
          </div>
        </div>
      </section>

      {/* NÃO É AUTISMO */}
      <section className="daily-anxiety-not-autism">
        <div className="container daily-anxiety-container">
          <div className="daily-anxiety-section-heading">
            <span className="daily-anxiety-section-label">
              Uma distinção importante
            </span>

            <h2>Ansiedade não é autismo</h2>

            <p>
              A ansiedade não faz parte dos critérios necessários para um
              diagnóstico de autismo e nem todas as pessoas autistas têm uma
              perturbação de ansiedade.
            </p>
          </div>

          <div className="daily-anxiety-important">
            <i className="bi bi-info-circle"></i>

            <div>
              <h3>Autismo e ansiedade podem coexistir</h3>

              <p>
                As perturbações de ansiedade são frequentes entre pessoas
                autistas, mas devem ser compreendidas como uma condição
                coexistente, e não simplesmente como uma característica
                inevitável do autismo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* POR QUE É FREQUENTE */}
      <section className="daily-anxiety-causes">
        <div className="container daily-anxiety-container">
          <div className="daily-anxiety-causes-image">
            <img
              src="/images/crises.png"
              alt="Ilustração sobre ansiedade e sobrecarga"
            />
          </div>

          <div className="daily-anxiety-section-heading daily-anxiety-heading-left">
            <span className="daily-anxiety-section-label">
              Nem sempre existe uma única causa
            </span>

            <h2>Por que a ansiedade pode ser tão frequente?</h2>

            <p>
              Cada pessoa é diferente. Ainda assim, alguns aspetos da vida
              quotidiana podem tornar o mundo particularmente imprevisível,
              exigente ou cansativo para uma pessoa autista.
            </p>
          </div>

          <div className="daily-anxiety-causes-grid">
            <article className="daily-anxiety-cause-card sensory">
              <div className="daily-anxiety-cause-icon">
                <i className="bi bi-volume-up"></i>
              </div>

              <h3>Sobrecarga sensorial</h3>

              <p>
                Barulho, luz, cheiros, toque, multidões ou vários estímulos ao
                mesmo tempo podem tornar determinados ambientes difíceis.
              </p>
            </article>

            <article className="daily-anxiety-cause-card uncertainty">
              <div className="daily-anxiety-cause-icon">
                <i className="bi bi-question-circle"></i>
              </div>

              <h3>Incerteza</h3>

              <p>
                Não saber o que vai acontecer, enfrentar situações novas ou
                lidar com mudanças inesperadas pode aumentar a ansiedade.
              </p>
            </article>

            <article className="daily-anxiety-cause-card social">
              <div className="daily-anxiety-cause-icon">
                <i className="bi bi-people"></i>
              </div>

              <h3>Situações sociais</h3>

              <p>
                Interpretar comportamentos, perceber expectativas ou
                preocupar-se com cometer um erro pode exigir um esforço
                significativo.
              </p>
            </article>

            <article className="daily-anxiety-cause-card masking">
              <div className="daily-anxiety-cause-icon">
                <i className="bi bi-mask"></i>
              </div>

              <h3>Masking</h3>

              <p>
                Esconder características autistas e tentar corresponder
                constantemente às expectativas sociais pode ser desgastante.
              </p>
            </article>

            <article className="daily-anxiety-cause-card emotions">
              <div className="daily-anxiety-cause-icon">
                <i className="bi bi-heart"></i>
              </div>

              <h3>Identificar emoções</h3>

              <p>
                Algumas pessoas sentem primeiro os efeitos físicos da ansiedade
                e têm dificuldade em identificar ou explicar o que estão a
                sentir.
              </p>
            </article>

            <article className="daily-anxiety-cause-card experiences">
              <div className="daily-anxiety-cause-icon">
                <i className="bi bi-shield-exclamation"></i>
              </div>

              <h3>Experiências anteriores</h3>

              <p>
                Bullying, exclusão, conflitos ou experiências negativas podem
                fazer com que situações semelhantes passem a ser antecipadas com
                medo.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* NEM SEMPRE PARECE ANSIEDADE */}
      <section className="daily-anxiety-signs">
        <div className="container daily-anxiety-container">
          <div className="daily-anxiety-signs-image">
            <img
              src="/images/cry.png"
              alt="Ilustração de uma pessoa a sentir ansiedade"
            />
          </div>

          <div className="daily-anxiety-signs-content">
            <span className="daily-anxiety-section-label">
              Nem sempre é fácil reconhecer
            </span>

            <h2>A ansiedade nem sempre parece ansiedade</h2>

            <p>
              Nem todas as pessoas conseguem dizer diretamente “estou ansioso”.
              Por vezes, a ansiedade aparece através de mudanças no
              comportamento, no corpo ou na capacidade de lidar com situações
              habituais.
            </p>

            <div className="daily-anxiety-sign-list">
              <div>
                <i className="bi bi-check-circle-fill"></i>
                <span>irritabilidade ou maior sensibilidade</span>
              </div>

              <div>
                <i className="bi bi-check-circle-fill"></i>
                <span>perguntas repetitivas ou procura de confirmação</span>
              </div>

              <div>
                <i className="bi bi-check-circle-fill"></i>
                <span>maior necessidade de rotina e previsibilidade</span>
              </div>

              <div>
                <i className="bi bi-check-circle-fill"></i>
                <span>problemas de sono</span>
              </div>

              <div>
                <i className="bi bi-check-circle-fill"></i>
                <span>
                  dores de barriga, náuseas ou outros sintomas físicos
                </span>
              </div>

              <div>
                <i className="bi bi-check-circle-fill"></i>
                <span>evitar lugares, pessoas ou atividades</span>
              </div>

              <div>
                <i className="bi bi-check-circle-fill"></i>
                <span>maior necessidade de stimming ou autorregulação</span>
              </div>

              <div>
                <i className="bi bi-check-circle-fill"></i>
                <span>choro, shutdown, meltdown ou ataques de pânico</span>
              </div>
            </div>
          </div>

          <div className="daily-anxiety-behaviour-note">
            <i className="bi bi-chat-square-heart"></i>

            <div>
              <h3>Uma mudança de comportamento pode estar a comunicar algo</h3>

              <p>
                Recusar, fugir, ficar mais rígido ou deixar de participar numa
                atividade pode, em algumas situações, ser uma forma de mostrar
                que algo se tornou demasiado difícil.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ANSIEDADE ANTECIPATÓRIA */}
      <section className="daily-anxiety-anticipatory">
        <div className="container daily-anxiety-container">
          <div className="daily-anxiety-section-heading">
            <span className="daily-anxiety-section-label">
              Quando o sofrimento começa antes
            </span>

            <h2>Ansiedade antecipatória</h2>

            <p>
              Por vezes, o acontecimento ainda nem começou e a pessoa já está a
              viver mentalmente tudo o que poderá correr mal.
            </p>
          </div>

          <div className="daily-anxiety-thoughts">
            <span>“E se o plano mudar?”</span>
            <span>“E se eu errar?”</span>
            <span>“E se estiver demasiado barulho?”</span>
            <span>“E se eu não souber o que fazer?”</span>
          </div>

          <div className="daily-anxiety-cycle">
            <article>
              <span>1</span>
              <h3>Situação futura</h3>
            </article>

            <i className="bi bi-arrow-right"></i>

            <article>
              <span>2</span>
              <h3>Preocupação</h3>
            </article>

            <i className="bi bi-arrow-right"></i>

            <article>
              <span>3</span>
              <h3>Sintomas físicos</h3>
            </article>

            <i className="bi bi-arrow-right"></i>

            <article>
              <span>4</span>
              <h3>Evitamento</h3>
            </article>
          </div>

          <div className="daily-anxiety-cycle-note">
            <i className="bi bi-info-circle"></i>

            <p>
              Evitar uma situação pode trazer alívio imediato. No entanto,
              quando o evitamento se torna a única estratégia disponível, a
              ansiedade pode continuar a limitar progressivamente a vida da
              pessoa.
            </p>
          </div>
        </div>
      </section>

      {/* NECESSIDADE DE CONTROLO */}
      <section className="daily-anxiety-control">
        <div className="container daily-anxiety-container">
          <div className="daily-anxiety-control-box">
            <div className="daily-anxiety-control-icon">
              <i className="bi bi-calendar-check"></i>
            </div>

            <div>
              <span className="daily-anxiety-section-label">
                Procurar previsibilidade
              </span>

              <h2>Ansiedade e necessidade de controlo</h2>

              <p>
                Alguns comportamentos interpretados como uma necessidade de
                “controlar tudo” podem, em determinadas situações, ser uma
                tentativa de tornar o ambiente mais previsível.
              </p>

              <ul>
                <li>perguntar repetidamente a que horas algo vai acontecer;</li>
                <li>precisar de saber quem estará presente;</li>
                <li>querer conhecer antecipadamente todos os passos;</li>
                <li>preferir sempre o mesmo percurso;</li>
                <li>ter dificuldade com alterações de última hora.</li>
              </ul>

              <div className="daily-anxiety-control-note">
                <strong>
                  Nem toda a necessidade de rotina significa ansiedade.
                </strong>

                <p>
                  O mais útil é tentar perceber o que aquela previsibilidade
                  está a proporcionar à pessoa naquele momento.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUANDO LIMITA A VIDA */}
      <section className="daily-anxiety-impact">
        <div className="container daily-anxiety-container">
          <div className="daily-anxiety-section-heading">
            <span className="daily-anxiety-section-label">
              Quando procurar apoio
            </span>

            <h2>Quando a ansiedade começa a limitar a vida</h2>

            <p>
              Ansiedade ocasional é comum. É particularmente importante procurar
              ajuda quando começa a provocar sofrimento significativo ou a
              impedir atividades importantes do quotidiano.
            </p>
          </div>

          <div className="daily-anxiety-impact-grid">
            <article>
              <div className="daily-anxiety-impact-icon school">
                <i className="bi bi-backpack"></i>
              </div>
              <h3>Escola</h3>
              <p>
                Crises antes de sair, faltas frequentes ou dificuldade em entrar
                e permanecer na escola.
              </p>
            </article>

            <article>
              <div className="daily-anxiety-impact-icon social">
                <i className="bi bi-people"></i>
              </div>
              <h3>Vida social</h3>
              <p>
                Evitar progressivamente outras pessoas ou deixar de participar
                em atividades anteriormente importantes.
              </p>
            </article>

            <article>
              <div className="daily-anxiety-impact-icon independence">
                <i className="bi bi-signpost-split"></i>
              </div>
              <h3>Autonomia</h3>
              <p>
                Deixar de conseguir realizar atividades habituais devido ao medo
                ou à necessidade constante de confirmação.
              </p>
            </article>

            <article>
              <div className="daily-anxiety-impact-icon health">
                <i className="bi bi-heart-pulse"></i>
              </div>
              <h3>Bem-estar</h3>
              <p>
                Sono muito afetado, ataques de pânico ou sofrimento emocional
                intenso e persistente.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* O QUE PODE AJUDAR */}
      <section className="daily-anxiety-help">
        <div className="container daily-anxiety-container">
          <div className="daily-anxiety-section-heading">
            <span className="daily-anxiety-section-label">
              Tornar o quotidiano mais sustentável
            </span>

            <h2>O que pode ajudar?</h2>

            <p>
              O objetivo não deve ser eliminar toda a ansiedade, mas perceber o
              que está por trás dela e aumentar a capacidade da pessoa para
              lidar com situações difíceis de forma segura.
            </p>
          </div>

          <div className="daily-anxiety-help-grid">
            <div className="daily-anxiety-help-item">
              <i className="bi bi-check-circle-fill"></i>
              <span>antecipar mudanças sempre que possível</span>
            </div>

            <div className="daily-anxiety-help-item">
              <i className="bi bi-check-circle-fill"></i>
              <span>dar informação clara sobre o que vai acontecer</span>
            </div>

            <div className="daily-anxiety-help-item">
              <i className="bi bi-check-circle-fill"></i>
              <span>usar apoio visual quando for útil</span>
            </div>

            <div className="daily-anxiety-help-item">
              <i className="bi bi-check-circle-fill"></i>
              <span>reduzir estímulos sensoriais desnecessários</span>
            </div>

            <div className="daily-anxiety-help-item">
              <i className="bi bi-check-circle-fill"></i>
              <span>permitir pausas e tempo de recuperação</span>
            </div>

            <div className="daily-anxiety-help-item">
              <i className="bi bi-check-circle-fill"></i>
              <span>identificar os primeiros sinais de ansiedade</span>
            </div>

            <div className="daily-anxiety-help-item">
              <i className="bi bi-check-circle-fill"></i>
              <span>ensinar formas de pedir ajuda ou uma pausa</span>
            </div>

            <div className="daily-anxiety-help-item">
              <i className="bi bi-check-circle-fill"></i>
              <span>respeitar estratégias de autorregulação</span>
            </div>
          </div>

          <div className="daily-anxiety-professional">
            <i className="bi bi-person-heart"></i>

            <div>
              <h3>Apoio profissional</h3>

              <p>
                Quando a ansiedade causa sofrimento significativo, pode ser
                importante procurar apoio psicológico ou médico. A intervenção
                deve considerar as necessidades de comunicação, sensoriais e
                cognitivas da pessoa autista.
              </p>

              <p>
                Algumas intervenções psicológicas, incluindo formas adaptadas de
                terapia cognitivo-comportamental, podem ser utilizadas no
                tratamento da ansiedade em pessoas autistas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CRISES E SOBRECARGA */}
      <section className="daily-anxiety-overload">
        <div className="container daily-anxiety-container">
          <div className="daily-anxiety-overload-box">
            <div className="daily-anxiety-overload-icon">
              <i className="bi bi-cloud-lightning-rain"></i>
            </div>

            <div>
              <span className="daily-anxiety-section-label">
                Quando a ansiedade ultrapassa o limite
              </span>

              <h2>Ansiedade, meltdown e shutdown</h2>

              <p>
                Ansiedade e sobrecarga não são exatamente a mesma coisa. No
                entanto, períodos intensos ou prolongados de ansiedade podem
                contribuir para sobrecarga e, em algumas pessoas, culminar num
                meltdown ou shutdown.
              </p>

              <Link to="/crises-sobrecarga" className="daily-anxiety-button">
                Crises e sobrecarga
                <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INFÂNCIA */}
      <section className="daily-anxiety-childhood">
        <div className="container daily-anxiety-container">
          <div className="daily-anxiety-section-heading">
            <span className="daily-anxiety-section-label">
              Crianças e adolescentes
            </span>

            <h2>Uma criança pode estar bem na escola e não estar bem</h2>

            <p>
              Bom desempenho académico não significa necessariamente ausência de
              ansiedade. Algumas crianças conseguem cumprir as exigências
              escolares enquanto fazem um esforço muito grande para manter esse
              desempenho.
            </p>
          </div>

          <div className="daily-anxiety-childhood-box">
            <i className="bi bi-lightbulb"></i>

            <div>
              <p>
                Uma criança pode ter boas notas, comportar-se bem na sala de
                aula e ainda assim chegar a casa completamente exausta,
                irritável ou emocionalmente sobrecarregada.
              </p>

              <p>
                Por isso, pode ser útil considerar não apenas aquilo que a
                criança consegue fazer, mas também{" "}
                <strong>
                  quanto esforço é necessário para conseguir fazê-lo.
                </strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ADULTOS */}
      <section className="daily-anxiety-adults">
        <div className="container daily-anxiety-container">
          <div className="daily-anxiety-adults-image">
            <img
              src="/images/adult.png"
              alt="Ilustração de uma pessoa adulta"
            />
          </div>

          <div className="daily-anxiety-adults-content">
            <span className="daily-anxiety-section-label">
              A ansiedade não termina na infância
            </span>

            <h2>Ansiedade em adultos</h2>

            <p>
              Para adultos autistas, situações aparentemente comuns podem exigir
              uma quantidade considerável de preparação, processamento e
              recuperação.
            </p>

            <div className="daily-anxiety-adults-list">
              <div>
                <i className="bi bi-check-circle-fill"></i>
                <span>entrevistas de emprego e ambiente profissional</span>
              </div>

              <div>
                <i className="bi bi-check-circle-fill"></i>
                <span>telefonemas ou contacto com serviços</span>
              </div>

              <div>
                <i className="bi bi-check-circle-fill"></i>
                <span>consultas e compromissos</span>
              </div>

              <div>
                <i className="bi bi-check-circle-fill"></i>
                <span>transportes e locais desconhecidos</span>
              </div>

              <div>
                <i className="bi bi-check-circle-fill"></i>
                <span>mudanças inesperadas de rotina</span>
              </div>

              <div>
                <i className="bi bi-check-circle-fill"></i>
                <span>interações sociais prolongadas</span>
              </div>

              <div>
                <i className="bi bi-check-circle-fill"></i>
                <span>preocupação intensa com cometer erros</span>
              </div>

              <div>
                <i className="bi bi-check-circle-fill"></i>
                <span>masking e exaustão após situações sociais</span>
              </div>
            </div>
          </div>

          <div className="daily-anxiety-adults-note">
            <i className="bi bi-bar-chart"></i>

            <p>
              Estudos indicam taxas elevadas de perturbações de ansiedade entre
              adultos autistas. As estimativas variam significativamente entre
              estudos e populações, por isso estes números devem ser
              interpretados com cautela.
            </p>
          </div>
        </div>
      </section>

      {/* OBSERVAR PADRÕES */}
      <section className="daily-anxiety-observe">
        <div className="container daily-anxiety-container">
          <div className="daily-anxiety-section-heading">
            <span className="daily-anxiety-section-label">
              Conhecer os próprios padrões
            </span>

            <h2>O que costuma acontecer antes da ansiedade aumentar?</h2>
          </div>

          <div className="daily-anxiety-observe-grid">
            <article>
              <i className="bi bi-calendar-event"></i>
              <span>Há alguma mudança ou acontecimento próximo?</span>
            </article>

            <article>
              <i className="bi bi-volume-up"></i>
              <span>O ambiente está sensorialmente difícil?</span>
            </article>

            <article>
              <i className="bi bi-moon-stars"></i>
              <span>Existe cansaço ou falta de sono?</span>
            </article>

            <article>
              <i className="bi bi-people"></i>
              <span>Houve muitas exigências sociais?</span>
            </article>

            <article>
              <i className="bi bi-list-task"></i>
              <span>Existem demasiadas tarefas ou decisões?</span>
            </article>

            <article>
              <i className="bi bi-shield-exclamation"></i>
              <span>Algo semelhante correu mal anteriormente?</span>
            </article>
          </div>
        </div>
      </section>

      {/* AJUDA URGENTE */}
      <section className="daily-anxiety-urgent">
        <div className="container daily-anxiety-container">
          <div className="daily-anxiety-urgent-box">
            <i className="bi bi-exclamation-triangle"></i>

            <div>
              <h2>Quando é necessária ajuda imediata?</h2>

              <p>
                Se a pessoa estiver em risco imediato de se magoar, de magoar
                outra pessoa ou apresentar uma situação de emergência médica,
                procure assistência de emergência.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FONTES */}
      <section className="daily-anxiety-sources">
        <div className="container daily-anxiety-container">
          <div className="daily-anxiety-section-heading">
            <span className="daily-anxiety-section-label">
              Informação e investigação
            </span>

            <h2>Fontes e recursos</h2>
          </div>

          <article className="daily-anxiety-source-card">
            <i className="bi bi-book"></i>

            <div>
              <h3>National Autistic Society — Anxiety</h3>

              <p>
                Informação sobre ansiedade em pessoas autistas, fatores que
                podem contribuir e estratégias de apoio.
              </p>

              <a
                href="https://www.autism.org.uk/advice-and-guidance/mental-health/anxiety"
                target="_blank"
                rel="noreferrer"
              >
                Consultar fonte
              </a>
            </div>
          </article>

          <article className="daily-anxiety-source-card">
            <i className="bi bi-building"></i>

            <div>
              <h3>NICE — Autism spectrum disorder in adults</h3>

              <p>
                Orientações clínicas sobre autismo em adultos, incluindo
                condições de saúde mental coexistentes e adaptação das
                intervenções.
              </p>

              <a
                href="https://www.nice.org.uk/guidance/cg142"
                target="_blank"
                rel="noreferrer"
              >
                Consultar fonte
              </a>
            </div>
          </article>

          <article className="daily-anxiety-source-card">
            <i className="bi bi-journal-medical"></i>

            <div>
              <h3>PubMed — Ansiedade em adultos autistas</h3>

              <p>
                Meta-análise sobre a prevalência de perturbações de ansiedade em
                adultos no espetro do autismo.
              </p>

              <a
                href="https://pubmed.ncbi.nlm.nih.gov/30178724/"
                target="_blank"
                rel="noreferrer"
              >
                Consultar estudo
              </a>
            </div>
          </article>

          <article className="daily-anxiety-source-card">
            <i className="bi bi-journal-check"></i>

            <div>
              <h3>PubMed — Terapia cognitivo-comportamental</h3>

              <p>
                Revisão de estudos sobre intervenções de terapia
                cognitivo-comportamental para ansiedade em crianças e jovens
                autistas.
              </p>

              <a
                href="https://pubmed.ncbi.nlm.nih.gov/34598734/"
                target="_blank"
                rel="noreferrer"
              >
                Consultar estudo
              </a>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

export default Anxiety;
