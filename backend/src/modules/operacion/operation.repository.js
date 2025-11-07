import prisma from "../../config/prisma.js";
import { createCrudRepository } from "../../utils/repositoryFactory.js";

const selectPublic = {
  id: true,
  tipo: true,
  descripcion: true,
};

const base = createCrudRepository("operacion", {
  defaultSelect: selectPublic,
  searchable: ["tipo", "descripcion"],
});

export default {
  ...base,

  // Si en el futuro quieres obtener operaciones por nombre u otro filtro
  findByTipo(tipo) {
    return prisma.operacion.findMany({
      where: { tipo: { contains: tipo } },
      select: selectPublic,
    });
  },
};
