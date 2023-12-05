-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema magicsoft
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema magicsoft
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `magicsoft` DEFAULT CHARACTER SET utf8 ;
USE `magicsoft` ;

-- -----------------------------------------------------
-- Table `magicsoft`.`administradores`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `magicsoft`.`administradores` (
  `idAdm` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `telefono` VARCHAR(10) NOT NULL,
  `contrasena` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`idAdm`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `magicsoft`.`servicios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `magicsoft`.`servicios` (
  `idServicio` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(100) NOT NULL,
  `descripcion` VARCHAR(300) NOT NULL,
  `imagen` VARCHAR(500) NOT NULL,
  `administradores_idAdm` INT NOT NULL,
  PRIMARY KEY (`idServicio`, `administradores_idAdm`),
  INDEX `fk_servicios_administradores_idx` (`administradores_idAdm` ASC) ,
    FOREIGN KEY (`administradores_idAdm`)
    REFERENCES `magicsoft`.`administradores` (`idAdm`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `magicsoft`.`cotizaciones`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `magicsoft`.`cotizaciones` (
  `idCotizacion` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `telefono` VARCHAR(10) NOT NULL,
  `empresa` VARCHAR(45) NOT NULL,
  `mensaje` VARCHAR(300) NOT NULL,
  `servicios_idServicio` INT NOT NULL,
  PRIMARY KEY (`idCotizacion`, `servicios_idServicio`),
  INDEX `fk_cotizaciones_servicios_idx` (`servicios_idServicio` ASC) ,
    FOREIGN KEY (`servicios_idServicio`)
    REFERENCES `magicsoft`.`servicios` (`idServicio`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `magicsoft`.`ventas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `magicsoft`.`ventas` (
  `idVenta` INT NOT NULL AUTO_INCREMENT,
  `precio` FLOAT NOT NULL,
  `fechas` VARCHAR(10) NOT NULL,
  `cotizaciones_idCotizacion` INT NOT NULL,
  PRIMARY KEY (`idVenta`, `cotizaciones_idCotizacion`),
  INDEX `fk_ventas_cotizaciones_idx` (`cotizaciones_idCotizacion` ASC) ,
    FOREIGN KEY (`cotizaciones_idCotizacion`)
    REFERENCES `magicsoft`.`cotizaciones` (`idCotizacion`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
