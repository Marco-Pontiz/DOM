//agregando valores//
const compras = document.querySelector("ul");
const comida = ["Europa", "America", "Africa", "Asia", "Oceania"];

comida.forEach(item =>{
    const li = document.createElement("li");
    li.textContent = item;
    compras.appendChild(li)
})

//Modificando datos
let titulo = document.getElementById("Bienvenido")
console.log(Bienvenido.innerText );

Bienvenido.innerText = "Sea usted Bienvenido"
console.log(Bienvenido.innerText);

/*-------------------------------------*/

let paises = document.getElementById("Ecuador");
console.log(paises.innerText);

Ecuador.innerText = "Ecuador"
console.log(Ecuador.innerText);

//Eliminando datos

const lugar = document.getElementById("Eliminar")
Eliminar.remove();


