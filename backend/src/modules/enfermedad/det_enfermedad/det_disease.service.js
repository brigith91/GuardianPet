import repo from "./det_disease.repository.js";

export default {
  async crear(data) {
    return repo.create(data);
  },

  listar(params) {
    return repo.list(params);
  },

  obtenerPorId(id) {
    const detId = Number(id); // convertir a número
    return repo.findById(detId);
  },

  actualizar(id, data) {
    const detId = Number(id); // convertir a número
    return repo.update(detId, data);
  },

  eliminar(id) {
    const detId = Number(id); // convertir a número
    return repo.remove(detId);
  },
};
