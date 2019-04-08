-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 05-07-2018 a las 00:43:34
-- Versión del servidor: 5.7.19
-- Versión de PHP: 7.0.23

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
  PRIMARY KEY (`Id`),
  KEY `categoria` (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=15 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `categorias_negocio`
--

INSERT INTO `categorias_negocio` (`Id`, `Categoria`) VALUES
(1, 'Arte y Creatividad'),
(2, 'Automóviles'),
(3, 'Moda y belleza'),
(4, 'Servicios profesionales'),
(5, 'Computación'),
(6, 'Restaurantes y cafeterías'),
(7, 'Deportes y recreación'),
(8, 'Hogar'),
(9, 'Eventos y banquetes'),
(10, 'Mascotas y veterinarias'),
(11, 'Viajes'),
(12, 'Salud y bienestar'),
(13, 'Comercios'),
(14, 'Bienes raíces');

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
-- Estructura de tabla para la tabla `preguntas`
--

DROP TABLE IF EXISTS `preguntas`;
CREATE TABLE IF NOT EXISTS `preguntas` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `pregunta` longtext NOT NULL,
  `tipo` int(11) NOT NULL,
  `tiene_opciones` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=24 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `preguntas`
--

INSERT INTO `preguntas` (`Id`, `pregunta`, `tipo`, `tiene_opciones`) VALUES
(1, '¿Como describirías tu organización/empresa en un enunciado?', 1, 0),
(2, '¿Cuál es la actividad de la empresa?', 1, 0),
(6, '¿Cuál es el eslógan de tu negocio?', 1, 0),
(5, 'Describe tu negocio en un enunciado', 1, 0),
(7, 'Tres palabras para describir tu organización/empresa', 2, 0),
(8, '¿Qué palabras claves describen tu negocio?', 2, 0),
(9, '¿Que los hace únicos?', 3, 0),
(10, '¿Qué hace tu empresa que los diferencía?', 3, 0),
(11, '¿Porqué consideras que tus clientes deben de ir a tu negocio?', 3, 0),
(12, '¿Como describirías tu audiencia primaria?', 4, 0),
(13, '¿Quiénes son tus clientes?', 4, 0),
(14, '¿Quién es tu principal cliente?', 4, 0),
(15, '¿Cuáles son las características de tu cliente principal?', 4, 0),
(16, '¿Cual seria tu mercado meta? ', 4, 0),
(22, 'Selecciona la categoría de tu negocio:', 6, 1),
(19, '¿Cuál es la necesidad primaria de su empresa?', 5, 1),
(20, '¿Qué le gustaría mejorar en su empresa?', 5, 1),
(21, '¿Qué esperas obtener teniendo presencia en línea?', 5, 1),
(23, 'Selecciona tu nicho:', 7, 1);

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
  `nombre` mediumtext NOT NULL,
  `correo` mediumtext NOT NULL,
  `Info` text NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`Id`, `nombre`, `correo`, `Info`) VALUES
('5b3429a93aa35', 'Web2b', 'contacto@mail.mx', '{\"respuestas\":[{\"tipo\":1,\"Id\":6,\"respuesta\":\"Somos los numero 1\"},{\"tipo\":2,\"Id\":7,\"respuesta\":\"Mejores autos del mercado\"},{\"tipo\":3,\"Id\":11,\"respuesta\":\"Por que somos los mejores\"},{\"tipo\":4,\"Id\":13,\"respuesta\":\"Cualquiera que quiera comprar buenos autos de calidad\"},{\"tipo\":5,\"Id\":19,\"respuesta\":\"Que mis clientes vean mis productos y/o servicios\"},{\"tipo\":6,\"Id\":22,\"respuesta\":\"AutomÃ³viles\"},{\"tipo\":7,\"Id\":23,\"respuesta\":\"Producto\"}]}');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
