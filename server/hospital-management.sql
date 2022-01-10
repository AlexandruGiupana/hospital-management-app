-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 08, 2022 at 03:10 PM
-- Server version: 10.4.20-MariaDB
-- PHP Version: 8.0.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hospital-management`
--

-- --------------------------------------------------------

--
-- Table structure for table `appointments`
--

CREATE TABLE `appointments` (
  `id` int(11) NOT NULL,
  `patient_id` int(11) DEFAULT NULL,
  `service_rep_id` int(11) NOT NULL,
  `hospital_room_id` int(11) NOT NULL,
  `additional_information` varchar(255) DEFAULT NULL,
  `start_date` varchar(255) DEFAULT NULL,
  `end_date` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `appointments`
--

INSERT INTO `appointments` (`id`, `patient_id`, `service_rep_id`, `hospital_room_id`, `additional_information`, `start_date`, `end_date`) VALUES
(124, NULL, 29, 8, 'asdff', '2022-01-08T12:30:00.000Z', '2022-01-08T13:00:00.000Z'),
(125, NULL, 29, 8, 'assd', '2022-01-08T13:30:00.000Z', '2022-01-08T14:00:00.000Z'),
(126, NULL, 29, 7, 'asd', '2022-01-08T13:16:00.000Z', '2022-01-08T13:30:00.000Z');

-- --------------------------------------------------------

--
-- Table structure for table `departments`
--

CREATE TABLE `departments` (
  `id` int(11) NOT NULL,
  `manager_id` int(11) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `departments_repartition`
--

CREATE TABLE `departments_repartition` (
  `department_id` int(11) NOT NULL,
  `employee_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `doctors`
--

CREATE TABLE `doctors` (
  `user_id` int(11) NOT NULL,
  `job_title` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `doctors`
--

INSERT INTO `doctors` (`user_id`, `job_title`) VALUES
(10, 'medic stomatolog'),
(11, 'medic de familie'),
(15, 'test'),
(23, 'dsasv'),
(24, 'adsfdsfg'),
(25, 'sdafsdf'),
(26, 'afdssdaf'),
(27, 'sdafsdf'),
(28, 'asd'),
(29, 'hello');

-- --------------------------------------------------------

--
-- Table structure for table `health_services`
--

CREATE TABLE `health_services` (
  `id` int(11) NOT NULL,
  `service_name` varchar(255) NOT NULL,
  `price` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `health_services`
--

INSERT INTO `health_services` (`id`, `service_name`, `price`) VALUES
(21, 'Operatie 1', 100),
(22, 'Operatie 2', 150),
(23, 'Operatie 3', 200),
(24, 'Operatie 4', 250),
(25, 'Operatie 5', 300),
(28, 'Operartie 7', 400),
(29, 'ajbdsfiudsbgaaaaaa', 200),
(32, 'adsjnfadsngvanvi', 855);

-- --------------------------------------------------------

--
-- Table structure for table `health_services_repartition`
--

CREATE TABLE `health_services_repartition` (
  `id` int(11) NOT NULL,
  `health_service_id` int(11) DEFAULT NULL,
  `doctor_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `health_services_repartition`
--

INSERT INTO `health_services_repartition` (`id`, `health_service_id`, `doctor_id`) VALUES
(26, 21, 10),
(27, 22, 10),
(28, 23, 10),
(29, 21, 11),
(30, 24, 11),
(31, 29, 11);

-- --------------------------------------------------------

--
-- Table structure for table `hospital_rooms`
--

CREATE TABLE `hospital_rooms` (
  `id` int(11) NOT NULL,
  `type` varchar(255) NOT NULL,
  `room_number` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `hospital_rooms`
--

INSERT INTO `hospital_rooms` (`id`, `type`, `room_number`) VALUES
(7, 'Cabineta', '100'),
(8, 'Cabinet', '150'),
(9, 'Cabinet', '200'),
(13, 'Cabinet', '300');

-- --------------------------------------------------------

--
-- Table structure for table `medical_documents`
--

CREATE TABLE `medical_documents` (
  `id` int(11) NOT NULL,
  `doctor_id` int(11) DEFAULT NULL,
  `patient_id` int(11) DEFAULT NULL,
  `document_type` varchar(255) DEFAULT NULL,
  `document_content` varchar(3000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `medical_documents`
--

INSERT INTO `medical_documents` (`id`, `doctor_id`, `patient_id`, `document_type`, `document_content`) VALUES
(1, 10, 15, 'Prospect', 'Pastilele se iau seara dupa masa'),
(2, 10, 16, 'Recomandare', 'Nu faceti miscare dupa operatie');

-- --------------------------------------------------------

--
-- Table structure for table `news`
--

CREATE TABLE `news` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `content` varchar(10000) DEFAULT NULL,
  `news_date` datetime DEFAULT NULL,
  `type` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `news`
--

INSERT INTO `news` (`id`, `title`, `content`, `news_date`, `type`) VALUES
(1, 'Update Decembrie 2021', 'In data de 08.12.2021 a avut loc un update minor referitor la functionalitatile oferite de Mediplus. Update-ul este unul minor, prin urmare marea majoritatea a noutatilor se refera la rezolvarea de unele bug-uri.', '2021-12-08 19:27:11', 'UPDATE'),
(2, 'Actualizare GDPR 2021', 'In luna octombrie a anului 2021 au intrat in vigoare noi reguli referitoare la General Data Protection Regulation - pe scurt GDPR. Noile reglementari sunt in mare doar actualizari ale regulilor deja existente. Pentru a citi mai multe va rugam accesati siteuri guvernamentale oficiale', '2021-10-10 19:20:11', 'INFO'),
(3, 'Bun venit, spitalul Pelican', 'Dragi utilizatori si clienti ai Mediplus, membri in comunitatea MediPlus, suntem bucurosi sa va anuntam ca incepand cu 1 decembrie 2021, Spitalul Pelican din Oradea a ales sa foloseasca serviciile oferite de Mediplus. Îi urăm un bun venit în comunitatea noastră.', '2021-12-01 14:20:11', 'INFO');

-- --------------------------------------------------------

--
-- Table structure for table `test`
--

CREATE TABLE `test` (
  `id` int(11) NOT NULL,
  `field` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `test`
--

INSERT INTO `test` (`id`, `field`) VALUES
(1, 'message from the database'),
(2, 'this is another message from the databse');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `account_type` varchar(255) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `county` varchar(255) DEFAULT NULL,
  `postal_code` varchar(255) DEFAULT NULL,
  `phone_number` varchar(15) DEFAULT NULL,
  `cnp` varchar(13) NOT NULL,
  `additional_information` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `account_type`, `first_name`, `last_name`, `address`, `city`, `county`, `postal_code`, `phone_number`, `cnp`, `additional_information`) VALUES
(10, 'pop_popescu@gmail.com', '$2a$10$DRzRR4xhlcFhzlDUc020quTe6ZSDB8aHfvBgS62eqlMO6bzE4sxw6', 'doctor', 'Pop', 'Popescu', 'Vasile Parvan nr. 4', 'Timisoara', 'Timis', '300223', '07236515454', '5001005485451', NULL),
(11, 'ion_ionescu@gmail.com', '$2a$10$lKNmWfcf6BuLsj5Dcc6JAu.9BUVo5EGDTNZt1./.FO9SkalsfVub.', 'doctor', 'Ion', 'Ionescu', 'Vasile Parvan nr. 4', 'Timisoara', 'Timis', '300223', '0256887550', '5001005415145', 'asdf'),
(15, 'george_georgescu@gmail.com', '$2a$10$YCXB41GGqHy1VVgvaegOoejVPPw5mJQoQzm6eR5GegO18wBsvLBRq', 'doctor', 'George', 'Georgescu', 'Vasile Parvan nr. 4', 'Timisoara', 'Timis', '300223', '0256887556', '5001005415135', NULL),
(16, 'mircea.patcu@gmail.com', '$2a$10$DRzRR4xhlcFhzlDUc020quTe6ZSDB8aHfvBgS62eqlMO6bzE4sxw6', 'patient', 'Mircea', 'Patcu', 'Calea Victoriei nr.5', 'Timisoara', 'Timis', '455477', '0728111235', '6211102016393', NULL),
(18, 'alex@gmail.com', '$2a$10$vTGDOoext7fp2EiBhrbsCO0LQUcLoPIgs7yQj5AVwp3IcIOS1I21a', 'manager', 'Alex', 'Alex', 'Vasile Parvan nr. 4', 'Timisoara', 'Timis', '300223', '0753268744', '5001558982111', NULL),
(22, 'alex2@gmail.com', '$2a$10$hZsHY9/lR0tS3Uwait4ZcOo0Zmc8i.FDMWyp0UjuVk1Wb7IlnGZWC', 'manager', 'alex', 'alex', 'sdfsdf', '', '', '', '5465454', '5001558982110', ''),
(23, 'asdf@addsf.asdf', '$2a$10$zDZQL8bIR7wGmFUTcBvhT.x6q96iV3IxZa9nTvoyXZnZwMpHYowt6', 'doctor', 'sdaf', 'asdf', NULL, NULL, NULL, NULL, NULL, '54654', NULL),
(24, 'paul@gmail.com', '$2a$10$D01UWEdJtgWi0BTZmDGpzOU8ufhyFh6s5PHtZwjgvv5QMzawcrjLC', 'doctor', 'paul', 'paul', NULL, NULL, NULL, NULL, NULL, '5411011545', NULL),
(25, 'aaa@gmail.com', '$2a$10$bnB/YwWtcWCXD9uanophaOXw/ScfJhQ8QinM.6jdvhi47/6aZPZo.', 'doctor', 'aaa', 'aaa', NULL, NULL, NULL, NULL, NULL, '5464564654', NULL),
(26, 'bbb@b.b', '$2a$10$NmSBMj2z3c6uKFTfnHHiLOtncuRlJ5GXo9zBAYZ9sSOqHRndAEaWW', 'doctor', 'alex', 'alex', 'SDAFASDF', 'fdsg', 'DSFASD', '233', '04522151', '545454545', 'gsrgserg'),
(27, 'qwe@gmail.com', '$2a$10$TstEaTaeZqJH4vhoOjf.8ueLsCfK/LXK61pUS2pr0mATeipBWZ/Ne', 'doctor', 'alex', 'alex', 'adsfsdf', '', '', '', '0454566', '454564546465', 'esafefeaf'),
(28, 'rgsegr@saf.asd', '$2a$10$n6ITJjGo8H3CHdgJCC85Ruv.ciKhSbDoLPTKw0kQaePf4pAOnsl7m', 'patient', 'adsf', 'adsfasd', NULL, NULL, NULL, NULL, NULL, '3242315315342', NULL),
(29, 'patient@patient.com', '$2a$10$.uhNwHHY0x42v9mWxUHaGOgyIXBhJKz/HUFk.RBa1sH.YulxeTPF6', 'patient', 'patient', 'patient', NULL, NULL, NULL, NULL, NULL, '8778992009188', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `ward`
--

CREATE TABLE `ward` (
  `id` int(11) NOT NULL,
  `capacity` int(11) DEFAULT NULL,
  `occupancy` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `ward`
--

INSERT INTO `ward` (`id`, `capacity`, `occupancy`) VALUES
(1, 10, 0),
(2, 12, 0);

-- --------------------------------------------------------

--
-- Table structure for table `ward_repartition`
--

CREATE TABLE `ward_repartition` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `ward_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `ward_repartition`
--

INSERT INTO `ward_repartition` (`id`, `user_id`, `ward_id`) VALUES
(7, 29, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `appointments`
--
ALTER TABLE `appointments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `patient_id` (`patient_id`),
  ADD KEY `hospital_room_id` (`hospital_room_id`),
  ADD KEY `service_rep_id` (`service_rep_id`);

--
-- Indexes for table `departments`
--
ALTER TABLE `departments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `departments_repartition`
--
ALTER TABLE `departments_repartition`
  ADD PRIMARY KEY (`department_id`,`employee_id`),
  ADD KEY `employee_id` (`employee_id`);

--
-- Indexes for table `doctors`
--
ALTER TABLE `doctors`
  ADD PRIMARY KEY (`user_id`);

--
-- Indexes for table `health_services`
--
ALTER TABLE `health_services`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `health_services_repartition`
--
ALTER TABLE `health_services_repartition`
  ADD PRIMARY KEY (`id`),
  ADD KEY `doctor_id` (`doctor_id`),
  ADD KEY `health_service_id` (`health_service_id`);

--
-- Indexes for table `hospital_rooms`
--
ALTER TABLE `hospital_rooms`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `medical_documents`
--
ALTER TABLE `medical_documents`
  ADD PRIMARY KEY (`id`),
  ADD KEY `doctor_id` (`doctor_id`),
  ADD KEY `patient_id` (`patient_id`);

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `phone_number` (`phone_number`);

--
-- Indexes for table `ward`
--
ALTER TABLE `ward`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ward_repartition`
--
ALTER TABLE `ward_repartition`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `ward_id` (`ward_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `appointments`
--
ALTER TABLE `appointments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=127;

--
-- AUTO_INCREMENT for table `departments`
--
ALTER TABLE `departments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `health_services`
--
ALTER TABLE `health_services`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT for table `health_services_repartition`
--
ALTER TABLE `health_services_repartition`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT for table `hospital_rooms`
--
ALTER TABLE `hospital_rooms`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `medical_documents`
--
ALTER TABLE `medical_documents`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `news`
--
ALTER TABLE `news`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT for table `ward`
--
ALTER TABLE `ward`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `ward_repartition`
--
ALTER TABLE `ward_repartition`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `appointments`
--
ALTER TABLE `appointments`
  ADD CONSTRAINT `appointments_ibfk_1` FOREIGN KEY (`patient_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `appointments_ibfk_4` FOREIGN KEY (`hospital_room_id`) REFERENCES `hospital_rooms` (`id`),
  ADD CONSTRAINT `appointments_ibfk_5` FOREIGN KEY (`service_rep_id`) REFERENCES `health_services_repartition` (`id`),
  ADD CONSTRAINT `appointments_ibfk_6` FOREIGN KEY (`service_rep_id`) REFERENCES `health_services_repartition` (`id`),
  ADD CONSTRAINT `appointments_ibfk_7` FOREIGN KEY (`service_rep_id`) REFERENCES `health_services_repartition` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `departments`
--
ALTER TABLE `departments`
  ADD CONSTRAINT `departments_ibfk_1` FOREIGN KEY (`id`) REFERENCES `doctors` (`user_id`);

--
-- Constraints for table `departments_repartition`
--
ALTER TABLE `departments_repartition`
  ADD CONSTRAINT `departments_repartition_ibfk_1` FOREIGN KEY (`employee_id`) REFERENCES `doctors` (`user_id`),
  ADD CONSTRAINT `departments_repartition_ibfk_2` FOREIGN KEY (`department_id`) REFERENCES `departments` (`id`);

--
-- Constraints for table `doctors`
--
ALTER TABLE `doctors`
  ADD CONSTRAINT `doctors_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `health_services_repartition`
--
ALTER TABLE `health_services_repartition`
  ADD CONSTRAINT `health_services_repartition_ibfk_1` FOREIGN KEY (`doctor_id`) REFERENCES `doctors` (`user_id`),
  ADD CONSTRAINT `health_services_repartition_ibfk_2` FOREIGN KEY (`health_service_id`) REFERENCES `health_services` (`id`);

--
-- Constraints for table `medical_documents`
--
ALTER TABLE `medical_documents`
  ADD CONSTRAINT `medical_documents_ibfk_1` FOREIGN KEY (`doctor_id`) REFERENCES `doctors` (`user_id`),
  ADD CONSTRAINT `medical_documents_ibfk_2` FOREIGN KEY (`patient_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `ward_repartition`
--
ALTER TABLE `ward_repartition`
  ADD CONSTRAINT `ward_repartition_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `ward_repartition_ibfk_2` FOREIGN KEY (`ward_id`) REFERENCES `ward` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
