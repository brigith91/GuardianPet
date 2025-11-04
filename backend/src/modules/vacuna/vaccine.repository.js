import prisma from "../../config/prisma.js";

export default {
  // Crear vacuna Y su relación con historial en una sola operación
  create({ nombre, descripcion, historial_clinico_id_fk, fecha, observaciones }) {
    return prisma.vacuna.create({
      data: {
        nombre,
        descripcion,
        det_vacuna: {
          create: [{  // ✅ CAMBIO: Ahora es un array
            historial_clinico_id_fk,
            fecha: new Date(fecha), // ✅ Asegurar que sea Date
            observaciones,
          }],
        },
      },
      include: {
        det_vacuna: true, // Devuelve array de relaciones
      },
    });
  },

  findById(id) {
    return prisma.vacuna.findUnique({
      where: { id: Number(id) },
      include: { det_vacuna: true }, // Devuelve array []
    });
  },

  list() {
    return prisma.vacuna.findMany({
      include: { det_vacuna: true }, // Devuelve array []
    });
  },

  // ✅ Este método está correcto - busca en det_vacuna
  findByHistorialId(historial_id) {
    return prisma.det_vacuna.findMany({
      where: { historial_clinico_id_fk: Number(historial_id) },
      include: { vacuna: true },
    });
  },

  update(id, data) {
    return prisma.vacuna.update({
      where: { id: Number(id) },
      data: { nombre: data.nombre, descripcion: data.descripcion },
    });
  },

  // ⚠️ IMPORTANTE: Esto eliminará también las relaciones det_vacuna
  // debido al CASCADE en la BD
  remove(id) {
    return prisma.vacuna.delete({
      where: { id: Number(id) },
    });
  },
};