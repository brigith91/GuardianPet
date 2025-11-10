import service from "./treatment.service.js";

export default {
  crear(req, res, next) {
    service.crear(req.body)
      .then(data => res.json(data))
      .catch(next);
  },

  listar: async (req, res, next) => {
    try {
      const { page = 1, pageSize = 20, search = "" } = req.query;

      // 🔧 Aquí estaba el error: se usaba "svc" en lugar de "service"
      const tratamientos = await service.listar({
        page: Number(page),
        pageSize: Number(pageSize),
        search,
      });

      res.json(tratamientos);
    } catch (e) {
      next(e);
    }
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
