import prisma from "../../config/prisma.js";

const selectPublic = { id: true, tipo: true, descripcion: true };

export default {
  async list(params) {
    const { page = 1, pageSize = 20 } = params;
    const skip = (page - 1) * pageSize;
    const take = Number(pageSize);

    const [items, total] = await Promise.all([
      prisma.enfermedad.findMany({
        skip,
        take,
        select: selectPublic,
      }),
      prisma.enfermedad.count(),
    ]);

    return {
      items,
      total,
      page: Number(page),
      pageSize: Number(pageSize),
      pages: Math.ceil(total / pageSize),
    };
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