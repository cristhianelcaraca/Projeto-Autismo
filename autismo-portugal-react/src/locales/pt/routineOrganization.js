const routineOrganization = {
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

    uncertainty: {
      title: "Menos incerteza",
      description:
        "Saber o que vai acontecer pode reduzir o esforço de tentar antecipar constantemente diferentes possibilidades.",
    },

    transitions: {
      title: "Transições mais claras",
      description:
        "Conhecer o que termina e o que vem a seguir pode facilitar a mudança entre atividades.",
    },

    decisions: {
      title: "Menos decisões",
      description:
        "Uma rotina pode reduzir a quantidade de pequenas decisões que precisam de ser tomadas ao longo do dia.",
    },

    preparation: {
      title: "Preparação antecipada",
      description:
        "Saber quando algo vai acontecer permite organizar mentalmente tempo, energia e estratégias de apoio.",
    },
  },

  flexibility: {
    label: "Estrutura sem transformar tudo numa regra",
    title: "Rotina não é o mesmo que rigidez",

    helpful: {
      title: "Quando a rotina ajuda",
      items: [
        "deixa claro o que vai acontecer;",
        "reduz esforço mental;",
        "facilita a preparação;",
        "permite alguma flexibilidade;",
        "pode ser adaptada quando necessário.",
      ],
    },

    difficult: {
      title: "Quando começa a gerar sofrimento",
      items: [
        "qualquer mudança provoca sofrimento muito intenso;",
        "a pessoa sente que não consegue sair da sequência;",
        "a rotina começa a impedir atividades importantes;",
        "a necessidade de controlo aumenta progressivamente;",
        "a ansiedade domina a organização do dia.",
      ],
    },

    note: "Se uma rotina está a funcionar como estratégia de segurança perante ansiedade intensa, retirá-la de forma abrupta pode tornar a situação mais difícil.",
  },

  visual: {
    label: "Colocar a informação fora da cabeça",
    title: "Organizar o dia visualmente",
    description:
      "Não existe um sistema universal. Algumas pessoas preferem uma agenda em papel, outras funcionam melhor com o telemóvel, pictogramas, alarmes ou listas simples.",

    tools: {
      calendar: "Calendário",
      checklist: "Checklist",
      weeklyBoard: "Quadro semanal",
      alarms: "Alarmes",
      apps: "Aplicações",
      postIts: "Post-its",
    },

    highlightStrong:
      "O melhor sistema não é necessariamente o mais bonito ou completo.",
    highlight: "É aquele que a pessoa realmente consegue consultar e utilizar.",
  },

  steps: {
    label: "Tornar tarefas abstratas mais concretas",
    title: "Dividir tarefas grandes em passos pequenos",
    description:
      "Instruções como “arruma o quarto” ou “trata dos documentos” podem envolver muitas decisões escondidas dentro de uma única frase.",

    room: {
      title: "Em vez de “arrumar o quarto”",
      items: [
        "colocar roupa suja no cesto;",
        "guardar roupa limpa;",
        "colocar lixo no caixote;",
        "arrumar objetos da secretária;",
        "fazer a cama.",
      ],
    },

    documents: {
      title: "Em vez de “tratar dos documentos”",
      items: [
        "encontrar o documento;",
        "verificar o prazo;",
        "abrir o site necessário;",
        "preencher o formulário;",
        "anexar os ficheiros;",
        "guardar o comprovativo.",
      ],
    },
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

    warning: {
      title: "Avisar antes",
      description:
        "Antecipar que uma atividade vai terminar pode tornar a mudança menos abrupta.",
    },

    timer: {
      title: "Usar temporizadores",
      description:
        "Um timer pode tornar mais visível quanto tempo ainda falta.",
    },

    next: {
      title: "Mostrar o que vem depois",
      description:
        "Explicar a próxima etapa torna a transição mais previsível.",
    },
  },

  time: {
    label: "Tornar o tempo mais concreto",
    title: "“Daqui a pouco” pode ser demasiado vago",
    paragraph1:
      "Para algumas pessoas, expressões imprecisas como “mais tarde”, “já vamos” ou “daqui a pouco” dão pouca informação sobre quanto tempo realmente falta.",
    vague: "“Saímos daqui a pouco.”",
    specific: "“Saímos às 15:30.”",
    paragraph2:
      "Relógios, temporizadores, alarmes e horários concretos podem ajudar a tornar a passagem do tempo mais visível.",
  },

  changes: {
    label: "Quando o plano deixa de ser o plano",
    title: "O que fazer quando alguma coisa muda?",

    planA: {
      label: "Plano A",
      text: "Consulta às 14:00",
    },

    change: {
      label: "Mudança",
      text: "A consulta atrasou 40 minutos",
    },

    newPlan: {
      label: "Novo plano",
      text: "Consulta prevista para as 14:40",
    },

    highlightBefore: "Quando algo muda, pode ajudar explicar não apenas",
    whatChanged: "o que mudou",
    highlightMiddle: "mas também",
    whatStayed: "o que continua igual",
  },

  energy: {
    label: "Organização também envolve recuperação",
    title: "Energia também faz parte do planeamento",
    description:
      "Duas atividades com a mesma duração podem consumir quantidades de energia completamente diferentes.",

    items: {
      workSchool: "trabalho ou escola",
      appointments: "consultas",
      socialEvents: "eventos sociais",
      travel: "deslocações",
      sensory: "ambientes sensorialmente intensos",
      socialInteraction: "interação social prolongada",
    },

    note: "Um calendário aparentemente vazio não significa necessariamente que a pessoa tenha energia disponível. Descanso e recuperação também podem precisar de espaço na rotina.",
  },

  children: {
    label: "Crianças e adolescentes",
    title: "Rotinas simples podem tornar o dia mais claro",

    morning: {
      title: "Rotina da manhã",
      items: [
        "acordar",
        "vestir",
        "tomar o pequeno-almoço",
        "lavar os dentes",
        "pegar na mochila",
        "sair",
      ],
    },

    afterSchool: {
      title: "Depois da escola",
      items: [
        "chegar a casa",
        "tempo de descompressão",
        "lanche",
        "tarefas necessárias",
        "atividade livre",
        "jantar",
      ],
    },

    note: "Algumas crianças precisam de um período de recuperação depois da escola antes de conseguirem lidar com novas exigências.",
  },

  adults: {
    label: "Vida adulta",
    title: "Organização não termina quando crescemos",
    description:
      "Trabalho, refeições, contas, compras, consultas, tarefas domésticas e descanso competem pela mesma quantidade de tempo e energia.",

    today: {
      label: "Hoje",
      text: "O que realmente precisa de acontecer hoje?",
    },

    week: {
      label: "Esta semana",
      text: "O que pode ser distribuído pelos próximos dias?",
    },

    later: {
      label: "Depois",
      text: "O que não precisa de ocupar espaço mental agora?",
    },

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

    items: {
      keys: "chaves",
      wallet: "carteira",
      documents: "documentos",
      backpack: "mochila",
      medication: "medicação",
      chargers: "carregadores",
    },
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

  changeStrategy: {
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

    items: {
      calendar: "Calendário",
      timer: "Timer",
      checklist: "Checklist",
      weeklyBoard: "Quadro semanal",
      alarms: "Alarmes",
      labels: "Etiquetas",
    },
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

    anxiety: {
      title: "Ansiedade",
      description:
        "Quando mudanças, compromissos ou incerteza provocam sofrimento significativo.",
      button: "Ler sobre ansiedade",
    },

    overload: {
      title: "Crises e sobrecarga",
      description:
        "Quando a acumulação de estímulos e exigências leva a pessoa ao limite.",
      button: "Ler sobre crises e sobrecarga",
    },
  },
};

export default routineOrganization;
