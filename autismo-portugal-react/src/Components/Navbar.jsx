import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white">
      <div className="container">
        {/* Logo */}
        <a className="navbar-brand d-flex align-items-center" href="/">
          <img
            src="/images/autismo_portugal_logo.png"
            alt="Autismo Portugal"
            width="55"
            className="me-2"
          />

          <span>
            <strong>AUTISMO</strong>
            <br />
            <small>PORTUGAL</small>
          </span>
        </a>

        {/* Botão mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Abrir menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Início
              </a>
            </li>

            {/* Diagnóstico */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Diagnóstico
              </a>

              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/suspeita">
                    Suspeita de autismo
                  </Link>
                </li>

                <li>
                  <Link className="dropdown-item" to="/avaliacao">
                    Avaliação
                  </Link>
                </li>

                <li>
                  <Link className="dropdown-item" to="/diagnostico">
                    Diagnóstico
                  </Link>
                </li>

                <li>
                  <Link className="dropdown-item" to="/depois-diagnostico">
                    Depois do diagnóstico
                  </Link>
                </li>
              </ul>
            </li>

            {/* Escola */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Escola
              </a>

              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/direitos-escola">
                    Direitos
                  </a>
                </li>

                <li>
                  <a className="dropdown-item" href="/medidas-suporte">
                    Medidas de suporte
                  </a>
                </li>

                <li>
                  <a className="dropdown-item" href="/pei">
                    PEI
                  </a>
                </li>

                <li>
                  <a className="dropdown-item" href="/crises-escola">
                    Ansiedade e crises
                  </a>
                </li>
              </ul>
            </li>

            {/* Direitos e Apoios */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Direitos e Apoios
              </a>

              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/amim">
                    AMIM
                  </a>
                </li>

                <li>
                  <a className="dropdown-item" href="/psi">
                    Prestação Social para a Inclusão
                  </a>
                </li>

                <li>
                  <a className="dropdown-item" href="/beneficios">
                    Benefícios e apoios
                  </a>
                </li>

                <li>
                  <a className="dropdown-item" href="/balcao-inclusao">
                    Balcão da Inclusão
                  </a>
                </li>
              </ul>
            </li>

            {/* Vida diária */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Vida diária
              </a>

              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/crises">
                    Crises e sobrecarga
                  </a>
                </li>

                <li>
                  <a className="dropdown-item" href="/ansiedade">
                    Ansiedade
                  </a>
                </li>

                <li>
                  <a className="dropdown-item" href="/rotina">
                    Rotina e organização
                  </a>
                </li>
              </ul>
            </li>

            {/* Recursos */}
            <li className="nav-item">
              <a className="nav-link" href="/recursos">
                Recursos
              </a>
            </li>

            {/* Sobre */}
            <li className="nav-item">
              <a className="nav-link" href="/sobre">
                Sobre nós
              </a>
            </li>

            {/* Idioma */}
            <li className="nav-item ms-lg-3">
              <div className="lang-toggle">
                <button
                  type="button"
                  className="lang-option active"
                  data-lang="pt"
                >
                  PT
                </button>

                <button type="button" className="lang-option" data-lang="en">
                  EN
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
