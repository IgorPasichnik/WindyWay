import Styles from "./loginPage.module.css";
import showIcon from "../../images/show-30.png";
import hideIcon from "../../images/hide-30.png";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useLoginMutation } from "../../app/services/auth";
import { isErrorWithMessage } from "../../utils/is-error-with-message";
import Button from "../../components/Button/Button";

export const LoginPage = () => {
  const [name, setName] = useState("");
  const [nameDirty, setNameDirty] = useState(false);
  const [isNameError, setIsNameError] = useState("The field cannot be empty");
  const [password, setPassword] = useState("");
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [isPasswordError, setIsPasswordError] = useState(
    "The field cannot be empty"
  );
  const [loginUser, loginUserResult] = useLoginMutation();
  const [isLoginError, setIsLoginError] = useState("");
  const [formValid, setFormValid] = useState(false);
  const [show, setShow] = useState(false);
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
      setIsNameError("Incorrect name");
      if (!e.target.value) {
        setIsNameError("The field cannot be empty");
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
      setIsPasswordError("Incorrect password");
      if (!e.target.value) {
        setIsPasswordError("The field cannot be empty");
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
        setIsLoginError("Unknown error");
      }
    }
  };

  const showHandler = (e) => {
    e.preventDefault();
    setShow(!show);
  };

  return (
    <AnimatePresence>
      <main className={Styles.entry}>
        <motion.form
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={Styles.entry_modal}
        >
          <header>
            <h1>Authorization</h1>
          </header>
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
                  marginLeft: "6px",
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
            <div className={Styles.input_show}>
              <input
                className={`${Styles.entry_input} ${
                  isPasswordError && passwordDirty ? Styles.error : ""
                }`}
                placeholder="password"
                name="password"
                type={show ? "text" : "password"}
                onChange={(e) => passwordHandler(e)}
                value={password}
                onBlur={(e) => blurHandler(e)}
              />
              <button onClick={showHandler} className={Styles.entry_show}>
                {show ? (
                  <img width="25px" height="25px" src={hideIcon} />
                ) : (
                  <img width="25px" height="25px" src={showIcon} />
                )}
              </button>
            </div>
            {passwordDirty && isPasswordError ? (
              <div
                style={{
                  marginLeft: "6px",
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
                <Button
                  background="blue"
                  border="blue"
                  backgroundHover="white"
                  colorHover="blue"
                  borderHover="blue"
                  disabled={!formValid || loginUserResult.isLoading}
                  onClick={loginHandler}
                >
                  Entry
                </Button>
              </Link>
              <Link to="/registration">
                <Button
                  background="blue"
                  border="blue"
                  backgroundHover="white"
                  colorHover="blue"
                  borderHover="blue"
                >
                  Sign up
                </Button>
              </Link>
            </div>
          </div>
          <Link to="/">
            <Button
              color="black"
              border="black"
              colorHover="blue"
              borderHover="blue"
            >
              Back
            </Button>
          </Link>
        </motion.form>
      </main>
    </AnimatePresence>
  );
};
