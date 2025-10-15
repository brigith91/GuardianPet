import prisma from "../../config/prisma.js";
import { createCrudRepository } from "../../utils/repositoryFactory.js";

const selectPublic = {
  id: true,
  tipo: true,
  fecha: true,
  fecha_fin: true,
  descripcion: true,
  historial_clinico_id_fk: true,
};

const base = createCrudRepository("treatment", {
  defaultSelect: selectPublic,
  searchable: ["tipo", "descripcion"],
});

export default {
  ...base,

  findByHistorialId(historial_id) {
    return prisma.treatment.findMany({
      where: { historial_clinico_id_fk: historial_id },
      select: selectPublic,
      orderBy: { fecha: 'desc' },
    });
  },

  async existsByTipoAndHistorial(tipo, historial_id, fecha) {
    return !!(await prisma.treatment.findFirst({
      where: {
        tipo,
        historial_clinico_id_fk: historial_id,
        fecha,
      },
      select: { id: true },
    }));
  },

  findActiveTreatments(historial_id) {
    return prisma.treatment.findMany({
      where: {
        historial_clinico_id_fk: historial_id,
        fecha_fin: null,
      },
      select: selectPublic,
    });
  },
};