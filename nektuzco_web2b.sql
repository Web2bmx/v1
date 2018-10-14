-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Oct 14, 2018 at 04:42 PM
-- Server version: 5.7.21
-- PHP Version: 5.6.35

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nektuzco_web2b`
--

-- --------------------------------------------------------

--
-- Table structure for table `categorias_negocio`
--

DROP TABLE IF EXISTS `categorias_negocio`;
CREATE TABLE IF NOT EXISTS `categorias_negocio` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Categoria` varchar(100) NOT NULL,
  `Categoria_en` varchar(127) NOT NULL,
  PRIMARY KEY (`Id`),
  KEY `categoria` (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=15 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `categorias_negocio`
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
(14, 'Bienes raíces', 'Real State');

-- --------------------------------------------------------

--
-- Table structure for table `info_paginas`
--

DROP TABLE IF EXISTS `info_paginas`;
CREATE TABLE IF NOT EXISTS `info_paginas` (
  `IdUsuario` varchar(13) NOT NULL,
  `info` text NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`),
  KEY `IdUsuario` (`IdUsuario`)
) ENGINE=MyISAM AUTO_INCREMENT=43 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `info_paginas`
--

INSERT INTO `info_paginas` (`IdUsuario`, `info`, `id`) VALUES
('5b6d90f875a4e', '{\"respuestas\":{\"10\":{\"tipo\":3,\"respuesta\":\"Somos los mejores\"},\"21\":{\"tipo\":5,\"respuesta\":\"Que mis clientes conozcan mi ubicaciÃ³n\"},\"22\":{\"tipo\":6,\"respuesta\":\"AutomÃ³viles\"}},\"selections\":{\"templateTypeId\":{\"type\":\"config\",\"value\":\"004\"},\"inp-content-slogan\":{},\"inp-content-title-aboutus\":{},\"inp-content-aboutus\":{},\"inp-content-title-cta\":{},\"inp-content-cta\":{},\"inp-content-title-item-1\":{},\"inp-content-item-1\":{},\"inp-content-item-add-y\":{\"type\":\"text\",\"text\":\"y\"},\"inp-content-item-add-n\":{\"type\":\"text\",\"text\":\"n\"},\"inp-contact-email\":{},\"inp-contact-phone\":{},\"inp-contact-address\":{},\"inp-contact-schedule\":{},\"inp-contact-facebook\":{},\"inp-contact-twitter\":{},\"palette\":{\"name\":\"palette\",\"type\":\"id\",\"value\":\"7\"}},\"nombre\":\"Test3\"}', 42),
('5b6d90f875a4e', '{\"respuestas\":{\"10\":{\"tipo\":3,\"respuesta\":\"Somos los mejores\"},\"21\":{\"tipo\":5,\"respuesta\":\"Que mis clientes conozcan mi ubicaciÃ³n\"},\"22\":{\"tipo\":6,\"respuesta\":\"AutomÃ³viles\"}},\"selections\":{\"templateTypeId\":{\"type\":\"config\",\"value\":\"001\"},\"inp-content-slogan\":{},\"inp-content-title-aboutus\":{},\"inp-content-aboutus\":{},\"inp-content-title-cta\":{},\"inp-content-cta\":{},\"inp-content-title-item-1\":{},\"inp-content-item-1\":{},\"inp-content-item-add-y\":{\"type\":\"text\",\"text\":\"y\"},\"inp-content-item-add-n\":{\"type\":\"text\",\"text\":\"n\"},\"inp-contact-email\":{},\"inp-contact-phone\":{},\"inp-contact-address\":{},\"inp-contact-schedule\":{},\"inp-contact-facebook\":{},\"inp-contact-twitter\":{},\"palette\":{\"name\":\"palette\",\"type\":\"id\",\"value\":\"0\"}}}', 41),
('5b6d90f875a4e', '{\"respuestas\":{\"9\":{\"tipo\":3,\"respuesta\":\"Somos los mas chingones\"},\"21\":{\"tipo\":5,\"respuesta\":\"Que mis clientes se comuniquen conmigo\"},\"22\":{\"tipo\":6,\"respuesta\":\"Salud y bienestar\"}},\"selections\":{\"templateTypeId\":{\"type\":\"config\",\"value\":\"001\"},\"inp-content-slogan\":{},\"inp-content-title-aboutus\":{},\"inp-content-aboutus\":{},\"inp-content-title-cta\":{},\"inp-content-cta\":{},\"inp-content-title-item-1\":{},\"inp-content-item-1\":{},\"inp-content-item-add-y\":{\"type\":\"text\",\"text\":\"y\"},\"inp-content-item-add-n\":{\"type\":\"text\",\"text\":\"n\"},\"inp-contact-email\":{},\"inp-contact-phone\":{},\"inp-contact-address\":{},\"inp-contact-schedule\":{},\"inp-contact-facebook\":{},\"inp-contact-twitter\":{},\"palette\":{\"name\":\"palette\",\"type\":\"id\",\"value\":\"0\"}}}', 40),
('5b6d90f875a4e', '{\"respuestas\":[{\"tipo\":1,\"Id\":1,\"respuesta\":\"arte, canvas, cuadros, decoracion, hogar\"},{\"tipo\":2,\"Id\":8,\"respuesta\":\"afsckj\"},{\"tipo\":3,\"Id\":10,\"respuesta\":\"esdsihksk\"},{\"tipo\":4,\"Id\":15,\"respuesta\":\"kdkdskas\"},{\"tipo\":5,\"Id\":21,\"respuesta\":\"Que mis clientes conozcan mi ubicaciÃƒÂƒÃ‚Â³n\"},{\"tipo\":6,\"Id\":22,\"respuesta\":\"Servicios profesionales\"},{\"tipo\":7,\"Id\":23,\"respuesta\":\"Producto\"}],\"imagenes\":{\"hero\":\"5b5c79d19d631_Logo.png\",\"item-1\":\"5b5f7126a194f_googlelogo_color_272x92dp.png\"},\"selections\":{\"#img-hero\":{\"type\":\"image\",\"img\":\"https://images.unsplash.com/photo-1528290648619-aaaf24139673?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjI2NzYxfQ&s=1d47a6ff81c84fa3fe796fc8b08ec8b7\"},\"#img-item-1\":{\"type\":\"image\",\"img\":\"https://images.unsplash.com/photo-1532665137004-b7aeb6a9cab1?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjI2NzYxfQ&s=bd52a1483f0dd54f3ebe5c6e5cb5975d\"},\"#img-item-2\":{\"type\":\"image\",\"img\":\"https://images.unsplash.com/photo-1520050206274-a1ae44613e6d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjI2NzYxfQ&s=3ac09c30eef36e9db82c032163c00db4\"},\"inp-content-name\":{},\"inp-content-slogan\":{},\"inp-content-title-aboutus\":{},\"inp-content-aboutus\":{},\"inp-content-title-cta\":{},\"inp-content-cta\":{},\"inp-content-title-item-1\":{},\"inp-content-item-1\":{},\"inp-content-item-add-y\":{\"type\":\"text\",\"text\":\"y\"},\"inp-content-item-add-n\":{\"type\":\"text\",\"text\":\"n\"},\"inp-contact-email\":{},\"inp-contact-phone\":{},\"inp-contact-address\":{},\"inp-contact-schedule\":{},\"inp-contact-facebook\":{},\"inp-contact-twitter\":{},\"templateTypeId\":{\"type\":\"config\",\"value\":\"003\"}},\"nombre\":\"Web2b\"}', 38),
('5b6d90f875a4e', '{\"respuestas\":[{\"tipo\":1,\"Id\":2,\"respuesta\":\"qgqrg\"},{\"tipo\":2,\"Id\":8,\"respuesta\":\"ewrqwerqewr\"},{\"tipo\":3,\"Id\":11,\"respuesta\":\"qwerewrewr\"},{\"tipo\":4,\"Id\":16,\"respuesta\":\"weqreqwrewrwr\"},{\"tipo\":5,\"Id\":19,\"respuesta\":\"Que mis clientes conozcan mi ubicaciÃƒÂ³n\"},{\"tipo\":6,\"Id\":22,\"respuesta\":\"Deportes y recreaciÃƒÂ³n\"},{\"tipo\":7,\"Id\":23,\"respuesta\":\"Ambos\"}],\"selections\":{\"templateTypeId\":{\"type\":\"config\",\"value\":\"004\"},\"inp-content-slogan\":{},\"inp-content-title-aboutus\":{},\"inp-content-aboutus\":{},\"inp-content-title-cta\":{},\"inp-content-cta\":{},\"inp-content-title-item-1\":{},\"inp-content-item-1\":{},\"inp-content-item-add-y\":{\"type\":\"text\",\"text\":\"y\"},\"inp-content-item-add-n\":{\"type\":\"text\",\"text\":\"n\"},\"inp-contact-email\":{},\"inp-contact-phone\":{},\"inp-contact-address\":{},\"inp-contact-schedule\":{},\"inp-contact-facebook\":{},\"inp-contact-twitter\":{},\"#img-hero\":{\"type\":\"image\",\"img\":\"https://images.unsplash.com/photo-1521633602573-190eaa25b787?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjI2NzYxfQ&s=50198909c6377c8995d96bbb2bdb0b8c\"},\"inp-content-title-item-2\":{},\"inp-content-item-2\":{},\"palette\":{\"name\":\"palette\",\"type\":\"id\",\"value\":\"0\"}},\"nombre\":\"Pagina 3\"}', 39),
('5b6d90f875a4e', '{\"respuestas\":[{\"tipo\":1,\"Id\":1,\"respuesta\":\"arte, canvas, cuadros, decoracion, hogar\"},{\"tipo\":2,\"Id\":8,\"respuesta\":\"afsckj\"},{\"tipo\":3,\"Id\":10,\"respuesta\":\"esdsihksk\"},{\"tipo\":4,\"Id\":15,\"respuesta\":\"kdkdskas\"},{\"tipo\":5,\"Id\":21,\"respuesta\":\"Que mis clientes conozcan mi ubicaciÃƒÂƒÃ‚ÂƒÃƒÂ‚Ã‚ÂƒÃƒÂƒÃ‚Â‚ÃƒÂ‚Ã‚Â³n\"},{\"tipo\":6,\"Id\":22,\"respuesta\":\"Servicios profesionales\"},{\"tipo\":7,\"Id\":23,\"respuesta\":\"Producto\"}],\"imagenes\":{\"hero\":\"5b5c79d19d631_Logo.png#5b98595d82a4e_Logo.png\",\"item-1\":\"5b5f7126a194f_googlelogo_color_272x92dp.png\"},\"selections\":{\"#img-hero\":{\"type\":\"image\",\"img\":\"/crea/client_images/5b5c79d19d631_Logo.png\"},\"#img-item-1\":{\"type\":\"image\",\"img\":\"https://images.unsplash.com/photo-1532665137004-b7aeb6a9cab1?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjI2NzYxfQ&s=bd52a1483f0dd54f3ebe5c6e5cb5975d\"},\"#img-item-2\":{\"type\":\"image\",\"img\":\"https://images.unsplash.com/photo-1520050206274-a1ae44613e6d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjI2NzYxfQ&s=3ac09c30eef36e9db82c032163c00db4\"},\"#val-content-item-add-y\":{\"type\":\"text\",\"text\":\"y\"},\"#val-content-item-add-n\":{\"type\":\"text\",\"text\":\"n\"},\"#val-content-name\":{\"type\":\"text\",\"text\":\"mi nombre\"},\"#inp-content-item-add-y\":{\"type\":\"text\",\"text\":\"y\"},\"#inp-content-item-add-n\":{\"type\":\"text\",\"text\":\"n\"},\"inp-content-name\":{\"type\":\"text\",\"text\":\"MI pagina web\"},\"inp-content-slogan\":{\"type\":\"text\"},\"inp-content-title-aboutus\":{\"type\":\"text\"},\"inp-content-aboutus\":{\"type\":\"text\"},\"inp-content-title-cta\":{\"type\":\"text\"},\"inp-content-cta\":{\"type\":\"text\"},\"inp-content-title-item-1\":{\"type\":\"text\"},\"inp-content-item-1\":{\"type\":\"text\"},\"inp-content-item-add-y\":{\"type\":\"text\",\"text\":\"y\"},\"inp-content-item-add-n\":{\"type\":\"text\",\"text\":\"n\"},\"inp-contact-email\":{\"type\":\"text\"},\"inp-contact-phone\":{\"type\":\"text\"},\"inp-contact-address\":{\"type\":\"text\"},\"inp-contact-schedule\":{\"type\":\"text\"},\"inp-contact-facebook\":{\"type\":\"text\"},\"inp-contact-twitter\":{\"type\":\"text\"},\"templateTypeId\":{\"type\":\"config\",\"value\":\"003\"}},\"nombre\":\"otra pagina\"}', 36),
('5b6d90f875a4e', '{\"respuestas\":[{\"tipo\":1,\"Id\":1,\"respuesta\":\"arte, canvas, cuadros, decoracion, hogar\"},{\"tipo\":2,\"Id\":8,\"respuesta\":\"afsckj\"},{\"tipo\":3,\"Id\":10,\"respuesta\":\"esdsihksk\"},{\"tipo\":4,\"Id\":15,\"respuesta\":\"kdkdskas\"},{\"tipo\":5,\"Id\":21,\"respuesta\":\"Que mis clientes conozcan mi ubicaciÃƒÂƒÃ‚ÂƒÃƒÂ‚Ã‚ÂƒÃƒÂƒÃ‚Â‚ÃƒÂ‚Ã‚Â³n\"},{\"tipo\":6,\"Id\":22,\"respuesta\":\"Servicios profesionales\"},{\"tipo\":7,\"Id\":23,\"respuesta\":\"Producto\"}],\"imagenes\":{\"hero\":\"5b5c79d19d631_Logo.png#5b984fe79ede1_Logo.png\",\"item-1\":\"5b5f7126a194f_googlelogo_color_272x92dp.png\"},\"selections\":{\"#img-hero\":{\"type\":\"image\",\"img\":\"/crea/client_images/5b5c79d19d631_Logo.png\"},\"#img-item-1\":{\"type\":\"image\",\"img\":\"https://images.unsplash.com/photo-1532665137004-b7aeb6a9cab1?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjI2NzYxfQ&s=bd52a1483f0dd54f3ebe5c6e5cb5975d\"},\"#img-item-2\":{\"type\":\"image\",\"img\":\"https://images.unsplash.com/photo-1520050206274-a1ae44613e6d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjI2NzYxfQ&s=3ac09c30eef36e9db82c032163c00db4\"},\"#val-content-item-add-y\":{\"type\":\"text\",\"text\":\"y\"},\"#val-content-item-add-n\":{\"type\":\"text\",\"text\":\"n\"},\"#val-content-name\":{\"type\":\"text\",\"text\":\"mi nombre\"},\"#inp-content-item-add-y\":{\"type\":\"text\",\"text\":\"y\"},\"#inp-content-item-add-n\":{\"type\":\"text\",\"text\":\"n\"},\"inp-content-name\":{\"type\":\"text\",\"text\":\"Otra web\"},\"inp-content-slogan\":{\"type\":\"text\"},\"inp-content-title-aboutus\":{\"type\":\"text\"},\"inp-content-aboutus\":{\"type\":\"text\"},\"inp-content-title-cta\":{\"type\":\"text\"},\"inp-content-cta\":{\"type\":\"text\"},\"inp-content-title-item-1\":{\"type\":\"text\"},\"inp-content-item-1\":{\"type\":\"text\"},\"inp-content-item-add-y\":{\"type\":\"text\",\"text\":\"y\"},\"inp-content-item-add-n\":{\"type\":\"text\",\"text\":\"n\"},\"inp-contact-email\":{\"type\":\"text\"},\"inp-contact-phone\":{\"type\":\"text\"},\"inp-contact-address\":{\"type\":\"text\"},\"inp-contact-schedule\":{\"type\":\"text\"},\"inp-contact-facebook\":{\"type\":\"text\"},\"inp-contact-twitter\":{\"type\":\"text\"}},\"nombre\":\"Web2b1\"}', 37);

-- --------------------------------------------------------

--
-- Table structure for table `opciones_respuesta`
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
-- Dumping data for table `opciones_respuesta`
--

INSERT INTO `opciones_respuesta` (`Id`, `tipo_pregunta`, `respuesta`) VALUES
(1, '5', 'Que mis clientes me encuentren#Tener clientes de otras regiones#Que mis clientes conozcan mi ubicación#Que mis clientes se comuniquen conmigo#Que mis clientes vean mis productos y/o servicios#Que mis clientes me compren en línea#Otra ¿Cuál?'),
(2, '6', '[categorias]'),
(3, '7', 'Producto#Servicio#Ambos');

-- --------------------------------------------------------

--
-- Table structure for table `preguntas`
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
-- Dumping data for table `preguntas`
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
-- Table structure for table `respuestas`
--

DROP TABLE IF EXISTS `respuestas`;
CREATE TABLE IF NOT EXISTS `respuestas` (
  `id_pregunta` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `respuesta` longtext NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `templates`
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
-- Dumping data for table `templates`
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
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `Id` varchar(13) NOT NULL,
  `correo` mediumtext NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `usuarios`
--

INSERT INTO `usuarios` (`Id`, `correo`, `password`) VALUES
('5b6d90f875a4e', 'contacto@algo.mx', '$2y$10$kgTd/CzoExfDC.Y5oEbJvej0LwbBwJJgbD687KX9ZHZDlFp6gWGiq');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
