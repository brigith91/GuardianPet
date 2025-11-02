import prisma from "../../../config/prisma.js";
import { createCrudRepository } from "../../../utils/repositoryFactory.js";

const selectPublic = {
  id: true,
  historial_clinico_id_fk: true,
  operacion_id_fk: true,
  fecha: true,
  observaciones: true,
};

const base = createCrudRepository("det_operacion", {
  defaultSelect: selectPublic,
  searchable: ["observaciones"],
});

export default {
  ...base,

  findByHistorial(historial_clinico_id_fk) {
    return prisma.det_operacion.findMany({
      where: { historial_clinico_id_fk },
      select: selectPublic,
    });
  },

  findByOperacion(operacion_id_fk) {
    return prisma.det_operacion.findMany({
      where: { operacion_id_fk },
      select: selectPublic,
    });
  },
};

