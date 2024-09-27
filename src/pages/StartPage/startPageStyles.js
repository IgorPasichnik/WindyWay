import styled from "styled-components";
import bgSky from "../../images/background_sky.jpg";

export const SectionFirst = styled.section`
  margin: 0 auto;
  max-width: 100%;
  height: calc(100vh - 100px);
  background-image: url(${bgSky});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;

  & .box {
    padding: 20px;
    width: 100%;
    max-width: 1450px;
    height: 760px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & .search {
      margin: 0;
      width: 650px;
      font-size: 36px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      & .search_form {
        margin: 0;
        padding: 0 20px;
        margin-top: 30px;
        color: black;
        border: 3px solid black;
        border-radius: 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        & .search_input {
          font-size: 32px;
          height: 60px;
          border: none;
          background: transparent;
          outline: none;
        }

        & .search_btn {
          cursor: pointer;
          border: none;
          background: transparent;
          transition: all 0.5s ease-in-out;

          &:hover {
            transform: scale(1.2);
          }

          & .search_img {
            width: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
      }
    }

    & .modal {
      margin: 0;
      box-sizing: border-box;
      padding: 30px 0;
      height: 450px;
      width: 550px;
      border-radius: 20px;
      box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.5);
      background: rgb(0, 47, 158);
      background: linear-gradient(
        41deg,
        rgba(0, 47, 158, 1) 0%,
        rgba(0, 40, 131, 1) 50%,
        rgba(0, 32, 106, 1) 100%
      );
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      & .modal_top {
        margin: auto;
        font-size: 32px;
        color: white;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
      }

      & .modal_bottom {
        font-size: 20px;
        padding: 25px;
        height: 200px;
        width: 350px;
        color: white;
        border-radius: 20px;
        background-color: #02226b;
        display: flex;
        align-items: center;

        & .modal_block {
          height: 100px;
          width: 175px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
      }
    }

    & .none_content {
      height: 450px;
      width: 550px;
    }
  }

  @media (max-width: 1500px) {
    .box {
      width: 1250px;
    }
  }

  @media (max-width: 1300px) {
    & .box {
      width: 950px;

      & .search {
        width: 40%;
        font-size: 28px;

        & .search_input {
          margin: 0;
          font-size: 28px;
          width: 80%;
          height: 60px;
        }

        & .search_btn {
          margin: 0;
        }
      }

      & .modal {
        width: 400px;
      }

      & .none_content {
        width: 450px;
      }
    }
  }

  @media (max-width: 1000px) {
    & .box {
      width: 720px;

      & .search {
        width: 45%;
        font-size: 24px;
        align-items: center;

        & .search_input {
          margin: 0;
          font-size: 28px;
          height: 60px;
        }

        & .search_btn {
          margin: 0;
        }
      }

      & .modal {
        padding: 20px 0;
        height: 380px;
        width: 350px;

        & .modal_top {
          font-size: 28px;
        }

        & .modal_bottom {
          font-size: 18px;
          width: 320px;
        }
      }

      .none_content {
        height: 380px;
        width: 350px;
      }
    }
  }

  @media (max-width: 768px) {
    background-attachment: local;

    & .box {
      width: 100%;
      flex-direction: column;
      justify-content: center;
      gap: 20px;

      & .search {
        width: 100%;
        font-size: 24px;

        & .title {
          text-align: center;
        }

        & .search_input {
          margin: 0;
          font-size: 28px;
          height: 60px;
        }

        & .search_btn {
          margin: 0;
        }
      }

      & .modal {
        padding: 20px 0;
        height: 380px;
        width: 350px;

        & .modal_top {
          font-size: 28px;
        }

        & .modal_bottom {
          font-size: 18px;
          width: 320px;
        }
      }

      .none_content {
        height: 380px;
        width: 350px;
      }
    }
  }

  @media (max-width: 480px) {
    & .box {
      width: 100%;
    }
  }
`;

export const SectionSecond = styled.section`
  background-color: white;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  box-shadow: 0px -5px 15px 0px rgba(0, 0, 0, 0.5),
    0px 5px 15px 0px rgba(0, 0, 0, 0.5);
  z-index: 100;
  position: relative;

  & .info {
    padding: 20px;
    width: 100%;
    max-width: 1450px;

    & .info_title {
      text-align: justify;
      font-size: 40px;
      margin-bottom: 20px;
    }

    & .info_text {
      font-size: 24px;
      text-align: justify;
    }
  }

  & .cards {
    padding: 20px 20px 40px 20px;
    width: 100%;
    max-width: 1450px;
    display: flex;
    justify-content: space-evenly;
  }

  @media (max-width: 1500px) {
    & .info {
      width: 1250px;
    }
  }

  @media (max-width: 1300px) {
    & .info {
      width: 950px;

      & .info_title {
        font-size: 36px;
      }

      & .info_text {
        font-size: 20px;
      }
    }

    & .cards {
      max-width: 950px;
    }
  }

  @media (max-width: 1000px) {
    & .info {
      width: 720px;
    }

    & .cards {
      flex-direction: column;
      gap: 30px;
    }
  }

  @media (max-width: 768px) {
    & .info {
      width: 100%;

      & .info_title {
        font-size: 30px;
      }

      & .info_text {
        font-size: 18px;
      }
    }

    & .cards {
      padding: 20px 5px;
    }
  }
`;
