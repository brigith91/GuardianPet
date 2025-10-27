import prisma from "../../config/prisma.js";
import { createCrudRepository } from "../../utils/repositoryFactory.js";

const selectPublic = {
  id: true,
  tipo: true,
  fecha: true,
  fecha_fin: true,
  descripcion: true,
  enfermeda_id_fk: true,
};

const  base = createCrudRepository("treatment", {
  defaultSelect: selectPublic,
  searchable: ["tipo", "fecha","fecha_fin","descripcion","enfermeda_id_fk"],
});

export default {
  ...base,

  findByEnfermedaId(enfermeda_id) {
    return prisma.treatment.findMany({
      where: { enfermeda_id_fk: enfermeda_id },
      select: selectPublic,
      orderBy: { fecha: 'desc' },
    });
  },

  
  findActiveTreatments(enfermeda_id) {
    return prisma.treatment.findMany({
      where: {
        enfermeda_id_fk: enfermeda_id,
        fecha_fin: null,
      },
      select: selectPublic,
    });
  },
};