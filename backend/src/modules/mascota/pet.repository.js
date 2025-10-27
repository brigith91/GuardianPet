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

const base = createCrudRepository("pet", {
  defaultSelect: selectPublic,
  searchable: ["nombre", "especie", "raza", "sexo", "fecha_nacimiento","url_foto","usuario_id_fk"],
});

export default {
  ...base,
  
  findByUsuarioId(usuario_id) {
    return prisma.pet.findMany({
      where: { usuario_id_fk: usuario_id },
      select: selectPublic,
    });
  },

  async existsByNombreAndUsuario(nombre, usuario_id) {
    return !!(await prisma.pet.findFirst({
      where: {
        nombre,
        usuario_id_fk: usuario_id,
      },
      select: { id: true },
    }));
  },
};