-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`Administradores`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Administradores` (
  `idUsuarios` INT NOT NULL AUTO_INCREMENT,
  `Nombre` VARCHAR(45) NOT NULL,
  `Email` VARCHAR(45) NOT NULL,
  `Telefono` VARCHAR(10) NOT NULL,
  `Contraseña` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`idUsuarios`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Servicios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Servicios` (
  `idServicios` INT NOT NULL AUTO_INCREMENT,
  `Nombre` VARCHAR(100) NOT NULL,
  `Descripcion` VARCHAR(300) NOT NULL,
  `Imagen` VARCHAR(500) NOT NULL,
  `Usuarios_idUsuarios` INT NOT NULL,
  PRIMARY KEY (`idServicios`, `Usuarios_idUsuarios`),
  INDEX `fk_Servicios_Usuarios_idx` (`Usuarios_idUsuarios` ASC) VISIBLE,
  CONSTRAINT `fk_Servicios_Usuarios`
    FOREIGN KEY (`Usuarios_idUsuarios`)
    REFERENCES `mydb`.`Administradores` (`idUsuarios`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Cotizaciones`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Cotizaciones` (
  `idCotizaciones` INT NOT NULL AUTO_INCREMENT,
  `Nombre` VARCHAR(45) NOT NULL,
  `Email` VARCHAR(45) NOT NULL,
  `Telefono` VARCHAR(10) NOT NULL,
  `Empresa` VARCHAR(45) NOT NULL,
  `Mensaje` VARCHAR(300) NOT NULL,
  PRIMARY KEY (`idCotizaciones`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Cotizaciones_has_Servicios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Cotizaciones_has_Servicios` (
  `Cotizaciones_idCotizaciones` INT NOT NULL,
  `Servicios_idServicios` INT NOT NULL,
  `Servicios_Usuarios_idUsuarios` INT NOT NULL,
  PRIMARY KEY (`Cotizaciones_idCotizaciones`, `Servicios_idServicios`, `Servicios_Usuarios_idUsuarios`),
  INDEX `fk_Cotizaciones_has_Servicios_Servicios1_idx` (`Servicios_idServicios` ASC, `Servicios_Usuarios_idUsuarios` ASC) VISIBLE,
  INDEX `fk_Cotizaciones_has_Servicios_Cotizaciones1_idx` (`Cotizaciones_idCotizaciones` ASC) VISIBLE,
  CONSTRAINT `fk_Cotizaciones_has_Servicios_Cotizaciones1`
    FOREIGN KEY (`Cotizaciones_idCotizaciones`)
    REFERENCES `mydb`.`Cotizaciones` (`idCotizaciones`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Cotizaciones_has_Servicios_Servicios1`
    FOREIGN KEY (`Servicios_idServicios` , `Servicios_Usuarios_idUsuarios`)
    REFERENCES `mydb`.`Servicios` (`idServicios` , `Usuarios_idUsuarios`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Ventas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Ventas` (
  `idCompras` INT NOT NULL AUTO_INCREMENT,
  `Precio` FLOAT NOT NULL,
  `Fechas` VARCHAR(10) NOT NULL,
  `Cotizaciones_has_Servicios_Cotizaciones_idCotizaciones` INT NOT NULL,
  `Cotizaciones_has_Servicios_Servicios_idServicios` INT NOT NULL,
  `Cotizaciones_has_Servicios_Servicios_Usuarios_idUsuarios` INT NOT NULL,
  PRIMARY KEY (`idCompras`, `Cotizaciones_has_Servicios_Cotizaciones_idCotizaciones`, `Cotizaciones_has_Servicios_Servicios_idServicios`, `Cotizaciones_has_Servicios_Servicios_Usuarios_idUsuarios`),
  INDEX `fk_Ventas_Cotizaciones_has_Servicios1_idx` (`Cotizaciones_has_Servicios_Cotizaciones_idCotizaciones` ASC, `Cotizaciones_has_Servicios_Servicios_idServicios` ASC, `Cotizaciones_has_Servicios_Servicios_Usuarios_idUsuarios` ASC) VISIBLE,
  CONSTRAINT `fk_Ventas_Cotizaciones_has_Servicios1`
    FOREIGN KEY (`Cotizaciones_has_Servicios_Cotizaciones_idCotizaciones` , `Cotizaciones_has_Servicios_Servicios_idServicios` , `Cotizaciones_has_Servicios_Servicios_Usuarios_idUsuarios`)
    REFERENCES `mydb`.`Cotizaciones_has_Servicios` (`Cotizaciones_idCotizaciones` , `Servicios_idServicios` , `Servicios_Usuarios_idUsuarios`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
