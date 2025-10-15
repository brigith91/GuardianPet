import repo from "./clinic.repository.js";

export default {
  async registrar({ tienda, direccion, telefono, latitud, longitud }) {
    if (await repo.existsTienda(tienda))
      throw new Error("La tienda ya está registrada");
    return repo.create({ tienda, direccion, telefono, latitud, longitud });
  },

  obtenerPorId(id) {
    return repo.findById(id);
  },

  listar(params) {
    return repo.list(params);
  },

  async actualizar(id, data) {
    if (data.tienda) {
      const exists = await repo.existsTienda(data.tienda);
      const current = await repo.findById(id);
      if (exists && current.tienda !== data.tienda) {
        throw new Error("La tienda ya existe");
      }
    }
    return repo.update(id, data);
  },

  eliminar(id) {
    return repo.remove(id);
  },
};
