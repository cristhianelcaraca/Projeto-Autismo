import { useState } from "react";

function AutismCharacteristicsQuiz() {
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [completed, setCompleted] = useState(false);

  const questions = [
    {
      id: 1,
      category: "social",
      text: "A criança tem dificuldade em estabelecer ou manter contacto visual durante as interações?",
      characteristicAnswer: "sim",
    },
    {
      id: 2,
      category: "social",
      text: "A criança nem sempre responde quando é chamada pelo nome, mesmo quando não existem dificuldades auditivas conhecidas?",
      characteristicAnswer: "sim",
    },
    {
      id: 3,
      category: "social",
      text: "A criança raramente aponta para mostrar algo interessante apenas para partilhar esse interesse com outra pessoa?",
      characteristicAnswer: "sim",
    },
    {
      id: 4,
      category: "social",
      text: "A criança tem dificuldade em seguir o olhar ou o gesto de outra pessoa para perceber o que ela está a observar?",
      characteristicAnswer: "sim",
    },
    {
      id: 5,
      category: "social",
      text: "A criança demonstra dificuldade em interpretar ou utilizar expressões faciais durante as interações?",
      characteristicAnswer: "sim",
    },
    {
      id: 6,
      category: "social",
      text: "A criança demonstra pouco interesse em iniciar ou manter brincadeiras com outras crianças da mesma idade?",
      characteristicAnswer: "sim",
    },
    {
      id: 7,
      category: "social",
      text: "A criança apresenta dificuldade em imitar espontaneamente gestos ou ações de outras pessoas?",
      characteristicAnswer: "sim",
    },
    {
      id: 8,
      category: "social",
      text: "A criança raramente procura partilhar espontaneamente interesses, conquistas ou experiências com outras pessoas?",
      characteristicAnswer: "sim",
    },

    {
      id: 9,
      category: "behavior",
      text: "A criança demonstra pouca ou nenhuma brincadeira imaginativa ou de faz de conta?",
      characteristicAnswer: "sim",
    },
    {
      id: 10,
      category: "behavior",
      text: "A criança utiliza brinquedos ou objetos de formas repetitivas ou concentra-se especialmente em determinadas partes deles?",
      characteristicAnswer: "sim",
    },
    {
      id: 11,
      category: "behavior",
      text: "A criança gosta de alinhar ou organizar objetos de uma forma específica e fica incomodada quando essa organização é alterada?",
      characteristicAnswer: "sim",
    },
    {
      id: 12,
      category: "behavior",
      text: "A criança apresenta movimentos repetitivos, como abanar as mãos, balançar o corpo ou outros movimentos semelhantes?",
      characteristicAnswer: "sim",
    },
    {
      id: 13,
      category: "behavior",
      text: "Pequenas alterações na rotina podem provocar um nível elevado de desconforto ou ansiedade?",
      characteristicAnswer: "sim",
    },
    {
      id: 14,
      category: "behavior",
      text: "A criança apresenta interesses particularmente intensos ou muito específicos, aos quais dedica bastante tempo e atenção?",
      characteristicAnswer: "sim",
    },
    {
      id: 15,
      category: "behavior",
      text: "A criança demonstra um apego particularmente intenso a determinados objetos, incluindo objetos que habitualmente não são usados como brinquedos?",
      characteristicAnswer: "sim",
    },

    {
      id: 16,
      category: "sensory",
      text: "A criança reage de forma muito intensa a determinados sons do quotidiano?",
      characteristicAnswer: "sim",
    },
    {
      id: 17,
      category: "sensory",
      text: "A criança demonstra forte desconforto com determinadas texturas, roupas, etiquetas ou materiais?",
      characteristicAnswer: "sim",
    },
    {
      id: 18,
      category: "sensory",
      text: "A criança apresenta seletividade alimentar significativa relacionada com textura, cheiro, temperatura ou aparência dos alimentos?",
      characteristicAnswer: "sim",
    },
    {
      id: 19,
      category: "sensory",
      text: "A criança demonstra interesse particularmente intenso por estímulos visuais, como objetos que giram, reflexos ou luzes?",
      characteristicAnswer: "sim",
    },
    {
      id: 20,
      category: "sensory",
      text: "A criança parece reagir à dor, temperatura ou outros estímulos físicos de forma muito mais intensa ou muito menos intensa do que seria esperado?",
      characteristicAnswer: "sim",
    },
  ];

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  function handleAnswer(answer) {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answer;

    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setCompleted(true);
    }
  }

  function handlePrevious() {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  }

  function handleRestart() {
    setStarted(false);
    setCompleted(false);
    setCurrentQuestion(0);
    setAnswers([]);
  }

  function countCharacteristics() {
    return questions.reduce((total, question, index) => {
      if (answers[index] === question.characteristicAnswer) {
        return total + 1;
      }

      return total;
    }, 0);
  }

  function countCategory(category) {
    const categoryQuestions = questions.filter(
      (question) => question.category === category,
    );

    const total = categoryQuestions.reduce((count, question) => {
      const questionIndex = questions.findIndex(
        (item) => item.id === question.id,
      );

      if (answers[questionIndex] === question.characteristicAnswer) {
        return count + 1;
      }

      return count;
    }, 0);

    return {
      selected: total,
      total: categoryQuestions.length,
    };
  }

  if (!started) {
    return (
      <div className="quiz-start">
        <p className="quiz-warning">
          Este questionário é apenas informativo. Não é um instrumento clínico
          validado e não permite diagnosticar ou excluir autismo.
        </p>

        <button
          type="button"
          className="screening-button"
          onClick={() => setStarted(true)}
        >
          Iniciar questionário
        </button>
      </div>
    );
  }

  if (completed) {
    const totalCharacteristics = countCharacteristics();
    const social = countCategory("social");
    const behavior = countCategory("behavior");
    const sensory = countCategory("sensory");

    return (
      <div className="quiz-result">
        <h3>Questionário concluído</h3>

        <p className="quiz-result-number">
          Assinalou {totalCharacteristics} de {questions.length}{" "}
          características.
        </p>

        <div className="quiz-result-categories">
          <div>
            <strong>Comunicação e interação social</strong>
            <span>
              {social.selected} / {social.total}
            </span>
          </div>

          <div>
            <strong>Comportamentos e interesses</strong>
            <span>
              {behavior.selected} / {behavior.total}
            </span>
          </div>

          <div>
            <strong>Processamento sensorial</strong>
            <span>
              {sensory.selected} / {sensory.total}
            </span>
          </div>
        </div>

        <p className="quiz-result-info">
          Estas respostas indicam apenas a presença de algumas características
          que também podem ser observadas em pessoas autistas. O resultado não
          permite determinar se uma criança é ou não autista.
        </p>

        <p className="quiz-result-info">
          Se estas características são persistentes, aparecem em diferentes
          contextos ou têm impacto significativo no dia a dia da criança,
          considere conversar com um profissional de saúde.
        </p>

        <button
          type="button"
          className="screening-button"
          onClick={handleRestart}
        >
          Recomeçar
        </button>
      </div>
    );
  }

  return (
    <div className="autism-quiz">
      <p className="quiz-progress-text">
        Pergunta {currentQuestion + 1} de {questions.length}
      </p>

      <div className="progress-bar-container">
        <div
          className="progress-bar-fill"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <h3>{questions[currentQuestion].text}</h3>

      <div className="quiz-options">
        <button
          type="button"
          className={
            answers[currentQuestion] === "sim"
              ? "quiz-option selected"
              : "quiz-option"
          }
          onClick={() => handleAnswer("sim")}
        >
          Sim
        </button>

        <button
          type="button"
          className={
            answers[currentQuestion] === "nao"
              ? "quiz-option selected"
              : "quiz-option"
          }
          onClick={() => handleAnswer("nao")}
        >
          Não
        </button>
      </div>

      {currentQuestion > 0 && (
        <button
          type="button"
          className="quiz-previous"
          onClick={handlePrevious}
        >
          ← Anterior
        </button>
      )}
    </div>
  );
}

export default AutismCharacteristicsQuiz;
