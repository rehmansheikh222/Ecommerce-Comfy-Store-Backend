const getAllUsers = async (req, res) => {
  res.send('Get All users Route')
}
const getSingleUser = async (req, res) => {
  res.send('Get Single user Route')
}
const showCurrentUser = async (req, res) => {
  res.send('Show Current User Route')
}
const updateUser = async (req, res) => {
  res.send('Update User Route')
}
const updateUserPassword = async (req, res) => {
  res.send('Update User Password Route')
}

module.exports = {
  getAllUsers,
  getSingleUser,
  showCurrentUser,
  updateUser,
  updateUserPassword,
}
