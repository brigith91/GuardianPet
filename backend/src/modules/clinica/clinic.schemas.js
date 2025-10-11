const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  nombre: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  telefono: { type: String },
  contraseña: { type: String, required: true }, // debe almacenarse hasheada
  rol: { type: String, default: 'usuario' }
}, { timestamps: true });

module.exports = mongoose.model('Usuario', userSchema);