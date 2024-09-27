import styled from "styled-components";

export const CustomButton = styled.button`
  font-size: 15px;
  cursor: pointer;
  border: none;
  border-radius: 18px;
  background-color: ${(props) =>
    props.background === "gray"
      ? "gray"
      : props.background === "blue"
      ? "#226693"
      : "white"};
  color: ${(props) =>
    props.color === "gray"
      ? "gray"
      : props.color === "blue"
      ? "#226693"
      : props.color === "black"
      ? "black"
      : "white"};
  padding: 9px 15px;
  border: 1px solid
    ${(props) =>
      props.border === "blue"
        ? "#226693"
        : props.border === "gray"
        ? "gray"
        : props.border === "black"
        ? "black"
        : "white"};
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: ${(props) =>
      props.scaleHover === "scale" ? "scale(1.2)" : "none"};
    background-color: ${(props) =>
      props.backgroundHover === "white" ? "white" : "none"};
    color: ${(props) =>
      props.colorHover === "blue"
        ? "#226693"
        : props.colorHover === "black"
        ? "#000"
        : "none"};
    border: 1px solid
      ${(props) =>
        props.borderHover === "blue"
          ? "#226693"
          : props.borderHover === "black"
          ? "#000"
          : "white"};
  }

  &:disabled {
    cursor: not-allowed;
    color: gray;
    background-color: rgb(220, 220, 220);
    border: 1px solid gray;
    opacity: 0.5;
  }
`;
