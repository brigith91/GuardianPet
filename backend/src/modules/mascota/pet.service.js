import repo from "./pet.repository.js";

export default {
  async registrar({ nombre, especie, raza, edad, sexo, usuario_id_fk }) {
    if (await repo.existsByNombreAndUsuario(nombre, usuario_id_fk)) {
      throw new Error("Ya tienes una mascota registrada con ese nombre");
    }
    return repo.create({ nombre, especie, raza, edad, sexo, usuario_id_fk });
  },

  obtenerPorId(id) {
    return repo.findById(id);
  },

  listar(params) {
    return repo.list(params);
  },

  listarPorUsuario(usuario_id) {
    return repo.findByUsuarioId(usuario_id);
  },

  async actualizar(id, data) {
    const pet = await repo.findById(id);
    if (!pet) {
      throw new Error("Mascota no encontrada");
    }

    if (data.nombre && data.nombre !== pet.nombre) {
      const usuario_id = data.usuario_id_fk || pet.usuario_id_fk;
      if (await repo.existsByNombreAndUsuario(data.nombre, usuario_id)) {
        throw new Error("Ya tienes una mascota registrada con ese nombre");
      }
    }

    return repo.update(id, data);
  },

  async eliminar(id) {
    const pet = await repo.findById(id);
    if (!pet) {
      throw new Error("Mascota no encontrada");
    }
    return repo.remove(id);
  },
};