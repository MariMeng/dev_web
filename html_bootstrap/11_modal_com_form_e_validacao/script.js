var botaoModal = document.getElementById("btn-modal");
var modal = document.getElementById("exmodal");
var btn_enviar = document.getElementById("submitButton");
var campo_nome = document.getElementById("name");
var campo_senha = document.getElementById("senha");
var campo_email = document.getElementById("email");
var campo_mb = document.getElementsByClassName("nomeClass")
var preenchido = true;

btn_enviar.onclick = function(){
    preenchido = true;
    if(campo_nome.value === ""){
        campo_nome.classList.add("is-invalid");
        preenchido = false;
    }else{
        campo_nome.classList.remove("is-invalid");
        campo_nome.classList.add("is-valid");
    }

    if(campo_email.value === ""){
        campo_email.classList.add("is-invalid");
        preenchido= false;
    }else{
        campo_email.classList.remove("is-invalid");
        campo_email.classList.add("is-valid");
    }

    if(campo_senha.value.length < 6){
        campo_senha.classList.add("is-invalid");
        preenchido = false;
    }else{
        campo_senha.classList.remove("is-invalid");
        campo_senha.classList.add("is-valid");
    }

    if(preenchido){
        alert("Formulário preenchido com sucesso.");
        document.getElementById("registrationForm").reset();
      
    }
}