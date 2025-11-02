import repo from "./appointment.repository.js";

export default {
  async registrar(data) {
    // Convertir fecha y pasar _fk al repository
    const citaData = {
      ...data,
      fecha: new Date(data.fecha),
      usuario_id_fk: data.usuario_id_fk,
      veterinario_id_fk: data.veterinario_id_fk,
    };

    // Llamar al repository que valida y conecta relaciones
    return repo.create(citaData);
  },

  listar(params) {
    return repo.list(params || {});
  },

  obtenerPorId(id) {
    return repo.findById(id);
  },

  listarPorUsuario(usuario_id_fk) {
    return repo.findByUsuarioId(usuario_id_fk);
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
