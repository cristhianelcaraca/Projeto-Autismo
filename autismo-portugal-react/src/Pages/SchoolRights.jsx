import "./SchoolRights.css";

function SchoolRights() {
  return (
    <main className="school-rights-page">
      {/* HERO */}
      <section className="school-rights-hero">
        <div className="container school-rights-container">
          <div className="school-rights-hero-content">
            <span className="school-rights-label">Educação e inclusão</span>

            <h1>Direitos na escola</h1>

            <p>
              Compreender os direitos e os apoios existentes pode ajudar as
              famílias a participar de forma mais ativa no percurso escolar das
              crianças e jovens autistas.
            </p>
          </div>
        </div>
      </section>

      {/* EDUCAÇÃO INCLUSIVA */}
      <section className="inclusive-education">
        <div className="container school-rights-container">
          <div className="school-wrap-section">
            <div className="school-wrap-image inclusion-image">
              <img
                src="/images/inclusion.png"
                alt="Ilustração relacionada com educação inclusiva"
              />
            </div>

            <span className="school-section-label">Educação inclusiva</span>

            <h2>Educação inclusiva em Portugal</h2>

            <div className="law-highlight">
              <i className="bi bi-book"></i>

              <p>
                Em Portugal, a educação inclusiva é regulada pelo Decreto-Lei
                n.º 54/2018. A escola deve identificar as barreiras que
                dificultam a aprendizagem e a participação de cada aluno e
                procurar respostas adequadas às suas necessidades.
              </p>
            </div>

            <p>
              O objetivo não é apenas garantir o acesso à escola, mas criar
              condições para que cada aluno possa aprender, participar e
              desenvolver o seu potencial.
            </p>

            <p>
              As necessidades podem estar relacionadas com aprendizagem,
              comunicação, interação social, autonomia, organização,
              processamento sensorial, saúde emocional ou outras áreas que
              influenciem a participação na vida escolar.
            </p>
          </div>
        </div>
      </section>

      {/* DIAGNÓSTICO */}
      <section className="diagnosis-school-support">
        <div className="container school-rights-container">
          <div className="school-section-heading">
            <span className="school-section-label">
              Diagnóstico e necessidades
            </span>

            <h2>
              O diagnóstico de autismo dá automaticamente direito a apoio?
            </h2>

            <p>
              Não necessariamente. O diagnóstico pode ser importante para
              compreender melhor a criança ou jovem, mas as medidas educativas
              devem ser definidas de acordo com as necessidades concretas de
              cada aluno.
            </p>
          </div>

          <div className="diagnosis-support-box">
            <div className="diagnosis-support-icon">
              <i className="bi bi-lightbulb"></i>
            </div>

            <div>
              <h3>O foco está nas necessidades do aluno</h3>

              <p>
                A legislação portuguesa afasta a ideia de que seja necessário
                categorizar um aluno para intervir. As medidas devem ser
                escolhidas em função das barreiras encontradas, das
                potencialidades do aluno e da eficácia dos apoios já
                implementados.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EXEMPLOS PRÁTICOS */}
      <section className="practical-support">
        <div className="container school-rights-container">
          <div className="school-section-heading">
            <span className="school-section-label">Na prática</span>

            <h2>Exemplos práticos para uma criança autista</h2>

            <p>
              As adaptações dependem das necessidades individuais. Alguns
              exemplos que podem ser considerados pela escola incluem:
            </p>
          </div>

          <ul className="practical-check-list">
            <li>Antecipar alterações na rotina ou no horário</li>
            <li>Utilizar instruções claras e suportes visuais</li>
            <li>Adaptar materiais ou formas de apresentação dos conteúdos</li>
            <li>Permitir diferentes formas de demonstrar aprendizagem</li>
            <li>Realizar adaptações nos instrumentos de avaliação</li>
            <li>Organizar o espaço para reduzir determinadas barreiras</li>
            <li>Considerar necessidades sensoriais</li>
            <li>Disponibilizar apoio à comunicação</li>
            <li>Promover pausas em situações de sobrecarga</li>
            <li>Adaptar atividades quando existirem dificuldades relevantes</li>
          </ul>
        </div>
      </section>

      {/* PAPEL DOS PAIS */}
      <section className="parents-role">
        <div className="container school-rights-container">
          <div className="parents-role-box">
            <div className="parents-role-image">
              <img
                src="/images/parents.png"
                alt="Ilustração relacionada com a participação dos pais"
              />
            </div>

            <div className="parents-role-content">
              <span className="school-section-label">
                Participação da família
              </span>

              <h2>O papel dos pais</h2>

              <p>
                Os pais ou encarregados de educação têm direito a participar
                ativamente no processo educativo e a receber informação clara
                relativamente às medidas de suporte aplicadas ao seu filho.
              </p>

              <ul className="parents-rights-list">
                <li>Participar nas reuniões da equipa multidisciplinar</li>
                <li>Consultar o processo individual do aluno</li>
                <li>
                  Participar na elaboração e avaliação do programa educativo
                  individual, quando exista
                </li>
                <li>Solicitar a revisão do programa educativo individual</li>
                <li>
                  Receber informação adequada e clara sobre o percurso escolar
                  do aluno
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* EMAEI */}
      <section className="emaei-section">
        <div className="container school-rights-container">
          <div className="school-section-heading">
            <span className="school-section-label">Apoio dentro da escola</span>

            <h2>O que é a EMAEI?</h2>

            <p>
              A Equipa Multidisciplinar de Apoio à Educação Inclusiva ajuda a
              identificar, acompanhar e monitorizar as medidas de suporte à
              aprendizagem e à inclusão.
            </p>
          </div>

          <div className="emaei-box">
            <div className="emaei-icon">
              <i className="bi bi-diagram-3"></i>
            </div>

            <div>
              <h3>Uma resposta construída em conjunto</h3>

              <p>
                A identificação das medidas pode envolver professores, técnicos,
                profissionais especializados, família e outros intervenientes
                que acompanham diretamente o aluno.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COMO PEDIR APOIO */}
      <section className="request-support">
        <div className="container school-rights-container">
          <div className="school-section-heading">
            <span className="school-section-label">Passo a passo</span>

            <h2>Como pedir apoio à escola?</h2>
          </div>

          <div className="request-support-steps">
            <div className="request-step">
              <span>1</span>
              <div>
                <h3>Falar com a escola</h3>
                <p>
                  Converse com o educador, professor titular, diretor de turma
                  ou outro profissional que acompanhe o aluno.
                </p>
              </div>
            </div>

            <div className="request-step">
              <span>2</span>
              <div>
                <h3>Explicar concretamente as dificuldades</h3>
                <p>
                  Descreva situações reais relacionadas com ansiedade,
                  comunicação, aprendizagem, autonomia, sobrecarga ou outras
                  dificuldades.
                </p>
              </div>
            </div>

            <div className="request-step">
              <span>3</span>
              <div>
                <h3>Apresentar informação relevante</h3>
                <p>
                  Relatórios clínicos, psicológicos ou terapêuticos podem ajudar
                  a escola a compreender as necessidades do aluno.
                </p>
              </div>
            </div>

            <div className="request-step">
              <span>4</span>
              <div>
                <h3>Avaliar as medidas necessárias</h3>
                <p>
                  A escola poderá analisar quais as respostas educativas mais
                  adequadas à situação.
                </p>
              </div>
            </div>

            <div className="request-step">
              <span>5</span>
              <div>
                <h3>Acompanhar e rever</h3>
                <p>
                  As medidas devem ser monitorizadas para perceber se estão
                  efetivamente a responder às necessidades do aluno.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AUTISMO É MAIS DO QUE APRENDIZAGEM */}
      <section className="school-barriers">
        <div className="container school-rights-container">
          <div className="school-section-heading">
            <span className="school-section-label">Para além das notas</span>

            <h2>Autismo na escola não é apenas aprendizagem</h2>

            <p>
              Um aluno pode ter boas capacidades académicas e, ainda assim,
              enfrentar barreiras importantes no ambiente escolar.
            </p>
          </div>

          <div className="school-barriers-grid">
            <div className="school-barrier-item">
              <i className="bi bi-volume-up"></i>
              <span>Sensoriais</span>
            </div>

            <div className="school-barrier-item">
              <i className="bi bi-people"></i>
              <span>Sociais</span>
            </div>

            <div className="school-barrier-item">
              <i className="bi bi-heart-pulse"></i>
              <span>Emocionais</span>
            </div>

            <div className="school-barrier-item">
              <i className="bi bi-chat-dots"></i>
              <span>Comunicacionais</span>
            </div>

            <div className="school-barrier-item">
              <i className="bi bi-calendar-week"></i>
              <span>Organizacionais</span>
            </div>

            <div className="school-barrier-item">
              <i className="bi bi-person-arms-up"></i>
              <span>Autonomia</span>
            </div>
          </div>
        </div>
      </section>

      {/* NOSSA EXPERIÊNCIA */}
      <section className="school-experience">
        <div className="container school-rights-container">
          <div className="school-experience-box">
            <div className="school-experience-image">
              <img
                src="/images/Davi.png"
                alt="Fotografia relacionada com a nossa experiência familiar"
              />
            </div>

            <div className="school-experience-content">
              <span className="school-section-label">A nossa experiência</span>

              <h2>Quando a ansiedade tornou a escola muito difícil</h2>

              <p>
                O nosso filho mais velho sofre de ansiedade generalizada, que em
                alguns períodos se manifesta de forma muito intensa, incluindo
                crises de pânico no momento de ir para a escola.
              </p>

              <p>
                Foi quando estas dificuldades se agravaram que chegámos ao
                diagnóstico. Nessa altura, a neuropediatra que o acompanha, a
                Dra. Sofia Quintas, elaborou um relatório clínico detalhado, no
                qual explicou as dificuldades que ele apresentava, as crises de
                ansiedade e o impacto que estas tinham na sua vida escolar.
              </p>

              <p>
                O relatório incluía também recomendações e adaptações
                consideradas necessárias. No nosso caso, estas incluíram a
                possibilidade de justificar faltas nos dias em que as crises de
                pânico o impediam de ir à escola e a dispensa temporária de
                algumas atividades que lhe provocavam níveis elevados de
                ansiedade, como aconteceu com Educação Física.
              </p>

              <p>
                Grande parte do processo foi resolvida através de diálogo e
                colaboração entre nós e o diretor de turma. Houve bastante
                comunicação sobre aquilo que estava a acontecer e sobre as
                necessidades do nosso filho. A própria neuropediatra chegou
                também a contactar o diretor de turma por email.
              </p>

              <p>
                A nossa experiência mostrou-nos como pode ser importante existir
                comunicação entre família, escola e profissionais de saúde. Mais
                do que apresentar um diagnóstico, foi fundamental explicar
                concretamente o que estava a acontecer e que adaptações poderiam
                ajudá-lo.
              </p>

              <div className="experience-disclaimer">
                Esta é a nossa experiência pessoal. As necessidades e as medidas
                adequadas podem ser diferentes para cada criança ou jovem e
                devem ser analisadas individualmente.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FONTES */}
      <section className="school-sources">
        <div className="container school-rights-container">
          <div className="school-section-heading">
            <span className="school-section-label">Informação oficial</span>

            <h2>Fontes e informação adicional</h2>
          </div>

          <div className="school-source-card">
            <i className="bi bi-shield-check"></i>

            <div>
              <h3>Decreto-Lei n.º 54/2018, de 6 de julho</h3>

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

          <div className="school-source-card">
            <i className="bi bi-journal-text"></i>

            <div>
              <h3>Santander — Direitos de pais com filhos autistas</h3>

              <p>
                Informação complementar sobre escola, direitos e apoios em
                Portugal.
              </p>

              <a
                href="https://www.santander.pt/salto/direitos-pais-com-filhos-autismo-portugal"
                target="_blank"
                rel="noopener noreferrer"
              >
                Consultar artigo
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default SchoolRights;
