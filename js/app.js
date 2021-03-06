
// CONSTANTES
const cardsContainer = document.getElementById('cards-container');
const addCard = document.getElementById('add');
const modalAdd = document.getElementById('modalAdd');
const botonCerrar = document.getElementById('btnclose');
const botonAgregar = document.getElementById('btnAgregar');
const botonCancelar = document.getElementById('btnCancelar');

//LISTENER PARA MOSTRAR MODAL
addCard.addEventListener('click', agregar);

function agregar(e){
    e.preventDefault();
    modalAdd.style.display = 'grid';
}

//LISTENER PARA CERRAR O CANCELAR 
botonCerrar.addEventListener('click', cerrar);
botonCancelar.addEventListener('click', cerrar);

function cerrar(e){
    e.preventDefault();
    modalAdd.style.display = 'none';
}

// CONSTANTES
let inputName = document.getElementById('name');
let inputLastName = document.getElementById('lastname');
let inputEmail = document.getElementById('email');
let inputPhone = document.getElementById('phone');
let inputCountry = document.getElementById('country')
let inputImage = document.getElementById('img');
let textAreaInfo =document.getElementById('info');

botonAgregar.addEventListener('click', mostrar);

function mostrar(e){
    e.preventDefault();
    let dato1 = inputName.value;
    let dato2 = inputLastName.value;
    let dato3 = inputEmail.value;
    let dato4 = inputPhone.value;
    let dato5 = inputCountry.value;
    let dato6 = inputImage.value;
    let dato7 = textAreaInfo.value;
    if(dato1=='' || dato2=='' || dato3=='' || dato4=='' || dato5=='0' || dato6=='' || dato7==''){
        alert ('Llenar todos los campos para agregar cachorro');
    }
    else {
        const contenedor = document.createElement('div');
        contenedor.classList.add('card');
        contenedor.innerHTML = ` 
                <div class="buttons-container">
                    <button class="button-card edit" type="submit"> 
                        <img class="img-button" src="./edit.png" alt="">
                         <span class="text-button">Edit</span> 
                    </button>
                    <button class="button-card delete" type="submit">
                        <img class="img-button" src="./delete.png" alt="">
                        <span class="text-button">Delete</span> 
                     </button>
                </div>
                <div class="info-card">
                    <img src="${dato6}" alt="">
                    <h3>${dato1} ${dato2}</h3>
                    <h4>${dato3} | ${dato4}</h4>
                    <h5>${dato5}</h5>
                    <p>${dato7}</p> 
                </div>
            `;
        cardsContainer.appendChild(contenedor);
        limpiar();
        cerrar(e);
    }
}

    function limpiar(){
    inputName.value = '';
    inputLastName.value = '';
    inputEmail.value = '';
    inputPhone.value = '';
    inputImage.value = '';
    inputCountry.value ='0';
    textAreaInfo.value ='';
}
 


cardsContainer.addEventListener('click',borrar);
function borrar (e) {
    e.preventDefault();
    let clickelemento = e.target;
    if(clickelemento.className == 'img-button' || clickelemento.className == 'text-button'){
        let boton = e.target.parentElement;
        if(boton.className == 'button-card delete'){
            let infoCard = boton.parentElement.parentElement;
            eliminarCard(infoCard);
        }
    }
}

function eliminarCard(infoCard){
    infoCard.remove();
}



