const psi = {
  hero: {
    label: "Direitos e apoios",
    title: "PSI — Prestação Social para a Inclusão",
    description:
      "A Prestação Social para a Inclusão é um apoio destinado a pessoas com deficiência ou incapacidade, com o objetivo de promover a autonomia, a inclusão social e reforçar a proteção económica em situações de maior vulnerabilidade.",
  },

  eligibility: {
    label: "Começar pelo essencial",
    title: "Quem pode ter direito?",
    description:
      "Em regra, a PSI destina-se a pessoas com residência legal em Portugal e com um grau de incapacidade igual ou superior a 60%, desde que estejam cumpridas as restantes condições previstas.",

    disability: {
      title: "Grau de incapacidade",
      description:
        "É necessário comprovar o grau de incapacidade reconhecido, normalmente através do AMIM.",
    },

    residence: {
      title: "Residência",
      description:
        "Existem condições relacionadas com a residência legal em Portugal que devem ser verificadas no momento do pedido.",
    },

    conditions: {
      title: "Outras condições",
      description:
        "A atribuição e o valor podem depender da idade, rendimentos e situação concreta do beneficiário.",
    },

    note: "Ter um AMIM com incapacidade igual ou superior a 60% não significa que todas as pessoas recebam exatamente o mesmo valor. Existem regras diferentes para cada componente da prestação.",
  },

  components: {
    imageAlt: "Ilustração relacionada com benefícios e apoios sociais",
    label: "Como funciona a prestação",
    title: "A PSI tem duas partes",
    description:
      "Atualmente, a Prestação Social para a Inclusão inclui uma componente base e um complemento. Cada uma tem uma finalidade e regras próprias.",

    valueLabel: "Valor de referência mensal em 2026",

    base: {
      title: "Componente base",
      description:
        "Destina-se a compensar encargos gerais acrescidos associados à deficiência e a contribuir para a autonomia e inclusão social da pessoa.",
      note: "Este é um valor de referência. O valor efetivamente recebido pode ser diferente consoante a situação e os rendimentos considerados.",
    },

    complement: {
      title: "Complemento",
      description:
        "É um reforço dirigido a pessoas com deficiência que vivem sozinhas ou pertencem a agregados familiares com insuficiência de recursos.",
      note: "O complemento depende da composição e dos rendimentos do agregado familiar e não corresponde automaticamente ao valor máximo de referência.",
    },

    warning: {
      title: "Os valores não devem ser simplesmente somados",
      description:
        "Os valores de referência da componente base e do complemento não significam que todas as pessoas possam receber automaticamente a soma dos dois valores. O montante depende das regras aplicáveis a cada componente.",
    },
  },

  children: {
    label: "Crianças e jovens",
    title: "E no caso de uma criança?",
    paragraph1:
      "Quando o beneficiário é menor de idade, o pedido pode ser apresentado pelos pais ou pelo representante legal, de acordo com as regras aplicáveis.",
    paragraph2:
      "É importante perceber que a prestação pertence à criança ou ao jovem com deficiência, mesmo quando são os pais que tratam do pedido e recebem o pagamento em sua representação.",
    highlight:
      "A PSI não deve ser confundida com outros apoios destinados especificamente aos pais ou ao agregado familiar.",
  },

  amim: {
    label: "Comprovar a incapacidade",
    title: "Preciso do AMIM?",
    description:
      "Para pedir a PSI é necessário comprovar o grau de incapacidade nos termos previstos. O AMIM é o documento habitualmente utilizado para essa certificação.",
    button: "Saiba mais sobre o AMIM",
  },

  request: {
    label: "Passo a passo",
    title: "Como pedir a PSI?",
    description:
      "Antes de iniciar o pedido, vale a pena reunir os documentos necessários e confirmar as condições aplicáveis à situação do beneficiário.",

    steps: [
      {
        title: "Confirmar o grau de incapacidade",
        description:
          "Verifique se existe certificação válida do grau de incapacidade exigido para a prestação.",
      },
      {
        title: "Reunir os dados necessários",
        description:
          "Tenha consigo os dados de identificação, informação sobre o grau de incapacidade e outros elementos que possam ser solicitados pela Segurança Social.",
      },
      {
        title: "Apresentar o pedido",
        description:
          "O pedido é tratado através dos canais disponibilizados pela Segurança Social.",
      },
      {
        title: "Aguardar a análise",
        description:
          "A Segurança Social analisa se estão reunidas as condições e calcula o valor aplicável à situação.",
      },
      {
        title: "Comunicar alterações relevantes",
        description:
          "Mudanças de rendimentos, agregado familiar ou outras situações relevantes podem ter impacto na prestação.",
      },
    ],
  },

  income: {
    label: "Cálculo da prestação",
    title: "O rendimento da família conta?",
    description: "Depende da componente da PSI e da situação do beneficiário.",

    base: {
      title: "Componente base",
      description:
        "Existem regras próprias relativas aos rendimentos considerados e à forma como estes podem influenciar o valor da componente base.",
    },

    complement: {
      title: "Complemento",
      description:
        "O complemento destina-se a combater situações de insuficiência de recursos. Por isso, a composição e os rendimentos do agregado familiar são particularmente relevantes.",
    },

    note: "As regras de cálculo podem ser complexas e os valores são atualizados. Para saber quanto poderá receber numa situação concreta, confirme os critérios atuais junto da Segurança Social.",
  },

  work: {
    label: "PSI e emprego",
    title: "É possível trabalhar e receber PSI?",
    paragraph1:
      "Receber a PSI não significa necessariamente que a pessoa esteja impedida de trabalhar.",
    paragraph2:
      "Existem regras que permitem a acumulação da componente base com rendimentos de trabalho dentro dos limites previstos na legislação.",
    highlightStrong:
      "Começar a trabalhar não significa automaticamente perder a PSI.",
    highlight:
      "No entanto, os rendimentos podem influenciar o valor recebido, pelo que alterações devem ser comunicadas e analisadas de acordo com as regras atuais.",
  },

  differences: {
    label: "Evitar confusões",
    title: "A PSI não é o mesmo que...",

    amim: "O AMIM certifica o grau de incapacidade. A PSI é uma prestação financeira.",

    education: {
      title: "Subsídio de Educação Especial",
      description:
        "É um apoio diferente, com finalidade e condições de acesso próprias.",
    },

    allowance: {
      title: "Bonificação por deficiência",
      description:
        "Também corresponde a outro apoio da Segurança Social, sujeito a regras específicas.",
    },
  },

  help: {
    label: "Precisa de esclarecimentos?",
    description:
      "O Balcão da Inclusão pode prestar informação sobre a Prestação Social para a Inclusão, AMIM, benefícios fiscais, proteção social e outros direitos relacionados com deficiência ou incapacidade.",
    button: "Consultar o Balcão da Inclusão",
  },

  update: {
    title: "Confirme sempre os valores atuais",
    description:
      "Os valores de referência, limites de rendimentos e regras de algumas prestações sociais podem ser atualizados. Antes de fazer o pedido ou tomar uma decisão com base num determinado valor, consulte a informação mais recente da Segurança Social ou do gov.pt.",
  },

  sources: {
    label: "Informação oficial",
    title: "Fontes e recursos",
    button: "Consultar fonte",

    psi: {
      description:
        "Informação oficial sobre condições de acesso, pedido e funcionamento da PSI.",
    },

    inclusion: {
      description:
        "Serviço de informação sobre deficiência, proteção social, AMIM, PSI e outros direitos.",
    },
  },
};

export default psi;
