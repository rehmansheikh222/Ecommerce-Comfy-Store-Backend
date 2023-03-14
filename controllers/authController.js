const User = require('../models/User')
const { StatusCodes } = require('http-status-codes')
const CustomError = require('../errors')
const { attachCookiesToResponse } = require('../utils')

const register = async (req, res) => {
  const { email, name, password } = req.body

  const emailAlreadyExists = await User.findOne({ email })
  if (emailAlreadyExists) {
    throw new CustomError.BadRequestError('Email already exists')
  }

  // first registered user is an admin
  const isFirstAccount = (await User.countDocuments({})) === 0
  const role = isFirstAccount ? 'admin' : 'user'

  const user = await User.create({ name, email, password, role })

  const tokenUser = { name: user.name, userId: user._id, role: user.role }

  attachCookiesToResponse({ res, user: tokenUser })
  res.status(StatusCodes.CREATED).json({ user: tokenUser })
}
const login = async (req, res) => {
  const { email, password } = req.body

  if (!email || !password) {
    throw new CustomError.BadRequestError('Email and password are required')
  }
  const user = await User.findOne({ email })
  if (!user) {
    throw new CustomError.UnauthenticatedError('Invalid Credenitials')
  }
  const isPasswordValid = await user.comparePassword(password)
  if (!isPasswordValid) {
    throw new CustomError.UnauthenticatedError('Invalid Credenitials')
  }
  const tokenUser = { name: user.name, userId: user._id, role: user.role }
  attachCookiesToResponse({ res, user: tokenUser })
  res.status(StatusCodes.OK).json({ user: tokenUser })
}
const logout = async (req, res) => {
  res.send('Logout user')
}

module.exports = {
  register,
  login,
  logout,
}
