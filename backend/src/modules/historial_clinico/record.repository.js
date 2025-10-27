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

const base = createCrudRepository("record", {
  defaultSelect: selectPublic,
  searchable: ["fecha","descripcion", "tipo", "veterinario_id_fk", "mascota_id_fk" ,"cita_id_fk", "url_archivos"],
});

export default {
  ...base,
findByVeterinario(veterinario_id_fk) {
    return prisma.historia_clinico.findUnique({ where: { veterinario_id_fk } });
  },
findByVeterinario(mascota_id_fk) {
    return prisma.historia_clinico.findUnique({ where: { mascota_id_fk } });
  },
};