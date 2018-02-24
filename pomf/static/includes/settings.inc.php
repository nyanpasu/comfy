<?php

// PDO socket
// Or using socket would be even faster then 127.0.0.1 :3
define('POMF_DB_CONN', 'mysql:host=localhost;dbname=pomf');
// MySQL user and password
define('POMF_DB_USER', 'pomf');
define('POMF_DB_PASS', 'uguu');

// Root location of files
define('POMF_FILES_ROOT', '/data/pomf_files/');
// Maximum number of iterations while generating a new name
define('POMF_FILES_RETRIES', 15);
// URL to prepend to output (include trailing slash)
define('POMF_URL', 'https://comfy.moe/');

define('POMF_SCANNER_FIFO', '/var/run/scanner_fifo');

$doubledots = array_map('strrev', array(
	'tar.gz',
	'tar.bz',
	'tar.bz2',
	'tar.xz',
	'user.js'
));

$blacklisted_exts = array_map('strrev', array(
	'.html',
	'.htm',
	'.exe'
));

?>
