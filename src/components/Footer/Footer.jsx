import img_logo from "../../images/logo.png";
import tg from "../../images/telegram-48.png";
import { FooterComponent } from "./footerStyles";

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
