import styled from "styled-components";

export const HeaderComponent = styled.header`
  width: 100%;
  height: 100px;
  background-color: white;
  box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.5);
  position: sticky;
  top: 0;
  z-index: 10000;
  transition: all 0.3s ease;

  &.shrink {
    height: 60px;
    padding: 0;
  }

  & div {
    width: 100%;
    max-width: 1450px;
    height: 100%;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & a {
      margin: 0;
      padding: 0;
      display: flex;
      align-items: center;
      gap: 5px;
      border: none;
      background: none;
      text-decoration: none;
    }

    & img {
      width: 50px;
    }

    & h1 {
      margin: 0;
      font-family: "Rubik Burned", system-ui;
      font-size: 24px;
      color: #2a7fb8;
      transition: font-size 0.3s ease;
    }
  }

  &.shrink h1 {
    font-size: 20px;
  }

  & nav {
    margin: 0;
    display: flex;
    gap: 10px;
  }

  @media (max-width: 1500px) {
    & div {
      width: 1250px;
    }
  }

  @media (max-width: 1300px) {
    & div {
      width: 950px;
    }
  }

  @media (max-width: 1000px) {
    & div {
      width: 720px;
    }
  }

  @media (max-width: 768px) {
    & div {
      width: 100%;

      & img {
        width: 40px;
      }

      & h1 {
        font-size: 20px;
      }
    }
  }

  @media (max-width: 480px) {
    & div {
      width: 100%;
    }

    & nav {
      gap: 8px;
    }
  }
`;
