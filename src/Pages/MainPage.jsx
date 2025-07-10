import { useEffect, useState } from "react"
import authService from "../Services/AuthService"
import { Routes, useNavigate } from "react-router-dom"
import { ROUTES } from "../Routing"

function MainPageLoading() {
  return <>
    Loading...
  </>
}

function MainPageLoaded({ currentAccount }) {
  return <>
    {currentAccount.login}
  </>
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