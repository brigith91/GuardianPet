-- CreateTable
CREATE TABLE `enfermedad` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tipo` VARCHAR(255) NOT NULL,
    `descripcion` TEXT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `historial_clinico` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `fecha` DATETIME(0) NOT NULL,
    `descripcion` TEXT NOT NULL,
    `tipo` VARCHAR(255) NOT NULL,
    `url_archivos` VARCHAR(255) NULL,
    `veterinario_id_fk` INTEGER NOT NULL,
    `mascota_id_fk` INTEGER NOT NULL,
    `cita_id_fk` INTEGER NULL,

    UNIQUE INDEX `cita_id_fk`(`cita_id_fk`),
    INDEX `veterinario_id_fk`(`veterinario_id_fk`),
    INDEX `mascota_id_fk`(`mascota_id_fk`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `mascota` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(255) NOT NULL,
    `especie` VARCHAR(255) NOT NULL,
    `raza` VARCHAR(255) NOT NULL,
    `sexo` VARCHAR(255) NOT NULL,
    `fecha_nacimiento` DATE NOT NULL,
    `usuario_id_fk` INTEGER NOT NULL,
    `url_foto` VARCHAR(255) NULL,

    INDEX `usuario_id_fk`(`usuario_id_fk`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `operacion` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tipo` VARCHAR(255) NOT NULL,
    `descripcion` TEXT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tratamiento` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tipo` INTEGER NOT NULL,
    `fecha` DATETIME(0) NOT NULL,
    `fecha_fin` INTEGER NOT NULL,
    `descripcion` TEXT NOT NULL,
    `enfermedad_id_fk` INTEGER NOT NULL,

    INDEX `enfermedad_id_fk`(`enfermedad_id_fk`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `usuario` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `telefono` VARCHAR(255) NOT NULL,
    `contrasena` VARCHAR(255) NOT NULL,
    `rol` VARCHAR(255) NOT NULL,
    `cedula` INTEGER NOT NULL,

    UNIQUE INDEX `email`(`email`),
    UNIQUE INDEX `cedula`(`cedula`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `vacuna` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(255) NOT NULL,
    `descripcion` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `veterinario` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `matricula` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `cita` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `fecha` DATETIME(0) NOT NULL,
    `estado` VARCHAR(255) NOT NULL,
    `observacion` TEXT NOT NULL,
    `usuario_id_fk` INTEGER NOT NULL,
    `veterinario_id_fk` INTEGER NOT NULL,

    INDEX `fk_cita_usuario`(`usuario_id_fk`),
    INDEX `fk_cita_veterinario`(`veterinario_id_fk`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `clinica` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tienda` VARCHAR(255) NOT NULL,
    `direccion` VARCHAR(255) NOT NULL,
    `telefono` VARCHAR(255) NOT NULL,
    `latitud` DOUBLE NOT NULL,
    `longitud` DOUBLE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `det_enfermedad` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `historial_clinico_id_fk` INTEGER NOT NULL,
    `enfermedad_id_fk` INTEGER NOT NULL,
    `fecha_inicio` DATETIME(0) NOT NULL,
    `fecha_fin` DATETIME(0) NOT NULL,
    `descripcion` TEXT NOT NULL,

    INDEX `historial_clinico_id_fk`(`historial_clinico_id_fk`),
    INDEX `enfermedad_id_fk`(`enfermedad_id_fk`),
    UNIQUE INDEX `det_enfermedad_unique`(`historial_clinico_id_fk`, `enfermedad_id_fk`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `det_operacion` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `historial_clinico_id_fk` INTEGER NOT NULL,
    `operacion_id_fk` INTEGER NOT NULL,
    `fecha` DATETIME(0) NOT NULL,
    `observaciones` TEXT NOT NULL,

    INDEX `historial_clinico_id_fk`(`historial_clinico_id_fk`),
    INDEX `operacion_id_fk`(`operacion_id_fk`),
    UNIQUE INDEX `det_operacion_unique`(`historial_clinico_id_fk`, `operacion_id_fk`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `det_vacuna` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `historial_clinico_id_fk` INTEGER NOT NULL,
    `vacuna_id_fk` INTEGER NOT NULL,
    `fecha` DATETIME(0) NOT NULL,
    `observaciones` TEXT NOT NULL,

    INDEX `historial_clinico_id_fk`(`historial_clinico_id_fk`),
    INDEX `vacuna_id_fk`(`vacuna_id_fk`),
    UNIQUE INDEX `det_vacuna_unique`(`historial_clinico_id_fk`, `vacuna_id_fk`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `historial_clinico` ADD CONSTRAINT `historial_clinico_ibfk_1` FOREIGN KEY (`veterinario_id_fk`) REFERENCES `veterinario`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `historial_clinico` ADD CONSTRAINT `historial_clinico_ibfk_2` FOREIGN KEY (`mascota_id_fk`) REFERENCES `mascota`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `historial_clinico` ADD CONSTRAINT `historial_clinico_ibfk_3` FOREIGN KEY (`cita_id_fk`) REFERENCES `cita`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `mascota` ADD CONSTRAINT `mascota_ibfk_1` FOREIGN KEY (`usuario_id_fk`) REFERENCES `usuario`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `tratamiento` ADD CONSTRAINT `tratamiento_ibfk_1` FOREIGN KEY (`enfermedad_id_fk`) REFERENCES `enfermedad`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `cita` ADD CONSTRAINT `fk_cita_usuario` FOREIGN KEY (`usuario_id_fk`) REFERENCES `usuario`(`id`) ON DELETE CASCADE ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `cita` ADD CONSTRAINT `fk_cita_veterinario` FOREIGN KEY (`veterinario_id_fk`) REFERENCES `veterinario`(`id`) ON DELETE CASCADE ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `det_enfermedad` ADD CONSTRAINT `det_enfermedad_ibfk_1` FOREIGN KEY (`historial_clinico_id_fk`) REFERENCES `historial_clinico`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `det_enfermedad` ADD CONSTRAINT `det_enfermedad_ibfk_2` FOREIGN KEY (`enfermedad_id_fk`) REFERENCES `enfermedad`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `det_operacion` ADD CONSTRAINT `det_operacion_ibfk_1` FOREIGN KEY (`historial_clinico_id_fk`) REFERENCES `historial_clinico`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `det_operacion` ADD CONSTRAINT `det_operacion_ibfk_2` FOREIGN KEY (`operacion_id_fk`) REFERENCES `operacion`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `det_vacuna` ADD CONSTRAINT `det_vacuna_ibfk_1` FOREIGN KEY (`historial_clinico_id_fk`) REFERENCES `historial_clinico`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `det_vacuna` ADD CONSTRAINT `det_vacuna_ibfk_2` FOREIGN KEY (`vacuna_id_fk`) REFERENCES `vacuna`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;
