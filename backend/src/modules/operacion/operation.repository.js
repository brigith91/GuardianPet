import prisma from "../../config/prisma.js";
import { createCrudRepository } from "../../utils/repositoryFactory.js";

const selectPublic = {
  id: true,
  tipo: true,
  fecha: true,
  descripcion: true,
  historial_clinico_id_fk: true,
};

const base = createCrudRepository("operation", {
  defaultSelect: selectPublic,
  searchable: ["tipo", "descripcion"],
});

export default {
  ...base,

  findByHistorialId(historial_id) {
    return prisma.operation.findMany({
      where: { historial_clinico_id_fk: historial_id },
      select: selectPublic,
      orderBy: { fecha: 'desc' },
    });
  },

  async existsByTipoAndHistorial(tipo, historial_id, fecha) {
    return !!(await prisma.operation.findFirst({
      where: {
        tipo,
        historial_clinico_id_fk: historial_id,
        fecha,
      },
      select: { id: true },
    }));
  },
};