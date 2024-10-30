-- Eliminar y crear la base de datos
DROP DATABASE IF EXISTS servicios;
CREATE DATABASE servicios;

USE servicios;

-- Eliminar tablas si existen
DROP TABLE IF EXISTS pagos;
DROP TABLE IF EXISTS solicitudes_servicio;
DROP TABLE IF EXISTS clientes;
DROP TABLE IF EXISTS mensajes;
DROP TABLE IF EXISTS chats;
DROP TABLE IF EXISTS usuarios;
DROP TABLE IF EXISTS proveedores;
DROP TABLE IF EXISTS ofertas_servicios;
DROP TABLE IF EXISTS agenda;
DROP TABLE IF EXISTS resenas;
DROP TABLE IF EXISTS documentos;
DROP TABLE IF EXISTS notificaciones;
DROP TABLE IF EXISTS mensajes_usuarios;

-- Crear tabla de usuarios
CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255),
    fecha_nacimiento DATE,
    tipo_documento VARCHAR(255),
    numero_documento VARCHAR(255),
    correo VARCHAR(255),
    contrasena VARCHAR(255),
    descripcion_perfil VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL
);

-- Crear tabla de clientes
CREATE TABLE clientes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL,
    CONSTRAINT fk_clientes_usuario_id FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

-- Crear tabla de proveedores
CREATE TABLE proveedores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT,
    habilidades VARCHAR(255),
    experiencia_laboral VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL,
    CONSTRAINT fk_proveedores_usuario_id FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

-- Crear tabla de pagos
CREATE TABLE pagos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cliente_id INT,
    proveedor_id INT,
    monto DECIMAL(10, 2),
    fecha_pago DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL,
    CONSTRAINT fk_pagos_cliente_id FOREIGN KEY (cliente_id) REFERENCES clientes(id),
    CONSTRAINT fk_pagos_proveedor_id FOREIGN KEY (proveedor_id) REFERENCES proveedores(id)
);

-- Crear tabla de solicitudes_servicio
CREATE TABLE solicitudes_servicio (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cliente_id INT,
    descripcion VARCHAR(255),
    categoria VARCHAR(255),
    tareas VARCHAR(255),
    precio_ofrecido DECIMAL(10, 2),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL,
    CONSTRAINT fk_solicitudes_servicio_cliente_id FOREIGN KEY (cliente_id) REFERENCES clientes(id)
);

-- Crear tabla de chats
CREATE TABLE chats (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL,
    CONSTRAINT fk_chats_usuario_id FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

-- Crear tabla de mensajes
CREATE TABLE mensajes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    chat_id INT,
    usuario_id INT,
    contenido VARCHAR(255),
    marca_tiempo DATETIME,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL,
    CONSTRAINT fk_mensajes_chat_id FOREIGN KEY (chat_id) REFERENCES chats(id),
    CONSTRAINT fk_mensajes_usuario_id FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

-- Crear tabla de ofertas_servicios
CREATE TABLE ofertas_servicios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    proveedor_id INT,
    descripcion VARCHAR(255),
    modalidad VARCHAR(255),
    ubicacion VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL,
    CONSTRAINT fk_ofertas_servicios_proveedor_id FOREIGN KEY (proveedor_id) REFERENCES proveedores(id)
);

-- Crear tabla de agenda
CREATE TABLE agenda (
    id INT AUTO_INCREMENT PRIMARY KEY,
    solicitud_servicio_id INT,
    proveedor_id INT,
    cliente_id INT,
    hora_inicio DATETIME,
    hora_fin DATETIME,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL,
    CONSTRAINT fk_agenda_solicitud_servicio_id FOREIGN KEY (solicitud_servicio_id) REFERENCES solicitudes_servicio(id),
    CONSTRAINT fk_agenda_proveedor_id FOREIGN KEY (proveedor_id) REFERENCES proveedores(id),
    CONSTRAINT fk_agenda_cliente_id FOREIGN KEY (cliente_id) REFERENCES clientes(id)
);

-- Crear tabla de resenas
CREATE TABLE resenas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT,
    calificacion DECIMAL(2, 1),
    comentario VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL,
    CONSTRAINT fk_resenas_usuario_id FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

-- Crear tabla de documentos
CREATE TABLE documentos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT,
    tipo_documento VARCHAR(255),
    ruta_archivo VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL,
    CONSTRAINT fk_documentos_usuario_id FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

-- Crear tabla de notificaciones
CREATE TABLE notificaciones (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT,
    contenido VARCHAR(255),
    marca_tiempo DATETIME,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL,
    CONSTRAINT fk_notificaciones_usuario_id FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

-- Crear tabla de mensajes_usuarios
CREATE TABLE mensajes_usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    mensaje_id INT,
    emisor_id INT,
    receptor_id INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL,
    CONSTRAINT fk_mensajes_usuarios_mensaje_id FOREIGN KEY (mensaje_id) REFERENCES mensajes(id),
    CONSTRAINT fk_mensajes_usuarios_emisor_id FOREIGN KEY (emisor_id) REFERENCES usuarios(id),
    CONSTRAINT fk_mensajes_usuarios_receptor_id FOREIGN KEY (receptor_id) REFERENCES usuarios(id)
);

-- Insertar datos en la tabla usuarios
INSERT INTO usuarios (nombre, fecha_nacimiento, tipo_documento, numero_documento, correo, contrasena, descripcion_perfil, created_at, updated_at) VALUES
('Juan Perez', '1990-01-01', 'DNI', '12345678', 'juan.perez@example.com', 'contraseña', 'Electricista', NOW(), NOW()),
('Maria Gomez', '1985-05-10', 'DNI', '87654321', 'maria.gomez@example.com', 'contraseña', 'Jardinera', NOW(), NOW());

-- Insertar datos en la tabla clientes
INSERT INTO clientes (usuario_id, created_at, updated_at, deleted_at) VALUES
(1, NOW(), NOW(), NULL),
(2, NOW(), NOW(), NULL);

-- Insertar datos en la tabla proveedores
INSERT INTO proveedores (usuario_id, habilidades, experiencia_laboral, created_at, updated_at, deleted_at) VALUES
(1, 'Electricidad, Fontanería', '5 años', NOW(), NOW(), NULL),
(2, 'Jardinería, Limpieza', '3 años', NOW(), NOW(), NULL);

-- Insertar datos en la tabla pagos
INSERT INTO pagos (cliente_id, proveedor_id, monto, fecha_pago, created_at, updated_at, deleted_at) VALUES
(1, 1, 150.00, '2024-10-01', NOW(), NOW(), NULL),
(2, 2, 200.00, '2024-10-02', NOW(), NOW(), NULL);

-- Insertar datos en la tabla solicitudes_servicio
INSERT INTO solicitudes_servicio (cliente_id, descripcion, categoria, tareas, precio_ofrecido, created_at, updated_at, deleted_at) VALUES
(1, 'Reparación de electricidad', 'Reparaciones', 'Revisar el sistema eléctrico', 100.00, NOW(), NOW(), NULL),
(2, 'Limpieza de jardín', 'Jardinería', 'Corte de césped y poda', 80.00, NOW(), NOW(), NULL);

-- Insertar datos en la tabla chats
INSERT INTO chats (usuario_id, created_at, updated_at, deleted_at) VALUES
(1, NOW(), NOW(), NULL),
(2, NOW(), NOW(), NULL);

-- Insertar datos en la tabla mensajes
INSERT INTO mensajes (chat_id, usuario_id, contenido, marca_tiempo, created_at, updated_at, deleted_at) VALUES
(1, 1, 'Hola, necesito ayuda con la electricidad.', NOW(), NOW(), NOW(), NULL),
(1, 2, 'Claro, ¿cuál es el problema?', NOW(), NOW(), NOW(), NULL);

-- Insertar datos en la tabla ofertas_servicios
INSERT INTO ofertas_servicios (proveedor_id, descripcion, modalidad, ubicacion, created_at, updated_at, deleted_at) VALUES
(1, 'Servicio de reparación eléctrica', 'Presencial', 'Ciudad A', NOW(), NOW(), NULL),
(2, 'Mantenimiento de jardines', 'Presencial', 'Ciudad B', NOW(), NOW(), NULL);

-- Insertar datos en la tabla agenda
INSERT INTO agenda (solicitud_servicio_id, proveedor_id, cliente_id, hora_inicio, hora_fin, created_at, updated_at, deleted_at) VALUES
(1, 1, 1, '2024-10-15 09:00:00', '2024-10-15 12:00:00', NOW(), NOW(), NULL),
(2, 2, 2, '2024-10-16 14:00:00', '2024-10-16 17:00:00', NOW(), NOW(), NULL);

-- Insertar datos en la tabla resenas
INSERT INTO resenas (usuario_id, calificacion, comentario, created_at, updated_at, deleted_at) VALUES
(1, 4.5, 'Buen servicio de electricidad.', NOW(), NOW(), NULL),
(2, 4.8, 'Excelente trabajo en el jardín.', NOW(), NOW(), NULL);

-- Insertar datos en la tabla documentos
INSERT INTO documentos (usuario_id, tipo_documento, ruta_archivo, created_at, updated_at, deleted_at) VALUES
(1, 'Certificado', '/docs/certificado_juan.pdf', NOW(), NOW(), NULL),
(2, 'Certificado', '/docs/certificado_maria.pdf', NOW(), NOW(), NULL);

-- Insertar datos en la tabla notificaciones
INSERT INTO notificaciones (usuario_id, contenido, marca_tiempo, created_at, updated_at, deleted_at) VALUES
(1, 'Tienes una nueva solicitud de servicio.', NOW(), NOW(), NOW(), NULL),
(2, 'Tienes un nuevo pago recibido.', NOW(), NOW(), NOW(), NULL);

-- Insertar datos en la tabla mensajes_usuarios
INSERT INTO mensajes_usuarios (mensaje_id, emisor_id, receptor_id, created_at, updated_at, deleted_at) VALUES
(1, 1, 2, NOW(), NOW(), NULL),
(2, 2, 1, NOW(), NOW(), NULL);