import { clientServices } from "../services/clientServices.js";

const crearNuevaLinea = (nombre, email, id) => {
    const linea = document.createElement('tr');
    const contenido =   
    `<tr>
        <td class="td" data-td>${nombre}</td>
        <td>${email}</td>
        <td>
            <ul class="table__button-control">
                <li>
                    <a href="../screens/editar_cliente.html?id=${id}"
                    class="simple-button simple-button--edit">
                    Editar
                    </a>
                </li>
                <li>
                    <button class="simple-button simple-button--delete"
                    type="button" id="${id}" data-eliminar>
                    Eliminar
                    </button>
                </li>
            </ul>
        </td>
    </tr>`;
    linea.innerHTML = contenido;
    const eliminar = linea.querySelector('[data-eliminar]');

    eliminar.addEventListener('click', () =>{
        const id = eliminar.id;
        clientServices.eliminarCliente(id)
        .then( (response) => {
            console.log(response);
        })
        .catch( (err) => alert('ocurrio un error'));
    });
    return linea;
};

const tBody = document.querySelector('[data-table]');



clientServices.listaCliente().then( (data) =>{
    data.forEach( ({nombre, email, id}) => {
        const nuevaLinea = crearNuevaLinea(nombre, email, id);
        tBody.appendChild(nuevaLinea);
    });
}).catch( (error) => alert(`Ocurrio un error ${error}`));

