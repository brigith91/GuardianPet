import vaccineService from "./vaccine.service.js";

export default {
  registrar: async (req, res, next) => {
    try {
      const vacuna = await vaccineService.registrar(req.body);
      res.json(vacuna);
    } catch (err) {
      next(err);
    }
  },

  listar: async (req, res, next) => {
    try {
      const { page = 1, pageSize = 20, search = "" } = req.query;

      const vacunas = await vaccineService.listar({
        page: Number(page),
        pageSize: Number(pageSize),
        search,
      });

      res.json(vacunas);
    } catch (e) {
      next(e);
    }
  },

  obtenerPorId: async (req, res, next) => {
    try {
      const vacuna = await vaccineService.obtenerPorId(parseInt(req.params.id));
      if (!vacuna) return res.status(404).json({ error: "No encontrado" });
      res.json(vacuna);
    } catch (err) {
      next(err);
    }
  },

  actualizar: async (req, res, next) => {
    try {
      const vacuna = await vaccineService.actualizar(parseInt(req.params.id), req.body);
      res.json(vacuna);
    } catch (err) {
      next(err);
    }
  },

  eliminar: async (req, res, next) => {
    try {
      const vacuna = await vaccineService.eliminar(parseInt(req.params.id));
      res.json({ mensaje: "Vacuna eliminada", vacuna });
    } catch (err) {
      next(err);
    }
  }
};