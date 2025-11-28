import prisma from "../../config/prisma.js";
import { createCrudRepository } from "../../utils/repositoryFactory.js";

const selectPublic = {
  id: true,
  fecha: true,
  descripcion: true,
  tipo: true,
  veterinario_id_fk: true,
  mascota_id_fk: true,
  url_archivos: true,
  cita_id_fk: true,
};

// Incluir todos los detalles relacionados
const includeDetalles = {
  mascota: {
    select: {
      usuario_id_fk: true, // dueño de la mascota
    },
  },

  // ⚠️ Ajusta los nombres si en tu Prisma son diferentes
  det_enfermedad: {
    include: {
      enfermedad: true,
      tratamiento: true, // si tu modelo se llama tratamiento[] pon "tratamiento"
    },
  },
  det_vacuna: {
    include: {
      vacuna: true,
    },
  },
  det_operacion: {
    include: {
      operacion: true,
    },
  },
};

const base = createCrudRepository("historial_clinico", {
  defaultSelect: selectPublic,
  searchable: ["descripcion", "tipo"],
});

export default {
  ...base,

  /**
   * Listar TODOS los historiales (admin) incluyendo detalles.
   * Respeta paginación del factory.
   */
  async list(params = {}) {
    const { page = 1, pageSize = 20, search = "" } = params;

    const where = search
      ? {
          OR: [
            { descripcion: { contains: search, mode: "insensitive" } },
            { tipo: { contains: search, mode: "insensitive" } },
          ],
        }
      : {};

    const [items, total] = await Promise.all([
      prisma.historial_clinico.findMany({
        where,
        include: includeDetalles,
        skip: (Number(page) - 1) * Number(pageSize),
        take: Number(pageSize),
        orderBy: { fecha: "desc" },
      }),
      prisma.historial_clinico.count({ where }),
    ]);

    return {
      items,
      total,
      page: Number(page),
      pageSize: Number(pageSize),
      pages: Math.ceil(total / Number(pageSize)),
    };
  },

  // ----------------- FILTROS ESPECÍFICOS -----------------

  // Registros por USUARIO (todas sus mascotas) con detalles
  findByUsuarioId(usuarioId) {
    return prisma.historial_clinico.findMany({
      where: {
        mascota: {
          usuario_id_fk: Number(usuarioId),
        },
      },
      include: includeDetalles,
      orderBy: { fecha: "desc" },
    });
  },

  // Registros por VETERINARIO con detalles
  findByVeterinario(veterinario_id_fk) {
    return prisma.historial_clinico.findMany({
      where: { veterinario_id_fk: Number(veterinario_id_fk) },
      include: includeDetalles,
      orderBy: { fecha: "desc" },
    });
  },

  // Registros por MASCOTA con detalles
  findByMascota(mascota_id_fk) {
    return prisma.historial_clinico.findMany({
      where: { mascota_id_fk: Number(mascota_id_fk) },
      include: includeDetalles,
      orderBy: { fecha: "desc" },
    });
  },

  // Registros por CITA con detalles
  findByCita(cita_id_fk) {
    return prisma.historial_clinico.findMany({
      where: { cita_id_fk: Number(cita_id_fk) },
      include: includeDetalles,
      orderBy: { fecha: "desc" },
    });
  },

  // Obtener un historial + mascota (dueño) + todos los detalles
  async findByIdWithMascota(id) {
    return prisma.historial_clinico.findUnique({
      where: { id: Number(id) },
      include: includeDetalles,
    });
  },
};