import React from "react";
import { Col, Image } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import CustomizedButton, { ButtonShape } from "../components/button";
import AppContainer from "../layout/container";

const ResultScreen: React.FC = () => {
  const title: string = "Your Personality Analysis:";
  const TM: string = "link for the copyright";

  const location = useLocation();
  const { seqAnswer } = location.state || {}; // Destructure seqAnswer

  return (
    <AppContainer className="d-flex justify-content-center align-items-center vh-100">
      <Col className="text-center">
        <h1 className="mb-3"> {title} </h1>
        <h4>{seqAnswer && <h2> {seqAnswer}</h2>}</h4>
        <div className="my-5">
          <Image src="https://placehold.co/400" fluid />
        </div>
        <Link to={"/"}>
          <CustomizedButton
            caption="Back to Home"
            primary
            shape={ButtonShape.Circle}
            buttonStyle={{ fontSize: "1.2em", fontWeight: "bold" }}
          />
        </Link>
        <h6 className="mt-2"> {TM} </h6>
      </Col>
    </AppContainer>
  );
};

export default ResultScreen;
