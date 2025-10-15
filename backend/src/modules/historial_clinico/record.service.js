import repo from "./record.repository.js";

export default {
  async crear({ fecha, descripcion, tipo, veterinario_id_fk, mascota_id_fk }) {
    if (await repo.existsByMascotaAndFecha(mascota_id_fk, fecha, tipo)) {
      throw new Error("Ya existe un registro del mismo tipo en esta fecha para esta mascota");
    }
    return repo.create({ fecha, descripcion, tipo, veterinario_id_fk, mascota_id_fk });
  },

  obtenerPorId(id) {
    return repo.findById(id);
  },

  listar(params) {
    return repo.list(params);
  },

  listarPorVeterinario(veterinario_id) {
    return repo.findByVeterinarioId(veterinario_id);
  },

  listarPorMascota(mascota_id) {
    return repo.findByMascotaId(mascota_id);
  },

  async actualizar(id, data) {
    const record = await repo.findById(id);
    if (!record) {
      throw new Error("Registro no encontrado");
    }

    if (data.fecha && data.tipo) {
      const mascota_id = data.mascota_id_fk || record.mascota_id_fk;
      if (await repo.existsByMascotaAndFecha(mascota_id, data.fecha, data.tipo)) {
        throw new Error("Ya existe un registro del mismo tipo en esta fecha para esta mascota");
      }
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