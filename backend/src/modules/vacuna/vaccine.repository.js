import prisma from "../../config/prisma.js";
import { createCrudRepository } from "../../utils/repositoryFactory.js";

const selectPublic = {
  id: true,
  nombre: true,
  fecha: true,
  descripción: true,
  historial_clinico_id_fk: true,
};

const base = createCrudRepository("vaccine", {
  defaultSelect: selectPublic,
  searchable: ["nombre", "fecha","descripción"," historial_clinico_id_fk"],
});

export default {
  ...base,

  
};