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
-- Table `magicsoft`.`Administradores`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `magicsoft`.`administradores` (
  `idAdm` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `telefono` VARCHAR(10) NOT NULL,
  `contraseña` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`idAdm`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `magicsoft`.`Servicios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `magicsoft`.`Servicios` (
  `idServicio` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(100) NOT NULL,
  `descripcion` VARCHAR(300) NOT NULL,
  `imagen` VARCHAR(500) NOT NULL,
  `Administradores_idAdm` INT NOT NULL,
  PRIMARY KEY (`idServicio`, `Administradores_idAdm`),
  INDEX `fk_Servicios_Administradores_idx` (`Administradores_idAdm` ASC) VISIBLE,
  CONSTRAINT `fk_Servicios_Administradores`
    FOREIGN KEY (`administradores_idAdm`)
    REFERENCES `magicsoft`.`administradores` (`idAdm`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `magicsoft`.`Cotizaciones`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `magicsoft`.`cotizaciones` (
  `idCotizacion` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `telefono` VARCHAR(10) NOT NULL,
  `empresa` VARCHAR(45) NOT NULL,
  `mensaje` VARCHAR(300) NOT NULL,
  PRIMARY KEY (`idCotizacion`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `magicsoft`.`Cotizaciones_has_Servicios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `magicsoft`.`cotizaciones_has_servicios` (
  `cotizaciones_idCotizacion` INT NOT NULL,
  `servicios_idServicio` INT NOT NULL,
  `servicios_administradores_idAdm` INT NOT NULL,
  PRIMARY KEY (`cotizaciones_idCotizacion`, `servicios_idServicio`, `servicios_administradores_idAdm`),
  INDEX `fk_cotizaciones_has_servicios_servicios_idx` (`servicios_idServicio` ASC, `servicios_administradores_idAdm` ASC) VISIBLE,
  INDEX `fk_cotizaciones_has_servicios_cotizaciones_idx` (`cotizaciones_idCotizacion` ASC) VISIBLE,
  CONSTRAINT `fk_cotizaciones_has_servicios_cotizaciones`
    FOREIGN KEY (`cotizaciones_idCotizacion`)
    REFERENCES `magicsoft`.`cotizaciones` (`idCotizacion`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_cotizaciones_has_servicios_servicios`
    FOREIGN KEY (`servicios_idServicio` , `servicios_administradores_idAdm`)
    REFERENCES `magicsoft`.`servicios` (`idServicio` , `administradores_idAdm`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `magicsoft`.`Ventas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `magicsoft`.`ventas` (
  `idVenta` INT NOT NULL AUTO_INCREMENT,
  `precio` FLOAT NOT NULL,
  `fechas` VARCHAR(10) NOT NULL,
  `cotizaciones_has_servicios_cotizaciones_idCotizacion` INT NOT NULL,
  `cotizaciones_has_servicios_servicios_idServicio` INT NOT NULL,
  `cotizaciones_has_servicios_servicios_administradores_idAdm` INT NOT NULL,
  PRIMARY KEY (`idVenta`, `cotizaciones_has_servicios_cotizaciones_idCotizacion`, `cotizaciones_has_servicios_servicios_idServicio`, `cotizaciones_has_servicios_servicios_administradores_idAdm`),
  INDEX `fk_ventas_cotizaciones_has_servicios_idx` (`cotizaciones_has_servicios_cotizaciones_idCotizacion` ASC, `cotizaciones_has_servicios_servicios_idServicio` ASC, `cotizaciones_has_servicios_servicios_administradores_idAdm` ASC) VISIBLE,
  CONSTRAINT `fk_ventas_cotizaciones_has_servicios`
    FOREIGN KEY (`cotizaciones_has_servicios_cotizaciones_idCotizacion` , `cotizaciones_has_servicios_servicios_idServicio` , `cotizaciones_has_servicios_servicios_administradores_idAdm`)
    REFERENCES `magicsoft`.`cotizaciones_has_servicios` (`cotizaciones_idCotizacion` , `servicios_idServicio` , `servicios_administradores_idAdm`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
