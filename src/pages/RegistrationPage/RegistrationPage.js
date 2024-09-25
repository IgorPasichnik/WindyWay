import Styles from "./registrationPage.module.css";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useRegisterMutation } from "../../app/services/auth";
import { isErrorWithMessage } from "../../utils/is-error-with-message";
import Button from "../../components/Button/Button";

export const RegistrationPage = () => {
  const [name, setName] = useState("");
  const [nameDirty, setNameDirty] = useState(false);
  const [isNameError, setIsNameError] = useState("The field cannot be empty");
  const [password, setPassword] = useState("");
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [isPasswordError, setIsPasswordError] = useState(
    "The field cannot be empty"
  );
  const [password2, setPassword2] = useState("");
  const [passwordDirty2, setPasswordDirty2] = useState(false);
  const [isPasswordError2, setIsPasswordError2] = useState(
    "The field cannot be empty"
  );
  const [email, setEmail] = useState("");
  const [emailDirty, setEmailDirty] = useState(false);
  const [isEmailError, setIsEmailError] = useState("The field cannot be empty");
  const [registerUser, registerUserResult] = useRegisterMutation();
  const [isRegisterError, setIsRegisterError] = useState("");
  const [formValid, setFormValid] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isNameError || isPasswordError || isPasswordError2 || isEmailError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [isNameError, isPasswordError, isPasswordError2, isEmailError]);

  const nameHandler = (e) => {
    setName(e.target.value);
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
    const re = /^[a-z]+$/;
    if (!re.test(String(e.target.value))) {
      setIsPasswordError("Incorrect password");
      if (!e.target.value) {
        setIsPasswordError("The field cannot be empty");
      }
    } else {
      setIsPasswordError("");
      if (e.target.value !== password2) {
        setIsPasswordError2("The password does not match");
        if (!password2) {
          setIsPasswordError2("The field cannot be empty");
        }
      } else {
        setIsPasswordError2("");
      }
    }
  };

  const passwordHandler2 = (e) => {
    setPassword2(e.target.value);
    if (e.target.value !== password) {
      setIsPasswordError2("The password does not match");
      if (!e.target.value) {
        setIsPasswordError2("The field cannot be empty");
      }
    } else {
      setIsPasswordError2("");
    }
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
    const re =
      /^(([^<>()[\]\.,;:\s@"]+(\.[^<>()[\]\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\.,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,})$/i;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setIsEmailError("Incorrect email");
      if (!e.target.value) {
        setIsEmailError("The field cannot be empty");
      }
    } else {
      setIsEmailError("");
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
      case "password2":
        setPasswordDirty2(true);
        break;
      case "email":
        setEmailDirty(true);
        break;
      default:
        break;
    }
  };

  const registrationHandler = async (e) => {
    e.preventDefault();
    const payload = {
      name: name,
      email: email,
      password: password,
    };
    try {
      await registerUser(payload).unwrap();

      navigate("/home");
    } catch (err) {
      const maybeError = isErrorWithMessage(err);

      if (maybeError) {
        setIsRegisterError(err.data.message);
      } else {
        setIsRegisterError("Unknown error");
      }
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
          <div>
            <h1>Registration</h1>
          </div>
          <div>
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
                isEmailError && emailDirty ? Styles.error : ""
              }`}
              placeholder="email"
              name="email"
              type="text"
              onChange={(e) => emailHandler(e)}
              value={email}
              onBlur={(e) => blurHandler(e)}
            />
            {emailDirty && isEmailError ? (
              <div
                style={{
                  marginLeft: "4px",
                  height: "14px",
                  color: "red",
                  fontSize: "12px",
                  letterSpacing: "-1px",
                }}
              >
                {isEmailError}
              </div>
            ) : (
              <div style={{ height: "14px" }}></div>
            )}
            <input
              data-testid="passwordinput"
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
            <input
              data-testid="passwordinput2"
              className={`${Styles.entry_input} ${
                isPasswordError2 && passwordDirty2 ? Styles.error : ""
              }`}
              placeholder="repeat password"
              name="password2"
              type="text"
              onChange={(e) => passwordHandler2(e)}
              value={password2}
              onBlur={(e) => blurHandler(e)}
            />
            {passwordDirty2 && isPasswordError2 ? (
              <div
                style={{
                  marginLeft: "4px",
                  height: "14px",
                  color: "red",
                  fontSize: "12px",
                  letterSpacing: "-1px",
                }}
              >
                {isPasswordError2}
              </div>
            ) : isRegisterError ? (
              <div
                style={{
                  marginLeft: "4px",
                  height: "14px",
                  color: "red",
                  fontSize: "12px",
                  letterSpacing: "-1px",
                }}
              >
                {isRegisterError}
              </div>
            ) : (
              <div style={{ height: "14px" }}></div>
            )}
          </div>
          <div className={Styles.entry_modal_bottom}>
            <Link>
              <Button
                background="blue"
                border="blue"
                backgroundHover="white"
                colorHover="blue"
                borderHover="blue"
                disabled={!formValid || registerUserResult.isLoading}
                onClick={registrationHandler}
              >
                Entry
              </Button>
            </Link>
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
          </div>
        </motion.form>
      </AnimatePresence>
    </div>
  );
};
