import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../Routing'
import authService from '../Services/AuthService'



export default function LoginPage() {
  const navigate = useNavigate()

  const [name, setName] = useState('root')
  const [password, setPassword] = useState('root')
  const [sendButtonActive, setSendButtonActive] = useState(true)

  const onLoginCallback = e => {
    e.preventDefault()
    setSendButtonActive(false)

    authService.login(name, password)
      .then(res => {
        console.log(res)
        navigate(ROUTES.MAIN_PAGE_PATH)
      })
      .finally(() => {
        setSendButtonActive(true)
      })
  }

  return <>
    <form>
      <label> Nazwa: <input type="text" value={name} onChange={e => setName(e.target.value)} /></label>
      <label> Hasło: <input type="password" value={password} onChange={e => setPassword(e.target.value)} /></label>

      <button type='submit' disabled={!sendButtonActive} onClick={onLoginCallback}>Zaloguj</button>
    </form>
  </>
}