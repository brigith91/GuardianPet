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
      const pet = await svc.obtenerPorId(req.params.id);
      if (!pet) return res.status(404).json({ error: "Mascota no encontrada" });
      res.json(pet);
    } catch (e) {
      next(e);
    }
  },

  listarPorUsuario: async (req, res, next) => {
  try {
    const usuarioId = req.query.usuario_id; 
    res.json(await svc.listarPorUsuario(usuarioId));
  } catch (e) {
    next(e);
  }
},

  actualizar: async (req, res, next) => {
  try {
    const petActualizada = await svc.actualizar(req.params.id, req.body);
    res.json(petActualizada);
  } catch (e) {
    res.status(400).json({ error: e.message }); 
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