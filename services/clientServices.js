const listaCliente = () => 
    fetch('http://localhost:3000/perfil')
    .then(response => response.json());


const crearCliente = (nombre, email) =>{
    return fetch('http://localhost:3000/perfil', {
        method: 'POST',
        headers: {
            "content-type": 'application/json'

        },
        body: JSON.stringify({
            nombre, email, id:uuid.v4()
        }),
    });
}

const eliminarCliente = (id) =>{
    return fetch(`http://localhost:3000/perfil/${id}`, {
        method: 'DELETE',
    })
}

const detalleCliente = (id) => {
    return fetch(`http://localhost:3000/perfil/${id}`)
    .then((response) => {
        return response.json();
    })
    .catch(err => console.log(err));
}

const editarCliente = (nombre, email, id) => {
    return fetch(`http://localhost:3000/perfil/${id}`, {
        method: 'PUT',
        headers: {
            "Content-type": 'application/json'
        },
        body: JSON.stringify({nombre, email}),
    }).then( (response) => response).catch( (err) => err);
}
    
export const clientServices = {
    listaCliente,
    crearCliente,
    eliminarCliente,
    detalleCliente,
    editarCliente,
};