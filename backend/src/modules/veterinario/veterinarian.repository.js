import prisma from "../../config/prisma.js";
import { createCrudRepository } from "../../utils/repositoryFactory.js";

const selectPublic = {
  id: true,
  nombre: true,
  email: true,
  matricula: true,
};

const base = createCrudRepository("veterinarian", {
  defaultSelect: selectPublic,
  searchable: ["nombre", "email", "matricula"],
});

export default {
  ...base,

  findByEmail(email) {
    return prisma.veterinarian.findUnique({ where: { email } });
  },

  async existsEmail(email) {
    return !!(await prisma.veterinarian.findUnique({
      where: { email },
      select: { id: true },
    }));
  },

  findByMatricula(matricula) {
    return prisma.veterinarian.findUnique({ where: { matricula } });
  },

  async existsMatricula(matricula) {
    return !!(await prisma.veterinarian.findUnique({
      where: { matricula },
      select: { id: true },
    }));
  },
};