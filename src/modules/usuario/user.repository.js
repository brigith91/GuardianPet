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
  searchable: ["nombre", "email", "telefono", "rol", "cedula"],
});

export default {
  ...base,
  
  async existsEmail(email) {
    const user = await prisma.usuario.findFirst({
      where: { email },
      select: { id: true }
    });
    return !!user;
  },

  async existsCedula(cedula) {
    const user = await prisma.usuario.findFirst({
      where: { cedula: parseInt(cedula) },
      select: { id: true }
    });
    return !!user;
  },

  async findByEmail(email) {
    return prisma.usuario.findFirst({
      where: { email },
      select: selectPublic
    });
  }
};
