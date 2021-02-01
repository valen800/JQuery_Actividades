<?php
    $errors = array();
    $data = array();

    if (isset($_GET['email'])) {
        $errors['email'] = "email is null";
    }

    if (isset($_GET['password'])) {
        $errors['password'] = "password is null";
    }

    if (!($_GET['email'] == "pepe") || !($_GET['password'] == "hola")) {
        $data['success'] = false;
        $errors['error'] = "email or password is wrong ";
        $data['errors']  = $errors;  
    } else {
        $data['success'] = true;
        $data['message'] = 'Login Successful';
    }

    echo json_encode($data);
?>