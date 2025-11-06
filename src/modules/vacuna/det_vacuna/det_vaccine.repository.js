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

  create(data) {
    return prisma.det_vacuna.create({
      data: {
        historial_clinico_id_fk: Number(data.historial_clinico_id_fk),
        vacuna_id_fk: Number(data.vacuna_id_fk),
        fecha: new Date(data.fecha),
        observaciones: data.observaciones,
      },
      include: { vacuna: true, historial_clinico: true },
    });
  },

  findByHistorial(historial_clinico_id_fk) {
    return prisma.det_vacuna.findMany({
      where: { historial_clinico_id_fk: Number(historial_clinico_id_fk) },
      include: { vacuna: true, historial_clinico: true },
    });
  },

  findByVacuna(vacuna_id_fk) {
    return prisma.det_vacuna.findMany({
      where: { vacuna_id_fk: Number(vacuna_id_fk) },
      select: selectPublic,
    });
  },
};
