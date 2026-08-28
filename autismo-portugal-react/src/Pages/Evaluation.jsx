import { Link } from "react-router-dom";

function Evaluation() {
  return (
    <main className="evaluation-page">
      {/* HERO */}
      <section className="evaluation-hero">
        <div className="container">
          <div className="evaluation-hero-content">
            <div className="evaluation-hero-image">
              <img
                src="/images/evaluation.png"
                alt="Ilustração relacionada com a avaliação do autismo"
              />
            </div>

            <div className="evaluation-hero-text">
              <span className="evaluation-label">Processo de avaliação</span>

              <h1>Avaliação</h1>

              <p>
                A avaliação ajuda a compreender o desenvolvimento, as
                características, as dificuldades e as necessidades da criança de
                forma mais completa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COMO COMEÇAR */}
      <section className="evaluation-start">
        <div className="container evaluation-container">
          <div className="section-heading">
            <h2>Como começar uma avaliação?</h2>

            <p>
              Quando existem preocupações relacionadas com o desenvolvimento,
              comunicação, interação social, comportamento ou processamento
              sensorial, o primeiro passo é procurar orientação profissional.
            </p>
          </div>

          <div className="evaluation-paths">
            {/* SNS */}
            <div className="evaluation-path-card">
              <div className="evaluation-path-icon blue">
                <i className="bi bi-hospital"></i>
              </div>

              <h3>Pelo SNS</h3>

              <p>
                Pode começar por conversar com o médico de família ou pediatra,
                explicando as características e dificuldades que têm levantado
                preocupação.
              </p>

              <p>
                Quando necessário, poderá ser feito o encaminhamento para
                consultas ou serviços especializados, de acordo com a idade e
                com as necessidades da criança.
              </p>
            </div>

            {/* PRIVADO */}
            <div className="evaluation-path-card">
              <div className="evaluation-path-icon green">
                <i className="bi bi-heart-pulse"></i>
              </div>

              <h3>No setor privado</h3>

              <p>
                Também é possível procurar diretamente uma clínica ou
                profissional com experiência na avaliação do autismo e do
                desenvolvimento infantil.
              </p>

              <p>
                O profissional poderá realizar uma primeira avaliação e indicar
                quais as etapas, instrumentos ou especialidades adicionais que
                poderão ser necessárias.
              </p>
            </div>
          </div>

          <div className="evaluation-note">
            <div className="evaluation-note-icon">
              <i className="bi bi-info-circle"></i>
            </div>

            <div>
              <h3>O processo pode variar</h3>

              <p>
                Não existe necessariamente um percurso igual para todas as
                crianças. A equipa envolvida e as etapas da avaliação podem
                variar de acordo com a idade, as características apresentadas e
                as necessidades identificadas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* O QUE ACONTECE DURANTE A AVALIAÇÃO */}
      <section className="evaluation-process">
        <div className="container evaluation-container">
          <div className="section-heading">
            <h2>O que acontece durante a avaliação?</h2>

            <p>
              O processo pode incluir diferentes etapas para compreender o
              desenvolvimento e o funcionamento da criança em várias áreas.
            </p>
          </div>

          <div className="evaluation-steps">
            <div className="evaluation-step">
              <span>1</span>

              <div>
                <h3>Conversa inicial</h3>

                <p>
                  Os pais ou cuidadores podem ser convidados a explicar as
                  principais preocupações, características observadas e
                  dificuldades no dia a dia.
                </p>
              </div>
            </div>

            <div className="evaluation-step">
              <span>2</span>

              <div>
                <h3>História do desenvolvimento</h3>

                <p>
                  São recolhidas informações sobre o desenvolvimento da criança,
                  incluindo comunicação, brincadeira, interação social,
                  comportamento, autonomia e percurso escolar.
                </p>
              </div>
            </div>

            <div className="evaluation-step">
              <span>3</span>

              <div>
                <h3>Observação e avaliação</h3>

                <p>
                  Dependendo da idade e da situação, os profissionais podem
                  observar a forma como a criança comunica, interage, brinca e
                  responde a diferentes situações.
                </p>
              </div>
            </div>

            <div className="evaluation-step">
              <span>4</span>

              <div>
                <h3>Questionários e instrumentos</h3>

                <p>
                  Podem ser utilizados questionários, entrevistas estruturadas e
                  outros instrumentos de avaliação adequados ao contexto.
                </p>
              </div>
            </div>

            <div className="evaluation-step">
              <span>5</span>

              <div>
                <h3>Avaliações complementares</h3>

                <p>
                  Quando necessário, podem ser recomendadas avaliações
                  adicionais noutras áreas para compreender melhor as
                  necessidades da criança.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ESCOLA */}
      <section className="evaluation-school">
        <div className="container evaluation-container">
          <div className="evaluation-school-box">
            <div className="evaluation-school-icon">
              <img
                src="/images/school.png"
                alt="Ilustração relacionada com a escola"
              />
            </div>

            <div className="evaluation-school-content">
              <span>Informação de outros contextos</span>

              <h2>A escola também pode participar</h2>

              <p>
                Durante o processo de avaliação, pode ser necessário recolher
                informação sobre o comportamento e o desenvolvimento da criança
                noutros contextos além de casa.
              </p>

              <p>
                A educadora de infância, o diretor de turma ou outros
                profissionais da escola podem ser convidados a preencher
                questionários ou a fornecer informações sobre interação social,
                comunicação, comportamento, atenção, autonomia e adaptação às
                rotinas.
              </p>

              <p>
                Esta informação pode ajudar os profissionais a compreender como
                determinadas características aparecem em ambientes diferentes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DEPOIS DA AVALIAÇÃO */}
      <section className="evaluation-after">
        <div className="container evaluation-container">
          <div className="section-heading">
            <h2>Depois da avaliação</h2>

            <p>
              No final do processo, os profissionais explicam os resultados e
              podem indicar os próximos passos.
            </p>
          </div>

          <div className="evaluation-after-grid">
            <div className="evaluation-after-card">
              <div className="evaluation-after-icon purple">
                <i className="bi bi-chat-square-text"></i>
              </div>

              <h3>Devolução dos resultados</h3>

              <p>
                Os resultados da avaliação são discutidos com a família e são
                esclarecidas as principais conclusões.
              </p>
            </div>

            <div className="evaluation-after-card">
              <div className="evaluation-after-icon blue">
                <i className="bi bi-file-earmark-text"></i>
              </div>

              <h3>Relatório</h3>

              <p>
                Dependendo do serviço, poderá ser entregue um relatório com os
                resultados, conclusões e recomendações.
              </p>
            </div>

            <div className="evaluation-after-card">
              <div className="evaluation-after-icon green">
                <i className="bi bi-signpost-split"></i>
              </div>

              <h3>Próximos passos</h3>

              <p>
                Quando aplicável, podem ser discutidos diagnóstico,
                acompanhamento, intervenções ou outras recomendações.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIÊNCIA */}
      <section className="evaluation-experience">
        <div className="container evaluation-container">
          <div className="evaluation-experience-box">
            <div className="evaluation-experience-image">
              <img src="/images/family.png" alt="Ilustração de uma família" />
            </div>

            <div className="evaluation-experience-content">
              <span>A nossa experiência</span>

              <h2>A participação da escola fez parte do processo</h2>

              <p>
                Na nossa experiência, a escola também participou na avaliação
                dos nossos filhos.
              </p>

              <p>
                No caso da nossa filha, que frequentava a educação pré-escolar,
                a educadora preencheu um questionário. No caso do nosso filho
                mais velho, essa informação foi fornecida pelo diretor de turma.
              </p>

              <p>
                Cada processo pode ser diferente, mas esta recolha de informação
                ajudou a complementar aquilo que era observado em casa e durante
                as consultas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRÓXIMO PASSO */}
      <section className="evaluation-next">
        <div className="container evaluation-container">
          <span className="evaluation-next-label">Próximo passo</span>

          <h2>E depois da avaliação?</h2>

          <p>
            Se a avaliação identificar características compatíveis com autismo,
            o processo poderá avançar para a definição ou confirmação do
            diagnóstico e para a discussão dos apoios necessários.
          </p>

          <Link to="/diagnostico" className="evaluation-link">
            Ver como funciona o diagnóstico
            <i className="bi bi-arrow-right"></i>
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Evaluation;
