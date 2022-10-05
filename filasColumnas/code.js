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
        }
    }catch(e){
        alert(e)
    }
})