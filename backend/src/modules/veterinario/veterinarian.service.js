import jwt from "jsonwebtoken";
import { hashPassword, comparePassword } from "../../utils/crypto.js";
import repo from "./veterinarian.repository.js";

export default {
  async registrar({ nombre, email, matricula, contrasena }) {
    if (await repo.existsEmail(email))
      throw new Error("El email ya está registrado");
    if (await repo.existsMatricula(matricula))
      throw new Error("La matrícula ya está registrada");
    const hash = await hashPassword(contrasena);
    contrasena = hash;
    return repo.create({ nombre, email, matricula, contrasena });
  },

  async login({ email, contrasena }) {
    const veterinarian = await repo.findByEmail(email);
    if (!veterinarian || !(await comparePassword(contrasena, veterinarian.contrasena)))
      throw new Error("Credenciales inválidas");
    const token = jwt.sign(
      { sub: veterinarian.id, email: veterinarian.email, tipo: "veterinarian" },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN || "1d" }
    );
    const { id, nombre, matricula } = veterinarian;
    return { token, veterinarian: { id, nombre, email, matricula } };
  },

  perfil(id) {
    return repo.findById(id);
  },

  listar(params) {
    return repo.list(params);
  },

  async actualizar(id, data) {
    if (data.contrasena) {
      data.contrasena = await hashPassword(data.contrasena);
    }
    if (data.email) {
      const exists = await repo.existsEmail(data.email);
      const current = await repo.findById(id);
      if (exists && current.email !== data.email) {
        throw new Error("El email ya está registrado");
      }
    }
    if (data.matricula) {
      const exists = await repo.existsMatricula(data.matricula);
      const current = await repo.findById(id);
      if (exists && current.matricula !== data.matricula) {
        throw new Error("La matrícula ya está registrada");
      }
    }
    return repo.update(id, data);
  },

  eliminar(id) {
    return repo.remove(id);
  },
};