import service from "./treatment.service.js";

export default {
  crear(req, res, next) {
    service.crear(req.body)
      .then(data => res.json(data))
      .catch(next);
  },

  listar(req, res, next) {
    service.listar()
      .then(data => res.json({ items: data, total: data.length }))
      .catch(next);
  },

  obtenerPorId(req, res, next) {
    const id = parseInt(req.params.id);
    service.obtenerPorId(id)
      .then(data => res.json(data))
      .catch(next);
  },

  actualizar(req, res, next) {
    const id = parseInt(req.params.id);
    service.actualizar(id, req.body)
      .then(data => res.json(data))
      .catch(next);
  },

  eliminar(req, res, next) {
    const id = parseInt(req.params.id);
    service.eliminar(id)
      .then(data => res.json({ message: "Tratamiento eliminado", data }))
      .catch(next);
  },
};
