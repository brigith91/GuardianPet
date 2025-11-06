import prisma from "../../config/prisma.js";
import { createCrudRepository } from "../../utils/repositoryFactory.js";

const selectPublic = {
  id: true,
  nombre: true,
  email: true,
  matricula: true
};

const base = createCrudRepository("veterinario", {
  defaultSelect: selectPublic,
  searchable: ["nombre", "email", "matricula"],
});

export default {
  ...base,
};

