import jwt from "jsonwebtoken";
import { hashPassword, comparePassword } from "../../utils/crypto.js";
import repo from "./user.repository.js";

export default {
  async registrar({ nombre, email, telefono, contrasena, rol = "usuario" }) {
    if (await repo.existsEmail(email))
      throw new Error("El email ya está registrado");
    const hash = await hashPassword(contrasena);
    contrasena = hash;
    return repo.create({ nombre, email, telefono, contrasena, rol });
  },
  async login({ email, contrasena }) {
    const user = await repo.findByEmail(email);
    if (!user || !(await comparePassword(contrasena, user.contrasena)))
      throw new Error("Credenciales inválidas");
    const token = jwt.sign(
      { sub: user.id, email: user.email, rol: user.rol },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN || "1d" }
    );
    const { id, nombre, telefono, rol } = user;
    return { token, user: { id, nombre, email, telefono, rol } };
  },
  perfil(id) {
    return repo.findById(id);
  },
  listar(params) {
    return repo.list(params);
  },
  async actualizar(id, data) {
    if (data.contrasena) {
      data.hash = await hashPassword(data.contrasena);
      delete data.contrasena;
    }
    return repo.update(id, data);
  },
  eliminar(id) {
    return repo.remove(id);
  },
};