import "./AMIM.css";

function AMIM() {
  return (
    <main className="amim-page">
      {/* HERO */}
      <section className="amim-hero">
        <div className="container amim-container">
          <div className="amim-hero-content">
            <div className="amim-hero-text">
              <span className="amim-label">Direitos e apoios</span>

              <h1>AMIM — Atestado Médico de Incapacidade Multiuso</h1>

              <p>
                O AMIM é um documento que certifica o grau de incapacidade
                atribuído a uma pessoa. Essa percentagem pode ser necessária
                para aceder a determinados direitos, benefícios fiscais,
                prestações sociais e outros apoios.
              </p>
            </div>

            <div className="amim-hero-image">
              <img
                src="/images/doctor.png"
                alt="Ilustração relacionada com avaliação médica e AMIM"
              />
            </div>
          </div>
        </div>
      </section>

      {/* O QUE É */}
      <section className="amim-what">
        <div className="container amim-container">
          <div className="amim-section-heading">
            <span className="amim-section-label">Começar pelo essencial</span>

            <h2>O que é o AMIM?</h2>

            <p>
              AMIM significa Atestado Médico de Incapacidade Multiuso. O
              documento indica, através de uma percentagem, o grau de
              incapacidade reconhecido à pessoa.
            </p>
          </div>

          <div className="amim-difference-grid">
            <article className="amim-difference-card diagnosis">
              <div className="amim-difference-icon">
                <i className="bi bi-clipboard2-pulse"></i>
              </div>

              <h3>Diagnóstico</h3>

              <p>
                Identifica uma condição clínica, como a Perturbação do Espetro
                do Autismo.
              </p>
            </article>

            <article className="amim-difference-card certificate">
              <div className="amim-difference-icon">
                <i className="bi bi-file-earmark-medical"></i>
              </div>

              <h3>AMIM</h3>

              <p>
                Certifica um grau de incapacidade através de uma percentagem, de
                acordo com a avaliação realizada.
              </p>
            </article>
          </div>

          <div className="amim-important">
            <i className="bi bi-info-circle"></i>

            <div>
              <h3>O diagnóstico e o AMIM não são a mesma coisa</h3>

              <p>
                Ter um diagnóstico de autismo não significa automaticamente
                receber uma determinada percentagem de incapacidade. A avaliação
                é individual.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 60% */}
      <section className="amim-sixty">
        <div className="container amim-container">
          <div className="amim-section-heading">
            <span className="amim-section-label">Uma dúvida frequente</span>

            <h2>Por que se fala tanto nos 60%?</h2>

            <p>
              A percentagem de 60% aparece frequentemente porque vários direitos
              e apoios utilizam esse valor como um dos critérios de acesso.
            </p>
          </div>

          <div className="amim-sixty-box">
            <div className="amim-percentage">60%</div>

            <div className="amim-sixty-content">
              <p>
                Por exemplo, uma incapacidade igual ou superior a 60% é
                relevante para o direito ao atendimento prioritário e é também,
                em regra, o grau mínimo exigido para a Prestação Social para a
                Inclusão.
              </p>

              <strong>
                Mas ter um AMIM com 60% ou mais não significa que todos os
                apoios sejam atribuídos automaticamente.
              </strong>

              <p>
                Cada benefício pode ter outros requisitos e deve ser pedido
                junto do serviço responsável.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COMO PEDIR */}
      <section className="amim-request">
        <div className="container amim-container">
          <div className="amim-section-heading">
            <span className="amim-section-label">Passo a passo</span>

            <h2>Como pedir o AMIM?</h2>

            <p>
              O percurso pode variar consoante a situação e a forma como o
              processo é encaminhado pelos serviços de saúde. Por isso, vale a
              pena confirmar o procedimento atual junto da sua Unidade Local de
              Saúde.
            </p>
          </div>

          <div className="amim-steps">
            <article className="amim-step">
              <span>1</span>

              <div>
                <h3>Reunir a documentação clínica</h3>

                <p>
                  Reúna os relatórios, avaliações e outros documentos clínicos
                  relevantes para explicar o diagnóstico e a situação da pessoa.
                </p>
              </div>
            </article>

            <article className="amim-step">
              <span>2</span>

              <div>
                <h3>Contactar os serviços de saúde</h3>

                <p>
                  Informe-se junto do centro de saúde ou da Unidade Local de
                  Saúde sobre a forma de apresentar o pedido.
                </p>
              </div>
            </article>

            <article className="amim-step">
              <span>3</span>

              <div>
                <h3>Entregar a documentação solicitada</h3>

                <p>
                  Os serviços podem pedir relatórios médicos, avaliações
                  clínicas ou outros documentos considerados relevantes.
                </p>
              </div>
            </article>

            <article className="amim-step">
              <span>4</span>

              <div>
                <h3>Aguardar a avaliação do processo</h3>

                <p>
                  Dependendo da situação, o processo pode envolver avaliação por
                  Junta Médica de Avaliação de Incapacidade.
                </p>
              </div>
            </article>
          </div>

          <div className="amim-process-note">
            <i className="bi bi-exclamation-circle"></i>

            <p>
              Os procedimentos administrativos podem mudar. Confirme sempre
              junto dos serviços de saúde qual o procedimento aplicável no
              momento em que fizer o pedido.
            </p>
          </div>
        </div>
      </section>

      {/* DOCUMENTOS */}
      <section className="amim-documents">
        <div className="container amim-container">
          <div className="amim-section-heading">
            <span className="amim-section-label">Preparar o pedido</span>

            <h2>Que documentação pode ser importante?</h2>

            <p>
              A documentação necessária depende de cada situação, mas alguns
              documentos podem ajudar a caracterizar melhor a condição e as
              necessidades da pessoa.
            </p>
          </div>

          <ul className="amim-check-list">
            <li>Relatório com o diagnóstico</li>
            <li>Relatórios médicos relevantes</li>
            <li>Avaliações psicológicas ou neuropsicológicas</li>
            <li>Relatórios de outras especialidades</li>
            <li>Exames relevantes, quando existirem</li>
            <li>
              Informação clínica sobre dificuldades funcionais e necessidades
            </li>
          </ul>

          <p className="amim-documents-note">
            Nem todos estes documentos são necessariamente obrigatórios. O
            serviço responsável pode indicar quais são necessários para o seu
            caso.
          </p>
        </div>
      </section>

      {/* CRIANÇAS AUTISTAS */}
      <section className="amim-autism">
        <div className="container amim-container">
          <div className="amim-autism-box">
            <div className="amim-autism-icon">
              <i className="bi bi-person-heart"></i>
            </div>

            <div>
              <span className="amim-section-label">Autismo</span>

              <h2>E no caso de uma criança autista?</h2>

              <p>
                Os pais podem apresentar os relatórios e avaliações que
                considerem relevantes para demonstrar o diagnóstico e
                caracterizar as dificuldades e necessidades da criança.
              </p>

              <p>
                É importante não reduzir a avaliação apenas ao desempenho
                escolar. Uma criança pode ter boas capacidades académicas e, ao
                mesmo tempo, apresentar dificuldades relevantes noutras áreas do
                funcionamento diário.
              </p>

              <div className="amim-autism-highlight">
                <strong>
                  O diagnóstico de autismo, por si só, não permite prever qual
                  será a percentagem atribuída no AMIM.
                </strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PARA QUE SERVE */}
      <section className="amim-benefits">
        <div className="container amim-container">
          <div className="amim-section-heading">
            <span className="amim-section-label">Depois do atestado</span>

            <h2>Para que pode servir o AMIM?</h2>

            <p>
              O grau de incapacidade comprovado pelo AMIM pode ser relevante
              para diferentes direitos e apoios.
            </p>
          </div>

          <div className="amim-benefits-grid">
            <article className="amim-benefit-card">
              <i className="bi bi-cash-coin"></i>
              <h3>Prestação Social para a Inclusão</h3>
              <p>
                Pode ser relevante para o acesso à PSI, desde que sejam
                cumpridos os respetivos critérios.
              </p>
            </article>

            <article className="amim-benefit-card">
              <i className="bi bi-receipt"></i>
              <h3>Benefícios fiscais</h3>
              <p>
                Alguns benefícios fiscais estão associados à existência de
                determinado grau de incapacidade.
              </p>
            </article>

            <article className="amim-benefit-card">
              <i className="bi bi-person-check"></i>
              <h3>Atendimento prioritário</h3>
              <p>
                Pessoas com incapacidade igual ou superior a 60%, comprovada por
                AMIM, podem exercer o direito ao atendimento prioritário nos
                termos aplicáveis.
              </p>
            </article>

            <article className="amim-benefit-card">
              <i className="bi bi-universal-access"></i>
              <h3>Outros direitos e apoios</h3>
              <p>
                O AMIM pode também ser solicitado para outras medidas que
                dependam da comprovação de incapacidade.
              </p>
            </article>
          </div>

          <div className="amim-benefits-warning">
            <i className="bi bi-lightbulb"></i>

            <p>
              <strong>AMIM não significa apoio automático.</strong> Depois de
              obter o atestado, deve verificar os requisitos específicos de cada
              benefício.
            </p>
          </div>
        </div>
      </section>

      {/* BALCÃO DA INCLUSÃO */}
      <section className="amim-inclusion-desk">
        <div className="container amim-container">
          <div className="amim-desk-image">
            <img
              src="/images/desk.png"
              alt="Ilustração relacionada com o Balcão da Inclusão"
            />
          </div>

          <div className="amim-desk-content">
            <span className="amim-section-label">Onde obter informação</span>

            <h2>Balcão da Inclusão</h2>

            <p>
              O Balcão da Inclusão presta informação às pessoas com deficiência
              ou incapacidade, às suas famílias e a outras pessoas interessadas.
            </p>

            <p>
              Pode ajudar a esclarecer questões relacionadas com o AMIM,
              Prestação Social para a Inclusão, benefícios fiscais, atendimento
              prioritário, educação, emprego, produtos de apoio, proteção social
              e outros direitos.
            </p>

            <a
              href="https://www.gov.pt/servicos/balcao-da-inclusao"
              target="_blank"
              rel="noreferrer"
              className="amim-desk-button"
            >
              Consultar o Balcão da Inclusão
              <i className="bi bi-box-arrow-up-right"></i>
            </a>
          </div>
        </div>
      </section>

      {/* NOSSA EXPERIÊNCIA */}
      <section className="amim-experience">
        <div className="container amim-container">
          <div className="amim-experience-box">
            <span className="amim-section-label">A nossa experiência</span>

            <h2>O processo não foi igual para todos nós</h2>

            <p>
              No caso dos nossos dois filhos, o processo foi bastante simples.
              Fizemos um agendamento no Centro de Saúde. Como não temos médico
              de família, a consulta foi realizada com o médico que estava
              disponível.
            </p>

            <p>
              Levámos o relatório e o laudo da clínica PIN, assinados pela
              psicóloga que realizou as avaliações. Cerca de dez dias depois,
              fomos informados de que o AMIM estava pronto e que poderíamos
              dirigir-nos ao serviço para o levantar.
            </p>

            <p>
              Quando chegou a minha vez de iniciar o pedido, no entanto, o
              percurso foi diferente. Tive primeiro uma consulta online.
              Posteriormente, não foi marcada uma consulta presencial e
              pediram-me que enviasse por email o relatório onde constava o
              diagnóstico.
            </p>

            <p>
              Alguns dias depois, fui informada de que tinha sido enviado por
              email um encaminhamento para que eu própria fizesse o agendamento
              com a Junta Médica.
            </p>

            <p>
              Neste momento, ainda não passei por essa avaliação. Por isso, não
              sei qual será o resultado do processo nem se me será atribuído um
              grau de incapacidade que resulte na emissão do AMIM.
            </p>

            <div className="amim-experience-note">
              <i className="bi bi-info-circle"></i>

              <p>
                Esta é apenas a nossa experiência pessoal. Mesmo dentro da mesma
                família, os procedimentos foram diferentes. O percurso pode
                variar consoante a situação e os serviços responsáveis, por isso
                a nossa experiência não deve ser interpretada como uma descrição
                do procedimento aplicável a todos os pedidos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FONTES */}
      <section className="amim-sources">
        <div className="container amim-container">
          <div className="amim-section-heading">
            <span className="amim-section-label">Informação oficial</span>
            <h2>Fontes e recursos</h2>
          </div>

          <article className="amim-source-card">
            <i className="bi bi-building"></i>

            <div>
              <h3>gov.pt — Balcão da Inclusão</h3>

              <p>
                Informação oficial sobre o serviço de apoio e informação para
                pessoas com deficiência ou incapacidade e suas famílias.
              </p>

              <a
                href="https://www.gov.pt/servicos/balcao-da-inclusao"
                target="_blank"
                rel="noreferrer"
              >
                Consultar fonte
              </a>
            </div>
          </article>

          <article className="amim-source-card">
            <i className="bi bi-person-check"></i>

            <div>
              <h3>gov.pt — Atendimento prioritário</h3>

              <p>
                Informação oficial sobre quem pode exercer o direito ao
                atendimento prioritário.
              </p>

              <a
                href="https://www.gov.pt/servicos/atendimento-prioritario"
                target="_blank"
                rel="noreferrer"
              >
                Consultar fonte
              </a>
            </div>
          </article>

          <article className="amim-source-card">
            <i className="bi bi-wallet2"></i>

            <div>
              <h3>gov.pt — Prestação Social para a Inclusão</h3>

              <p>
                Informação oficial sobre a PSI e respetivas condições de acesso.
              </p>

              <a
                href="https://www.gov.pt/servicos/requerer-a-prestacao-social-para-a-inclusao"
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

export default AMIM;
