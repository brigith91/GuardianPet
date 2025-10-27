import prisma from "../../config/prisma.js";
import { createCrudRepository } from "../../utils/repositoryFactory.js";

const selectPublic = {
  id: true,
  nombre: true,
  email: true,
  matricula: true,
};

const base = createCrudRepository("veterinarian", {
  defaultSelect: selectPublic,
  searchable: ["nombre", "email", "matricula"],
});

export default {
  ...base,

  
};