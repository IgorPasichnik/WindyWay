import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StartPage } from "./pages/StartPage/StartPage.jsx";
import { LoginPage } from "./pages/LoginPage/LoginPage.jsx";
import { HomePage } from "./pages/HomePage/HomePage.jsx";
import { RegistrationPage } from "./pages/RegistrationPage/RegistrationPage.jsx";
import { ErrorPage } from "./pages/ErrorPage/ErrorPage.js";
import { store } from "./app/store.js";
import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
* {
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
}
`;

function App() {
  return (
    <Provider store={store}>
      <Global />
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
