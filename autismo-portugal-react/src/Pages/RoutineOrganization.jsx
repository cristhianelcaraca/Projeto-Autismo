import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import useLocalizedPath from "../hooks/useLocalizedPath";

import "./RoutineOrganization.css";

const content = {
  pt: {
    hero: {
      label: "Vida diária",
      title: "Rotina e organização",
      paragraph1:
        "Para muitas pessoas autistas, saber o que vai acontecer e em que ordem pode reduzir a incerteza, facilitar transições e tornar o dia mais previsível.",
      paragraph2:
        "Ter rotina não significa viver de forma rígida. O objetivo é criar estrutura suficiente para tornar o quotidiano mais compreensível e sustentável.",
    },

    predictability: {
      label: "Tornar o dia mais previsível",
      title: "Por que a previsibilidade pode ajudar?",
      description:
        "Algumas pessoas autistas beneficiam particularmente de estrutura, antecipação e informação clara sobre aquilo que vai acontecer.",
      cards: [
        {
          icon: "bi-question-circle",
          className: "blue",
          title: "Menos incerteza",
          text: "Saber o que vai acontecer pode reduzir o esforço de tentar antecipar constantemente diferentes possibilidades.",
        },
        {
          icon: "bi-arrow-left-right",
          className: "green",
          title: "Transições mais claras",
          text: "Conhecer o que termina e o que vem a seguir pode facilitar a mudança entre atividades.",
        },
        {
          icon: "bi-list-check",
          className: "purple",
          title: "Menos decisões",
          text: "Uma rotina pode reduzir a quantidade de pequenas decisões que precisam de ser tomadas ao longo do dia.",
        },
        {
          icon: "bi-clock-history",
          className: "yellow",
          title: "Preparação antecipada",
          text: "Saber quando algo vai acontecer permite organizar mentalmente tempo, energia e estratégias de apoio.",
        },
      ],
    },

    flexibility: {
      label: "Estrutura sem transformar tudo numa regra",
      title: "Rotina não é o mesmo que rigidez",
      helpfulTitle: "Quando a rotina ajuda",
      helpful: [
        "deixa claro o que vai acontecer;",
        "reduz esforço mental;",
        "facilita a preparação;",
        "permite alguma flexibilidade;",
        "pode ser adaptada quando necessário.",
      ],
      difficultTitle: "Quando começa a gerar sofrimento",
      difficult: [
        "qualquer mudança provoca sofrimento muito intenso;",
        "a pessoa sente que não consegue sair da sequência;",
        "a rotina começa a impedir atividades importantes;",
        "a necessidade de controlo aumenta progressivamente;",
        "a ansiedade domina a organização do dia.",
      ],
      note: "Se uma rotina está a funcionar como estratégia de segurança perante ansiedade intensa, retirá-la de forma abrupta pode tornar a situação mais difícil.",
    },

    visual: {
      label: "Colocar a informação fora da cabeça",
      title: "Organizar o dia visualmente",
      description:
        "Não existe um sistema universal. Algumas pessoas preferem uma agenda em papel, outras funcionam melhor com o telemóvel, pictogramas, alarmes ou listas simples.",
      tools: [
        ["bi-calendar3", "Calendário"],
        ["bi-card-checklist", "Checklist"],
        ["bi-grid-3x3-gap", "Quadro semanal"],
        ["bi-alarm", "Alarmes"],
        ["bi-phone", "Aplicações"],
        ["bi-sticky", "Post-its"],
      ],
      highlightStrong:
        "O melhor sistema não é necessariamente o mais bonito ou completo.",
      highlight:
        "É aquele que a pessoa realmente consegue consultar e utilizar.",
    },

    steps: {
      label: "Tornar tarefas abstratas mais concretas",
      title: "Dividir tarefas grandes em passos pequenos",
      description:
        "Instruções como “arruma o quarto” ou “trata dos documentos” podem envolver muitas decisões escondidas dentro de uma única frase.",
      bedroomTitle: "Em vez de “arrumar o quarto”",
      bedroom: [
        "colocar roupa suja no cesto;",
        "guardar roupa limpa;",
        "colocar lixo no caixote;",
        "arrumar objetos da secretária;",
        "fazer a cama.",
      ],
      documentsTitle: "Em vez de “tratar dos documentos”",
      documents: [
        "encontrar o documento;",
        "verificar o prazo;",
        "abrir o site necessário;",
        "preencher o formulário;",
        "anexar os ficheiros;",
        "guardar o comprovativo.",
      ],
    },

    initiation: {
      label: "Quando saber o que fazer não é suficiente",
      title: "Começar uma tarefa também pode ser difícil",
      description:
        "Uma pessoa pode compreender perfeitamente o que precisa fazer e ainda assim ter dificuldade em iniciar a tarefa.",
      items: [
        "não saber por onde começar;",
        "ter dificuldade em escolher entre várias opções;",
        "não conseguir mudar da atividade atual para outra;",
        "ter dificuldade em estimar quanto tempo vai demorar;",
        "não conseguir retomar facilmente depois de uma interrupção.",
      ],
      highlight: "Saber fazer e conseguir começar não são a mesma coisa.",
    },

    transitions: {
      label: "Passar de uma atividade para outra",
      title: "As transições também exigem energia",
      description:
        "Interromper uma atividade, mudar de ambiente ou começar algo novo pode exigir mais preparação do que parece.",
      examples: [
        "parar um jogo para tomar banho",
        "sair de casa",
        "mudar de sala",
        "terminar o fim de semana",
        "começar uma obrigação",
        "interromper uma atividade preferida",
      ],
      help: [
        {
          icon: "bi-bell",
          title: "Avisar antes",
          text: "Antecipar que uma atividade vai terminar pode tornar a mudança menos abrupta.",
        },
        {
          icon: "bi-hourglass-split",
          title: "Usar temporizadores",
          text: "Um timer pode tornar mais visível quanto tempo ainda falta.",
        },
        {
          icon: "bi-arrow-right-circle",
          title: "Mostrar o que vem depois",
          text: "Explicar a próxima etapa torna a transição mais previsível.",
        },
      ],
    },

    time: {
      label: "Tornar o tempo mais concreto",
      title: "“Daqui a pouco” pode ser demasiado vago",
      paragraph1:
        "Para algumas pessoas, expressões imprecisas como “mais tarde”, “já vamos” ou “daqui a pouco” dão pouca informação sobre quanto tempo realmente falta.",
      bad: "“Saímos daqui a pouco.”",
      good: "“Saímos às 15:30.”",
      paragraph2:
        "Relógios, temporizadores, alarmes e horários concretos podem ajudar a tornar a passagem do tempo mais visível.",
    },

    changes: {
      label: "Quando o plano deixa de ser o plano",
      title: "O que fazer quando alguma coisa muda?",
      planA: "Plano A",
      appointment: "Consulta às 14:00",
      change: "Mudança",
      delayed: "A consulta atrasou 40 minutos",
      newPlan: "Novo plano",
      newTime: "Consulta prevista para as 14:40",
      before: "Quando algo muda, pode ajudar explicar não apenas",
      changed: "o que mudou",
      butAlso: "mas também",
      same: "o que continua igual",
    },

    energy: {
      label: "Organização também envolve recuperação",
      title: "Energia também faz parte do planeamento",
      description:
        "Duas atividades com a mesma duração podem consumir quantidades de energia completamente diferentes.",
      items: [
        ["bi-briefcase", "trabalho ou escola"],
        ["bi-person-vcard", "consultas"],
        ["bi-people", "eventos sociais"],
        ["bi-bus-front", "deslocações"],
        ["bi-volume-up", "ambientes sensorialmente intensos"],
        ["bi-chat-dots", "interação social prolongada"],
      ],
      note: "Um calendário aparentemente vazio não significa necessariamente que a pessoa tenha energia disponível. Descanso e recuperação também podem precisar de espaço na rotina.",
    },

    children: {
      label: "Crianças e adolescentes",
      title: "Rotinas simples podem tornar o dia mais claro",
      morningTitle: "Rotina da manhã",
      morning: [
        "acordar",
        "vestir",
        "tomar o pequeno-almoço",
        "lavar os dentes",
        "pegar na mochila",
        "sair",
      ],
      afternoonTitle: "Depois da escola",
      afternoon: [
        "chegar a casa",
        "tempo de descompressão",
        "lanche",
        "tarefas necessárias",
        "atividade livre",
        "jantar",
      ],
      note: "Algumas crianças precisam de um período de recuperação depois da escola antes de conseguirem lidar com novas exigências.",
    },

    adults: {
      label: "Vida adulta",
      title: "Organização não termina quando crescemos",
      description:
        "Trabalho, refeições, contas, compras, consultas, tarefas domésticas e descanso competem pela mesma quantidade de tempo e energia.",
      today: "Hoje",
      todayText: "O que realmente precisa de acontecer hoje?",
      week: "Esta semana",
      weekText: "O que pode ser distribuído pelos próximos dias?",
      later: "Depois",
      laterText: "O que não precisa de ocupar espaço mental agora?",
      note: "Separar tarefas por prioridade pode ser menos sobrecarregante do que manter uma única lista enorme de tudo o que está por fazer.",
    },

    memory: {
      label: "Não depender apenas da memória",
      title: "Externalizar a memória",
      description:
        "Em vez de tentar lembrar mentalmente de tudo, parte da informação pode ser colocada no ambiente.",
      items: [
        "alarmes",
        "calendário",
        "lembretes",
        "etiquetas",
        "checklists",
        "notas",
        "aplicações",
      ],
      highlight:
        "Usar lembretes não é falhar na organização. É uma estratégia de organização.",
    },

    places: {
      label: "Reduzir pequenas decisões",
      title: "Criar lugares fixos para objetos importantes",
      description:
        "Ter um local previsível para objetos utilizados todos os dias pode reduzir tempo de procura e esforço mental.",
      items: [
        ["bi-key", "chaves"],
        ["bi-wallet2", "carteira"],
        ["bi-file-earmark-text", "documentos"],
        ["bi-backpack", "mochila"],
        ["bi-capsule", "medicação"],
        ["bi-lightning-charge", "carregadores"],
      ],
    },

    environment: {
      label: "Organização do ambiente",
      title: "Organizar não significa esconder tudo",
      description:
        "Para algumas pessoas, reduzir excesso visual ajuda. Para outras, deixar objetos importantes visíveis é essencial para se lembrarem de que eles existem.",
      items: [
        "usar caixas e etiquetas simples",
        "agrupar objetos por função",
        "deixar itens importantes acessíveis",
        "evitar sistemas excessivamente complexos",
        "reduzir estímulos quando ajudam",
        "criar um espaço de descanso",
      ],
    },

    strategy: {
      label: "Ajustar também faz parte",
      title: "Quando uma estratégia deixa de funcionar",
      paragraph1:
        "Uma rotina pode funcionar durante meses e deixar de ser útil quando mudam a escola, o trabalho, os horários, o nível de stress ou as necessidades da pessoa.",
      paragraph2:
        "Não é necessário insistir num sistema apenas porque funcionou anteriormente. Estratégias de organização podem e devem ser revistas.",
    },

    kit: {
      label: "Ferramentas simples",
      title: "Um pequeno kit de organização",
      items: [
        ["bi-calendar3", "Calendário"],
        ["bi-hourglass-split", "Timer"],
        ["bi-card-checklist", "Checklist"],
        ["bi-grid", "Quadro semanal"],
        ["bi-bell", "Alarmes"],
        ["bi-tags", "Etiquetas"],
      ],
    },

    notHelpful: {
      label: "Quando organizar cria mais trabalho",
      title: "O que pode não ajudar?",
      items: [
        "listas enormes sem qualquer prioridade",
        "horários com cada minuto preenchido",
        "alterar várias rotinas ao mesmo tempo",
        "sistemas mais complicados do que a própria tarefa",
        "usar a rotina como forma de castigo ou controlo",
        "interpretar dificuldade executiva como preguiça",
      ],
    },

    related: {
      label: "Também pode ser útil",
      title: "Outros temas relacionados",
      anxietyTitle: "Ansiedade",
      anxietyDescription:
        "Quando mudanças, compromissos ou incerteza provocam sofrimento significativo.",
      anxietyLink: "Ler sobre ansiedade",
      overloadTitle: "Crises e sobrecarga",
      overloadDescription:
        "Quando a acumulação de estímulos e exigências leva a pessoa ao limite.",
      overloadLink: "Ler sobre crises e sobrecarga",
    },
  },

  en: {
    hero: {
      label: "Daily life",
      title: "Routine and organisation",
      paragraph1:
        "For many autistic people, knowing what is going to happen and in what order can reduce uncertainty, make transitions easier and make the day more predictable.",
      paragraph2:
        "Having a routine does not mean living rigidly. The aim is to create enough structure to make everyday life more understandable and sustainable.",
    },

    predictability: {
      label: "Making the day more predictable",
      title: "Why can predictability help?",
      description:
        "Some autistic people particularly benefit from structure, preparation and clear information about what is going to happen.",
      cards: [
        {
          icon: "bi-question-circle",
          className: "blue",
          title: "Less uncertainty",
          text: "Knowing what is going to happen can reduce the effort involved in constantly anticipating different possibilities.",
        },
        {
          icon: "bi-arrow-left-right",
          className: "green",
          title: "Clearer transitions",
          text: "Knowing what is ending and what comes next can make it easier to move between activities.",
        },
        {
          icon: "bi-list-check",
          className: "purple",
          title: "Fewer decisions",
          text: "A routine can reduce the number of small decisions that need to be made throughout the day.",
        },
        {
          icon: "bi-clock-history",
          className: "yellow",
          title: "Preparation in advance",
          text: "Knowing when something will happen makes it easier to mentally organise time, energy and support strategies.",
        },
      ],
    },

    flexibility: {
      label: "Structure without turning everything into a rule",
      title: "Routine is not the same as rigidity",
      helpfulTitle: "When routine helps",
      helpful: [
        "makes it clear what is going to happen;",
        "reduces mental effort;",
        "makes preparation easier;",
        "allows some flexibility;",
        "can be adapted when necessary.",
      ],
      difficultTitle: "When it begins to cause distress",
      difficult: [
        "any change causes very intense distress;",
        "the person feels unable to move away from the sequence;",
        "the routine begins to prevent important activities;",
        "the need for control progressively increases;",
        "anxiety dominates the organisation of the day.",
      ],
      note: "If a routine is functioning as a safety strategy in response to intense anxiety, removing it abruptly can make the situation more difficult.",
    },

    visual: {
      label: "Moving information out of your head",
      title: "Organising the day visually",
      description:
        "There is no universal system. Some people prefer a paper diary, while others work better with a phone, pictograms, alarms or simple lists.",
      tools: [
        ["bi-calendar3", "Calendar"],
        ["bi-card-checklist", "Checklist"],
        ["bi-grid-3x3-gap", "Weekly planner"],
        ["bi-alarm", "Alarms"],
        ["bi-phone", "Apps"],
        ["bi-sticky", "Post-it notes"],
      ],
      highlightStrong:
        "The best system is not necessarily the prettiest or most complete.",
      highlight: "It is the one the person can actually check and use.",
    },

    steps: {
      label: "Making abstract tasks more concrete",
      title: "Breaking large tasks into smaller steps",
      description:
        "Instructions such as “tidy your room” or “deal with the documents” can involve many hidden decisions within a single sentence.",
      bedroomTitle: "Instead of “tidy your room”",
      bedroom: [
        "put dirty clothes in the laundry basket;",
        "put clean clothes away;",
        "put rubbish in the bin;",
        "tidy objects on the desk;",
        "make the bed.",
      ],
      documentsTitle: "Instead of “deal with the documents”",
      documents: [
        "find the document;",
        "check the deadline;",
        "open the required website;",
        "fill in the form;",
        "attach the files;",
        "save the confirmation.",
      ],
    },

    initiation: {
      label: "When knowing what to do is not enough",
      title: "Starting a task can also be difficult",
      description:
        "A person may fully understand what they need to do and still have difficulty starting the task.",
      items: [
        "not knowing where to start;",
        "having difficulty choosing between several options;",
        "being unable to switch from the current activity to another;",
        "having difficulty estimating how long something will take;",
        "being unable to easily resume after an interruption.",
      ],
      highlight:
        "Knowing how to do something and being able to start it are not the same thing.",
    },

    transitions: {
      label: "Moving from one activity to another",
      title: "Transitions also require energy",
      description:
        "Stopping an activity, changing environment or starting something new may require more preparation than it appears.",
      examples: [
        "stopping a game to have a shower",
        "leaving home",
        "moving to another room",
        "the end of the weekend",
        "starting an obligation",
        "stopping a preferred activity",
      ],
      help: [
        {
          icon: "bi-bell",
          title: "Give advance notice",
          text: "Warning that an activity is going to end can make the change less abrupt.",
        },
        {
          icon: "bi-hourglass-split",
          title: "Use timers",
          text: "A timer can make the remaining time more visible.",
        },
        {
          icon: "bi-arrow-right-circle",
          title: "Show what comes next",
          text: "Explaining the next step makes the transition more predictable.",
        },
      ],
    },

    time: {
      label: "Making time more concrete",
      title: "“In a little while” can be too vague",
      paragraph1:
        "For some people, imprecise expressions such as “later”, “we're leaving soon” or “in a little while” provide very little information about how much time is actually left.",
      bad: "“We'll leave in a little while.”",
      good: "“We'll leave at 15:30.”",
      paragraph2:
        "Clocks, timers, alarms and specific times can help make the passage of time more visible.",
    },

    changes: {
      label: "When the plan is no longer the plan",
      title: "What can help when something changes?",
      planA: "Plan A",
      appointment: "Appointment at 14:00",
      change: "Change",
      delayed: "The appointment is delayed by 40 minutes",
      newPlan: "New plan",
      newTime: "Appointment expected at 14:40",
      before: "When something changes, it can help to explain not only",
      changed: "what has changed",
      butAlso: "but also",
      same: "what remains the same",
    },

    energy: {
      label: "Organisation also involves recovery",
      title: "Energy is also part of planning",
      description:
        "Two activities of the same duration can use completely different amounts of energy.",
      items: [
        ["bi-briefcase", "work or school"],
        ["bi-person-vcard", "appointments"],
        ["bi-people", "social events"],
        ["bi-bus-front", "travel"],
        ["bi-volume-up", "sensory-intensive environments"],
        ["bi-chat-dots", "prolonged social interaction"],
      ],
      note: "An apparently empty calendar does not necessarily mean that a person has energy available. Rest and recovery may also need space in the routine.",
    },

    children: {
      label: "Children and teenagers",
      title: "Simple routines can make the day clearer",
      morningTitle: "Morning routine",
      morning: [
        "wake up",
        "get dressed",
        "have breakfast",
        "brush teeth",
        "pick up the school bag",
        "leave home",
      ],
      afternoonTitle: "After school",
      afternoon: [
        "arrive home",
        "decompression time",
        "have a snack",
        "necessary tasks",
        "free time",
        "dinner",
      ],
      note: "Some children need a period of recovery after school before they are able to cope with new demands.",
    },

    adults: {
      label: "Adult life",
      title: "Organisation does not end when we grow up",
      description:
        "Work, meals, bills, shopping, appointments, household tasks and rest all compete for the same amount of time and energy.",
      today: "Today",
      todayText: "What really needs to happen today?",
      week: "This week",
      weekText: "What can be spread across the next few days?",
      later: "Later",
      laterText: "What does not need to take up mental space right now?",
      note: "Separating tasks by priority can be less overwhelming than keeping one enormous list of everything that needs to be done.",
    },

    memory: {
      label: "Not relying only on memory",
      title: "Externalising memory",
      description:
        "Instead of trying to remember everything mentally, some of the information can be placed in the environment.",
      items: [
        "alarms",
        "calendar",
        "reminders",
        "labels",
        "checklists",
        "notes",
        "apps",
      ],
      highlight:
        "Using reminders is not failing at organisation. It is an organisation strategy.",
    },

    places: {
      label: "Reducing small decisions",
      title: "Creating fixed places for important objects",
      description:
        "Having a predictable place for everyday objects can reduce searching time and mental effort.",
      items: [
        ["bi-key", "keys"],
        ["bi-wallet2", "wallet"],
        ["bi-file-earmark-text", "documents"],
        ["bi-backpack", "bag"],
        ["bi-capsule", "medication"],
        ["bi-lightning-charge", "chargers"],
      ],
    },

    environment: {
      label: "Organising the environment",
      title: "Organisation does not mean hiding everything",
      description:
        "For some people, reducing visual clutter helps. For others, keeping important objects visible is essential in order to remember that they exist.",
      items: [
        "use simple boxes and labels",
        "group objects by function",
        "keep important items accessible",
        "avoid overly complex systems",
        "reduce stimuli when helpful",
        "create a resting space",
      ],
    },

    strategy: {
      label: "Adjusting is part of the process",
      title: "When a strategy stops working",
      paragraph1:
        "A routine may work for months and stop being useful when school, work, schedules, stress levels or the person's needs change.",
      paragraph2:
        "There is no need to continue using a system simply because it worked before. Organisation strategies can and should be reviewed.",
    },

    kit: {
      label: "Simple tools",
      title: "A small organisation toolkit",
      items: [
        ["bi-calendar3", "Calendar"],
        ["bi-hourglass-split", "Timer"],
        ["bi-card-checklist", "Checklist"],
        ["bi-grid", "Weekly planner"],
        ["bi-bell", "Alarms"],
        ["bi-tags", "Labels"],
      ],
    },

    notHelpful: {
      label: "When organising creates more work",
      title: "What may not help?",
      items: [
        "huge lists with no priorities",
        "schedules with every minute filled",
        "changing several routines at once",
        "systems that are more complicated than the task itself",
        "using routine as a form of punishment or control",
        "interpreting executive-function difficulties as laziness",
      ],
    },

    related: {
      label: "You may also find this useful",
      title: "Related topics",
      anxietyTitle: "Anxiety",
      anxietyDescription:
        "When changes, commitments or uncertainty cause significant distress.",
      anxietyLink: "Read about anxiety",
      overloadTitle: "Crises and overload",
      overloadDescription:
        "When accumulated stimuli and demands push a person beyond their limit.",
      overloadLink: "Read about crises and overload",
    },
  },
};

function RoutineOrganization() {
  const { i18n } = useTranslation();
  const localizedPath = useLocalizedPath();

  const language =
    i18n.resolvedLanguage?.startsWith("en") || i18n.language?.startsWith("en")
      ? "en"
      : "pt";

  const text = content[language];

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }

  return (
    <main className="routine-page">
      {/* HERO */}
      <section className="routine-hero">
        <div className="container routine-container">
          <div className="routine-hero-content">
            <div className="routine-hero-text">
              <span className="routine-label">{text.hero.label}</span>

              <h1>{text.hero.title}</h1>

              <p>{text.hero.paragraph1}</p>
              <p>{text.hero.paragraph2}</p>
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
              {text.predictability.label}
            </span>

            <h2>{text.predictability.title}</h2>

            <p>{text.predictability.description}</p>
          </div>

          <div className="routine-benefits-grid">
            {text.predictability.cards.map((card) => (
              <article
                className={`routine-benefit-card ${card.className}`}
                key={card.title}
              >
                <i className={`bi ${card.icon}`}></i>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ROTINA X RIGIDEZ */}
      <section className="routine-flexibility">
        <div className="container routine-container">
          <div className="routine-section-heading">
            <span className="routine-section-label">
              {text.flexibility.label}
            </span>

            <h2>{text.flexibility.title}</h2>
          </div>

          <div className="routine-compare-grid">
            <article className="routine-compare-card helpful">
              <div className="routine-compare-icon">
                <i className="bi bi-check-circle"></i>
              </div>

              <h3>{text.flexibility.helpfulTitle}</h3>

              <ul>
                {text.flexibility.helpful.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <article className="routine-compare-card difficult">
              <div className="routine-compare-icon">
                <i className="bi bi-exclamation-circle"></i>
              </div>

              <h3>{text.flexibility.difficultTitle}</h3>

              <ul>
                {text.flexibility.difficult.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>

          <div className="routine-flexibility-note">
            <i className="bi bi-info-circle"></i>
            <p>{text.flexibility.note}</p>
          </div>
        </div>
      </section>

      {/* ORGANIZAR VISUALMENTE */}
      <section className="routine-visual">
        <div className="container routine-container">
          <div className="routine-section-heading">
            <span className="routine-section-label">{text.visual.label}</span>

            <h2>{text.visual.title}</h2>
            <p>{text.visual.description}</p>
          </div>

          <div className="routine-tools-grid">
            {text.visual.tools.map(([icon, label]) => (
              <article key={label}>
                <i className={`bi ${icon}`}></i>
                <span>{label}</span>
              </article>
            ))}
          </div>

          <div className="routine-visual-highlight">
            <i className="bi bi-lightbulb"></i>

            <p>
              <strong>{text.visual.highlightStrong}</strong>{" "}
              {text.visual.highlight}
            </p>
          </div>
        </div>
      </section>

      {/* DIVIDIR TAREFAS */}
      <section className="routine-steps">
        <div className="container routine-container">
          <div className="routine-section-heading">
            <span className="routine-section-label">{text.steps.label}</span>

            <h2>{text.steps.title}</h2>
            <p>{text.steps.description}</p>
          </div>

          <div className="routine-example-grid">
            <article className="routine-example-card">
              <div className="routine-example-heading">
                <i className="bi bi-house"></i>
                <h3>{text.steps.bedroomTitle}</h3>
              </div>

              <ol>
                {text.steps.bedroom.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            </article>

            <article className="routine-example-card">
              <div className="routine-example-heading">
                <i className="bi bi-folder2-open"></i>
                <h3>{text.steps.documentsTitle}</h3>
              </div>

              <ol>
                {text.steps.documents.map((item) => (
                  <li key={item}>{item}</li>
                ))}
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
                {text.initiation.label}
              </span>

              <h2>{text.initiation.title}</h2>

              <p>{text.initiation.description}</p>

              <ul>
                {text.initiation.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <div className="routine-initiation-highlight">
                <strong>{text.initiation.highlight}</strong>
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
              {text.transitions.label}
            </span>

            <h2>{text.transitions.title}</h2>

            <p>{text.transitions.description}</p>
          </div>

          <div className="routine-transition-examples">
            {text.transitions.examples.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>

          <div className="routine-transition-help">
            {text.transitions.help.map((item) => (
              <article key={item.title}>
                <i className={`bi ${item.icon}`}></i>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
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
              <span className="routine-section-label">{text.time.label}</span>

              <h2>{text.time.title}</h2>

              <p>{text.time.paragraph1}</p>

              <div className="routine-time-examples">
                <div>
                  <span className="routine-time-bad">{text.time.bad}</span>
                </div>

                <i className="bi bi-arrow-right"></i>

                <div>
                  <span className="routine-time-good">{text.time.good}</span>
                </div>
              </div>

              <p>{text.time.paragraph2}</p>
            </div>
          </div>
        </div>
      </section>

      {/* MUDANÇAS */}
      <section className="routine-changes">
        <div className="container routine-container">
          <div className="routine-section-heading">
            <span className="routine-section-label">{text.changes.label}</span>

            <h2>{text.changes.title}</h2>
          </div>

          <div className="routine-change-flow">
            <article>
              <span>{text.changes.planA}</span>
              <h3>{text.changes.appointment}</h3>
            </article>

            <i className="bi bi-arrow-right"></i>

            <article>
              <span>{text.changes.change}</span>
              <h3>{text.changes.delayed}</h3>
            </article>

            <i className="bi bi-arrow-right"></i>

            <article>
              <span>{text.changes.newPlan}</span>
              <h3>{text.changes.newTime}</h3>
            </article>
          </div>

          <div className="routine-changes-highlight">
            <i className="bi bi-info-circle"></i>

            <p>
              {text.changes.before} <strong>{text.changes.changed}</strong>,{" "}
              {text.changes.butAlso} <strong>{text.changes.same}</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* ENERGIA */}
      <section className="routine-energy">
        <div className="container routine-container">
          <div className="routine-section-heading">
            <span className="routine-section-label">{text.energy.label}</span>

            <h2>{text.energy.title}</h2>
            <p>{text.energy.description}</p>
          </div>

          <div className="routine-energy-grid">
            {text.energy.items.map(([icon, label]) => (
              <article key={label}>
                <i className={`bi ${icon}`}></i>
                <span>{label}</span>
              </article>
            ))}
          </div>

          <div className="routine-energy-note">
            <i className="bi bi-battery-half"></i>
            <p>{text.energy.note}</p>
          </div>
        </div>
      </section>

      {/* CRIANÇAS */}
      <section className="routine-children">
        <div className="container routine-container">
          <div className="routine-section-heading">
            <span className="routine-section-label">{text.children.label}</span>

            <h2>{text.children.title}</h2>
          </div>

          <div className="routine-child-grid">
            <article className="routine-child-card morning">
              <div className="routine-child-heading">
                <i className="bi bi-sun"></i>
                <h3>{text.children.morningTitle}</h3>
              </div>

              <ol>
                {text.children.morning.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            </article>

            <article className="routine-child-card afternoon">
              <div className="routine-child-heading">
                <i className="bi bi-house-heart"></i>
                <h3>{text.children.afternoonTitle}</h3>
              </div>

              <ol>
                {text.children.afternoon.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            </article>
          </div>

          <div className="routine-child-note">
            <i className="bi bi-heart"></i>
            <p>{text.children.note}</p>
          </div>
        </div>
      </section>

      {/* ADULTOS */}
      <section className="routine-adults">
        <div className="container routine-container">
          <div className="routine-section-heading">
            <span className="routine-section-label">{text.adults.label}</span>

            <h2>{text.adults.title}</h2>
            <p>{text.adults.description}</p>
          </div>

          <div className="routine-priority-grid">
            <article className="today">
              <span>{text.adults.today}</span>
              <p>{text.adults.todayText}</p>
            </article>

            <article className="week">
              <span>{text.adults.week}</span>
              <p>{text.adults.weekText}</p>
            </article>

            <article className="later">
              <span>{text.adults.later}</span>
              <p>{text.adults.laterText}</p>
            </article>
          </div>

          <div className="routine-adult-note">
            <i className="bi bi-list-ul"></i>
            <p>{text.adults.note}</p>
          </div>
        </div>
      </section>

      {/* MEMÓRIA */}
      <section className="routine-memory">
        <div className="container routine-container">
          <div className="routine-memory-box">
            <div className="routine-memory-icon">
              <i className="bi bi-bell"></i>
            </div>

            <div>
              <span className="routine-section-label">{text.memory.label}</span>

              <h2>{text.memory.title}</h2>
              <p>{text.memory.description}</p>

              <div className="routine-memory-list">
                {text.memory.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>

              <div className="routine-memory-highlight">
                <strong>{text.memory.highlight}</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LUGARES FIXOS */}
      <section className="routine-places">
        <div className="container routine-container">
          <div className="routine-section-heading">
            <span className="routine-section-label">{text.places.label}</span>

            <h2>{text.places.title}</h2>
            <p>{text.places.description}</p>
          </div>

          <div className="routine-places-grid">
            {text.places.items.map(([icon, label]) => (
              <article key={label}>
                <i className={`bi ${icon}`}></i>
                <span>{label}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* AMBIENTE */}
      <section className="routine-environment">
        <div className="container routine-container">
          <div className="routine-section-heading">
            <span className="routine-section-label">
              {text.environment.label}
            </span>

            <h2>{text.environment.title}</h2>
            <p>{text.environment.description}</p>
          </div>

          <div className="routine-environment-grid">
            {text.environment.items.map((item) => (
              <div key={item}>
                <i className="bi bi-check-circle-fill"></i>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ESTRATÉGIA */}
      <section className="routine-change-strategy">
        <div className="container routine-container">
          <div className="routine-change-strategy-box">
            <i className="bi bi-arrow-repeat"></i>

            <div>
              <span className="routine-section-label">
                {text.strategy.label}
              </span>

              <h2>{text.strategy.title}</h2>

              <p>{text.strategy.paragraph1}</p>
              <p>{text.strategy.paragraph2}</p>
            </div>
          </div>
        </div>
      </section>

      {/* KIT */}
      <section className="routine-kit">
        <div className="container routine-container">
          <div className="routine-section-heading">
            <span className="routine-section-label">{text.kit.label}</span>

            <h2>{text.kit.title}</h2>
          </div>

          <div className="routine-kit-grid">
            {text.kit.items.map(([icon, label]) => (
              <article key={label}>
                <i className={`bi ${icon}`}></i>
                <h3>{label}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* O QUE PODE NÃO AJUDAR */}
      <section className="routine-not-helpful">
        <div className="container routine-container">
          <div className="routine-section-heading">
            <span className="routine-section-label">
              {text.notHelpful.label}
            </span>

            <h2>{text.notHelpful.title}</h2>
          </div>

          <div className="routine-not-helpful-list">
            {text.notHelpful.items.map((item) => (
              <div key={item}>
                <i className="bi bi-x-circle"></i>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LINKS RELACIONADOS */}
      <section className="routine-related">
        <div className="container routine-container">
          <div className="routine-section-heading">
            <span className="routine-section-label">{text.related.label}</span>

            <h2>{text.related.title}</h2>
          </div>

          <div className="routine-related-grid">
            <article>
              <div className="routine-related-icon anxiety">
                <i className="bi bi-heart-pulse"></i>
              </div>

              <h3>{text.related.anxietyTitle}</h3>

              <p>{text.related.anxietyDescription}</p>

              <Link to={localizedPath("/ansiedade")} onClick={scrollToTop}>
                {text.related.anxietyLink}
                <i className="bi bi-arrow-right"></i>
              </Link>
            </article>

            <article>
              <div className="routine-related-icon overload">
                <i className="bi bi-cloud-lightning-rain"></i>
              </div>

              <h3>{text.related.overloadTitle}</h3>

              <p>{text.related.overloadDescription}</p>

              <Link
                to={localizedPath("/crises-sobrecarga")}
                onClick={scrollToTop}
              >
                {text.related.overloadLink}
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
