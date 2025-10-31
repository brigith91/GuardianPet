import prisma from "../../config/prisma.js";
import { createCrudRepository } from "../../utils/repositoryFactory.js";

const selectPublic = {
  id: true,
  nombre: true,
  email: true,
  telefono: true,
  contrasena: true,
  rol: true,
  cedula: true
};

const base = createCrudRepository("usuario", {
  defaultSelect: selectPublic,
  searchable: ["nombre", "email", "telefono", "rol", "contrasena", "cedula"],
});

export default {
  ...base,

  async existsEmail(email) {
    const user = await prisma.usuario.findUnique({ where: { email } });
    return !!user; // true si existe
  },

  async existsCedula(cedula) {
    const user = await prisma.usuario.findUnique({ where: { cedula: Number(cedula) } });
    return !!user;
  },
  async findByEmail(email) {
    return await prisma.usuario.findUnique({ where: { email } });
  },

  async findById(id) {
    return await prisma.usuario.findUnique({
      where: { id: Number(id) },
      select: selectPublic,
    });
  },

};
