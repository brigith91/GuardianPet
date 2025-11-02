import repo from "./det_disease.repository.js";

export default {
  crear({ historial_clinico_id_fk, enfermedad_id_fk, fecha_inicio, fecha_fin, descripcion }) {
    return repo.create({ historial_clinico_id_fk, enfermedad_id_fk, fecha_inicio, fecha_fin, descripcion });
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

  listarPorEnfermedad(enfermedad_id_fk) {
    return repo.findByEnfermedad(enfermedad_id_fk);
  },

  actualizar(id, data) {
    return repo.update(id, data);
  },

  eliminar(id) {
    return repo.remove(id);
  },
};
