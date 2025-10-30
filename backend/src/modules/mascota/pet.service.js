import repo from "./pet.repository.js";

export default {
  async registrar({ nombre, especie, raza, sexo, fecha_nacimiento, url_foto, usuario_id_fk }) {
    if (await repo.existsByNombreAndUsuario(nombre, usuario_id_fk)) {
      throw new Error("Ya tienes una mascota registrada con ese nombre");
    }
    return repo.create({ nombre, especie, raza, sexo, fecha_nacimiento:new Date(fecha_nacimiento), url_foto, usuario_id_fk });
  },

  obtenerPorId(id) {
    return repo.findById(id);
  },

  listar(params) {
    return repo.list(params || {});
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
      const usuario_id = data.usuario_id_fk ?? pet.usuario_id_fk;
      const existe = await repo.existsByNombreAndUsuario(data.nombre, usuario_id);
      if (existe) {
        throw new Error("Ya tienes una mascota registrada con ese nombre");
      }
    }

    const datosActualizados = {
      nombre: data.nombre ?? pet.nombre,
      especie: data.especie ?? pet.especie,
      raza: data.raza ?? pet.raza,
      sexo: data.sexo ?? pet.sexo,
      fecha_nacimiento: data.fecha_nacimiento ?? pet.fecha_nacimiento,
      url_foto: data.url_foto ?? pet.url_foto,
      usuario_id_fk: data.usuario_id_fk ?? pet.usuario_id_fk,
    };

    return repo.update(id, datosActualizados);
  },

  async eliminar(id) {
    const pet = await repo.findById(id);
    if (!pet) {
      throw new Error("Mascota no encontrada");
    }
    return repo.remove(id);
  },
};
