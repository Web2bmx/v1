-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Mar 04, 2019 at 03:01 AM
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
) ENGINE=MyISAM AUTO_INCREMENT=77 DEFAULT CHARSET=latin1;

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
('5b6d90f875a4e', '{\"respuestas\":[{\"tipo\":1,\"Id\":1,\"respuesta\":\"arte, canvas, cuadros, decoracion, hogar\"},{\"tipo\":2,\"Id\":8,\"respuesta\":\"afsckj\"},{\"tipo\":3,\"Id\":10,\"respuesta\":\"esdsihksk\"},{\"tipo\":4,\"Id\":15,\"respuesta\":\"kdkdskas\"},{\"tipo\":5,\"Id\":21,\"respuesta\":\"Que mis clientes conozcan mi ubicaciÃƒÂƒÃ‚ÂƒÃƒÂ‚Ã‚ÂƒÃƒÂƒÃ‚Â‚ÃƒÂ‚Ã‚Â³n\"},{\"tipo\":6,\"Id\":22,\"respuesta\":\"Servicios profesionales\"},{\"tipo\":7,\"Id\":23,\"respuesta\":\"Producto\"}],\"imagenes\":{\"hero\":\"5b5c79d19d631_Logo.png#5b984fe79ede1_Logo.png\",\"item-1\":\"5b5f7126a194f_googlelogo_color_272x92dp.png\"},\"selections\":{\"#img-hero\":{\"type\":\"image\",\"img\":\"/crea/client_images/5b5c79d19d631_Logo.png\"},\"#img-item-1\":{\"type\":\"image\",\"img\":\"https://images.unsplash.com/photo-1532665137004-b7aeb6a9cab1?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjI2NzYxfQ&s=bd52a1483f0dd54f3ebe5c6e5cb5975d\"},\"#img-item-2\":{\"type\":\"image\",\"img\":\"https://images.unsplash.com/photo-1520050206274-a1ae44613e6d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjI2NzYxfQ&s=3ac09c30eef36e9db82c032163c00db4\"},\"#val-content-item-add-y\":{\"type\":\"text\",\"text\":\"y\"},\"#val-content-item-add-n\":{\"type\":\"text\",\"text\":\"n\"},\"#val-content-name\":{\"type\":\"text\",\"text\":\"mi nombre\"},\"#inp-content-item-add-y\":{\"type\":\"text\",\"text\":\"y\"},\"#inp-content-item-add-n\":{\"type\":\"text\",\"text\":\"n\"},\"inp-content-name\":{\"type\":\"text\",\"text\":\"Otra web\"},\"inp-content-slogan\":{\"type\":\"text\"},\"inp-content-title-aboutus\":{\"type\":\"text\"},\"inp-content-aboutus\":{\"type\":\"text\"},\"inp-content-title-cta\":{\"type\":\"text\"},\"inp-content-cta\":{\"type\":\"text\"},\"inp-content-title-item-1\":{\"type\":\"text\"},\"inp-content-item-1\":{\"type\":\"text\"},\"inp-content-item-add-y\":{\"type\":\"text\",\"text\":\"y\"},\"inp-content-item-add-n\":{\"type\":\"text\",\"text\":\"n\"},\"inp-contact-email\":{\"type\":\"text\"},\"inp-contact-phone\":{\"type\":\"text\"},\"inp-contact-address\":{\"type\":\"text\"},\"inp-contact-schedule\":{\"type\":\"text\"},\"inp-contact-facebook\":{\"type\":\"text\"},\"inp-contact-twitter\":{\"type\":\"text\"}},\"nombre\":\"Web2b1\"}', 37),
('5be9f4f783b95', '{\"respuestas\":{\"9\":{\"tipo\":3,\"respuesta\":\"Â¡Tenemos los mejores PRECIOS!\",\"localizacion_en\":\"\"},\"21\":{\"tipo\":5,\"respuesta\":\"Que mis clientes se comuniquen conmigo\",\"localizacion_en\":\"\"},\"22\":{\"tipo\":6,\"respuesta\":\"Comercios\",\"localizacion_en\":\"Shops, stores, grocery store\"}},\"selections\":{\"templateTypeId\":{\"type\":\"config\",\"value\":\"003\"},\"siteName\":{\"type\":\"text\",\"text\":\"ACF20181112\"},\"inp-content-name\":{\"type\":\"text\",\"text\":\"Abarrotes DoÃ±a Juanita\"},\"inp-content-slogan\":{\"type\":\"text\",\"text\":\"Â¡Tenemos los mejores PRECIOS para tÃ­!\"},\"inp-content-title-aboutus\":{\"type\":\"text\",\"text\":\"Somos una empresa familiar\"},\"inp-content-aboutus\":{\"type\":\"text\",\"text\":\"Somos una empresa familiar formada en 1954\"},\"inp-content-title-cta\":{\"type\":\"text\",\"text\":\"Â¡Vengan a comprarnos YA!\"},\"inp-content-cta\":{\"type\":\"text\",\"text\":\"Espero que vengan y nos compren.\"},\"inp-content-title-item-1\":{\"type\":\"text\",\"text\":\"Abarrotes\"},\"inp-content-item-1\":{\"type\":\"text\",\"text\":\"El mÃ¡s amplio surtido en abarrotes\"},\"inp-content-item-add-y\":{\"type\":\"text\",\"text\":\"y\"},\"inp-content-item-add-n\":{\"type\":\"text\",\"text\":\"n\"},\"inp-contact-email\":{},\"inp-contact-phone\":{},\"inp-contact-address\":{},\"inp-contact-schedule\":{},\"inp-contact-facebook\":{},\"inp-contact-twitter\":{},\"palette\":{\"name\":\"palette\",\"type\":\"id\",\"value\":\"4\"},\"inp-content-title-item-2\":{},\"inp-content-item-2\":{},\"#img-hero\":{\"type\":\"image\",\"img\":\"https://images.unsplash.com/photo-1521566652839-697aa473761a?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjI2NzYxfQ&s=f41e72c7ac2a0bc12e6b6992acc28faa\"}}}', 43),
('5c04a95ac76c1', '{\"respuestas\":{\"9\":{\"tipo\":3,\"respuesta\":\"Los mÃ¡s sabrosos.\",\"localizacion_en\":\"\"},\"21\":{\"tipo\":5,\"localizacion_en\":\"\"},\"22\":{\"tipo\":6,\"localizacion_en\":\"Restaurants, coffee shops and food\"}},\"selections\":{\"templateTypeId\":{\"type\":\"config\",\"value\":\"001\"},\"palette\":{\"name\":\"palette\",\"type\":\"id\",\"value\":\"0\"},\"siteName\":{},\"inp-content-name\":{},\"inp-content-slogan\":{\"type\":\"text\",\"text\":\"Los mÃ¡s sabrosos.\"},\"inp-content-title-aboutus\":{},\"inp-content-aboutus\":{},\"inp-content-title-cta\":{},\"inp-content-cta\":{},\"inp-content-title-item-1\":{},\"inp-content-item-1\":{},\"inp-content-item-add-y\":{\"type\":\"text\",\"text\":\"y\"},\"inp-content-item-add-n\":{\"type\":\"text\",\"text\":\"n\"},\"inp-contact-email\":{},\"inp-contact-phone\":{},\"inp-contact-address\":{},\"inp-contact-schedule\":{},\"inp-contact-facebook\":{},\"inp-contact-twitter\":{}}}', 44),
('5b6d90f875a4e', '{\"respuestas\":{\"9\":{\"tipo\":3,\"respuesta\":\"Los mÃ¡s sabrosos.\",\"localizacion_en\":\"\"},\"21\":{\"tipo\":5,\"localizacion_en\":\"\"},\"22\":{\"tipo\":6,\"localizacion_en\":\"Restaurants, coffee shops and food\"}},\"selections\":{\"templateTypeId\":{\"type\":\"config\",\"value\":\"001\"},\"palette\":{\"name\":\"palette\",\"type\":\"id\",\"value\":\"0\"},\"siteName\":{},\"inp-content-name\":{\"type\":\"text\",\"text\":\"Web2b\"},\"inp-content-slogan\":{\"type\":\"text\",\"text\":\"Los mÃ¡s sabrosos.\"},\"inp-content-title-aboutus\":{},\"inp-content-aboutus\":{},\"inp-content-title-cta\":{},\"inp-content-cta\":{},\"inp-content-title-item-1\":{},\"inp-content-item-1\":{},\"inp-content-item-add-y\":{\"type\":\"text\",\"text\":\"y\"},\"inp-content-item-add-n\":{\"type\":\"text\",\"text\":\"n\"},\"inp-contact-email\":{},\"inp-contact-phone\":{},\"inp-contact-address\":{},\"inp-contact-schedule\":{},\"inp-contact-facebook\":{},\"inp-contact-twitter\":{}}}', 46),
('5b6d90f875a4e', '{\"respuestas\":{\"9\":{\"tipo\":3,\"respuesta\":\"Los mÃ¡s sabrosos.\",\"localizacion_en\":\"\"},\"21\":{\"tipo\":5,\"localizacion_en\":\"\"},\"22\":{\"tipo\":6,\"localizacion_en\":\"Restaurants, coffee shops and food\"}},\"selections\":{\"templateTypeId\":{\"type\":\"config\",\"value\":\"001\"},\"palette\":{\"name\":\"palette\",\"type\":\"id\",\"value\":\"0\"},\"siteName\":{},\"inp-content-name\":{\"type\":\"text\",\"text\":\"Web2b\"},\"inp-content-slogan\":{\"type\":\"text\",\"text\":\"Los mÃ¡s sabrosos.\"},\"inp-content-title-aboutus\":{},\"inp-content-aboutus\":{},\"inp-content-title-cta\":{},\"inp-content-cta\":{},\"inp-content-title-item-1\":{},\"inp-content-item-1\":{},\"inp-content-item-add-y\":{\"type\":\"text\",\"text\":\"y\"},\"inp-content-item-add-n\":{\"type\":\"text\",\"text\":\"n\"},\"inp-contact-email\":{},\"inp-contact-phone\":{},\"inp-contact-address\":{},\"inp-contact-schedule\":{},\"inp-contact-facebook\":{},\"inp-contact-twitter\":{}}}', 45),
('5b6d90f875a4e', '{\"respuestas\":{\"9\":{\"tipo\":3,\"respuesta\":\"Los mÃ¡s sabrosos.\",\"localizacion_en\":\"\"},\"21\":{\"tipo\":5,\"localizacion_en\":\"\"},\"22\":{\"tipo\":6,\"localizacion_en\":\"Restaurants, coffee shops and food\"}},\"selections\":{\"templateTypeId\":{\"type\":\"config\",\"value\":\"001\"},\"palette\":{\"name\":\"palette\",\"type\":\"id\",\"value\":\"0\"},\"siteName\":{},\"inp-content-name\":{\"type\":\"text\",\"text\":\"Web2b\"},\"inp-content-slogan\":{\"type\":\"text\",\"text\":\"Los mÃ¡s sabrosos.\"},\"inp-content-title-aboutus\":{},\"inp-content-aboutus\":{},\"inp-content-title-cta\":{},\"inp-content-cta\":{},\"inp-content-title-item-1\":{},\"inp-content-item-1\":{},\"inp-content-item-add-y\":{\"type\":\"text\",\"text\":\"y\"},\"inp-content-item-add-n\":{\"type\":\"text\",\"text\":\"n\"},\"inp-contact-email\":{},\"inp-contact-phone\":{},\"inp-contact-address\":{},\"inp-contact-schedule\":{},\"inp-contact-facebook\":{},\"inp-contact-twitter\":{}}}', 47),
('5b6d90f875a4e', '{\"respuestas\":{\"9\":{\"tipo\":3,\"respuesta\":\"Los mÃ¡s sabrosos.\",\"localizacion_en\":\"\"},\"21\":{\"tipo\":5,\"localizacion_en\":\"\"},\"22\":{\"tipo\":6,\"localizacion_en\":\"Restaurants, coffee shops and food\"}},\"selections\":{\"templateTypeId\":{\"type\":\"config\",\"value\":\"001\"},\"palette\":{\"name\":\"palette\",\"type\":\"id\",\"value\":\"0\"},\"siteName\":{},\"inp-content-name\":{\"type\":\"text\",\"text\":\"Web2b\"},\"inp-content-slogan\":{\"type\":\"text\",\"text\":\"Los mÃ¡s sabrosos.\"},\"inp-content-title-aboutus\":{},\"inp-content-aboutus\":{},\"inp-content-title-cta\":{},\"inp-content-cta\":{},\"inp-content-title-item-1\":{},\"inp-content-item-1\":{},\"inp-content-item-add-y\":{\"type\":\"text\",\"text\":\"y\"},\"inp-content-item-add-n\":{\"type\":\"text\",\"text\":\"n\"},\"inp-contact-email\":{},\"inp-contact-phone\":{},\"inp-contact-address\":{},\"inp-contact-schedule\":{},\"inp-contact-facebook\":{},\"inp-contact-twitter\":{}}}', 48),
('5b6d90f875a4e', '{\"respuestas\":{\"9\":{\"tipo\":3,\"respuesta\":\"Los mÃ¡s sabrosos.\",\"localizacion_en\":\"\"},\"21\":{\"tipo\":5,\"localizacion_en\":\"\"},\"22\":{\"tipo\":6,\"localizacion_en\":\"Restaurants, coffee shops and food\"}},\"selections\":{\"templateTypeId\":{\"type\":\"config\",\"value\":\"001\"},\"palette\":{\"name\":\"palette\",\"type\":\"id\",\"value\":\"0\"},\"siteName\":{},\"inp-content-name\":{\"type\":\"text\",\"text\":\"Web2b\"},\"inp-content-slogan\":{\"type\":\"text\",\"text\":\"Los mÃ¡s sabrosos.\"},\"inp-content-title-aboutus\":{},\"inp-content-aboutus\":{},\"inp-content-title-cta\":{},\"inp-content-cta\":{},\"inp-content-title-item-1\":{},\"inp-content-item-1\":{},\"inp-content-item-add-y\":{\"type\":\"text\",\"text\":\"y\"},\"inp-content-item-add-n\":{\"type\":\"text\",\"text\":\"n\"},\"inp-contact-email\":{},\"inp-contact-phone\":{},\"inp-contact-address\":{},\"inp-contact-schedule\":{},\"inp-contact-facebook\":{},\"inp-contact-twitter\":{}}}', 49),
('5b6d90f875a4e', '{\"respuestas\":{\"9\":{\"tipo\":3,\"respuesta\":\"Los mÃ¡s sabrosos.\",\"localizacion_en\":\"\"},\"21\":{\"tipo\":5,\"localizacion_en\":\"\"},\"22\":{\"tipo\":6,\"localizacion_en\":\"Restaurants, coffee shops and food\"}},\"selections\":{\"templateTypeId\":{\"type\":\"config\",\"value\":\"001\"},\"palette\":{\"name\":\"palette\",\"type\":\"id\",\"value\":\"0\"},\"siteName\":{},\"inp-content-name\":{\"type\":\"text\",\"text\":\"Web2b\"},\"inp-content-slogan\":{\"type\":\"text\",\"text\":\"Los mÃ¡s sabrosos.\"},\"inp-content-title-aboutus\":{},\"inp-content-aboutus\":{},\"inp-content-title-cta\":{},\"inp-content-cta\":{},\"inp-content-title-item-1\":{},\"inp-content-item-1\":{},\"inp-content-item-add-y\":{\"type\":\"text\",\"text\":\"y\"},\"inp-content-item-add-n\":{\"type\":\"text\",\"text\":\"n\"},\"inp-contact-email\":{},\"inp-contact-phone\":{},\"inp-contact-address\":{},\"inp-contact-schedule\":{},\"inp-contact-facebook\":{},\"inp-contact-twitter\":{}}}', 50),
('5b6d90f875a4e', '{\"respuestas\":{\"9\":{\"tipo\":3,\"respuesta\":\"Los mÃ¡s sabrosos.\",\"localizacion_en\":\"\"},\"21\":{\"tipo\":5,\"localizacion_en\":\"\"},\"22\":{\"tipo\":6,\"localizacion_en\":\"Restaurants, coffee shops and food\"}},\"selections\":{\"templateTypeId\":{\"type\":\"config\",\"value\":\"001\"},\"palette\":{\"name\":\"palette\",\"type\":\"id\",\"value\":\"0\"},\"siteName\":{},\"inp-content-name\":{\"type\":\"text\",\"text\":\"Web2b\"},\"inp-content-slogan\":{\"type\":\"text\",\"text\":\"Los mÃ¡s sabrosos.\"},\"inp-content-title-aboutus\":{},\"inp-content-aboutus\":{},\"inp-content-title-cta\":{},\"inp-content-cta\":{},\"inp-content-title-item-1\":{},\"inp-content-item-1\":{},\"inp-content-item-add-y\":{\"type\":\"text\",\"text\":\"y\"},\"inp-content-item-add-n\":{\"type\":\"text\",\"text\":\"n\"},\"inp-contact-email\":{},\"inp-contact-phone\":{},\"inp-contact-address\":{},\"inp-contact-schedule\":{},\"inp-contact-facebook\":{},\"inp-contact-twitter\":{}}}', 51),
('5c2ab5c7f118d', '{\"respuestas\":{\"9\":{\"tipo\":3,\"respuesta\":\"Los mÃ¡s sabrosos.\",\"localizacion_en\":\"\"},\"21\":{\"tipo\":5,\"localizacion_en\":\"\"},\"22\":{\"tipo\":6,\"localizacion_en\":\"Restaurants, coffee shops and food\"}},\"selections\":{\"templateTypeId\":{\"type\":\"config\",\"value\":\"001\"},\"palette\":{\"name\":\"palette\",\"type\":\"id\",\"value\":\"0\"},\"siteName\":{},\"inp-content-name\":{\"type\":\"text\",\"text\":\"Web2b\"},\"inp-content-slogan\":{\"type\":\"text\",\"text\":\"Los mÃ¡s sabrosos.\"},\"inp-content-title-aboutus\":{},\"inp-content-aboutus\":{},\"inp-content-title-cta\":{},\"inp-content-cta\":{},\"inp-content-title-item-1\":{},\"inp-content-item-1\":{},\"inp-content-item-add-y\":{\"type\":\"text\",\"text\":\"y\"},\"inp-content-item-add-n\":{\"type\":\"text\",\"text\":\"n\"},\"inp-contact-email\":{},\"inp-contact-phone\":{},\"inp-contact-address\":{},\"inp-contact-schedule\":{},\"inp-contact-facebook\":{},\"inp-contact-twitter\":{}}}', 52),
('5c2ab5c7f118d', '{\"respuestas\":{\"9\":{\"tipo\":3,\"respuesta\":\"Los mÃ¡s sabrosos.\",\"localizacion_en\":\"\"},\"21\":{\"tipo\":5,\"localizacion_en\":\"\"},\"22\":{\"tipo\":6,\"localizacion_en\":\"Restaurants, coffee shops and food\"}},\"selections\":{\"templateTypeId\":{\"type\":\"config\",\"value\":\"001\"},\"palette\":{\"name\":\"palette\",\"type\":\"id\",\"value\":\"0\"},\"siteName\":{},\"inp-content-name\":{\"type\":\"text\",\"text\":\"Web2b\"},\"inp-content-slogan\":{\"type\":\"text\",\"text\":\"Los mÃ¡s sabrosos.\"},\"inp-content-title-aboutus\":{},\"inp-content-aboutus\":{},\"inp-content-title-cta\":{},\"inp-content-cta\":{},\"inp-content-title-item-1\":{},\"inp-content-item-1\":{},\"inp-content-item-add-y\":{\"type\":\"text\",\"text\":\"y\"},\"inp-content-item-add-n\":{\"type\":\"text\",\"text\":\"n\"},\"inp-contact-email\":{},\"inp-contact-phone\":{},\"inp-contact-address\":{},\"inp-contact-schedule\":{},\"inp-contact-facebook\":{},\"inp-contact-twitter\":{}}}', 53),
('5c2ab5c7f118d', '{\"respuestas\":{\"9\":{\"tipo\":3,\"respuesta\":\"Los mÃ¡s sabrosos.\",\"localizacion_en\":\"\"},\"21\":{\"tipo\":5,\"localizacion_en\":\"\"},\"22\":{\"tipo\":6,\"localizacion_en\":\"Restaurants, coffee shops and food\"}},\"selections\":{\"templateTypeId\":{\"type\":\"config\",\"value\":\"001\"},\"palette\":{\"name\":\"palette\",\"type\":\"id\",\"value\":\"0\"},\"siteName\":{},\"inp-content-name\":{\"type\":\"text\",\"text\":\"Web2b\"},\"inp-content-slogan\":{\"type\":\"text\",\"text\":\"Los mÃ¡s sabrosos.\"},\"inp-content-title-aboutus\":{},\"inp-content-aboutus\":{},\"inp-content-title-cta\":{},\"inp-content-cta\":{},\"inp-content-title-item-1\":{},\"inp-content-item-1\":{},\"inp-content-item-add-y\":{\"type\":\"text\",\"text\":\"y\"},\"inp-content-item-add-n\":{\"type\":\"text\",\"text\":\"n\"},\"inp-contact-email\":{},\"inp-contact-phone\":{},\"inp-contact-address\":{},\"inp-contact-schedule\":{},\"inp-contact-facebook\":{},\"inp-contact-twitter\":{}}}', 54),
('5c2ab5c7f118d', '{\"respuestas\":{\"9\":{\"tipo\":3,\"respuesta\":\"Los mÃ¡s sabrosos.\",\"localizacion_en\":\"\"},\"21\":{\"tipo\":5,\"localizacion_en\":\"\"},\"22\":{\"tipo\":6,\"localizacion_en\":\"Restaurants, coffee shops and food\"}},\"selections\":{\"templateTypeId\":{\"type\":\"config\",\"value\":\"001\"},\"palette\":{\"name\":\"palette\",\"type\":\"id\",\"value\":\"0\"},\"siteName\":{},\"inp-content-name\":{\"type\":\"text\",\"text\":\"Web2b\"},\"inp-content-slogan\":{\"type\":\"text\",\"text\":\"Los mÃ¡s sabrosos.\"},\"inp-content-title-aboutus\":{},\"inp-content-aboutus\":{},\"inp-content-title-cta\":{},\"inp-content-cta\":{},\"inp-content-title-item-1\":{},\"inp-content-item-1\":{},\"inp-content-item-add-y\":{\"type\":\"text\",\"text\":\"y\"},\"inp-content-item-add-n\":{\"type\":\"text\",\"text\":\"n\"},\"inp-contact-email\":{},\"inp-contact-phone\":{},\"inp-contact-address\":{},\"inp-contact-schedule\":{},\"inp-contact-facebook\":{},\"inp-contact-twitter\":{}}}', 55),
('5c2ab5c7f118d', '{\"respuestas\":{\"9\":{\"tipo\":3,\"respuesta\":\"Los mÃ¡s sabrosos.\",\"localizacion_en\":\"\"},\"21\":{\"tipo\":5,\"localizacion_en\":\"\"},\"22\":{\"tipo\":6,\"localizacion_en\":\"Restaurants, coffee shops and food\"}},\"selections\":{\"templateTypeId\":{\"type\":\"config\",\"value\":\"001\"},\"palette\":{\"name\":\"palette\",\"type\":\"id\",\"value\":\"0\"},\"siteName\":{},\"inp-content-name\":{\"type\":\"text\",\"text\":\"Web2b\"},\"inp-content-slogan\":{\"type\":\"text\",\"text\":\"Los mÃ¡s sabrosos.\"},\"inp-content-title-aboutus\":{},\"inp-content-aboutus\":{},\"inp-content-title-cta\":{},\"inp-content-cta\":{},\"inp-content-title-item-1\":{},\"inp-content-item-1\":{},\"inp-content-item-add-y\":{\"type\":\"text\",\"text\":\"y\"},\"inp-content-item-add-n\":{\"type\":\"text\",\"text\":\"n\"},\"inp-contact-email\":{},\"inp-contact-phone\":{},\"inp-contact-address\":{},\"inp-contact-schedule\":{},\"inp-contact-facebook\":{},\"inp-contact-twitter\":{}}}', 56),
('5c2ab5c7f118d', '{\"respuestas\":{\"9\":{\"tipo\":3,\"respuesta\":\"Los mÃ¡s sabrosos.\",\"localizacion_en\":\"\"},\"21\":{\"tipo\":5,\"localizacion_en\":\"\"},\"22\":{\"tipo\":6,\"localizacion_en\":\"Restaurants, coffee shops and food\"}},\"selections\":{\"templateTypeId\":{\"type\":\"config\",\"value\":\"001\"},\"palette\":{\"name\":\"palette\",\"type\":\"id\",\"value\":\"0\"},\"siteName\":{},\"inp-content-name\":{\"type\":\"text\",\"text\":\"Web2b\"},\"inp-content-slogan\":{\"type\":\"text\",\"text\":\"Los mÃ¡s sabrosos.\"},\"inp-content-title-aboutus\":{},\"inp-content-aboutus\":{},\"inp-content-title-cta\":{},\"inp-content-cta\":{},\"inp-content-title-item-1\":{},\"inp-content-item-1\":{},\"inp-content-item-add-y\":{\"type\":\"text\",\"text\":\"y\"},\"inp-content-item-add-n\":{\"type\":\"text\",\"text\":\"n\"},\"inp-contact-email\":{},\"inp-contact-phone\":{},\"inp-contact-address\":{},\"inp-contact-schedule\":{},\"inp-contact-facebook\":{},\"inp-contact-twitter\":{}}}', 57),
('5c2ab60262271', '{\"respuestas\":{\"9\":{\"tipo\":3,\"respuesta\":\"Los mÃ¡s sabrosos.\",\"localizacion_en\":\"\"},\"21\":{\"tipo\":5,\"localizacion_en\":\"\"},\"22\":{\"tipo\":6,\"localizacion_en\":\"Restaurants, coffee shops and food\"}},\"selections\":{\"templateTypeId\":{\"type\":\"config\",\"value\":\"001\"},\"palette\":{\"name\":\"palette\",\"type\":\"id\",\"value\":\"0\"},\"siteName\":{},\"inp-content-name\":{\"type\":\"text\",\"text\":\"Web2b\"},\"inp-content-slogan\":{\"type\":\"text\",\"text\":\"Los mÃ¡s sabrosos.\"},\"inp-content-title-aboutus\":{},\"inp-content-aboutus\":{},\"inp-content-title-cta\":{},\"inp-content-cta\":{},\"inp-content-title-item-1\":{},\"inp-content-item-1\":{},\"inp-content-item-add-y\":{\"type\":\"text\",\"text\":\"y\"},\"inp-content-item-add-n\":{\"type\":\"text\",\"text\":\"n\"},\"inp-contact-email\":{},\"inp-contact-phone\":{},\"inp-contact-address\":{},\"inp-contact-schedule\":{},\"inp-contact-facebook\":{},\"inp-contact-twitter\":{}}}', 58),
('5c2ab60262271', '{\"respuestas\":{\"9\":{\"tipo\":3,\"respuesta\":\"Los mÃ¡s sabrosos.\",\"localizacion_en\":\"\"},\"21\":{\"tipo\":5,\"localizacion_en\":\"\"},\"22\":{\"tipo\":6,\"localizacion_en\":\"Restaurants, coffee shops and food\"}},\"selections\":{\"templateTypeId\":{\"type\":\"config\",\"value\":\"001\"},\"palette\":{\"name\":\"palette\",\"type\":\"id\",\"value\":\"0\"},\"siteName\":{},\"inp-content-name\":{\"type\":\"text\",\"text\":\"Web2b\"},\"inp-content-slogan\":{\"type\":\"text\",\"text\":\"Los mÃ¡s sabrosos.\"},\"inp-content-title-aboutus\":{},\"inp-content-aboutus\":{},\"inp-content-title-cta\":{},\"inp-content-cta\":{},\"inp-content-title-item-1\":{},\"inp-content-item-1\":{},\"inp-content-item-add-y\":{\"type\":\"text\",\"text\":\"y\"},\"inp-content-item-add-n\":{\"type\":\"text\",\"text\":\"n\"},\"inp-contact-email\":{},\"inp-contact-phone\":{},\"inp-contact-address\":{},\"inp-contact-schedule\":{},\"inp-contact-facebook\":{},\"inp-contact-twitter\":{}}}', 59),
('5c2bef736472e', '{\"respuestas\":{\"9\":{\"tipo\":3,\"respuesta\":\"Â¡Las mejores promociones!\",\"localizacion_en\":\"\"},\"21\":{\"tipo\":5,\"localizacion_en\":\"\"},\"22\":{\"tipo\":6,\"localizacion_en\":\"Restaurants, coffee shops and food\"}},\"selections\":{\"templateTypeId\":{\"type\":\"config\",\"value\":\"001\"},\"palette\":{\"name\":\"palette\",\"type\":\"id\",\"value\":\"0\"},\"siteName\":{},\"inp-content-name\":{\"type\":\"text\",\"text\":\"acf1\"},\"inp-content-slogan\":{\"type\":\"text\",\"text\":\"Â¡Las mejores promociones!\"},\"inp-content-title-aboutus\":{},\"inp-content-aboutus\":{},\"inp-content-title-cta\":{},\"inp-content-cta\":{},\"inp-content-title-item-1\":{},\"inp-content-item-1\":{},\"inp-content-item-add-y\":{\"type\":\"text\",\"text\":\"y\"},\"inp-content-item-add-n\":{\"type\":\"text\",\"text\":\"n\"},\"inp-contact-email\":{},\"inp-contact-phone\":{},\"inp-contact-address\":{},\"inp-contact-schedule\":{},\"inp-contact-facebook\":{},\"inp-contact-twitter\":{}}}', 60),
('5c2bf4f6838c8', '{\"respuestas\":{\"10\":{\"tipo\":3,\"respuesta\":\"Alta variedad de productos.\",\"localizacion_en\":\"\"},\"21\":{\"tipo\":5,\"localizacion_en\":\"\"},\"22\":{\"tipo\":6,\"localizacion_en\":\"Shops, stores, grocery store\"}},\"selections\":{\"templateTypeId\":{\"type\":\"config\",\"value\":\"001\"},\"palette\":{\"name\":\"palette\",\"type\":\"id\",\"value\":\"0\"},\"siteName\":{},\"inp-content-name\":{\"type\":\"text\",\"text\":\"acf1\"},\"inp-content-slogan\":{\"type\":\"text\",\"text\":\"Alta variedad de productos.\"},\"inp-content-title-aboutus\":{},\"inp-content-aboutus\":{},\"inp-content-title-cta\":{},\"inp-content-cta\":{},\"inp-content-title-item-1\":{},\"inp-content-item-1\":{},\"inp-content-item-add-y\":{\"type\":\"text\",\"text\":\"y\"},\"inp-content-item-add-n\":{\"type\":\"text\",\"text\":\"n\"},\"inp-contact-email\":{},\"inp-contact-phone\":{},\"inp-contact-address\":{},\"inp-contact-schedule\":{},\"inp-contact-facebook\":{},\"inp-contact-twitter\":{}}}', 61),
('5c369946623c5', '{\"respuestas\":{\"9\":{\"tipo\":3,\"respuesta\":\"Tenemos los mejores precios\",\"localizacion_en\":\"\"},\"21\":{\"tipo\":5,\"localizacion_en\":\"\"},\"22\":{\"tipo\":6,\"localizacion_en\":\"Shops, stores, grocery store\"}},\"selections\":{\"templateTypeId\":{\"type\":\"config\",\"value\":\"001\"},\"palette\":{\"name\":\"palette\",\"type\":\"id\",\"value\":\"0\"},\"siteName\":{},\"inp-content-name\":{\"type\":\"text\",\"text\":\"Web2b\"},\"inp-content-slogan\":{\"type\":\"text\",\"text\":\"Tenemos los mejores precios\"},\"inp-content-title-aboutus\":{},\"inp-content-aboutus\":{},\"inp-content-title-cta\":{},\"inp-content-cta\":{},\"inp-content-title-item-1\":{},\"inp-content-item-1\":{},\"inp-content-item-add-y\":{\"type\":\"text\",\"text\":\"y\"},\"inp-content-item-add-n\":{\"type\":\"text\",\"text\":\"n\"},\"inp-contact-email\":{},\"inp-contact-phone\":{},\"inp-contact-address\":{},\"inp-contact-schedule\":{},\"inp-contact-facebook\":{},\"inp-contact-twitter\":{}}}', 62),
('5c4e7c1c68f36', '{\"respuestas\":{\"9\":{\"tipo\":3,\"respuesta\":\"Los mejores precioa.\",\"localizacion_en\":\"\"},\"21\":{\"tipo\":5,\"localizacion_en\":\"\"},\"22\":{\"tipo\":6,\"localizacion_en\":\"Health and Wellness\"}},\"selections\":{\"templateTypeId\":{\"type\":\"config\",\"value\":\"001\"},\"palette\":{\"name\":\"palette\",\"type\":\"id\",\"value\":\"0\"},\"siteName\":{},\"inp-content-name\":{\"type\":\"text\",\"text\":\"Web2b\"},\"inp-content-slogan\":{\"type\":\"text\",\"text\":\"Los mejores precioa.\"},\"inp-content-title-aboutus\":{},\"inp-content-aboutus\":{},\"inp-content-title-cta\":{},\"inp-content-cta\":{},\"inp-content-title-item-1\":{},\"inp-content-item-1\":{},\"inp-content-item-add-y\":{\"type\":\"text\",\"text\":\"y\"},\"inp-content-item-add-n\":{\"type\":\"text\",\"text\":\"n\"},\"inp-contact-email\":{},\"inp-contact-phone\":{},\"inp-contact-address\":{},\"inp-contact-schedule\":{},\"inp-contact-facebook\":{},\"inp-contact-twitter\":{}}}', 63),
('5c6a40da281f7', '{\"respuestas\":{\"9\":{\"tipo\":3,\"respuesta\":\"Mejor precio a la mejor calidad.\",\"localizacion_en\":\"\"},\"21\":{\"tipo\":5,\"localizacion_en\":\"\"},\"22\":{\"tipo\":6,\"localizacion_en\":\"Shops, stores, grocery store\"}},\"selections\":{\"templateTypeId\":{\"type\":\"config\",\"value\":\"001\"},\"palette\":{\"name\":\"palette\",\"type\":\"id\",\"value\":\"0\"},\"inp-rem-content-aboutus\":{\"type\":\"text\",\"text\":\"Y\"},\"inp-rem-content-cta\":{\"type\":\"text\",\"text\":\"Y\"},\"siteName\":{},\"inp-content-name\":{\"type\":\"text\",\"text\":\"Web2b\"},\"inp-content-slogan\":{\"type\":\"text\",\"text\":\"Mejor precio a la mejor calidad.\"},\"inp-content-title-aboutus\":{},\"inp-content-aboutus\":{},\"inp-content-title-cta\":{},\"inp-content-cta\":{},\"inp-content-title-item-1\":{},\"inp-content-item-1\":{},\"inp-content-item-add-y\":{\"type\":\"text\",\"text\":\"y\"},\"inp-content-item-add-n\":{\"type\":\"text\",\"text\":\"n\"},\"inp-contact-email\":{},\"inp-contact-phone\":{},\"inp-contact-address\":{},\"inp-contact-schedule\":{},\"inp-contact-facebook\":{},\"inp-contact-twitter\":{}}}', 64),
('5c6a40da281f7', '{\"respuestas\":{\"9\":{\"tipo\":3,\"respuesta\":\"Mejor precio a la mejor calidad.\",\"localizacion_en\":\"\"},\"21\":{\"tipo\":5,\"localizacion_en\":\"\"},\"22\":{\"tipo\":6,\"localizacion_en\":\"Shops, stores, grocery store\"}},\"selections\":{\"templateTypeId\":{\"type\":\"config\",\"value\":\"001\"},\"palette\":{\"name\":\"palette\",\"type\":\"id\",\"value\":\"0\"},\"inp-rem-content-aboutus\":{\"type\":\"text\",\"text\":\"Y\"},\"inp-rem-content-cta\":{\"type\":\"text\",\"text\":\"Y\"},\"siteName\":{},\"inp-content-name\":{\"type\":\"text\",\"text\":\"Web2b\"},\"inp-content-slogan\":{\"type\":\"text\",\"text\":\"Mejor precio a la mejor calidad.\"},\"inp-content-title-aboutus\":{},\"inp-content-aboutus\":{},\"inp-content-title-cta\":{},\"inp-content-cta\":{},\"inp-content-title-item-1\":{},\"inp-content-item-1\":{},\"inp-content-item-add-y\":{\"type\":\"text\",\"text\":\"y\"},\"inp-content-item-add-n\":{\"type\":\"text\",\"text\":\"n\"},\"inp-contact-email\":{},\"inp-contact-phone\":{},\"inp-contact-address\":{},\"inp-contact-schedule\":{},\"inp-contact-facebook\":{},\"inp-contact-twitter\":{}}}', 65),
('5c6a40da281f7', '{\"respuestas\":{\"9\":{\"tipo\":3,\"respuesta\":\"Mejor precio a la mejor calidad.\",\"localizacion_en\":\"\"},\"21\":{\"tipo\":5,\"localizacion_en\":\"\"},\"22\":{\"tipo\":6,\"localizacion_en\":\"Shops, stores, grocery store\"}},\"selections\":{\"templateTypeId\":{\"type\":\"config\",\"value\":\"001\"},\"palette\":{\"name\":\"palette\",\"type\":\"id\",\"value\":\"0\"},\"inp-rem-content-aboutus\":{\"type\":\"text\",\"text\":\"Y\"},\"inp-rem-content-cta\":{\"type\":\"text\",\"text\":\"Y\"},\"siteName\":{},\"inp-content-name\":{\"type\":\"text\",\"text\":\"Web2b\"},\"inp-content-slogan\":{\"type\":\"text\",\"text\":\"Mejor precio a la mejor calidad.\"},\"inp-content-title-aboutus\":{},\"inp-content-aboutus\":{},\"inp-content-title-cta\":{},\"inp-content-cta\":{},\"inp-content-title-item-1\":{},\"inp-content-item-1\":{},\"inp-content-item-add-y\":{\"type\":\"text\",\"text\":\"y\"},\"inp-content-item-add-n\":{\"type\":\"text\",\"text\":\"n\"},\"inp-contact-email\":{},\"inp-contact-phone\":{},\"inp-contact-address\":{},\"inp-contact-schedule\":{},\"inp-contact-facebook\":{},\"inp-contact-twitter\":{}}}', 66),
('5c6a40da281f7', '{\"respuestas\":{\"9\":{\"tipo\":3,\"respuesta\":\"Mejor precio a la mejor calidad.\",\"localizacion_en\":\"\"},\"21\":{\"tipo\":5,\"localizacion_en\":\"\"},\"22\":{\"tipo\":6,\"localizacion_en\":\"Shops, stores, grocery store\"}},\"selections\":{\"templateTypeId\":{\"type\":\"config\",\"value\":\"001\"},\"palette\":{\"name\":\"palette\",\"type\":\"id\",\"value\":\"0\"},\"inp-rem-content-aboutus\":{\"type\":\"text\",\"text\":\"Y\"},\"inp-rem-content-cta\":{\"type\":\"text\",\"text\":\"Y\"},\"siteName\":{},\"inp-content-name\":{\"type\":\"text\",\"text\":\"Web2b\"},\"inp-content-slogan\":{\"type\":\"text\",\"text\":\"Mejor precio a la mejor calidad.\"},\"inp-content-title-aboutus\":{},\"inp-content-aboutus\":{},\"inp-content-title-cta\":{},\"inp-content-cta\":{},\"inp-content-title-item-1\":{},\"inp-content-item-1\":{},\"inp-content-item-add-y\":{\"type\":\"text\",\"text\":\"y\"},\"inp-content-item-add-n\":{\"type\":\"text\",\"text\":\"n\"},\"inp-contact-email\":{},\"inp-contact-phone\":{},\"inp-contact-address\":{},\"inp-contact-schedule\":{},\"inp-contact-facebook\":{},\"inp-contact-twitter\":{}}}', 67),
('5c6a40da281f7', '{\"respuestas\":{\"9\":{\"tipo\":3,\"respuesta\":\"Mejor precio a la mejor calidad.\",\"localizacion_en\":\"\"},\"21\":{\"tipo\":5,\"localizacion_en\":\"\"},\"22\":{\"tipo\":6,\"localizacion_en\":\"Shops, stores, grocery store\"}},\"selections\":{\"templateTypeId\":{\"type\":\"config\",\"value\":\"001\"},\"palette\":{\"name\":\"palette\",\"type\":\"id\",\"value\":\"0\"},\"inp-rem-content-aboutus\":{\"type\":\"text\",\"text\":\"Y\"},\"inp-rem-content-cta\":{\"type\":\"text\",\"text\":\"Y\"},\"siteName\":{},\"inp-content-name\":{\"type\":\"text\",\"text\":\"Web2b\"},\"inp-content-slogan\":{\"type\":\"text\",\"text\":\"Mejor precio a la mejor calidad.\"},\"inp-content-title-aboutus\":{},\"inp-content-aboutus\":{},\"inp-content-title-cta\":{},\"inp-content-cta\":{},\"inp-content-title-item-1\":{},\"inp-content-item-1\":{},\"inp-content-item-add-y\":{\"type\":\"text\",\"text\":\"y\"},\"inp-content-item-add-n\":{\"type\":\"text\",\"text\":\"n\"},\"inp-contact-email\":{},\"inp-contact-phone\":{},\"inp-contact-address\":{},\"inp-contact-schedule\":{},\"inp-contact-facebook\":{},\"inp-contact-twitter\":{}}}', 68),
('5c6a40da281f7', '{\"respuestas\":{\"9\":{\"tipo\":3,\"respuesta\":\"Mejor precio a la mejor calidad.\",\"localizacion_en\":\"\"},\"21\":{\"tipo\":5,\"localizacion_en\":\"\"},\"22\":{\"tipo\":6,\"localizacion_en\":\"Shops, stores, grocery store\"}},\"selections\":{\"templateTypeId\":{\"type\":\"config\",\"value\":\"001\"},\"palette\":{\"name\":\"palette\",\"type\":\"id\",\"value\":\"0\"},\"inp-rem-content-aboutus\":{\"type\":\"text\",\"text\":\"Y\"},\"inp-rem-content-cta\":{\"type\":\"text\",\"text\":\"Y\"},\"siteName\":{},\"inp-content-name\":{\"type\":\"text\",\"text\":\"Web2b\"},\"inp-content-slogan\":{\"type\":\"text\",\"text\":\"Mejor precio a la mejor calidad.\"},\"inp-content-title-aboutus\":{},\"inp-content-aboutus\":{},\"inp-content-title-cta\":{},\"inp-content-cta\":{},\"inp-content-title-item-1\":{},\"inp-content-item-1\":{},\"inp-content-item-add-y\":{\"type\":\"text\",\"text\":\"y\"},\"inp-content-item-add-n\":{\"type\":\"text\",\"text\":\"n\"},\"inp-contact-email\":{},\"inp-contact-phone\":{},\"inp-contact-address\":{},\"inp-contact-schedule\":{},\"inp-contact-facebook\":{},\"inp-contact-twitter\":{}}}', 69),
('5c6a40da281f7', '{\"respuestas\":{\"9\":{\"tipo\":3,\"respuesta\":\"Mejor precio a la mejor calidad.\",\"localizacion_en\":\"\"},\"21\":{\"tipo\":5,\"localizacion_en\":\"\"},\"22\":{\"tipo\":6,\"localizacion_en\":\"Shops, stores, grocery store\"}},\"selections\":{\"templateTypeId\":{\"type\":\"config\",\"value\":\"001\"},\"palette\":{\"name\":\"palette\",\"type\":\"id\",\"value\":\"0\"},\"inp-rem-content-aboutus\":{\"type\":\"text\",\"text\":\"Y\"},\"inp-rem-content-cta\":{\"type\":\"text\",\"text\":\"Y\"},\"siteName\":{},\"inp-content-name\":{\"type\":\"text\",\"text\":\"Web2b\"},\"inp-content-slogan\":{\"type\":\"text\",\"text\":\"Mejor precio a la mejor calidad.\"},\"inp-content-title-aboutus\":{},\"inp-content-aboutus\":{},\"inp-content-title-cta\":{},\"inp-content-cta\":{},\"inp-content-title-item-1\":{},\"inp-content-item-1\":{},\"inp-content-item-add-y\":{\"type\":\"text\",\"text\":\"y\"},\"inp-content-item-add-n\":{\"type\":\"text\",\"text\":\"n\"},\"inp-contact-email\":{},\"inp-contact-phone\":{},\"inp-contact-address\":{},\"inp-contact-schedule\":{},\"inp-contact-facebook\":{},\"inp-contact-twitter\":{}}}', 70),
('5c6a40da281f7', '{\"respuestas\":{\"9\":{\"tipo\":3,\"respuesta\":\"Mejor precio a la mejor calidad.\",\"localizacion_en\":\"\"},\"21\":{\"tipo\":5,\"localizacion_en\":\"\"},\"22\":{\"tipo\":6,\"localizacion_en\":\"Shops, stores, grocery store\"}},\"selections\":{\"templateTypeId\":{\"type\":\"config\",\"value\":\"001\"},\"palette\":{\"name\":\"palette\",\"type\":\"id\",\"value\":\"0\"},\"inp-rem-content-aboutus\":{\"type\":\"text\",\"text\":\"Y\"},\"inp-rem-content-cta\":{\"type\":\"text\",\"text\":\"Y\"},\"siteName\":{},\"inp-content-name\":{\"type\":\"text\",\"text\":\"Web2b\"},\"inp-content-slogan\":{\"type\":\"text\",\"text\":\"Mejor precio a la mejor calidad.\"},\"inp-content-title-aboutus\":{},\"inp-content-aboutus\":{},\"inp-content-title-cta\":{},\"inp-content-cta\":{},\"inp-content-title-item-1\":{},\"inp-content-item-1\":{},\"inp-content-item-add-y\":{\"type\":\"text\",\"text\":\"y\"},\"inp-content-item-add-n\":{\"type\":\"text\",\"text\":\"n\"},\"inp-contact-email\":{},\"inp-contact-phone\":{},\"inp-contact-address\":{},\"inp-contact-schedule\":{},\"inp-contact-facebook\":{},\"inp-contact-twitter\":{}}}', 71),
('5c6a40da281f7', '{\"respuestas\":{\"9\":{\"tipo\":3,\"respuesta\":\"Mejor precio a la mejor calidad.\",\"localizacion_en\":\"\"},\"21\":{\"tipo\":5,\"localizacion_en\":\"\"},\"22\":{\"tipo\":6,\"localizacion_en\":\"Shops, stores, grocery store\"}},\"selections\":{\"templateTypeId\":{\"type\":\"config\",\"value\":\"001\"},\"palette\":{\"name\":\"palette\",\"type\":\"id\",\"value\":\"0\"},\"inp-rem-content-aboutus\":{\"type\":\"text\",\"text\":\"Y\"},\"inp-rem-content-cta\":{\"type\":\"text\",\"text\":\"Y\"},\"siteName\":{},\"inp-content-name\":{\"type\":\"text\",\"text\":\"Web2b\"},\"inp-content-slogan\":{\"type\":\"text\",\"text\":\"Mejor precio a la mejor calidad.\"},\"inp-content-title-aboutus\":{},\"inp-content-aboutus\":{},\"inp-content-title-cta\":{},\"inp-content-cta\":{},\"inp-content-title-item-1\":{},\"inp-content-item-1\":{},\"inp-content-item-add-y\":{\"type\":\"text\",\"text\":\"y\"},\"inp-content-item-add-n\":{\"type\":\"text\",\"text\":\"n\"},\"inp-contact-email\":{},\"inp-contact-phone\":{},\"inp-contact-address\":{},\"inp-contact-schedule\":{},\"inp-contact-facebook\":{},\"inp-contact-twitter\":{}}}', 72),
('5c6a40da281f7', '{\"respuestas\":{\"9\":{\"tipo\":3,\"respuesta\":\"Mejor precio a la mejor calidad.\",\"localizacion_en\":\"\"},\"21\":{\"tipo\":5,\"localizacion_en\":\"\"},\"22\":{\"tipo\":6,\"localizacion_en\":\"Shops, stores, grocery store\"}},\"selections\":{\"templateTypeId\":{\"type\":\"config\",\"value\":\"001\"},\"palette\":{\"name\":\"palette\",\"type\":\"id\",\"value\":\"0\"},\"inp-rem-content-aboutus\":{\"type\":\"text\",\"text\":\"Y\"},\"inp-rem-content-cta\":{\"type\":\"text\",\"text\":\"Y\"},\"siteName\":{},\"inp-content-name\":{\"type\":\"text\",\"text\":\"Web2b\"},\"inp-content-slogan\":{\"type\":\"text\",\"text\":\"Mejor precio a la mejor calidad.\"},\"inp-content-title-aboutus\":{},\"inp-content-aboutus\":{},\"inp-content-title-cta\":{},\"inp-content-cta\":{},\"inp-content-title-item-1\":{},\"inp-content-item-1\":{},\"inp-content-item-add-y\":{\"type\":\"text\",\"text\":\"y\"},\"inp-content-item-add-n\":{\"type\":\"text\",\"text\":\"n\"},\"inp-contact-email\":{},\"inp-contact-phone\":{},\"inp-contact-address\":{},\"inp-contact-schedule\":{},\"inp-contact-facebook\":{},\"inp-contact-twitter\":{}}}', 73),
('5c6a40da281f7', '{\"respuestas\":{\"9\":{\"tipo\":3,\"respuesta\":\"Mejor precio a la mejor calidad.\",\"localizacion_en\":\"\"},\"21\":{\"tipo\":5,\"localizacion_en\":\"\"},\"22\":{\"tipo\":6,\"localizacion_en\":\"Shops, stores, grocery store\"}},\"selections\":{\"templateTypeId\":{\"type\":\"config\",\"value\":\"001\"},\"palette\":{\"name\":\"palette\",\"type\":\"id\",\"value\":\"0\"},\"inp-rem-content-aboutus\":{\"type\":\"text\",\"text\":\"Y\"},\"inp-rem-content-cta\":{\"type\":\"text\",\"text\":\"Y\"},\"siteName\":{},\"inp-content-name\":{\"type\":\"text\",\"text\":\"Web2b\"},\"inp-content-slogan\":{\"type\":\"text\",\"text\":\"Mejor precio a la mejor calidad.\"},\"inp-content-title-aboutus\":{},\"inp-content-aboutus\":{},\"inp-content-title-cta\":{},\"inp-content-cta\":{},\"inp-content-title-item-1\":{},\"inp-content-item-1\":{},\"inp-content-item-add-y\":{\"type\":\"text\",\"text\":\"y\"},\"inp-content-item-add-n\":{\"type\":\"text\",\"text\":\"n\"},\"inp-contact-email\":{},\"inp-contact-phone\":{},\"inp-contact-address\":{},\"inp-contact-schedule\":{},\"inp-contact-facebook\":{},\"inp-contact-twitter\":{}}}', 74),
('5c6a40da281f7', '{\"respuestas\":{\"9\":{\"tipo\":3,\"respuesta\":\"Mejor precio a la mejor calidad.\",\"localizacion_en\":\"\"},\"21\":{\"tipo\":5,\"localizacion_en\":\"\"},\"22\":{\"tipo\":6,\"localizacion_en\":\"Shops, stores, grocery store\"}},\"selections\":{\"templateTypeId\":{\"type\":\"config\",\"value\":\"001\"},\"palette\":{\"name\":\"palette\",\"type\":\"id\",\"value\":\"0\"},\"inp-rem-content-aboutus\":{\"type\":\"text\",\"text\":\"Y\"},\"inp-rem-content-cta\":{\"type\":\"text\",\"text\":\"Y\"},\"siteName\":{},\"inp-content-name\":{\"type\":\"text\",\"text\":\"Web2b\"},\"inp-content-slogan\":{\"type\":\"text\",\"text\":\"Mejor precio a la mejor calidad.\"},\"inp-content-title-aboutus\":{},\"inp-content-aboutus\":{},\"inp-content-title-cta\":{},\"inp-content-cta\":{},\"inp-content-title-item-1\":{},\"inp-content-item-1\":{},\"inp-content-item-add-y\":{\"type\":\"text\",\"text\":\"y\"},\"inp-content-item-add-n\":{\"type\":\"text\",\"text\":\"n\"},\"inp-contact-email\":{},\"inp-contact-phone\":{},\"inp-contact-address\":{},\"inp-contact-schedule\":{},\"inp-contact-facebook\":{},\"inp-contact-twitter\":{}}}', 75),
('5c6a419c7277b', '{\"respuestas\":{\"9\":{\"tipo\":3,\"respuesta\":\"Mejor precio a la mejor calidad.\",\"localizacion_en\":\"\"},\"21\":{\"tipo\":5,\"localizacion_en\":\"\"},\"22\":{\"tipo\":6,\"localizacion_en\":\"Shops, stores, grocery store\"}},\"selections\":{\"templateTypeId\":{\"type\":\"config\",\"value\":\"001\"},\"palette\":{\"name\":\"palette\",\"type\":\"id\",\"value\":\"0\"},\"inp-rem-content-aboutus\":{\"type\":\"text\",\"text\":\"Y\"},\"inp-rem-content-cta\":{\"type\":\"text\",\"text\":\"Y\"},\"siteName\":{},\"inp-content-name\":{\"type\":\"text\",\"text\":\"Web2b\"},\"inp-content-slogan\":{\"type\":\"text\",\"text\":\"Mejor precio a la mejor calidad.\"},\"inp-content-title-aboutus\":{},\"inp-content-aboutus\":{},\"inp-content-title-cta\":{},\"inp-content-cta\":{},\"inp-content-title-item-1\":{},\"inp-content-item-1\":{},\"inp-content-item-add-y\":{\"type\":\"text\",\"text\":\"y\"},\"inp-content-item-add-n\":{\"type\":\"text\",\"text\":\"n\"},\"inp-contact-email\":{},\"inp-contact-phone\":{},\"inp-contact-address\":{},\"inp-contact-schedule\":{},\"inp-contact-facebook\":{},\"inp-contact-twitter\":{}}}', 76);

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
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `opciones_respuesta`
--

INSERT INTO `opciones_respuesta` (`Id`, `tipo_pregunta`, `respuesta`) VALUES
(1, '5', 'Que mis clientes me encuentren#Tener clientes de otras regiones#Que mis clientes conozcan mi ubicación#Que mis clientes se comuniquen conmigo#Que mis clientes vean mis productos y/o servicios#Que mis clientes me compren en línea#Otra ¿Cuál?'),
(2, '6', '[categorias]'),
(3, '7', 'Producto#Servicio#Ambos'),
(4, '3', 'El precio más bajo#La mejor calidad#El mejor servicio#El mejor tiempo de entrega#La más alta variedad');

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
(9, '¿Qué te diferencia de tu competencia?', 3, 1, 1),
(10, '¿Qué hace tu empresa que los diferencia de su competencia?', 3, 1, 1),
(11, '¿Porqué consideras que tus clientes deben de ir a tu negocio?', 3, 1, 0),
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
-- Table structure for table `tour_respuestas`
--

DROP TABLE IF EXISTS `tour_respuestas`;
CREATE TABLE IF NOT EXISTS `tour_respuestas` (
  `ID` int(5) NOT NULL AUTO_INCREMENT,
  `PID` int(5) DEFAULT NULL,
  `RID` int(5) DEFAULT NULL,
  `TEXT` varchar(255) DEFAULT NULL,
  `LOC_EN` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=127 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tour_respuestas`
--

INSERT INTO `tour_respuestas` (`ID`, `PID`, `RID`, `TEXT`, `LOC_EN`) VALUES
(1, 6, NULL, 'Arte y Creatividad', NULL),
(2, NULL, 1, 'Arquitectura', 'Architecture'),
(3, NULL, 1, 'Ilustración', 'Illustrator'),
(4, NULL, 1, 'Diseño Gráfico', 'Graphic design'),
(5, NULL, 1, 'Manualidades', 'Crafts'),
(6, NULL, 1, 'Costura', 'Sewing'),
(7, NULL, 1, 'Pintura', 'Painting'),
(8, 6, NULL, 'Automoviles', NULL),
(9, NULL, 8, 'Autopartes', 'Car engine'),
(10, NULL, 8, 'Reparación', 'Car repairing'),
(11, NULL, 8, 'Detallado', 'Cars'),
(12, NULL, 8, 'Llantera', 'Tires'),
(13, 6, NULL, 'Bienes Raíces', NULL),
(14, NULL, 13, 'Venta de casas', 'Real state agent'),
(15, 6, NULL, 'Comercios', NULL),
(16, NULL, 15, 'Abarrotes', 'Groceries store'),
(17, NULL, 15, 'Ferretería', 'Tools'),
(18, NULL, 15, 'Carnicería', 'meatshop'),
(19, NULL, 15, 'Tienda de regalos', 'birthday gifts'),
(20, NULL, 15, 'Farmacia', 'medicine'),
(21, NULL, 15, 'Tienda de ropa', 'clothing store'),
(22, 6, NULL, 'Computación', NULL),
(23, NULL, 22, 'Venta de equipos de computo', 'computers'),
(24, NULL, 22, 'Reparación de equipos de computo', 'laptop'),
(25, NULL, 22, 'Clases de computación', 'laptops'),
(26, NULL, 22, 'Ciber Café', 'working'),
(27, 6, NULL, 'Deportes y recreación', NULL),
(28, NULL, 27, 'Escuela de deportes', 'sports soccer'),
(29, NULL, 27, 'Grupo deportivo', 'soccer team'),
(30, NULL, 27, 'Actividades deportivas', 'soccer game'),
(31, NULL, 27, 'Equipo deportivo', 'soccer match'),
(32, 6, NULL, 'Eventos y Banquetes', NULL),
(33, NULL, 32, 'Organización de eventos', 'party'),
(34, NULL, 32, 'Organización de bodas', 'wedding'),
(35, NULL, 32, 'Banquetes', 'banquet'),
(36, NULL, 32, 'Grupo musical', 'show'),
(37, NULL, 32, 'Florería', 'flowers'),
(38, NULL, 32, 'Decoración de eventos', 'event'),
(39, 6, NULL, 'Mascotas y Veterinarias', NULL),
(40, NULL, 39, 'Veterinaria', 'pets'),
(41, NULL, 39, 'Artículos para mascotas', 'pet accessories'),
(42, NULL, 39, 'Moda y Belleza', NULL),
(43, NULL, 39, 'Estética', 'hair color'),
(44, NULL, 39, 'Peluquería', 'man bun'),
(45, NULL, 39, 'Manicura', 'nails'),
(46, NULL, 39, 'Podología', 'feet'),
(47, NULL, 39, 'Aplicación de uñas', 'nail design'),
(48, NULL, 39, 'Maquillaje', 'makeup'),
(49, 6, NULL, 'Restaurantes y Cafeterías', NULL),
(50, NULL, 49, 'Restaurante', 'restaurant'),
(51, NULL, 49, 'Cafetería', 'coffee shop'),
(52, NULL, 49, 'Fonda', 'food stand'),
(53, NULL, 49, 'Cocina económica', 'mexican food'),
(54, NULL, 49, 'Restaurante mexicano', 'mexican food'),
(55, NULL, 49, 'Restaurante italiano', 'italian food'),
(56, NULL, 49, 'Sushi', 'sushi'),
(57, NULL, 49, 'Pizzería', 'pizza place'),
(58, NULL, 49, 'Pizzas a la leña', 'pizza'),
(59, NULL, 49, 'Postres', 'dessert'),
(60, NULL, 49, 'Heladería', 'icecream'),
(61, 6, NULL, 'Salud y Bienestar', NULL),
(62, NULL, 61, 'Dermatólogo', 'skincare'),
(63, NULL, 61, 'Nutriólogo', 'healthy meal'),
(64, NULL, 61, 'Piscológo', 'conversation'),
(65, NULL, 61, 'Médico general', 'doctor'),
(66, NULL, 61, 'Oculista', 'glasses'),
(67, NULL, 61, 'Otorrinolaringologo', 'hearing'),
(68, 6, NULL, 'Servicios Profesionales', NULL),
(69, NULL, 68, 'Abogados', 'law'),
(70, NULL, 68, 'Contadores', 'finance'),
(71, 6, NULL, 'Viajes', NULL),
(72, NULL, 71, 'Agencia de viajes', 'vacations'),
(73, 5, NULL, 'Qué encuentren mi establecimiento', NULL),
(74, NULL, 73, 'Qué mis clientes encuentren mi establecimiento', NULL),
(75, NULL, 73, 'Qué mis clientes potenciales encuentre mi establecimiento', NULL),
(76, NULL, 73, 'Qué mis clientes conozcan mis sucursales', NULL),
(77, NULL, 73, 'Qué mis clientes potenciales conozcan mis sucursales', NULL),
(78, NULL, 73, 'Qué mis clientes conozcan mi dirección', NULL),
(79, NULL, 73, 'Qué mis clientes potenciales sepan como llegar a mi negocio', NULL),
(80, 5, NULL, 'Qué sepan información sobre mi negocio', NULL),
(81, NULL, 80, 'Qué mis clientes conozcan mis horarios', NULL),
(82, NULL, 80, 'Qué mis clientes conozcan mis servicios', NULL),
(83, NULL, 80, 'Qué mis clientes conozcan mis productos', NULL),
(84, NULL, 80, 'Qué mis clientes conozcan mis precios', NULL),
(85, NULL, 80, 'Qué mis clientes conozcan mi catálogo', NULL),
(86, NULL, 80, 'Qué mis clientes conozcan mi trabajo', NULL),
(87, NULL, 80, 'Qué mis clientes conozcan mi menú', NULL),
(88, 5, NULL, 'Qué se comuniquen conmigo', NULL),
(89, NULL, 88, 'Qué mis clientes me escriban', NULL),
(90, NULL, 88, 'Qué mis clientes me marquen', NULL),
(91, NULL, 88, 'Qué mis clientes me sigan en Facebook', NULL),
(92, NULL, 88, 'Qué mis clientes me sigan en Twitter', NULL),
(93, NULL, 88, 'Qué mis clientes me manden un correo', NULL),
(94, NULL, 88, 'Qué mis clientes me manden un whatsapp', NULL),
(95, 5, NULL, 'Qué compren mis productos o servicios', NULL),
(97, NULL, 95, 'Qué mis clientes pregunten por mis productos', NULL),
(98, NULL, 95, 'Qué mis clientes pregunten por mis servicios', NULL),
(99, NULL, 95, 'Qué mis clientes sepan como comprarme', NULL),
(100, NULL, 95, 'Qué mis clientes sepan como contratarme', NULL),
(101, NULL, 95, 'Qué mis clientes sepan como contratar mis productos', NULL),
(102, 3, NULL, 'El precio más bajo', NULL),
(103, NULL, 102, 'El precio más bajo', NULL),
(104, NULL, 102, 'El mejor precio', NULL),
(105, NULL, 102, 'El precio más bajo con la mejor calidad', NULL),
(106, NULL, 102, 'El precio más bajo para tu negocio', NULL),
(107, NULL, 102, 'El mejor precio con el mejor servicio', NULL),
(108, 3, NULL, 'La mayor calidad', NULL),
(109, NULL, 108, 'La mayor calidad', NULL),
(110, NULL, 108, 'La mejor calidad', NULL),
(111, NULL, 108, 'La mayor calidad al mejor precio', NULL),
(112, NULL, 108, 'La mayor calidad con el menor tiempo de entrega', NULL),
(113, NULL, 108, 'La mayor calidad con el mejor servicio', NULL),
(114, 3, NULL, 'La mayor variedad', NULL),
(115, NULL, 114, 'La mayor variedad de productos', NULL),
(116, NULL, 114, 'La mayor variedad de servicios', NULL),
(117, NULL, 114, 'La mayor variedad y calidad', NULL),
(118, NULL, 114, 'La mayor variedad al mejor precio', NULL),
(119, 3, NULL, 'El mejor servicio', NULL),
(120, NULL, 119, 'El mejor servicio', NULL),
(121, NULL, 119, 'La mejor atención', NULL),
(122, NULL, 119, 'El mejor servicio al mejor precio', NULL),
(123, NULL, 119, 'El mejor servicio con la más alta calidad', NULL),
(124, 3, NULL, 'El mejor tiempo de entrega', NULL),
(125, NULL, 124, 'El mejor tiempo de entrega con el mejor precio', NULL),
(126, NULL, 124, 'El mejor tiempo de entrega con la mejor calidad', NULL);

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
('5b6d90f875a4e', 'contacto@algo.mx', '$2y$10$kgTd/CzoExfDC.Y5oEbJvej0LwbBwJJgbD687KX9ZHZDlFp6gWGiq'),
('5be9f4f783b95', 'ACF20181112@web2b.mx', '$2y$10$t95WxwMU5ik0EOEdJnT4k.DmdTjIv1RnmYu9sqKd2W.TGg5jOR1I6'),
('5c04a95ac76c1', 'ant1@gmail.com', '$2y$10$kqCjvf54MCWh9Xqk8NbiBO3OzvbVidHc4FUq2N.B1Ui0HdK2yJ0Ny'),
('5c2ab5c7f118d', 'acf1@web2b.mx', '$2y$10$AQ1NXFo6fhAnPmGruhbPg.RsvqZywbYUkLVjKBPBg2c.ZE8OTjX56'),
('5c2ab60262271', 'acf123@web2b.mx', '$2y$10$PGsKvdrOBKiRbsHQ6XWR1e1uYnBO8c0lJ0M5BA0O8wwNrIWUefXrW'),
('5c2bef736472e', 'acf20190101@web2b.mx', '$2y$10$DoBlc3rjOzPye76MJL0CYORKL6.gFyebXHOaKDzK.nvuo7DRgYxS2'),
('5c2bf4f6838c8', 'acf2019010102@web2b.mx', '$2y$10$HHzkLoPbFQgxIOIIg/H3JOCNJv6AF6/o62bdKY89gPn.07ZnLZ4wa'),
('5c369946623c5', 'acf1234@web2b.mx', '$2y$10$WFVwyP38YwClIYXBTQOztunvy2ET3UE9bn0W6mOK9c2tIkOd3N0gK'),
('5c4e7c1c68f36', 'acf12345@web2b.mx', '$2y$10$PNoTX1oSSt8q95bkX7WnWuufhrTJ8X0cbSKrTfAITKJ2s.43NAOya'),
('5c6a40da281f7', 'antonio1234@gmail.com', '$2y$10$ODV6vubSVMEy2HOryYSSQuUt3Ik0ximT5Qpk36t2Ot9iTD4racFpu'),
('5c6a419c7277b', 'antonio123@gmail.com', '$2y$10$cxKA0svD65/nF.obRPalg.l.vyXEn4OilkCwA.DqvLPDDdc28Qqey');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
