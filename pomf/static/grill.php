<?php
$images = array(
		'img/01.png',
		'img/02.png',
		'img/03.png',
		'img/04.png',
		'img/05.png',
		'img/06.png',
		'img/07.png',
		'img/08.png',
		'img/09.png',
		'img/10.png',
		'img/11.png',
		'img/12.png',
		'img/13.png',
		'img/14.png',
		'img/15.png',
		'img/16.png',
		'img/17.png',
		'img/18.png',
		'img/19.png',
		'img/20.png',
		'img/21.png',
		'img/22.png',
		'img/23.png',
		'img/24.png',
		'img/25.png',
		'img/26.png',
		'img/27.png'
);
if (headers_sent() === false) {
	header('Location: ' . $images[array_rand($images)], true, 303);
}
?>
