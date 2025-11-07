import repo from "./det_operation.repository.js";

export default {
  async registrar({ historial_clinico_id_fk, operacion_id_fk, fecha, observaciones }) {
    if (await repo.existsByOperacionAndHistorial(operacion_id_fk, historial_clinico_id_fk)) {
      throw new Error("Ya existe una operación de este tipo para este historial clínico");
    }

    return repo.create({ historial_clinico_id_fk, operacion_id_fk, fecha: new Date(fecha), observaciones });
  },

  obtenerPorId(id) {
    return repo.findById(id);
  },

  listar(params) {
    return repo.list(params);
  },

  listarPorHistorial(historial_id) {
    return repo.findByHistorialId(historial_id);
  },

  async actualizar(id, data) {
    const existente = await repo.findById(id);
    if (!existente) throw new Error("Detalle de operación no encontrado");
    return repo.update(id, data);
  },

  async eliminar(id) {
    const existente = await repo.findById(id);
    if (!existente) throw new Error("Detalle de operación no encontrado");
    return repo.remove(id);
  },
};
