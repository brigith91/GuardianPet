import svc from "./record.service.js";

export default {
  crear: async (req, res, next) => {
    try {
      const nuevo = await svc.crear(req.body);
      res.status(201).json(nuevo);
    } catch (e) {
      next(e);
    }
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
    
  obtenerPorId: async (req, res, next) => {
    try {
      const record = await svc.obtenerPorId(req.params.id);
      if (!record) return res.status(404).json({ error: "Registro no encontrado" });
      res.json(record);
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

  listarPorMascota: async (req, res, next) => {
    try {
      res.json(await svc.listarPorMascota(req.params.mascota_id));
    } catch (e) {
      next(e);
    }
  },

  actualizar: async (req, res, next) => {
    try {
      const actualizado = await svc.actualizar(req.params.id, req.body);
      res.json(actualizado);
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
