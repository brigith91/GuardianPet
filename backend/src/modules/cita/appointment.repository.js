import prisma from "../../config/prisma.js";
import { createCrudRepository } from "../../utils/repositoryFactory.js";

const selectPublic = {
  id: true,
  fecha: true,
  estado: true,
  observacion: true,
  mascota_id_fk: true,
  veterinario_id_fk: true,
};

const base = createCrudRepository("cita", {
  defaultSelect: selectPublic,
  searchable: ["estado", "observacion"],
});

export default {
  ...base,

  //Crear cita con mascota y veterinario
  async create(data) {
    // validar mascota
    const mascota = await prisma.mascota.findUnique({
      where: { id: Number(data.mascota_id_fk) },
      select: { id: true },
    });
    if (!mascota) {
      throw new Error(`Mascota con id ${data.mascota_id_fk} no existe`);
    }

    // validar veterinario
    const veterinario = await prisma.veterinario.findUnique({
      where: { id: Number(data.veterinario_id_fk) },
      select: { id: true },
    });
    if (!veterinario) {
      throw new Error(
        `Veterinario con id ${data.veterinario_id_fk} no existe`
      );
    }

    return prisma.cita.create({
      data: {
        fecha: new Date(data.fecha),
        estado: data.estado,
        observacion: data.observacion,
        mascota: { connect: { id: Number(data.mascota_id_fk) } },
        veterinario: { connect: { id: Number(data.veterinario_id_fk) } },
      },
      select: selectPublic,
    });
  },

  //Buscar citas por USUARIO usando la relación mascota → usuario
  findByUsuarioId(usuarioId) {
    return prisma.cita.findMany({
      where: {
        mascota: {
          usuario_id_fk: Number(usuarioId),
        },
      },
      select: selectPublic,
    });
  },

  //Buscar citas por MASCOTA (a veces sirve)
  findByMascotaId(mascotaId) {
    return prisma.cita.findMany({
      where: { mascota_id_fk: Number(mascotaId) },
      include: {
        mascota: {
          select: {
            usuario_id_fk: true, // <-- dueño
          },
        },
      },
    });
  },

  //Buscar por veterinario (lo que ya tenías)
  findByVeterinarioId(veterinario_id_fk) {
    return prisma.cita.findMany({
      where: { veterinario_id_fk: Number(veterinario_id_fk) },
      select: selectPublic,
    });
  },
  //obtener cita + mascota + dueño
  async findByIdWithMascota(id) {
    return prisma.cita.findUnique({
      where: { id: Number(id) },
      include: {
        mascota: {
          select: {
            usuario_id_fk: true, // <-- dueño
          },
        },
      },
    });
  }
};