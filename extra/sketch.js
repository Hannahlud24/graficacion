function agregar(valor){
  document.getElementById("pantalla").value +=valor;
}
function limpiar(){
  document.getElementById("pantalla").value = "";
}
function calcular(){
  let resultado = eval(document.getElementById("pantalla").value);
  document.getElementById("pantalla").value = resultado;
}
function cambiarSigno(){
  let pantalla=document.getElementById("pantalla")
  let valor=parseFloat(pantalla.value)
  pantalla.value=valor*-1
}
function porcentaje(){
  let pantalla=document.getElementById("pantalla")
  let valor =parseFloat(pantalla.value)
  pantalla.value=valor/100
}
function activarCientifica(){
  let panel = document.getElementById("cientifica")
  if(panel.style.display === "none"){
  panel.style.display = "block";
}else{
  panel.style.display = "none";
}
}


function raiz(){
  let valor=document.getElementById("pantalla").value;
  document.getElementById("pantalla").value = Math.sqrt(valor);
}

function potencia(){
  let valor=document.getElementById("pantalla").value;
  document.getElementById("pantalla").value = Math.pow(valor);
}

function seno(){
  let valor=document.getElementById("pantalla").value;
  document.getElementById("pantalla").value = Math.sin(valor);
}
function coseno(){
  let valor=document.getElementById("pantalla").value;
  document.getElementById("pantalla").value = Math.cos(valor);
}
function tangente(){
  let valor=document.getElementById("pantalla").value;
  document.getElementById("pantalla").value = Math.tan(valor);
}


