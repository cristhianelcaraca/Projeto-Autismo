const autismQuiz = {
  questions: {
    1: "Does the child have difficulty establishing or maintaining eye contact during interactions?",
    2: "Does the child sometimes not respond when called by name, even when there are no known hearing difficulties?",
    3: "Does the child rarely point to something interesting simply to share that interest with another person?",
    4: "Does the child have difficulty following another person's gaze or gesture to understand what they are looking at?",
    5: "Does the child have difficulty interpreting or using facial expressions during interactions?",
    6: "Does the child show little interest in initiating or maintaining play with other children of the same age?",
    7: "Does the child have difficulty spontaneously imitating other people's gestures or actions?",
    8: "Does the child rarely spontaneously share interests, achievements or experiences with other people?",
    9: "Does the child show little or no imaginative or pretend play?",
    10: "Does the child use toys or objects in repetitive ways or focus particularly on certain parts of them?",
    11: "Does the child like to line up or arrange objects in a specific way and become upset when that arrangement is changed?",
    12: "Does the child display repetitive movements, such as hand flapping, rocking the body or other similar movements?",
    13: "Can small changes in routine cause a high level of distress or anxiety?",
    14: "Does the child have particularly intense or highly specific interests to which they devote a considerable amount of time and attention?",
    15: "Does the child show a particularly strong attachment to certain objects, including objects that are not usually used as toys?",
    16: "Does the child react very strongly to certain everyday sounds?",
    17: "Does the child show significant discomfort with certain textures, clothes, labels or materials?",
    18: "Does the child have significant food selectivity related to the texture, smell, temperature or appearance of food?",
    19: "Does the child show a particularly strong interest in visual stimuli, such as spinning objects, reflections or lights?",
    20: "Does the child seem to respond to pain, temperature or other physical stimuli much more strongly or much less strongly than expected?",
  },

  start: {
    warning:
      "This questionnaire is for informational purposes only. It is not a validated clinical tool and cannot diagnose or rule out autism.",
    button: "Start questionnaire",
  },

  progress: "Question {{current}} of {{total}}",

  answers: {
    yes: "Yes",
    no: "No",
  },

  previous: "Previous",

  results: {
    few: {
      title: "Few characteristics were identified",
      text: "Your answers indicate few or none of the characteristics included in this questionnaire. This does not rule out autism, as characteristics can present very differently between people and throughout development.",
    },

    some: {
      title: "Some characteristics were identified",
      text: "Your answers indicate the presence of some characteristics that may also be observed in autistic people. On their own, these characteristics cannot determine whether or not a child is autistic.",
    },

    several: {
      title: "Several characteristics were identified",
      text: "Your answers indicate the presence of several of the characteristics covered in this questionnaire. This does not necessarily mean that the child is autistic, but it may be useful to consider whether these characteristics are persistent, occur in different contexts or have a significant impact on everyday life.",
    },
  },

  completed: {
    title: "Questionnaire completed",

    total: "You identified {{selected}} of {{total}} characteristics.",

    recommendation:
      "If these characteristics are persistent, occur in different contexts or have a significant impact on the child's everyday life, consider discussing them with a healthcare professional.",

    disclaimer:
      "This result is for informational purposes only and cannot diagnose or rule out autism.",

    restart: "Start again",
  },

  categories: {
    social: "Communication and social interaction",
    behavior: "Behaviours and interests",
    sensory: "Sensory processing",
  },
};

export default autismQuiz;
