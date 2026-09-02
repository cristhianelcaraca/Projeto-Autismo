import { Link } from "react-router-dom";
import "./AnxietyCrises.css";

function AnxietyCrises() {
  return (
    <main className="anxiety-page">
      {/* HERO */}
      <section className="anxiety-hero">
        <div className="container anxiety-container">
          <div className="anxiety-hero-content">
            <div className="anxiety-hero-image">
              <img
                src="/images/meltdown.png"
                alt="Ilustração relacionada com ansiedade e sobrecarga na escola"
              />
            </div>

            <div className="anxiety-hero-text">
              <span className="anxiety-label">Autismo e escola</span>

              <h1>Ansiedade e crises na escola</h1>

              <p>
                Para algumas crianças e jovens autistas, a escola pode tornar-se
                uma fonte intensa de ansiedade. Compreender os sinais e perceber
                o que pode estar por trás das crises é um primeiro passo
                importante para encontrar formas de apoio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NEM SEMPRE PARECE ANSIEDADE */}
      <section className="anxiety-signs">
        <div className="container anxiety-container">
          <div className="anxiety-section-heading">
            <span className="anxiety-section-label">Reconhecer os sinais</span>

            <h2>Nem sempre parece ansiedade</h2>

            <p>
              A ansiedade nem sempre aparece como medo ou preocupação claramente
              expressos. Em algumas crianças e jovens pode manifestar-se através
              de mudanças no comportamento, sintomas físicos ou dificuldade em
              enfrentar determinadas situações.
            </p>
          </div>

          <div className="anxiety-signs-grid">
            <div className="anxiety-sign-item">
              <i className="bi bi-house-door"></i>
              <span>Recusa ou grande dificuldade em ir à escola</span>
            </div>

            <div className="anxiety-sign-item">
              <i className="bi bi-heart-pulse"></i>
              <span>Dores de barriga, náuseas ou dores de cabeça</span>
            </div>

            <div className="anxiety-sign-item">
              <i className="bi bi-cloud-rain"></i>
              <span>Choro, irritabilidade ou crises antes das aulas</span>
            </div>

            <div className="anxiety-sign-item">
              <i className="bi bi-moon-stars"></i>
              <span>Dificuldade em dormir em dias de escola</span>
            </div>

            <div className="anxiety-sign-item">
              <i className="bi bi-calendar-event"></i>
              <span>
                Necessidade intensa de saber antecipadamente o que vai acontecer
              </span>
            </div>

            <div className="anxiety-sign-item">
              <i className="bi bi-battery-half"></i>
              <span>Exaustão intensa depois da escola</span>
            </div>

            <div className="anxiety-sign-item">
              <i className="bi bi-volume-mute"></i>
              <span>Isolamento ou shutdown</span>
            </div>

            <div className="anxiety-sign-item">
              <i className="bi bi-lightning-charge"></i>
              <span>Explosões emocionais depois de chegar a casa</span>
            </div>
          </div>

          <div className="anxiety-highlight">
            <i className="bi bi-info-circle"></i>

            <p>
              Uma criança pode conseguir controlar ou esconder o sofrimento
              durante o dia escolar e chegar a casa completamente esgotada. O
              facto de a escola não observar uma crise não significa que não
              possa existir ansiedade ou sobrecarga.
            </p>
          </div>
        </div>
      </section>

      {/* O QUE PODE ESTAR POR TRÁS */}
      <section className="anxiety-causes">
        <div className="container anxiety-container">
          <div className="anxiety-causes-image">
            <img
              src="/images/anxiety.png"
              alt="Ilustração sobre ansiedade em ambiente escolar"
            />
          </div>

          <div className="anxiety-section-heading left">
            <span className="anxiety-section-label">
              Compreender os gatilhos
            </span>

            <h2>O que pode estar por trás da ansiedade?</h2>

            <p>
              Muitas vezes não existe apenas uma causa. Diferentes fatores podem
              acumular-se ao longo do dia e aumentar progressivamente a
              sobrecarga.
            </p>
          </div>

          <div className="anxiety-causes-grid">
            <article className="anxiety-cause-card sensory">
              <div className="anxiety-cause-icon">
                <i className="bi bi-ear"></i>
              </div>

              <h3>Sobrecarga sensorial</h3>

              <p>
                Barulho, luzes, corredores cheios, refeitório, cheiros, contacto
                físico ou outros estímulos difíceis de tolerar.
              </p>
            </article>

            <article className="anxiety-cause-card routine">
              <div className="anxiety-cause-icon">
                <i className="bi bi-shuffle"></i>
              </div>

              <h3>Imprevisibilidade</h3>

              <p>
                Mudanças de professor, sala, horários, atividades inesperadas ou
                alterações da rotina.
              </p>
            </article>

            <article className="anxiety-cause-card social">
              <div className="anxiety-cause-icon">
                <i className="bi bi-people"></i>
              </div>

              <h3>Interação social</h3>

              <p>
                Recreios, trabalhos de grupo, conflitos, regras sociais pouco
                claras ou dificuldade em interpretar situações.
              </p>
            </article>

            <article className="anxiety-cause-card academic">
              <div className="anxiety-cause-icon">
                <i className="bi bi-pencil-square"></i>
              </div>

              <h3>Exigências académicas</h3>

              <p>
                Testes, apresentações, medo de errar, pressão para obter bons
                resultados ou expectativas muito elevadas.
              </p>
            </article>

            <article className="anxiety-cause-card transition">
              <div className="anxiety-cause-icon">
                <i className="bi bi-arrow-left-right"></i>
              </div>

              <h3>Transições</h3>

              <p>
                Entrada na escola, mudança de aula, fim do intervalo ou passagem
                entre diferentes atividades.
              </p>
            </article>

            <article className="anxiety-cause-card bullying">
              <div className="anxiety-cause-icon">
                <i className="bi bi-person-x"></i>
              </div>

              <h3>Bullying ou exclusão</h3>

              <p>
                Comentários, provocações, isolamento ou experiências sociais
                negativas também podem aumentar significativamente a ansiedade.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* CRISE, MELTDOWN OU BIRRA */}
      <section className="anxiety-meltdown">
        <div className="container anxiety-container">
          <div className="anxiety-meltdown-image">
            <img
              src="/images/outburst.png"
              alt="Ilustração relacionada com uma crise de sobrecarga"
            />
          </div>

          <div className="anxiety-meltdown-content">
            <span className="anxiety-section-label">
              Quando chega ao limite
            </span>

            <h2>Crise, meltdown ou birra?</h2>

            <p>
              Um meltdown não é simplesmente uma birra ou um comportamento
              escolhido para obter alguma coisa. Pode acontecer quando a pessoa
              chega ao limite da sua capacidade de lidar com estímulos, emoções,
              exigências ou frustração.
            </p>

            <p>
              Durante uma crise podem surgir choro intenso, gritos,
              vocalizações, movimentos repetitivos, tentativa de fugir da
              situação ou dificuldade em comunicar.
            </p>

            <div className="shutdown-box">
              <i className="bi bi-volume-mute"></i>

              <div>
                <h3>E o shutdown?</h3>

                <p>
                  Nem todas as crises são explosivas. Algumas pessoas respondem
                  à sobrecarga fechando-se, deixando de falar, afastando-se ou
                  apresentando grande dificuldade em responder ao que acontece à
                  sua volta.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DURANTE UMA CRISE */}
      <section className="anxiety-during">
        <div className="container anxiety-container">
          <div className="anxiety-section-heading">
            <span className="anxiety-section-label">Naquele momento</span>

            <h2>Durante uma crise: o que pode ajudar?</h2>

            <p>
              Cada criança é diferente, mas algumas estratégias podem ajudar a
              reduzir a quantidade de exigências e estímulos enquanto ela
              recupera.
            </p>
          </div>

          <div className="anxiety-help-grid">
            <div className="anxiety-help-item">
              <span>✓</span>
              <p>Reduzir ruído, luz e outros estímulos quando possível.</p>
            </div>

            <div className="anxiety-help-item">
              <span>✓</span>
              <p>Diminuir a quantidade de pessoas à volta.</p>
            </div>

            <div className="anxiety-help-item">
              <span>✓</span>
              <p>Falar pouco, com linguagem simples e clara.</p>
            </div>

            <div className="anxiety-help-item">
              <span>✓</span>
              <p>Permitir acesso a um local tranquilo.</p>
            </div>

            <div className="anxiety-help-item">
              <span>✓</span>
              <p>Dar tempo para a criança recuperar.</p>
            </div>

            <div className="anxiety-help-item">
              <span>✓</span>
              <p>
                Evitar exigir explicações detalhadas durante o momento de maior
                sobrecarga.
              </p>
            </div>
          </div>

          <div className="anxiety-during-note">
            <i className="bi bi-heart"></i>

            <p>
              Durante uma crise, a prioridade deve ser reduzir a sobrecarga,
              preservar a segurança e ajudar a criança a recuperar a regulação.
            </p>
          </div>
        </div>
      </section>

      {/* DEPOIS DA CRISE */}
      <section className="anxiety-after">
        <div className="container anxiety-container">
          <div className="anxiety-section-heading">
            <span className="anxiety-section-label">Procurar padrões</span>

            <h2>Depois da crise: tentar perceber o porquê</h2>

            <p>
              Registar o que aconteceu antes e depois de uma crise pode ajudar a
              família e a escola a identificar padrões.
            </p>
          </div>

          <div className="anxiety-observation-flow">
            <div>O que aconteceu antes?</div>
            <i className="bi bi-arrow-down"></i>

            <div>Onde estava?</div>
            <i className="bi bi-arrow-down"></i>

            <div>Havia muito barulho, pessoas ou estímulos?</div>
            <i className="bi bi-arrow-down"></i>

            <div>Houve alguma mudança inesperada?</div>
            <i className="bi bi-arrow-down"></i>

            <div>Existia uma exigência específica?</div>
            <i className="bi bi-arrow-down"></i>

            <div>O que ajudou a recuperar?</div>
          </div>
        </div>
      </section>

      {/* EVITAMENTO ESCOLAR */}
      <section className="anxiety-avoidance">
        <div className="container anxiety-container">
          <div className="anxiety-avoidance-image">
            <img
              src="/images/avoidance.png"
              alt="Ilustração sobre dificuldade em ir à escola"
            />
          </div>

          <div className="anxiety-avoidance-content">
            <span className="anxiety-section-label">
              Quando a escola se torna demasiado difícil
            </span>

            <h2>Quando a ansiedade começa a impedir a ida à escola</h2>

            <p>
              Em algumas situações, a ansiedade pode tornar-se tão intensa que a
              criança ou jovem começa a ter cada vez mais dificuldade em entrar
              na escola ou até em sair de casa.
            </p>

            <p>
              Podem surgir crises pela manhã, sintomas físicos, faltas
              frequentes, medo intenso no domingo ou na véspera de regressar às
              aulas e grande sofrimento associado à ideia de voltar à escola.
            </p>

            <div className="anxiety-avoidance-highlight">
              <i className="bi bi-exclamation-circle"></i>

              <p>
                Quando isto acontece, é importante olhar para o sofrimento por
                trás do comportamento e tentar compreender o que está a tornar a
                escola difícil.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* O QUE A ESCOLA PODE FAZER */}
      <section className="anxiety-school-support">
        <div className="container anxiety-container">
          <div className="anxiety-section-heading">
            <span className="anxiety-section-label">Trabalhar em conjunto</span>

            <h2>O que a escola pode fazer?</h2>
          </div>

          <div className="anxiety-school-grid">
            <div className="anxiety-school-item">
              <i className="bi bi-calendar-check"></i>
              <p>Antecipar alterações de rotina sempre que possível.</p>
            </div>

            <div className="anxiety-school-item">
              <i className="bi bi-door-open"></i>
              <p>Disponibilizar um espaço mais tranquilo.</p>
            </div>

            <div className="anxiety-school-item">
              <i className="bi bi-pause-circle"></i>
              <p>Permitir pausas quando existe sobrecarga.</p>
            </div>

            <div className="anxiety-school-item">
              <i className="bi bi-person-check"></i>
              <p>Identificar um adulto de referência.</p>
            </div>

            <div className="anxiety-school-item">
              <i className="bi bi-sliders"></i>
              <p>
                Adaptar situações que estejam a desencadear ansiedade, quando
                adequado.
              </p>
            </div>

            <div className="anxiety-school-item">
              <i className="bi bi-people"></i>
              <p>
                Trabalhar em conjunto com a família e profissionais que
                acompanham a criança.
              </p>
            </div>
          </div>

          <div className="anxiety-links">
            <Link to="/medidas-suporte" className="anxiety-button">
              Ver medidas de suporte
            </Link>

            <Link to="/direitos-escola" className="anxiety-button secondary">
              Direitos na escola
            </Link>
          </div>
        </div>
      </section>

      {/* COMO FALAR COM A ESCOLA */}
      <section className="anxiety-communication">
        <div className="container anxiety-container">
          <div className="anxiety-section-heading">
            <span className="anxiety-section-label">
              Tornar o problema concreto
            </span>

            <h2>Como falar com a escola</h2>

            <p>
              Pode ajudar descrever situações concretas, em vez de utilizar
              apenas expressões como “não quer ir à escola”.
            </p>
          </div>

          <div className="anxiety-example-box">
            <span>Exemplo</span>

            <p>
              “Nas últimas duas semanas, o meu filho teve várias crises antes de
              sair de casa, acompanhadas de choro intenso e dificuldade em
              entrar na escola. Temos observado que estas situações aumentam
              sobretudo quando acontece determinada atividade ou situação.”
            </p>
          </div>

          <p className="anxiety-record-note">
            Guardar datas, episódios, emails, informações da escola e relatórios
            profissionais pode ajudar a construir uma imagem mais clara da
            situação ao longo do tempo.
          </p>
        </div>
      </section>

      {/* NOSSA EXPERIÊNCIA */}
      <section className="anxiety-experience">
        <div className="container anxiety-container">
          <div className="anxiety-experience-box">
            <span className="anxiety-section-label">A nossa experiência</span>

            <h2>Quando o medo de falhar começou a mudar tudo</h2>

            <p>
              Um dia, o Davi chegou a casa com um teste da escola. Tinha
              recebido 100% e, no papel, estava escrito:
              <strong>
                {" "}
                “Parabéns, foste escolhido para representar a turma.”
              </strong>
            </p>

            <p>
              Naquele momento ficámos muito felizes. Demos-lhe os parabéns,
              dissemos que era muito inteligente e celebrámos o resultado, sem
              perceber que aquela situação acabaria por trazer uma pressão
              enorme para ele.
            </p>

            <p>
              Depois explicou-nos que se tratava de um campeonato de ortografia
              de língua portuguesa. Como tinha obtido a melhor classificação da
              turma, iria representar os colegas na fase final do campeonato na
              escola.
            </p>

            <p>
              À medida que os dias passaram, começámos a perceber que ele estava
              cada vez mais ansioso. Sentia que muitas pessoas esperavam que
              soubesse sempre a resposta. Nas aulas, os colegas começaram a
              criar essa expectativa à volta dele.
            </p>

            <p>
              Numa ocasião, quando não soube responder corretamente, alguém
              comentou:
              <strong> “Não és tu que sabes tudo?”</strong>
            </p>

            <p>
              A partir daí, o medo de falhar começou a crescer. O que antes
              parecia apenas nervosismo passou a manifestar-se fisicamente antes
              de ir para a escola. Depois surgiram crises cada vez mais
              intensas, com vocalizações, gritos e um nível de sofrimento que
              muitas vezes tornava impossível sair de casa e ir às aulas.
            </p>

            <p>
              A situação foi escalando até ao ponto de ele deixar de querer sair
              de casa. Na primeira sessão com a psicóloga, não conseguiu sequer
              sair do carro para entrar no consultório. Foi necessário que ela
              viesse até ao carro para conseguir aproximar-se dele e iniciar o
              contacto.
            </p>

            <p>
              Foi nessa fase que começámos a contar de forma mais direta com a
              ajuda da neuropediatra e da psicóloga que o acompanhavam. Para
              nós, esta experiência mudou completamente a forma como entendíamos
              aquelas crises. Deixámos de olhar apenas para o comportamento
              visível e começámos a tentar perceber o medo, a pressão e a
              ansiedade que estavam por trás dele.
            </p>

            <div className="anxiety-experience-note">
              Esta é a nossa experiência familiar. Cada criança e cada jovem
              pode manifestar ansiedade de forma diferente, e situações
              semelhantes podem ter causas diferentes.
            </div>
          </div>
        </div>
      </section>

      {/* QUANDO PROCURAR AJUDA */}
      <section className="anxiety-professional-help">
        <div className="container anxiety-container">
          <div className="anxiety-professional-box">
            <div className="anxiety-professional-icon">
              <i className="bi bi-heart-pulse"></i>
            </div>

            <div>
              <span className="anxiety-section-label">
                Quando procurar ajuda
              </span>

              <h2>Quando a ansiedade começa a dominar o dia a dia</h2>

              <p>
                Quando a ansiedade é frequente, causa sofrimento importante ou
                começa a interferir com a ida à escola, o sono, a alimentação,
                as relações ou outras atividades quotidianas, pode ser
                importante procurar orientação de um profissional de saúde.
              </p>

              <p>
                Se existir risco imediato para a segurança da criança, do jovem
                ou de outras pessoas, deve ser procurada ajuda urgente.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AnxietyCrises;
