import prisma from "../../config/prisma.js";
import { createCrudRepository } from "../../utils/repositoryFactory.js";

const selectPublic = {
  id: true,
  fecha: true,
  estado: true,
  observacion: true,
  usuario_id_fk: true,
  veterinario_id_fk: true,
};

const base = createCrudRepository("cita", {
  defaultSelect: selectPublic,
  searchable: ["estado", "observacion"],
});

export default {
  ...base,

  findByUsuarioId(usuario_id_fk) {
    return prisma.cita.findMany({
      where: { usuario_id_fk },
      select: selectPublic,
    });
  },

  findByVeterinarioId(veterinario_id_fk) {
    return prisma.cita.findMany({
      where: { veterinario_id_fk },
      select: selectPublic,
    });
  },
};
