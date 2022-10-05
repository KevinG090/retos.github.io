const filas = document.querySelector(".row") ;
const columna = document.querySelector(".colum");
document.querySelector(".btnCrear").addEventListener("click",() =>{
    try{
        if(filas.value <= 0 || columna.value <= 0) throw "datos incorrectos, recuerda que deben ser mayor a 0";
        else {
            for (let i = 1 ; i <= filas.value ; i++){
                let crearFilas = document.createElement("TR");
                crearFilas.classList.add(`fila${i}`)
                document.querySelector(".tabla").appendChild(crearFilas);
                for(let j = 1 ; j <= columna.value ; j++ ){
                    let crearColumnas = document.createElement("TD");
                    crearColumnas.classList.add(`columna${j}`)
                    crearColumnas.innerHTML=`<input class="input${j}" type="text">`
                    document.querySelector(`.fila${i}`).appendChild(crearColumnas)
                }
            }
            let boton = `<input class="btnCrear btnTransferir" type="button" value="transferir">`;
            document.querySelector(".tabla").insertAdjacentHTML("afterend",boton)
            cargarDatos()
        }
    }catch(e){
        alert(e)
    }
})

function cargarDatos () {
    document.querySelector(".btnTransferir").addEventListener("click",() =>{
        let tabla =`<table class="segundaTabla"></table>`;
        document.querySelector(".btnTransferir").insertAdjacentHTML("afterend",tabla)
        let cantFilas = document.querySelectorAll("tr");
        let cantColum ;
        cantFilas.forEach(row => {
            cantColum = (row.childNodes).length;
        });
        for (let j = 0 ; j < cantColum ; j++){
            let crearFilas = document.createElement("TR");
            crearFilas.classList.add(`row${j+1}`);
            document.querySelector(`.segundaTabla`).appendChild(crearFilas)
            const columas = document.querySelectorAll(`.columna${j+1}`);
            columas.forEach((colum)=>{
                document.querySelector(`.row${j+1}`).appendChild(colum)
            })
        }
    })
}

