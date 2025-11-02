import repo from "./det_vaccine.repository.js";

export default {
  crear({ historial_clinico_id_fk, vacuna_id_fk, fecha, observaciones }) {
    return repo.create({ historial_clinico_id_fk, vacuna_id_fk, fecha, observaciones });
  },

  obtenerPorId(id) {
    return repo.findById(id);
  },

  listar(params) {
    return repo.list(params);
  },

  listarPorHistorial(historial_clinico_id_fk) {
    return repo.findByHistorial(historial_clinico_id_fk);
  },

  listarPorVacuna(vacuna_id_fk) {
    return repo.findByVacuna(vacuna_id_fk);
  },

  actualizar(id, data) {
    return repo.update(id, data);
  },

  eliminar(id) {
    return repo.remove(id);
  },
};
