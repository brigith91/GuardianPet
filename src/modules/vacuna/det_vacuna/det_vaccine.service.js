import prisma from "../../../config/prisma.js";

const registrar = async (data) => {
  return await prisma.det_vacuna.create({ data });
};

const listar = async () => {
  return await prisma.det_vacuna.findMany();
};

const listarPorHistorial = async (historial_id) => {
  return await prisma.det_vacuna.findMany({
    where: { historial_clinico_id_fk: Number(historial_id) },
  });
};

const obtenerPorId = async (id) => {
  return await prisma.det_vacuna.findUnique({ where: { id } });
};

const actualizar = async (id, data) => {
  return await prisma.det_vacuna.update({ where: { id }, data });
};

const eliminar = async (id) => {
  return await prisma.det_vacuna.delete({ where: { id } });
};

export default {
  registrar,
  listar,
  listarPorHistorial,
  obtenerPorId,
  actualizar,
  eliminar,
};
