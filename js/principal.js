
     var titulo = document.querySelector("h1");
     console.log(titulo);
     console.log(titulo.textContent);
     titulo.textContent=("Curintia nutrição");

     var paciente = document.querySelector("primeir paciente");
     var tdNome = document.querySelector(".info-nome");
     var nome = tdNome.textContent;
     console.log(nome);

    

    
     var tdPeso = document.querySelector(".info-peso");
     var peso = tdPeso.textContent;
     console.log(peso);

    
     var tdAltura = document.querySelector(".info-altura");
     var altura = tdAltura.textContent;
     console.log(altura);
     
     var tdImc = document.querySelector(".info-imc");
     var imc = peso / (altura * altura) ;
     tdImc.textContent = imc;
     console.log(imc); 

     var pesoEhValido = true;
     var alturaEhValida = true;

     if(peso<0|| peso > 1000){
          console.log("Peso invalido");
          pesoEhValido = false;
}

if(altura <0|| altura > 3.00){
     console.log("Altura invalida!");
     alturaEhValida = false;
}

