import prisma from "../../config/prisma.js";
import { createCrudRepository } from "../../utils/repositoryFactory.js";

const selectPublic = {
  id: true,
  tipo: true,
  fecha_inicio: true,
  fecha_fin: true,
  descripcion: true,
  historial_clinico_id_fk: true
};

const base = createCrudRepository("enfermedad", {
  defaultSelect: selectPublic,
  searchable: ["tipo", "fecha_inicio", "fecha_fin", "descripcion", "historial_clinico_id_fk"],
});

export default {
  ...base,

  
};