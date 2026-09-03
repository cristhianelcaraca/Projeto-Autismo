import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Benefits.css";

function Benefits() {
  const { t } = useTranslation();

  return (
    <main className="benefits-page">
      {/* HERO */}
      <section className="benefits-hero">
        <div className="container benefits-container">
          <div className="benefits-hero-content">
            <div className="benefits-hero-text">
              <span className="benefits-label">{t("benefits.hero.label")}</span>

              <h1>{t("benefits.hero.title")}</h1>

              <p>{t("benefits.hero.paragraph1")}</p>

              <p>{t("benefits.hero.paragraph2")}</p>
            </div>

            <div className="benefits-hero-image">
              <img src="/images/social.png" alt={t("benefits.hero.imageAlt")} />
            </div>
          </div>
        </div>
      </section>

      {/* POR ONDE COMEÇAR */}
      <section className="benefits-start">
        <div className="container benefits-container">
          <div className="benefits-section-heading">
            <span className="benefits-section-label">
              {t("benefits.start.label")}
            </span>

            <h2>{t("benefits.start.title")}</h2>

            <p>{t("benefits.start.description")}</p>
          </div>

          <div className="benefits-flow">
            <article className="benefits-flow-card">
              <span>1</span>
              <i className="bi bi-clipboard2-pulse"></i>

              <h3>{t("benefits.start.diagnosis.title")}</h3>

              <p>{t("benefits.start.diagnosis.description")}</p>
            </article>

            <div className="benefits-flow-arrow">
              <i className="bi bi-arrow-right"></i>
            </div>

            <article className="benefits-flow-card">
              <span>2</span>
              <i className="bi bi-file-earmark-medical"></i>

              <h3>{t("benefits.start.amim.title")}</h3>

              <p>{t("benefits.start.amim.description")}</p>
            </article>

            <div className="benefits-flow-arrow">
              <i className="bi bi-arrow-right"></i>
            </div>

            <article className="benefits-flow-card">
              <span>3</span>
              <i className="bi bi-search-heart"></i>

              <h3>{t("benefits.start.support.title")}</h3>

              <p>{t("benefits.start.support.description")}</p>
            </article>
          </div>

          <div className="benefits-start-note">
            <i className="bi bi-info-circle"></i>

            <p>
              <strong>{t("benefits.start.noteStrong")}</strong>{" "}
              {t("benefits.start.note")}
            </p>
          </div>
        </div>
      </section>

      {/* PRINCIPAIS APOIOS */}
      <section className="benefits-main">
        <div className="container benefits-container">
          <div className="benefits-section-heading">
            <span className="benefits-section-label">
              {t("benefits.main.label")}
            </span>

            <h2>{t("benefits.main.title")}</h2>

            <p>{t("benefits.main.description")}</p>
          </div>

          <div className="benefits-grid">
            {/* PSI */}
            <article className="benefits-card green">
              <div className="benefits-card-icon">
                <i className="bi bi-wallet2"></i>
              </div>

              <h3>{t("benefits.main.psi.title")}</h3>

              <p>{t("benefits.main.psi.description")}</p>

              <Link to="/psi" className="benefits-card-link">
                {t("benefits.main.psi.link")}
                <i className="bi bi-arrow-right"></i>
              </Link>
            </article>

            {/* BENEFÍCIOS FISCAIS */}
            <article className="benefits-card blue">
              <div className="benefits-card-icon">
                <i className="bi bi-receipt"></i>
              </div>

              <h3>{t("benefits.main.tax.title")}</h3>

              <p>{t("benefits.main.tax.description")}</p>

              <a
                href="https://info.portaldasfinancas.gov.pt/pt/apoio_ao_contribuinte/Cidadaos/Dados_pessoais_familia/Dados_pessoais/Deficiencia_fiscalmente_relevante/Paginas/default.aspx"
                target="_blank"
                rel="noreferrer"
                className="benefits-card-link"
              >
                {t("benefits.main.tax.link")}
                <i className="bi bi-box-arrow-up-right"></i>
              </a>
            </article>

            {/* PRIORITÁRIO */}
            <article className="benefits-card purple">
              <div className="benefits-card-icon">
                <i className="bi bi-person-check"></i>
              </div>

              <h3>{t("benefits.main.priority.title")}</h3>

              <p>{t("benefits.main.priority.description")}</p>

              <a
                href="https://www.gov.pt/servicos/atendimento-prioritario"
                target="_blank"
                rel="noreferrer"
                className="benefits-card-link"
              >
                {t("benefits.main.priority.link")}
                <i className="bi bi-box-arrow-up-right"></i>
              </a>
            </article>

            {/* ESTACIONAMENTO */}
            <article className="benefits-card yellow">
              <div className="benefits-card-icon">
                <i className="bi bi-p-square"></i>
              </div>

              <h3>{t("benefits.main.parking.title")}</h3>

              <p>{t("benefits.main.parking.description")}</p>

              <a
                href="https://www.gov.pt/servicos/pedir-o-cartao-de-estacionamento-para-pessoas-com-deficiencia"
                target="_blank"
                rel="noreferrer"
                className="benefits-card-link"
              >
                {t("benefits.main.parking.link")}
                <i className="bi bi-box-arrow-up-right"></i>
              </a>
            </article>

            {/* EDUCAÇÃO ESPECIAL */}
            <article className="benefits-card pink">
              <div className="benefits-card-icon">
                <i className="bi bi-mortarboard"></i>
              </div>

              <h3>{t("benefits.main.education.title")}</h3>

              <p>{t("benefits.main.education.description")}</p>

              <a
                href="https://www.gov.pt/guias/prestacoes-e-beneficios-sociais-e-de-saude"
                target="_blank"
                rel="noreferrer"
                className="benefits-card-link"
              >
                {t("benefits.main.education.link")}
                <i className="bi bi-box-arrow-up-right"></i>
              </a>
            </article>

            {/* BONIFICAÇÃO */}
            <article className="benefits-card teal">
              <div className="benefits-card-icon">
                <i className="bi bi-people"></i>
              </div>

              <h3>{t("benefits.main.allowance.title")}</h3>

              <p>{t("benefits.main.allowance.description")}</p>

              <a
                href="https://www.gov.pt/guias/prestacoes-e-beneficios-sociais-e-de-saude"
                target="_blank"
                rel="noreferrer"
                className="benefits-card-link"
              >
                {t("benefits.main.allowance.link")}
                <i className="bi bi-box-arrow-up-right"></i>
              </a>
            </article>

            {/* PRODUTOS */}
            <article className="benefits-card orange">
              <div className="benefits-card-icon">
                <i className="bi bi-universal-access"></i>
              </div>

              <h3>{t("benefits.main.products.title")}</h3>

              <p>{t("benefits.main.products.description")}</p>

              <a
                href="https://www.gov.pt/guias/apoio-a-familia/pessoas-com-deficiencia"
                target="_blank"
                rel="noreferrer"
                className="benefits-card-link"
              >
                {t("benefits.main.products.link")}
                <i className="bi bi-box-arrow-up-right"></i>
              </a>
            </article>

            {/* APOIOS SOCIAIS */}
            <article className="benefits-card navy">
              <div className="benefits-card-icon">
                <i className="bi bi-house-heart"></i>
              </div>

              <h3>{t("benefits.main.social.title")}</h3>

              <p>{t("benefits.main.social.description")}</p>

              <a
                href="https://www.gov.pt/servicos/requerer-apoios-sociais-para-pessoas-com-deficiencia"
                target="_blank"
                rel="noreferrer"
                className="benefits-card-link"
              >
                {t("benefits.main.social.link")}
                <i className="bi bi-box-arrow-up-right"></i>
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* BENEFÍCIOS FISCAIS */}
      <section className="benefits-tax">
        <div className="container benefits-container">
          <div className="benefits-section-heading">
            <span className="benefits-section-label">
              {t("benefits.tax.label")}
            </span>

            <h2>{t("benefits.tax.title")}</h2>

            <p>{t("benefits.tax.description")}</p>
          </div>

          <div className="benefits-tax-grid">
            <article className="benefits-tax-card">
              <span>IRS</span>
              <p>{t("benefits.tax.irs")}</p>
            </article>

            <article className="benefits-tax-card">
              <span>IUC</span>
              <p>{t("benefits.tax.iuc")}</p>
            </article>

            <article className="benefits-tax-card">
              <span>ISV</span>
              <p>{t("benefits.tax.isv")}</p>
            </article>

            <article className="benefits-tax-card">
              <span>IVA</span>
              <p>{t("benefits.tax.iva")}</p>
            </article>
          </div>

          <div className="benefits-tax-highlight">
            <i className="bi bi-file-earmark-check"></i>

            <div>
              <h3>{t("benefits.tax.communication.title")}</h3>

              <p>{t("benefits.tax.communication.description")}</p>

              <a
                href="https://info.portaldasfinancas.gov.pt/pt/apoio_ao_contribuinte/Cidadaos/Dados_pessoais_familia/Dados_pessoais/Deficiencia_fiscalmente_relevante/Paginas/default.aspx"
                target="_blank"
                rel="noreferrer"
                className="benefits-button"
              >
                {t("benefits.tax.communication.link")}
                <i className="bi bi-box-arrow-up-right"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ESTACIONAMENTO */}
      <section className="benefits-parking">
        <div className="container benefits-container">
          <div className="benefits-parking-box">
            <div className="benefits-parking-icon">
              <i className="bi bi-p-square-fill"></i>
            </div>

            <div className="benefits-parking-content">
              <span className="benefits-section-label">
                {t("benefits.parking.label")}
              </span>

              <h2>{t("benefits.parking.title")}</h2>

              <p>{t("benefits.parking.paragraph1")}</p>

              <p>{t("benefits.parking.paragraph2")}</p>

              <div className="benefits-parking-highlight">
                <strong>{t("benefits.parking.highlightStrong")}</strong>

                <p>{t("benefits.parking.highlight")}</p>
              </div>

              <a
                href="https://www.gov.pt/servicos/pedir-o-cartao-de-estacionamento-para-pessoas-com-deficiencia"
                target="_blank"
                rel="noreferrer"
                className="benefits-button"
              >
                {t("benefits.parking.link")}
                <i className="bi bi-box-arrow-up-right"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* NÃO SÃO TODOS IGUAIS */}
      <section className="benefits-differences">
        <div className="container benefits-container">
          <div className="benefits-section-heading">
            <span className="benefits-section-label">
              {t("benefits.differences.label")}
            </span>

            <h2>{t("benefits.differences.title")}</h2>

            <p>{t("benefits.differences.description")}</p>
          </div>

          <div className="benefits-difference-list">
            <article>
              <div className="benefits-difference-name">AMIM</div>
              <p>{t("benefits.differences.amim")}</p>
            </article>

            <article>
              <div className="benefits-difference-name">PSI</div>
              <p>{t("benefits.differences.psi")}</p>
            </article>

            <article>
              <div className="benefits-difference-name">
                {t("benefits.differences.taxTitle")}
              </div>
              <p>{t("benefits.differences.tax")}</p>
            </article>

            <article>
              <div className="benefits-difference-name">
                {t("benefits.differences.priorityTitle")}
              </div>
              <p>{t("benefits.differences.priority")}</p>
            </article>

            <article>
              <div className="benefits-difference-name">
                {t("benefits.differences.parkingTitle")}
              </div>
              <p>{t("benefits.differences.parking")}</p>
            </article>

            <article>
              <div className="benefits-difference-name">
                {t("benefits.differences.productsTitle")}
              </div>
              <p>{t("benefits.differences.products")}</p>
            </article>
          </div>
        </div>
      </section>

      {/* CRIANÇAS E FAMÍLIAS */}
      <section className="benefits-family">
        <div className="container benefits-container">
          <div className="benefits-family-box">
            <div className="benefits-family-icon">
              <i className="bi bi-people-fill"></i>
            </div>

            <div>
              <span className="benefits-section-label">
                {t("benefits.family.label")}
              </span>

              <h2>{t("benefits.family.title")}</h2>

              <p>{t("benefits.family.description")}</p>

              <ul className="benefits-family-list">
                <li>{t("benefits.family.items.psi")}</li>
                <li>{t("benefits.family.items.allowance")}</li>
                <li>{t("benefits.family.items.education")}</li>
                <li>{t("benefits.family.items.products")}</li>
                <li>{t("benefits.family.items.social")}</li>
              </ul>

              <div className="benefits-family-note">
                <i className="bi bi-info-circle"></i>

                <p>{t("benefits.family.note")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ONDE PEDIR AJUDA */}
      <section className="benefits-help">
        <div className="container benefits-container">
          <div className="benefits-help-box">
            <div className="benefits-help-icon">
              <i className="bi bi-info-square"></i>
            </div>

            <div className="benefits-help-content">
              <span className="benefits-section-label">
                {t("benefits.help.label")}
              </span>

              <h2>{t("benefits.help.title")}</h2>

              <p>{t("benefits.help.description")}</p>

              <a
                href="https://www.gov.pt/servicos/balcao-da-inclusao"
                target="_blank"
                rel="noreferrer"
                className="benefits-button"
              >
                {t("benefits.help.link")}
                <i className="bi bi-box-arrow-up-right"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* NOTA */}
      <section className="benefits-update">
        <div className="container benefits-container">
          <div className="benefits-update-box">
            <i className="bi bi-arrow-repeat"></i>

            <div>
              <h2>{t("benefits.update.title")}</h2>

              <p>{t("benefits.update.description")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* FONTES */}
      <section className="benefits-sources">
        <div className="container benefits-container">
          <div className="benefits-section-heading">
            <span className="benefits-section-label">
              {t("benefits.sources.label")}
            </span>

            <h2>{t("benefits.sources.title")}</h2>
          </div>

          <article className="benefits-source-card">
            <i className="bi bi-building"></i>

            <div>
              <h3>{t("benefits.sources.gov.title")}</h3>

              <p>{t("benefits.sources.gov.description")}</p>

              <a
                href="https://www.gov.pt/guias/apoio-a-familia/pessoas-com-deficiencia"
                target="_blank"
                rel="noreferrer"
              >
                {t("benefits.sources.link")}
              </a>
            </div>
          </article>

          <article className="benefits-source-card">
            <i className="bi bi-receipt"></i>

            <div>
              <h3>{t("benefits.sources.tax.title")}</h3>

              <p>{t("benefits.sources.tax.description")}</p>

              <a
                href="https://info.portaldasfinancas.gov.pt/pt/apoio_ao_contribuinte/Cidadaos/Dados_pessoais_familia/Dados_pessoais/Deficiencia_fiscalmente_relevante/Paginas/default.aspx"
                target="_blank"
                rel="noreferrer"
              >
                {t("benefits.sources.link")}
              </a>
            </div>
          </article>

          <article className="benefits-source-card">
            <i className="bi bi-p-square"></i>

            <div>
              <h3>{t("benefits.sources.parking.title")}</h3>

              <p>{t("benefits.sources.parking.description")}</p>

              <a
                href="https://www.gov.pt/servicos/pedir-o-cartao-de-estacionamento-para-pessoas-com-deficiencia"
                target="_blank"
                rel="noreferrer"
              >
                {t("benefits.sources.link")}
              </a>
            </div>
          </article>

          <article className="benefits-source-card">
            <i className="bi bi-person-check"></i>

            <div>
              <h3>{t("benefits.sources.priority.title")}</h3>

              <p>{t("benefits.sources.priority.description")}</p>

              <a
                href="https://www.gov.pt/servicos/atendimento-prioritario"
                target="_blank"
                rel="noreferrer"
              >
                {t("benefits.sources.link")}
              </a>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

export default Benefits;
