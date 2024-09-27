import styled from "styled-components";
import bgSky from "../../images/background_sky.jpg";

export const Section = styled.section`
  margin: 0 auto;
  max-width: 100%;
  height: calc(100vh - 120px);
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
    & .none_content {
      width: 450px;
      height: 570px;
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

      & .none_content {
        width: 420px;
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

      .none_content {
        height: 500px;
        width: 380px;
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
    }
  }

  @media (max-width: 480px) {
    & .box {
      width: 100%;
    }
  }
`;
