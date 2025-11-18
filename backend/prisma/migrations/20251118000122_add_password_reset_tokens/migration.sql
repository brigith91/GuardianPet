/*
  Warnings:

  - You are about to drop the column `usuario_id_fk` on the `cita` table. All the data in the column will be lost.
  - Added the required column `mascota_id_fk` to the `cita` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `cita` DROP FOREIGN KEY `fk_cita_usuario`;

-- DropIndex
DROP INDEX `fk_cita_usuario` ON `cita`;

-- AlterTable
ALTER TABLE `cita` DROP COLUMN `usuario_id_fk`,
    ADD COLUMN `mascota_id_fk` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `password_reset_token` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `usuario_id_fk` INTEGER NOT NULL,
    `token_hash` VARCHAR(191) NOT NULL,
    `expires_at` DATETIME(3) NOT NULL,
    `used_at` DATETIME(3) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `ip` VARCHAR(191) NULL,
    `user_agent` VARCHAR(191) NULL,

    UNIQUE INDEX `token_hash`(`token_hash`),
    INDEX `usuario_id_fk`(`usuario_id_fk`),
    INDEX `expires_at`(`expires_at`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE INDEX `mascota_id_fk` ON `cita`(`mascota_id_fk`);

-- AddForeignKey
ALTER TABLE `cita` ADD CONSTRAINT `cita_ibfk_1` FOREIGN KEY (`mascota_id_fk`) REFERENCES `mascota`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `password_reset_token` ADD CONSTRAINT `password_reset_token_ibfk_1` FOREIGN KEY (`usuario_id_fk`) REFERENCES `usuario`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
