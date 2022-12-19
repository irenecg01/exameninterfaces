// irene cerezo gomez 
//
// Completar JS aqui


var formulario = document.getElementById("Formulario");
function mostrarFormulario(){ 
    var formulario = document.getElementById('Formulario');
    formulario.style.display = "block";  
  }

  function validarForm(){
      var verificar = true;
    nombre = document.getElementById("#nombre");if( !nombre.checked ) { return false;}
    sexo = document.getElementById("#sexo");if( !sexo.checked ) { return false;}
    edad = document.getElementById("#edad");if( !edad.checked ) { return false;}
    altura = document.getElementById("#altura");if( !altura.checked ) { return false;}
    peso = document.getElementById("#peso");if( !peso.checked ) { return false;}
    actividadfisica = document.getElementById("#actifisica");if( !actifisica.checked ) { return false;}
    
  }

  function enviado(){
      alert("Datos enviados con exito");
  }

