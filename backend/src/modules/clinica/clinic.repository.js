const Usuario = require('./userModel');

exports.findAll = () => Usuario.find();
exports.findById = (id) => Usuario.findById(id);
exports.findByEmail = (email) => Usuario.findOne({ email });
exports.createUser = (userData) => new Usuario(userData).save();
exports.updateUser = (id, userData) => Usuario.findByIdAndUpdate(id, userData, { new: true });
exports.deleteUser = (id) => Usuario.findByIdAndDelete(id);