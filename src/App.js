import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StartPage } from "./pages/StartPage/StartPage.js";
import { LoginPage } from "./pages/LoginPage/LoginPage.js";
import { HomePage } from "./pages/HomePage/HomePage.js";
import { RegistrationPage } from "./pages/RegistrationPage/RegistrationPage.js";
import { ErrorPage } from "./pages/ErrorPage/ErrorPage.js";
import { store } from "./app/store.js";
import styled, { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`;

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
