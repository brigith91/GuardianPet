import repo from "./cita.repository.js";

export default {
  registrar(data) {
    return repo.create({
      ...data,
      fecha: new Date(data.fecha),
    });
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
