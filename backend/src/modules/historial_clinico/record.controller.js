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
      const { userId, userRole } = req;

      if (userRole === "admin") {
        const records = await svc.listar({
          page: Number(page),
          pageSize: Number(pageSize),
          search,
        });
        return res.json(records);
      }

      // Lista por usuario usando la relación mascota → usuario
      const records = await svc.listarPorUsuario(userId);
      return res.json(records);
    } catch (e) {
      next(e);
    }
  },

  obtenerPorId: async (req, res, next) => {
    try {
      const { userId, userRole } = req;

      const record = await svc.obtenerPorIdConMascota(req.params.id);
      if (!record) {
        return res.status(404).json({ error: "Registro no encontrado" });
      }

      const ownerId = record.mascota?.usuario_id_fk;

      // Si es admin, puede ver todo
      if (userRole === "admin") {
        return res.json(record);
      }

      // Si el dueño de la mascota es el usuario logueado, puede ver
      if (ownerId === userId) {
        return res.json(record);
      }

      // Si no, acceso denegado
      return res.status(403).json({ error: "No autorizado" });
    } catch (e) {
      next(e);
    }
  },

  // Para admin: ver todos los registros de un usuario por sus mascotas
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

  listarPorMascota: async (req, res, next) => {
    try {
      const { userId, userRole } = req; // viene del middleware auth
      const mascotaId = Number(req.params.mascota_id);

      if (!mascotaId || Number.isNaN(mascotaId)) {
        return res.status(400).json({ error: "ID de mascota inválido" });
      }

      const records = await svc.listarPorMascota(mascotaId);

      // records es un ARRAY
      if (!records || records.length === 0) {
        return res.status(404).json({ error: "No hay registros para esta mascota" });
      }

      // Tomamos el owner desde la primera entrada
      const ownerId = records[0]?.mascota?.usuario_id_fk;

      // Si es admin, puede ver todo
      if (userRole === "admin") {
        return res.json(records);
      }

      // Si el dueño de la mascota es el usuario logueado, puede ver
      if (Number(ownerId) === Number(userId)) {
        return res.json(records);
      }

      // Si no, acceso denegado
      return res.status(403).json({ error: "No autorizado" });
    } catch (e) {
      next(e);
    }
  },

  actualizar: async (req, res, next) => {
    try {
      const { userId, userRole } = req;

      const record = await svc.obtenerPorIdConMascota(req.params.id);
      if (!record) {
        return res.status(404).json({ error: "Registro no encontrado" });
      }

      const ownerId = record.mascota?.usuario_id_fk;

      // Si es admin, puede actualizar
      if (userRole === "admin") {
        const actualizado = await svc.actualizar(req.params.id, req.body);
        return res.json(actualizado);
      }

      // Si el dueño de la mascota es el usuario logueado, puede actualizar
      if (ownerId === userId) {
        const actualizado = await svc.actualizar(req.params.id, req.body);
        return res.json(actualizado);
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