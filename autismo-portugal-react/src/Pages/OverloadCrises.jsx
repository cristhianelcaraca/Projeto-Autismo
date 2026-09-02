import "./OverloadCrises.css";

function OverloadCrises() {
  return (
    <main className="overload-page">
      {/* HERO */}
      <section className="overload-hero">
        <div className="container overload-container">
          <div className="overload-hero-content">
            <div className="overload-hero-text">
              <span className="overload-label">Vida diária</span>

              <h1>Crises e sobrecarga</h1>

              <p>
                Barulho, luz, mudanças inesperadas, exigências sociais, cansaço
                ou demasiadas coisas a acontecer ao mesmo tempo podem fazer com
                que uma pessoa autista chegue ao seu limite.
              </p>

              <p>
                Compreender o que está por trás de uma crise pode ajudar a
                reduzir o sofrimento e a encontrar formas de apoio mais
                adequadas.
              </p>
            </div>

            <div className="overload-hero-icon">
              <i className="bi bi-cloud-lightning-rain"></i>
            </div>
          </div>
        </div>
      </section>

      {/* O QUE É SOBRECARGA */}
      <section className="overload-understanding">
        <div className="container overload-container">
          <div className="overload-section-heading">
            <span className="overload-section-label">
              Quando tudo se torna demasiado
            </span>

            <h2>O que é uma sobrecarga?</h2>

            <p>
              A sobrecarga acontece quando a quantidade de estímulos, exigências
              ou emoções ultrapassa aquilo que a pessoa consegue processar
              naquele momento.
            </p>
          </div>

          <div className="overload-causes-grid">
            <article className="overload-cause-card sensory">
              <div className="overload-cause-icon">
                <i className="bi bi-volume-up"></i>
              </div>

              <h3>Sensorial</h3>

              <p>
                Sons, luzes, cheiros, toque, temperatura, multidões ou vários
                estímulos a acontecer ao mesmo tempo.
              </p>
            </article>

            <article className="overload-cause-card emotional">
              <div className="overload-cause-icon">
                <i className="bi bi-heart-pulse"></i>
              </div>

              <h3>Emocional</h3>

              <p>
                Ansiedade, frustração, conflitos, medo, expectativas ou emoções
                difíceis de identificar e comunicar.
              </p>
            </article>

            <article className="overload-cause-card social">
              <div className="overload-cause-icon">
                <i className="bi bi-people"></i>
              </div>

              <h3>Social</h3>

              <p>
                Conversas prolongadas, necessidade de interpretar outras
                pessoas, ambientes sociais intensos ou esforço para mascarar
                características autistas.
              </p>
            </article>

            <article className="overload-cause-card demands">
              <div className="overload-cause-icon">
                <i className="bi bi-list-check"></i>
              </div>

              <h3>Exigências</h3>

              <p>
                Muitas tarefas, decisões, instruções, responsabilidades ou
                mudanças sem tempo suficiente para recuperar.
              </p>
            </article>

            <article className="overload-cause-card routine">
              <div className="overload-cause-icon">
                <i className="bi bi-arrow-repeat"></i>
              </div>

              <h3>Mudanças inesperadas</h3>

              <p>
                Alterações de planos, atrasos, imprevistos ou mudanças numa
                rotina que ajudava a pessoa a sentir-se segura.
              </p>
            </article>

            <article className="overload-cause-card fatigue">
              <div className="overload-cause-icon">
                <i className="bi bi-battery-half"></i>
              </div>

              <h3>Cansaço acumulado</h3>

              <p>
                Sono insuficiente, dias muito exigentes ou vários períodos de
                sobrecarga sem tempo suficiente para recuperação.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* SINAIS */}
      <section className="overload-signs">
        <div className="container overload-container">
          <div className="overload-section-heading">
            <span className="overload-section-label">
              Antes de chegar ao limite
            </span>

            <h2>A sobrecarga pode dar sinais</h2>

            <p>
              Algumas pessoas conseguem perceber que estão a aproximar-se do
              limite. Outras só percebem depois da crise. Os sinais também podem
              variar de pessoa para pessoa.
            </p>
          </div>

          <div className="overload-signs-grid">
            <div className="overload-sign-item">
              <i className="bi bi-check-circle-fill"></i>
              <span>Maior irritabilidade ou impaciência</span>
            </div>

            <div className="overload-sign-item">
              <i className="bi bi-check-circle-fill"></i>
              <span>Necessidade urgente de sair do ambiente</span>
            </div>

            <div className="overload-sign-item">
              <i className="bi bi-check-circle-fill"></i>
              <span>Maior sensibilidade a sons, luz ou toque</span>
            </div>

            <div className="overload-sign-item">
              <i className="bi bi-check-circle-fill"></i>
              <span>Dificuldade crescente em falar ou responder</span>
            </div>

            <div className="overload-sign-item">
              <i className="bi bi-check-circle-fill"></i>
              <span>Choro, ansiedade ou agitação</span>
            </div>

            <div className="overload-sign-item">
              <i className="bi bi-check-circle-fill"></i>
              <span>Aumento de movimentos repetitivos ou stimming</span>
            </div>

            <div className="overload-sign-item">
              <i className="bi bi-check-circle-fill"></i>
              <span>Dificuldade em tomar decisões simples</span>
            </div>

            <div className="overload-sign-item">
              <i className="bi bi-check-circle-fill"></i>
              <span>Necessidade de silêncio, isolamento ou escuridão</span>
            </div>
          </div>

          <div className="overload-signs-note">
            <i className="bi bi-lightbulb"></i>

            <p>
              Aprender a reconhecer os sinais individuais pode permitir
              interromper uma atividade, diminuir estímulos ou descansar antes
              que a sobrecarga se transforme numa crise.
            </p>
          </div>
        </div>
      </section>

      {/* MELTDOWN E SHUTDOWN */}
      <section className="overload-types">
        <div className="container overload-container">
          <div className="overload-section-heading">
            <span className="overload-section-label">
              Duas formas diferentes de chegar ao limite
            </span>

            <h2>Meltdown e shutdown</h2>

            <p>
              A sobrecarga não se manifesta da mesma forma em todas as pessoas.
              Algumas reagem de forma muito visível; outras parecem desligar-se
              do que está à sua volta.
            </p>
          </div>

          <div className="overload-types-grid">
            <article className="overload-type-card meltdown">
              <div className="overload-type-icon">
                <i className="bi bi-lightning-charge"></i>
              </div>

              <h3>Meltdown</h3>

              <p>
                É uma perda temporária de controlo causada por uma situação de
                sobrecarga intensa.
              </p>

              <p>Pode incluir, por exemplo:</p>

              <ul>
                <li>choro ou gritos;</li>
                <li>vocalizações;</li>
                <li>movimentos intensos;</li>
                <li>tentativa de fugir do ambiente;</li>
                <li>agressividade ou autoagressão em algumas situações;</li>
                <li>dificuldade em responder a instruções.</li>
              </ul>

              <div className="overload-type-note">
                <strong>Não é simplesmente uma birra.</strong>
                <p>
                  Durante um meltdown, a pessoa pode já não conseguir utilizar
                  as estratégias que normalmente usa para se regular.
                </p>
              </div>
            </article>

            <article className="overload-type-card shutdown">
              <div className="overload-type-icon">
                <i className="bi bi-battery"></i>
              </div>

              <h3>Shutdown</h3>

              <p>
                A sobrecarga também pode levar a uma resposta muito mais
                interna, em que a pessoa parece desligar-se ou fechar-se.
              </p>

              <p>Pode incluir, por exemplo:</p>

              <ul>
                <li>ficar em silêncio;</li>
                <li>não conseguir responder;</li>
                <li>dificuldade em falar;</li>
                <li>necessidade de ficar sozinho;</li>
                <li>imobilidade ou sensação de falta de energia;</li>
                <li>dificuldade em tomar decisões.</li>
              </ul>

              <div className="overload-type-note">
                <strong>Um shutdown também é uma forma de sobrecarga.</strong>
                <p>
                  O facto de ser menos visível não significa que a pessoa esteja
                  menos angustiada.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* DURANTE UMA CRISE */}
      <section className="overload-during">
        <div className="container overload-container">
          <div className="overload-section-heading">
            <span className="overload-section-label">
              Quando a crise já começou
            </span>

            <h2>O que pode ajudar?</h2>

            <p>
              Durante uma crise, o objetivo principal não deve ser corrigir o
              comportamento, discutir ou ensinar uma lição. Primeiro é
              necessário reduzir a sobrecarga e garantir segurança.
            </p>
          </div>

          <div className="overload-help-grid">
            <article className="overload-help-item">
              <i className="bi bi-volume-mute"></i>
              <h3>Reduza os estímulos</h3>
              <p>
                Se possível, diminua ruído, luz, pessoas e outras fontes de
                estimulação.
              </p>
            </article>

            <article className="overload-help-item">
              <i className="bi bi-chat-left-dots"></i>
              <h3>Fale menos</h3>
              <p>
                Frases curtas e simples podem ser mais fáceis de processar do
                que muitas perguntas ou explicações.
              </p>
            </article>

            <article className="overload-help-item">
              <i className="bi bi-door-open"></i>
              <h3>Permita sair</h3>
              <p>
                Quando for seguro, possibilite que a pessoa se afaste do
                ambiente que está a causar a sobrecarga.
              </p>
            </article>

            <article className="overload-help-item">
              <i className="bi bi-hand-index"></i>
              <h3>Evite tocar sem necessidade</h3>
              <p>
                O contacto físico pode aumentar ainda mais a sobrecarga para
                algumas pessoas.
              </p>
            </article>

            <article className="overload-help-item">
              <i className="bi bi-shield-check"></i>
              <h3>Priorize a segurança</h3>
              <p>
                Afaste objetos perigosos e proteja a pessoa e quem estiver
                próximo sem aumentar desnecessariamente a tensão.
              </p>
            </article>

            <article className="overload-help-item">
              <i className="bi bi-hourglass-split"></i>
              <h3>Dê tempo</h3>
              <p>
                A pessoa pode precisar de tempo para recuperar a capacidade de
                comunicar e processar o que aconteceu.
              </p>
            </article>
          </div>

          <div className="overload-during-warning">
            <i className="bi bi-exclamation-triangle"></i>

            <p>
              Se existir risco imediato de a pessoa se magoar gravemente ou
              magoar outra pessoa, a prioridade é garantir segurança e procurar
              ajuda adequada à situação.
            </p>
          </div>
        </div>
      </section>

      {/* DEPOIS */}
      <section className="overload-recovery">
        <div className="container overload-container">
          <div className="overload-recovery-box">
            <div className="overload-recovery-icon">
              <i className="bi bi-battery-charging"></i>
            </div>

            <div>
              <span className="overload-section-label">
                Depois da sobrecarga
              </span>

              <h2>A recuperação também precisa de tempo</h2>

              <p>
                Uma crise pode deixar a pessoa extremamente cansada. Mesmo
                quando exteriormente já parece tranquila, o organismo pode
                continuar a recuperar.
              </p>

              <div className="overload-recovery-list">
                <span>silêncio e menor estimulação</span>
                <span>descanso ou sono</span>
                <span>atividades familiares e previsíveis</span>
                <span>stimming ou estratégias sensoriais</span>
                <span>menos exigências durante algum tempo</span>
                <span>tempo sozinho, quando desejado</span>
              </div>

              <div className="overload-recovery-note">
                <strong>
                  O momento imediatamente após a crise nem sempre é o melhor
                  para analisar o que aconteceu.
                </strong>

                <p>
                  Essa conversa pode ser mais útil quando a pessoa estiver
                  novamente regulada e disponível para comunicar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IDENTIFICAR GATILHOS */}
      <section className="overload-triggers">
        <div className="container overload-container">
          <div className="overload-section-heading">
            <span className="overload-section-label">Perceber padrões</span>

            <h2>O que aconteceu antes da crise?</h2>

            <p>
              Em vez de olhar apenas para o comportamento durante a crise, pode
              ser útil observar o que aconteceu nas horas ou até nos dias
              anteriores.
            </p>
          </div>

          <div className="overload-observation-grid">
            <article>
              <i className="bi bi-volume-up"></i>
              <span>O ambiente estava muito barulhento?</span>
            </article>

            <article>
              <i className="bi bi-calendar-event"></i>
              <span>Houve alguma mudança inesperada?</span>
            </article>

            <article>
              <i className="bi bi-moon-stars"></i>
              <span>A pessoa estava cansada ou dormiu pouco?</span>
            </article>

            <article>
              <i className="bi bi-people"></i>
              <span>Houve muita interação social?</span>
            </article>

            <article>
              <i className="bi bi-list-task"></i>
              <span>Existiram demasiadas exigências?</span>
            </article>

            <article>
              <i className="bi bi-cup-straw"></i>
              <span>Havia fome, sede ou desconforto físico?</span>
            </article>

            <article>
              <i className="bi bi-chat-square-text"></i>
              <span>A pessoa conseguia comunicar o que precisava?</span>
            </article>

            <article>
              <i className="bi bi-battery-half"></i>
              <span>Já vinha acumulando sobrecarga de outros dias?</span>
            </article>
          </div>
        </div>
      </section>

      {/* PREVENÇÃO */}
      <section className="overload-prevention">
        <div className="container overload-container">
          <div className="overload-section-heading">
            <span className="overload-section-label">Reduzir a sobrecarga</span>

            <h2>Prevenir não significa evitar tudo</h2>

            <p>
              O objetivo não é eliminar todos os desafios da vida, mas criar
              condições que tornem o quotidiano mais sustentável para aquela
              pessoa.
            </p>
          </div>

          <div className="overload-prevention-grid">
            <div className="overload-prevention-item">
              <i className="bi bi-check-circle-fill"></i>
              <span>Antecipar mudanças sempre que possível</span>
            </div>

            <div className="overload-prevention-item">
              <i className="bi bi-check-circle-fill"></i>
              <span>Planejar pausas antes de a pessoa chegar ao limite</span>
            </div>

            <div className="overload-prevention-item">
              <i className="bi bi-check-circle-fill"></i>
              <span>Adaptar ambientes sensorialmente difíceis</span>
            </div>

            <div className="overload-prevention-item">
              <i className="bi bi-check-circle-fill"></i>
              <span>Respeitar formas alternativas de comunicação</span>
            </div>

            <div className="overload-prevention-item">
              <i className="bi bi-check-circle-fill"></i>
              <span>Permitir estratégias de autorregulação e stimming</span>
            </div>

            <div className="overload-prevention-item">
              <i className="bi bi-check-circle-fill"></i>
              <span>Equilibrar períodos exigentes com recuperação</span>
            </div>
          </div>
        </div>
      </section>

      {/* PLANO */}
      <section className="overload-plan">
        <div className="container overload-container">
          <div className="overload-plan-box">
            <div className="overload-plan-icon">
              <i className="bi bi-journal-check"></i>
            </div>

            <div>
              <span className="overload-section-label">
                Um plano individual
              </span>

              <h2>Crie um “plano para a sobrecarga”</h2>

              <p>
                Para crianças, adolescentes ou adultos que têm crises
                recorrentes, pode ser útil deixar registado aquilo que costuma
                ajudar.
              </p>

              <ul>
                <li>Quais são os primeiros sinais de sobrecarga?</li>
                <li>Quais situações costumam ser mais difíceis?</li>
                <li>O que ajuda a pessoa a regular-se?</li>
                <li>O que costuma piorar a crise?</li>
                <li>Prefere silêncio, companhia ou ficar sozinho?</li>
                <li>Existe um local seguro para onde possa ir?</li>
                <li>Como comunica quando já não consegue falar?</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FONTES */}
      <section className="overload-sources">
        <div className="container overload-container">
          <div className="overload-section-heading">
            <span className="overload-section-label">Para saber mais</span>

            <h2>Fontes e recursos</h2>
          </div>

          <article className="overload-source-card">
            <i className="bi bi-building"></i>

            <div>
              <h3>NHS — Supporting an autistic child</h3>

              <p>
                Informação sobre apoio a crianças autistas, incluindo meltdowns,
                ambiente sensorial e mudanças de rotina.
              </p>

              <a
                href="https://www.nhs.uk/conditions/autism/supporting-a-child/"
                target="_blank"
                rel="noreferrer"
              >
                Consultar fonte
              </a>
            </div>
          </article>

          <article className="overload-source-card">
            <i className="bi bi-book"></i>

            <div>
              <h3>National Autistic Society</h3>

              <p>
                Recursos sobre experiências de sobrecarga sensorial, meltdown e
                shutdown em pessoas autistas.
              </p>

              <a
                href="https://www.autism.org.uk/"
                target="_blank"
                rel="noreferrer"
              >
                Consultar fonte
              </a>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

export default OverloadCrises;
