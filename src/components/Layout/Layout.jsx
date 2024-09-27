import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { LayoutComponent } from "./layoutStyles";

export const Layout = ({ children }) => {
  return (
    <LayoutComponent>
      <Header />
      {children}
      <Footer />
    </LayoutComponent>
  );
};
