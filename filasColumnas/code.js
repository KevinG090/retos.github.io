const containerTransferir = document.querySelector(".containerTransferir")
const filas = document.querySelector(".row") ;
const columna = document.querySelector(".colum");
let int = 0;
let transferir;

document.querySelector(".btnCrear").addEventListener("click",() =>{
    try{
        if(filas.value <= 0 || columna.value <= 0) throw "datos incorrectos, recuerda que deben ser mayor a 0";
        else {
            const contenedorRest = document.querySelector(".containerRest");
            contenedorRest.innerHTML=""
            containerTransferir.innerHTML=""
            for (let i = 1 ; i <= filas.value ; i++){
                let divFilas = `<div class="fila${i}"></div>`;
                contenedorRest.insertAdjacentHTML("beforeEnd",divFilas);
                for(let j = 1 ; j <= columna.value ; j++ ){
                    let crearColumnas = `<input class="columna${j} type="text""></input>`;
                    document.querySelector(`.fila${i}`).insertAdjacentHTML("beforeEnd",crearColumnas)
                }
            }
            if(int == 0){
                let boton = `</br><input class="btnCrear btnTransferir" type="button" value="transferir">`;
                document.querySelector(".containerRest").insertAdjacentHTML("afterend",boton)
                int = 1
            }
            transferir = false;
            cargarDatos()
        }
    }catch(e){
        alert(e)
    }
})
function cargarDatos () {
    document.querySelector(".btnTransferir").addEventListener("click",() =>{
        if (transferir != true){
            containerTransferir.innerHTML=""
            let cantFilas = document.querySelectorAll(".containerRest > div");
            let cantColum ;
            cantFilas.forEach(row => {
                cantColum = (row.childNodes).length;
            });
            for (let j = 0 ; j < cantColum ; j++){
                let crearFilas = document.createElement("DIV");
                crearFilas.classList.add(`row${j+1}`);
                containerTransferir.appendChild(crearFilas)
                const columas = document.querySelectorAll(`.columna${j+1}`);
                columas.forEach((colum)=>{
                    let crearInput = `<input value="${colum.value}">`
                    document.querySelector(`.row${j+1}`).insertAdjacentHTML("beforeend",crearInput)
                    console.log(colum.value)
                })
            }
            transferir = true;
        }
    })
}


