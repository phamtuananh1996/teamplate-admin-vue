var user = () => {
  return JSON.parse(localStorage.getItem('user'))
}

function clearLocalStorage () {
  localStorage.removeItem('token')
  localStorage.removeItem('user')
}

function setUserLocalStorage (user) {
  localStorage.setItem('token', user.token)
  localStorage.setItem('permissions', user.permissions)
  localStorage.setItem('user', JSON.stringify(user))
}

function getToken () {
  return localStorage.getItem('token')
}

export default { user, setUserLocalStorage, clearLocalStorage, getToken }
