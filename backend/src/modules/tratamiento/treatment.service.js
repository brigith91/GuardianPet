import repo from "./treatment.repository.js";

export default {
  async registrar({ tipo, fecha, fecha_fin, descripcion, historial_clinico_id_fk }) {
    if (await repo.existsByTipoAndHistorial(tipo, historial_clinico_id_fk, fecha)) {
      throw new Error("Ya existe un tratamiento del mismo tipo en esta fecha para este historial");
    }
    return repo.create({ tipo, fecha, fecha_fin, descripcion, historial_clinico_id_fk });
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
    const treatment = await repo.findById(id);
    if (!treatment) {
      throw new Error("Tratamiento no encontrado");
    }

    if (data.tipo && data.fecha) {
      const historial_id = data.historial_clinico_id_fk || treatment.historial_clinico_id_fk;
      if (await repo.existsByTipoAndHistorial(data.tipo, historial_id, data.fecha)) {
        throw new Error("Ya existe un tratamiento del mismo tipo en esta fecha para este historial");
      }
    }

    return repo.update(id, data);
  },

  async eliminar(id) {
    const treatment = await repo.findById(id);
    if (!treatment) {
      throw new Error("Tratamiento no encontrado");
    }
    return repo.remove(id);
  },
};