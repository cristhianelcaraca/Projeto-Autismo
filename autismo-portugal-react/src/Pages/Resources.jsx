import "./Resources.css";

function Resources() {
  const adultBooks = [
    {
      title: "Unmasking Autism",
      author: "Devon Price",
      image: "/images/resources/unmasking-autism.jpg",
      tag: "Autoria autista",
      description:
        "Explora masking, identidade, neurodiversidade e o processo de compreender e assumir características autistas.",
      link: "https://www.penguinrandomhouse.com/books/688819/unmasking-autism-by-devon-price-phd/",
    },
    {
      title: "Strong Female Character",
      author: "Fern Brady",
      image: "/images/resources/strong-female-character.jpg",
      tag: "Autoria autista",
      description:
        "Memórias da comediante Fern Brady sobre crescer sem diagnóstico e compreender o autismo já na vida adulta.",
      link: "https://www.penguinrandomhouse.com/books/737422/strong-female-character-by-fern-brady/",
    },
    {
      title: "The Electricity of Every Living Thing",
      author: "Katherine May",
      image: "/images/resources/electricity-every-living-thing.jpg",
      tag: "Experiência pessoal",
      description:
        "Katherine May escreve sobre diferença, identidade e a descoberta do autismo durante a vida adulta.",
      link: "https://www.penguinrandomhouse.com/books/703087/the-electricity-of-every-living-thing-by-katherine-may/",
    },
    {
      title: "The Reason I Jump",
      author: "Naoki Higashida",
      image: "/images/resources/reason-i-jump.jpg",
      tag: "Autoria autista",
      description:
        "Escrito originalmente por Naoki Higashida quando era adolescente, apresenta a sua perspetiva pessoal sobre viver com autismo.",
      link: "https://www.penguinrandomhouse.com/books/227014/the-reason-i-jump-by-naoki-higashida/",
    },
  ];

  const adultSeries = [
    {
      title: "Move to Heaven",
      country: "Coreia do Sul",
      year: "2021",
      image: "/images/resources/move-to-heaven.jpg",
      tag: "Série",
      description:
        "Geu-ru é um jovem autista que trabalha como trauma cleaner, organizando os pertences de pessoas que morreram e ajudando a contar as histórias que deixaram para trás.",
      link: "https://www.netflix.com/title/80990381",
    },
    {
      title: "Uma Advogada Extraordinária",
      country: "Coreia do Sul",
      year: "2022",
      image: "/images/resources/extraordinary-attorney-woo.jpg",
      tag: "Série",
      description:
        "Woo Young-woo inicia a carreira numa grande sociedade de advogados e enfrenta desafios profissionais, sociais e afetivos enquanto constrói a sua vida adulta.",
      link: "https://www.netflix.com/pt-en/title/81518991",
    },
    {
      title: "Light of My Lion",
      country: "Japão",
      year: "2024",
      image: "/images/resources/light-of-my-lion.jpg",
      tag: "Série",
      description:
        "Michito é um adulto autista e artista que vive com o irmão Hiroto. A rotina dos dois muda quando uma criança inesperadamente entra nas suas vidas.",
      link: "https://tbscontents.com/en/program/lightofmylion",
    },
    {
      title: "The Good Doctor",
      country: "Estados Unidos",
      year: "2017–2024",
      image: "/images/resources/the-good-doctor.jpg",
      tag: "Série",
      description:
        "Shaun Murphy é um jovem cirurgião autista com síndrome de savant que constrói a sua carreira num hospital enquanto enfrenta preconceitos e relações complexas.",
      link: "https://abc.com/shows/the-good-doctor/2198201",
    },
  ];

  const adultMovies = [
    {
      title: "Uma Mulher Diferente",
      originalTitle: "Différente",
      country: "França",
      year: "2025",
      image: "/images/resources/differente.jpg",
      tag: "Diagnóstico tardio",
      description:
        "Katia, uma documentarista de 35 anos, começa a pesquisar sobre autismo e acaba por reconhecer características em si própria, iniciando um processo de diagnóstico e autoconhecimento.",
      link: "https://www.netflix.com/br/title/82693392",
    },
    {
      title: "Mozart and the Whale",
      country: "Estados Unidos",
      year: "2005",
      image: "/images/resources/mozart-and-the-whale.jpg",
      tag: "Romance",
      description:
        "Drama romântico sobre duas pessoas autistas que se conhecem num grupo de apoio e tentam construir uma relação.",
      link: "https://www.rottentomatoes.com/m/mozart_and_the_whale",
    },
    {
      title: "Temple Grandin",
      country: "Estados Unidos",
      year: "2010",
      image: "/images/resources/temple-grandin.jpg",
      tag: "Biográfico",
      description:
        "Filme biográfico sobre Temple Grandin, cientista, professora universitária, autora e uma das pessoas autistas mais conhecidas internacionalmente.",
      link: "https://www.hbomaxlapress.com/programming/movies/87",
    },
  ];

  const childrenBooks = [
    {
      title: "A Kind of Spark",
      author: "Elle McNicoll",
      image: "/images/resources/a-kind-of-spark-book.jpg",
      tag: "8–12 anos",
      description:
        "Addie é uma menina autista que decide lutar por um memorial para mulheres injustamente perseguidas na história da sua comunidade.",
      link: "https://www.penguinrandomhouse.com/books/isbn/9780593374276",
    },
    {
      title: "The Awesome Autistic Go-To Guide",
      author: "Yenn Purkis e Tanya Masterman",
      image: "/images/resources/awesome-autistic-guide.jpg",
      tag: "Pré-adolescentes e adolescentes",
      description:
        "Guia pensado para jovens autistas, com informação sobre identidade, diferenças sensoriais, ansiedade, meltdowns e estratégias para o quotidiano.",
      link: "https://us.jkp.com/products/the-awesome-autistic-goto-guide",
    },
  ];

  const childrenScreen = [
    {
      title: "Loop",
      type: "Curta-metragem",
      image: "/images/resources/loop.jpg",
      tag: "Pixar",
      description:
        "Renee é uma adolescente autista não falante que participa numa atividade de canoagem com Marcus. Os dois precisam encontrar formas diferentes de comunicar.",
      link: "https://www.pixar.com/loop",
    },
    {
      title: "A Kind of Spark",
      type: "Série",
      image: "/images/resources/a-kind-of-spark-series.jpg",
      tag: "Representação autista",
      description:
        "Adaptação do livro de Elle McNicoll. A série acompanha Addie e aborda neurodivergência, escola, amizade e identidade.",
      link: "https://www.bbc.co.uk/iplayer/episodes/p0f7q3rv/a-kind-of-spark",
    },
    {
      title: "Pablo",
      type: "Série de animação",
      image: "/images/resources/pablo.jpg",
      tag: "Infantil",
      description:
        "Pablo é um menino autista que utiliza os seus desenhos e personagens imaginários para compreender acontecimentos e emoções do quotidiano.",
      link: "https://www.justwatch.com/uk/tv-series/pablo",
    },
    {
      title: "Thomas & Friends: All Engines Go",
      type: "Animação",
      image: "/images/resources/thomas-bruno.jpg",
      tag: "Personagem autista",
      description:
        "A série inclui Bruno, uma personagem autista que prefere previsibilidade e rotinas e pode ter sensibilidade a determinados estímulos.",
      link: "https://www.thomasandfriends.com/",
    },
  ];

  return (
    <main className="resources-page">
      {/* HERO */}
      <section className="resources-hero">
        <div className="container resources-container">
          <div className="resources-hero-content">
            <div className="resources-hero-text">
              <span className="resources-label">Recursos</span>

              <h1>Livros, filmes e séries</h1>

              <p>
                Histórias podem ajudar-nos a compreender experiências
                diferentes, reconhecer sentimentos e conhecer outras perspetivas
                sobre o autismo.
              </p>

              <p>
                Aqui reunimos livros, filmes, séries e animações para adultos,
                crianças e famílias.
              </p>
            </div>

            <div className="resources-hero-icon">
              <i className="bi bi-book-half"></i>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO NOTE */}
      <section className="resources-intro">
        <div className="container resources-container">
          <div className="resources-note">
            <i className="bi bi-info-circle"></i>

            <div>
              <h2>Uma história não representa todo o espetro</h2>

              <p>
                Cada pessoa autista é diferente. Filmes, séries e livros mostram
                experiências individuais, ficcionais ou reais. Uma personagem
                não deve ser considerada um modelo de como todas as pessoas
                autistas pensam, comunicam ou vivem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ADULTS */}
      <section className="resources-adults">
        <div className="container resources-container">
          <div className="resources-section-heading">
            <span className="resources-section-label">Para adultos</span>
            <h2>Livros</h2>
            <p>
              Relatos pessoais e obras sobre identidade, masking, diagnóstico
              tardio e diferentes formas de compreender a experiência autista.
            </p>
          </div>

          <div className="resources-grid">
            {adultBooks.map((item) => (
              <ResourceCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* ADULT SERIES */}
      <section className="resources-series-section">
        <div className="container resources-container">
          <div className="resources-section-heading">
            <span className="resources-section-label">Para adultos</span>
            <h2>Séries</h2>

            <p>
              Produções de diferentes países que abordam personagens autistas,
              vida adulta, família, trabalho e relações.
            </p>
          </div>

          <div className="resources-grid">
            {adultSeries.map((item) => (
              <ResourceCard key={item.title} item={item} />
            ))}
          </div>

          <div className="resources-representation-note">
            <i className="bi bi-chat-square-heart"></i>

            <p>
              Algumas destas produções são muito apreciadas por parte do público
              autista e outras recebem críticas pela forma como representam o
              autismo. Incluí-las aqui não significa que cada representação seja
              universal ou consensual.
            </p>
          </div>
        </div>
      </section>

      {/* MOVIES */}
      <section className="resources-movies">
        <div className="container resources-container">
          <div className="resources-section-heading">
            <span className="resources-section-label">Para adultos</span>
            <h2>Filmes</h2>
          </div>

          <div className="resources-grid resources-grid-three">
            {adultMovies.map((item) => (
              <ResourceCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* AUTISTIC VOICES */}
      <section className="resources-voices">
        <div className="container resources-container">
          <div className="resources-voices-box">
            <div className="resources-voices-icon">
              <i className="bi bi-megaphone"></i>
            </div>

            <div>
              <span className="resources-section-label">
                Histórias na primeira pessoa
              </span>

              <h2>Dar espaço às vozes autistas</h2>

              <p>
                Sempre que possível, vale a pena procurar também livros,
                entrevistas e produções em que pessoas autistas participam na
                construção da própria narrativa.
              </p>

              <p>
                Entre os recursos desta página estão obras escritas por autores
                autistas como Devon Price, Fern Brady, Naoki Higashida, Elle
                McNicoll, Yenn Purkis e Tanya Masterman.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CHILDREN BOOKS */}
      <section className="resources-children">
        <div className="container resources-container">
          <div className="resources-section-heading">
            <span className="resources-section-label">
              Para crianças e famílias
            </span>

            <h2>Livros</h2>

            <p>
              Histórias e guias que podem ajudar crianças e jovens a compreender
              identidade, diferença, emoções e neurodivergência.
            </p>
          </div>

          <div className="resources-grid resources-grid-two">
            {childrenBooks.map((item) => (
              <ResourceCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* CHILDREN SCREEN */}
      <section className="resources-children-screen">
        <div className="container resources-container">
          <div className="resources-section-heading">
            <span className="resources-section-label">
              Para crianças e famílias
            </span>

            <h2>Filmes, animações e séries</h2>
          </div>

          <div className="resources-grid">
            {childrenScreen.map((item) => (
              <ResourceCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* CHOOSE TOGETHER */}
      <section className="resources-family-note">
        <div className="container resources-container">
          <div className="resources-family-box">
            <i className="bi bi-people"></i>

            <div>
              <h2>Assistir ou ler em conjunto também pode ajudar</h2>

              <p>
                Para crianças e adolescentes, uma história pode abrir espaço
                para conversar sobre diferenças sensoriais, comunicação,
                amizade, escola, autonomia e formas diferentes de sentir o
                mundo.
              </p>

              <p>
                A idade indicada pela editora ou plataforma e as necessidades
                individuais da criança devem ser consideradas antes de escolher
                um conteúdo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL NOTE */}
      <section className="resources-final">
        <div className="container resources-container">
          <div className="resources-final-box">
            <i className="bi bi-heart"></i>

            <div>
              <h2>Conhece outro recurso interessante?</h2>

              <p>
                Esta seleção pode crescer ao longo do tempo. O objetivo não é
                criar uma lista definitiva, mas reunir conteúdos que possam
                gerar reflexão, identificação e novas conversas sobre autismo.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function ResourceCard({ item }) {
  return (
    <article className="resource-card">
      <div className="resource-card-image">
        <img src={item.image} alt={`Capa de ${item.title}`} loading="lazy" />

        {item.tag && <span className="resource-card-tag">{item.tag}</span>}
      </div>

      <div className="resource-card-content">
        <h3>{item.title}</h3>

        {item.originalTitle && (
          <p className="resource-original-title">{item.originalTitle}</p>
        )}

        {item.author && (
          <p className="resource-card-meta">
            <i className="bi bi-person"></i>
            {item.author}
          </p>
        )}

        {(item.country || item.year || item.type) && (
          <p className="resource-card-meta">
            <i className="bi bi-globe2"></i>

            {[item.type, item.country, item.year].filter(Boolean).join(" · ")}
          </p>
        )}

        <p className="resource-card-description">{item.description}</p>

        {item.link && (
          <a
            href={item.link}
            target="_blank"
            rel="noreferrer"
            className="resource-card-link"
          >
            Saber mais
            <i className="bi bi-arrow-up-right"></i>
          </a>
        )}
      </div>
    </article>
  );
}

export default Resources;
