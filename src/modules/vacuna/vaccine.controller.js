import vaccineService from "./vaccine.service.js";

export default {
  registrar: async (req, res) => {
    try {
      const vacuna = await vaccineService.registrar(req.body);
      res.json(vacuna);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: err.message });
    }
  },

  listar: async (req, res) => {
    try {
      const vacunas = await vaccineService.listar();
      res.json(vacunas);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: err.message });
    }
  },

  obtenerPorId: async (req, res) => {
    try {
      const vacuna = await vaccineService.obtenerPorId(parseInt(req.params.id));
      if (!vacuna) return res.status(404).json({ error: "No encontrado" });
      res.json(vacuna);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: err.message });
    }
  },

  actualizar: async (req, res) => {
    try {
      const vacuna = await vaccineService.actualizar(parseInt(req.params.id), req.body);
      res.json(vacuna);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: err.message });
    }
  },

  eliminar: async (req, res) => {
    try {
      const vacuna = await vaccineService.eliminar(parseInt(req.params.id));
      res.json({ mensaje: "Vacuna eliminada", vacuna });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: err.message });
    }
  }
};
