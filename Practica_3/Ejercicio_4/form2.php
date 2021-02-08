<?php

if (!($_GET['IEmail'] == "pepe") || !($_GET['IPassword'] == "hola")) {
    echo 'Usuario Incorrecto';
} else {
    echo 'Usuario correcto';
}
?>