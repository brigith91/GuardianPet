import svc from "./operation.service.js";

export default {
  registrar: async (req, res, next) => {
    try {
      const nuevaOperacion = await svc.registrar(req.body);
      res.status(201).json(nuevaOperacion);
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
      const operation = await svc.obtenerPorId(req.params.id);
      if (!operation)
        return res.status(404).json({ error: "Operación no encontrada" });
      res.json(operation);
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
