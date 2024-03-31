import React from "react";
import styled from "styled-components";
import { Container, ContainerProps } from "react-bootstrap";

type AppContainerProps = ContainerProps & {
  children: React.ReactNode;
};

const StyledContainer = styled(Container)`
  font-family: "Comfortaa", sans-serif;
  text-align: center;
  font-size: 20px;
  background-color: #ffb997;
  color: #0b032d;
  padding: 20px;
  border-radius: 10px;
  /*box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);*/
  width: 90%; /* Set width to 90% of the viewport */
  max-width: 400px; /* Set max-width to 400px */
  font-weight: bold;
`;

const AppContainer: React.FC<AppContainerProps> = ({ children, ...rest }) => {
  return <StyledContainer {...rest}>{children}</StyledContainer>;
};

export default AppContainer;
