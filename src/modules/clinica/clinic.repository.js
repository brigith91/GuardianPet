import prisma from "../../config/prisma.js";
import { createCrudRepository } from "../../utils/repositoryFactory.js";

const selectPublic = {
  id: true,
  direccion: true,
  telefono: true,
  longitud: true,
  latitud: true,
  tienda: true,
};

const base = createCrudRepository("clinica", {
  defaultSelect: selectPublic,
  searchable: ["direccion", "telefono", "longitud", "latitud", "tienda"],
});

export default {
  ...base,
};