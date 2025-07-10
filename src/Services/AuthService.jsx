const URL_BASE = 'http://localhost:5001'

async function sendApiPostRequest(path, body = undefined) {  
  var response = await fetch(`${URL_BASE}${path}`, 
    {
      method: "POST",
      credentials: 'include',
      headers: {
        "Content-Type": "application/json"
      },
      body: body !== undefined ? JSON.stringify(body) : undefined
    }
  )

  if (response.ok)
    return await response.json()

  return undefined
}

async function sendApiGetRequest(path) {
  var response = await fetch(`${URL_BASE}${path}`, 
    {
      method: "GET",
      credentials: 'include',
      headers: {
        "Content-Type": "application/json"
      },
    }
  )

  if (response.ok)
    return await response.json()

  return undefined
}

const authService = {
  login: (name, password) => sendApiPostRequest('/auth/login', 
    {
      name: name,
      password: password
    }
  ),
  loggedAccount: () => sendApiGetRequest('/auth/currentaccount')
}

export default authService;