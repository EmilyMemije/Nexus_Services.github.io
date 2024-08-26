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
-- Table `mydb`.`Proveedores`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Proveedores` (
  `idProveedores` INT NOT NULL AUTO_INCREMENT,
  `Especialidad` VARCHAR(45) NOT NULL,
  `Escuela_de_egreso` VARCHAR(45) NOT NULL,
  `No_de_cédula` SMALLINT(15) NOT NULL,
  `Nombre` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idProveedores`))
ENGINE = InnoDB;

INSERT INTO `Proveedores`(`Nombre`,`Especialidad`,`Escuela_de_egreso`,`No_de_cédula`)
VALUES 
('Eduardo López Gatell', 'Médico Cardiólogo', 'Universidad Nacional Autónoma de México', 1987655),
('Juan Arredondo', 'Veterinario', 'UAM', 12345678),
('Nayeli Palafox Hernandez','Ginecologia','Tec de Monterrey',64684553),
('Mario Molina', 'Médico Endocrinólogo', 'Universidad Nacional Autónoma de México', 30801234),
('Luis Miguel Hernández', 'Psicólogo', 'Universidad de Guadalajara', 214146434),
('Carlos Cuenca Lopez', 'Médico Veterinario', 'Universidad Nacional Autónoma de México', 30201011),
('Jaime Luna Garcia', 'Medico General', 'Universidad Autonoma de Mexico', 199712456),
('Miriam Carrillo', 'Veterinario', 'Universidad Nacional Autónoma de México', 5151423349),
('Liliana Gonzáles', 'Psicología', 'Universidad Nacional Autónoma de México', 0151473964),
('Constantino Mendieta Zavala', 'Fisioterapeuta',  'Universidad Nacional Autónoma de México', 59631432);

-- -----------------------------------------------------
-- Table `mydb`.`Cliente`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Cliente` (
  `idCliente` INT NOT NULL AUTO_INCREMENT,
  `Edad` INT NOT NULL,
  `Nombre` VARCHAR(45) NOT NULL,
  `Altura` FLOAT NOT NULL,
  `Peso` FLOAT NOT NULL,
  `TipoSangre` VARCHAR(5) NOT NULL,
  `Alergias` VARCHAR(15) NOT NULL,
  PRIMARY KEY (`idCliente`))
ENGINE = InnoDB;

INSERT INTO `Cliente` (`Edad`, `Nombre`,`Altura`,`Peso`,`TipoSangre`,`Alergias`)
VALUES
(25, 'David Hernández' ,1.85, 60, 'O+','No'),
(27, 'Alexis García',1.75,83,'B+','No'),
(28,'Christopher Rodriguez Silva',1.65,80,'O+','No'),
(27, 'Roberto Venegas', 1.77, 78, 'O+', 'No'),
(32, 'Oscar Hernández',1.65,63,'O+','Trimetropring'),
(25, 'Josué Hernández',1.72,52,'O+','No'),
(28, 'Jorge Licea' ,1.86, 111, 'A+','No'),
(25, 'Cesar Hernández', 1.70, 60, 'O-', 'No'),
(25, 'Lizbeth Zarazua',1.70,69,'A+','No'),
(25, 'Emily Memije' ,1.63,63,'O+','No');


-- -----------------------------------------------------
-- Table `mydb`.`Usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Usuarios` (
  `idUsuarios` INT NOT NULL AUTO_INCREMENT,
  `Email` VARCHAR(45) NOT NULL, 
  `Nombre` VARCHAR(45) NOT NULL,
  `Contraseña` VARCHAR(20) NOT NULL,
  `Proveedores_idProveedores` INT NOT NULL,
  `Cliente_idCliente` INT NOT NULL,
  `Dirección` VARCHAR(45) NOT NULL,
  `Teléfono` SMALLINT(10) NOT NULL,
  PRIMARY KEY (`idUsuarios`),
  INDEX `fk_Usuarios_Proveedores_idx` (`Proveedores_idProveedores` ASC),
  INDEX `fk_Usuarios_Cliente1_idx` (`Cliente_idCliente` ASC),
  CONSTRAINT `fk_Usuarios_Proveedores`
    FOREIGN KEY (`Proveedores_idProveedores`)
    REFERENCES `mydb`.`Proveedores` (`idProveedores`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Usuarios_Cliente1`
    FOREIGN KEY (`Cliente_idCliente`)
    REFERENCES `mydb`.`Cliente` (`idCliente`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

INSERT INTO `Usuarios` (`Email`, `Nombre`, `Contraseña`, `Dirección`,`Teléfono`)
VALUES
('edgat@gmail.com', 'Eduardo López Gatell','EdGLL89#', 'Benito Juárez', 5567859033),
('jarredondo@gmail.com', 'Juan Arredondo', 'ja123456789', 'Coyoacan', 5566224488),
('nayepal@gmail.com','Nayeli Palafox Hernandez','Nay78le3','Monterrey 815, MH',5564684553),
('mariom@gmail,com','Mario Molina', 'Benito Juárez CDMX', 5501312411),
('luismi98@gmail.com','Luis Miguel Hernández', 'Guadalajara 4781', 5214146434),
('carcu_z@gmail.com','Carlos Cuenca Lopez', 'Coyoacan', 5530201011),
('Drluna463@gmail.com', 'Jaime Luna Garcia', '2123LUNAR+', 'andador 18, No 45 Benito Juárez, CDMX', 5567098790),
('Rainbow65@gmail.com','Carla Elvira Valencia','789654123','Alvaro Obregon, CDMX',8877996611),
('Liliana.G08@gmail.com', 'Liliana Gonzáles', 'L1l1an@586', 'Benito Juarez, CDMX', 0151473964),
('Fisioconmeza@gmail.com', 'Constantino Mendieta', 'rompehuesos', 'Benito Juárez 118, Col Progresista Iztapalapa, CDMX ',5523859632),
('davidarielhdez@gmail.com', 'David Hdez', '123456789', 'Tláhuac, CDMX', 5616095865),
('alexix2397@gmail.com', 'Alexis Garcia', '123456789', 'Jose Vicente Villada 101 Toluca', 'México',7228018339),
('crismetal01@hotmail.com','Christopher Rodriguez Silva','123456789','Cuahutemoc, CDMX',5569781345),
('bobert@gmail.com', 'Roberto Venegas', '3132381845*', 'Calle5 no 50 Xochimilco',5556751845),
('oscarhc.3080@gmail.con', 'Oscar Hernández', 'Contraseñaxd', 'Coyoacán CDMX',5512345678),
('josher@gmail.com', 'Josué Hernandez','contraseña8900','Iztapalapa','5573948712'),
('jorge.li@gmail.com', 'Jorge Licea', '12456789aA/', 'GAM, CDMX', 5540444508),
('cesar_cholo666@gmail.com', 'Cesar Hernández', 'Elmasfinodelbarrio666', 'Chapultepec, CDMX', 3330384021),
('liz.zaraz@gmail.com', 'Lizbeth Zarazua', 'Pinkytamo0912@*', '2da cda de tlaquexpa 16, Tlalpan, CDMX', 5611396557),
('em.memije@gmail.com', 'Emily Memije' ,'EmilyM1234','Niños Héroes 28, Benito Juárez', 5548647377);

-- -----------------------------------------------------
-- Table `mydb`.`Facturacion`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Facturacion` (
  `idCompra` INT NOT NULL,
  `Nombre` VARCHAR(45) NOT NULL,
  `Total` INT NOT NULL,
  `Fecha` DATETIME(20) NOT NULL,
  `Cliente_idCliente` INT NOT NULL,
  `NombreProveedor` VARCHAR(45) NOT NULL,
  `Facturacion` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idCompra`),
  INDEX `fk_Compra_Cliente1_idx` (`Cliente_idCliente` ASC),
  CONSTRAINT `fk_Compra_Cliente1`
    FOREIGN KEY (`Cliente_idCliente`)
    REFERENCES `mydb`.`Cliente` (`idCliente`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

INSERT INTO `Facturacion` (`Nombre`, `Total`,`Fecha`,`NombreProveedor`,`Facturacion`)
VALUES
('Christopher Rodriguez Silva',500,'17/05/2024','Liliana Gonzáles','si'),
('Oscar Hernández', 1000,'23/08/2024','Mario Molina','no'),
('Jorge Licea', 45218,25/01/2024,'Juan Arredondo','si'),
('Emily Memije', 12354,30/06/2024,'Nayeli Palafox Hernandez','no'),
('Lizbeth Zarzua', 235,27/01/2024,'Carlos Cuenca Lopez','no'),
('Alexis Garcia', 12545,13/02/2024,'Liliana Gonzáles','no'),
('Roberto Venegas', 12354,18/03/2024,'Luis Miguel Hernández','si'),
('David Hernández', 3654,22/04/2024,'Liliana Gonzáles','si'),
('Josué Hernández', 8956,29/05/2024,'Luis Miguel Hernández','no'),
('Oscar Hernández', 132,09/06/2024,'Mario Molina','no'),
('Christopher Rodriguez Silva', 700,05/07/2024,'Luis Miguel Hernández','si');
-- -----------------------------------------------------
-- Table `mydb`.`Servicios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Servicios` (
  `idServicios` INT NOT NULL AUTO_INCREMENT,
  `Nombre_Servicio` VARCHAR(45) NOT NULL, 
  `Descripción` VARCHAR(45) NOT NULL,
  `Precio` SMALLINT(5) NOT NULL,
  `Proveedores_idProveedores` INT NOT NULL,
  `TipoDeConsulta` VARCHAR(45) NOT NULL,
  `Compra_idCompra` INT NOT NULL,
  `Compra_Cliente_idCliente` INT NOT NULL,
  PRIMARY KEY (`idServicios`, `Proveedores_idProveedores`, `Compra_idCompra`, `Compra_Cliente_idCliente`),
  INDEX `fk_Servicios_Proveedores1_idx` (`Proveedores_idProveedores` ASC),
  INDEX `fk_Servicios_Compra1_idx` (`Compra_idCompra` ASC, `Compra_Cliente_idCliente` ASC),
  CONSTRAINT `fk_Servicios_Proveedores1`
    FOREIGN KEY (`Proveedores_idProveedores`)
    REFERENCES `mydb`.`Proveedores` (`idProveedores`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Servicios_Compra1`
    FOREIGN KEY (`Compra_idCompra` , `Compra_Cliente_idCliente`)
    REFERENCES `mydb`.`Facturacion` (`idCompra` , `Cliente_idCliente`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

INSERT INTO `Servicios` (`Nombre_Servicio`, `Descripción`, `Precio`,`TipoDeConsulta`)
VALUES
('Terapia de pareja','Se da soporte a las parejas con problemas de ira',800,'Presencial'),
('Consulta general', 'apoyo', 175,'presencial'),
('Endocrinólogo', 'apoyo', 175,'presencial'),
('veterinaria', 'apoyo', 175,'presencial'),
('Consulta psicologica', 'apoyo', 175,'presencial'),
('Apoyo emocional', 'apoyo', 175,'presencial'),
('Apoyo Emocional', 'apoyo', 175,'presencial'),
('Consulta general', 'apoyo', 175,'presencial'),
('Consulta general', 'apoyo', 175,'presencial'),
('Consulta psicologica', 'apoyo', 175,'presencial'),
('Servicio de Consulta general', 'Se diagnostico una inflamación abdominal caudada por retención de líquidos, se recetaron antinflamatorios y antiestaminicos.', 25909, 'Presencial'),
('Servicio de Psiquiatría', 'Se receta medicamento para relajar el estrés y ansiedad.', 2589, 'Presencial'),
('Consulta psicologica', 'apoyo', 175,'presencial');

-- -----------------------------------------------------
-- Table `mydb`.`Reseñas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Reseñas` (
  `idReseñas` INT NOT NULL AUTO_INCREMENT,
  `Estrellas` SMALLINT(5) NOT NULL,
  `Descripción` VARCHAR(45) NOT NULL,
  `Cliente_idCliente` INT NOT NULL,
  PRIMARY KEY (`idReseñas`),
  INDEX `fk_Reseñas_Cliente1_idx` (`Cliente_idCliente` ASC),
  CONSTRAINT `fk_Reseñas_Cliente1`
    FOREIGN KEY (`Cliente_idCliente`)
    REFERENCES `mydb`.`Cliente` (`idCliente`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

INSERT INTO `Reseñas` (`Estrellas`,`Descripción`)
VALUES
(5,'Muy buen servicio me senti muy comoda'),
(5,'Terapia muy funcional y la psicóloga muy profesional, la recomiendo'),
(2,'Muy impuntual, no sentí que solucionara el problema que tenía, solo me recetó el medicamento y se fue'),
(4,'Muy buen servicio, lo volvería a contratar'),
(4, 'Buena atención en general, aunque tuve que esperar más de lo previsto.'),
(5, 'El doctor fue muy atento y profesional, me dio confianza desde el principio.'),
(3, 'El servicio fue regular, cumplió con lo básico pero nada extraordinario.'),
(2, 'No me gustó la actitud del doctor, parecía tener prisa por terminar.'),
(3.5, 'El doctor fue un poco agresivo en su consulta'),
(4, 'El doctor siempre actuó de forma profesional y fue tan amable que nos quiso cantar una canción');
-- -----------------------------------------------------
-- Table `mydb`.`MetodoPago`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`MetodoPago` (
  `idMetodoPago` INT NOT NULL,
  `Tarjeta` BIT(1) NOT NULL,
  `Transferencia` BIT(1) NOT NULL,
  `Deposito` BIT(1) NOT NULL,
  `Facturacion_idCompra` INT NOT NULL,
  PRIMARY KEY (`idMetodoPago`, `Facturacion_idCompra`),
  INDEX `fk_MetodoPago_Facturacion1_idx` (`Facturacion_idCompra` ASC),
  CONSTRAINT `fk_MetodoPago_Facturacion1`
    FOREIGN KEY (`Facturacion_idCompra`)
    REFERENCES `mydb`.`Facturacion` (`idCompra`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

INSERT INTO `MetodoPago` (`Tarjeta`, `Transferencia`, `Deposito`)
VALUES
(0, 0, 1),
(0, 1, 0),
(1, 0, 0),
(0, 1, 0),
(0, 0, 1);

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
