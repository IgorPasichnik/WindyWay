import Styles from "./loginPage.module.css";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export const LoginPage = () => {
  const [user, setUser] = useState("");
  const [userDirty, setUserDirty] = useState(false);
  const [isUserError, setIsUserError] = useState("Поле не может быть пустым");
  const [password, setPassword] = useState("");
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [isPasswordError, setIsPasswordError] = useState(
    "Поле не может быть пустым"
  );
  const [formValid, setFormValid] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isUserError || isPasswordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [isUserError, isPasswordError]);

  const userHandler = (e) => {
    setUser(e.target.value);
    const re = /^\w+$/;
    if (!re.test(String(e.target.value))) {
      setIsUserError("Некорректное имя");
      if (!e.target.value) {
        setIsUserError("Поле не может быть пустым");
      }
    } else {
      setIsUserError("");
    }
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
    const re = /^[a-z]+$/;
    if (!re.test(String(e.target.value))) {
      setIsPasswordError("Некоррректный пароль");
      if (!e.target.value) {
        setIsPasswordError("Поле не может быть пустым");
      }
    } else {
      setIsPasswordError("");
    }
  };

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "user":
        setUserDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
        break;
    }
  };

  const loginHandler = async (e) => {
    e.preventDefault();
    const payload = {
      user: user,
      password: password,
    };
    try {
      const response = await fetch("http://localhost:9500/login", {
        credentials: "include",
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      console.log(JSON.stringify(data));
      navigate("/location");
    } catch (err) {
      console.log(err);
      alert("Такой пользователь не зарегистрирован");
    }
  };

  return (
    <main className={Styles.entry}>
      <AnimatePresence>
        <motion.form
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={Styles.entry_modal}
        >
          <div>
            <h1>Авторизация</h1>
          </div>
          <space className={Styles.entry_form}>
            <input
              className={`${Styles.entry_input} ${
                isUserError && userDirty ? Styles.error : ""
              }`}
              placeholder="name"
              name="user"
              type="text"
              onChange={(e) => userHandler(e)}
              value={user}
              onBlur={(e) => blurHandler(e)}
            />
            {userDirty && isUserError ? (
              <div
                style={{
                  marginLeft: "4px",
                  height: "14px",
                  color: "red",
                  fontSize: "12px",
                  letterSpacing: "-1px",
                }}
              >
                {isUserError}
              </div>
            ) : (
              <div style={{ height: "14px" }}></div>
            )}
            <input
              className={`${Styles.entry_input} ${
                isPasswordError && passwordDirty ? Styles.error : ""
              }`}
              placeholder="password"
              name="password"
              type="text"
              onChange={(e) => passwordHandler(e)}
              value={password}
              onBlur={(e) => blurHandler(e)}
            />
            {passwordDirty && isPasswordError ? (
              <div
                style={{
                  marginLeft: "4px",
                  height: "14px",
                  color: "red",
                  fontSize: "12px",
                  letterSpacing: "-1px",
                }}
              >
                {isPasswordError}
              </div>
            ) : (
              <div style={{ height: "14px" }}></div>
            )}
            <div className={Styles.entry_modal_bottom}>
              <Link to="/home">
                <button
                  className={Styles.button}
                  disabled={!formValid}
                  type="primary"
                  onClick={loginHandler}
                >
                  Вход
                </button>
              </Link>
              <Link to="/registration">
                <button className={Styles.button} type="primary">
                  Регистрация
                </button>
              </Link>
            </div>
          </space>
          <Link to="/">
            <button className={Styles.button_back}>Назад</button>
          </Link>
        </motion.form>
      </AnimatePresence>
    </main>
  );
};
