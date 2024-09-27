import styled from "styled-components";
import bgSky from "../../images/background_sky.jpg";

const Main = styled.main`
  margin: 0 auto;
  max-width: 100%;
  height: 100vh;
  font-family: "Montserrat", sans-serif;
  background-image: url(${bgSky});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;

  & form {
    width: 400px;
    height: 450px;
    padding: 20px;
    background-color: white;
    border-radius: 20px;
    box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    & container {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    & input {
      font-size: 15px;
      width: 245px;
      margin: 5px;
      padding: 9px 15px;
      border: 1px solid gray;
      border-radius: 20px;

      &:focus {
        box-shadow: inset 0 0 1px #2a7fb8;
        border: 1px solid #2a7fb8;
        outline: none;
      }
    }

    & .input_error {
      border: 1px solid red;
    }

    & .buttons {
      margin: 0;
      width: 245px;
      display: flex;
      justify-content: space-betweem;
      align-items: center;
    }
  }
`;
