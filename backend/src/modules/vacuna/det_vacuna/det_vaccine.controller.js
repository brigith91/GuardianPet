import service from "./det_vaccine.service.js";

export default {
  registrar: async (req, res, next) => {
    try {
      const result = await service.registrar(req.body);
      res.status(201).json(result);
    } catch (e) {
      next(e);
    }
  },

  listar: async (req, res, next) => {
    try {
      const { page = 1, pageSize = 20, search = "" } = req.query;

      const result = await service.listar({
        page: Number(page),
        pageSize: Number(pageSize),
        search,
      });

      res.json(result);
    } catch (e) {
      next(e);
    }
  },

  listarPorHistorial: async (req, res, next) => {
    try {
      const result = await service.listarPorHistorial(Number(req.params.historial_id));
      res.json(result);
    } catch (e) {
      next(e);
    }
  },

  obtenerPorId: async (req, res, next) => {
    try {
      const data = await service.obtenerPorId(Number(req.params.id));
      if (!data) return res.status(404).json({ error: "Detalle no encontrado" });
      res.json(data);
    } catch (e) {
      next(e);
    }
  },

  actualizar: async (req, res, next) => {
    try {
      const result = await service.actualizar(Number(req.params.id), req.body);
      res.json(result);
    } catch (e) {
      next(e);
    }
  },

  eliminar: async (req, res, next) => {
    try {
      await service.eliminar(Number(req.params.id));
      res.status(204).end();
    } catch (e) {
      next(e);
    }
  },
};
