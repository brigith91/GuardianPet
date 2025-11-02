import prisma from "../../config/prisma.js";
import { createCrudRepository } from "../../utils/repositoryFactory.js";

const selectPublic = {
  id: true,
  fecha: true,
  descripcion: true,
  tipo: true,
  veterinario_id_fk: true,
  mascota_id_fk: true,
  url_archivos: true,
  cita_id_fk: true,
  
};

const base = createCrudRepository("historial_clinico", {
  defaultSelect: selectPublic,
  searchable: [
    "fecha",
    "descripcion",
    "tipo",
    "veterinario_id_fk",
    "mascota_id_fk",
    "cita_id_fk",
    "url_archivos",
  ],
});

export default {
  ...base,

  findByVeterinario(veterinario_id_fk) {
    return prisma.historial_clinico.findMany({
      where: { veterinario_id_fk },
      select: selectPublic,
    });
  },

  findByMascota(mascota_id_fk) {
    return prisma.historial_clinico.findMany({
      where: { mascota_id_fk },
      select: selectPublic,
    });
  },

  findByCita(cita_id_fk) {
    return prisma.historial_clinico.findMany({
      where: { cita_id_fk },
      select: selectPublic,
    });
  },

  findByFecha(fecha) {
    return prisma.historial_clinico.findMany({
      where: { fecha },
      select: selectPublic,
    });
  },

  findByTipo(tipo) {
    return prisma.historial_clinico.findMany({
      where: { tipo },
      select: selectPublic,
    });
  },

  findByDescripcion(descripcion) {
    return prisma.historial_clinico.findMany({
      where: { descripcion },
      select: selectPublic,
    });
  },

  findByUrlArchivos(url_archivos) {
    return prisma.historial_clinico.findMany({
      where: { url_archivos },
      select: selectPublic,
    });
  },
};
