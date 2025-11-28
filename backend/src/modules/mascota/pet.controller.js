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
      const { userId, userRole } = req;

      const pageNumber = Number(page);
      const pageSizeNumber = Number(pageSize);

      if (isNaN(pageNumber) || isNaN(pageSizeNumber)) {
        return res.status(400).json({ error: "page y pageSize deben ser números" });
      }

      const params = {
        page: pageNumber,
        pageSize: pageSizeNumber,
        search,
      };

      let mascotas;
      if (userRole === "admin") {
        mascotas = await svc.listar(params);
      } else {
        mascotas = await svc.listarPorUsuario(userId);
      }
      return res.json(mascotas);
    } catch (e) {
      next(e);
    }
  },

  obtenerPorId: async (req, res, next) => {
    try {
      const { userId, userRole } = req;

      const pet = await svc.obtenerPorId(req.params.id);
      if (!pet) {
        return res.status(404).json({ error: "Mascota no encontrada" });
      }

      // Si es admin, puede ver cualquier mascota
      if (userRole === "admin") {
        return res.json(pet);
      }

      // Si el dueño de la mascota es el usuario logueado, puede ver
      if (pet.usuario_id_fk === userId) {
        return res.json(pet);
      }

      // Si no, acceso denegado
      return res.status(403).json({ error: "No autorizado" });
    } catch (e) {
      next(e);
    }
  },

  // Para admin: ver todas las mascotas de un usuario específico
  listarPorUsuario: async (req, res, next) => {
    try {
      const usuarioId = req.params.usuario_id;
      res.json(await svc.listarPorUsuario(usuarioId));
    } catch (e) {
      next(e);
    }
  },

  actualizar: async (req, res, next) => {
    try {
      const { userId, userRole } = req;

      const pet = await svc.obtenerPorId(req.params.id);
      if (!pet) {
        return res.status(404).json({ error: "Mascota no encontrada" });
      }

      // Si es admin, puede actualizar
      if (userRole === "admin") {
        const petActualizada = await svc.actualizar(req.params.id, req.body);
        return res.json(petActualizada);
      }

      // Si el dueño de la mascota es el usuario logueado, puede actualizar
      if (pet.usuario_id_fk === userId) {
        const petActualizada = await svc.actualizar(req.params.id, req.body);
        return res.json(petActualizada);
      }

      // Si no, acceso denegado
      return res.status(403).json({ error: "No autorizado" });
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