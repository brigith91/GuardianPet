// disease.service.js
import repo from "./disease.repository.js";

export default {
  listar(params) {
    return repo.list(params);
  },

  obtenerPorId(id) {
    return repo.findById(id);
  },

  async registrar(data) {
    return repo.create(data);
  },

  async actualizar(id, data) {
    return repo.update(id, data);
  },

  async eliminar(id) {
    return repo.remove(id);
  },
};
