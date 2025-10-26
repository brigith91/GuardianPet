import prisma from "../../config/prisma.js";
import { createCrudRepository } from "../../utils/repositoryFactory.js";
const selectPublic = {
  id: true,
  nombre: true,
  email: true,
  telefono: true,
  contrasena: true,
  rol: true,
  cedula: true  
};
const base = createCrudRepository("usuario", {
  defaultSelect: selectPublic,
  searchable: ["nombre", "email", "telefono","rol","contrasena","cedula"],
});
export default {
  ...base,
  
};