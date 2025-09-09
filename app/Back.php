<?php
$arrReturn = []; // criando um array vazio

// ma linha de baixo, estou criando a chave 'login'
//no meu $arrReturn, com o valor que está vindo por POST
// também na chave login
$arrReturn["username"] = $_POST['username'];
$arrReturn["password"] = $_POST['password'];


$signIn = new SignIn();
$arrReturn['msg'] = "response: " . $signIn->
    check($_POST['username'], $_POST['password']);


// MODIFICA O HEADER (CABEÇALHO) para que ele entenda
// que a informação deverá ir codificada no formato 'application/json'
header("Content-Type: application/json;charset=UTF-8");
echo json_encode($arrReturn);

?>