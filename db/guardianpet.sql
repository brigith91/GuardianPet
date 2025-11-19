-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 18-11-2025 a las 03:20:28
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

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
  `veterinario_id_fk` int(11) NOT NULL,
  `mascota_id_fk` int(11) NOT NULL,
  `reminder_email_sent` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `cita`
--

INSERT INTO `cita` (`id`, `fecha`, `estado`, `observacion`, `veterinario_id_fk`, `mascota_id_fk`, `reminder_email_sent`) VALUES
(1, '2025-11-19 09:30:00', 'Programada', 'Chequeo columna de la mascota', 1, 1, 0),
(2, '2025-11-18 10:30:00', 'Programada', 'Chequeo pulgas de la mascota', 1, 1, 0),
(3, '2025-11-18 10:30:00', 'Programada', 'Chequeo pulgas de la mascota', 1, 1, 0),
(4, '2025-11-18 15:30:00', 'Programada', 'Chequeo pulgas de la mascota', 1, 1, 0);

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

--
-- Volcado de datos para la tabla `det_vacuna`
--

INSERT INTO `det_vacuna` (`id`, `historial_clinico_id_fk`, `vacuna_id_fk`, `fecha`, `observaciones`) VALUES
(1, 4, 1, '2025-11-18 01:45:40', 'Se aplicó la vacuna correctamente');

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

--
-- Volcado de datos para la tabla `historial_clinico`
--

INSERT INTO `historial_clinico` (`id`, `fecha`, `descripcion`, `tipo`, `url_archivos`, `veterinario_id_fk`, `mascota_id_fk`, `cita_id_fk`) VALUES
(4, '2025-11-18 01:40:26', 'Al perro se fue a hacerle una vacuna', 'Vacuna - control', '/assets/', 1, 1, NULL);

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
(1, 'Perrito', 'Perro', 'Chiguagua', 'M', '2025-11-02', 1, '/assets/');

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
-- Estructura de tabla para la tabla `password_reset_token`
--

CREATE TABLE `password_reset_token` (
  `id` int(11) NOT NULL,
  `usuario_id_fk` int(11) NOT NULL,
  `token_hash` varchar(191) NOT NULL,
  `expires_at` datetime(3) NOT NULL,
  `used_at` datetime(3) DEFAULT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `ip` varchar(191) DEFAULT NULL,
  `user_agent` varchar(191) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `password_reset_token`
--

INSERT INTO `password_reset_token` (`id`, `usuario_id_fk`, `token_hash`, `expires_at`, `used_at`, `created_at`, `ip`, `user_agent`) VALUES
(1, 1, '702f3133712bd39caaab26e425e9ec9a7476efeb2ad5211ab9a2eca11b690cfe', '2025-11-18 00:59:25.528', NULL, '2025-11-18 00:29:25.530', '::1', 'PostmanRuntime/7.49.1'),
(2, 1, 'de34bb88ac62b1e461027dbb1f3d2c9f36851d33354ce31b0d662420d18704d2', '2025-11-18 01:02:36.167', NULL, '2025-11-18 00:32:36.170', '::1', 'PostmanRuntime/7.49.1'),
(4, 1, '90be729d04ce6ff7d4365dd2ae4353d3437af349bfef0f16bc9b655e67af275b', '2025-11-18 01:51:51.406', '2025-11-18 01:23:00.248', '2025-11-18 01:21:51.407', '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36 Edg/143.0.0.0');

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
(1, 'Lina Roncancio', 'bridgeth1991@gmail.com', '3207682020', '$2b$10$BxI76GQbDrr0JkmVqp25Ye0jc6eQ51Al9pjWTVxZMAn4o1VPRdUre', 'usuario', 55550100);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `vacuna`
--

CREATE TABLE `vacuna` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `descripcion` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `vacuna`
--

INSERT INTO `vacuna` (`id`, `nombre`, `descripcion`) VALUES
(1, 'La Rabia', 'Vacuna contra la rabia');

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
(1, 'Juan', 'juan@veterinario.com', '12454354135121');

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
('a6615658-8a5d-4fa7-8049-e6f0d0049a6e', '4abb821ea89e942570ea84cb097bc83e8628b703c2f9c98c3f3a7495d5bde5a7', '2025-11-18 00:01:22.646', '20251118000122_add_password_reset_tokens', NULL, NULL, '2025-11-18 00:01:22.555', 1),
('b0597a42-a5ee-42f2-aa74-e1d1573b3dbf', '5707c36818388fb6ac40daa052a53dc2798579e408cae083aa3a2c57ff34aae7', '2025-11-18 00:01:16.323', '20251105194345_initial', NULL, NULL, '2025-11-18 00:01:15.887', 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `cita`
--
ALTER TABLE `cita`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_cita_veterinario` (`veterinario_id_fk`),
  ADD KEY `mascota_id_fk` (`mascota_id_fk`);

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
-- Indices de la tabla `password_reset_token`
--
ALTER TABLE `password_reset_token`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `token_hash` (`token_hash`),
  ADD KEY `usuario_id_fk` (`usuario_id_fk`),
  ADD KEY `expires_at` (`expires_at`);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `enfermedad`
--
ALTER TABLE `enfermedad`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `historial_clinico`
--
ALTER TABLE `historial_clinico`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `mascota`
--
ALTER TABLE `mascota`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `operacion`
--
ALTER TABLE `operacion`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `password_reset_token`
--
ALTER TABLE `password_reset_token`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `tratamiento`
--
ALTER TABLE `tratamiento`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `vacuna`
--
ALTER TABLE `vacuna`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

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
-- Filtros para la tabla `password_reset_token`
--
ALTER TABLE `password_reset_token`
  ADD CONSTRAINT `password_reset_token_ibfk_1` FOREIGN KEY (`usuario_id_fk`) REFERENCES `usuario` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `tratamiento`
--
ALTER TABLE `tratamiento`
  ADD CONSTRAINT `tratamiento_ibfk_1` FOREIGN KEY (`enfermedad_id_fk`) REFERENCES `enfermedad` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
