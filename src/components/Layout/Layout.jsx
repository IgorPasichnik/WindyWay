import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import Styles from "./layout.module.css";
import styled from "styled-components";

const LayoutComponent = styled.div`
  width: 100%;
  font-family: "Montserrat", sans-serif;
`;

export const Layout = ({ children }) => {
  return (
    <LayoutComponent>
      <Header />
      {children}
      <Footer />
    </LayoutComponent>
  );
};
