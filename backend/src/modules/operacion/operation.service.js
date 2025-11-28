import repo from "./operation.repository.js";

export default {
  async registrar({ tipo, descripcion }) {
    return repo.create({ tipo, descripcion });
  },

  obtenerPorId(id) {
    return repo.findById(id);
  },

  listar(params) {
    return repo.list(params);
  },

  async actualizar(id, data) {
    const operation = await repo.findById(id);
    if (!operation) throw new Error("Operación no encontrada");
    return repo.update(id, data);
  },

  async eliminar(id) {
    const operation = await repo.findById(id);
    if (!operation) throw new Error("Operación no encontrada");
    return repo.remove(id);
  },
};