import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StartPage } from "./pages/StartPage/StartPage.js";
import { LoginPage } from "./pages/LoginPage/LoginPage.js";
import { HomePage } from "./pages/HomePage/HomePage.js";
import { RegistrationPage } from "./pages/RegistrationPage/RegistrationPage.js";
import { ErrorPage } from "./pages/ErrorPage/ErrorPage.js";
import { store } from "./app/store.js";

function App() {
  return (
    <div>
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
    </div>
  );
}

export default App;
