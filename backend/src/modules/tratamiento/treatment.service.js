import repo from "./treatment.repository.js";

export default {
  async registrar({ tipo, fecha, fecha_fin, descripcion, enfermeda_id_fk }) {
   
    return repo.create({ tipo, fecha, fecha_fin, descripcion, enfermeda_id_fk });
  },

  obtenerPorId(id) {
    return repo.findById(id);
  },

  listar(params) {
    return repo.list(params);
  },

  listarPorEnfermedad(enfermeda_id) {
    return repo.findByEnfermedaId(enfermeda_id);
  },

  async actualizar(id, data) {
    const treatment = await repo.findById(id);
    if (!treatment) {
      throw new Error("Tratamiento no encontrado");
    }

    if (data.tipo && data.fecha) {
      const enfermeda_id = data.enfermeda_id_fk || treatment.enfermeda_id_fk;
      if (await repo.existsByTipoAndEnfermeda(data.tipo, enfermeda_id, data.fecha)) {
        throw new Error("Ya existe un tratamiento del mismo tipo en esta fecha para este historial");
      }
    }

    return repo.update(id, data);
  },

  async eliminar(id) {
    const treatment = await repo.findById(id);
    if (!treatment) {
      throw new Error("Tratamiento no encontrado");
    }
    return repo.remove(id);
  },
};