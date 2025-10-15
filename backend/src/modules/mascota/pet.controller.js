import svc from "./pet.service.js";

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
      const pet = await svc.obtenerPorId(req.params.id);
      if (!pet) return res.status(404).json({ error: "Mascota no encontrada" });
      res.json(pet);
    } catch (e) {
      next(e);
    }
  },

  listarPorUsuario: async (req, res, next) => {
    try {
      res.json(await svc.listarPorUsuario(req.userId));
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