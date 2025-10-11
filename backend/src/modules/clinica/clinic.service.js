const userRepository = require('./userRepository');
const bcrypt = require('bcrypt');

exports.getAllUsers = () => userRepository.findAll();

exports.getUserById = (id) => userRepository.findById(id);

exports.registerUser = async (userData) => {
  userData.contraseña = await bcrypt.hash(userData.contraseña, 10);
  return await userRepository.createUser(userData);
};