import repo from "./det_operation.repository.js";

export default {
  async crear({ historial_clinico_id_fk, operacion_id_fk, fecha, observaciones }) {
    return repo.create({ historial_clinico_id_fk, operacion_id_fk, fecha, observaciones });
  },

  obtenerPorId(id) {
    return repo.findById(id);
  },

  listar(params) {
    return repo.list(params);
  },

  listarPorHistorial(historial_clinico_id_fk) {
    return repo.findByHistorial(historial_clinico_id_fk);
  },

  listarPorOperacion(operacion_id_fk) {
    return repo.findByOperacion(operacion_id_fk);
  },

  actualizar(id, data) {
    return repo.update(id, data);
  },

  eliminar(id) {
    return repo.remove(id);
  },
};
