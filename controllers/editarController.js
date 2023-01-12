import { clientServices } from "../services/clientServices.js";

const formulario = document.querySelector('[data-form]');
const obtenerInformacion = async () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    if ( id === null){
        window.location.href = '../screens/error.html';
    }

    const nombre = document.querySelector('[data-nombre]');
    const email = document.querySelector('[data-email]');

    try{
        const perfil = await clientServices.detalleCliente(id);
        if(perfil.nombre && perfil.email){
            nombre.value = perfil.nombre;
            email.value = perfil.email;
        }else {
            throw new Error();
        }
    }catch(error){
        window.location.href = '../screens/error.html';
    }
};


obtenerInformacion();
formulario.addEventListener("submit", (event) =>{
    event.preventDefault();
    const nombre = document.querySelector('[data-nombre]').value;
    const email = document.querySelector('[data-email]').value;
    const id = new URL (window.location).searchParams.get('id');
    
    clientServices.editarCliente(nombre, email, id)
    .then( () => {
        window.location.href = '../screens/edicion_concluida.html';
    })
    .catch( (err) => console.log(err));
});



