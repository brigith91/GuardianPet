import prisma from "../../config/prisma.js";

const selectPublic = {
  id: true,
  tipo: true,
  fecha: true,
  fecha_fin: true,
  descripcion: true,
  det_enfermedad_id_fk: true,
};

export default {
  create(data) {
    return prisma.tratamiento.create({
      data,
      select: selectPublic,
    });
  },

  findById(id) {
    return prisma.tratamiento.findUnique({
      where: { id },
      select: selectPublic,
    });
  },

  list() {
    return prisma.tratamiento.findMany({
      select: selectPublic,
      orderBy: { fecha: "desc" },
    });
  },

  update(id, data) {
    return prisma.tratamiento.update({
      where: { id },
      data,
      select: selectPublic,
    });
  },

  remove(id) {
    return prisma.tratamiento.delete({
      where: { id },
    });
  },
};
