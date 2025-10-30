import prisma from "../../config/prisma.js";
import { createCrudRepository } from "../../utils/repositoryFactory.js";

const selectPublic = {
  id: true,
  tipo: true,
  descripcion: true
  
};

const base = createCrudRepository("enfermedad", {
  defaultSelect: selectPublic,
  searchable: ["tipo", "descripcion", ],
});

export default {
  ...base,

  
};