USE mydb;

INSERT INTO administradores (idUsuarios,Nombre,Email,Telefono,Contraseña) 
VALUES(1,'Karen Valenzuela','karen.tupatrona@gmail.com', '3311756441', 'corazonValiente@123');  
INSERT INTO administradores (idUsuarios,Nombre,Email,Telefono,Contraseña) 
VALUES(2,'Sandra Meraz','todosOdiamosAsandra@gmail.com', '6181066180', 'laRompecorazones69@');  
INSERT INTO administradores (idUsuarios,Nombre,Email,Telefono,Contraseña) 
VALUES(3,'Angela Vera','nosoyVelaEntiende@gmail.com', '8712618563', 'quieroDormir@12');
INSERT INTO administradores (idUsuarios,Nombre,Email,Telefono,Contraseña) 
VALUES(4,'Fabiola Valdes','lacomeTacos@gmail.com', '3339503490', 'taquitos4Ever@');   
INSERT INTO administradores (idUsuarios,Nombre,Email,Telefono,Contraseña) 
VALUES(5,'Ingrid Romero','IngridPiojosa@gmail.com','5531024561', 'Piojos123@');  
INSERT INTO administradores (idUsuarios,Nombre,Email,Telefono,Contraseña) 
VALUES(6,'Jazmin Rodriguez','jazzz_conejito@gmail.com','5548142468', 'conejitos4Ever@'); 
INSERT INTO administradores (idUsuarios,Nombre,Email,Telefono,Contraseña) 
VALUES(7,'Carolina Ayala','noMellamoCONSUELO@gmail.com', '8662075674', 'Nosoyconsuelo@');  
INSERT INTO administradores (idUsuarios,Nombre,Email,Telefono,Contraseña) 
VALUES(8,'Ana Sanchez','todosMeaman@gmail.com', '8332954201', 'todosMeaman123@');  
select * FROM mydb.administradores;


INSERT INTO servicios (idServicios,Nombre,Descripcion,Imagen,Usuarios_idUsuarios) 
VALUES(6,'Distribución de equipo de cómputo', 'Equipo de cómputo centralizado y descentralizado. 
Infraestructura de redes y accesorios periféricos.', 
'https://www.tribuna.com.mx/u/fotografias/m/2020/2/25/f850x638-99783_177272_5050.jpg','5'); 
  INSERT INTO servicios (idServicios,Nombre,Descripcion,Imagen,Usuarios_idUsuarios) 
VALUES(7,'Distribución de licencias de software y servicios en la nube', 'Integramos nuestras soluciones con licencias de sistema operativo nivel enterprise (Windows, RHEL). 
Software de diseño gráfico, arquitectónico y de ingeniería (Autodesk, Adobe).', 'https://www.comoves.unam.mx/storage/revista/298/memes-ideas-que-se-contagian.jpg', '4'); 
  INSERT INTO servicios (idServicios,Nombre,Descripcion,Imagen,Usuarios_idUsuarios) 
  VALUES(8,'Servicios administrativos', 'Administramos y mantenemos tu red, almacenamiento de datos,seguridad informática, gestión de base de datos y soporte técnico."', 
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHhAsKnVXFrf4IvP5ATV-NNEn63PMFX3rfFK70ffFMe-G0_NB849qgJs-FpjUroEiKsr0&usqp=CAU','6'); 
 INSERT INTO servicios (idServicios,Nombre,Descripcion,Imagen,Usuarios_idUsuarios) 
  VALUES(9,'Implementación de Software de Caja', 'Adaptamos software de tipo ERP y CRM a las necesidades de ttu empresa.', 
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSCTu5bVe4n5Qbwes2M7bCgWt2IjMx_zKCYg&usqp=CAU','7'); 
 INSERT INTO servicios (idServicios,Nombre,Descripcion,Imagen,Usuarios_idUsuarios) 
  VALUES(10,'Servicios Administrativos de la OnSite', 'Junto con los servicios en la nube, le proveemos del servicio de administración de esta desde su empresa.', 
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSCTu5bVe4n5Qbwes2M7bCgWt2IjMx_zKCYg&usqp=CAU', '8');
select * FROM mydb.servicios;



INSERT INTO cotizaciones (idCotizaciones,Nombre,Email,Telefono,Empresa,Mensaje) 
  VALUES(2,'Verónica Castro', 'Ver@mail.com', '2356987412','Vero sa de cv','Quiero unos servicios en la nube');
INSERT INTO cotizaciones (idCotizaciones,Nombre,Email,Telefono,Empresa,Mensaje) 
  VALUES(3,'Amalia Quinteros', 'Amalia@mail.com', '6598742355','Amalia sa de cv','Equipo de cómputo centralizado y descentralizado');
INSERT INTO cotizaciones (idCotizaciones,Nombre,Email,Telefono,Empresa,Mensaje) 
  VALUES(4,'Luis Miguel', 'Luis@mail.com', '6658974451','Luis sa de cv','Distribución de licencias de software');
INSERT INTO cotizaciones (idCotizaciones,Nombre,Email,Telefono,Empresa,Mensaje) 
  VALUES(5,'Amanda Miguel', 'Amanda@mail.com', '6598256633','Amanda sa de cv','Servicios administrativos');
INSERT INTO cotizaciones (idCotizaciones,Nombre,Email,Telefono,Empresa,Mensaje) 
  VALUES(6,'Benito Juárez', 'Benito@mail.com', '6699856655','Benito sa de cv','Implementación de Software de Caja');
INSERT INTO cotizaciones (idCotizaciones,Nombre,Email,Telefono,Empresa,Mensaje) 
  VALUES(7,'Verónica Castro', 'Ver@mail.com', '2356987412','Vero sa de cv','Servicios Administrativos de la OnSite'); 
  SELECT * FROM mydb.cotizaciones;
  
  
INSERT INTO cotizaciones_has_servicios(Cotizaciones_idCotizaciones,Servicios_idServicios,Servicios_Usuarios_idUsuarios)
VALUES(3,2,4);
INSERT INTO cotizaciones_has_servicios(Cotizaciones_idCotizaciones,Servicios_idServicios,Servicios_Usuarios_idUsuarios)
VALUES(2,1,5);
INSERT INTO cotizaciones_has_servicios(Cotizaciones_idCotizaciones,Servicios_idServicios,Servicios_Usuarios_idUsuarios)
VALUES(4,3,6);
INSERT INTO cotizaciones_has_servicios(Cotizaciones_idCotizaciones,Servicios_idServicios,Servicios_Usuarios_idUsuarios)
VALUES(5,4,7);
INSERT INTO cotizaciones_has_servicios(Cotizaciones_idCotizaciones,Servicios_idServicios,Servicios_Usuarios_idUsuarios)
VALUES(6,5,8);
INSERT INTO cotizaciones_has_servicios(Cotizaciones_idCotizaciones,Servicios_idServicios,Servicios_Usuarios_idUsuarios)
VALUES(7,10,8);
select * FROM mydb.cotizaciones_has_servicios;


INSERT INTO ventas(idCompras,Precio,Fechas,Cotizaciones_has_Servicios_Cotizaciones_idCotizaciones,Cotizaciones_has_Servicios_Servicios_idServicios,Cotizaciones_has_Servicios_Servicios_Usuarios_idUsuarios) 
VALUES(4,'132','12/10/23',3,2,4);
INSERT INTO ventas(idCompras,Precio,Fechas,Cotizaciones_has_Servicios_Cotizaciones_idCotizaciones,Cotizaciones_has_Servicios_Servicios_idServicios,Cotizaciones_has_Servicios_Servicios_Usuarios_idUsuarios) 
VALUES(5,'132','12/10/23',2,1,5);
INSERT INTO ventas(idCompras,Precio,Fechas,Cotizaciones_has_Servicios_Cotizaciones_idCotizaciones,Cotizaciones_has_Servicios_Servicios_idServicios,Cotizaciones_has_Servicios_Servicios_Usuarios_idUsuarios) 
VALUES(6,'132','12/10/23',4,3,6);
INSERT INTO ventas(idCompras,Precio,Fechas,Cotizaciones_has_Servicios_Cotizaciones_idCotizaciones,Cotizaciones_has_Servicios_Servicios_idServicios,Cotizaciones_has_Servicios_Servicios_Usuarios_idUsuarios) 
VALUES(7,'132','12/10/23',5,4,7);
INSERT INTO ventas(idCompras,Precio,Fechas,Cotizaciones_has_Servicios_Cotizaciones_idCotizaciones,Cotizaciones_has_Servicios_Servicios_idServicios,Cotizaciones_has_Servicios_Servicios_Usuarios_idUsuarios) 
VALUES(8,'132','12/10/23',6,5,8);
INSERT INTO ventas(idCompras,Precio,Fechas,Cotizaciones_has_Servicios_Cotizaciones_idCotizaciones,Cotizaciones_has_Servicios_Servicios_idServicios,Cotizaciones_has_Servicios_Servicios_Usuarios_idUsuarios) 
VALUES(9,'132','12/10/23',7,10,8);
SELECT * FROM mydb.ventas;