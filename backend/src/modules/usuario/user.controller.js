import svc from "./user.service.js";

export default {
  registrar: async (req, res, next) => {
    try {
      const usuario = await svc.registrar(req.body);
      res.status(201).json(usuario);
    } catch (e) {
      next(e);
    }
  },

  login: async (req, res, next) => {
    try {
      const loginData = await svc.login(req.body);
      res.json(loginData);
    } catch (e) {
      next(e);
    }
  },

  perfil: async (req, res, next) => {
    try {
      const usuario = await svc.perfil(req.userId);
      if (!usuario) return res.status(404).json({ error: "No encontrado" });
      res.json(usuario);
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
      const usuario = await svc.perfil(req.params.id);
      if (!usuario) return res.status(404).json({ error: "Usuario no encontrado" });
      res.json(usuario);
    } catch (e) {
      next(e);
    }
  },

  actualizar: async (req, res, next) => {
    try {
      const { userId, userRole } = req;
      
      const usuarioActualizado = await svc.perfil(req.params.id);
      if (!usuarioActualizado) {
        return res.status(404).json({ error: "Usuario no encontrada" });
      }

      // Si es admin, puede actualizar
      if (userRole === "admin") {
        const userActualizada = await svc.actualizar(req.params.id, req.body);
        return res.json(userActualizada);
      }

      // Si el dueño de la mascota es el usuario logueado, puede actualizar
      if (usuarioActualizado.id === userId) {
        const userActualizada = await svc.actualizar(req.params.id, req.body);
        return res.json(userActualizada);
      }

      // Si no, acceso denegado
      return res.status(403).json({ error: "No autorizado" });
    
      res.json(usuarioActualizado);
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
