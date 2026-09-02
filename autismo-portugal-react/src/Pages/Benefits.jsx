import { Link } from "react-router-dom";
import "./Benefits.css";

function Benefits() {
  return (
    <main className="benefits-page">
      {/* HERO */}
      <section className="benefits-hero">
        <div className="container benefits-container">
          <div className="benefits-hero-content">
            <div className="benefits-hero-text">
              <span className="benefits-label">Direitos e apoios</span>

              <h1>Benefícios e apoios</h1>

              <p>
                Em Portugal existem diferentes prestações sociais, benefícios
                fiscais, direitos e apoios destinados a pessoas com deficiência
                ou incapacidade.
              </p>

              <p>
                Cada medida tem condições próprias. Ter um diagnóstico ou um
                AMIM não significa ter automaticamente acesso a todos os
                benefícios.
              </p>
            </div>

            <div className="benefits-hero-image">
              <img
                src="/images/social.png"
                alt="Ilustração sobre benefícios e apoios sociais"
              />
            </div>
          </div>
        </div>
      </section>

      {/* POR ONDE COMEÇAR */}
      <section className="benefits-start">
        <div className="container benefits-container">
          <div className="benefits-section-heading">
            <span className="benefits-section-label">
              Orientar-se entre os apoios
            </span>

            <h2>Por onde começar?</h2>

            <p>
              Nem todos os direitos dependem dos mesmos critérios. Um primeiro
              passo pode ser perceber quais documentos já possui e quais apoios
              se aplicam à sua situação.
            </p>
          </div>

          <div className="benefits-flow">
            <article className="benefits-flow-card">
              <span>1</span>
              <i className="bi bi-clipboard2-pulse"></i>
              <h3>Existe um diagnóstico?</h3>
              <p>
                O diagnóstico identifica a condição clínica, mas não determina
                sozinho os benefícios disponíveis.
              </p>
            </article>

            <div className="benefits-flow-arrow">
              <i className="bi bi-arrow-right"></i>
            </div>

            <article className="benefits-flow-card">
              <span>2</span>
              <i className="bi bi-file-earmark-medical"></i>
              <h3>Existe AMIM?</h3>
              <p>
                Muitos direitos utilizam o grau de incapacidade certificado no
                AMIM como um dos critérios de acesso.
              </p>
            </article>

            <div className="benefits-flow-arrow">
              <i className="bi bi-arrow-right"></i>
            </div>

            <article className="benefits-flow-card">
              <span>3</span>
              <i className="bi bi-search-heart"></i>
              <h3>Que apoios se aplicam?</h3>
              <p>
                Depois é necessário verificar individualmente os requisitos de
                cada prestação ou benefício.
              </p>
            </article>
          </div>

          <div className="benefits-start-note">
            <i className="bi bi-info-circle"></i>

            <p>
              <strong>Não existe um único “pacote de benefícios”.</strong> Cada
              apoio tem regras próprias relativas a incapacidade, idade,
              rendimentos, residência ou outras condições.
            </p>
          </div>
        </div>
      </section>

      {/* PRINCIPAIS APOIOS */}
      <section className="benefits-main">
        <div className="container benefits-container">
          <div className="benefits-section-heading">
            <span className="benefits-section-label">Guia rápido</span>

            <h2>Principais benefícios e apoios</h2>

            <p>
              Estes são alguns dos direitos e apoios que podem ser relevantes
              para pessoas com deficiência e respetivas famílias.
            </p>
          </div>

          <div className="benefits-grid">
            {/* PSI */}
            <article className="benefits-card green">
              <div className="benefits-card-icon">
                <i className="bi bi-wallet2"></i>
              </div>

              <h3>Prestação Social para a Inclusão</h3>

              <p>
                Prestação destinada a pessoas com deficiência da qual resulte,
                em regra, um grau de incapacidade igual ou superior a 60%,
                sujeita às respetivas condições.
              </p>

              <Link to="/psi" className="benefits-card-link">
                Saiba mais sobre a PSI
                <i className="bi bi-arrow-right"></i>
              </Link>
            </article>

            {/* BENEFÍCIOS FISCAIS */}
            <article className="benefits-card blue">
              <div className="benefits-card-icon">
                <i className="bi bi-receipt"></i>
              </div>

              <h3>Benefícios fiscais</h3>

              <p>
                Pessoas com deficiência fiscalmente relevante podem beneficiar
                de medidas específicas em impostos como IRS, IUC, ISV e IVA,
                conforme as condições aplicáveis.
              </p>

              <a
                href="https://info.portaldasfinancas.gov.pt/pt/apoio_ao_contribuinte/Cidadaos/Dados_pessoais_familia/Dados_pessoais/Deficiencia_fiscalmente_relevante/Paginas/default.aspx"
                target="_blank"
                rel="noreferrer"
                className="benefits-card-link"
              >
                Consultar Autoridade Tributária
                <i className="bi bi-box-arrow-up-right"></i>
              </a>
            </article>

            {/* PRIORITÁRIO */}
            <article className="benefits-card purple">
              <div className="benefits-card-icon">
                <i className="bi bi-person-check"></i>
              </div>

              <h3>Atendimento prioritário</h3>

              <p>
                Pessoas com incapacidade igual ou superior a 60%, comprovada por
                AMIM, podem pedir atendimento prioritário nos serviços
                presenciais abrangidos pela legislação.
              </p>

              <a
                href="https://www.gov.pt/servicos/atendimento-prioritario"
                target="_blank"
                rel="noreferrer"
                className="benefits-card-link"
              >
                Consultar informação oficial
                <i className="bi bi-box-arrow-up-right"></i>
              </a>
            </article>

            {/* ESTACIONAMENTO */}
            <article className="benefits-card yellow">
              <div className="benefits-card-icon">
                <i className="bi bi-p-square"></i>
              </div>

              <h3>Cartão de estacionamento</h3>

              <p>
                Pessoas com Perturbação do Espetro do Autismo e grau de
                incapacidade igual ou superior a 60% estão entre as pessoas que
                podem pedir o cartão de estacionamento.
              </p>

              <a
                href="https://www.gov.pt/servicos/pedir-o-cartao-de-estacionamento-para-pessoas-com-deficiencia"
                target="_blank"
                rel="noreferrer"
                className="benefits-card-link"
              >
                Consultar condições
                <i className="bi bi-box-arrow-up-right"></i>
              </a>
            </article>

            {/* EDUCAÇÃO ESPECIAL */}
            <article className="benefits-card pink">
              <div className="benefits-card-icon">
                <i className="bi bi-mortarboard"></i>
              </div>

              <h3>Subsídio de Educação Especial</h3>

              <p>
                Apoio destinado a determinadas situações em que crianças ou
                jovens com deficiência necessitam de apoio especializado,
                sujeito a condições próprias.
              </p>

              <a
                href="https://www.gov.pt/guias/prestacoes-e-beneficios-sociais-e-de-saude"
                target="_blank"
                rel="noreferrer"
                className="benefits-card-link"
              >
                Consultar informação oficial
                <i className="bi bi-box-arrow-up-right"></i>
              </a>
            </article>

            {/* BONIFICAÇÃO */}
            <article className="benefits-card teal">
              <div className="benefits-card-icon">
                <i className="bi bi-people"></i>
              </div>

              <h3>Bonificação por deficiência</h3>

              <p>
                Acréscimo ao abono de família disponível em situações
                específicas para crianças e jovens com deficiência, de acordo
                com as regras e limites de idade aplicáveis.
              </p>

              <a
                href="https://www.gov.pt/guias/prestacoes-e-beneficios-sociais-e-de-saude"
                target="_blank"
                rel="noreferrer"
                className="benefits-card-link"
              >
                Consultar condições
                <i className="bi bi-box-arrow-up-right"></i>
              </a>
            </article>

            {/* PRODUTOS */}
            <article className="benefits-card orange">
              <div className="benefits-card-icon">
                <i className="bi bi-universal-access"></i>
              </div>

              <h3>Produtos de apoio</h3>

              <p>
                Existem produtos, equipamentos ou dispositivos destinados a
                facilitar a autonomia, participação e funcionalidade das pessoas
                com deficiência ou incapacidade.
              </p>

              <a
                href="https://www.gov.pt/guias/apoio-a-familia/pessoas-com-deficiencia"
                target="_blank"
                rel="noreferrer"
                className="benefits-card-link"
              >
                Consultar apoios
                <i className="bi bi-box-arrow-up-right"></i>
              </a>
            </article>

            {/* APOIOS SOCIAIS */}
            <article className="benefits-card navy">
              <div className="benefits-card-icon">
                <i className="bi bi-house-heart"></i>
              </div>

              <h3>Respostas e apoios sociais</h3>

              <p>
                Pessoas em situação de dependência, vulnerabilidade ou
                desigualdade socioeconómica podem ter acesso a diferentes
                respostas sociais e serviços de acompanhamento.
              </p>

              <a
                href="https://www.gov.pt/servicos/requerer-apoios-sociais-para-pessoas-com-deficiencia"
                target="_blank"
                rel="noreferrer"
                className="benefits-card-link"
              >
                Consultar respostas sociais
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
            <span className="benefits-section-label">Fiscalidade</span>

            <h2>Benefícios fiscais</h2>

            <p>
              Em termos fiscais, considera-se deficiência fiscalmente relevante
              aquela que corresponda a um grau de incapacidade igual ou superior
              a 60%, devidamente comprovado através do AMIM.
            </p>
          </div>

          <div className="benefits-tax-grid">
            <article className="benefits-tax-card">
              <span>IRS</span>
              <p>
                Existem regras específicas relativas à tributação e deduções das
                pessoas com deficiência fiscalmente relevante.
              </p>
            </article>

            <article className="benefits-tax-card">
              <span>IUC</span>
              <p>
                Podem existir benefícios relacionados com o Imposto Único de
                Circulação, quando estejam preenchidas as condições legais.
              </p>
            </article>

            <article className="benefits-tax-card">
              <span>ISV</span>
              <p>
                Existem situações em que pode ser aplicável benefício no Imposto
                Sobre Veículos.
              </p>
            </article>

            <article className="benefits-tax-card">
              <span>IVA</span>
              <p>
                Alguns bens ou operações relacionados com deficiência podem
                beneficiar das regras específicas previstas para IVA.
              </p>
            </article>
          </div>

          <div className="benefits-tax-highlight">
            <i className="bi bi-file-earmark-check"></i>

            <div>
              <h3>É necessário comunicar o AMIM às Finanças</h3>

              <p>
                Para beneficiar do regime fiscal aplicável às pessoas com
                deficiência fiscalmente relevante, a incapacidade deve ser
                comunicada à Autoridade Tributária.
              </p>

              <a
                href="https://info.portaldasfinancas.gov.pt/pt/apoio_ao_contribuinte/Cidadaos/Dados_pessoais_familia/Dados_pessoais/Deficiencia_fiscalmente_relevante/Paginas/default.aspx"
                target="_blank"
                rel="noreferrer"
                className="benefits-button"
              >
                Ver informação nas Finanças
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
                Uma informação importante para famílias
              </span>

              <h2>Cartão de estacionamento e autismo</h2>

              <p>
                A Perturbação do Espetro do Autismo aparece expressamente entre
                as situações que podem dar acesso ao cartão de estacionamento,
                quando existe um grau de incapacidade igual ou superior a 60%.
              </p>

              <p>
                O cartão é atribuído à pessoa com deficiência e não a um
                automóvel específico. Por isso, pode ser utilizado no veículo
                que estiver a transportar a pessoa titular.
              </p>

              <div className="benefits-parking-highlight">
                <strong>
                  O cartão não significa simplesmente poder estacionar em
                  qualquer lugar.
                </strong>

                <p>
                  Existem regras próprias sobre os locais e circunstâncias em
                  que pode ser utilizado.
                </p>
              </div>

              <a
                href="https://www.gov.pt/servicos/pedir-o-cartao-de-estacionamento-para-pessoas-com-deficiencia"
                target="_blank"
                rel="noreferrer"
                className="benefits-button"
              >
                Ver como pedir o cartão
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
              Documentos e benefícios diferentes
            </span>

            <h2>Não são todos a mesma coisa</h2>

            <p>
              É fácil confundir os diferentes documentos, prestações e direitos.
              Cada um tem uma função diferente.
            </p>
          </div>

          <div className="benefits-difference-list">
            <article>
              <div className="benefits-difference-name">AMIM</div>
              <p>Comprova oficialmente o grau de incapacidade.</p>
            </article>

            <article>
              <div className="benefits-difference-name">PSI</div>
              <p>É uma prestação financeira da Segurança Social.</p>
            </article>

            <article>
              <div className="benefits-difference-name">Benefícios fiscais</div>
              <p>
                Correspondem a regimes, deduções ou isenções previstas na
                legislação fiscal.
              </p>
            </article>

            <article>
              <div className="benefits-difference-name">
                Atendimento prioritário
              </div>
              <p>
                Permite solicitar prioridade no atendimento presencial abrangido
                pela legislação.
              </p>
            </article>

            <article>
              <div className="benefits-difference-name">
                Cartão de estacionamento
              </div>
              <p>
                Permite utilizar os lugares e condições de estacionamento
                previstos para pessoas com deficiência.
              </p>
            </article>

            <article>
              <div className="benefits-difference-name">Produtos de apoio</div>
              <p>
                São equipamentos ou dispositivos destinados a apoiar
                funcionalidade, autonomia e participação.
              </p>
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
                Crianças e famílias
              </span>

              <h2>Existem apoios diferentes para situações diferentes</h2>

              <p>
                No caso das crianças e jovens, podem existir vários apoios
                relacionados com deficiência, educação, cuidados e proteção
                social.
              </p>

              <ul className="benefits-family-list">
                <li>Prestação Social para a Inclusão, quando aplicável</li>
                <li>Bonificação por deficiência</li>
                <li>Subsídio de Educação Especial</li>
                <li>Produtos de apoio</li>
                <li>Respostas e serviços sociais</li>
              </ul>

              <div className="benefits-family-note">
                <i className="bi bi-info-circle"></i>

                <p>
                  A existência de um diagnóstico de autismo não significa que
                  todos estes apoios sejam automaticamente atribuídos. Cada
                  prestação tem critérios próprios.
                </p>
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
                Não sabe qual apoio procurar?
              </span>

              <h2>Balcão da Inclusão</h2>

              <p>
                O Balcão da Inclusão presta informação sobre deficiência e
                incapacidade e pode ajudar a esclarecer dúvidas relacionadas com
                AMIM, proteção social, benefícios fiscais, educação, emprego,
                estacionamento e outros direitos.
              </p>

              <a
                href="https://www.gov.pt/servicos/balcao-da-inclusao"
                target="_blank"
                rel="noreferrer"
                className="benefits-button"
              >
                Consultar o Balcão da Inclusão
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
              <h2>Os critérios podem mudar</h2>

              <p>
                Valores, limites de rendimentos, requisitos e procedimentos
                podem ser atualizados. Antes de fazer um pedido, confirme sempre
                as condições atuais no serviço oficial responsável.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FONTES */}
      <section className="benefits-sources">
        <div className="container benefits-container">
          <div className="benefits-section-heading">
            <span className="benefits-section-label">Informação oficial</span>

            <h2>Fontes e recursos</h2>
          </div>

          <article className="benefits-source-card">
            <i className="bi bi-building"></i>

            <div>
              <h3>gov.pt — Pessoas com deficiência</h3>

              <p>
                Guia oficial sobre prestações, apoio às famílias, produtos de
                apoio e outras respostas.
              </p>

              <a
                href="https://www.gov.pt/guias/apoio-a-familia/pessoas-com-deficiencia"
                target="_blank"
                rel="noreferrer"
              >
                Consultar fonte
              </a>
            </div>
          </article>

          <article className="benefits-source-card">
            <i className="bi bi-receipt"></i>

            <div>
              <h3>Autoridade Tributária — Deficiência fiscalmente relevante</h3>

              <p>
                Informação oficial sobre benefícios fiscais e comunicação do
                grau de incapacidade às Finanças.
              </p>

              <a
                href="https://info.portaldasfinancas.gov.pt/pt/apoio_ao_contribuinte/Cidadaos/Dados_pessoais_familia/Dados_pessoais/Deficiencia_fiscalmente_relevante/Paginas/default.aspx"
                target="_blank"
                rel="noreferrer"
              >
                Consultar fonte
              </a>
            </div>
          </article>

          <article className="benefits-source-card">
            <i className="bi bi-p-square"></i>

            <div>
              <h3>gov.pt — Cartão de estacionamento</h3>

              <p>
                Condições de acesso ao cartão de estacionamento para pessoas com
                deficiência.
              </p>

              <a
                href="https://www.gov.pt/servicos/pedir-o-cartao-de-estacionamento-para-pessoas-com-deficiencia"
                target="_blank"
                rel="noreferrer"
              >
                Consultar fonte
              </a>
            </div>
          </article>

          <article className="benefits-source-card">
            <i className="bi bi-person-check"></i>

            <div>
              <h3>gov.pt — Atendimento prioritário</h3>

              <p>
                Informação oficial sobre quem pode solicitar atendimento
                prioritário e onde este direito se aplica.
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
        </div>
      </section>
    </main>
  );
}

export default Benefits;
