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
  
        const usuarios = await svc.listar({
          page: Number(page),
          pageSize: Number(pageSize),
          search,
        });
  
        res.json(usuarios);
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
