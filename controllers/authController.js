const register = async (req, res) => {
  res.send('Register user')
}
const login = async (req, res) => {
  res.send('Login user')
}
const logout = async (req, res) => {
  res.send('Logout user')
}

module.exports = {
  register,
  login,
  logout,
}
