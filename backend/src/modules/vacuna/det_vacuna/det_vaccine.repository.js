import prisma from "../../../config/prisma.js";
import { createCrudRepository } from "../../../utils/repositoryFactory.js";

const selectPublic = {
  id: true,
  historial_clinico_id_fk: true,
  vacuna_id_fk: true,
  fecha: true,
  observaciones: true,
};

const base = createCrudRepository("det_vacuna", {
  defaultSelect: selectPublic,
  searchable: ["observaciones"],
});

export default {
  ...base,

  findByHistorial(historial_clinico_id_fk) {
    return prisma.det_vacuna.findMany({
      where: { historial_clinico_id_fk },
      select: selectPublic,
    });
  },

  findByVacuna(vacuna_id_fk) {
    return prisma.det_vacuna.findMany({
      where: { vacuna_id_fk },
      select: selectPublic,
    });
  },
};
