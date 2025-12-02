import service from "./treatment.service.js";

export default {
  crear: async (req, res, next) => {
    try {
      const data = await service.crear(req.body);
      res.json(data);
    } catch (e) {
      next(e);
    }
  },

  listar: async (req, res, next) => {
    try {
      const { page = 1, pageSize = 20, search = "" } = req.query;

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

  obtenerPorId: async (req, res, next) => {
    try {
      const id = parseInt(req.params.id);
      const data = await service.obtenerPorId(id);
      res.json(data);
    } catch (e) {
      next(e);
    }
  },

  actualizar: async (req, res, next) => {
    try {
      const id = parseInt(req.params.id);
      const data = await service.actualizar(id, req.body);
      res.json(data);
    } catch (e) {
      next(e);
    }
  },

  eliminar: async (req, res, next) => {
    try {
      const id = parseInt(req.params.id);
      const data = await service.eliminar(id);
      res.json({ message: "Tratamiento eliminado", data });
    } catch (e) {
      next(e);
    }
  },
};