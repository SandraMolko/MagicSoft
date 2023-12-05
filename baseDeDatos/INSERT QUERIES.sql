USE magicsoft;

INSERT INTO administradores (idAdm,nombre,email,telefono,contrasena) 
	VALUES(1,'Karen Valenzuela','karen.tupatrona@gmail.com', '3311756441', 'corazonValiente@123');  
INSERT INTO administradores (idAdm,nombre,email,telefono,contrasena) 
	VALUES(2,'Sandra Meraz','todosOdiamosAsandra@gmail.com', '6181066180', 'laRompecorazones69@');  
INSERT INTO administradores (idAdm,nombre,email,telefono,contrasena) 
	VALUES(3,'Angela Vera','nosoyVelaEntiende@gmail.com', '8712618563', 'quieroDormir@12');
INSERT INTO administradores (idAdm,nombre,email,telefono,contrasena) 
	VALUES(4,'Fabiola Valdes','lacomeTacos@gmail.com', '3339503490', 'taquitos4Ever@');   
INSERT INTO administradores (idAdm,nombre,email,telefono,contrasena) 
	VALUES(5,'Ingrid Romero','IngridPiojosa@gmail.com','5531024561', 'Piojos123@');  
INSERT INTO administradores (idAdm,nombre,email,telefono,contrasena) 
	VALUES(6,'Jazmin Rodriguez','jazzz_conejito@gmail.com','5548142468', 'conejitos4Ever@'); 
INSERT INTO administradores (idAdm,nombre,email,telefono,contrasena) 
	VALUES(7,'Carolina Ayala','noMellamoCONSUELO@gmail.com', '8662075674', 'Nosoyconsuelo@');  
INSERT INTO administradores (idAdm,nombre,email,telefono,contrasena) 
	VALUES(8,'Ana Sanchez','todosMeaman@gmail.com', '8332954201', 'todosMeaman123@');  
SELECT * FROM magicsoft.administradores;

INSERT INTO servicios (idServicio,nombre,descripcion,imagen,administradores_idAdm) 
	VALUES(1,'Distribución de equipo de cómputo', 'Equipo de cómputo centralizado y descentralizado. Infraestructura de redes y accesorios periféricos.', 
	'https://www.tribuna.com.mx/u/fotografias/m/2020/2/25/f850x638-99783_177272_5050.jpg','1'); 
INSERT INTO servicios (idServicio,nombre,descripcion,imagen,administradores_idAdm) 
	VALUES(2,'Distribución de licencias de software y servicios en la nube', 'Integramos nuestras soluciones con licencias de sistema operativo nivel enterprise (Windows, RHEL). 
	Software de diseño gráfico, arquitectónico y de ingeniería (Autodesk, Adobe).', 'https://www.comoves.unam.mx/storage/revista/298/memes-ideas-que-se-contagian.jpg', '2'); 
INSERT INTO servicios (idServicio,nombre,descripcion,imagen,administradores_idAdm) 
	VALUES(3,'Servicios en la nube', 'Servicios en la nube (Azure, AWS, Google Cloud).', 
	'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHhAsKnVXFrf4IvP5ATV-NNEn63PMFX3rfFK70ffFMe-G0_NB849qgJs-FpjUroEiKsr0&usqp=CAU','3'); 
INSERT INTO servicios (idServicio,nombre,descripcion,imagen,administradores_idAdm) 
	VALUES(4,'Desarrollo de Software a la medida.', 'Utilizamos metodologías ágiles y alcanzamos un alto nivel de madurez de acuerdo con la certificación internacional CMMi DEV5.', 
	'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHhAsKnVXFrf4IvP5ATV-NNEn63PMFX3rfFK70ffFMe-G0_NB849qgJs-FpjUroEiKsr0&usqp=CAU','4'); 
INSERT INTO servicios (idServicio,nombre,descripcion,imagen,administradores_idAdm) 
	VALUES(5,'Servicios finacieros. Arrendamiento', 'Esta es la estrategia ideal para la renovación constante de tu infraestructura de TI y amortizar el costo financiero de la inversión inicial.', 
	'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHhAsKnVXFrf4IvP5ATV-NNEn63PMFX3rfFK70ffFMe-G0_NB849qgJs-FpjUroEiKsr0&usqp=CAU','5'); 
INSERT INTO servicios (idServicio,nombre,descripcion,imagen,administradores_idAdm) 
	VALUES(6,'Servicios administrados', 'Administramos y mantenemos tu red, almacenamiento de datos,seguridad informática, gestión de base de datos y soporte técnico.', 
	'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHhAsKnVXFrf4IvP5ATV-NNEn63PMFX3rfFK70ffFMe-G0_NB849qgJs-FpjUroEiKsr0&usqp=CAU','6'); 
INSERT INTO servicios (idServicio,nombre,descripcion,imagen,administradores_idAdm) 
	VALUES(7,'SLA', 'Ofrecemos acuerdos de nivel de servicio (SLA) que garantizan un alto rendimiento y disponibilidad de los servicios.', 
	'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSCTu5bVe4n5Qbwes2M7bCgWt2IjMx_zKCYg&usqp=CAU','7'); 
INSERT INTO servicios (idServicio,nombre,descripcion,imagen,administradores_idAdm) 
	VALUES(8,'Diseño de Arquitectura de sistemas', 'Nos adaptamos a las necesidades y presupuesto de tu organización para planificar estratégicamente la infraestructura de IT, ya sea para cómputo centralizado o cómputo descentralizado.', 
	'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSCTu5bVe4n5Qbwes2M7bCgWt2IjMx_zKCYg&usqp=CAU','8'); 
INSERT INTO servicios (idServicio,nombre,descripcion,imagen,administradores_idAdm) 
	VALUES(9,'Implementación de Software de Caja', 'Adaptamos software de tipo ERP y CRM a las necesidades de tu empresa.', 
	'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSCTu5bVe4n5Qbwes2M7bCgWt2IjMx_zKCYg&usqp=CAU','1'); 
INSERT INTO servicios (idServicio,nombre,descripcion,imagen,administradores_idAdm) 
	VALUES(10,'Servicios Administrativos de la OnSite', 'Junto con los servicios en la nube, le proveemos del servicio de administración de esta desde su empresa.', 
	'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSCTu5bVe4n5Qbwes2M7bCgWt2IjMx_zKCYg&usqp=CAU', '2');
SELECT * FROM magicsoft.servicios;

INSERT INTO cotizaciones (idCotizacion,nombre,email,telefono,empresa,mensaje,servicios_idServicio) 
  VALUES(1,'Verónica Castro', 'Ver@mail.com', '2356987412','Vero sa de cv','Quiero unos servicios en la nube',3);
INSERT INTO cotizaciones (idCotizacion,nombre,email,telefono,empresa,mensaje,servicios_idServicio) 
  VALUES(2,'Amalia Quinteros', 'Amalia@mail.com', '6598742355','Amalia sa de cv','Equipo de cómputo centralizado y descentralizado',1);
INSERT INTO cotizaciones (idCotizacion,nombre,email,telefono,empresa,mensaje,servicios_idServicio) 
  VALUES(3,'Luis Miguel', 'Luis@mail.com', '6658974451','Luis sa de cv','Distribución de licencias de software',2);
INSERT INTO cotizaciones (idCotizacion,nombre,email,telefono,empresa,mensaje,servicios_idServicio) 
  VALUES(4,'Amanda Miguel', 'Amanda@mail.com', '6598256633','Amanda sa de cv','Servicios administrativos',6);
INSERT INTO cotizaciones (idCotizacion,nombre,email,telefono,empresa,mensaje,servicios_idServicio) 
  VALUES(5,'Benito Juárez', 'Benito@mail.com', '6699856655','Benito sa de cv','Implementación de Software de Caja',9);
INSERT INTO cotizaciones (idCotizacion,nombre,email,telefono,empresa,mensaje,servicios_idServicio) 
  VALUES(6,'Verónica Castro', 'Ver@mail.com', '2356987412','Vero sa de cv','Servicios Administrativos de la OnSite',10); 
SELECT * FROM magicsoft.cotizaciones;

INSERT INTO ventas(idVenta,precio,fechas,cotizaciones_idCotizacion) 
VALUES(1,'120000.00','02/10/23',1);
INSERT INTO ventas(idVenta,precio,fechas,cotizaciones_idCotizacion) 
VALUES(2,'75000.00','12/10/23',2);
INSERT INTO ventas(idVenta,precio,fechas,cotizaciones_idCotizacion) 
VALUES(3,'85000.00','12/10/23',3);
INSERT INTO ventas(idVenta,precio,fechas,cotizaciones_idCotizacion) 
VALUES(4,'59000.99','05/11/23',4);
INSERT INTO ventas(idVenta,precio,fechas,cotizaciones_idCotizacion) 
VALUES(5,'250000.00','06/11/23',5);
INSERT INTO ventas(idVenta,precio,fechas,cotizaciones_idCotizacion) 
VALUES(6,'500000.00','21/11/23',6);
SELECT * FROM magicsoft.ventas;