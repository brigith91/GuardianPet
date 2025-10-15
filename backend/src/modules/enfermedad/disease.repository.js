import prisma from "../../config/prisma.js";
import { createCrudRepository } from "../../utils/repositoryFactory.js";

const selectPublic = {
  id: true,
  tipo: true,
  fecha_inicio: true,
  fecha_fin: true,
  descripcion: true,
  historial_clinico_id_fk: true
};

const base = createCrudRepository("enfermedad", {
  defaultSelect: selectPublic,
  searchable: ["tipo", "descripcion"],
});

export default {
  ...base,

  findByHistorialClinico(historialClinicoId) {
    return prisma.enfermedad.findMany({
      where: { historial_clinico_id_fk: historialClinicoId },
      select: selectPublic
    });
  },

  findByTipo(tipo) {
    return prisma.enfermedad.findMany({
      where: { tipo: { contains: tipo, mode: 'insensitive' } },
      select: selectPublic
    });
  }
};