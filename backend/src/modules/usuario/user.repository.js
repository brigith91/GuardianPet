import prisma from "../../config/prisma.js";
import { createCrudRepository } from "../../utils/repositoryFactory.js";
const selectPublic = {
  id: true,
  nombre: true,
  email: true,
  telefono: true,
  rol: true,
  creadoEn: true,
};
const base = createCrudRepository("usuario", {
  defaultSelect: selectPublic,
  searchable: ["nombre", "email"],
});
export default {
  ...base,
  findByEmail(email) {
    return prisma.usuario.findUnique({ where: { email } });
  },
  async existsEmail(email) {
    return !!(await prisma.usuario.findUnique({
      where: { email },
      select: { id: true },
    }));
  },
};