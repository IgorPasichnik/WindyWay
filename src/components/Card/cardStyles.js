import styled from "styled-components";

export const CardComponent = styled.div`
  margin: 0;
  width: 450px;
  height: 570px;
  box-sizing: border-box;
  padding: 40px 30px 10px 30px;
  background-color: #3bb2e6;
  background: linear-gradient(
    41deg,
    rgba(59, 178, 230, 1) 0%,
    rgba(96, 148, 228, 1) 50%,
    rgb(57, 134, 185) 100%
  );
  border-radius: 20px;
  box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;

  & header {
    margin: 0;
    font-size: 32px;
    color: white;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: relative;

    & h1 {
      z-index: 1000;
    }

    & img {
      width: 200px;
      position: absolute;
      top: -65px;
      left: 210px;
      z-index: 1001;
    }
  }

  & main {
    font-size: 18px;
    color: white;
    padding: 20px;
    height: 300px;
    width: 370px;
    border-radius: 20px;
    background-color: #56ade7;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    & article {
      width: 150px;
    }
  }

  @media (max-width: 1300px) {
    width: 420px;

    & header {
      font-size: 28px;

      & h1 {
        z-index: 1000;
      }

      & img {
        width: 175px;
        left: 190px;
        z-index: 1001;
      }
    }

    & main {
      font-size: 16px;
      padding: 17px;
      height: 290px;
      width: 330px;

      & article {
        width: 135px;
      }
  }

  @media (max-width: 1000px) {
    height: 500px;
    padding: 30px 20px 5px 20px;
    width: 380px;

    & header {
      font-size: 26px;

      & h1 {
        margin-left: 20px;
      }

      & img {
        width: 150px;
        top: -45px;
        left: 170px;
      }
    }

    & main {
      padding: 15px;
      height: 280px;
      width: 300px;

      & article {
        width: 120px;
      }
    }
  }
`;
