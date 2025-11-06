import service from "./det_vaccine.service.js";

const registrar = async (req, res) => {
  try {
    const result = await service.registrar(req.body);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const listar = async (req, res) => {
  try {
    const result = await service.listar();
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const listarPorHistorial = async (req, res) => {
  try {
    const result = await service.listarPorHistorial(Number(req.params.historial_id));
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const obtenerPorId = async (req, res) => {
  try {
    const result = await service.obtenerPorId(Number(req.params.id));
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const actualizar = async (req, res) => {
  try {
    const result = await service.actualizar(Number(req.params.id), req.body);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const eliminar = async (req, res) => {
  try {
    const result = await service.eliminar(Number(req.params.id));
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export default {
  registrar,
  listar,
  listarPorHistorial,
  obtenerPorId,
  actualizar,
  eliminar,
};
