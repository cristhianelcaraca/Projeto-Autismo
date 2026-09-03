import { useState } from "react";
import { useTranslation } from "react-i18next";

function AutismCharacteristicsQuiz() {
  const { t } = useTranslation();

  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [completed, setCompleted] = useState(false);

  const questions = [
    {
      id: 1,
      category: "social",
      translationKey: "autismQuiz.questions.1",
      characteristicAnswer: "sim",
    },
    {
      id: 2,
      category: "social",
      translationKey: "autismQuiz.questions.2",
      characteristicAnswer: "sim",
    },
    {
      id: 3,
      category: "social",
      translationKey: "autismQuiz.questions.3",
      characteristicAnswer: "sim",
    },
    {
      id: 4,
      category: "social",
      translationKey: "autismQuiz.questions.4",
      characteristicAnswer: "sim",
    },
    {
      id: 5,
      category: "social",
      translationKey: "autismQuiz.questions.5",
      characteristicAnswer: "sim",
    },
    {
      id: 6,
      category: "social",
      translationKey: "autismQuiz.questions.6",
      characteristicAnswer: "sim",
    },
    {
      id: 7,
      category: "social",
      translationKey: "autismQuiz.questions.7",
      characteristicAnswer: "sim",
    },
    {
      id: 8,
      category: "social",
      translationKey: "autismQuiz.questions.8",
      characteristicAnswer: "sim",
    },
    {
      id: 9,
      category: "behavior",
      translationKey: "autismQuiz.questions.9",
      characteristicAnswer: "sim",
    },
    {
      id: 10,
      category: "behavior",
      translationKey: "autismQuiz.questions.10",
      characteristicAnswer: "sim",
    },
    {
      id: 11,
      category: "behavior",
      translationKey: "autismQuiz.questions.11",
      characteristicAnswer: "sim",
    },
    {
      id: 12,
      category: "behavior",
      translationKey: "autismQuiz.questions.12",
      characteristicAnswer: "sim",
    },
    {
      id: 13,
      category: "behavior",
      translationKey: "autismQuiz.questions.13",
      characteristicAnswer: "sim",
    },
    {
      id: 14,
      category: "behavior",
      translationKey: "autismQuiz.questions.14",
      characteristicAnswer: "sim",
    },
    {
      id: 15,
      category: "behavior",
      translationKey: "autismQuiz.questions.15",
      characteristicAnswer: "sim",
    },
    {
      id: 16,
      category: "sensory",
      translationKey: "autismQuiz.questions.16",
      characteristicAnswer: "sim",
    },
    {
      id: 17,
      category: "sensory",
      translationKey: "autismQuiz.questions.17",
      characteristicAnswer: "sim",
    },
    {
      id: 18,
      category: "sensory",
      translationKey: "autismQuiz.questions.18",
      characteristicAnswer: "sim",
    },
    {
      id: 19,
      category: "sensory",
      translationKey: "autismQuiz.questions.19",
      characteristicAnswer: "sim",
    },
    {
      id: 20,
      category: "sensory",
      translationKey: "autismQuiz.questions.20",
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

  function getResultMessage(total) {
    if (total <= 2) {
      return {
        title: t("autismQuiz.results.few.title"),
        text: t("autismQuiz.results.few.text"),
      };
    }

    if (total <= 6) {
      return {
        title: t("autismQuiz.results.some.title"),
        text: t("autismQuiz.results.some.text"),
      };
    }

    return {
      title: t("autismQuiz.results.several.title"),
      text: t("autismQuiz.results.several.text"),
    };
  }

  if (!started) {
    return (
      <div className="quiz-start">
        <p className="quiz-warning">{t("autismQuiz.start.warning")}</p>

        <button
          type="button"
          className="screening-button"
          onClick={() => setStarted(true)}
        >
          {t("autismQuiz.start.button")}
        </button>
      </div>
    );
  }

  if (completed) {
    const totalCharacteristics = countCharacteristics();

    const social = countCategory("social");
    const behavior = countCategory("behavior");
    const sensory = countCategory("sensory");

    const resultMessage = getResultMessage(totalCharacteristics);

    return (
      <div className="quiz-result">
        <h3>{t("autismQuiz.completed.title")}</h3>

        <p className="quiz-result-number">
          {t("autismQuiz.completed.total", {
            selected: totalCharacteristics,
            total: questions.length,
          })}
        </p>

        <div className="quiz-result-message">
          <h4>{resultMessage.title}</h4>
          <p>{resultMessage.text}</p>
        </div>

        <div className="quiz-result-categories">
          <div>
            <strong>{t("autismQuiz.categories.social")}</strong>
            <span>
              {social.selected} / {social.total}
            </span>
          </div>

          <div>
            <strong>{t("autismQuiz.categories.behavior")}</strong>
            <span>
              {behavior.selected} / {behavior.total}
            </span>
          </div>

          <div>
            <strong>{t("autismQuiz.categories.sensory")}</strong>
            <span>
              {sensory.selected} / {sensory.total}
            </span>
          </div>
        </div>

        {totalCharacteristics > 2 && (
          <p className="quiz-result-info">
            {t("autismQuiz.completed.recommendation")}
          </p>
        )}

        <p className="quiz-result-disclaimer">
          {t("autismQuiz.completed.disclaimer")}
        </p>

        <button
          type="button"
          className="screening-button"
          onClick={handleRestart}
        >
          {t("autismQuiz.completed.restart")}
        </button>
      </div>
    );
  }

  return (
    <div className="autism-quiz">
      <p className="quiz-progress-text">
        {t("autismQuiz.progress", {
          current: currentQuestion + 1,
          total: questions.length,
        })}
      </p>

      <div className="progress-bar-container">
        <div
          className="progress-bar-fill"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <h3>{t(questions[currentQuestion].translationKey)}</h3>

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
          {t("autismQuiz.answers.yes")}
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
          {t("autismQuiz.answers.no")}
        </button>
      </div>

      {currentQuestion > 0 && (
        <button
          type="button"
          className="quiz-previous"
          onClick={handlePrevious}
        >
          ← {t("autismQuiz.previous")}
        </button>
      )}
    </div>
  );
}

export default AutismCharacteristicsQuiz;
