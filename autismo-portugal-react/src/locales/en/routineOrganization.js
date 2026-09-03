const routineOrganization = {
  hero: {
    label: "Daily life",
    title: "Routine and organisation",
    paragraph1:
      "For many autistic people, knowing what will happen and in what order can reduce uncertainty, make transitions easier and make the day more predictable.",
    paragraph2:
      "Having a routine does not mean living rigidly. The aim is to create enough structure to make everyday life easier to understand and more sustainable.",
  },

  predictability: {
    label: "Making the day more predictable",
    title: "Why can predictability help?",
    description:
      "Some autistic people particularly benefit from structure, advance notice and clear information about what is going to happen.",

    uncertainty: {
      title: "Less uncertainty",
      description:
        "Knowing what will happen can reduce the effort involved in constantly trying to anticipate different possibilities.",
    },

    transitions: {
      title: "Clearer transitions",
      description:
        "Knowing what is ending and what comes next can make moving between activities easier.",
    },

    decisions: {
      title: "Fewer decisions",
      description:
        "A routine can reduce the number of small decisions that need to be made throughout the day.",
    },

    preparation: {
      title: "Advance preparation",
      description:
        "Knowing when something will happen makes it possible to mentally organise time, energy and support strategies.",
    },
  },

  flexibility: {
    label: "Structure without turning everything into a rule",
    title: "Routine is not the same as rigidity",

    helpful: {
      title: "When routine helps",
      items: [
        "makes it clear what is going to happen;",
        "reduces mental effort;",
        "makes preparation easier;",
        "allows some flexibility;",
        "can be adapted when necessary.",
      ],
    },

    difficult: {
      title: "When it begins to cause distress",
      items: [
        "any change causes very intense distress;",
        "the person feels unable to move away from the sequence;",
        "the routine begins to prevent important activities;",
        "the need for control gradually increases;",
        "anxiety dominates the organisation of the day.",
      ],
    },

    note: "If a routine is functioning as a safety strategy in response to intense anxiety, removing it abruptly may make the situation more difficult.",
  },

  visual: {
    label: "Moving information out of your head",
    title: "Organising the day visually",
    description:
      "There is no universal system. Some people prefer a paper diary, while others work better with a phone, pictograms, alarms or simple lists.",

    tools: {
      calendar: "Calendar",
      checklist: "Checklist",
      weeklyBoard: "Weekly planner",
      alarms: "Alarms",
      apps: "Apps",
      postIts: "Post-it notes",
    },

    highlightStrong:
      "The best system is not necessarily the most attractive or complete.",
    highlight: "It is the one the person can actually check and use.",
  },

  steps: {
    label: "Making abstract tasks more concrete",
    title: "Break large tasks into small steps",
    description:
      "Instructions such as “tidy your room” or “deal with the documents” can contain many hidden decisions within a single sentence.",

    room: {
      title: "Instead of “tidy your room”",
      items: [
        "put dirty clothes in the laundry basket;",
        "put clean clothes away;",
        "put rubbish in the bin;",
        "tidy objects on the desk;",
        "make the bed.",
      ],
    },

    documents: {
      title: "Instead of “deal with the documents”",
      items: [
        "find the document;",
        "check the deadline;",
        "open the required website;",
        "complete the form;",
        "attach the files;",
        "save the confirmation.",
      ],
    },
  },

  initiation: {
    label: "When knowing what to do is not enough",
    title: "Starting a task can also be difficult",
    description:
      "A person may understand perfectly well what they need to do and still have difficulty starting the task.",

    items: [
      "not knowing where to start;",
      "having difficulty choosing between several options;",
      "being unable to switch from the current activity to another;",
      "having difficulty estimating how long something will take;",
      "being unable to resume easily after an interruption.",
    ],

    highlight:
      "Knowing how to do something and being able to start are not the same thing.",
  },

  transitions: {
    label: "Moving from one activity to another",
    title: "Transitions also require energy",
    description:
      "Stopping an activity, changing environments or starting something new may require more preparation than it appears.",

    examples: [
      "stopping a game to take a shower",
      "leaving the house",
      "moving to another room",
      "the weekend ending",
      "starting an obligation",
      "interrupting a preferred activity",
    ],

    warning: {
      title: "Give advance notice",
      description:
        "Giving advance notice that an activity is going to end can make the change less abrupt.",
    },

    timer: {
      title: "Use timers",
      description:
        "A timer can make the amount of time remaining more visible.",
    },

    next: {
      title: "Show what comes next",
      description:
        "Explaining the next step makes the transition more predictable.",
    },
  },

  time: {
    label: "Making time more concrete",
    title: "“In a little while” can be too vague",
    paragraph1:
      "For some people, imprecise expressions such as “later”, “we're going soon” or “in a little while” provide very little information about how much time is actually left.",
    vague: "“We're leaving in a little while.”",
    specific: "“We're leaving at 3:30 pm.”",
    paragraph2:
      "Clocks, timers, alarms and specific times can help make the passage of time more visible.",
  },

  changes: {
    label: "When the plan is no longer the plan",
    title: "What can help when something changes?",

    planA: {
      label: "Plan A",
      text: "Appointment at 2:00 pm",
    },

    change: {
      label: "Change",
      text: "The appointment is running 40 minutes late",
    },

    newPlan: {
      label: "New plan",
      text: "Appointment now expected at 2:40 pm",
    },

    highlightBefore: "When something changes, it can help to explain not only",
    whatChanged: "what changed",
    highlightMiddle: "but also",
    whatStayed: "what is staying the same",
  },

  energy: {
    label: "Organisation also involves recovery",
    title: "Energy is also part of planning",
    description:
      "Two activities of the same duration can use completely different amounts of energy.",

    items: {
      workSchool: "work or school",
      appointments: "appointments",
      socialEvents: "social events",
      travel: "travel",
      sensory: "sensory-intensive environments",
      socialInteraction: "prolonged social interaction",
    },

    note: "An apparently empty calendar does not necessarily mean that the person has energy available. Rest and recovery may also need space in the routine.",
  },

  children: {
    label: "Children and teenagers",
    title: "Simple routines can make the day clearer",

    morning: {
      title: "Morning routine",
      items: [
        "wake up",
        "get dressed",
        "have breakfast",
        "brush teeth",
        "pick up school bag",
        "leave",
      ],
    },

    afterSchool: {
      title: "After school",
      items: [
        "arrive home",
        "decompression time",
        "snack",
        "necessary tasks",
        "free activity",
        "dinner",
      ],
    },

    note: "Some children need a period of recovery after school before they are able to deal with new demands.",
  },

  adults: {
    label: "Adult life",
    title: "Organisation does not end when we grow up",
    description:
      "Work, meals, bills, shopping, appointments, household tasks and rest all compete for the same amount of time and energy.",

    today: {
      label: "Today",
      text: "What genuinely needs to happen today?",
    },

    week: {
      label: "This week",
      text: "What can be spread across the next few days?",
    },

    later: {
      label: "Later",
      text: "What does not need to take up mental space right now?",
    },

    note: "Separating tasks by priority may be less overwhelming than keeping one enormous list of everything that needs to be done.",
  },

  memory: {
    label: "Not relying only on memory",
    title: "Externalising memory",
    description:
      "Instead of trying to remember everything mentally, some information can be placed in the environment.",

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
    title: "Create fixed places for important objects",
    description:
      "Having a predictable place for objects used every day can reduce searching time and mental effort.",

    items: {
      keys: "keys",
      wallet: "wallet",
      documents: "documents",
      backpack: "bag",
      medication: "medication",
      chargers: "chargers",
    },
  },

  environment: {
    label: "Organising the environment",
    title: "Being organised does not mean hiding everything",
    description:
      "For some people, reducing visual clutter helps. For others, keeping important objects visible is essential in order to remember that they exist.",

    items: [
      "use simple boxes and labels",
      "group objects by function",
      "keep important items accessible",
      "avoid excessively complicated systems",
      "reduce sensory stimuli when helpful",
      "create a space for rest",
    ],
  },

  changeStrategy: {
    label: "Adjusting is part of the process too",
    title: "When a strategy stops working",
    paragraph1:
      "A routine may work for months and stop being useful when school, work, schedules, stress levels or the person's needs change.",
    paragraph2:
      "There is no need to continue using a system simply because it worked before. Organisation strategies can and should be reviewed.",
  },

  kit: {
    label: "Simple tools",
    title: "A small organisation toolkit",

    items: {
      calendar: "Calendar",
      timer: "Timer",
      checklist: "Checklist",
      weeklyBoard: "Weekly planner",
      alarms: "Alarms",
      labels: "Labels",
    },
  },

  notHelpful: {
    label: "When organising creates more work",
    title: "What may not help?",

    items: [
      "huge lists with no prioritisation",
      "schedules with every minute filled",
      "changing several routines at once",
      "systems that are more complicated than the task itself",
      "using routines as punishment or control",
      "interpreting executive difficulties as laziness",
    ],
  },

  related: {
    label: "You may also find these useful",
    title: "Related topics",

    anxiety: {
      title: "Anxiety",
      description:
        "When changes, commitments or uncertainty cause significant distress.",
      button: "Read about anxiety",
    },

    overload: {
      title: "Crises and overload",
      description:
        "When accumulated stimulation and demands cause the person to reach their limit.",
      button: "Read about crises and overload",
    },
  },
};

export default routineOrganization;
