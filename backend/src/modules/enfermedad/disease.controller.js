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
      const enfermedad = await svc.obtenerPorId(req.params.id);
      if (!enfermedad) return res.status(404).json({ error: "Enfermedad no encontrada" });
      res.json(enfermedad);
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
