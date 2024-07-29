import Styles from "./loginPage.module.css";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useLoginMutation } from "../../app/services/auth";
import { isErrorWithMessage } from "../../utils/is-error-with-message";

export const LoginPage = () => {
  const [name, setName] = useState("");
  const [nameDirty, setNameDirty] = useState(false);
  const [isNameError, setIsNameError] = useState("Поле не может быть пустым");
  const [password, setPassword] = useState("");
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [isPasswordError, setIsPasswordError] = useState(
    "Поле не может быть пустым"
  );
  const [loginUser, loginUserResult] = useLoginMutation();
  const [isLoginError, setIsLoginError] = useState("");
  const [formValid, setFormValid] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isNameError || isPasswordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [isNameError, isPasswordError]);

  const nameHandler = (e) => {
    setName(e.target.value);
    setIsLoginError(false);

    const re = /^\w+$/;
    if (!re.test(String(e.target.value))) {
      setIsNameError("Некорректное имя");
      if (!e.target.value) {
        setIsNameError("Поле не может быть пустым");
      }
    } else {
      setIsNameError("");
    }
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
    setIsLoginError(false);

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
      case "name":
        setNameDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
        break;
      default:
        break;
    }
  };

  const loginHandler = async (e) => {
    e.preventDefault();
    const payload = {
      name: name,
      password: password,
    };
    try {
      await loginUser(payload).unwrap();

      navigate("/home");
    } catch (err) {
      const maybeError = isErrorWithMessage(err);

      if (maybeError) {
        setIsLoginError(err.data.message);
      } else {
        setIsLoginError("Неизвестная ошибка");
      }
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
          <div className={Styles.entry_form}>
            <input
              className={`${Styles.entry_input} ${
                isNameError && nameDirty ? Styles.error : ""
              }`}
              placeholder="name"
              name="name"
              type="text"
              onChange={(e) => nameHandler(e)}
              value={name}
              onBlur={(e) => blurHandler(e)}
            />
            {nameDirty && isNameError ? (
              <div
                style={{
                  marginLeft: "4px",
                  height: "14px",
                  color: "red",
                  fontSize: "12px",
                  letterSpacing: "-1px",
                }}
              >
                {isNameError}
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
            ) : isLoginError ? (
              <div
                style={{
                  marginLeft: "4px",
                  height: "14px",
                  color: "red",
                  fontSize: "12px",
                  letterSpacing: "-1px",
                }}
              >
                {isLoginError}
              </div>
            ) : (
              <div style={{ height: "14px" }}></div>
            )}
            <div className={Styles.entry_modal_bottom}>
              <Link to="/home">
                <button
                  className={Styles.button}
                  disabled={!formValid || loginUserResult.isLoading}
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
          </div>
          <Link to="/">
            <button className={Styles.button_back}>Назад</button>
          </Link>
        </motion.form>
      </AnimatePresence>
    </main>
  );
};
