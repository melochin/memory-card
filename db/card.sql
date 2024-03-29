-- MySQL dump 10.13  Distrib 5.7.26, for Linux (x86_64)
--
-- Host: localhost    Database: card
-- ------------------------------------------------------
-- Server version	5.7.26-0ubuntu0.18.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `brochure`
--

DROP TABLE IF EXISTS `brochure`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `brochure` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `description` varchar(45) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `brochure`
--

LOCK TABLES `brochure` WRITE;
/*!40000 ALTER TABLE `brochure` DISABLE KEYS */;
INSERT INTO `brochure` VALUES (1,'1','1',1,'2015-12-08 10:44:00');
/*!40000 ALTER TABLE `brochure` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `card`
--

DROP TABLE IF EXISTS `card`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `card` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `brochure_id` int(11) DEFAULT NULL,
  `front` varchar(500) DEFAULT NULL,
  `back` varchar(1000) DEFAULT NULL,
  `remembers` int(11) DEFAULT '0',
  `forgets` int(11) DEFAULT '0',
  `memory_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_card_brochure_id_idx` (`brochure_id`),
  CONSTRAINT `fk_card_brochure_id` FOREIGN KEY (`brochure_id`) REFERENCES `brochure` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `card`
--

LOCK TABLES `card` WRITE;
/*!40000 ALTER TABLE `card` DISABLE KEYS */;
INSERT INTO `card` VALUES (1,1,'key','value',NULL,NULL,NULL),(2,1,'key','value',1,1,NULL),(3,1,'key','value',0,0,NULL),(4,1,'key','value',0,0,NULL);
/*!40000 ALTER TABLE `card` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-06-16 21:25:45
