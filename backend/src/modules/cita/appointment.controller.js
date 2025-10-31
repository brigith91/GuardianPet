import svc from "./cita.service.js";

export default {
  registrar: async (req, res, next) => {
    try {
      const cita = await svc.registrar(req.body);
      res.status(201).json(cita);
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
      const cita = await svc.obtenerPorId(req.params.id);
      if (!cita) return res.status(404).json({ error: "Cita no encontrada" });
      res.json(cita);
    } catch (e) {
      next(e);
    }
  },

  listarPorUsuario: async (req, res, next) => {
    try {
      res.json(await svc.listarPorUsuario(req.params.usuario_id));
    } catch (e) {
      next(e);
    }
  },

  listarPorVeterinario: async (req, res, next) => {
    try {
      res.json(await svc.listarPorVeterinario(req.params.veterinario_id));
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
