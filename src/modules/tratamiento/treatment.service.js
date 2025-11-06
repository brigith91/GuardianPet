import repo from "./treatment.repository.js";

export default {
  crear(data) {
    return repo.create(data);
  },

  listar() {
    return repo.list();
  },

  obtenerPorId(id) {
    return repo.findById(id);
  },

  actualizar(id, data) {
    return repo.update(id, data);
  },

  eliminar(id) {
    return repo.remove(id);
  },
};
