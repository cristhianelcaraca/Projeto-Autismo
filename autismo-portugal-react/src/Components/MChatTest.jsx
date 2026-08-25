import { useState } from "react";

function MChatTest() {
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [completed, setCompleted] = useState(false);

  const questions = [
    {
      id: 1,
      text: "Pergunta de teste número 1",
    },
    {
      id: 2,
      text: "Pergunta de teste número 2",
    },
    {
      id: 3,
      text: "Pergunta de teste número 3",
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

  if (!started) {
    return (
      <button
        type="button"
        className="screening-button"
        onClick={() => setStarted(true)}
      >
        Iniciar questionário
      </button>
    );
  }

  if (completed) {
    return (
      <div className="mchat-result">
        <h3>Questionário concluído</h3>

        <p>Obrigado por responder a todas as perguntas.</p>

        <button
          type="button"
          className="screening-button"
          onClick={() => {
            setCompleted(false);
            setStarted(false);
            setCurrentQuestion(0);
            setAnswers([]);
          }}
        >
          Recomeçar
        </button>
      </div>
    );
  }

  return (
    <div className="mchat-test">
      <p className="mchat-progress">
        Pergunta {currentQuestion + 1} de {questions.length}
      </p>

      <div className="progress-bar-container">
        <div
          className="progress-bar-fill"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <h3>{questions[currentQuestion].text}</h3>

      <div className="mchat-options">
        <button
          type="button"
          className={
            answers[currentQuestion] === "sim"
              ? "mchat-option selected"
              : "mchat-option"
          }
          onClick={() => handleAnswer("sim")}
        >
          Sim
        </button>

        <button
          type="button"
          className={
            answers[currentQuestion] === "nao"
              ? "mchat-option selected"
              : "mchat-option"
          }
          onClick={() => handleAnswer("nao")}
        >
          Não
        </button>
      </div>

      {currentQuestion > 0 && (
        <button
          type="button"
          className="mchat-previous"
          onClick={handlePrevious}
        >
          ← Anterior
        </button>
      )}
    </div>
  );
}

export default MChatTest;
