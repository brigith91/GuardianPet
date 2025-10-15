import svc from "./disease.service.js";

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
      const disease = await svc.obtenerPorId(req.params.id);
      if (!disease) {
        return res.status(404).json({ error: "Enfermedad no encontrada" });
      }
      res.json(disease);
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