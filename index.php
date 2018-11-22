<?php
session_start();
if (isset($_SESSION['test'])) {
  print $_SESSION['test'];
}
else {
  print 'no state';
}
$_SESSION['test'] = 'saved_state';
?>
