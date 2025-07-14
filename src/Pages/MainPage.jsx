import { useEffect, useState } from "react"
import authService from "../Services/AuthService"
import { Link, Outlet, useNavigate } from "react-router-dom"
import { ROUTES } from "../Routing"
import { Button, Flex, Layout, Menu, Table } from "antd"
import { Content, Header } from "antd/es/layout/layout"
import { PoweroffOutlined } from "@ant-design/icons"
import Sider from "antd/es/layout/Sider"

function MainPageLoading() {
  return <>
    Loading...
  </>
}

function MainPageLoaded({ currentAccount }) {
  const navigate = useNavigate()

  const menuItems = [
    {
      key: 'accounts-list',
      label: <Link to="/accounts">Konta</Link>
    },
    {
      key: 'employes-list',
      label: <Link to={ROUTES.EMPLOYES_LIST_PATH}>Pracownicy</Link>
    },
    {
      key: 'payments-list',
      label: <Link to={ROUTES.PAYMENT_LIST_PATH}>Płatności</Link>
    },
    {
      key: 'payments-list-1',
      label: <Link to={`${ROUTES.PAYMENT_LIST_PATH}/waiting`}>Płatności (oczekujące)</Link>
    },
    {
      key: 'payments-list-2',
      label: <Link to={`${ROUTES.PAYMENT_LIST_PATH}/payd`}>Płatności (opłacone)</Link>
    },
    {
      key: 'shipments-list',
      label: <Link to={ROUTES.SHIPMENTS_LIST_PATH}>Przesyłki</Link>
    },
    {
      key: 'shipments-list-1',
      label: <Link to={`${ROUTES.SHIPMENTS_LIST_PATH}/sent`}>Przesyłki (w trakcie doręczenia)</Link>
    },
    {
      key: 'shipments-list-2',
      label: <Link to={`${ROUTES.SHIPMENTS_LIST_PATH}/tosend`}>Przesyłki (do wysyłki)</Link>
    },
  ]

  const onLogOut = () => {
    authService.logout().finally(() => {
      navigate(ROUTES.LOGIN_PAGE_PATH)
    })
  }

  return <Layout style={{ minHeight: '100vh' }}>
    <Header style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", color: "white" }}>
      <Flex justify="flex-end" align="center" gap="middle">
        <div style={{ fontSize: "22px", fontWeight: 700 }}>
          {currentAccount.login}
        </div>
        <Button type="primary" shape="circle" icon={<PoweroffOutlined />} size="large" onClick={onLogOut} />
      </Flex>
    </Header>
    <Layout style={{ backgroundColor: '#ededed' }}>
      <Sider>
        <Menu
          theme="dark"
          mode="inline"
          items={menuItems}
        />
      </Sider>
      <Content style={{ padding: 24 }}>
        <Outlet />
      </Content>
    </Layout>
  </Layout>
}

export default function MainPage() {
  const navigate = useNavigate()

  const [currentAccount, setCurrentAccount] = useState(null)
  
  useEffect(() => {
    authService.loggedAccount().then(res => {
      if (res === undefined)
        navigate(ROUTES.LOGIN_PAGE_PATH)

      setCurrentAccount(res)
    })
  }, [])

  return currentAccount === null ? <MainPageLoading /> : <MainPageLoaded currentAccount={currentAccount} />
}