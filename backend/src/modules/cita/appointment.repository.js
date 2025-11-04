import prisma from "../../config/prisma.js";
import { createCrudRepository } from "../../utils/repositoryFactory.js";

const selectPublic = {
  id: true,
  fecha: true,
  estado: true,
  observacion: true,
  usuario_id_fk: true,
  veterinario_id_fk: true,
};

const base = createCrudRepository("cita", {
  defaultSelect: selectPublic,
  searchable: ["estado", "observacion"],
});

export default {
  ...base,

  // 🔹 Crear una cita con relaciones y validación
  async create(data) {
    // Validar que el usuario existe
    const usuarioExists = await prisma.usuario.findUnique({
      where: { id: parseInt(data.usuario_id_fk) },
    });
    if (!usuarioExists) {
      throw new Error(`Usuario con id ${data.usuario_id_fk} no existe`);
    }

    // Validar que el veterinario existe
    const veterinarioExists = await prisma.veterinario.findUnique({
      where: { id: parseInt(data.veterinario_id_fk) },
    });
    if (!veterinarioExists) {
      throw new Error(`Veterinario con id ${data.veterinario_id_fk} no existe`);
    }

    // Crear la cita conectando usuario y veterinario
    return prisma.cita.create({
      data: {
        fecha: new Date(data.fecha),
        estado: data.estado,
        observacion: data.observacion,
        usuario: { connect: { id: parseInt(data.usuario_id_fk) } },
        veterinario: { connect: { id: parseInt(data.veterinario_id_fk) } },
      },
      select: selectPublic,
    });
  },

  //  Buscar por usuario
  findByUsuarioId(usuario_id_fk) {
    return prisma.cita.findMany({
      where: { usuario_id_fk: parseInt(usuario_id_fk) },
      select: selectPublic,
    });
  },

  //  Buscar por veterinario
  findByVeterinarioId(veterinario_id_fk) {
    return prisma.cita.findMany({
      where: { veterinario_id_fk: parseInt(veterinario_id_fk) },
      select: selectPublic,
    });
  },
};
