const overloadCrises = {
  hero: {
    label: "Vida diária",
    title: "Crises e sobrecarga",
    paragraph1:
      "Barulho, luz, mudanças inesperadas, exigências sociais, cansaço ou demasiadas coisas a acontecer ao mesmo tempo podem fazer com que uma pessoa autista chegue ao seu limite.",
    paragraph2:
      "Compreender o que está por trás de uma crise pode ajudar a reduzir o sofrimento e a encontrar formas de apoio mais adequadas.",
  },

  understanding: {
    label: "Quando tudo se torna demasiado",
    title: "O que é uma sobrecarga?",
    description:
      "A sobrecarga acontece quando a quantidade de estímulos, exigências ou emoções ultrapassa aquilo que a pessoa consegue processar naquele momento.",

    sensory: {
      title: "Sensorial",
      description:
        "Sons, luzes, cheiros, toque, temperatura, multidões ou vários estímulos a acontecer ao mesmo tempo.",
    },

    emotional: {
      title: "Emocional",
      description:
        "Ansiedade, frustração, conflitos, medo, expectativas ou emoções difíceis de identificar e comunicar.",
    },

    social: {
      title: "Social",
      description:
        "Conversas prolongadas, necessidade de interpretar outras pessoas, ambientes sociais intensos ou esforço para mascarar características autistas.",
    },

    demands: {
      title: "Exigências",
      description:
        "Muitas tarefas, decisões, instruções, responsabilidades ou mudanças sem tempo suficiente para recuperar.",
    },

    routine: {
      title: "Mudanças inesperadas",
      description:
        "Alterações de planos, atrasos, imprevistos ou mudanças numa rotina que ajudava a pessoa a sentir-se segura.",
    },

    fatigue: {
      title: "Cansaço acumulado",
      description:
        "Sono insuficiente, dias muito exigentes ou vários períodos de sobrecarga sem tempo suficiente para recuperação.",
    },
  },

  signs: {
    label: "Antes de chegar ao limite",
    title: "A sobrecarga pode dar sinais",
    description:
      "Algumas pessoas conseguem perceber que estão a aproximar-se do limite. Outras só percebem depois da crise. Os sinais também podem variar de pessoa para pessoa.",

    items: [
      "Maior irritabilidade ou impaciência",
      "Necessidade urgente de sair do ambiente",
      "Maior sensibilidade a sons, luz ou toque",
      "Dificuldade crescente em falar ou responder",
      "Choro, ansiedade ou agitação",
      "Aumento de movimentos repetitivos ou stimming",
      "Dificuldade em tomar decisões simples",
      "Necessidade de silêncio, isolamento ou escuridão",
    ],

    note: "Aprender a reconhecer os sinais individuais pode permitir interromper uma atividade, diminuir estímulos ou descansar antes que a sobrecarga se transforme numa crise.",
  },

  types: {
    label: "Duas formas diferentes de chegar ao limite",
    title: "Meltdown e shutdown",
    description:
      "A sobrecarga não se manifesta da mesma forma em todas as pessoas. Algumas reagem de forma muito visível; outras parecem desligar-se do que está à sua volta.",

    examples: "Pode incluir, por exemplo:",

    meltdown: {
      description:
        "É uma perda temporária de controlo causada por uma situação de sobrecarga intensa.",

      items: [
        "choro ou gritos;",
        "vocalizações;",
        "movimentos intensos;",
        "tentativa de fugir do ambiente;",
        "agressividade ou autoagressão em algumas situações;",
        "dificuldade em responder a instruções.",
      ],

      noteStrong: "Não é simplesmente uma birra.",
      note: "Durante um meltdown, a pessoa pode já não conseguir utilizar as estratégias que normalmente usa para se regular.",
    },

    shutdown: {
      description:
        "A sobrecarga também pode levar a uma resposta muito mais interna, em que a pessoa parece desligar-se ou fechar-se.",

      items: [
        "ficar em silêncio;",
        "não conseguir responder;",
        "dificuldade em falar;",
        "necessidade de ficar sozinho;",
        "imobilidade ou sensação de falta de energia;",
        "dificuldade em tomar decisões.",
      ],

      noteStrong: "Um shutdown também é uma forma de sobrecarga.",
      note: "O facto de ser menos visível não significa que a pessoa esteja menos angustiada.",
    },
  },

  during: {
    label: "Quando a crise já começou",
    title: "O que pode ajudar?",
    description:
      "Durante uma crise, o objetivo principal não deve ser corrigir o comportamento, discutir ou ensinar uma lição. Primeiro é necessário reduzir a sobrecarga e garantir segurança.",

    reduce: {
      title: "Reduza os estímulos",
      description:
        "Se possível, diminua ruído, luz, pessoas e outras fontes de estimulação.",
    },

    talk: {
      title: "Fale menos",
      description:
        "Frases curtas e simples podem ser mais fáceis de processar do que muitas perguntas ou explicações.",
    },

    leave: {
      title: "Permita sair",
      description:
        "Quando for seguro, possibilite que a pessoa se afaste do ambiente que está a causar a sobrecarga.",
    },

    touch: {
      title: "Evite tocar sem necessidade",
      description:
        "O contacto físico pode aumentar ainda mais a sobrecarga para algumas pessoas.",
    },

    safety: {
      title: "Priorize a segurança",
      description:
        "Afaste objetos perigosos e proteja a pessoa e quem estiver próximo sem aumentar desnecessariamente a tensão.",
    },

    time: {
      title: "Dê tempo",
      description:
        "A pessoa pode precisar de tempo para recuperar a capacidade de comunicar e processar o que aconteceu.",
    },

    warning:
      "Se existir risco imediato de a pessoa se magoar gravemente ou magoar outra pessoa, a prioridade é garantir segurança e procurar ajuda adequada à situação.",
  },

  recovery: {
    label: "Depois da sobrecarga",
    title: "A recuperação também precisa de tempo",
    description:
      "Uma crise pode deixar a pessoa extremamente cansada. Mesmo quando exteriormente já parece tranquila, o organismo pode continuar a recuperar.",

    items: [
      "silêncio e menor estimulação",
      "descanso ou sono",
      "atividades familiares e previsíveis",
      "stimming ou estratégias sensoriais",
      "menos exigências durante algum tempo",
      "tempo sozinho, quando desejado",
    ],

    noteStrong:
      "O momento imediatamente após a crise nem sempre é o melhor para analisar o que aconteceu.",
    note: "Essa conversa pode ser mais útil quando a pessoa estiver novamente regulada e disponível para comunicar.",
  },

  triggers: {
    label: "Perceber padrões",
    title: "O que aconteceu antes da crise?",
    description:
      "Em vez de olhar apenas para o comportamento durante a crise, pode ser útil observar o que aconteceu nas horas ou até nos dias anteriores.",

    noise: "O ambiente estava muito barulhento?",
    change: "Houve alguma mudança inesperada?",
    sleep: "A pessoa estava cansada ou dormiu pouco?",
    social: "Houve muita interação social?",
    demands: "Existiram demasiadas exigências?",
    physical: "Havia fome, sede ou desconforto físico?",
    communication: "A pessoa conseguia comunicar o que precisava?",
    accumulation: "Já vinha acumulando sobrecarga de outros dias?",
  },

  prevention: {
    label: "Reduzir a sobrecarga",
    title: "Prevenir não significa evitar tudo",
    description:
      "O objetivo não é eliminar todos os desafios da vida, mas criar condições que tornem o quotidiano mais sustentável para aquela pessoa.",

    items: [
      "Antecipar mudanças sempre que possível",
      "Planear pausas antes de a pessoa chegar ao limite",
      "Adaptar ambientes sensorialmente difíceis",
      "Respeitar formas alternativas de comunicação",
      "Permitir estratégias de autorregulação e stimming",
      "Equilibrar períodos exigentes com recuperação",
    ],
  },

  plan: {
    label: "Um plano individual",
    title: "Crie um “plano para a sobrecarga”",
    description:
      "Para crianças, adolescentes ou adultos que têm crises recorrentes, pode ser útil deixar registado aquilo que costuma ajudar.",

    items: [
      "Quais são os primeiros sinais de sobrecarga?",
      "Quais situações costumam ser mais difíceis?",
      "O que ajuda a pessoa a regular-se?",
      "O que costuma piorar a crise?",
      "Prefere silêncio, companhia ou ficar sozinho?",
      "Existe um local seguro para onde possa ir?",
      "Como comunica quando já não consegue falar?",
    ],
  },

  sources: {
    label: "Para saber mais",
    title: "Fontes e recursos",
    button: "Consultar fonte",

    nhs: {
      description:
        "Informação sobre apoio a crianças autistas, incluindo meltdowns, ambiente sensorial e mudanças de rotina.",
    },

    nas: {
      description:
        "Recursos sobre experiências de sobrecarga sensorial, meltdown e shutdown em pessoas autistas.",
    },
  },
};

export default overloadCrises;
