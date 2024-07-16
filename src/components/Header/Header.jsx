import Styles from "./header.module.css";
import img_logo from "../../images/logo.png";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export const Header = () => {
  const location = useLocation();
  const [isLocationPage, setIsLocationPage] = useState(
    location.pathname === "/location"
  );

  useEffect(() => {
    setIsLocationPage(location.pathname === "/location");
  }, [location.pathname]);

  return (
    <header className={Styles.header}>
      <div className={Styles.header_box}>
        <button className={Styles.header_logo}>
          <img className={Styles.header_img} src={img_logo} />
          <h1 className={Styles.header_title}>WindyWay</h1>
        </button>
        {isLocationPage ? (
          <nav className={Styles.header_nav}>
            <button className={Styles.header_button}>
              <Link to="/">Выход</Link>
            </button>
          </nav>
        ) : (
          <nav className={Styles.header_nav}>
            <Link to="/login">
              <button className={Styles.header_button}>ВОЙТИ</button>
            </Link>
            <Link to="/registration">
              <button className={Styles.header_button_link}>
                Зарегистрироваться
              </button>
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};
