
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
     
   
     var imc = peso / (altura * altura) ;
     console.log(imc);