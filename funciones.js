const guardarcontacto = (db, contacto) => {
    db.setItem(contacto.id, JSON.stringify(contacto))
    window.location.href = '/'
}

const cargarcontactos = (db, ParentNode) =>{
    let claves = Object.keys(db)

    for (clave of claves){
        let contacto = JSON.parse(db.getItem(clave))
       crearcontacto(ParentNode, contacto, db)
    }
}

const crearcontacto = (ParentNode, contacto, db) => {

    let divcontacto = document.createElement('div')
    let nombrecontacto = document.createElement('h3')
    let numerocontacto = document.createElement('p')
    let direccioncontacto = document.createElement('p')
    let iconoborrar = document.createElement('span')

    nombrecontacto.innerHTML = contacto.nombre
    numerocontacto.innerHTML = contacto.numero
    direccioncontacto.innerHTML = contacto.direccion
    iconoborrar.innerHTML = 'delete_forever'

    divcontacto.classList.add('tareas')
    iconoborrar.classList.add('material-symbols-outlined', 'icono')

    iconoborrar.onclick = () => {
        db.removeItem(contacto.id)
        window.location.href = '/'
    }

    divcontacto.appendChild(nombrecontacto)
    divcontacto.appendChild(numerocontacto)
    divcontacto.appendChild(direccioncontacto)
    divcontacto.appendChild(iconoborrar)

    ParentNode.appendChild(divcontacto)
}