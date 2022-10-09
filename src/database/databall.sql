-- Volcando estructura de base de datos para databall
CREATE DATABASE IF NOT EXISTS `databall` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `databall`;

-- Volcando estructura para tabla databall.jugador
CREATE TABLE IF NOT EXISTS `jugador` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `edad` varchar(50) NOT NULL,
  `nacionalidad` varchar(50) NOT NULL,
  `altura` varchar(50) NOT NULL,
  `peso` varchar(50) NOT NULL,
  `liga` varchar(50) NOT NULL,
  `posicion` varchar(50) NOT NULL,
  `club` varchar(50) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla databall.jugador: ~0 rows (aproximadamente)
INSERT INTO `jugador` (`id`, `nombre`, `edad`, `nacionalidad`, `altura`, `peso`, `liga`, `posicion`, `club`) VALUES
	(2, 'CRISTIANO RONALDO DOS SANTOS AVEIRO', '37', 'PORTUGAL', '187', '81', 'Premier League', 'MO(I),A(IC)', 'MANCHESTER UNITED'),
	(3, 'LIONEL ANDRÉS MESSI CUCCITINI', '35', 'ARGENTINA', ' 170', '72', 'La Liga', 'MO,A(DC)', 'PARIS SAINT-GERMAIN'),
	(4, ' ZLATAN IBRAHIMOVIĆ', '41', 'SUECIA', '195', '92', 'Liga Italiana', 'A(C)', 'Milán');
