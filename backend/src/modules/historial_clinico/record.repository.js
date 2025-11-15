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
    "descripcion",
    "tipo",
  ],
});

export default {
  ...base,

  // Buscar registros por USUARIO usando la relación mascota → usuario
  findByUsuarioId(usuarioId) {
    return prisma.historial_clinico.findMany({
      where: {
        mascota: {
          usuario_id_fk: Number(usuarioId),
        },
      },
      select: selectPublic,
    });
  },

  findByVeterinario(veterinario_id_fk) {
    return prisma.historial_clinico.findMany({
      where: { veterinario_id_fk: Number(veterinario_id_fk) },
      select: selectPublic,
    });
  },

  findByMascota(mascota_id_fk) {
    return prisma.historial_clinico.findMany({
      where: { mascota_id_fk: Number(mascota_id_fk) },
      select: selectPublic,
    });
  },

  findByCita(cita_id_fk) {
    return prisma.historial_clinico.findMany({
      where: { cita_id_fk: Number(cita_id_fk) },
      select: selectPublic,
    });
  },

  // Obtener registro + mascota + dueño
  async findByIdWithMascota(id) {
    return prisma.historial_clinico.findUnique({
      where: { id: Number(id) },
      include: {
        mascota: {
          select: {
            usuario_id_fk: true, // <-- dueño
          },
        },
      },
    });
  },
};