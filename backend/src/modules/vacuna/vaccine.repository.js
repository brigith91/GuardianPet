import prisma from "../../config/prisma.js";
import { createCrudRepository } from "../../utils/repositoryFactory.js";

const selectPublic = {
  id: true,
  nombre: true,
  fecha: true,
  descripción: true,
  historial_clinico_id_fk: true,
};

const base = createCrudRepository("vaccine", {
  defaultSelect: selectPublic,
  searchable: ["nombre", "descripción"],
});

export default {
  ...base,

  findByHistorialId(historial_id) {
    return prisma.vaccine.findMany({
      where: { historial_clinico_id_fk: historial_id },
      select: selectPublic,
      orderBy: { fecha: 'desc' },
    });
  },

  async existsByNombreAndHistorial(nombre, historial_id, fecha) {
    return !!(await prisma.vaccine.findFirst({
      where: {
        nombre,
        historial_clinico_id_fk: historial_id,
        fecha,
      },
      select: { id: true },
    }));
  },
};