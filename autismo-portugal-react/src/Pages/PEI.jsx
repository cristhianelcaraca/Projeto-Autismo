import "./PEI.css";

function PEI() {
  return (
    <main className="pei-page">
      {/* HERO */}
      <section className="pei-hero">
        <div className="container pei-container">
          <div className="pei-hero-content">
            <span className="pei-label">Educação inclusiva</span>

            <h1>PEI — Programa Educativo Individual</h1>

            <p>
              Entenda de forma simples quando um aluno pode precisar de PEI,
              qual é a diferença entre PEI e RTP e como os pais podem pedir à
              escola que as necessidades do filho sejam avaliadas.
            </p>
          </div>
        </div>
      </section>

      {/* O QUE É */}
      <section className="pei-what">
        <div className="container pei-container">
          <div className="pei-section-heading">
            <span className="pei-section-label">Começando pelo essencial</span>

            <h2>O que é o PEI?</h2>

            <p>
              O PEI, ou Programa Educativo Individual, é um documento utilizado
              quando o aluno necessita de adaptações curriculares
              significativas.
            </p>
          </div>

          <div className="pei-simple-box">
            <div className="pei-simple-icon">
              <i className="bi bi-file-earmark-text"></i>
            </div>

            <div>
              <h3>Em palavras simples</h3>

              <p>
                O PEI é necessário quando o aluno precisa que algumas das
                aprendizagens previstas no currículo sejam significativamente
                alteradas ou substituídas por objetivos mais adequados às suas
                necessidades.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NÃO É AUTOMÁTICO */}
      <section className="pei-important">
        <div className="container pei-container">
          <div className="pei-important-box">
            <div className="pei-important-icon">
              <i className="bi bi-info-lg"></i>
            </div>

            <div>
              <span>Importante</span>

              <h2>Ter autismo não significa automaticamente precisar de PEI</h2>

              <p>
                O PEI não depende do diagnóstico nem do QI da criança. O que
                importa é perceber se ela consegue acompanhar as aprendizagens
                previstas no currículo ou se necessita de alterações
                curriculares significativas.
              </p>

              <p>
                Uma criança autista pode precisar de vários apoios na escola e,
                mesmo assim, não precisar de PEI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COMO SABER */}
      <section className="pei-how-to-know">
        <div className="container pei-container">
          <div className="pei-section-heading">
            <span className="pei-section-label">
              A principal dúvida dos pais
            </span>

            <h2>Como saber se o meu filho precisa de PEI?</h2>

            <p>
              Uma forma simples de pensar é perguntar se a dificuldade está em
              aceder ao currículo ou se é necessário alterar de forma
              significativa aquilo que o aluno vai aprender.
            </p>
          </div>

          <div className="pei-comparison-grid">
            <article className="pei-comparison-card no-pei">
              <div className="pei-comparison-icon">
                <i className="bi bi-check-circle"></i>
              </div>

              <h3>Pode precisar de apoio sem precisar de PEI</h3>

              <ul>
                <li>Precisa de antecipação das mudanças de rotina</li>
                <li>Precisa de pausas em situações de sobrecarga</li>
                <li>Precisa de instruções mais claras ou visuais</li>
                <li>Precisa de adaptações na forma de realizar tarefas</li>
                <li>Precisa de adaptações no processo de avaliação</li>
                <li>Tem dificuldades sensoriais, sociais ou emocionais</li>
              </ul>
            </article>

            <article className="pei-comparison-card yes-pei">
              <div className="pei-comparison-icon">
                <i className="bi bi-file-earmark-check"></i>
              </div>

              <h3>O PEI pode ser necessário quando...</h3>

              <ul>
                <li>
                  As aprendizagens do currículo precisam de ser
                  significativamente alteradas
                </li>

                <li>
                  Algumas aprendizagens previstas precisam de ser substituídas
                  por outras
                </li>

                <li>
                  É necessário definir objetivos curriculares muito
                  individualizados
                </li>

                <li>
                  São propostas adaptações curriculares significativas pela
                  equipa responsável
                </li>
              </ul>
            </article>
          </div>

          <div className="pei-question-box">
            <i className="bi bi-question-circle"></i>

            <div>
              <strong>A pergunta mais útil é:</strong>

              <p>
                “O meu filho precisa de alterar significativamente o currículo
                ou precisa sobretudo de apoios para conseguir participar,
                aprender e estar bem na escola?”
              </p>
            </div>
          </div>
        </div>
      </section>
      <br />

      {/* EMAEI */}
      <section className="pei-emaei">
        <div className="container pei-container">
          <div className="pei-section-heading">
            <span className="pei-section-label">
              Quem analisa as necessidades?
            </span>

            <h2>O que é a EMAEI?</h2>

            <p>
              A EMAEI é a Equipa Multidisciplinar de Apoio à Educação Inclusiva.
              Existe nas escolas e agrupamentos para ajudar a identificar as
              necessidades dos alunos e a decidir que medidas de suporte podem
              ser necessárias.
            </p>
          </div>

          <div className="pei-emaei-box">
            <div className="pei-emaei-icon">
              <i className="bi bi-people"></i>
            </div>

            <div className="pei-emaei-content">
              <h3>Em palavras simples</h3>

              <p>
                Quando existem dificuldades que estão a afetar a aprendizagem,
                participação ou inclusão de um aluno, a EMAEI pode analisar a
                situação e ajudar a definir quais os apoios mais adequados.
              </p>

              <p>
                A equipa pode reunir informação da escola, dos pais e de outros
                profissionais que acompanham a criança ou jovem.
              </p>
            </div>
          </div>

          <div className="pei-emaei-grid">
            <article className="pei-emaei-card">
              <div className="pei-emaei-card-icon green">
                <i className="bi bi-search"></i>
              </div>

              <h3>Analisa as necessidades</h3>

              <p>
                Procura perceber quais são as dificuldades, barreiras e
                potencialidades do aluno.
              </p>
            </article>

            <article className="pei-emaei-card">
              <div className="pei-emaei-card-icon blue">
                <i className="bi bi-list-check"></i>
              </div>

              <h3>Propõe medidas</h3>

              <p>
                Ajuda a identificar quais medidas de suporte à aprendizagem e à
                inclusão podem ser necessárias.
              </p>
            </article>

            <article className="pei-emaei-card">
              <div className="pei-emaei-card-icon purple">
                <i className="bi bi-arrow-repeat"></i>
              </div>

              <h3>Acompanha os resultados</h3>

              <p>
                As medidas devem ser acompanhadas para perceber se estão
                realmente a ajudar o aluno.
              </p>
            </article>
          </div>

          <div className="pei-emaei-parent-note">
            <i className="bi bi-person-heart"></i>

            <div>
              <h3>E os pais?</h3>

              <p>
                Os pais não ficam de fora deste processo. Devem ser ouvidos e
                podem fornecer informação importante sobre as dificuldades,
                necessidades e características do filho.
              </p>

              <p>
                Se tiver dúvidas sobre quem acompanha o caso do seu filho, pode
                perguntar à escola ou ao diretor de turma como contactar a EMAEI
                do agrupamento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RTP */}
      <section className="pei-rtp">
        <div className="container pei-container">
          <div className="pei-section-heading">
            <span className="pei-section-label">Antes do PEI</span>

            <h2>Primeiro, é importante entender o RTP</h2>

            <p>
              O RTP é o Relatório Técnico-Pedagógico. É o documento utilizado
              para fundamentar medidas seletivas e/ou adicionais de suporte à
              aprendizagem e à inclusão.
            </p>
          </div>

          <div className="pei-rtp-box">
            <div className="pei-rtp-icon">
              <i className="bi bi-journal-check"></i>
            </div>

            <div>
              <h3>O RTP explica quais são as necessidades e os apoios</h3>

              <p>
                Nele devem estar identificadas as dificuldades e os fatores que
                influenciam a aprendizagem, as medidas que serão utilizadas,
                como serão aplicadas, quem será responsável e como será avaliada
                a sua eficácia.
              </p>

              <p>
                Os pais devem ser ouvidos durante a elaboração deste relatório.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RTP OU PEI */}
      <section className="pei-flow">
        <div className="container pei-container">
          <div className="pei-section-heading">
            <span className="pei-section-label">RTP ou PEI?</span>

            <h2>Entenda o caminho de forma simples</h2>
          </div>

          <div className="pei-flow-chart">
            <div className="pei-flow-item">
              <span>1</span>

              <div>
                <h3>Existem dificuldades ou barreiras na escola</h3>

                <p>
                  Podem estar relacionadas com aprendizagem, comunicação,
                  comportamento, ansiedade, questões sensoriais, organização ou
                  participação.
                </p>
              </div>
            </div>

            <div className="pei-flow-arrow">
              <i className="bi bi-arrow-down"></i>
            </div>

            <div className="pei-flow-item">
              <span>2</span>

              <div>
                <h3>A escola e a EMAEI analisam as necessidades</h3>

                <p>
                  A equipa avalia quais medidas são mais adequadas para aquele
                  aluno.
                </p>
              </div>
            </div>

            <div className="pei-flow-arrow">
              <i className="bi bi-arrow-down"></i>
            </div>

            <div className="pei-flow-options">
              <div className="pei-flow-option green">
                <strong>Apenas medidas universais</strong>

                <p>Não é necessário RTP.</p>
              </div>

              <div className="pei-flow-option blue">
                <strong>Medidas seletivas e/ou adicionais</strong>

                <p>É elaborado um RTP.</p>
              </div>
            </div>

            <div className="pei-flow-arrow">
              <i className="bi bi-arrow-down"></i>
            </div>

            <div className="pei-flow-question">
              <strong>
                São necessárias adaptações curriculares significativas?
              </strong>

              <div className="pei-flow-answer">
                <span className="answer-no">Não → RTP, sem PEI</span>

                <span className="answer-yes">Sim → RTP + PEI</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* O QUE CONSTA NO PEI */}
      <section className="pei-contents">
        <div className="container pei-container">
          <div className="pei-section-heading">
            <span className="pei-section-label">O documento</span>

            <h2>O que deve constar no PEI?</h2>

            <p>
              O PEI deve explicar de forma concreta como serão feitas as
              adaptações curriculares significativas daquele aluno.
            </p>
          </div>

          <ul className="pei-check-list">
            <li>Competências e aprendizagens a desenvolver</li>
            <li>Adaptações curriculares significativas necessárias</li>
            <li>Estratégias de ensino</li>
            <li>Adaptações no processo de avaliação</li>
            <li>Outras medidas de suporte à inclusão, quando necessárias</li>
          </ul>
        </div>
      </section>

      {/* COMO PEDIR */}
      <section className="pei-request">
        <div className="container pei-container">
          <div className="pei-section-heading">
            <span className="pei-section-label">Para os pais</span>

            <h2>Como pedir à escola que avalie a necessidade de apoio?</h2>

            <p>
              Os pais não precisam de saber antecipadamente qual medida o filho
              deve receber. Podem pedir à escola que avalie as necessidades da
              criança ou jovem.
            </p>
          </div>

          <div className="pei-request-highlight">
            <i className="bi bi-envelope-paper"></i>

            <div>
              <h3>O pedido pode partir dos próprios pais</h3>

              <p>
                A legislação permite que os pais ou encarregados de educação
                iniciem o processo de identificação da necessidade de medidas de
                suporte.
              </p>
            </div>
          </div>

          <div className="pei-request-steps">
            <div className="pei-request-step">
              <span>1</span>

              <div>
                <h3>Escreva para a escola</h3>

                <p>
                  Dirija o pedido ao diretor do agrupamento ou da escola e
                  explique que pretende que sejam avaliadas as necessidades de
                  suporte à aprendizagem e à inclusão do seu filho.
                </p>
              </div>
            </div>

            <div className="pei-request-step">
              <span>2</span>

              <div>
                <h3>Explique o que está a acontecer</h3>

                <p>
                  Descreva situações concretas. Por exemplo: dificuldade em
                  acompanhar determinadas aprendizagens, crises frequentes,
                  sobrecarga sensorial, dificuldade de comunicação, problemas de
                  participação ou outras barreiras.
                </p>
              </div>
            </div>

            <div className="pei-request-step">
              <span>3</span>

              <div>
                <h3>Junte informação relevante</h3>

                <p>
                  Pode anexar relatórios médicos, psicológicos, terapêuticos ou
                  outros documentos que ajudem a compreender as necessidades da
                  criança.
                </p>
              </div>
            </div>

            <div className="pei-request-step">
              <span>4</span>

              <div>
                <h3>A escola encaminha o processo</h3>

                <p>
                  O diretor deve encaminhar a identificação para a EMAEI, que
                  analisará quais medidas são necessárias.
                </p>
              </div>
            </div>

            <div className="pei-request-step">
              <span>5</span>

              <div>
                <h3>Participe na decisão</h3>

                <p>
                  Os pais devem ser ouvidos durante a elaboração do RTP e podem
                  colocar dúvidas sobre as medidas propostas.
                </p>
              </div>
            </div>
          </div>

          <div className="pei-request-example">
            <span>Exemplo simples de pedido</span>

            <p>
              “Venho solicitar a avaliação das necessidades de suporte à
              aprendizagem e à inclusão do meu filho, uma vez que tem
              apresentado dificuldades que estão a afetar a sua participação e o
              seu percurso escolar. Junto a documentação que considero relevante
              e solicito que a situação seja analisada pela equipa responsável.”
            </p>
          </div>
        </div>
      </section>

      {/* E SE NÃO CONCORDAR */}
      <section className="pei-disagreement">
        <div className="container pei-container">
          <div className="pei-disagreement-box">
            <div className="pei-disagreement-icon">
              <i className="bi bi-chat-square-text"></i>
            </div>

            <div>
              <span className="pei-section-label">Se tiver dúvidas</span>

              <h2>E se eu não concordar com o RTP?</h2>

              <p>
                O RTP é apresentado aos pais para aprovação. Se não concordar
                com o conteúdo ou com as medidas propostas, pode fazer constar
                em anexo ao relatório os motivos da sua discordância.
              </p>

              <p>
                Antes de assinar, leia o documento com atenção, peça
                esclarecimentos e confirme que compreende as medidas que estão a
                ser propostas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NOSSA EXPERIÊNCIA */}
      <section className="pei-experience">
        <div className="container pei-container">
          <div className="pei-experience-box">
            <div className="pei-experience-image">
              <img
                src="/images/support.png"
                alt="Ilustração sobre apoio e inclusão escolar"
              />
            </div>

            <div className="pei-experience-content">
              <span className="pei-section-label">A nossa experiência</span>

              <h2>
                Precisar de apoio não significa necessariamente precisar de PEI
              </h2>

              <p>
                Quando começámos a lidar com estas questões na escola, também
                tivemos dúvidas sobre o PEI e sobre que tipo de apoio poderia
                existir.
              </p>

              <p>
                No caso do nosso filho mais velho, apesar do diagnóstico de
                autismo, ele sempre conseguiu acompanhar as aprendizagens
                escolares e tem boas capacidades académicas. Por isso, não foi
                necessário alterar significativamente o currículo que ele
                seguia.
              </p>

              <p>
                Ao mesmo tempo, isso não significava que ele não tivesse
                necessidades importantes no ambiente escolar. As maiores
                dificuldades estavam relacionadas com ansiedade, crises de
                pânico, frequência escolar e algumas situações que lhe causavam
                um nível muito elevado de stress.
              </p>

              <p>
                Para nós, perceber esta diferença foi importante: uma criança
                pode precisar de apoio e de adaptações para conseguir estar bem
                e participar na escola, sem necessariamente precisar de um PEI.
              </p>

              <div className="pei-experience-note">
                Esta é a nossa experiência pessoal. Cada criança tem
                necessidades diferentes e a decisão sobre as medidas adequadas
                deve ser feita individualmente.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CHECKLIST */}
      <section className="pei-parent-checklist">
        <div className="container pei-container">
          <div className="pei-section-heading">
            <span className="pei-section-label">Antes de concordar</span>

            <h2>Checklist para os pais</h2>
          </div>

          <ul className="pei-parent-check-list">
            <li>Compreendi quais necessidades foram identificadas?</li>
            <li>Sei quais medidas serão utilizadas?</li>
            <li>Sei quem será responsável por cada medida?</li>
            <li>
              Está claro como será avaliado se as medidas estão a funcionar?
            </li>
            <li>
              Pude colocar as minhas dúvidas e explicar a situação do meu filho?
            </li>
            <li>Recebi ou pedi uma cópia dos documentos?</li>
          </ul>
        </div>
      </section>

      {/* FONTES */}
      <section className="pei-sources">
        <div className="container pei-container">
          <div className="pei-section-heading">
            <span className="pei-section-label">Fontes oficiais</span>

            <h2>Onde consultar a informação</h2>
          </div>

          <div className="pei-source-card">
            <i className="bi bi-shield-check"></i>

            <div>
              <h3>Decreto-Lei n.º 54/2018</h3>

              <p>Regime jurídico da educação inclusiva em Portugal.</p>

              <a
                href="https://diariodarepublica.pt/dr/detalhe/decreto-lei/54-2018-115652961"
                target="_blank"
                rel="noopener noreferrer"
              >
                Consultar no Diário da República
              </a>
            </div>
          </div>

          <div className="pei-source-card">
            <i className="bi bi-journal-text"></i>

            <div>
              <h3>Direção-Geral da Educação</h3>

              <p>
                Perguntas frequentes sobre o Decreto-Lei n.º 54/2018 e educação
                inclusiva.
              </p>

              <a
                href="https://www.dge.mec.pt/node/461"
                target="_blank"
                rel="noopener noreferrer"
              >
                Consultar a DGE
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default PEI;
