import prisma from "../../config/prisma.js";
import { createCrudRepository } from "../../utils/repositoryFactory.js";

const selectPublic = {
  id: true,
  fecha: true,
  descripcion: true,
  tipo: true,
  veterinario_id_fk: true,
  mascota_id_fk: true,
};

const base = createCrudRepository("record", {
  defaultSelect: selectPublic,
  searchable: ["descripcion", "tipo"],
});

export default {
  ...base,

  findByVeterinarioId(veterinario_id) {
    return prisma.record.findMany({
      where: { veterinario_id_fk: veterinario_id },
      select: selectPublic,
      orderBy: { fecha: 'desc' },
    });
  },

  findByMascotaId(mascota_id) {
    return prisma.record.findMany({
      where: { mascota_id_fk: mascota_id },
      select: selectPublic,
      orderBy: { fecha: 'desc' },
    });
  },

  async existsByMascotaAndFecha(mascota_id, fecha, tipo) {
    return !!(await prisma.record.findFirst({
      where: {
        mascota_id_fk: mascota_id,
        fecha,
        tipo,
      },
      select: { id: true },
    }));
  },
};