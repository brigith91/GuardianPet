import prisma from "../../config/prisma.js";
import { createCrudRepository } from "../../utils/repositoryFactory.js";

const selectPublic = {
  id: true,
  direccion: true,
  telefono: true,
  longitud: true,
  latitud: true,
  tienda: true
};

const base = createCrudRepository("clinica", {
  defaultSelect: selectPublic,
  searchable: ["nombre", "direccion", "ciudad", "email"],
});

export default {
  ...base,

  findByTienda(tienda) {
    return prisma.clinica.findUnique({ where: { tienda } });
  },

  async existsTienda(tienda) {
    return !!(await prisma.clinica.findUnique({
      where: { tienda },
      select: { id: true },
    }));
  }
};