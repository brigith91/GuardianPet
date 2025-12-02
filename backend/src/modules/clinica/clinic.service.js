import repo from "./clinic.repository.js";

export default {
  async registrar({ tienda, direccion, telefono, latitud, longitud }) {
    return repo.create({ tienda, direccion, telefono, latitud, longitud });
  },

  obtenerPorId(id) {
    return repo.findById(id);
  },

  listar(params) {
    return repo.list(params);
  },

  async actualizar(id, data) {
    return repo.update(id, data);
  },

  eliminar(id) {
    return repo.remove(id);
  },
};