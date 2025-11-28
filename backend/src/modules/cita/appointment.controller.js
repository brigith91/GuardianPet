// src/modules/cita/appointment.controller.js
import { request } from "express";
import svc from "./appointment.service.js";
import { sendNewAppointmentInvite } from './alerts.js';

export default {
  registrar: async (req, res, next) => {
    try {
      // si quieres, aquí puedes comprobar que la mascota pertenece al usuario
      const cita = await svc.registrar(req.body);
      res.status(201).json(cita);

      sendNewAppointmentInvite(cita.id).catch(console.error);
    } catch (e) {
      next(e);
    }
  },

  listar: async (req, res, next) => {
    try {
      const { page = 1, pageSize = 20, search = "" } = req.query;
      const { userId, userRole } = req;

      if (userRole === "admin") {
        const citas = await svc.listar({
          page: Number(page),
          pageSize: Number(pageSize),
          search,
        });
        return res.json(citas);
      }

      // ⬇️ ahora lista por usuario usando la relación mascota → usuario
      const citas = await svc.listarPorUsuario(userId);
      return res.json(citas);
    } catch (e) {
      next(e);
    }
  },

  obtenerPorId: async (req, res, next) => {
    try {
      const { userId, userRole } = req; //viene del middleware auth

      const cita = await svc.obtenerPorIdConMascota(req.params.id);
      if (!cita) {
        return res.status(404).json({ error: "Cita no encontrada" });
      }

      const ownerId = cita.mascota?.usuario_id_fk;

      // si es admin, pasa
      if (userRole === "admin") {
        return res.json(cita);
      }

      // si el dueño de la mascota es el usuario logueado, pasa
      if (ownerId === userId) {
        return res.json(cita);
      }

      // si no, fuera
      return res.status(403).json({ error: "No autorizado" });
    } catch (e) {
      next(e);
    }
  },

  // dejamos esta para admin: ver todas las citas de un usuario por sus mascotas
  listarPorUsuario: async (req, res, next) => {
    try {
      res.json(await svc.listarPorUsuario(req.params.usuario_id));
    } catch (e) {
      next(e);
    }
  },

  // nueva si quieres listar por mascota directamente
  listarPorMascota: async (req, res, next) => {
    try {
      const { userId, userRole } = req; // viene del middleware auth
      const mascotaId = Number(req.params.mascota_id);

      if (!mascotaId || Number.isNaN(mascotaId)) {
        return res.status(400).json({ error: "ID de mascota inválido" });
      }

      const citas = await svc.listarPorMascota(mascotaId);

      // citas es un array
      if (!citas || citas.length === 0) {
        return res.status(404).json({ error: "No hay citas para esta mascota" });
      }

      // Tomamos el owner de la mascota de la primera cita
      const ownerId = citas[0]?.mascota?.usuario_id_fk;

      // Si es admin, puede ver las citas de cualquier mascota
      if (userRole === "admin") {
        return res.json(citas);
      }

      // Si el dueño de la mascota es el usuario logueado, OK
      if (Number(ownerId) === Number(userId)) {
        return res.json(citas);
      }

      // Si no, no autorizado
      return res.status(403).json({ error: "No autorizado" });
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
      sendNewAppointmentInvite(req.params.id).catch(console.error);
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
