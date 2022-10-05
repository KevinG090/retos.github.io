const filas = document.querySelector(".row") ;
const columna = document.querySelector(".colum");
document.querySelector(".btnCrear").addEventListener("click",() =>{
    alert(`fila ${filas.value} , columna ${columna.value}`)
})