//creamos una constante donde guardaremos el formulario
  const form=document.suma;
//busco todos los botones creados en html por su id y los asigno a una constante
const suma=document.querySelector("#botons");
const resta=document.querySelector("#botonr");
const multiplica=document.querySelector("#botonm");
const divide=document.querySelector("#botond");
const agregaNumero=document.querySelector("#boton1"); 
constborrar=document.querySelector("#boton3"); 
//creo un contador para modificar los valores de id y de name, lo inicializo en 2 porque ya tengo dos input en html
var contador=2;
agregaNumero.addEventListener("click", function createInput() {
  contador++;
let div=document.createElement("div");  
div.setAttribute("id", "d+contador");
let input = document.createElement("input");
  input.setAttribute("type", "number");
  input.setAttribute("name", "n"+contador);
  input.setAttribute("id", "n" +contador);
  input.setAttribute("min", "0");
  input.setAttribute("max", "1000000");
  input.setAttribute("required", "required");
let label = document.createElement("label");
  label.setAttribute("for", "n" +contador);
  label.textContent="Escribe un número:";
// Agregar el div, input y el label al DOM
let container=document.querySelector("#formulario");
container .appendChild(div);
  container.appendChild(label);
  container.appendChild(input);
});
// Inicializamos la función sumar
suma.addEventListener("click", function() {
  const campos = document.querySelectorAll("input");
  let elementos = campos.length;
  let resultado= 0;
  for (let i = 0; i < elementos; i++) {
    var valores = campos[i].value;
    resultado=resultado+parseFloat(valores);
    const lista=document.querySelector("#result");
    const numeroIngresado=document.createElement("li");
    numeroIngresado.textContent =valores;
    lista.appendChild(numeroIngresado);   
  }
const cajaresult=document.querySelector("#result1");  
  const parrafo = document.querySelector("#pResultado");
  parrafo.textContent =`El resultado es ${resultado}`;
  cajaresult.appendChild(parrafo);
c});
//inicializamos la función resta
resta.addEventListener("click", function() {
  const campos = document.querySelectorAll("input");
  let elementos = campos.length;
  let resultado = parseFloat(campos[0].value); // Inicializar con el primer valor ingresado
  for (let i = 1; i < elementos; i++) { // Comenzar desde el segundo valor ingresado
    let valor = parseFloat(campos[i].value);
    resultado -= valor;
    const lista=document.querySelector("#result");
    const numeroIngresado = document.createElement("li");
    numeroIngresado.textContent = valor;
    lista.appendChild(numeroIngresado);   
  }

  const cajaresult = document.querySelector("#result1");  
  const parrafo = document.querySelector("#pResultado");
  parrafo.textContent = `El resultado es ${Math.abs(resultado)}`;
  cajaresult.appendChild(parrafo);
});

//inicializamos la función multiplica
multiplica.addEventListener("click", function() {
    const campos = document.querySelectorAll("input");
    let elementos = campos.length;
    let resultado= 1;
    for (let i = 0; i < elementos; i++) {
      var valores = campos[i].value;
      resultado=resultado*parseFloat(valores);
      const lista=document.querySelector("#result");
      const numeroIngresado=document.createElement("li");
      numeroIngresado.textContent =valores;
      lista.appendChild(numeroIngresado);   
    }
  const cajaresult=document.querySelector("#result1");  
    const parrafo = document.querySelector("#pResultado");
    parrafo.textContent =`El resultado es ${resultado}`;
    cajaresult.appendChild(parrafo);
  });
//inicializamos la función divide
divide.addEventListener("click", function() {
    const campos = document.querySelectorAll("input");
    let elementos = campos.length;
    let resultado = parseFloat(campos[0].value); // Inicializar con el primer valor ingresado    
    for(let i = 1; i < elementos; i++){
      var valores = campos[i].value;
      resultado=resultado/parseFloat(valores);
      const lista=document.querySelector("#result");
      const numeroIngresado=document.createElement("li");
      numeroIngresado.textContent =valores;
      lista.appendChild(numeroIngresado);   
    }
  const cajaresult=document.querySelector("#result1");  
    const parrafo = document.querySelector("#pResultado");
    parrafo.textContent =`El resultado es ${resultado}`;
    cajaresult.appendChild(parrafo);
  });

//inicializamos una función para eliminar resultados y recetear el formulario 
boton3.addEventListener("click", function reset(){
  form.reset();
//preguntamos si hay algún elemento div en el dom
const remover =document.querySelector("#desaparece");
//hacemos una condicional para saber si hay algún div en el dom 
if(remover==null){

}
else{
  remover.remove();
}
}
);