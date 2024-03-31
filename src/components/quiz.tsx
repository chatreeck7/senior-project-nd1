import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import { QUIZ_LENGTH, mockQuizs } from "../constant/quiz";
import { useNavigate } from "react-router-dom";
import CustomizedButton from "./button";
import AppContainer from "../layout/container";

interface QuizProps {
  index: number;
  setQuizIdx: React.Dispatch<React.SetStateAction<number>>;
  setSeqAnswers: React.Dispatch<React.SetStateAction<number[]>>;
  seqAnswer: number[];
}

const Quiz: React.FC<QuizProps> = ({
  index,
  setSeqAnswers,
  setQuizIdx,
  seqAnswer,
}) => {
  const question: string = mockQuizs[index].question;
  const answerList: string[] = mockQuizs[index].answer;
  const navigator = useNavigate();

  const handleAnswerClick = (answerIndex: number) => {
    setSeqAnswers((prevAnswers) => [...prevAnswers, answerIndex]);

    if (index === QUIZ_LENGTH - 1)
      navigator("/result", {
        state: { seqAnswer: [...seqAnswer, answerIndex] },
      });

    setQuizIdx((prevQuizIdx) => prevQuizIdx + 1);
  };

  return (
    <AppContainer className="d-flex justify-content-center">
      <Col className="text-center">
        <h1>{question}</h1>
        <Image src="https://placehold.co/400" fluid />

        {answerList.map((answer, index) => (
          <Row key={index} className="mt-3">
            <CustomizedButton
              caption={answer}
              fullWidth
              onClick={() => handleAnswerClick(index)}
            />
          </Row>
        ))}
      </Col>
    </AppContainer>
  );
};

export default Quiz;