import prisma from "../../../config/prisma.js";

const selectPublic = {
  id: true,
  historial_clinico_id_fk: true,
  enfermedad_id_fk: true,
  fecha_inicio: true,
  fecha_fin: true,
  descripcion: true,
  enfermedad: {
    select: {
      tipo: true,
      descripcion: true,
    },
  },
};

export default {
  create(data) {
    return prisma.det_enfermedad.create({
      data,
      select: selectPublic,
    });
  },

  findById(id) {
    return prisma.det_enfermedad.findUnique({
      where: { id },
      select: selectPublic,
    });
  },

  list(params) {
    return prisma.det_enfermedad.findMany({
      select: selectPublic,
      orderBy: { fecha_inicio: "desc" },
    });
  },

  update(id, data) {
    return prisma.det_enfermedad.update({
      where: { id },
      data,
      select: selectPublic,
    });
  },

  remove(id) {
    return prisma.det_enfermedad.delete({
      where: { id },
    });
  },
};
