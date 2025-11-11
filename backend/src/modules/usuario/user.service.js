import repo from "./user.repository.js";
import { hashPassword, comparePassword } from "../../utils/crypto.js"; // Importa tus funciones de crypto
import jwt from "jsonwebtoken";

export default {
  async registrar(data) {
    // Verificar si el correo ya existe
    const emailExists = await repo.existsEmail(data.email);
    if (emailExists) throw new Error("El correo ya está registrado");

    // Verificar si la cédula ya existe
    const cedulaExists = await repo.existsCedula(data.cedula);
    if (cedulaExists) throw new Error("La cédula ya está registrada");

    // Validar rol
    const rol = data.rol ?? "usuario";
    if (!["usuario", "admin"].includes(rol)) {
      throw new Error("Rol inválido, debe ser 'usuario' o 'admin'");
    }

    // Encriptar la contraseña
    data.contrasena = await hashPassword(data.contrasena);
    data.rol = rol;

    // Crear usuario
    const nuevoUsuario = await repo.create(data);
    return nuevoUsuario;
  },

  async login({ email, contrasena }) {
    const user = await repo.findByEmail(email);
    if (!user || !(await comparePassword(contrasena, user.contrasena)))
      throw new Error("Credenciales inválidas");

    const token = jwt.sign(
      { sub: user.id, email: user.email, rol: user.rol },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN || "1d" }
    );

    const { id, nombre, telefono, rol, cedula } = user;
    return { token, user: { id, nombre, email, telefono, rol, cedula } };
  },

  listar(params) {
    return repo.list(params);
  },

  perfil(id) {
    return repo.findById(id);
  },

  async actualizar(id, data) {
    // Encriptar contraseña si se actualiza
    if (data.contrasena) {
      data.contrasena = await hashPassword(data.contrasena);
    }
    return repo.update(id, data);
  },

  async eliminar(id) {
    return repo.remove(id);
  },
};
