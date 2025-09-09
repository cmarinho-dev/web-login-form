document.getElementById("bt-send-form").addEventListener(
    'click', function() {
        signIn();
    }
);

// criar uma função assíncrona de communicação Front/Back 
// para isso eu começo a minha função utilizando o ASYNC
async function signIn() {  // <- criando a função
    const fd = new FormData(); // <- criando objeto "fd" da classe FormData.

    // o comando append, adiciona ao objeto fd um novo atributo.
    // a sintaxe é: objeto.append('atributo', valor);
    fd.append('username', document.getElementById('username').value);
    fd.append('password', document.getElementById('password').value);

    const sendFd = await fetch(
        '../../app/back.php',
        { // abre a inicialização do FETCH -- cabeçalho
            method: 'POST', // o envio da informação será por POST
            body: fd //será o objeto 'fd' da classe FormData
        } // fechei a inicialização do Fetch -- cabeçalho
    );
    const response = await sendFd.json();

    document.getElementById("back-response").innerHTML=response;
    console.log(response);
}