-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- 主机： localhost
-- 生成日期： 2020-01-13 10:11:48
-- 服务器版本： 5.7.26
-- PHP 版本： 7.3.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 数据库： `weixin`
--

-- --------------------------------------------------------

--
-- 表的结构 `student_list`
--

CREATE TABLE `student_list` (
  `id` int(11) UNSIGNED ZEROFILL NOT NULL,
  `time` int(11) NOT NULL,
  `province` varchar(32) DEFAULT NULL,
  `city` varchar(32) DEFAULT NULL,
  `district` varchar(32) DEFAULT NULL,
  `address` varchar(100) NOT NULL,
  `latitude` double NOT NULL,
  `longitude` double NOT NULL,
  `message` varchar(255) NOT NULL,
  `contact` varchar(100) NOT NULL,
  `type` enum('sell','buy') NOT NULL DEFAULT 'sell',
  `openid` char(28) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=gbk;

--
-- 转存表中的数据 `student_list`
--

INSERT INTO `student_list` (`id`, `time`, `province`, `city`, `district`, `address`, `latitude`, `longitude`, `message`, `contact`, `type`, `openid`) VALUES
(00000000001, 0, '北京市', '北京市', '昌平区', '昌平[地铁站]', 40.220572, 116.233626, '123', '33', 'buy', NULL),
(00000000002, 0, '北京市', '北京市', '昌平区', '昌平[地铁站]', 40.220572, 116.233626, '11', '11', 'buy', NULL),
(00000000003, 0, '北京市', '北京市', '昌平区', '鼓楼南街', 40.21985, 116.23354, '11', '11', 'buy', NULL),
(00000000004, 0, '北京市', '北京市', '昌平区', '昌平[地铁站]', 40.220572, 116.233626, '11', '11', 'sell', NULL),
(00000000005, 0, '北京市', '北京市', '昌平区', '昌平[地铁站]', 40.220572, 116.233626, 'qq', 'qq', 'sell', NULL),
(00000000006, 0, '北京市', '北京市', '昌平区', '北京市昌平区人民政府', 40.22077, 116.23128, 'a', 'a', 'sell', NULL),
(00000000007, 0, '北京市', '北京市', '昌平区', '北京市昌平区人民政府', 40.22077, 116.23128, '1', '1', 'sell', NULL),
(00000000008, 0, '北京市', '北京市', '昌平区', '必胜客(昌平店)', 40.22079, 116.2331, '2', '2', 'sell', NULL),
(00000000009, 0, '北京市', '北京市', '昌平区', '北京市昌平区人民政府', 40.22077, 116.23128, 'a', 'a', 'sell', NULL),
(00000000010, 0, '北京市', '北京市', '昌平区', '北京市昌平区人民政府', 40.22077, 116.23128, '2', '2', 'sell', NULL),
(00000000011, 0, '北京市', '北京市', '昌平区', '昌平[地铁站]', 40.220572, 116.233626, 's', 'a', 'sell', NULL),
(00000000012, 0, '北京市', '北京市', '昌平区', '昌平[地铁站]', 40.220572, 116.233626, 'a', 'a', 'sell', NULL),
(00000000013, 0, '北京市', '北京市', '昌平区', '北京市昌平区人民政府', 40.22077, 116.23128, 'h', 'h', 'buy', NULL),
(00000000014, 0, '北京市', '北京市', '昌平区', '如家酒店(体育馆店)', 40.21025, 116.22639, 'w', 'ww', 'sell', NULL),
(00000000015, 0, '北京市', '北京市', '昌平区', '高德软件有限公司(数据生产基地)', 40.20163, 116.25259, 'wwww', 'ww', 'buy', NULL),
(00000000016, 0, '北京市', '北京市', '昌平区', '北京市昌平区永安公园路(昌平区体育活动中心内,奥佳幼教东南230米)', 40.22077, 116.23128, 'qq', 'qq', 'buy', NULL),
(00000000017, 0, '北京市', '北京市', '昌平区', '北京悦荟万科广场', 40.212139, 116.23931, 'aa', 'aaaa', 'buy', NULL),
(00000000018, 0, '北京市', '北京市', '大兴区', '废品回收站', 39.68863, 116.360442, 'sdef', 'sdef', 'sell', NULL),
(00000000019, 0, '北京市', '北京市', '昌平区', '昌平[地铁站]', 40.220572, 116.233626, '1', '1', 'buy', NULL),
(00000000020, 0, '北京市', '北京市', '昌平区', '北京市昌平区人民政府', 40.22077, 116.23128, 'aa', 'aa', 'buy', NULL),
(00000000021, 0, '北京市', '北京市', '昌平区', '北京市昌平区人民政府', 40.22077, 116.23128, 't', 't', 'buy', NULL),
(00000000022, 0, '北京市', '北京市', '昌平区', '昌平[地铁站]', 40.220572, 116.233626, 'aa', 'aa', 'sell', NULL),
(00000000023, 0, '北京市', '北京市', '昌平区', '中共中国银行北京市分行党校', 40.22012, 116.2309, 'a', 'a', 'buy', NULL),
(00000000024, 0, '北京市', '北京市', '昌平区', 'CoCo都可(阳光鑫隆店)', 40.220348, 116.232403, '45', '55', 'sell', NULL),
(00000000025, 0, '北京市', '北京市', '昌平区', 'CoCo都可(阳光鑫隆店)', 40.220348, 116.232403, 'aaaa', 'aaaa', 'sell', NULL),
(00000000026, 0, '北京市', '北京市', '昌平区', '鸿泰商务酒店(北京昌平地铁站店)', 40.221287, 116.233217, 'a', 'a', 'buy', NULL),
(00000000027, 0, '北京市', '北京市', '昌平区', '昌平[地铁站]', 40.220572, 116.233626, 'aaaa', 'aaaaa', 'buy', NULL),
(00000000028, 0, '北京市', '北京市', '昌平区', 'CoCo都可(阳光鑫隆店)', 40.220348, 116.232403, 'aaa', 'aa', 'sell', NULL),
(00000000029, 0, '北京市', '北京市', '昌平区', 'CoCo都可(阳光鑫隆店)', 40.220348, 116.232403, 'aaaa', 'aaaa', 'buy', NULL),
(00000000030, 0, '北京市', '北京市', '昌平区', '北京市昌平区人民政府', 40.22077, 116.23128, 'aaa', 'aaa', 'buy', NULL),
(00000000031, 0, '北京市', '北京市', '昌平区', '昌平[地铁站]', 40.220572, 116.233626, 'aa', 'aaaa', 'sell', NULL),
(00000000032, 0, '北京市', '北京市', '昌平区', '北京市昌平区人民政府', 40.22077, 116.23128, '555', 'www', 'buy', NULL),
(00000000033, 0, '北京市', '北京市', '昌平区', '肯德基(昌平(新世纪商城)餐厅)', 40.218562, 116.233173, '778', '1', 'sell', NULL),
(00000000034, 0, '北京市', '北京市', '昌平区', 'CoCo都可(阳光鑫隆店)', 40.220348, 116.232403, '2323', '2323', 'buy', NULL),
(00000000035, 0, '北京市', '北京市', '昌平区', 'CoCo都可(阳光鑫隆店)', 40.220348, 116.232403, '2323', '2323', 'buy', NULL),
(00000000036, 0, '北京市', '北京市', '昌平区', '北京市昌平区人民政府', 40.22077, 116.23128, '123', '321', 'sell', NULL),
(00000000037, 0, '北京市', '北京市', '昌平区', '肯德基(昌平(新世纪商城)餐厅)', 40.218562, 116.233173, 'ss', 'ss', 'sell', NULL),
(00000000038, 0, '北京市', '北京市', '昌平区', '肯德基(昌平(新世纪商城)餐厅)', 40.218562, 116.233173, '123', '321', 'sell', NULL),
(00000000039, 0, '北京市', '北京市', '昌平区', '明洞烤肉·雪花黑牛专门店', 40.22084, 116.23295, 'z', 'z', 'sell', NULL),
(00000000040, 0, '北京市', '北京市', '昌平区', '北京市昌平区人民政府', 40.22077, 116.23128, 'aa', 'aa', 'sell', NULL),
(00000000041, 0, '北京市', '北京市', '昌平区', '北京市昌平区人民政府', 40.22077, 116.23128, 'aa', 'aa', 'sell', NULL),
(00000000042, 0, '北京市', '北京市', '昌平区', '7天优品酒店(北京昌平地铁站店)', 40.22028, 116.23392, '123', '321', 'sell', NULL),
(00000000043, 0, '北京市', '北京市', '昌平区', 'CoCo都可(阳光鑫隆店)', 40.220348, 116.232403, '11', '11', 'sell', NULL),
(00000000044, 0, '北京市', '北京市', '昌平区', '北京市昌平区人民政府', 40.22077, 116.23128, '发', '符范', 'sell', NULL);

-- --------------------------------------------------------

--
-- 表的结构 `token`
--

CREATE TABLE `token` (
  `id` int(11) NOT NULL,
  `ticket` varchar(500) NOT NULL,
  `access_token` varchar(500) NOT NULL,
  `start_time` varchar(20) NOT NULL,
  `expries_in` varchar(10) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转储表的索引
--

--
-- 表的索引 `student_list`
--
ALTER TABLE `student_list`
  ADD PRIMARY KEY (`id`);

--
-- 表的索引 `token`
--
ALTER TABLE `token`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `student_list`
--
ALTER TABLE `student_list`
  MODIFY `id` int(11) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;

--
-- 使用表AUTO_INCREMENT `token`
--
ALTER TABLE `token`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;