const body = document.querySelector(".cuerpo-list")
let clase = 1
let array = new Array();
let editarInput= new Array();
document.querySelector(".crear").addEventListener("click",()=>{
    array[`item${clase}`]= "toDo";
    editarInput[`tarea${clase}`]= "true"
    let tarea = `
        <tr class="tarea${clase}">
            <td class=" item${clase} est check"><button onclick="cargarTareas()" class="botones btn${clase}"><img src="images/cancelar.png" alt=""></button></td>
            <td class=" item${clase} nombre"><input class="inputs input${clase}" type="text" value="tarea${clase}" readonly></td>
            <td class=" item${clase} opciones editar"><button onclick="editar()">editar</button></td>
            <td class=" item${clase} opciones eliminar"><button onclick="eliminar()">eliminar</button></td>
        </tr>
    `
    body.insertAdjacentHTML("beforeend",tarea)
    clase++
})

function cargarTareas () {
    let botones = document.querySelectorAll(".botones");
    botones.forEach((boton) =>{ 
        boton.addEventListener("click",() =>{
            let bloquePadre = boton.parentNode.classList[0];
            if (array[bloquePadre] == "toDo") {
                document.querySelector(`.${bloquePadre} > button > img`).src="images/cheque.png";
                const td = document.querySelectorAll(`.${bloquePadre}`)
                td.forEach((espacios) =>{
                    espacios.style.background="#10fa6a54";
                })
                array[bloquePadre] = "do";
            } else if (array[bloquePadre] == "do") {
                document.querySelector(`.${bloquePadre} > button > img`).src="images/cancelar.png";
                const td = document.querySelectorAll(`.${bloquePadre}`)
                td.forEach((espacios) =>{
                    espacios.style.background="#fa561054";
                })
                array[bloquePadre] = "toDo";
            }
        })
    })
}
function editar () {
    let editar = document.querySelectorAll(".editar")
    editar.forEach((edit) =>{
        edit.addEventListener("click",() =>{
            let bloquePadre = edit.parentNode.classList[0];
            if (editarInput[bloquePadre] == "true"){
                const input = document.querySelector(`.${bloquePadre} > .nombre > input`);
                input.readOnly=false
                input.style.background="white"
                editarInput[bloquePadre] = "false";
            }
            else if (editarInput[bloquePadre] == "false"){
                const input = document.querySelector(`.${bloquePadre} > .nombre > input`);
                input.readOnly=true;
                input.style.background="none"
                editarInput[bloquePadre] = "true";
            }
        })
    })
}
function eliminar () {
    let eliminar = document.querySelectorAll(".eliminar");
    eliminar.forEach((del) =>{
        del.addEventListener("click",() =>{
            let bloquePadre = del.parentNode.classList[0];
        document.querySelector(`.${bloquePadre}`).remove()
        })
    })
}






