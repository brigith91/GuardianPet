-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 11-11-2025 a las 01:57:07
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `guardianpet`
--
CREATE DATABASE IF NOT EXISTS `guardianpet` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `guardianpet`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cita`
--

CREATE TABLE `cita` (
  `id` int(11) NOT NULL,
  `fecha` datetime NOT NULL,
  `estado` varchar(255) NOT NULL,
  `observacion` text NOT NULL,
  `mascota_id_fk` int(11) NOT NULL,
  `veterinario_id_fk` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clinica`
--

CREATE TABLE `clinica` (
  `id` int(11) NOT NULL,
  `tienda` varchar(255) NOT NULL,
  `direccion` varchar(255) NOT NULL,
  `telefono` varchar(255) NOT NULL,
  `latitud` double NOT NULL,
  `longitud` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `det_enfermedad`
--

CREATE TABLE `det_enfermedad` (
  `id` int(11) NOT NULL,
  `historial_clinico_id_fk` int(11) NOT NULL,
  `enfermedad_id_fk` int(11) NOT NULL,
  `fecha_inicio` datetime NOT NULL,
  `fecha_fin` datetime NOT NULL,
  `descripcion` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `det_operacion`
--

CREATE TABLE `det_operacion` (
  `id` int(11) NOT NULL,
  `historial_clinico_id_fk` int(11) NOT NULL,
  `operacion_id_fk` int(11) NOT NULL,
  `fecha` datetime NOT NULL,
  `observaciones` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `det_vacuna`
--

CREATE TABLE `det_vacuna` (
  `id` int(11) NOT NULL,
  `historial_clinico_id_fk` int(11) NOT NULL,
  `vacuna_id_fk` int(11) NOT NULL,
  `fecha` datetime NOT NULL,
  `observaciones` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `enfermedad`
--

CREATE TABLE `enfermedad` (
  `id` int(11) NOT NULL,
  `tipo` varchar(255) NOT NULL,
  `descripcion` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `historial_clinico`
--

CREATE TABLE `historial_clinico` (
  `id` int(11) NOT NULL,
  `fecha` datetime NOT NULL,
  `descripcion` text NOT NULL,
  `tipo` varchar(255) NOT NULL,
  `url_archivos` varchar(255) DEFAULT NULL,
  `veterinario_id_fk` int(11) NOT NULL,
  `mascota_id_fk` int(11) NOT NULL,
  `cita_id_fk` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mascota`
--

CREATE TABLE `mascota` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `especie` varchar(255) NOT NULL,
  `raza` varchar(255) NOT NULL,
  `sexo` varchar(255) NOT NULL,
  `fecha_nacimiento` date NOT NULL,
  `usuario_id_fk` int(11) NOT NULL,
  `url_foto` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `mascota`
--

INSERT INTO `mascota` (`id`, `nombre`, `especie`, `raza`, `sexo`, `fecha_nacimiento`, `usuario_id_fk`, `url_foto`) VALUES
(1, 'Motas', 'Gato', 'Mezcla', 'M', '2025-11-07', 4, '/assest');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `operacion`
--

CREATE TABLE `operacion` (
  `id` int(11) NOT NULL,
  `tipo` varchar(255) NOT NULL,
  `descripcion` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tratamiento`
--

CREATE TABLE `tratamiento` (
  `id` int(11) NOT NULL,
  `tipo` int(11) NOT NULL,
  `fecha` datetime NOT NULL,
  `fecha_fin` int(11) NOT NULL,
  `descripcion` text NOT NULL,
  `enfermedad_id_fk` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `telefono` varchar(255) NOT NULL,
  `contrasena` varchar(255) NOT NULL,
  `rol` varchar(255) NOT NULL,
  `cedula` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`id`, `nombre`, `email`, `telefono`, `contrasena`, `rol`, `cedula`) VALUES
(1, 'Juan Pérez', 'juan@example.com', '3001234567', '$2b$10$Zu3haDx8Yrrzod1hO/po4.9PoUb9XkvBET7qzwwsu0s8dOlXndHmq', 'usuario', 1234567890),
(2, 'Lina Roncancio', 'lina.roncancio@gmail.com', '3105678923', '$2b$10$ywEeal41MyqNCVrBavuD4ua9KzyQ65O9B/JY5kElf8XirOWJwr6.O', 'usuario', 1024494230),
(4, 'Nadia Rodriguez', 'holaaaa@gmail.com', '3123456789', '$2b$10$Js1efclYfBPEQt4tzG6cLOuJoXTyuYEqk7cD6CFpGpw1FhdCu7B.e', 'usuario', 1111111),
(5, 'Miguel Santa', 'msanta@inter.edu.co', '3156169780', '$2b$10$zevSow4xTELgxLeCt3gm8elSupPB.EXTPHSzCyoLb2ssNDkF9sEXi', 'usuario', 1001053011);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `vacuna`
--

CREATE TABLE `vacuna` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `descripcion` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `veterinario`
--

CREATE TABLE `veterinario` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `matricula` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `veterinario`
--

INSERT INTO `veterinario` (`id`, `nombre`, `email`, `matricula`) VALUES
(1, 'Juan Perez', 'jperez@example.com', '42356453164122');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `_prisma_migrations`
--

CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) NOT NULL,
  `checksum` varchar(64) NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) NOT NULL,
  `logs` text DEFAULT NULL,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `applied_steps_count` int(10) UNSIGNED NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `_prisma_migrations`
--

INSERT INTO `_prisma_migrations` (`id`, `checksum`, `finished_at`, `migration_name`, `logs`, `rolled_back_at`, `started_at`, `applied_steps_count`) VALUES
('a1ae887a-d9d2-492c-ad36-84375f46521e', '09ad54f47241990d123de391798030233c1927123e40092c32c407774fcf5d88', '2025-11-05 19:44:02.981', '20251105194345_initial', NULL, NULL, '2025-11-05 19:43:45.464', 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `cita`
--
ALTER TABLE `cita`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `mascota_id_fk` (`mascota_id_fk`),
  ADD KEY `fk_cita_veterinario` (`veterinario_id_fk`);

--
-- Indices de la tabla `clinica`
--
ALTER TABLE `clinica`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `det_enfermedad`
--
ALTER TABLE `det_enfermedad`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `det_enfermedad_unique` (`historial_clinico_id_fk`,`enfermedad_id_fk`),
  ADD KEY `historial_clinico_id_fk` (`historial_clinico_id_fk`),
  ADD KEY `enfermedad_id_fk` (`enfermedad_id_fk`);

--
-- Indices de la tabla `det_operacion`
--
ALTER TABLE `det_operacion`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `det_operacion_unique` (`historial_clinico_id_fk`,`operacion_id_fk`),
  ADD KEY `historial_clinico_id_fk` (`historial_clinico_id_fk`),
  ADD KEY `operacion_id_fk` (`operacion_id_fk`);

--
-- Indices de la tabla `det_vacuna`
--
ALTER TABLE `det_vacuna`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `det_vacuna_unique` (`historial_clinico_id_fk`,`vacuna_id_fk`),
  ADD KEY `historial_clinico_id_fk` (`historial_clinico_id_fk`),
  ADD KEY `vacuna_id_fk` (`vacuna_id_fk`);

--
-- Indices de la tabla `enfermedad`
--
ALTER TABLE `enfermedad`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `historial_clinico`
--
ALTER TABLE `historial_clinico`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `cita_id_fk` (`cita_id_fk`),
  ADD KEY `veterinario_id_fk` (`veterinario_id_fk`),
  ADD KEY `mascota_id_fk` (`mascota_id_fk`);

--
-- Indices de la tabla `mascota`
--
ALTER TABLE `mascota`
  ADD PRIMARY KEY (`id`),
  ADD KEY `usuario_id_fk` (`usuario_id_fk`);

--
-- Indices de la tabla `operacion`
--
ALTER TABLE `operacion`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `tratamiento`
--
ALTER TABLE `tratamiento`
  ADD PRIMARY KEY (`id`),
  ADD KEY `enfermedad_id_fk` (`enfermedad_id_fk`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `cedula` (`cedula`);

--
-- Indices de la tabla `vacuna`
--
ALTER TABLE `vacuna`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `veterinario`
--
ALTER TABLE `veterinario`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `_prisma_migrations`
--
ALTER TABLE `_prisma_migrations`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `cita`
--
ALTER TABLE `cita`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `clinica`
--
ALTER TABLE `clinica`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `det_enfermedad`
--
ALTER TABLE `det_enfermedad`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `det_operacion`
--
ALTER TABLE `det_operacion`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `det_vacuna`
--
ALTER TABLE `det_vacuna`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `enfermedad`
--
ALTER TABLE `enfermedad`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `historial_clinico`
--
ALTER TABLE `historial_clinico`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `mascota`
--
ALTER TABLE `mascota`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `operacion`
--
ALTER TABLE `operacion`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tratamiento`
--
ALTER TABLE `tratamiento`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `vacuna`
--
ALTER TABLE `vacuna`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `veterinario`
--
ALTER TABLE `veterinario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `cita`
--
ALTER TABLE `cita`
  ADD CONSTRAINT `cita_ibfk_1` FOREIGN KEY (`mascota_id_fk`) REFERENCES `mascota` (`id`),
  ADD CONSTRAINT `fk_cita_veterinario` FOREIGN KEY (`veterinario_id_fk`) REFERENCES `veterinario` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `det_enfermedad`
--
ALTER TABLE `det_enfermedad`
  ADD CONSTRAINT `det_enfermedad_ibfk_1` FOREIGN KEY (`historial_clinico_id_fk`) REFERENCES `historial_clinico` (`id`),
  ADD CONSTRAINT `det_enfermedad_ibfk_2` FOREIGN KEY (`enfermedad_id_fk`) REFERENCES `enfermedad` (`id`);

--
-- Filtros para la tabla `det_operacion`
--
ALTER TABLE `det_operacion`
  ADD CONSTRAINT `det_operacion_ibfk_1` FOREIGN KEY (`historial_clinico_id_fk`) REFERENCES `historial_clinico` (`id`),
  ADD CONSTRAINT `det_operacion_ibfk_2` FOREIGN KEY (`operacion_id_fk`) REFERENCES `operacion` (`id`);

--
-- Filtros para la tabla `det_vacuna`
--
ALTER TABLE `det_vacuna`
  ADD CONSTRAINT `det_vacuna_ibfk_1` FOREIGN KEY (`historial_clinico_id_fk`) REFERENCES `historial_clinico` (`id`),
  ADD CONSTRAINT `det_vacuna_ibfk_2` FOREIGN KEY (`vacuna_id_fk`) REFERENCES `vacuna` (`id`);

--
-- Filtros para la tabla `historial_clinico`
--
ALTER TABLE `historial_clinico`
  ADD CONSTRAINT `historial_clinico_ibfk_1` FOREIGN KEY (`veterinario_id_fk`) REFERENCES `veterinario` (`id`),
  ADD CONSTRAINT `historial_clinico_ibfk_2` FOREIGN KEY (`mascota_id_fk`) REFERENCES `mascota` (`id`),
  ADD CONSTRAINT `historial_clinico_ibfk_3` FOREIGN KEY (`cita_id_fk`) REFERENCES `cita` (`id`);

--
-- Filtros para la tabla `mascota`
--
ALTER TABLE `mascota`
  ADD CONSTRAINT `mascota_ibfk_1` FOREIGN KEY (`usuario_id_fk`) REFERENCES `usuario` (`id`);

--
-- Filtros para la tabla `tratamiento`
--
ALTER TABLE `tratamiento`
  ADD CONSTRAINT `tratamiento_ibfk_1` FOREIGN KEY (`enfermedad_id_fk`) REFERENCES `enfermedad` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
