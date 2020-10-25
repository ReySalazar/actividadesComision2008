const inputUser = document.querySelector("#inputEmail");
const inputPassword = document.querySelector("#inputPassword");
const btnLogin = document.querySelector("#login");
const form = document.querySelector("#form");

btnLogin.addEventListener('mouseover', () => {
    const inputsRequiered = Array.from(document.querySelectorAll("#form input[required]"));
    inputsRequiered.every( e => validarInput(e));
    btnLogin.removeAttribute("disabled");
});

form.addEventListener("submit", (ev ) => {
    const input = ev.target;
    switch(input.type){
        case "email":
            validarInput(input, "email");
            break;
        case "password":
            validarInput(input,"");
   }
});

function validarInput(input){
    console.log("validar input...");
}

function alertUser(message){
    console.log("alert user");
}