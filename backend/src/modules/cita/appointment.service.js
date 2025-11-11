import repo from "./appointment.repository.js";

export default {
  async registrar(data) {
    const citaData = {
      ...data,
      fecha: new Date(data.fecha),
      mascota_id_fk: data.mascota_id_fk,
      veterinario_id_fk: data.veterinario_id_fk,
    };
    return repo.create(citaData);
  },

  listar(params) {
    return repo.list(params || {});
  },

  obtenerPorId(id) {
    return repo.findById(id);
  },

  obtenerPorIdConMascota(id) {
    return repo.findByIdWithMascota(id);
  },

  //sigue existiendo: lista citas de un USUARIO por las mascotas
  listarPorUsuario(usuario_id) {
    return repo.findByUsuarioId(usuario_id);
  },

  //nuevo helper
  listarPorMascota(mascota_id) {
    return repo.findByMascotaId(mascota_id);
  },

  listarPorVeterinario(veterinario_id_fk) {
    return repo.findByVeterinarioId(veterinario_id_fk);
  },

  actualizar(id, data) {
    return repo.update(id, data);
  },

  eliminar(id) {
    return repo.remove(id);
  },
};
