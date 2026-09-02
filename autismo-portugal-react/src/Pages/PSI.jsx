import { Link } from "react-router-dom";
import "./PSI.css";

function PSI() {
  return (
    <main className="psi-page">
      {/* HERO */}
      <section className="psi-hero">
        <div className="container psi-container">
          <div className="psi-hero-content">
            <div className="psi-hero-text">
              <span className="psi-label">Direitos e apoios</span>

              <h1>PSI — Prestação Social para a Inclusão</h1>

              <p>
                A Prestação Social para a Inclusão é um apoio destinado a
                pessoas com deficiência ou incapacidade, com o objetivo de
                promover a autonomia, a inclusão social e reforçar a proteção
                económica em situações de maior vulnerabilidade.
              </p>
            </div>

            <div className="psi-hero-icon">
              <i className="bi bi-heart-pulse"></i>
            </div>
          </div>
        </div>
      </section>

      {/* QUEM PODE TER DIREITO */}
      <section className="psi-eligibility">
        <div className="container psi-container">
          <div className="psi-section-heading">
            <span className="psi-section-label">Começar pelo essencial</span>

            <h2>Quem pode ter direito?</h2>

            <p>
              Em regra, a PSI destina-se a pessoas com residência legal em
              Portugal e com um grau de incapacidade igual ou superior a 60%,
              desde que estejam cumpridas as restantes condições previstas.
            </p>
          </div>

          <div className="psi-eligibility-grid">
            <article className="psi-eligibility-card">
              <div className="psi-card-icon green">
                <i className="bi bi-file-earmark-medical"></i>
              </div>

              <h3>Grau de incapacidade</h3>

              <p>
                É necessário comprovar o grau de incapacidade reconhecido,
                normalmente através do AMIM.
              </p>
            </article>

            <article className="psi-eligibility-card">
              <div className="psi-card-icon blue">
                <i className="bi bi-house-heart"></i>
              </div>

              <h3>Residência</h3>

              <p>
                Existem condições relacionadas com a residência legal em
                Portugal que devem ser verificadas no momento do pedido.
              </p>
            </article>

            <article className="psi-eligibility-card">
              <div className="psi-card-icon purple">
                <i className="bi bi-clipboard-check"></i>
              </div>

              <h3>Outras condições</h3>

              <p>
                A atribuição e o valor podem depender da idade, rendimentos e
                situação concreta do beneficiário.
              </p>
            </article>
          </div>

          <div className="psi-important-note">
            <i className="bi bi-info-circle"></i>

            <p>
              Ter um AMIM com incapacidade igual ou superior a 60% não significa
              que todas as pessoas recebam exatamente o mesmo valor. Existem
              regras diferentes para cada componente da prestação.
            </p>
          </div>
        </div>
      </section>

      {/* DUAS PARTES */}
      <section className="psi-components">
        <div className="container psi-container">
          <div className="psi-components-image">
            <img
              src="/images/benefit.png"
              alt="Ilustração relacionada com benefícios e apoios sociais"
            />
          </div>

          <div className="psi-section-heading left">
            <span className="psi-section-label">Como funciona a prestação</span>

            <h2>A PSI tem duas partes</h2>

            <p>
              Atualmente, a Prestação Social para a Inclusão inclui uma
              componente base e um complemento. Cada uma tem uma finalidade e
              regras próprias.
            </p>
          </div>

          <div className="psi-components-grid">
            <article className="psi-component-card base">
              <div className="psi-component-number">
                <i className="bi bi-wallet2"></i>
              </div>

              <h3>Componente base</h3>

              <p>
                Destina-se a compensar encargos gerais acrescidos associados à
                deficiência e a contribuir para a autonomia e inclusão social da
                pessoa.
              </p>

              <div className="psi-value-box">
                <span>Valor de referência mensal em 2026</span>
                <strong>333,64 €</strong>
              </div>

              <p className="psi-small-note">
                Este é um valor de referência. O valor efetivamente recebido
                pode ser diferente consoante a situação e os rendimentos
                considerados.
              </p>
            </article>

            <article className="psi-component-card complement">
              <div className="psi-component-number">
                <i className="bi bi-piggy-bank"></i>
              </div>

              <h3>Complemento</h3>

              <p>
                É um reforço dirigido a pessoas com deficiência que vivem
                sozinhas ou pertencem a agregados familiares com insuficiência
                de recursos.
              </p>

              <div className="psi-value-box">
                <span>Valor de referência mensal em 2026</span>
                <strong>670 €</strong>
              </div>

              <p className="psi-small-note">
                O complemento depende da composição e dos rendimentos do
                agregado familiar e não corresponde automaticamente ao valor
                máximo de referência.
              </p>
            </article>
          </div>

          <div className="psi-values-warning">
            <i className="bi bi-exclamation-circle"></i>

            <div>
              <h3>Os valores não devem ser simplesmente somados</h3>

              <p>
                Os valores de referência da componente base e do complemento não
                significam que todas as pessoas possam receber automaticamente a
                soma dos dois valores. O montante depende das regras aplicáveis
                a cada componente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CRIANÇAS */}
      <section className="psi-children">
        <div className="container psi-container">
          <div className="psi-children-box">
            <div className="psi-children-icon">
              <i className="bi bi-people"></i>
            </div>

            <div>
              <span className="psi-section-label">Crianças e jovens</span>

              <h2>E no caso de uma criança?</h2>

              <p>
                Quando o beneficiário é menor de idade, o pedido pode ser
                apresentado pelos pais ou pelo representante legal, de acordo
                com as regras aplicáveis.
              </p>

              <p>
                É importante perceber que a prestação pertence à criança ou ao
                jovem com deficiência, mesmo quando são os pais que tratam do
                pedido e recebem o pagamento em sua representação.
              </p>

              <div className="psi-children-highlight">
                <strong>
                  A PSI não deve ser confundida com outros apoios destinados
                  especificamente aos pais ou ao agregado familiar.
                </strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AMIM */}
      <section className="psi-amim">
        <div className="container psi-container">
          <div className="psi-amim-box">
            <div className="psi-amim-icon">
              <i className="bi bi-file-earmark-medical"></i>
            </div>

            <div className="psi-amim-content">
              <span className="psi-section-label">
                Comprovar a incapacidade
              </span>

              <h2>Preciso do AMIM?</h2>

              <p>
                Para pedir a PSI é necessário comprovar o grau de incapacidade
                nos termos previstos. O AMIM é o documento habitualmente
                utilizado para essa certificação.
              </p>

              <Link to="/amim" className="psi-button">
                Saiba mais sobre o AMIM
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* COMO PEDIR */}
      <section className="psi-request">
        <div className="container psi-container">
          <div className="psi-section-heading">
            <span className="psi-section-label">Passo a passo</span>

            <h2>Como pedir a PSI?</h2>

            <p>
              Antes de iniciar o pedido, vale a pena reunir os documentos
              necessários e confirmar as condições aplicáveis à situação do
              beneficiário.
            </p>
          </div>

          <div className="psi-steps">
            <article className="psi-step">
              <span>1</span>

              <div>
                <h3>Confirmar o grau de incapacidade</h3>

                <p>
                  Verifique se existe certificação válida do grau de
                  incapacidade exigido para a prestação.
                </p>
              </div>
            </article>

            <article className="psi-step">
              <span>2</span>

              <div>
                <h3>Reunir os dados necessários</h3>

                <p>
                  Tenha consigo os dados de identificação, informação sobre o
                  grau de incapacidade e outros elementos que possam ser
                  solicitados pela Segurança Social.
                </p>
              </div>
            </article>

            <article className="psi-step">
              <span>3</span>

              <div>
                <h3>Apresentar o pedido</h3>

                <p>
                  O pedido é tratado através dos canais disponibilizados pela
                  Segurança Social.
                </p>
              </div>
            </article>

            <article className="psi-step">
              <span>4</span>

              <div>
                <h3>Aguardar a análise</h3>

                <p>
                  A Segurança Social analisa se estão reunidas as condições e
                  calcula o valor aplicável à situação.
                </p>
              </div>
            </article>

            <article className="psi-step">
              <span>5</span>

              <div>
                <h3>Comunicar alterações relevantes</h3>

                <p>
                  Mudanças de rendimentos, agregado familiar ou outras situações
                  relevantes podem ter impacto na prestação.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* RENDIMENTOS */}
      <section className="psi-income">
        <div className="container psi-container">
          <div className="psi-section-heading">
            <span className="psi-section-label">Cálculo da prestação</span>

            <h2>O rendimento da família conta?</h2>

            <p>Depende da componente da PSI e da situação do beneficiário.</p>
          </div>

          <div className="psi-income-grid">
            <article className="psi-income-card">
              <div className="psi-card-icon green">
                <i className="bi bi-wallet"></i>
              </div>

              <h3>Componente base</h3>

              <p>
                Existem regras próprias relativas aos rendimentos considerados e
                à forma como estes podem influenciar o valor da componente base.
              </p>
            </article>

            <article className="psi-income-card">
              <div className="psi-card-icon yellow">
                <i className="bi bi-house"></i>
              </div>

              <h3>Complemento</h3>

              <p>
                O complemento destina-se a combater situações de insuficiência
                de recursos. Por isso, a composição e os rendimentos do agregado
                familiar são particularmente relevantes.
              </p>
            </article>
          </div>

          <div className="psi-income-note">
            <i className="bi bi-calculator"></i>

            <p>
              As regras de cálculo podem ser complexas e os valores são
              atualizados. Para saber quanto poderá receber numa situação
              concreta, confirme os critérios atuais junto da Segurança Social.
            </p>
          </div>
        </div>
      </section>

      {/* TRABALHAR E RECEBER */}
      <section className="psi-work">
        <div className="container psi-container">
          <div className="psi-work-box">
            <div className="psi-work-icon">
              <i className="bi bi-briefcase"></i>
            </div>

            <div>
              <span className="psi-section-label">PSI e emprego</span>

              <h2>É possível trabalhar e receber PSI?</h2>

              <p>
                Receber a PSI não significa necessariamente que a pessoa esteja
                impedida de trabalhar.
              </p>

              <p>
                Existem regras que permitem a acumulação da componente base com
                rendimentos de trabalho dentro dos limites previstos na
                legislação.
              </p>

              <div className="psi-work-highlight">
                <strong>
                  Começar a trabalhar não significa automaticamente perder a
                  PSI.
                </strong>
                <p>
                  No entanto, os rendimentos podem influenciar o valor recebido,
                  pelo que alterações devem ser comunicadas e analisadas de
                  acordo com as regras atuais.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NÃO É O MESMO QUE */}
      <section className="psi-differences">
        <div className="container psi-container">
          <div className="psi-section-heading">
            <span className="psi-section-label">Evitar confusões</span>

            <h2>A PSI não é o mesmo que...</h2>
          </div>

          <div className="psi-differences-grid">
            <article className="psi-difference-card">
              <i className="bi bi-file-earmark-medical"></i>

              <h3>AMIM</h3>

              <p>
                O AMIM certifica o grau de incapacidade. A PSI é uma prestação
                financeira.
              </p>
            </article>

            <article className="psi-difference-card">
              <i className="bi bi-mortarboard"></i>

              <h3>Subsídio de Educação Especial</h3>

              <p>
                É um apoio diferente, com finalidade e condições de acesso
                próprias.
              </p>
            </article>

            <article className="psi-difference-card">
              <i className="bi bi-person-plus"></i>

              <h3>Bonificação por deficiência</h3>

              <p>
                Também corresponde a outro apoio da Segurança Social, sujeito a
                regras específicas.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ONDE PEDIR AJUDA */}
      <section className="psi-help">
        <div className="container psi-container">
          <div className="psi-help-box">
            <div className="psi-help-icon">
              <i className="bi bi-info-square"></i>
            </div>

            <div className="psi-help-content">
              <span className="psi-section-label">
                Precisa de esclarecimentos?
              </span>

              <h2>Balcão da Inclusão</h2>

              <p>
                O Balcão da Inclusão pode prestar informação sobre a Prestação
                Social para a Inclusão, AMIM, benefícios fiscais, proteção
                social e outros direitos relacionados com deficiência ou
                incapacidade.
              </p>

              <a
                href="https://www.gov.pt/servicos/balcao-da-inclusao"
                target="_blank"
                rel="noreferrer"
                className="psi-button"
              >
                Consultar o Balcão da Inclusão
                <i className="bi bi-box-arrow-up-right"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* NOTA ATUALIZAÇÃO */}
      <section className="psi-update">
        <div className="container psi-container">
          <div className="psi-update-box">
            <i className="bi bi-arrow-repeat"></i>

            <div>
              <h2>Confirme sempre os valores atuais</h2>

              <p>
                Os valores de referência, limites de rendimentos e regras de
                algumas prestações sociais podem ser atualizados. Antes de fazer
                o pedido ou tomar uma decisão com base num determinado valor,
                consulte a informação mais recente da Segurança Social ou do
                gov.pt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FONTES */}
      <section className="psi-sources">
        <div className="container psi-container">
          <div className="psi-section-heading">
            <span className="psi-section-label">Informação oficial</span>

            <h2>Fontes e recursos</h2>
          </div>

          <article className="psi-source-card">
            <i className="bi bi-building"></i>

            <div>
              <h3>gov.pt — Prestação Social para a Inclusão</h3>

              <p>
                Informação oficial sobre condições de acesso, pedido e
                funcionamento da PSI.
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

          <article className="psi-source-card">
            <i className="bi bi-person-heart"></i>

            <div>
              <h3>gov.pt — Balcão da Inclusão</h3>

              <p>
                Serviço de informação sobre deficiência, proteção social, AMIM,
                PSI e outros direitos.
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
        </div>
      </section>
    </main>
  );
}

export default PSI;
