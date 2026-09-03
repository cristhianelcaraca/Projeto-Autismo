const autismQuiz = {
  questions: {
    1: "A criança tem dificuldade em estabelecer ou manter contacto visual durante as interações?",
    2: "A criança nem sempre responde quando é chamada pelo nome, mesmo quando não existem dificuldades auditivas conhecidas?",
    3: "A criança raramente aponta para mostrar algo interessante apenas para partilhar esse interesse com outra pessoa?",
    4: "A criança tem dificuldade em seguir o olhar ou o gesto de outra pessoa para perceber o que ela está a observar?",
    5: "A criança demonstra dificuldade em interpretar ou utilizar expressões faciais durante as interações?",
    6: "A criança demonstra pouco interesse em iniciar ou manter brincadeiras com outras crianças da mesma idade?",
    7: "A criança apresenta dificuldade em imitar espontaneamente gestos ou ações de outras pessoas?",
    8: "A criança raramente procura partilhar espontaneamente interesses, conquistas ou experiências com outras pessoas?",
    9: "A criança demonstra pouca ou nenhuma brincadeira imaginativa ou de faz de conta?",
    10: "A criança utiliza brinquedos ou objetos de formas repetitivas ou concentra-se especialmente em determinadas partes deles?",
    11: "A criança gosta de alinhar ou organizar objetos de uma forma específica e fica incomodada quando essa organização é alterada?",
    12: "A criança apresenta movimentos repetitivos, como abanar as mãos, balançar o corpo ou outros movimentos semelhantes?",
    13: "Pequenas alterações na rotina podem provocar um nível elevado de desconforto ou ansiedade?",
    14: "A criança apresenta interesses particularmente intensos ou muito específicos, aos quais dedica bastante tempo e atenção?",
    15: "A criança demonstra um apego particularmente intenso a determinados objetos, incluindo objetos que habitualmente não são usados como brinquedos?",
    16: "A criança reage de forma muito intensa a determinados sons do quotidiano?",
    17: "A criança demonstra forte desconforto com determinadas texturas, roupas, etiquetas ou materiais?",
    18: "A criança apresenta seletividade alimentar significativa relacionada com textura, cheiro, temperatura ou aparência dos alimentos?",
    19: "A criança demonstra interesse particularmente intenso por estímulos visuais, como objetos que giram, reflexos ou luzes?",
    20: "A criança parece reagir à dor, temperatura ou outros estímulos físicos de forma muito mais intensa ou muito menos intensa do que seria esperado?",
  },

  start: {
    warning:
      "Este questionário é apenas informativo. Não é um instrumento clínico validado e não permite diagnosticar ou excluir autismo.",
    button: "Iniciar questionário",
  },

  progress: "Pergunta {{current}} de {{total}}",

  answers: {
    yes: "Sim",
    no: "Não",
  },

  previous: "Anterior",

  results: {
    few: {
      title: "Poucas características foram assinaladas",
      text: "As suas respostas indicam poucas ou nenhuma das características incluídas neste questionário. Isto não permite excluir autismo, uma vez que as características podem manifestar-se de formas muito diferentes entre pessoas e ao longo do desenvolvimento.",
    },

    some: {
      title: "Algumas características foram assinaladas",
      text: "As suas respostas indicam a presença de algumas características que também podem ser observadas em pessoas autistas. Isoladamente, estas características não permitem determinar se uma criança é ou não autista.",
    },

    several: {
      title: "Foram assinaladas várias características",
      text: "As suas respostas indicam a presença de várias das características abordadas neste questionário. Isto não significa necessariamente que a criança seja autista, mas pode ser útil observar se estas características são persistentes, aparecem em diferentes contextos ou têm impacto significativo no dia a dia.",
    },
  },

  completed: {
    title: "Questionário concluído",

    total: "Assinalou {{selected}} de {{total}} características.",

    recommendation:
      "Se estas características são persistentes, aparecem em diferentes contextos ou têm impacto significativo no dia a dia da criança, considere conversar com um profissional de saúde.",

    disclaimer:
      "Este resultado é apenas informativo e não permite diagnosticar ou excluir autismo.",

    restart: "Recomeçar",
  },

  categories: {
    social: "Comunicação e interação social",
    behavior: "Comportamentos e interesses",
    sensory: "Processamento sensorial",
  },
};

export default autismQuiz;
