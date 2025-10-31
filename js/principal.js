const { createElement } = require("react");

var titulo = document.querySelector("h1");
console.log(titulo);
console.log(titulo.textContent);
titulo.textContent = ("Curintia nutrição");

var pacientes = document.querySelectorAll(".paciente");
for (var i = 0; i < pacientes.length; i++) {

     var paciente = pacientes[i];

     var tdPeso = paciente.querySelector(".info-peso");
     var peso = tdPeso.textContent;

     var tdAltura = paciente.querySelector(".info-altura");
     var altura = tdAltura.textContent;

     var tdImc = paciente.querySelector(".info-imc");

     var pesoEhValido = true;
     var alturaEhValida = true;

     if (peso <= 0 || peso >= 1000) {
          console.log("Peso invalido");
          pesoEhValido = false;
          tdImc.textContent = "Peso ivalido";
     }

     if (altura <= 0 || altura >= 3.00) {
          console.log("Altura invalida!");
          alturaEhValida = false;
          tdImc.textContent = "Altura invalida";
     }

     if (alturaEhValida && pesoEhValido) {
          var imc = peso / (altura * altura);
          tdImc.textContent = imc;
     }
}


titulo.addEventListener("click", mostrarMensagem);
function mostrarMensagem(){
alert("Olá, eu fui clicado.")
}

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("cliclk", function(event){
     event.preventDefault();
     alert("Oi eu sou o botao e fui clicado");
})

var from = document.querySelector("#form-adiciona");


var nome = from.nome.value;
var peso = from.peso.value;
var altura = from.altura.value;
var gordura = from.gordura.value;

var pacienteTr = document.createElement("tr");

var nomeTd = document.createElement("td");
var pesoTd = document.createElement("td");
var alturaTd = document.createElement("td");
var gorduraTd = document.createElement("td");
var imcTd = document.createElement("td");

nomeTd.textContent = nome;
pesoTd.textContent = peso;
alturaTd.textContent = altura;
gorduraTd.textContent = gordura;