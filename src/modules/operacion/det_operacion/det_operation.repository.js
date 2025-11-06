import prisma from "../../../config/prisma.js";
import { createCrudRepository } from "../../../utils/repositoryFactory.js";

const selectPublic = {
  id: true,
  historial_clinico_id_fk: true,
  operacion_id_fk: true,
  fecha: true,
  observaciones: true,
  operacion: { select: { tipo: true, descripcion: true } },
};

const base = createCrudRepository("det_operacion", {
  defaultSelect: selectPublic,
  searchable: ["observaciones"],
});

export default {
  ...base,

  async existsByOperacionAndHistorial(operacion_id_fk, historial_clinico_id_fk) {
    return !!(await prisma.det_operacion.findFirst({
      where: { operacion_id_fk, historial_clinico_id_fk },
      select: { id: true },
    }));
  },

  findByHistorialId(historial_id) {
    return prisma.det_operacion.findMany({
      where: { historial_clinico_id_fk: historial_id },
      select: selectPublic,
      orderBy: { fecha: "desc" },
    });
  },
};

