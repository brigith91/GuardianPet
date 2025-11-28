import prisma from "../../config/prisma.js";
import { createCrudRepository } from "../../utils/repositoryFactory.js";

const selectPublic = {
  id: true,
  nombre: true,
  especie: true,
  raza: true,
  sexo: true,
  fecha_nacimiento: true,
  url_foto: true,
  usuario_id_fk: true,
};

const base = createCrudRepository("mascota", {
  defaultSelect: selectPublic,
  searchable: [
    "nombre",
    "especie",
    "raza",
    "sexo",
    "fecha_nacimiento",
    "url_foto",
    "usuario_id_fk",
  ],
});

export default {
  ...base,

  findByUsuarioId(usuario_id) {
    return prisma.mascota.findMany({
      where: { usuario_id_fk: usuario_id },
      select: selectPublic,
    });
  },

  async existsByNombreAndUsuario(nombre, usuario_id) {
    return !!(await prisma.mascota.findFirst({
      where: {
        nombre,
        usuario_id_fk: usuario_id,
      },
      select: { id: true },
    }));
  },
};