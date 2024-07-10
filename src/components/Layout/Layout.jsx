import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import Styles from "./layout.module.css";

export const Layout = ({ children }) => {
  return (
    <div className={Styles.main}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
