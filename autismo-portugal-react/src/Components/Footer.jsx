function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container footer-content">
          <div className="footer-item">
            <i className="bi bi-shield-check footer-icon"></i>
            <p>
              Fontes confiáveis
              <br />e atualizadas
            </p>
          </div>

          <div className="footer-item">
            <i className="bi bi-people footer-icon"></i>
            <p>
              Linguagem simples
              <br />e acessível
            </p>
          </div>

          <div className="footer-item">
            <i className="bi bi-lock footer-icon"></i>
            <p>
              Privacidade e<br />
              respeito sempre
            </p>
          </div>
        </div>
      </footer>
      <div className="credits-item">
        <small>
          {" "}
          Criado por{" "}
          <a href="https://www.linkedin.com/in/cris-cara%C3%A7a/">
            {" "}
            Cristhiane Caraça{" "}
          </a>{" "}
          and open sourced on{" "}
          <a href="https://github.com/cristhianelcaraca/Projeto-Autismo">
            {" "}
            Github ✌️
          </a>
        </small>
      </div>
    </>
  );
}

export default Footer;
