function validarCampos() {
    const nombre = document.getElementById("nombre").value;
    const telefono = document.getElementById("telefono").value;
    const email = document.getElementById("email").value;
    const contraseña = document.getElementById("contraseña").value;
    const contraseñaconf = document.getElementById("contraseñaconf")
    const msj_error = document.getElementById("msj_error");
  
    msj_error.style.padding = "20px";
  
    var text;
    if (nombre.length < 7) {
      text = "Escribe tu nombre completo";
      msj_error.innerHTML = text;
      return false;
    }
    if (isNaN(telefono) || telefono.length != 10) {
      text = "Por favor, verifica tu número telefónico";
      msj_error.innerHTML = text;
      return false;
    }
    let telefonoRegEx = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
    if(telefonoRegEx.test(telefono)){
        msj_error="El formato del correo es incorrecto";
        showErrorMessage(msj_error);
        return false;
    }

    if (email.indexOf("@") == -1 || email.length < 6) {
      text = "Por favor, verifica tu correo electrónico";
      msj_error.innerHTML = text;
      return false;
    }
    let emailRegEx = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/
    if(emailRegEx.test(email)){
        msj_error="Por favor, verifica tu correo electrónico";
        showErrorMessage(msj_error);
        return false;
    }

    /*Especificaciones: mínimo 8 caracteres, una mayúscula, una minúscula, un número y un caracter especial*/
    if (contraseña.length < 8) {
      text = "Por favor escribe una contraseña de al menos 8 caracteres";
      msj_error.innerHTML = text;
      return false;
    }
    let contraseñaRegEx = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/
    if(contraseñaRegEx.test(contraseña)){
        msj_error="La contraseña debe contener: mínimo 8 caracteres, una mayúscula, una minúscula, un número y un caracter especial.";
        showErrorMessage(msj_error);
        return false;
    }
    /*Contraseña*/

    if (contraseñaconf.value == contraseña.value) {
      text = "Verifica tu contraseña";
      msj_error.innerHTML = text;
      return false;
    }
  }

  function limpiar() {
    document.getElementById("contact-form").reset();
    document.getElementById("msj_error").innerHTML = "";
  }
  const users[]; 
  boton.addEventListener("click", function(event){
    event.preventDefault();
    let isValid = true;
    let message = "";
    cleanWarnings ();

    if (isValid){
        let service = `{"nombre": "${$service_name.value}",
        "descripción": "${$service_description.value}"
    }`;
    services.push(JSON.parse(service)); //Agrega el array services al JSON
    localStorage.setItem("services", JSON.stringify(services));

    taskcompleted("El servicio ha sido guardado");
    $service_name.value="";
    $service_description.value="";
    $service_name.focus();
    }
  });