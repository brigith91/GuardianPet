import repo from "./vaccine.repository.js";

export default {
  async registrar(data) {
    return repo.create(data);
  },

  obtenerPorId(id) {
    return repo.findById(id);
  },

  listar() {
    return repo.list();
  },

  listarPorHistorial(historial_id) {
    return repo.findByHistorialId(historial_id);
  },

  actualizar(id, data) {
    return repo.update(id, data);
  },

  eliminar(id) {
    return repo.remove(id);
  },
};
