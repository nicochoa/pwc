
function createModalMessage(text){
    let panel = document.createElement('div');
    let modalWindow = document.createElement('div');
    let message = document.createElement('p');
    message.innerText = text;
    let agree = document.createElement('button');
    agree.innerText = 'Aceptar'
    agree.addEventListener('click', ()=>{
        panel.remove();
    })
    let cancel = document.createElement('button');
    cancel.innerText = 'Cancelar'
    cancel.addEventListener('click', ()=>{
        panel.remove();
    })
    panel.setAttribute('class' , 'modal-panel');
    modalWindow.setAttribute('class' , 'modal-window');

    modalWindow.appendChild(message);
    modalWindow.appendChild(agree);
    modalWindow.appendChild(cancel);
    panel.appendChild(modalWindow);
    body.appendChild(panel)
}

function validate(user, pass) {
    if (user == "hola@gmail.com" && pass=="1234") {
        return "Desea suscribirse a nuestro newsletter?"
    }else{
        return "Ooopss! no estas registrado"
    }
}

loginBtn.addEventListener('click', ()=>{
    console.log(emailInput.value)
    let resultValidate = validate(emailInput.value, passwordInput.value)
    createModalMessage(resultValidate);
})