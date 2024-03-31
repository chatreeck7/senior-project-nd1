import React from "react";
import { Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import CustomizedButton from "../components/button";
import AppContainer from "../layout/container";

const HomeScreen: React.FC = () => {
  const title: string = "Welcome to ND Persona";
  const description: string =
    "this is the journey that will bring you to the fantastic world of your own";
  const TM: string = "link for the copyright";

  return (
    <AppContainer className="d-flex justify-content-center align-items-center vh-100">
      <Col className="text-center">
        <h1 className="mb-3"> {title} </h1>
        <h4> {description} </h4>
        <div className="my-5">
          <Image src="https://placehold.co/400" fluid />
        </div>
        <Link to={"/quiz"}>
          <CustomizedButton
            caption="Next"
            primary
            buttonStyle={{ fontSize: "1.2em", fontWeight: "bold" }}
          />
        </Link>
        <h6 className="mt-2"> {TM} </h6>
      </Col>
    </AppContainer>
  );
};

export default HomeScreen;
