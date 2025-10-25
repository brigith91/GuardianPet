import repo from "./record.repository.js";

export default {
  async crear({ fecha, descripcion, tipo, veterinario_id_fk, mascota_id_fk,url_archivos,  cita_id_fk }) {
    
    return repo.create({ fecha, descripcion, tipo, veterinario_id_fk, mascota_id_fk,url_archivos,  cita_id_fk });
  },

  obtenerPorId(id) {
    return repo.findById(id);
  },

  listar(params) {
    return repo.list(params);
  },

  listarPorVeterinario(veterinario_id_fk) {
    return repo.findByVeterinario(veterinario_id_fk);
  },

  listarPorMascota(mascota_id_fk) {
    return repo.findByMascotaId(mascota_id_fk);
  },

  async actualizar(id, data) {
    const record = await repo.findById(id);
    if (!record) {
      throw new Error("Registro no encontrado");
    }

    if (data.fecha && data.tipo) {
      const mascota_id = data.mascota_id_fk || record.mascota_id_fk;
    }

    return repo.update(id, data);
  },

  async eliminar(id) {
    const record = await repo.findById(id);
    if (!record) {
      throw new Error("Registro no encontrado");
    }
    return repo.remove(id);
  },
};