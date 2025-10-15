import repo from "./operation.repository.js";

export default {
  async registrar({ tipo, fecha, descripcion, historial_clinico_id_fk }) {
    if (await repo.existsByTipoAndHistorial(tipo, historial_clinico_id_fk, fecha)) {
      throw new Error("Ya existe una operación del mismo tipo en esta fecha para este historial");
    }
    return repo.create({ tipo, fecha, descripcion, historial_clinico_id_fk });
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
    const operation = await repo.findById(id);
    if (!operation) {
      throw new Error("Operación no encontrada");
    }

    if (data.tipo && data.fecha) {
      const historial_id = data.historial_clinico_id_fk || operation.historial_clinico_id_fk;
      if (await repo.existsByTipoAndHistorial(data.tipo, historial_id, data.fecha)) {
        throw new Error("Ya existe una operación del mismo tipo en esta fecha para este historial");
      }
    }

    return repo.update(id, data);
  },

  async eliminar(id) {
    const operation = await repo.findById(id);
    if (!operation) {
      throw new Error("Operación no encontrada");
    }
    return repo.remove(id);
  },
};