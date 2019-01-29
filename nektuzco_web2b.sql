-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 29-01-2019 a las 01:47:24
-- Versión del servidor: 5.7.23
-- Versión de PHP: 7.2.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `nektuzco_web2b`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias_negocio`
--

DROP TABLE IF EXISTS `categorias_negocio`;
CREATE TABLE IF NOT EXISTS `categorias_negocio` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Categoria` varchar(100) NOT NULL,
  `Categoria_en` varchar(127) NOT NULL,
  PRIMARY KEY (`Id`),
  KEY `categoria` (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=16 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `categorias_negocio`
--

INSERT INTO `categorias_negocio` (`Id`, `Categoria`, `Categoria_en`) VALUES
(1, 'Arte y Creatividad', 'Arts and creativity'),
(2, 'Automóviles', 'Cars'),
(3, 'Moda y belleza', 'Fashion and Beauty'),
(4, 'Servicios profesionales', 'Professional Services'),
(5, 'Computación', 'Computers and Technology'),
(6, 'Restaurantes y cafeterías', 'Restaurants, coffee shops and food'),
(7, 'Deportes y recreación', 'Sports and recreation'),
(8, 'Hogar', 'Home'),
(9, 'Eventos y banquetes', 'Events and banquets'),
(10, 'Mascotas y veterinarias', 'Pets and pet stores'),
(11, 'Viajes', 'Travel and Leisure'),
(12, 'Salud y bienestar', 'Health and Wellness'),
(13, 'Comercios', 'Shops, stores, grocery store'),
(14, 'Bienes raíces', 'Real State'),
(15, 'Otra', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `info_paginas`
--

DROP TABLE IF EXISTS `info_paginas`;
CREATE TABLE IF NOT EXISTS `info_paginas` (
  `IdUsuario` varchar(13) NOT NULL,
  `info` text NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`),
  KEY `IdUsuario` (`IdUsuario`)
) ENGINE=MyISAM AUTO_INCREMENT=49 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `info_paginas`
--

INSERT INTO `info_paginas` (`IdUsuario`, `info`, `id`) VALUES
('5b6d90f875a4e', '{\"respuestas\":{\"9\":{\"tipo\":3,\"respuesta\":\"Mi slogan favorito\",\"localizacion_en\":\"\"},\"21\":{\"tipo\":5,\"respuesta\":\"Que se enteren de mis novedades\",\"localizacion_en\":\"\"},\"22\":{\"tipo\":6,\"respuesta\":\"Desarrollo de software\",\"localizacion_en\":\"\"}},\"selections\":{\"templateTypeId\":{\"type\":\"config\",\"value\":\"001\"},\"palette\":{\"name\":\"palette\",\"type\":\"id\",\"value\":\"0\"},\"siteName\":{\"type\":\"text\",\"text\":\"sitio2\"},\"inp-content-name\":{},\"inp-content-slogan\":{\"type\":\"text\",\"text\":\"Mi slogan favorito\"},\"inp-content-title-aboutus\":{},\"inp-content-aboutus\":{},\"inp-content-title-cta\":{},\"inp-content-cta\":{},\"inp-content-title-item-1\":{},\"inp-content-item-1\":{},\"inp-content-item-add-y\":{\"type\":\"text\",\"text\":\"y\"},\"inp-content-item-add-n\":{\"type\":\"text\",\"text\":\"n\"},\"inp-contact-email\":{},\"inp-contact-phone\":{},\"inp-contact-address\":{},\"inp-contact-schedule\":{},\"inp-contact-facebook\":{},\"inp-contact-twitter\":{}}}', 47),
('5b6d90f875a4e', '{\"respuestas\":{\"10\":{\"tipo\":3,\"respuesta\":\"Somos la mejor empresa de software\",\"localizacion_en\":\"\"},\"21\":{\"tipo\":5,\"respuesta\":\"Que sepan mis novedades\",\"localizacion_en\":\"\"},\"22\":{\"tipo\":6,\"respuesta\":\"Software\",\"localizacion_en\":\"\"}},\"selections\":{\"templateTypeId\":{\"type\":\"config\",\"value\":\"004\"},\"siteName\":{\"type\":\"text\",\"text\":\"mysite\"},\"inp-content-name\":{\"type\":\"text\",\"text\":\"Mi primer negocio\"},\"inp-content-slogan\":{\"type\":\"text\",\"text\":\"Somos la mejor empresa de software\"},\"inp-content-title-aboutus\":{},\"inp-content-aboutus\":{},\"inp-content-title-cta\":{},\"inp-content-cta\":{},\"inp-content-title-item-1\":{},\"inp-content-item-1\":{},\"inp-content-item-add-y\":{\"type\":\"text\",\"text\":\"y\"},\"inp-content-item-add-n\":{\"type\":\"text\",\"text\":\"n\"},\"inp-contact-email\":{},\"inp-contact-phone\":{},\"inp-contact-address\":{},\"inp-contact-schedule\":{},\"inp-contact-facebook\":{},\"inp-contact-twitter\":{},\"palette\":{\"name\":\"palette\",\"type\":\"id\",\"value\":\"0\"}}}', 46),
('5b6d90f875a4e', '{\"respuestas\":{\"10\":{\"tipo\":3,\"respuesta\":\"Somos la mejor empresa de software\",\"localizacion_en\":\"\"},\"21\":{\"tipo\":5,\"respuesta\":\"Que sepan mis novedades\",\"localizacion_en\":\"\"},\"22\":{\"tipo\":6,\"respuesta\":\"Software\",\"localizacion_en\":\"\"}},\"selections\":{\"templateTypeId\":{\"type\":\"config\",\"value\":\"008\"},\"siteName\":{\"type\":\"text\",\"text\":\"otroSitio\"},\"inp-content-name\":{\"type\":\"text\",\"text\":\"Mi primer negocio\"},\"inp-content-slogan\":{\"type\":\"text\",\"text\":\"Somos la mejor empresa de software\"},\"inp-content-title-aboutus\":{},\"inp-content-aboutus\":{},\"inp-content-title-cta\":{},\"inp-content-cta\":{},\"inp-content-title-item-1\":{},\"inp-content-item-1\":{},\"inp-content-item-add-y\":{\"type\":\"text\",\"text\":\"y\"},\"inp-content-item-add-n\":{\"type\":\"text\",\"text\":\"n\"},\"inp-contact-email\":{},\"inp-contact-phone\":{},\"inp-contact-address\":{},\"inp-contact-schedule\":{},\"inp-contact-facebook\":{},\"inp-contact-twitter\":{},\"palette\":{\"name\":\"palette\",\"type\":\"id\",\"value\":\"0\"},\"#img-hero\":{\"type\":\"image\",\"img\":\"https://images.unsplash.com/photo-1533709752211-118fcaf03312?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjI2NzYxfQ\"},\"#img-item-1\":{\"type\":\"image\",\"img\":\"https://images.unsplash.com/photo-1514428631868-a400b561ff44?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjI2NzYxfQ\"},\"inp-content-title-item-2\":{},\"inp-content-item-2\":{},\"#img-item-2\":{\"type\":\"image\",\"img\":\"https://images.unsplash.com/photo-1515524738708-327f6b0037a7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjI2NzYxfQ\"},\"inp-content-title-item-3\":{},\"inp-content-item-3\":{},\"#img-item-3\":{\"type\":\"image\",\"img\":\"https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjI2NzYxfQ\"}}}', 48);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `opciones_respuesta`
--

DROP TABLE IF EXISTS `opciones_respuesta`;
CREATE TABLE IF NOT EXISTS `opciones_respuesta` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `tipo_pregunta` varchar(5) NOT NULL,
  `respuesta` text NOT NULL,
  UNIQUE KEY `Id` (`Id`),
  KEY `opcion_respuesta` (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `opciones_respuesta`
--

INSERT INTO `opciones_respuesta` (`Id`, `tipo_pregunta`, `respuesta`) VALUES
(1, '5', 'Que mis clientes me encuentren#Tener clientes de otras regiones#Que mis clientes conozcan mi ubicación#Que mis clientes se comuniquen conmigo#Que mis clientes vean mis productos y/o servicios#Que mis clientes me compren en línea#Otra ¿Cuál?'),
(2, '6', '[categorias]'),
(3, '7', 'Producto#Servicio#Ambos');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pagos`
--

DROP TABLE IF EXISTS `pagos`;
CREATE TABLE IF NOT EXISTS `pagos` (
  `id` varchar(13) NOT NULL,
  `paquete` varchar(100) NOT NULL,
  `id_usuario` varchar(13) NOT NULL,
  `fecha_inicio` varchar(50) NOT NULL,
  `info_pago` text NOT NULL,
  `id_pagina` int(11) NOT NULL,
  `id_paypal` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `preguntas`
--

DROP TABLE IF EXISTS `preguntas`;
CREATE TABLE IF NOT EXISTS `preguntas` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `pregunta` longtext NOT NULL,
  `tipo` int(11) NOT NULL,
  `tiene_opciones` tinyint(1) NOT NULL DEFAULT '0',
  `isActive` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=24 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `preguntas`
--

INSERT INTO `preguntas` (`Id`, `pregunta`, `tipo`, `tiene_opciones`, `isActive`) VALUES
(1, '¿Como describirías tu organización/empresa en un enunciado?', 1, 0, 0),
(2, '¿Cuál es la actividad de la empresa?', 1, 0, 0),
(6, '¿Cuál es el eslógan de tu negocio?', 1, 0, 0),
(5, 'Describe tu negocio en un enunciado', 1, 0, 0),
(7, 'Tres palabras para describir tu organización/empresa', 2, 0, 0),
(8, '¿Qué palabras claves describen tu negocio?', 2, 0, 0),
(9, '¿Que los hace únicos? (Slogan)', 3, 0, 1),
(10, '¿Qué hace tu empresa que los diferencía? (Slogan)', 3, 0, 1),
(11, '¿Porqué consideras que tus clientes deben de ir a tu negocio?', 3, 0, 0),
(12, '¿Como describirías tu audiencia primaria?', 4, 0, 0),
(13, '¿Quiénes son tus clientes?', 4, 0, 0),
(14, '¿Quién es tu principal cliente?', 4, 0, 0),
(15, '¿Cuáles son las características de tu cliente principal?', 4, 0, 0),
(16, '¿Cual seria tu mercado meta? ', 4, 0, 0),
(22, 'Selecciona la categoría de tu negocio:', 6, 1, 1),
(19, '¿Cuál es la necesidad primaria de su empresa?', 5, 1, 0),
(20, '¿Qué le gustaría mejorar en su empresa?', 5, 1, 0),
(21, '¿Qué esperas obtener teniendo presencia en línea?', 5, 1, 1),
(23, 'Selecciona tu nicho:', 7, 1, 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `respuestas`
--

DROP TABLE IF EXISTS `respuestas`;
CREATE TABLE IF NOT EXISTS `respuestas` (
  `id_pregunta` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `respuesta` longtext NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `templates`
--

DROP TABLE IF EXISTS `templates`;
CREATE TABLE IF NOT EXISTS `templates` (
  `folder` varchar(200) NOT NULL,
  `width` int(11) NOT NULL,
  `height` int(11) NOT NULL,
  `font` varchar(100) NOT NULL,
  `fontsize` int(11) NOT NULL,
  `color` varchar(100) NOT NULL,
  `posx` int(11) NOT NULL,
  `posy` int(11) NOT NULL,
  `uppercase` tinyint(1) NOT NULL,
  `align` varchar(100) NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`),
  KEY `id_template` (`id`),
  KEY `id` (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `templates`
--

INSERT INTO `templates` (`folder`, `width`, `height`, `font`, `fontsize`, `color`, `posx`, `posy`, `uppercase`, `align`, `id`) VALUES
('html5up-strongly-typed', 490, 60, 'Arvo-Bold.ttf', 32, 'ed786a', 236, 120, 1, 'center', 1),
('html5up-telephasic', 260, 70, 'SourceSansPro-Bold.ttf', 24, 'ffffff', 380, 0, 1, 'center', 2),
('templatemo_395_urbanic', 246, 52, 'OpenSans-Regular.ttf', 50, '7777777', 30, 80, 0, 'left', 3),
('yebo-flat-layout', 150, 90, 'Lato-Bold.ttf', 30, '848789', 100, 30, 1, 'left', 4),
('magnetic_pixelhint', 162, 50, 'OpenSans-Bold.ttf', 20, '000000', 50, 100, 1, 'left', 5),
('startbootstrap-agency-gh-pages', 182, 42, 'KaushanScript-Regular.ttf', 28, 'fed136', 100, 40, 0, 'left', 6);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `Id` varchar(13) NOT NULL,
  `correo` mediumtext NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`Id`, `correo`, `password`) VALUES
('5b6d90f875a4e', 'contacto@algo.mx', '$2y$10$kgTd/CzoExfDC.Y5oEbJvej0LwbBwJJgbD687KX9ZHZDlFp6gWGiq');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
