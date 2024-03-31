import React from "react";
import styled from "styled-components";

export enum ButtonShape {
  Circle = "circle",
  Rectangle = "rectangle",
}

interface CustomizedButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  caption: string;
  primary?: boolean;
  fullWidth?: boolean;
  buttonStyle?: React.CSSProperties;
  hoverStyle?: React.CSSProperties & {
    backgroundColor?: string;
    borderColor?: string;
  };
  shape?: ButtonShape;
}

const CustomizedButton: React.FC<CustomizedButtonProps> = ({
  caption,
  primary,
  fullWidth,
  buttonStyle,
  hoverStyle,
  shape = ButtonShape.Rectangle,
  ...rest
}) => {
  return (
    <Button
      $primary={primary}
      $fullWidth={fullWidth}
      style={buttonStyle}
      hoverStyle={hoverStyle} // Pass hoverStyle prop to Button
      shape={shape}
      {...rest}
    >
      {caption}
    </Button>
  );
};

const Button = styled.button<{
  $primary?: boolean;
  $fullWidth?: boolean;
  shape?: ButtonShape;
  hoverStyle?: React.CSSProperties & {
    backgroundColor?: string;
    borderColor?: string;
  };
}>`
  background: ${(props) => (props.$primary ? "#bf4f74" : "transparent")};
  border-radius: ${(props) => (props.shape === "circle" ? "50%" : "3px")};
  border: 2px solid #bf4f74;
  color: ${(props) => (props.$primary ? "white" : "#bf4f74")};
  margin: 0.5em 0 0.5em 0;
  padding: 0.25em 1em;
  width: ${(props) => (props.$fullWidth ? "100%" : "auto")};
  height: ${(props) => (props.shape === "circle" ? "4em" : "auto")};
  transition: background-color 0.3s, border-color 0.3s;

  &:hover {
    background: ${(props) =>
      props.hoverStyle?.backgroundColor ||
      (props.$primary ? "#ad405f" : "#f8f8f8")};
    border-color: ${(props) =>
      props.hoverStyle?.borderColor || props.hoverStyle?.backgroundColor};
  }
`;

export default CustomizedButton;
