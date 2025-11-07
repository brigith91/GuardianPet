import svc from "./det_operation.service.js";

export default {
  registrar: async (req, res, next) => {
    try {
      const nuevo = await svc.registrar(req.body);
      res.status(201).json(nuevo);
    } catch (e) {
      next(e);
    }
  },

  listar: async (req, res, next) => {
    try {
      res.json(await svc.listar(req.query));
    } catch (e) {
      next(e);
    }
  },

  listarPorHistorial: async (req, res, next) => {
    try {
      res.json(await svc.listarPorHistorial(req.params.historial_id));
    } catch (e) {
      next(e);
    }
  },

  obtenerPorId: async (req, res, next) => {
    try {
      const data = await svc.obtenerPorId(req.params.id);
      if (!data) return res.status(404).json({ error: "Detalle no encontrado" });
      res.json(data);
    } catch (e) {
      next(e);
    }
  },

  actualizar: async (req, res, next) => {
    try {
      res.json(await svc.actualizar(req.params.id, req.body));
    } catch (e) {
      next(e);
    }
  },

  eliminar: async (req, res, next) => {
    try {
      await svc.eliminar(req.params.id);
      res.status(204).end();
    } catch (e) {
      next(e);
    }
  },
};
