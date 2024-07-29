import Styles from "./header.module.css";
import img_logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../features/auth/authSlice";

export const Header = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const onLogoutClick = () => {
    dispatch(logout());
    localStorage.removeItem("token");
  };

  return (
    <header className={Styles.header}>
      <div className={Styles.header_box}>
        <button className={Styles.header_logo}>
          <img className={Styles.header_img} src={img_logo} alt="logo" />
          <h1 className={Styles.header_title}>WindyWay</h1>
        </button>
        {user ? (
          <nav className={Styles.header_nav}>
            <Link to="/">
              <button className={Styles.header_button} onClick={onLogoutClick}>
                Выйти
              </button>
            </Link>
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
