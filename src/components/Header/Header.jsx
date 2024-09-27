import img_logo from "../../images/logo.png";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../features/auth/authSlice";
import Button from "../Button/Button";
import { HeaderComponent } from "./headerStyles";

export const Header = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const [isShrunk, setIsShrunk] = useState(false);

  const handleScroll = () => {
    const isScrolling = window.scrollY > 50;
    setIsShrunk(isScrolling);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const onLogoutClick = () => {
    dispatch(logout());
    localStorage.removeItem("token");
  };

  return (
    <HeaderComponent className={isShrunk || user ? "shrink" : ""}>
      <div>
        <a href="/">
          <img src={img_logo} alt="logo" />
          <h1>WindyWay</h1>
        </a>
        {user ? (
          <nav>
            <Link to="/">
              <Button onClick={onLogoutClick} color="blue" scaleHover="scale">
                Log out
              </Button>
            </Link>
          </nav>
        ) : (
          <nav>
            <Link to="/login">
              <Button color="blue" scaleHover="scale">
                Sign in
              </Button>
            </Link>
            <Link to="/registration">
              <Button color="blue" border="blue" scaleHover="scale">
                Sign up
              </Button>
            </Link>
          </nav>
        )}
      </div>
    </HeaderComponent>
  );
};
