import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import repo from "./user.repository.js";

export default {
  async registrar(data) {
    // Verificar si el correo ya existe
    const emailExists = await repo.existsEmail(data.email);
    if (emailExists) throw new Error("El correo ya está registrado");

    // Verificar si la cédula ya existe
    const cedulaExists = await repo.existsCedula(data.cedula);
    if (cedulaExists) throw new Error("La cédula ya está registrada");

    // Encriptar la contraseña
    const hashedPassword = await bcrypt.hash(data.contrasena, 10);
    data.contrasena = hashedPassword;

    // Crear usuario
    const nuevoUsuario = await repo.create(data);
    return nuevoUsuario;
  },

  async login({ email, contrasena }) {
    const user = await repo.findByEmail(email);
    if (!user) throw new Error("Credenciales inválidas");

    const valid = await bcrypt.compare(contrasena, user.contrasena);
    if (!valid) throw new Error("Credenciales inválidas");

    // Generar token
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: "1d" });
    return { token, user };
  },

  async listar(query) {
    return await repo.list(query);
  },

  async actualizar(id, data) {
    if (data.contrasena) {
      data.contrasena = await bcrypt.hash(data.contrasena, 10);
    }
    return await repo.update(id, data);
  },

  async eliminar(id) {
    return await repo.remove(id);
  },

  async perfil(id) {
    const user = await repo.findById(id);
    if (!user) throw new Error("No encontrado");
    return user;
  },
};
