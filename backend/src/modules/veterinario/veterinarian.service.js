import jwt from "jsonwebtoken";
import { hashPassword, comparePassword } from "../../utils/crypto.js";
import repo from "./veterinarian.repository.js";
import prisma from "../../config/prisma.js";

export default {
  async registrar({ nombre, email, matricula }) {
    return repo.create({ nombre, email, matricula });
  },

  perfil(id) {
    return repo.findById(id);
  },

  listar(params) {
    
    return repo.list(params || {}) || [];
  },

  async actualizar(id, data) {
    const record = await repo.findById(id);
    if (!record) {
      throw new Error("Registro no encontrado");
    }
    return repo.update(id, data);
  },

  eliminar(id) {
    return repo.remove(id);
  },
};
