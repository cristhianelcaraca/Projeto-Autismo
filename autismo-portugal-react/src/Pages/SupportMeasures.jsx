import "./SupportMeasures.css";

function SupportMeasures() {
  return (
    <section className="support-measures">
      <div className="container support-measures-container">
        <div className="support-measures-heading">
          <span className="support-measures-label">
            Medidas de suporte à aprendizagem
          </span>

          <h2>Três níveis de medidas</h2>

          <p>
            O Decreto-Lei n.º 54/2018 prevê diferentes níveis de medidas de
            suporte à aprendizagem e à inclusão. A resposta deve ser ajustada às
            necessidades de cada aluno e pode ser revista ao longo do percurso
            escolar.
          </p>
        </div>

        <div className="support-measures-intro">
          <div className="support-measures-intro-icon">
            <i className="bi bi-lightbulb"></i>
          </div>

          <p>
            As medidas não dependem simplesmente de um diagnóstico. A escola
            deve considerar as barreiras à aprendizagem e à participação, as
            potencialidades do aluno e a eficácia das respostas que já foram
            implementadas.
          </p>
        </div>

        <div className="support-measures-grid">
          {/* MEDIDAS UNIVERSAIS */}
          <article className="support-measure-card universal">
            <div className="support-measure-card-header">
              <div className="support-measure-icon">
                <i className="bi bi-people"></i>
              </div>

              <div>
                <span className="support-measure-level">Nível 1</span>
                <h3>Medidas universais</h3>
              </div>
            </div>

            <p className="support-measure-description">
              São respostas educativas disponíveis para todos os alunos e
              destinam-se a promover a participação e a melhoria das
              aprendizagens.
            </p>

            <ul className="support-measure-list">
              <li>
                <span className="measure-check">
                  <i className="bi bi-check-lg"></i>
                </span>

                <span>Diferenciação pedagógica</span>
              </li>

              <li>
                <span className="measure-check">
                  <i className="bi bi-check-lg"></i>
                </span>

                <span>Acomodações curriculares</span>
              </li>

              <li>
                <span className="measure-check">
                  <i className="bi bi-check-lg"></i>
                </span>

                <span>Enriquecimento curricular</span>
              </li>

              <li>
                <span className="measure-check">
                  <i className="bi bi-check-lg"></i>
                </span>

                <span>Promoção do comportamento pró-social</span>
              </li>

              <li>
                <span className="measure-check">
                  <i className="bi bi-check-lg"></i>
                </span>

                <span>
                  Intervenção com foco académico ou comportamental em pequenos
                  grupos
                </span>
              </li>
            </ul>

            <div className="support-measure-example">
              <strong>Na prática</strong>

              <p>
                Podem incluir mudanças na forma de ensinar, organizar a sala,
                apresentar instruções ou permitir diferentes formas de realizar
                determinadas tarefas.
              </p>
            </div>
          </article>

          {/* MEDIDAS SELETIVAS */}
          <article className="support-measure-card selective">
            <div className="support-measure-card-header">
              <div className="support-measure-icon">
                <i className="bi bi-person-check"></i>
              </div>

              <div>
                <span className="support-measure-level">Nível 2</span>
                <h3>Medidas seletivas</h3>
              </div>
            </div>

            <p className="support-measure-description">
              São utilizadas quando as medidas universais não são suficientes
              para responder às necessidades de suporte à aprendizagem e à
              inclusão do aluno.
            </p>

            <ul className="support-measure-list">
              <li>
                <span className="measure-check">
                  <i className="bi bi-check-lg"></i>
                </span>

                <span>Percursos curriculares diferenciados</span>
              </li>

              <li>
                <span className="measure-check">
                  <i className="bi bi-check-lg"></i>
                </span>

                <span>Adaptações curriculares não significativas</span>
              </li>

              <li>
                <span className="measure-check">
                  <i className="bi bi-check-lg"></i>
                </span>

                <span>Apoio psicopedagógico</span>
              </li>

              <li>
                <span className="measure-check">
                  <i className="bi bi-check-lg"></i>
                </span>

                <span>Antecipação e reforço das aprendizagens</span>
              </li>

              <li>
                <span className="measure-check">
                  <i className="bi bi-check-lg"></i>
                </span>

                <span>Apoio tutorial</span>
              </li>
            </ul>

            <div className="support-measure-example">
              <strong>Quando podem ser necessárias?</strong>

              <p>
                Quando existem dificuldades que persistem apesar das respostas
                utilizadas no contexto das medidas universais.
              </p>
            </div>
          </article>

          {/* MEDIDAS ADICIONAIS */}
          <article className="support-measure-card additional">
            <div className="support-measure-card-header">
              <div className="support-measure-icon">
                <i className="bi bi-stars"></i>
              </div>

              <div>
                <span className="support-measure-level">Nível 3</span>
                <h3>Medidas adicionais</h3>
              </div>
            </div>

            <p className="support-measure-description">
              Procuram responder a dificuldades acentuadas e persistentes ao
              nível da comunicação, interação, cognição ou aprendizagem que
              exigem recursos especializados de apoio.
            </p>

            <ul className="support-measure-list">
              <li>
                <span className="measure-check">
                  <i className="bi bi-check-lg"></i>
                </span>

                <span>Frequência do ano de escolaridade por disciplinas</span>
              </li>

              <li>
                <span className="measure-check">
                  <i className="bi bi-check-lg"></i>
                </span>

                <span>Adaptações curriculares significativas</span>
              </li>

              <li>
                <span className="measure-check">
                  <i className="bi bi-check-lg"></i>
                </span>

                <span>Plano individual de transição</span>
              </li>

              <li>
                <span className="measure-check">
                  <i className="bi bi-check-lg"></i>
                </span>

                <span>
                  Desenvolvimento de metodologias de ensino estruturado
                </span>
              </li>

              <li>
                <span className="measure-check">
                  <i className="bi bi-check-lg"></i>
                </span>

                <span>
                  Desenvolvimento de competências de autonomia pessoal e social
                </span>
              </li>
            </ul>

            <div className="support-measure-example">
              <strong>Uma resposta mais individualizada</strong>

              <p>
                Estas medidas destinam-se a situações em que são necessárias
                respostas educativas mais intensivas e especializadas.
              </p>
            </div>
          </article>
        </div>

        <div className="support-measures-note">
          <div className="support-measures-note-icon">
            <i className="bi bi-arrow-repeat"></i>
          </div>

          <div>
            <h3>As medidas podem ser revistas</h3>

            <p>
              As necessidades de uma criança ou jovem podem mudar. A eficácia
              das medidas deve ser acompanhada e as respostas podem ser
              ajustadas sempre que necessário.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SupportMeasures;
