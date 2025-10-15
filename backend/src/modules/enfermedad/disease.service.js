import repo from "./disease.repository.js";

export default {
  async registrar({ tipo, fecha_inicio, fecha_fin, descripcion, historial_clinico_id_fk }) {
    return repo.create({ tipo, fecha_inicio, fecha_fin, descripcion, historial_clinico_id_fk });
  },

  obtenerPorId(id) {
    return repo.findById(id);
  },

  listar(params) {
    return repo.list(params);
  },

  actualizar(id, data) {
    return repo.update(id, data);
  },

  eliminar(id) {
    return repo.remove(id);
  },
};