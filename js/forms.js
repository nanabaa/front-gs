function checkInputs(){

    let nome = document.querySelector('#nome').value
    let email = document.querySelector('#email').value
    let telefone = document.querySelector('#telefone').value
    let mensagem = document.querySelector('#mensagem').value
    usuario = email.substring(0, email.indexOf("@"));
    dominio = email.substring(email.indexOf("@")+ 1, email.length);
    
    if (!nome || !email || !telefone || !mensagem){
        alert("Preencha todos os campos!")
        
    }
    else if(telefone.length != 11 || !parseInt(telefone)){
     alert   ("telefone inválido")
    }
    else if ((usuario.length <1) ||
            (dominio.length <3) ||
            (email.indexOf("@")== -1)||
            (usuario.search("@")!=-1) ||
            (dominio.search("@")!=-1) ||
            (usuario.search(" ")!=-1) ||
            (dominio.search(" ")!=-1) ||
            (dominio.search(".")==-1) ||
            (dominio.indexOf(".") <=1)||
            (dominio.lastIndexOf(".") > dominio.length - 1)) {
        alert("E-mail inválido");
        }
    else{
        alert("Mensagem enviada!")
    }
    
}
