import svc from "./vaccine.service.js";

export default {
  registrar: async (req, res, next) => {
    try {
      res.status(201).json(await svc.registrar(req.body));
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

  obtenerPorId: async (req, res, next) => {
    try {
      const vaccine = await svc.obtenerPorId(req.params.id);
      if (!vaccine) return res.status(404).json({ error: "Vacuna no encontrada" });
      res.json(vaccine);
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