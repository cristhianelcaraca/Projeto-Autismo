const psi = {
  hero: {
    label: "Rights and support",
    title: "PSI — Social Inclusion Benefit",
    description:
      "The Prestação Social para a Inclusão (PSI), or Social Inclusion Benefit, is a form of support for people with disabilities, intended to promote autonomy and social inclusion and strengthen financial protection in situations of greater vulnerability.",
  },

  eligibility: {
    label: "Starting with the essentials",
    title: "Who may be eligible?",
    description:
      "As a general rule, the PSI is intended for people legally residing in Portugal with a certified degree of disability of 60% or more, provided that the remaining eligibility requirements are met.",

    disability: {
      title: "Degree of disability",
      description:
        "The recognised degree of disability must be certified, usually through the AMIM.",
    },

    residence: {
      title: "Residence",
      description:
        "There are requirements relating to legal residence in Portugal that should be checked when applying.",
    },

    conditions: {
      title: "Other conditions",
      description:
        "Eligibility and the amount received may depend on the beneficiary's age, income and individual circumstances.",
    },

    note: "Having an AMIM certifying a degree of disability of 60% or more does not mean that everyone receives exactly the same amount. Different rules apply to each component of the benefit.",
  },

  components: {
    imageAlt: "Illustration related to social benefits and support",
    label: "How the benefit works",
    title: "The PSI has two components",
    description:
      "The Social Inclusion Benefit currently includes a base component and a supplement. Each has its own purpose and rules.",

    valueLabel: "Monthly reference amount in 2026",

    base: {
      title: "Base component",
      description:
        "It is intended to compensate for additional general costs associated with disability and contribute to the person's autonomy and social inclusion.",
      note: "This is a reference amount. The amount actually received may differ depending on the person's circumstances and the income taken into account.",
    },

    complement: {
      title: "Supplement",
      description:
        "This provides additional support for people with disabilities who live alone or belong to households with insufficient financial resources.",
      note: "The supplement depends on household composition and income and does not automatically correspond to the maximum reference amount.",
    },

    warning: {
      title: "The amounts should not simply be added together",
      description:
        "The reference amounts for the base component and supplement do not mean that everyone can automatically receive the sum of both amounts. The amount depends on the rules applicable to each component.",
    },
  },

  children: {
    label: "Children and young people",
    title: "What about a child?",
    paragraph1:
      "When the beneficiary is under 18, the application may be submitted by their parents or legal representative in accordance with the applicable rules.",
    paragraph2:
      "It is important to understand that the benefit belongs to the child or young person with a disability, even when the parents handle the application and receive the payment on their behalf.",
    highlight:
      "The PSI should not be confused with other forms of support intended specifically for parents or the household.",
  },

  amim: {
    label: "Certifying the disability",
    title: "Do I need an AMIM?",
    description:
      "To apply for the PSI, the degree of disability must be certified in accordance with the applicable requirements. The AMIM is the document normally used for this certification.",
    button: "Learn more about the AMIM",
  },

  request: {
    label: "Step by step",
    title: "How do I apply for the PSI?",
    description:
      "Before starting the application, it is useful to gather the necessary documents and confirm the requirements applicable to the beneficiary's situation.",

    steps: [
      {
        title: "Confirm the degree of disability",
        description:
          "Check that there is valid certification of the degree of disability required for the benefit.",
      },
      {
        title: "Gather the necessary information",
        description:
          "Have identification details, information about the certified degree of disability and any other information that may be requested by Portuguese Social Security.",
      },
      {
        title: "Submit the application",
        description:
          "The application is handled through the channels provided by Portuguese Social Security.",
      },
      {
        title: "Wait for the assessment",
        description:
          "Portuguese Social Security assesses whether the requirements are met and calculates the amount applicable to the beneficiary's circumstances.",
      },
      {
        title: "Report relevant changes",
        description:
          "Changes in income, household composition or other relevant circumstances may affect the benefit.",
      },
    ],
  },

  income: {
    label: "Calculating the benefit",
    title: "Does household income matter?",
    description:
      "It depends on the PSI component and the beneficiary's circumstances.",

    base: {
      title: "Base component",
      description:
        "Specific rules determine which income is taken into account and how it may affect the amount of the base component.",
    },

    complement: {
      title: "Supplement",
      description:
        "The supplement is intended to address situations involving insufficient financial resources. Household composition and income are therefore particularly relevant.",
    },

    note: "The calculation rules can be complex and the amounts may be updated. To find out how much may be payable in a specific situation, check the current criteria with Portuguese Social Security.",
  },

  work: {
    label: "PSI and employment",
    title: "Can you work and receive the PSI?",
    paragraph1:
      "Receiving the PSI does not necessarily mean that a person is unable to work.",
    paragraph2:
      "There are rules allowing the base component to be combined with employment income within the limits established by law.",
    highlightStrong:
      "Starting work does not automatically mean losing the PSI.",
    highlight:
      "However, income may affect the amount received, so changes should be reported and assessed according to the current rules.",
  },

  differences: {
    label: "Avoiding confusion",
    title: "The PSI is not the same as...",

    amim: "The AMIM certifies the degree of disability. The PSI is a financial benefit.",

    education: {
      title: "Special Education Allowance",
      description:
        "This is a separate form of support with its own purpose and eligibility requirements.",
    },

    allowance: {
      title: "Disability supplement",
      description:
        "This is another form of support provided by Portuguese Social Security and is subject to specific rules.",
    },
  },

  help: {
    label: "Need more information?",
    description:
      "Balcão da Inclusão can provide information about the Social Inclusion Benefit, AMIM, tax benefits, social protection and other rights related to disability.",
    button: "Visit Balcão da Inclusão",
  },

  update: {
    title: "Always check the current amounts",
    description:
      "Reference amounts, income limits and rules for some social benefits may be updated. Before applying or making a decision based on a particular amount, check the latest information from Portuguese Social Security or gov.pt.",
  },

  sources: {
    label: "Official information",
    title: "Sources and resources",
    button: "View source",

    psi: {
      description:
        "Official information about PSI eligibility requirements, applications and how the benefit works.",
    },

    inclusion: {
      description:
        "Information service covering disability, social protection, AMIM, PSI and other rights.",
    },
  },
};

export default psi;
