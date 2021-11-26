-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 26, 2021 at 03:47 PM
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
  `patient_id` int(11) NOT NULL,
  `doctor_id` int(11) NOT NULL,
  `service_id` int(11) NOT NULL,
  `hospital_room_id` int(11) NOT NULL,
  `additional_information` varchar(255) DEFAULT NULL,
  `start_date` varchar(255) DEFAULT NULL,
  `end_date` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `appointments`
--

INSERT INTO `appointments` (`id`, `patient_id`, `doctor_id`, `service_id`, `hospital_room_id`, `additional_information`, `start_date`, `end_date`) VALUES
(1, 15, 11, 2, 1, 'additional_information', '2021-11-23T11:00', '2021-11-23T11:30'),
(2, 15, 11, 2, 1, 'additional_information', '2021-11-23T12:30', '2021-11-23T13:30');

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
(11, 'medic de familie');

-- --------------------------------------------------------

--
-- Table structure for table `health_services_repartition`
--

CREATE TABLE `health_services_repartition` (
  `provided_health_service_id` int(11) NOT NULL,
  `doctor_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `health_services_repartition`
--

INSERT INTO `health_services_repartition` (`provided_health_service_id`, `doctor_id`) VALUES
(2, 10),
(2, 11);

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
(1, 'cabinet', '15'),
(2, 'cabinet', '101'),
(3, 'cabinet', '102');

-- --------------------------------------------------------

--
-- Table structure for table `services`
--

CREATE TABLE `services` (
  `id` int(11) NOT NULL,
  `service_name` varchar(255) NOT NULL,
  `price` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `services`
--

INSERT INTO `services` (`id`, `service_name`, `price`) VALUES
(2, 'Consult medical', 50),
(3, 'Consult oftalmologic', 50);

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
  `address` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `county` varchar(255) NOT NULL,
  `postal_code` varchar(255) NOT NULL,
  `phone_number` varchar(15) NOT NULL,
  `cnp` varchar(13) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `account_type`, `first_name`, `last_name`, `address`, `city`, `county`, `postal_code`, `phone_number`, `cnp`) VALUES
(10, 'pop_popescu@gmail.com', '$2a$10$DRzRR4xhlcFhzlDUc020quTe6ZSDB8aHfvBgS62eqlMO6bzE4sxw6', 'doctor', 'Pop', 'Popescu', 'Vasile Parvan nr. 4', 'Timisoara', 'Timis', '300223', '07236515454', '5001005485451'),
(11, 'ion_ionescu@gmail.com', '$2a$10$lKNmWfcf6BuLsj5Dcc6JAu.9BUVo5EGDTNZt1./.FO9SkalsfVub.', 'doctor', 'Ion', 'Ionescu', 'Vasile Parvan nr. 4', 'Timisoara', 'Timis', '300223', '025688755', '5001005415145'),
(15, 'george_georgescu@gmail.com', '$2a$10$YCXB41GGqHy1VVgvaegOoejVPPw5mJQoQzm6eR5GegO18wBsvLBRq', 'patient', 'George', 'Georgescu', 'Vasile Parvan nr. 4', 'Timisoara', 'Timis', '300223', '0256887556', '5001005415135');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `appointments`
--
ALTER TABLE `appointments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `patient_id` (`patient_id`),
  ADD KEY `doctor_id` (`doctor_id`),
  ADD KEY `service_id` (`service_id`),
  ADD KEY `hospital_room_id` (`hospital_room_id`);

--
-- Indexes for table `doctors`
--
ALTER TABLE `doctors`
  ADD PRIMARY KEY (`user_id`);

--
-- Indexes for table `health_services_repartition`
--
ALTER TABLE `health_services_repartition`
  ADD PRIMARY KEY (`provided_health_service_id`,`doctor_id`),
  ADD KEY `doctor_id` (`doctor_id`);

--
-- Indexes for table `hospital_rooms`
--
ALTER TABLE `hospital_rooms`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `phone_number` (`phone_number`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `appointments`
--
ALTER TABLE `appointments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `hospital_rooms`
--
ALTER TABLE `hospital_rooms`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `services`
--
ALTER TABLE `services`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `appointments`
--
ALTER TABLE `appointments`
  ADD CONSTRAINT `appointments_ibfk_1` FOREIGN KEY (`patient_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `appointments_ibfk_2` FOREIGN KEY (`doctor_id`) REFERENCES `doctors` (`user_id`),
  ADD CONSTRAINT `appointments_ibfk_3` FOREIGN KEY (`service_id`) REFERENCES `services` (`id`),
  ADD CONSTRAINT `appointments_ibfk_4` FOREIGN KEY (`hospital_room_id`) REFERENCES `hospital_rooms` (`id`);

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
  ADD CONSTRAINT `health_services_repartition_ibfk_2` FOREIGN KEY (`provided_health_service_id`) REFERENCES `services` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
