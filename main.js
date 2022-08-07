const nombre = document.querySelector('.nombre')
const numero = document.querySelector('.numero')
const direccion = document.querySelector('.direccion')
const btnagregartarea = document.querySelector('.btn-agregar-tareas')

const listadotareas = document.querySelector('.listado-tarea')

const db = window.localStorage

btnagregartarea.onclick = () => {
    let contacto = {
        id: Math.random(1,500),
        nombre: nombre.value,
        numero: numero.value,
        direccion: direccion.value,
    }
    guardarcontacto(db, contacto)
}

cargarcontactos(db, listadotareas)