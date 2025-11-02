import prisma from "../config/prisma.js";
export const createCrudRepository = (
  modelName,
  { defaultSelect, searchable = [] } = {}
) => {
  const model = prisma[modelName];
  return {
    findById(id, select = defaultSelect) {
      return model.findUnique({
        where: { id: Number(id) },
        ...(select && { select }),
      });
    },
    async list(
      { page = 1, pageSize = 20, search = "" } = {},
      select = defaultSelect
    ) {
      const skip = (page - 1) * pageSize;
      const where =
        search && searchable.length
          ? { OR: searchable.map((f) => ({ [f]: { contains: search } })) }
          : undefined;
      const [items, total] = await Promise.all([
        model.findMany({
          where,
          skip,
          take: pageSize,
          orderBy, 
          ...(select && { select })
        }),
        model.count({ where }),
      ]);
      return {
        items,
        total,
        page,
        pageSize,
        pages: Math.ceil(total / pageSize),
      };
    },
    create(data, select = defaultSelect) {
      return model.create({ data, ...(select && { select }) });
    },
    update(id, data, select = defaultSelect) {
      return model.update({
        where: { id: Number(id) },
        data,
        ...(select && { select }),
      });
    },
    async remove(id) {
      await model.delete({ where: { id: Number(id) } });
      return true;
    },
  };
};