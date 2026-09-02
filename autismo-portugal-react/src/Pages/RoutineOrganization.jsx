import { Link } from "react-router-dom";
import "./RoutineOrganization.css";

function RoutineOrganization() {
  return (
    <main className="routine-page">
      {/* HERO */}
      <section className="routine-hero">
        <div className="container routine-container">
          <div className="routine-hero-content">
            <div className="routine-hero-text">
              <span className="routine-label">Vida diária</span>

              <h1>Rotina e organização</h1>

              <p>
                Para muitas pessoas autistas, saber o que vai acontecer e em que
                ordem pode reduzir a incerteza, facilitar transições e tornar o
                dia mais previsível.
              </p>

              <p>
                Ter rotina não significa viver de forma rígida. O objetivo é
                criar estrutura suficiente para tornar o quotidiano mais
                compreensível e sustentável.
              </p>
            </div>

            <div className="routine-hero-icon">
              <i className="bi bi-calendar-check"></i>
            </div>
          </div>
        </div>
      </section>

      {/* PREVISIBILIDADE */}
      <section className="routine-predictability">
        <div className="container routine-container">
          <div className="routine-section-heading">
            <span className="routine-section-label">
              Tornar o dia mais previsível
            </span>

            <h2>Por que a previsibilidade pode ajudar?</h2>

            <p>
              Algumas pessoas autistas beneficiam particularmente de estrutura,
              antecipação e informação clara sobre aquilo que vai acontecer.
            </p>
          </div>

          <div className="routine-benefits-grid">
            <article className="routine-benefit-card blue">
              <i className="bi bi-question-circle"></i>
              <h3>Menos incerteza</h3>
              <p>
                Saber o que vai acontecer pode reduzir o esforço de tentar
                antecipar constantemente diferentes possibilidades.
              </p>
            </article>

            <article className="routine-benefit-card green">
              <i className="bi bi-arrow-left-right"></i>
              <h3>Transições mais claras</h3>
              <p>
                Conhecer o que termina e o que vem a seguir pode facilitar a
                mudança entre atividades.
              </p>
            </article>

            <article className="routine-benefit-card purple">
              <i className="bi bi-list-check"></i>
              <h3>Menos decisões</h3>
              <p>
                Uma rotina pode reduzir a quantidade de pequenas decisões que
                precisam de ser tomadas ao longo do dia.
              </p>
            </article>

            <article className="routine-benefit-card yellow">
              <i className="bi bi-clock-history"></i>
              <h3>Preparação antecipada</h3>
              <p>
                Saber quando algo vai acontecer permite organizar mentalmente
                tempo, energia e estratégias de apoio.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ROTINA X RIGIDEZ */}
      <section className="routine-flexibility">
        <div className="container routine-container">
          <div className="routine-section-heading">
            <span className="routine-section-label">
              Estrutura sem transformar tudo numa regra
            </span>

            <h2>Rotina não é o mesmo que rigidez</h2>
          </div>

          <div className="routine-compare-grid">
            <article className="routine-compare-card helpful">
              <div className="routine-compare-icon">
                <i className="bi bi-check-circle"></i>
              </div>

              <h3>Quando a rotina ajuda</h3>

              <ul>
                <li>deixa claro o que vai acontecer;</li>
                <li>reduz esforço mental;</li>
                <li>facilita a preparação;</li>
                <li>permite alguma flexibilidade;</li>
                <li>pode ser adaptada quando necessário.</li>
              </ul>
            </article>

            <article className="routine-compare-card difficult">
              <div className="routine-compare-icon">
                <i className="bi bi-exclamation-circle"></i>
              </div>

              <h3>Quando começa a gerar sofrimento</h3>

              <ul>
                <li>qualquer mudança provoca sofrimento muito intenso;</li>
                <li>a pessoa sente que não consegue sair da sequência;</li>
                <li>a rotina começa a impedir atividades importantes;</li>
                <li>a necessidade de controlo aumenta progressivamente;</li>
                <li>a ansiedade domina a organização do dia.</li>
              </ul>
            </article>
          </div>

          <div className="routine-flexibility-note">
            <i className="bi bi-info-circle"></i>
            <p>
              Se uma rotina está a funcionar como estratégia de segurança
              perante ansiedade intensa, retirá-la de forma abrupta pode tornar
              a situação mais difícil.
            </p>
          </div>
        </div>
      </section>

      {/* ORGANIZAR VISUALMENTE */}
      <section className="routine-visual">
        <div className="container routine-container">
          <div className="routine-section-heading">
            <span className="routine-section-label">
              Colocar a informação fora da cabeça
            </span>

            <h2>Organizar o dia visualmente</h2>

            <p>
              Não existe um sistema universal. Algumas pessoas preferem uma
              agenda em papel, outras funcionam melhor com o telemóvel,
              pictogramas, alarmes ou listas simples.
            </p>
          </div>

          <div className="routine-tools-grid">
            <article>
              <i className="bi bi-calendar3"></i>
              <span>Calendário</span>
            </article>

            <article>
              <i className="bi bi-card-checklist"></i>
              <span>Checklist</span>
            </article>

            <article>
              <i className="bi bi-grid-3x3-gap"></i>
              <span>Quadro semanal</span>
            </article>

            <article>
              <i className="bi bi-alarm"></i>
              <span>Alarmes</span>
            </article>

            <article>
              <i className="bi bi-phone"></i>
              <span>Aplicações</span>
            </article>

            <article>
              <i className="bi bi-sticky"></i>
              <span>Post-its</span>
            </article>
          </div>

          <div className="routine-visual-highlight">
            <i className="bi bi-lightbulb"></i>
            <p>
              <strong>
                O melhor sistema não é necessariamente o mais bonito ou
                completo.
              </strong>{" "}
              É aquele que a pessoa realmente consegue consultar e utilizar.
            </p>
          </div>
        </div>
      </section>

      {/* DIVIDIR TAREFAS */}
      <section className="routine-steps">
        <div className="container routine-container">
          <div className="routine-section-heading">
            <span className="routine-section-label">
              Tornar tarefas abstratas mais concretas
            </span>

            <h2>Dividir tarefas grandes em passos pequenos</h2>

            <p>
              Instruções como “arruma o quarto” ou “trata dos documentos” podem
              envolver muitas decisões escondidas dentro de uma única frase.
            </p>
          </div>

          <div className="routine-example-grid">
            <article className="routine-example-card">
              <div className="routine-example-heading">
                <i className="bi bi-house"></i>
                <h3>Em vez de “arrumar o quarto”</h3>
              </div>

              <ol>
                <li>colocar roupa suja no cesto;</li>
                <li>guardar roupa limpa;</li>
                <li>colocar lixo no caixote;</li>
                <li>arrumar objetos da secretária;</li>
                <li>fazer a cama.</li>
              </ol>
            </article>

            <article className="routine-example-card">
              <div className="routine-example-heading">
                <i className="bi bi-folder2-open"></i>
                <h3>Em vez de “tratar dos documentos”</h3>
              </div>

              <ol>
                <li>encontrar o documento;</li>
                <li>verificar o prazo;</li>
                <li>abrir o site necessário;</li>
                <li>preencher o formulário;</li>
                <li>anexar os ficheiros;</li>
                <li>guardar o comprovativo.</li>
              </ol>
            </article>
          </div>
        </div>
      </section>

      {/* INICIAÇÃO */}
      <section className="routine-initiation">
        <div className="container routine-container">
          <div className="routine-initiation-box">
            <div className="routine-initiation-icon">
              <i className="bi bi-play-circle"></i>
            </div>

            <div>
              <span className="routine-section-label">
                Quando saber o que fazer não é suficiente
              </span>

              <h2>Começar uma tarefa também pode ser difícil</h2>

              <p>
                Uma pessoa pode compreender perfeitamente o que precisa fazer e
                ainda assim ter dificuldade em iniciar a tarefa.
              </p>

              <ul>
                <li>não saber por onde começar;</li>
                <li>ter dificuldade em escolher entre várias opções;</li>
                <li>não conseguir mudar da atividade atual para outra;</li>
                <li>ter dificuldade em estimar quanto tempo vai demorar;</li>
                <li>
                  não conseguir retomar facilmente depois de uma interrupção.
                </li>
              </ul>

              <div className="routine-initiation-highlight">
                <strong>
                  Saber fazer e conseguir começar não são a mesma coisa.
                </strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRANSIÇÕES */}
      <section className="routine-transitions">
        <div className="container routine-container">
          <div className="routine-section-heading">
            <span className="routine-section-label">
              Passar de uma atividade para outra
            </span>

            <h2>As transições também exigem energia</h2>

            <p>
              Interromper uma atividade, mudar de ambiente ou começar algo novo
              pode exigir mais preparação do que parece.
            </p>
          </div>

          <div className="routine-transition-examples">
            <span>parar um jogo para tomar banho</span>
            <span>sair de casa</span>
            <span>mudar de sala</span>
            <span>terminar o fim de semana</span>
            <span>começar uma obrigação</span>
            <span>interromper uma atividade preferida</span>
          </div>

          <div className="routine-transition-help">
            <article>
              <i className="bi bi-bell"></i>
              <h3>Avisar antes</h3>
              <p>
                Antecipar que uma atividade vai terminar pode tornar a mudança
                menos abrupta.
              </p>
            </article>

            <article>
              <i className="bi bi-hourglass-split"></i>
              <h3>Usar temporizadores</h3>
              <p>Um timer pode tornar mais visível quanto tempo ainda falta.</p>
            </article>

            <article>
              <i className="bi bi-arrow-right-circle"></i>
              <h3>Mostrar o que vem depois</h3>
              <p>Explicar a próxima etapa torna a transição mais previsível.</p>
            </article>
          </div>
        </div>
      </section>

      {/* TEMPO */}
      <section className="routine-time">
        <div className="container routine-container">
          <div className="routine-time-box">
            <div className="routine-time-icon">
              <i className="bi bi-clock"></i>
            </div>

            <div>
              <span className="routine-section-label">
                Tornar o tempo mais concreto
              </span>

              <h2>“Daqui a pouco” pode ser demasiado vago</h2>

              <p>
                Para algumas pessoas, expressões imprecisas como “mais tarde”,
                “já vamos” ou “daqui a pouco” dão pouca informação sobre quanto
                tempo realmente falta.
              </p>

              <div className="routine-time-examples">
                <div>
                  <span className="routine-time-bad">
                    “Saímos daqui a pouco.”
                  </span>
                </div>

                <i className="bi bi-arrow-right"></i>

                <div>
                  <span className="routine-time-good">“Saímos às 15:30.”</span>
                </div>
              </div>

              <p>
                Relógios, temporizadores, alarmes e horários concretos podem
                ajudar a tornar a passagem do tempo mais visível.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MUDANÇAS */}
      <section className="routine-changes">
        <div className="container routine-container">
          <div className="routine-section-heading">
            <span className="routine-section-label">
              Quando o plano deixa de ser o plano
            </span>

            <h2>O que fazer quando alguma coisa muda?</h2>
          </div>

          <div className="routine-change-flow">
            <article>
              <span>Plano A</span>
              <h3>Consulta às 14:00</h3>
            </article>

            <i className="bi bi-arrow-right"></i>

            <article>
              <span>Mudança</span>
              <h3>A consulta atrasou 40 minutos</h3>
            </article>

            <i className="bi bi-arrow-right"></i>

            <article>
              <span>Novo plano</span>
              <h3>Consulta prevista para as 14:40</h3>
            </article>
          </div>

          <div className="routine-changes-highlight">
            <i className="bi bi-info-circle"></i>

            <p>
              Quando algo muda, pode ajudar explicar não apenas{" "}
              <strong>o que mudou</strong>, mas também{" "}
              <strong>o que continua igual</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* ENERGIA */}
      <section className="routine-energy">
        <div className="container routine-container">
          <div className="routine-section-heading">
            <span className="routine-section-label">
              Organização também envolve recuperação
            </span>

            <h2>Energia também faz parte do planeamento</h2>

            <p>
              Duas atividades com a mesma duração podem consumir quantidades de
              energia completamente diferentes.
            </p>
          </div>

          <div className="routine-energy-grid">
            <article>
              <i className="bi bi-briefcase"></i>
              <span>trabalho ou escola</span>
            </article>

            <article>
              <i className="bi bi-person-vcard"></i>
              <span>consultas</span>
            </article>

            <article>
              <i className="bi bi-people"></i>
              <span>eventos sociais</span>
            </article>

            <article>
              <i className="bi bi-bus-front"></i>
              <span>deslocações</span>
            </article>

            <article>
              <i className="bi bi-volume-up"></i>
              <span>ambientes sensorialmente intensos</span>
            </article>

            <article>
              <i className="bi bi-chat-dots"></i>
              <span>interação social prolongada</span>
            </article>
          </div>

          <div className="routine-energy-note">
            <i className="bi bi-battery-half"></i>

            <p>
              Um calendário aparentemente vazio não significa necessariamente
              que a pessoa tenha energia disponível. Descanso e recuperação
              também podem precisar de espaço na rotina.
            </p>
          </div>
        </div>
      </section>

      {/* CRIANÇAS */}
      <section className="routine-children">
        <div className="container routine-container">
          <div className="routine-section-heading">
            <span className="routine-section-label">
              Crianças e adolescentes
            </span>

            <h2>Rotinas simples podem tornar o dia mais claro</h2>
          </div>

          <div className="routine-child-grid">
            <article className="routine-child-card morning">
              <div className="routine-child-heading">
                <i className="bi bi-sun"></i>
                <h3>Rotina da manhã</h3>
              </div>

              <ol>
                <li>acordar</li>
                <li>vestir</li>
                <li>tomar o pequeno-almoço</li>
                <li>lavar os dentes</li>
                <li>pegar na mochila</li>
                <li>sair</li>
              </ol>
            </article>

            <article className="routine-child-card afternoon">
              <div className="routine-child-heading">
                <i className="bi bi-house-heart"></i>
                <h3>Depois da escola</h3>
              </div>

              <ol>
                <li>chegar a casa</li>
                <li>tempo de descompressão</li>
                <li>lanche</li>
                <li>tarefas necessárias</li>
                <li>atividade livre</li>
                <li>jantar</li>
              </ol>
            </article>
          </div>

          <div className="routine-child-note">
            <i className="bi bi-heart"></i>
            <p>
              Algumas crianças precisam de um período de recuperação depois da
              escola antes de conseguirem lidar com novas exigências.
            </p>
          </div>
        </div>
      </section>

      {/* ADULTOS */}
      <section className="routine-adults">
        <div className="container routine-container">
          <div className="routine-section-heading">
            <span className="routine-section-label">Vida adulta</span>

            <h2>Organização não termina quando crescemos</h2>

            <p>
              Trabalho, refeições, contas, compras, consultas, tarefas
              domésticas e descanso competem pela mesma quantidade de tempo e
              energia.
            </p>
          </div>

          <div className="routine-priority-grid">
            <article className="today">
              <span>Hoje</span>
              <p>O que realmente precisa de acontecer hoje?</p>
            </article>

            <article className="week">
              <span>Esta semana</span>
              <p>O que pode ser distribuído pelos próximos dias?</p>
            </article>

            <article className="later">
              <span>Depois</span>
              <p>O que não precisa de ocupar espaço mental agora?</p>
            </article>
          </div>

          <div className="routine-adult-note">
            <i className="bi bi-list-ul"></i>
            <p>
              Separar tarefas por prioridade pode ser menos sobrecarregante do
              que manter uma única lista enorme de tudo o que está por fazer.
            </p>
          </div>
        </div>
      </section>

      {/* EXTERNALIZAR MEMÓRIA */}
      <section className="routine-memory">
        <div className="container routine-container">
          <div className="routine-memory-box">
            <div className="routine-memory-icon">
              <i className="bi bi-bell"></i>
            </div>

            <div>
              <span className="routine-section-label">
                Não depender apenas da memória
              </span>

              <h2>Externalizar a memória</h2>

              <p>
                Em vez de tentar lembrar mentalmente de tudo, parte da
                informação pode ser colocada no ambiente.
              </p>

              <div className="routine-memory-list">
                <span>alarmes</span>
                <span>calendário</span>
                <span>lembretes</span>
                <span>etiquetas</span>
                <span>checklists</span>
                <span>notas</span>
                <span>aplicações</span>
              </div>

              <div className="routine-memory-highlight">
                <strong>
                  Usar lembretes não é falhar na organização. É uma estratégia
                  de organização.
                </strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LUGARES FIXOS */}
      <section className="routine-places">
        <div className="container routine-container">
          <div className="routine-section-heading">
            <span className="routine-section-label">
              Reduzir pequenas decisões
            </span>

            <h2>Criar lugares fixos para objetos importantes</h2>

            <p>
              Ter um local previsível para objetos utilizados todos os dias pode
              reduzir tempo de procura e esforço mental.
            </p>
          </div>

          <div className="routine-places-grid">
            <article>
              <i className="bi bi-key"></i>
              <span>chaves</span>
            </article>

            <article>
              <i className="bi bi-wallet2"></i>
              <span>carteira</span>
            </article>

            <article>
              <i className="bi bi-file-earmark-text"></i>
              <span>documentos</span>
            </article>

            <article>
              <i className="bi bi-backpack"></i>
              <span>mochila</span>
            </article>

            <article>
              <i className="bi bi-capsule"></i>
              <span>medicação</span>
            </article>

            <article>
              <i className="bi bi-lightning-charge"></i>
              <span>carregadores</span>
            </article>
          </div>
        </div>
      </section>

      {/* AMBIENTE */}
      <section className="routine-environment">
        <div className="container routine-container">
          <div className="routine-section-heading">
            <span className="routine-section-label">
              Organização do ambiente
            </span>

            <h2>Organizar não significa esconder tudo</h2>

            <p>
              Para algumas pessoas, reduzir excesso visual ajuda. Para outras,
              deixar objetos importantes visíveis é essencial para se lembrarem
              de que eles existem.
            </p>
          </div>

          <div className="routine-environment-grid">
            <div>
              <i className="bi bi-check-circle-fill"></i>
              <span>usar caixas e etiquetas simples</span>
            </div>

            <div>
              <i className="bi bi-check-circle-fill"></i>
              <span>agrupar objetos por função</span>
            </div>

            <div>
              <i className="bi bi-check-circle-fill"></i>
              <span>deixar itens importantes acessíveis</span>
            </div>

            <div>
              <i className="bi bi-check-circle-fill"></i>
              <span>evitar sistemas excessivamente complexos</span>
            </div>

            <div>
              <i className="bi bi-check-circle-fill"></i>
              <span>reduzir estímulos quando ajudam</span>
            </div>

            <div>
              <i className="bi bi-check-circle-fill"></i>
              <span>criar um espaço de descanso</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUANDO DEIXA DE FUNCIONAR */}
      <section className="routine-change-strategy">
        <div className="container routine-container">
          <div className="routine-change-strategy-box">
            <i className="bi bi-arrow-repeat"></i>

            <div>
              <span className="routine-section-label">
                Ajustar também faz parte
              </span>

              <h2>Quando uma estratégia deixa de funcionar</h2>

              <p>
                Uma rotina pode funcionar durante meses e deixar de ser útil
                quando mudam a escola, o trabalho, os horários, o nível de
                stress ou as necessidades da pessoa.
              </p>

              <p>
                Não é necessário insistir num sistema apenas porque funcionou
                anteriormente. Estratégias de organização podem e devem ser
                revistas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* KIT */}
      <section className="routine-kit">
        <div className="container routine-container">
          <div className="routine-section-heading">
            <span className="routine-section-label">Ferramentas simples</span>

            <h2>Um pequeno kit de organização</h2>
          </div>

          <div className="routine-kit-grid">
            <article>
              <i className="bi bi-calendar3"></i>
              <h3>Calendário</h3>
            </article>

            <article>
              <i className="bi bi-hourglass-split"></i>
              <h3>Timer</h3>
            </article>

            <article>
              <i className="bi bi-card-checklist"></i>
              <h3>Checklist</h3>
            </article>

            <article>
              <i className="bi bi-grid"></i>
              <h3>Quadro semanal</h3>
            </article>

            <article>
              <i className="bi bi-bell"></i>
              <h3>Alarmes</h3>
            </article>

            <article>
              <i className="bi bi-tags"></i>
              <h3>Etiquetas</h3>
            </article>
          </div>
        </div>
      </section>

      {/* O QUE PODE NÃO AJUDAR */}
      <section className="routine-not-helpful">
        <div className="container routine-container">
          <div className="routine-section-heading">
            <span className="routine-section-label">
              Quando organizar cria mais trabalho
            </span>

            <h2>O que pode não ajudar?</h2>
          </div>

          <div className="routine-not-helpful-list">
            <div>
              <i className="bi bi-x-circle"></i>
              <span>listas enormes sem qualquer prioridade</span>
            </div>

            <div>
              <i className="bi bi-x-circle"></i>
              <span>horários com cada minuto preenchido</span>
            </div>

            <div>
              <i className="bi bi-x-circle"></i>
              <span>alterar várias rotinas ao mesmo tempo</span>
            </div>

            <div>
              <i className="bi bi-x-circle"></i>
              <span>sistemas mais complicados do que a própria tarefa</span>
            </div>

            <div>
              <i className="bi bi-x-circle"></i>
              <span>usar a rotina como forma de castigo ou controlo</span>
            </div>

            <div>
              <i className="bi bi-x-circle"></i>
              <span>interpretar dificuldade executiva como preguiça</span>
            </div>
          </div>
        </div>
      </section>

      {/* LINKS */}
      <section className="routine-related">
        <div className="container routine-container">
          <div className="routine-section-heading">
            <span className="routine-section-label">Também pode ser útil</span>

            <h2>Outros temas relacionados</h2>
          </div>

          <div className="routine-related-grid">
            <article>
              <div className="routine-related-icon anxiety">
                <i className="bi bi-heart-pulse"></i>
              </div>

              <h3>Ansiedade</h3>

              <p>
                Quando mudanças, compromissos ou incerteza provocam sofrimento
                significativo.
              </p>

              <Link to="/ansiedade">
                Ler sobre ansiedade
                <i className="bi bi-arrow-right"></i>
              </Link>
            </article>

            <article>
              <div className="routine-related-icon overload">
                <i className="bi bi-cloud-lightning-rain"></i>
              </div>

              <h3>Crises e sobrecarga</h3>

              <p>
                Quando a acumulação de estímulos e exigências leva a pessoa ao
                limite.
              </p>

              <Link to="/crises-sobrecarga">
                Ler sobre crises e sobrecarga
                <i className="bi bi-arrow-right"></i>
              </Link>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}

export default RoutineOrganization;
