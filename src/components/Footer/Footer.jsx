import img_logo from "../../images/logo.png";
import tg from "../../images/telegram-48.png";
import styled from "styled-components";

const FooterComponent = styled.footer`
  margin: 0 auto;
  height: 90px;
  padding: 30px 0;
  box-sizing: border-box;
  width: 100%;
  background: #dcdcdc;
  box-shadow: 0px -5px 15px 0px rgba(0, 0, 0, 0.5);
  z-index: 10;
  position: relative;

  & div {
    width: 100%;
    max-width: 1450px;
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
      transition: all 0.3s ease-in-out;

      &:hover {
        transform: scale(1.2);
      }
    }

    & img {
      filter: grayscale(100%);
      width: 30px;
    }

    & h1 {
      margin: 0;
      font-family: "Rubik Burned", system-ui;
      font-size: 20px;
      color: gray;
    }

    & ul {
      margin: 0;
      display: flex;

      & a {
        padding: 0 10px;
        font-weight: bold;
        color: gray;
        transition: all 0.3s ease-in-out;

        &:hover {
          transform: scale(1.2);
        }
      }
    }
  }

  @media (max-width: 1500px) {
    & div {
      width: 1250px;
    }
  }

  @media (max-width: 1300px) {
    & div {
      width: 950px;
      font-size: 18px;
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
    }
  }

  @media (max-width: 480px) {
    & div {
      width: 100%;
    }
  }
`;

export const Footer = () => {
  return (
    <FooterComponent>
      <div>
        <a href="/">
          <img src={img_logo} alt="logo" />
          <h1>WindyWay</h1>
        </a>

        <ul>
          <a href="https://www.weatherapi.com">API</a>
          <a href="https://t.me/igoryambuss_dev">
            <img src={tg}></img>
          </a>
        </ul>
      </div>
    </FooterComponent>
  );
};
