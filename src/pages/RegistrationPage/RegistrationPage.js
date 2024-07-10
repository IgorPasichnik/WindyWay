import Styles from "./registrationPage.module.css";
import { Button, Input, Space, Typography } from "antd";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export const RegistrationPage = () => {
  const { Title } = Typography;
  const [user, setUser] = useState("");
  const [userDirty, setUserDirty] = useState(false);
  const [isUserError, setIsUserError] = useState("Поле не может быть пустым");
  const [password, setPassword] = useState("");
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [isPasswordError, setIsPasswordError] = useState(
    "Поле не может быть пустым"
  );
  const [password2, setPassword2] = useState("");
  const [passwordDirty2, setPasswordDirty2] = useState(false);
  const [isPasswordError2, setIsPasswordError2] = useState(
    "Поле не может быть пустым"
  );
  const [email, setEmail] = useState("");
  const [emailDirty, setEmailDirty] = useState(false);
  const [isEmailError, setIsEmailError] = useState("Поле не может быть пустым");
  const [formValid, setFormValid] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isUserError || isPasswordError || isPasswordError2 || isEmailError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [isUserError, isPasswordError, isPasswordError2, isEmailError]);

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
      setIsPasswordError("Некорректный пароль");
      if (!e.target.value) {
        setIsPasswordError("Поле не может быть пустым");
      }
    } else {
      setIsPasswordError("");
      if (e.target.value !== password2) {
        setIsPasswordError2("Пароль не совпадает");
        if (!password2) {
          setIsPasswordError2("Поле не может быть пустым");
        }
      } else {
        setIsPasswordError2("");
      }
    }
  };

  const passwordHandler2 = (e) => {
    setPassword2(e.target.value);
    if (e.target.value !== password) {
      setIsPasswordError2("Пароль не совпадает");
      if (!e.target.value) {
        setIsPasswordError2("Поле не может быть пустым");
      }
    } else {
      setIsPasswordError2("");
    }
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
    const re =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]   \.,;:\s@\"]{2,})$/i;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setIsEmailError("Некорректный email");
      if (!e.target.value) {
        setIsEmailError("Поле не может быть пустым");
      }
    } else {
      setIsEmailError("");
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
      case "password2":
        setPasswordDirty2(true);
        break;
      case "email":
        setEmailDirty(true);
        break;
    }
  };

  const registrationHandler = async (e) => {
    e.preventDefault();
    const payload = {
      user: user,
      password: password,
    };
    try {
      const response = await fetch("http://localhost:9500/registration", {
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
      alert("Такой пользователь уже существует");
    }
  };

  return (
    <div className={Styles.entry}>
      <AnimatePresence>
        <motion.form
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={Styles.entry_modal}
        >
          <Typography className={Styles.reg_title}>
            <Title level={2}>Регистрация</Title>
          </Typography>
          <Space direction="vertical">
            {userDirty && isUserError && (
              <div style={{ color: "red", fontSize: "14px" }}>
                {isUserError}
              </div>
            )}
            <Input
              className={`${Styles.entry_input} ${
                isUserError && userDirty ? Styles.error : ""
              }`}
              placeholder="name"
              name="user"
              type="text"
              onChange={(e) => userHandler(e)}
              value={user}
              onBlur={(e) => blurHandler(e)}
            ></Input>
            {passwordDirty && isPasswordError && (
              <div style={{ color: "red", fontSize: "14px" }}>
                {isPasswordError}
              </div>
            )}
            <Input
              data-testid="passwordInput"
              className={`${Styles.entry_input} ${
                isPasswordError && passwordDirty ? Styles.error : ""
              }`}
              placeholder="password"
              name="password"
              type="text"
              onChange={(e) => passwordHandler(e)}
              value={password}
              onBlur={(e) => blurHandler(e)}
            ></Input>
            {passwordDirty2 && isPasswordError2 && (
              <div style={{ color: "red", fontSize: "14px" }}>
                {isPasswordError2}
              </div>
            )}
            <Input
              data-testid="passwordInput2"
              className={`${Styles.entry_input} ${
                isPasswordError2 && passwordDirty2 ? Styles.error : ""
              }`}
              placeholder="password"
              name="password2"
              type="text"
              onChange={(e) => passwordHandler2(e)}
              value={password2}
              onBlur={(e) => blurHandler(e)}
            ></Input>
            {emailDirty && isEmailError && (
              <div style={{ color: "red", fontSize: "14px" }}>
                {isEmailError}
              </div>
            )}
            <Input
              className={`${Styles.entry_input} ${
                isEmailError && emailDirty ? Styles.error : ""
              }`}
              placeholder="email"
              name="email"
              type="text"
              onChange={(e) => emailHandler(e)}
              value={email}
              onBlur={(e) => blurHandler(e)}
            ></Input>
          </Space>
          <div className={Styles.entry_modal_bottom}>
            <Button
              className={Styles.button}
              disabled={!formValid}
              type="primary"
              onClick={registrationHandler}
            >
              <Link>Регистрация</Link>
            </Button>
            <Button className={Styles.back}>
              <Link to="/">Назад</Link>
            </Button>
          </div>
        </motion.form>
      </AnimatePresence>
    </div>
  );
};
