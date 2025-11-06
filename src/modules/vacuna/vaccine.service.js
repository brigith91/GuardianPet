import prisma from "../../config/prisma.js";

export default {
  async registrar(data) {
    return await prisma.vacuna.create({
      data: {
        nombre: data.nombre,
        descripcion: data.descripcion
      }
    });
  },

  async listar() {
    return await prisma.vacuna.findMany();
  },

  async obtenerPorId(id) {
    return await prisma.vacuna.findUnique({
      where: { id },
    });
  },

  async actualizar(id, data) {
    return await prisma.vacuna.update({
      where: { id },
      data: data
    });
  },

  async eliminar(id) {
    return await prisma.vacuna.delete({
      where: { id }
    });
  }
};
