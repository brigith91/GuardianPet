// disease.repository.js
import prisma from "../../config/prisma.js";

const selectPublic = { id: true, tipo: true, descripcion: true };

export default {
  list(params) {
    const { page = 1, pageSize = 20 } = params;
    return prisma.enfermedad.findMany({
      skip: (page - 1) * pageSize,
      take: pageSize,
      select: selectPublic,
    }).then(items => ({
      items,
      total: items.length,
      page,
      pageSize,
      pages: Math.ceil(items.length / pageSize),
    }));
  },

  findById(id) {
    return prisma.enfermedad.findUnique({
      where: { id: Number(id) },
      select: selectPublic,
    });
  },

  create(data) {
    return prisma.enfermedad.create({ data, select: selectPublic });
  },

  update(id, data) {
    return prisma.enfermedad.update({
      where: { id: Number(id) },
      data,
      select: selectPublic,
    });
  },

  remove(id) {
    return prisma.enfermedad.delete({ where: { id: Number(id) } });
  },
};
