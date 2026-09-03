import "./About.css";

function About() {
  const technologies = [
    "React",
    "Vite",
    "JavaScript",
    "CSS",
    "Bootstrap",
    "React Router",
  ];

  return (
    <main className="about-page">
      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="about-hero">
        <div className="container about-container">
          <div className="about-hero-content">
            <div className="about-hero-text">
              <span className="about-label">Sobre nós</span>

              <h1>Sobre o Autismo Portugal</h1>

              <p className="about-hero-highlight">
                Informação para compreender. Recursos para apoiar. Espaço para
                incluir.
              </p>

              <p>
                O Autismo Portugal nasceu com o objetivo de reunir, num único
                lugar, informação clara e acessível sobre autismo e sobre alguns
                dos caminhos, direitos e recursos disponíveis em Portugal.
              </p>
            </div>

            <div className="about-hero-icon">
              <i className="bi bi-heart"></i>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHY
      ===================================================== */}
      <section className="about-why">
        <div className="container about-container">
          <div className="about-why-box">
            <div className="about-why-icon">
              <i className="bi bi-compass"></i>
            </div>

            <div className="about-why-content">
              <span className="about-section-label">Como tudo começou</span>

              <h2>Por que este projeto nasceu?</h2>

              <p>
                Quando procuramos informação sobre autismo, encontramos muitas
                respostas — mas nem sempre no mesmo lugar.
              </p>

              <p>
                Informação sobre diagnóstico pode estar numa página, direitos
                escolares noutra, apoios sociais em diferentes serviços e
                legislação importante dentro de documentos que nem sempre são
                fáceis de interpretar.
              </p>

              <p>
                Para quem está a começar esse caminho, perceber onde procurar, o
                que perguntar e qual poderá ser o próximo passo pode tornar-se
                uma tarefa difícil.
              </p>

              <div className="about-why-highlight">
                <i className="bi bi-lightbulb"></i>

                <p>
                  O Autismo Portugal nasceu da vontade de reunir parte dessa
                  informação e tornar o caminho um pouco mais simples.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHO IS BEHIND THE PROJECT
      ===================================================== */}
      <section className="about-me">
        <div className="container about-container">
          <div className="about-section-heading">
            <span className="about-section-label">Por trás do projeto</span>

            <h2>Quem criou o Autismo Portugal?</h2>
          </div>

          <div className="about-me-box">
            <div className="after-wrap-image me-image">
              <img src="/images/Cris.png" alt="Imagem Cristhiane" />
            </div>

            <div className="about-me-content">
              <h3>Olá, sou a Cris.</h3>

              <p>
                Sou brasileira, vivo em Portugal e sou uma mulher autista e mãe
                de duas crianças autistas.
              </p>

              <p>
                A minha experiência com o autismo não começou apenas através de
                livros, estudos ou artigos. O autismo faz parte da nossa vida
                familiar e, ao longo do caminho, levou-me a procurar respostas
                sobre diagnóstico, escola, direitos, apoios e muitos dos
                desafios do quotidiano.
              </p>

              <p>
                Durante a minha transição profissional para a área da
                tecnologia, decidi transformar aquilo que estava a aprender em
                programação num projeto que também pudesse ser útil para outras
                pessoas.
              </p>

              <p>
                Assim nasceu o Autismo Portugal: da união entre experiência
                vivida, pesquisa e desenvolvimento web.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          EXPERIENCE TO CODE
      ===================================================== */}
      <section className="about-project">
        <div className="container about-container">
          <div className="about-section-heading">
            <span className="about-section-label">
              Da experiência para o código
            </span>

            <h2>Um projeto que junta duas áreas importantes</h2>

            <p>
              O Autismo Portugal combina experiência vivida, pesquisa de
              informação e tecnologia para construir um espaço simples,
              organizado e acessível.
            </p>
          </div>

          <div className="about-project-grid">
            <article className="about-project-card experience">
              <div className="about-project-icon">
                <i className="bi bi-heart"></i>
              </div>

              <h3>Experiência vivida</h3>

              <p>
                A perspetiva de uma pessoa autista e de uma família
                neurodivergente está presente na origem e no desenvolvimento do
                projeto.
              </p>
            </article>

            <article className="about-project-card research">
              <div className="about-project-icon">
                <i className="bi bi-search"></i>
              </div>

              <h3>Pesquisa</h3>

              <p>
                Sempre que possível, os conteúdos procuram apoiar-se em fontes
                oficiais, investigação científica e organizações reconhecidas.
              </p>
            </article>

            <article className="about-project-card technology">
              <div className="about-project-icon">
                <i className="bi bi-code-slash"></i>
              </div>

              <h3>Tecnologia</h3>

              <p>
                O projeto é desenvolvido com tecnologias web modernas, com
                atenção à navegação, responsividade e clareza da informação.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* =====================================================
          PURPOSE
      ===================================================== */}
      <section className="about-purpose">
        <div className="container about-container">
          <div className="about-section-heading">
            <span className="about-section-label">O nosso propósito</span>

            <h2>O que queremos fazer</h2>

            <p>
              Não pretendemos ter todas as respostas. Queremos ajudar a tornar
              algumas delas mais fáceis de encontrar e compreender.
            </p>
          </div>

          <div className="about-purpose-grid">
            <article className="about-purpose-card green">
              <i className="bi bi-chat-left-text"></i>

              <h3>Informação clara</h3>

              <p>
                Apresentar temas complexos numa linguagem mais simples,
                organizada e acessível.
              </p>
            </article>

            <article className="about-purpose-card blue">
              <i className="bi bi-journal-check"></i>

              <h3>Fontes confiáveis</h3>

              <p>
                Dar preferência a fontes oficiais, investigação científica e
                organizações especializadas.
              </p>
            </article>

            <article className="about-purpose-card purple">
              <i className="bi bi-people"></i>

              <h3>Respeito pela diversidade</h3>

              <p>
                Reconhecer que não existe uma única forma de ser autista e que
                necessidades e experiências podem ser muito diferentes.
              </p>
            </article>

            <article className="about-purpose-card yellow">
              <i className="bi bi-signpost-split"></i>

              <h3>Utilidade prática</h3>

              <p>
                Ir além da explicação de conceitos e ajudar quem procura
                informação a perceber possíveis próximos passos.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* =====================================================
          PERSONAL EXPERIENCE
      ===================================================== */}
      <section className="about-experience">
        <div className="container about-container">
          <div className="about-experience-box">
            <div className="about-experience-icon">
              <i className="bi bi-quote"></i>
            </div>

            <div className="about-experience-content">
              <span className="about-section-label">Experiência pessoal</span>

              <h2>Uma experiência não representa todas</h2>

              <p>
                Algumas páginas deste site incluem experiências pessoais e
                situações que fizeram parte do nosso próprio caminho.
              </p>

              <p>
                Esses relatos são partilhados como exemplos e não como uma
                descrição daquilo que acontece com todas as pessoas autistas ou
                com todas as famílias.
              </p>

              <p>
                O autismo é um espetro amplo e duas pessoas com o mesmo
                diagnóstico podem ter capacidades, dificuldades, necessidades e
                experiências muito diferentes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHAT THE SITE IS NOT
      ===================================================== */}
      <section className="about-disclaimer">
        <div className="container about-container">
          <div className="about-section-heading">
            <span className="about-section-label">Importante</span>

            <h2>O que este site não é</h2>
          </div>

          <div className="about-disclaimer-box">
            <div className="about-disclaimer-icon">
              <i className="bi bi-info-circle"></i>
            </div>

            <div className="about-disclaimer-content">
              <h3>O Autismo Portugal é um projeto informativo.</h3>

              <p>
                A informação disponibilizada neste site não substitui avaliação
                ou aconselhamento médico, psicológico, jurídico, educativo ou
                social individualizado.
              </p>

              <p>
                Sempre que possível, indicamos as fontes utilizadas para que
                cada pessoa possa consultar a informação original e aprofundar o
                tema.
              </p>

              <p>
                O Autismo Portugal é um projeto independente e não representa
                nenhuma entidade pública, serviço de saúde, instituição de
                ensino ou organização oficial portuguesa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          GROWING PROJECT
      ===================================================== */}
      <section className="about-growing">
        <div className="container about-container">
          <div className="about-growing-content">
            <div className="about-growing-text">
              <span className="about-section-label">
                Um projeto em evolução
              </span>

              <h2>Este espaço continua a crescer</h2>

              <p>
                O Autismo Portugal continuará a receber novos conteúdos,
                recursos e melhorias à medida que o projeto evolui.
              </p>

              <p>
                A informação também pode mudar ao longo do tempo, especialmente
                quando envolve legislação, serviços públicos e apoios. Por isso,
                procuramos rever e atualizar os conteúdos sempre que necessário.
              </p>

              <div className="about-topics">
                <span>Diagnóstico</span>
                <span>Escola</span>
                <span>Direitos</span>
                <span>Vida diária</span>
                <span>Recursos</span>
              </div>
            </div>

            <div className="about-growing-icon">
              <i className="bi bi-stars"></i>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          TECHNOLOGIES
      ===================================================== */}
      <section className="about-technology">
        <div className="container about-container">
          <div className="about-section-heading">
            <span className="about-section-label">Por trás do site</span>

            <h2>Construído com tecnologia</h2>

            <p>
              Para além do seu propósito informativo, o Autismo Portugal é
              também um projeto de desenvolvimento web.
            </p>
          </div>

          <div className="about-tech-list">
            {technologies.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>

          <p className="about-development-credit">
            Design e desenvolvimento por <strong>Cris Caraça</strong>.
          </p>
        </div>
      </section>

      {/* =====================================================
          CONTACT
      ===================================================== */}
      <section className="about-contact">
        <div className="container about-container">
          <div className="about-contact-box">
            <div className="about-contact-icon">
              <i className="bi bi-envelope-heart"></i>
            </div>

            <div className="about-contact-content">
              <span className="about-section-label">Entre em contacto</span>

              <h2>Quer falar connosco?</h2>

              <p>
                Se encontrou alguma informação que precisa de ser atualizada,
                conhece um recurso que poderia ser acrescentado ou simplesmente
                quer partilhar uma sugestão sobre o projeto, pode entrar em
                contacto por email.
              </p>

              <a
                href="mailto:cristhianelcaraca@gmail.com"
                className="about-contact-button"
              >
                <i className="bi bi-envelope"></i>
                Enviar email
              </a>

              <p className="about-contact-email">cristhianelcaraca@gmail.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL MESSAGE
      ===================================================== */}
      <section className="about-final">
        <div className="container about-container">
          <div className="about-final-box">
            <i className="bi bi-heart-fill"></i>

            <p>
              Se este espaço tornar o caminho de uma pessoa ou de uma família um
              pouco menos confuso, então já cumpriu parte do seu propósito.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
