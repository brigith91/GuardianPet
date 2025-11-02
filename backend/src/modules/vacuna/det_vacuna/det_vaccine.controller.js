import svc from "./det_vaccine.service.js";

export default {
  crear: async (req, res, next) => {
    try {
      res.status(201).json(await svc.crear(req.body));
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
      const record = await svc.obtenerPorId(req.params.id);
      if (!record) return res.status(404).json({ error: "Registro no encontrado" });
      res.json(record);
    } catch (e) {
      next(e);
    }
  },

  listarPorHistorial: async (req, res, next) => {
    try {
      res.json(await svc.listarPorHistorial(req.params.historial_clinico_id));
    } catch (e) {
      next(e);
    }
  },

  listarPorVacuna: async (req, res, next) => {
    try {
      res.json(await svc.listarPorVacuna(req.params.vacuna_id));
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
