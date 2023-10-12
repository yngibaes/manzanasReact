
USE manzanasCuidado;
CREATE TABLE Establecimiento(
    id_establecimiento INT AUTO_INCREMENT PRIMARY KEY,
    nom_establecimiento VARCHAR(30),
    admin_establecimiento VARCHAR(30),
    dir_establecimiento VARCHAR(50),
    fk_servicios INT(11)
);
CREATE TABLE Manzanas(
    id_manzanas INT AUTO_INCREMENT PRIMARY KEY,
    nom_manzanas VARCHAR(30),
    locali_manzanas VARCHAR(30),
    dir_manzanas VARCHAR(50),
    fk_municipios INT(11)
);
CREATE TABLE Mujeres(
    idDoc_mujer BIGINT(19) PRIMARY KEY,
    tpDoc_mujer VARCHAR(30),
    nom_mujer VARCHAR(30),
    apell_mujer VARCHAR(30),
    tel_mujer VARCHAR(20),
    email_mujer VARCHAR(50),
    passw_mujer VARCHAR(40),
    ciu_mujer VARCHAR(20),
    dir_mujer VARCHAR(50),
    ocu_mujer VARCHAR(40),
    rol_mujer VARCHAR(30) DEFAULT 'Usuario'
);
CREATE TABLE Manzanas_Servicios(
    fk_manzanas INT(11),
    fk_servicios INT(11)
);
CREATE TABLE Municipios(
    id_municipios INT AUTO_INCREMENT PRIMARY KEY,
    nom_municipios VARCHAR(30)
);
CREATE TABLE Propuesta(
    id_propuesta INT AUTO_INCREMENT PRIMARY KEY,
    man_propuesta VARCHAR(30),
    ser_propuesta VARCHAR(30),
    fecha_propuesta DATE,
    fkDoc_mujer BIGINT(19)
);
CREATE TABLE Servicios(
    id_servicios INT AUTO_INCREMENT PRIMARY KEY,
    nom_servicios VARCHAR(30),
    descri_servicios VARCHAR(100),
    tipo_servicios VARCHAR(50),
    cate_servicios VARCHAR(50)
);
CREATE TABLE Servicios_Mujeres(
    fk_servicios INT(11),
    fkDoc_mujer BIGINT(19)
);
ALTER TABLE Establecimiento ADD constraint fk_servicios FOREIGN KEY (fk_servicios) REFERENCES Servicios (id_servicios);
ALTER TABLE Manzanas ADD constraint fk_municipios FOREIGN KEY (fk_municipios) REFERENCES Municipios (id_municipios);
ALTER TABLE Manzanas_Servicios ADD constraint fk_manzanas FOREIGN KEY (fk_manzanas) REFERENCES Manzanas (id_manzanas);
ALTER TABLE Manzanas_Servicios ADD constraint fk_servicios2 FOREIGN KEY (fk_servicios) REFERENCES Servicios (id_servicios);
ALTER TABLE Propuesta ADD constraint fkDoc_mujer FOREIGN KEY (fkDoc_mujer) REFERENCES Mujeres (idDoc_mujer);
ALTER TABLE Servicios_Mujeres ADD constraint fk_servicios3 FOREIGN KEY (fk_servicios) REFERENCES Servicios (id_servicios);
ALTER TABLE Servicios_Mujeres ADD constraint fkDoc_mujer2 FOREIGN KEY (fkDoc_mujer) REFERENCES Mujeres (idDoc_mujer);
<<<<<<< HEAD
INSERT INTO `mujeres` (`idDoc_mujer`, `tpDoc_mujer`, `nom_mujer`, `apell_mujer`, `tel_mujer`, `email_mujer`, `passw_mujer`, `ciu_mujer`, `dir_mujer`, `ocu_mujer`, `rol_mujer`) VALUES
(1033696505, 'Tarjeta de Identidad', 'Ana', 'Amaya', '3227572108', 'mariasssa21@gmail.com', 'Ana10336.', 'Bogotá', 'Cra 18a #55-63', 'Estudiante', 'Admin'), (1012916341, 'Cedula ciudadana', 'Mateo', 'Arias', '31032539652', 'mateo@gmail.com', 'Mateitopro', 'Bogotá', 'Cra 18a #55-63', 'Estudiante', 'Admin');
=======

INSERT INTO `mujeres` (`idDoc_mujer`, `tpDoc_mujer`, `nom_mujer`, `apell_mujer`, `tel_mujer`, `email_mujer`, `passw_mujer`, `ciu_mujer`, `dir_mujer`, `ocu_mujer`, `rol`) VALUES
(1033696505, 'Tarjeta de Identidad', 'Ana', 'Amaya', '3227572108', 'mariasssa21@gmail.com', 'Ana10336.', 'Bogotá', 'Cra 18a #55-63', 'Estudiante', 'Admin'), (1012, 'Cedula ciudadana', 'Mateo', 'Arias', '31032539652', 'mateo@gmail.com', 'Mateitopro', 'Bogotá', 'Cra 18a #55-63', 'Estudiante', 'Admin');
>>>>>>> b19ec78e69759f1ac9ef833638efe2d59c304050
