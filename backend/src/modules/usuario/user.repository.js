import prisma from "../../config/prisma.js";
import { createCrudRepository } from "../../utils/repositoryFactory.js";
const selectPublic = {
  id: true,
  nombre: true,
  email: true,
  telefono: true,
  rol: true,
  cedula: true
};
const base = createCrudRepository("usuario", {
  defaultSelect: selectPublic,
  searchable: ["nombre", "email", "cedula"],
});
export default {
  ...base,
  findByEmail(email) {
    return prisma.usuario.findUnique({ where: { email } });
  },
  findByCedula(cedula) {
    return prisma.usuario.findUnique({ where: { cedula } });
  },
  async existsEmail(email) {
    return !!(await prisma.usuario.findUnique({
      where: { email },
      select: { id: true },
    }));
  },
  async existsCedula(cedula) {
    return !!(await prisma.usuario.findUnique({
      where: { cedula },
      select: { id: true },
    }));
  },
};