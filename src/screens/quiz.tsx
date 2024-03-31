import React, { useState } from "react";
import Quiz from "../components/quiz";

const QuizScreen: React.FC = () => {
  const [quizIdx, setQuizIdx] = useState<number>(0);
  const [seqAnswers, setSeqAnswers] = useState<number[]>([]);

  return (
    <Quiz
      index={quizIdx}
      setSeqAnswers={setSeqAnswers}
      setQuizIdx={setQuizIdx}
      seqAnswer={seqAnswers}
    />
  );
};

export default QuizScreen;
