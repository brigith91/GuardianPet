import prisma from "../../../config/prisma.js";
import { createCrudRepository } from "../../../utils/repositoryFactory.js";

const selectPublic = {
  id: true,
  historial_clinico_id_fk: true,
  enfermedad_id_fk: true,
  fecha_inicio: true,
  fecha_fin: true,
  descripcion: true,
};

const base = createCrudRepository("det_enfermedad", {
  defaultSelect: selectPublic,
  searchable: ["descripcion"],
});

export default {
  ...base,

  findByHistorial(historial_clinico_id_fk) {
    return prisma.det_enfermedad.findMany({
      where: { historial_clinico_id_fk },
      select: selectPublic,
    });
  },

  findByEnfermedad(enfermedad_id_fk) {
    return prisma.det_enfermedad.findMany({
      where: { enfermedad_id_fk },
      select: selectPublic,
    });
  },
};
