import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import MainPage from "./Pages/MainPage";
import AccountsList from "./Pages/AccountsList";
import AccountEdit from "./Pages/AccountEdit";
import EmployesList from "./Pages/EmployesList";
import EmployeEdit from "./Pages/EmployeEdit";
import PaymentEventsList from "./Pages/PaymentEventsList";
import PaymentEdit from "./Pages/PaymentEdit";
import ShipmentEventsList from "./Pages/ShipmentEventsList";
import ShipmentEdit from "./Pages/ShipmentEdit";
import ShipmentsList from "./Pages/ShipmentsList";
import PaymentsList from "./Pages/PaymentsList";

let ROUTES = {
  LOGIN_PAGE_PATH: `/login`,
  MAIN_PAGE_PATH: '/',

  ACCOUNTS_LIST_PATH: '/accounts',
  ACCOUNT_EDIT_BASE_PATH: '/account',
  ACCOUNT_EDIT_NEW: '/account/new',

  EMPLOYES_LIST_PATH: '/employes',
  EMPLOYES_EDIT_BASE_PATH: '/employe',
  EMPLOYES_EDIT_NEW: '/employe/new',

  PAYMENT_LIST_PATH: '/payments',
  PAYMENT_EDIT_BASE_PATH: '/payment',
  PAYMENT_EDIT_NEW: '/payment/new',

  PAYMENT_EVENTS_LIST_PATH: '/payments/events',
  
  SHIPMENTS_LIST_PATH: '/shipments',
  SHIPMENT_EDIT_BASE_PATH: '/shipment',
  SHIPMENT_EDIT_NEW: '/shipment/new',
  
  SHIPMENT_EVENTS_LIST_PATH: '/shipments/events',
}

export default function UseRoute() {
  return <BrowserRouter>
    <Routes>
      <Route path="*" element={<>Not found</>}></Route>
      <Route 
        path='/' 
        element={<MainPage />} 
      >
        <Route path={ROUTES.ACCOUNTS_LIST_PATH} element={<AccountsList />} />
        <Route path={`${ROUTES.ACCOUNT_EDIT_BASE_PATH}/:id`} element={<AccountEdit />} />

        <Route path={ROUTES.EMPLOYES_LIST_PATH} element={<EmployesList />} />
        <Route path={`${ROUTES.EMPLOYES_EDIT_BASE_PATH}/:id`} element={<EmployeEdit />} />

        <Route path={ROUTES.PAYMENT_LIST_PATH} element={<PaymentsList />} />
        <Route path={`${ROUTES.PAYMENT_LIST_PATH}/waiting`} element={<PaymentsList status="oczekuje na zapłatę" />} />
        <Route path={`${ROUTES.PAYMENT_LIST_PATH}/payd`} element={<PaymentsList status="zapłacone" />} />
        <Route path={ROUTES.PAYMENT_LIST_PATH} element={<PaymentsList />} />
        <Route path={`${ROUTES.PAYMENT_EDIT_BASE_PATH}/:id`} element={<PaymentEdit />} />
        <Route path={ROUTES.PAYMENT_EVENTS_LIST_PATH} element={<PaymentEventsList />} />

        <Route path={ROUTES.SHIPMENTS_LIST_PATH} element={<ShipmentsList />} />
        <Route path={`${ROUTES.SHIPMENTS_LIST_PATH}/tosend`} element={<ShipmentsList status="przyjęta w oddziale" />} />
        <Route path={`${ROUTES.SHIPMENTS_LIST_PATH}/sent`} element={<ShipmentsList status="w dostarczeniu" />} />
        <Route path={`${ROUTES.SHIPMENT_EDIT_BASE_PATH}/:id`} element={<ShipmentEdit />} />
        <Route path={ROUTES.SHIPMENT_EVENTS_LIST_PATH} element={<ShipmentEventsList />} />
      </Route>
      <Route 
        path={ROUTES.LOGIN_PAGE_PATH} 
        element={<LoginPage />} 
      />
    </Routes>
  </BrowserRouter>
}

export { ROUTES }