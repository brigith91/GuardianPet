import repo from "./vaccine.repository.js";

export default {
  async registrar({ nombre, fecha, descripción, historial_clinico_id_fk }) {
    if (await repo.existsByNombreAndHistorial(nombre, historial_clinico_id_fk, fecha)) {
      throw new Error("Ya existe una vacuna con ese nombre en esta fecha para este historial");
    }
    return repo.create({ nombre, fecha, descripción, historial_clinico_id_fk });
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
    const vaccine = await repo.findById(id);
    if (!vaccine) {
      throw new Error("Vacuna no encontrada");
    }

    if (data.nombre && data.fecha) {
      const historial_id = data.historial_clinico_id_fk || vaccine.historial_clinico_id_fk;
      if (await repo.existsByNombreAndHistorial(data.nombre, historial_id, data.fecha)) {
        throw new Error("Ya existe una vacuna con ese nombre en esta fecha para este historial");
      }
    }

    return repo.update(id, data);
  },

  async eliminar(id) {
    const vaccine = await repo.findById(id);
    if (!vaccine) {
      throw new Error("Vacuna no encontrada");
    }
    return repo.remove(id);
  },
};