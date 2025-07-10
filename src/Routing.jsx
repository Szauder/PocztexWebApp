import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import MainPage from "./Pages/MainPage";

const ROUTES = {
  LOGIN_PAGE_PATH: `/login`,
  MAIN_PAGE_PATH: '/',
}

export default function UseRoute() {
  return <BrowserRouter>
    <Routes>
      <Route path='*' element={<MainPage />} />
      <Route path={ROUTES.LOGIN_PAGE_PATH} element={<LoginPage />} />
    </Routes>
  </BrowserRouter>
}

export { ROUTES }